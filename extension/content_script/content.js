// if (navigator.mediaDevices) {
//     navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
//         chrome.runtime.sendMessage({ type: 'stream', stream: stream });
//     }).catch(function (err) {
//         if (err.name === 'NotAllowedError') {
//             console.log('NotAllow: ', err);
//             alert('Please allow camera access in order to use this feature.');
//         }
//         else if (err.name === 'PermissionDeniedError') {
//             console.error('Permission denied。');
//         }
//         else if (err.name === 'NotFoundError') {
//             console.error('No webcam。');
//         }
//         else if (err.name === 'NotReadableError') {
//             console.error('Can not read webcam。');
//         }
//         else if (err.name === 'OverconstrainedError') {
//             console.error('Wrong constrain。');
//         }
//         else if (err.name === 'SecurityError') {
//             console.error('Wrong Security。');
//         }
//         else if (err.name === 'TypeError') {
//             console.error('Type error: Wrong Webcam。');
//         }
//         else {
//             console.error('Unknown Error ' + err.name);
//         }
//     });
// }
// else {
//     console.error('No mediaDevices。');
// }