let videoMediaRecorder
let recordingMediaRecorder
let upload
const videoStart = document.querySelector('#video-start')
const videoDownload = document.querySelector('#video-download')
const recordingStart = document.querySelector('#recording-start')
const recordingDownload = document.querySelector('#recording-download')

videoStart.addEventListener('click', () => {
    if (!cameraStream) return
    //const currentStream = cameraStream
    const options = {
        // audioBitsPerSecond: 128000,
        // videoBitsPerSecond: 2500000,
        mimeType: 'video/webm;codecs=vp8'
    }
    const mediaRecorder = new MediaRecorder(cameraStream, options)
    videoMediaRecorder = mediaRecorder
    mediaRecorder.addEventListener('dataavailable', e => {
        const blob = new Blob([e.data], { type: 'video/webm' })
        upload = blob
        const downloadLink = document.createElement('a')
        downloadLink.href = window.URL.createObjectURL(blob)
        downloadLink.download = 'videoName'
        downloadLink.click()
    })
    mediaRecorder.start()
})

videoDownload.addEventListener('click', () => {
    if (!videoMediaRecorder) return
    videoMediaRecorder.stop()
})

recordingStart.addEventListener('click', () => {
    if (!cameraStream && !screenStream) return
    const currentStream = cameraStream || screenStream
    const options = {
        audioBitsPerSecond: 128000,
        mimeType: 'audio/webm'
    }
    const mediaRecorder = new MediaRecorder(currentStream, options)
    recordingMediaRecorder = mediaRecorder
    mediaRecorder.addEventListener('dataavailable', e => {
        const blob = new Blob([e.data], { type: 'audio/webm' })
        const downloadLink = document.createElement('a')
        downloadLink.href = window.URL.createObjectURL(blob)
        downloadLink.download = 'recordingName'
        downloadLink.click()
    })
    mediaRecorder.start()
})

recordingDownload.addEventListener('click', () => {
    if (!recordingMediaRecorder) return
    recordingMediaRecorder.stop()
})