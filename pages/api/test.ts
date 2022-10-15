import { Camera } from '@mediapipe/camera_utils'
import { KnownModel, Objectron } from '@mediapipe/objectron'
import { Server } from 'Socket.IO'

const SocketHandler = (req, res) => {
	// const objectron = new Objectron({
	// 	locateFile: file => {
	// 		return `https://cdn.jsdelivr.net/npm/@mediapipe/objectron/${file}`
	// 	},
	// })

	// objectron.setOptions({
	// 	modelName: 'Shoe',
	// 	maxNumObjects: 3,
	// })
	if (res.socket.server.io) {
		console.log('Socket is already running')
	} else {
		console.log('Socket is initializing')
		const io = new Server(res.socket.server)
		res.socket.server.io = io
		console.log('Socket is already running')
	}
	res.socket.server.io.on('connection', (socket: any) => {
		socket.on('test', () => {
			const camera = new Camera(videoElement, {
				onFrame: async () => {
					console.log('🚀 ~ file: index.js ~ line 83 ~ ; ~ videoElement', videoElement)
					console.log('first')
					socket.emit('cameraImage', JSON.stringify({ image: { ...videoElement } }))
				},
				width: 380,
				height: 320,
			})
		})

		socket.on('cameraImage', async () => {
			console.log('first')

			// objectron.onResults(result => {
			// 	socket.emit('treatedImage', result)
			// })

			// await objectron.send(frame)
		})
	})

	res.end()
}

export default SocketHandler
