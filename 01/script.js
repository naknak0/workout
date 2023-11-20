const path = anime.path(".svg path"); // .path경로를 줄것 svg안에 있는 path경로

anime({
  targets: ".circle", //회전하는 div 이름
  translateX: path("x"),
  translateY: path("y"),
  rotate: path("angle"),
  easing: "linear",
  duration: 10000, //10초간 천천히 움직여~
  loop: true,
});
