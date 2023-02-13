// background.js

// Get access to the user's webcam
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        // Create a floating window
        chrome.app.window.create('window.html', {
            bounds: {
                width: 640,
                height: 480
            }
        }, win => {
            // Send the webcam stream to the window
            win.contentWindow.postMessage({ type: 'stream', stream: stream }, '*');
        });
    });
