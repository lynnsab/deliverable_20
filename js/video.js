var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.getElementById("player1");

	video.autoplay = false;
	video.loop = false;
	video.pause();
	video.volume = document.querySelector("#slider").value / 100;

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	updateVolumeInfo();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

let speed = 1.0;
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	speed -= 0.1;
	video.playbackRate = speed;
	console.log('New Speed:', speed);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video")
	speed += 0.1;
	video.playbackRate = speed;
	console.log('New Speed:', speed);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead Video")
	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0;
	}
	console.log('Current video location:', video.currentTime);
});

let isMuted = false;
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Muted Video")
	if (isMuted) {
		video.muted = false;
		document.querySelector("#mute").textContent = 'Mute';
		isMuted = false;
	} else {
		video.muted = true;
		document.querySelector("#mute").textContent = 'Unmute';
		isMuted = true;
	}
});

document.querySelector("#slider").addEventListener('input', function() {
	console.log("Slider Video")
	video.volume = this.value / 100;
	updateVolumeInfo();
});

function updateVolumeInfo() {
	console.log("Volume Updated");
	document.querySelector("#volume").textContent = Math.round(video.volume * 100) + '%';
}

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
});
