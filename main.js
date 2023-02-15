/* play pause button */

// target the button
let playPauseButton = document.querySelector("#play-pause-button");

// target video 
let theVideo = document.querySelector(".video");

// target the moving block
let movingBlock = document.querySelector(".video-container #play-pause-button span:last-child");

// button click event 
playPauseButton.addEventListener("click" , function () {
    if (!playPauseButton.classList.contains("pause")) {
        // change the position of moving block
        playPauseButton.classList.add("pause");
        // pause video
        theVideo.pause();
        // change the text inside
        movingBlock.innerHTML = `pausing`;
    } else {
        // change the position of moving block
        playPauseButton.classList.remove("pause");
        // play video
        theVideo.play();
        // change the text inside
        movingBlock.innerHTML = `playing`;
    }
});

/* play pause button */

/* pre loader */

// target pre loader
let preLoader = document.querySelector(".pre-loader");

// hide pre loader when all content is loaded
window.addEventListener("load" , function () {
    preLoader.classList.add("hide-pre-loader");
})

/* pre loader */