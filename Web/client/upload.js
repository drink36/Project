const uploadStart = document.querySelector('#video-transefer')
uploadStart.addEventListener('click', () => {
    const data = new FormData();
    data.append('video', upload, 'video.webm');
    fetch('http://127.0.0.1:5000/analyze', {
        method: 'POST',
        body: data
    }).then(response => response.json()
    ).then(json => {
        console.log(json)
    });
});