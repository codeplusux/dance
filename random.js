//Array videos
var videosArray = [
  {
    id: "id1",
    name: "Rappi",
    path: "videos/rappi.mp4",
  },
  {
    id: "id2",
    name: "Trivago",
    path: "videos/trivago.mp4",
  },
  {
    id: "id3",
    name: "Apple",
    path: "videos/apple.mp4",
  },
  {
    id: "id4",
    name: "Calm",
    path: "videos/calm.mp4",
  },
];

//Random display
function nextDance() {
  const { name, path } = videosArray[
    Math.floor(Math.random() * videosArray.length)
  ];
  document.getElementById("hero").innerHTML = name;
  document.getElementById("stage").src = path;
}

window.onload = function () {
  const { name, path } = videosArray[
    Math.floor(Math.random() * videosArray.length)
  ];
  document.getElementById("hero").innerHTML = name;
  document.getElementById("stage").src = path;

  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    document
      .getElementsByClassName("mobileAlert")
      .element.classList.remove("hide");
  } else {
    console.log("desktop");
  }
};
