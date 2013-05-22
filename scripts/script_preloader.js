var loaderAnimation = $("#html5Loader").LoaderAnimation();

$.html5Loader({
		getFilesToLoadJSON:'preload/files.json',
		onUpdate: loaderAnimation.update
});
