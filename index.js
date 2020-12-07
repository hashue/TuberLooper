"use strict";

const tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;


function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        width: "640",
        height: "360",
        events: {
            onStateChange: onPlayerStateChange,
        },
        playerVars: {
            loop: 1,
        },
    });
}

console.log(player);

const url = document.getElementById("url");

url.addEventListener("input", () => {
    let id = url.value.split("v=")[1];
    console.log(id);

    if (id) {
        const ampersandPosition = id.indexOf("&");
        if (ampersandPosition != -1) {
            id = id.substring(0, ampersandPosition);
        }
    } else {
    }
    player.loadVideoById({ videoId: id });
});

function onPlayerStateChange(event) {
    console.log(event);

    let status = event.data;

    if (status == 0) {
        player.playVideo();
    }
}
