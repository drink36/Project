let screenshotBlobUrl
const screenshot = document.querySelector('#screenshot')
const screenshotDownload = document.querySelector('#screenshot-download')
const img = document.querySelector('#img')
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

screenshot.addEventListener('click', () => {
    if (!cameraStream && !screenStream) return
    const width = video.offsetWidth
    const height = video.offsetHeight
    canvas.width = width
    canvas.height = height
    ctx.drawImage(video, 0, 0, width, height)
    canvas.toBlob(blob => {
        screenshotBlobUrl = window.URL.createObjectURL(blob)
        img.src = screenshotBlobUrl
    })
})

screenshotDownload.addEventListener('click', () => {
    if (!screenshotBlobUrl) return
    const downloadLink = document.createElement('a')
    downloadLink.href = screenshotBlobUrl
    downloadLink.download = 'fileName'
    downloadLink.click()
})