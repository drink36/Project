//router - listen for actions
chrome.extension.onMessage.addListener(data => {
	switch (data.action) {
		case 'get-device-access': get_device_access(data.params); break;
	}
});

//get device access
get_device_access = (params) => {
	navigator.mediaDevices.getUserMedia(params.constraints).then(stream => {
		alert('Thanks for granting access!  You can now use '+params.app_name+' to start recording when you are ready.');
	});
};

