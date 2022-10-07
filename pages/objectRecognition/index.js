import { useEffect, useRef, useState } from 'react'
import { Objectron, BOX_CONNECTIONS } from '@mediapipe/objectron'
import { Camera } from '@mediapipe/camera_utils'
import drawingUtils from '@mediapipe/drawing_utils'
import { isMobile } from 'react-device-detect'

function App() {
	const [model, setModel] = useState('Shoe')
	const videoElement = useRef(null)
	const canvasElement = useRef(null)
	console.log('🚀 ~ file: index.js ~ line 6 ~ isMobile', isMobile)

	useEffect(() => {
		const videoElement = document.getElementsByClassName('input_video')[0]
		const canvasElement = document.getElementsByClassName('output_canvas')[0]
		const canvasCtx = canvasElement.getContext('2d')

		function onResults(results) {
			canvasCtx.save()
			canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height)
			if (results.objectDetections) {
				for (const detectedObject of results.objectDetections) {
					console.log('🚀 ~ file: App.js ~ line 27 ~ onResults ~ detectedObject', detectedObject)
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
			modelName: model,
			maxNumObjects: 3,
		})

		objectron.onResults(onResults)

		const camera = new Camera(videoElement, {
			onFrame: async () => {
				await objectron.send({ image: videoElement })
			},
			width: 1280,
			height: 720,
		})
		camera.start()
	}, [model])

	return (
		<div className='App'>
			<select style={{ marginLeft: '15vw' }} value={model} onChange={e => setModel(e.target.value)}>
				<option value='Chair'> Chairs</option>
				<option value='Cup'> Cups</option>
				<option value='Camera'> Cameras</option>
				<option value='Shoe'>Shoes</option>
			</select>
			<div style={{ margin: 'auto', width: 'fit-content' }}>
				{isMobile ? (
					<video
						style={{ width: '500px', height: '800px', backgroundColor: 'red' }}
						ref={videoElement}
						id='camera--view'
						autoPlay
					></video>
				) : (
					<video style={{ display: 'none' }} ref={videoElement} className='input_video'></video>
				)}
				<canvas ref={canvasElement} className='output_canvas' width='1280px' height='720px'></canvas>
			</div>
		</div>
	)
}

export default App
