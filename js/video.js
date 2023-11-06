var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
window.addEventListener("load", function() {
    video = document.getElementById("player1");
    video.autoplay = false;
    video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
    video.play();
    console.log("Video is playing");
    updateVolumeInfo();
});

document.querySelector("#pause").addEventListener("click", function() {
    video.pause();
    console.log("Video is paused");
});

document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate -= 0.1;
    console.log("New speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate += 0.1;
    console.log("New speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    video.currentTime += 10;
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }
    console.log("Current location: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted) {
        video.muted = false;
        this.textContent = "Mute";
    } else {
        video.muted = true;
        this.textContent = "Unmute";
    }
});

document.querySelector("#slider").addEventListener("input", function() {
    video.volume = this.value / 100;
    updateVolumeInfo();
});

function updateVolumeInfo() {
    document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
}

document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});


