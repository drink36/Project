

// 取得視訊串流
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.stream) {
    var video = document.querySelector('video');
    video.src = window.URL.createObjectURL(stream);
  }
  else {
    console.error('No stream');
  }

});
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
if (navigator.mediaDevices) {
  navigator.getUserMedia({ video: true }).then(function (stream) {
    video = document.querySelector('video');
    video.src = window.URL.createObjectURL(stream);
  }).catch(function (err) {
    if (err.name === 'NotAllowedError') {
      console.log('NotAllow: ', err);
      alert('Please allow camera access in order to use this feature.');
    }
    else if (err.name === 'PermissionDeniedError') {
      console.error('Permission denied。');
    }
    else if (err.name === 'NotFoundError') {
      console.error('No webcam。');
    }
    else if (err.name === 'NotReadableError') {
      console.error('Can not read webcam。');
    }
    else if (err.name === 'OverconstrainedError') {
      console.error('Wrong constrain。');
    }
    else if (err.name === 'SecurityError') {
      console.error('Wrong Security。');
    }
    else if (err.name === 'TypeError') {
      console.error('Type error: Wrong Webcam。');
    }
    else {
      console.error('Unknown Error ' + err.name);
    }
  });
}
else {
  console.error('No mediaDevices。');
}

// 擷取影像並將其繪製到Canvas上
const capture = document.querySelector('#capture');
if (capture) {
  capture.addEventListener('click', function () {

    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');
    var video = document.querySelector('video');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // 將影像轉換為Base64字符串格式並向主機發送
    var imageData = canvas.toDataURL('image/png');
    // ...
  });
}