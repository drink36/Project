let cameraStream
let screenStream
const camera = document.querySelector('#camera')
const stop = document.querySelector('#stop')
const video = document.querySelector('#video')

function stopAllStream() {
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => {
            track.stop()
        })
        cameraStream = null
    }
}

const constraints = { audio: true, video: true }
camera.addEventListener('click', () => {
    const c1280 = {
        video: { width: { exact: 1280 }, height: { exact: 720 } }
    };
    navigator.mediaDevices.getUserMedia(constraints).then(stream => {
        stopAllStream()
        cameraStream = stream
        video.srcObject = stream
        video.play()
    })
})
stop.addEventListener('click', stopAllStream)
