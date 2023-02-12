// Get references to the video element and the start and stop buttons
const videoElement = document.getElementById('video');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

// Disable the stop button initially
stopButton.disabled = true;
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(error => {
        console.error(error);
    });
// Get the user's media stream when the start button is clicked
startButton.addEventListener('click', async () => {
    try {
        // Request the user's media stream
        // const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });

        // // Connect the media stream to the video element
        // videoElement.srcObject = mediaStream;

        // // Wait for the video to load and play
        // await new Promise((resolve) => {
        //     videoElement.onloadedmetadata = () => {
        //         videoElement.play();
        //         resolve();
        //     };
        // });

        // Enable the stop button
        stopButton.disabled = false;

        // Disable the start button
        startButton.disabled = true;
    } catch (error) {
        console.error(error);
    }
});

// Stop the media stream when the stop button is clicked
stopButton.addEventListener('click', () => {
    // Get the media stream tracks
    const tracks = videoElement.srcObject.getTracks();

    // Stop each media stream track
    tracks.forEach((track) => {
        track.stop();
    });

    // Reset the video element
    videoElement.srcObject = null;

    // Enable the start button
    startButton.disabled = false;

    // Disable the stop button
    stopButton.disabled = true;
});
// Create an XHR object
const xhr = new XMLHttpRequest();

// Open the XHR request
xhr.open('POST', 'http://127.0.0.1:5000/analyze');

// Set the XHR request headers
xhr.setRequestHeader('Content-Type', 'video/webm');

// Send the video data to the server when the XHR is ready
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log('Video data sent to server');
    }
};

// Create a blob from the media stream
const blob = new Blob([videoElement.srcObject], { type: 'video/webm' });

// Send the blob to the server
xhr.send(blob);
