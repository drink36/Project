// // 接收來自popup.js的影像數據並將其傳輸到主機
// chrome.runtime.onMessage.addListener(
//   function (request, sender, sendResponse) {
//     if (request.imageData) {
//       // 將影像數據轉換為Blob並通過XHR向主機發送
//       var imageBlob = dataURItoBlob(request.imageData);
//       var xhr = new XMLHttpRequest();
//       xhr.open('POST', 'https://example.com/image_upload', true);
//       xhr.onload = function () {
//         if (xhr.status === 200) {
//           // 接收到主機的處理結果並回傳給popup.js
//           sendResponse({ result: xhr.responseText });
//         }
//       };
//       xhr.send(imageBlob);
//     }
//   });

// // 將Base64字符串格式的影像數據轉換為Blob格式
// function dataURItoBlob(dataURI) {
//   var byteString = atob(dataURI.split(',')[1]);
//   var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
//   var buffer = new ArrayBuffer(byteString.length);
//   var intArray = new Uint8Array(buffer);
//   for (var i = 0; i < byteString.length; i++) {
//     intArray[i] = byteString.charCodeAt(i);
//   }
//   return new Blob([buffer], { type: mimeString });
// }
if (navigator.mediaDevices) {
  navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
    var video = document.querySelector('video');
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
  //alert('No mediaDevices。');
}