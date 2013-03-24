$(document).ready(function(){
	// init project image animation

	if ($('#image-nav').length) {
  		initProjectImages();
	}
});

var imgArray = [];
var index = 0;

function initProjectImages() {
	imgArray = $('img.project');
	updateControls();
	setClickEvents();

	console.log('images: ' + imgArray.length);
}

function updateControls() {
	if (imgArray.length < 1) {
		$('#previous').hide();
	} else {
		$('#previous').show();
	}

	if (imgArray.length > 0) {
		$('#next').show();
	} else {
		$('#next').hide();
	}

	if (imgArray.length > 0) {
		var current = index+1;
		$('#image-nav > span').text('XX: image ' + current + ' of ' + imgArray.length);
	}
}

function setClickEvents(imgArray) {
	$('#previous').click(function(){
		nextImage();
	});

	$('#next').click(function(){
		previousImage();
	});
}

function nextImage() {
	if (index < imgArray.length) {
		index++;
		moveImage(index);
	}
}

function previousImage() {
	if (index > imgArray.length) {
		index--;
		moveImage(index);
	}
}

function moveImage() {
	updateControls();
}


