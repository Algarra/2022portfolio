import { useEffect, useRef, useState } from 'react'
import { BOX_CONNECTIONS, Objectron } from '@mediapipe/objectron'
import { Camera } from '@mediapipe/camera_utils'
import drawingUtils from '@mediapipe/drawing_utils'
import { io } from 'socket.io-client'
// import { isMobile } from 'react-device-detect'

function App() {
	const [model, setModel] = useState('Shoe')

	const canvasElement = useRef(null)

	useEffect(() => {
		;(async () => {
			await fetch('/api/test')
			// const constraints = {
			// 	video: {
			// 		width: {
			// 			min: 1280,
			// 			ideal: 1920,
			// 			max: 2560,
			// 		},
			// 		height: {
			// 			min: 720,
			// 			ideal: 1080,
			// 			max: 1440,
			// 		},
			// 		facingMode: 'environment',
			// 	},
			// }

			// const videoStream = isMobile ? await navigator.mediaDevices.getUserMedia(constraints) : undefined
			const videoElement = document.getElementById('gum-local')

			// if (videoStream) videoElement.srcObject = videoStream

			const socket = io()

			const canvasElement = document.getElementsByClassName('output_canvas')[0]
			const canvasCtx = canvasElement.getContext('2d')

			function onResults(results) {
				canvasCtx.save()
				canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height)
				if (results.objectDetections) {
					for (const detectedObject of results.objectDetections) {
						// Reformat keypoint information as landmarks, for easy drawing.
						const landmarks = detectedObject.keypoints.map(x => x.point2d)
						// Draw bounding box.
						drawingUtils.drawConnectors(canvasCtx, landmarks, BOX_CONNECTIONS, {
							color: '#FF0000',
						})

						// Draw centroid.
						drawingUtils.drawLandmarks(canvasCtx, [landmarks[0]], {
							color: '#FFFFFF',
						})
					}
				}
				canvasCtx.restore()
			}

			const objectron = new Objectron({
				locateFile: file => {
					return `https://cdn.jsdelivr.net/npm/@mediapipe/objectron/${file}`
				},
			})

			objectron.setOptions({
				modelName: 'Shoe',
				maxNumObjects: 3,
			})

			const camera = new Camera(videoElement, {
				onFrame: async () => {
					await objectron.send({ image: videoElement })
				},
				width: 380,
				height: 320,
			})

			objectron.onResults(result => {
				// socket.emit('treatedImage', result)
				onResults(result)
			})

			// socket.on('treatedImage', result => {
			// 	onResults(result)
			// })

			camera.start()
		})()
	}, [model])

	useEffect(() => {
		const constraints = {
			audio: false,
			video: { facingMode: 'environment' },
		}

		function handleSuccess(stream) {
			const video = document.querySelector('video')
			const videoTracks = stream.getVideoTracks()
			console.log('Got stream with constraints:', constraints)
			console.log(`Using video device: ${videoTracks[0].label}`)
			window.stream = stream // make variable available to browser console
			video.srcObject = stream
		}

		function handleError(error) {
			if (error.name === 'OverconstrainedError') {
				const v = constraints.video
				errorMsg(`The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`)
			} else if (error.name === 'NotAllowedError') {
				errorMsg(
					'Permissions have not been granted to use your camera and ' +
						'microphone, you need to allow the page access to your devices in ' +
						'order for the demo to work.'
				)
			}
			errorMsg(`getUserMedia error: ${error.name}`, error)
		}

		function errorMsg(msg, error) {
			console.log('🚀 ~ file: index.js ~ line 114 ~ errorMsg ~ msg', msg)
			// const errorElement = document.querySelector('#errorMsg')
			// errorElement.innerHTML += `<p>${msg}</p>`
			if (typeof error !== 'undefined') {
				console.error(error)
			}
		}

		;(async e => {
			try {
				const stream = await navigator.mediaDevices.getUserMedia(constraints)
				handleSuccess(stream)
				// e.target.disabled = true
			} catch (e) {
				handleError(e)
			}
		})()
	}, [])

	return (
		<div className='App'>
			<select style={{ marginLeft: '15vw' }} value={model} onChange={e => setModel(e.target.value)}>
				<option value='Chair'> Chairs</option>
				<option value='Cup'> Cups</option>
				<option value='Camera'> Cameras</option>
				<option value='Shoe'>Shoes</option>
			</select>
			<div style={{ margin: 'auto', width: 'fit-content' }}>
				<video id='gum-local' style={{ display: 'none' }} autoPlay playsInline facingMode='environment'></video>
				<canvas ref={canvasElement} className='output_canvas' width='1280px' height='720px'></canvas>
			</div>
		</div>
	)
}

export default App
