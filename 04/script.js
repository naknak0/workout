const Body = document.querySelector("body");
const Nav_btn = document.querySelector("#nav_icon");

Nav_btn.addEventListener("click", () => {
  Body.classList.toggle("nav_active");
});

// const sec2_reset = () => {};
const sec0 = () => {
  // anime사이트 line drawing복붙 (글자 그려지는 효과)
  anime({
    targets: ".svg1 path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 3500,
    delay: function (el, i) {
      return i * 250;
    },
    direction: "alternate",
    loop: true,
  });
};
const sec1 = () => {
  console.log("sec1");
};
const sec2 = () => {
  console.log("sec2");
};
const sec3 = () => {
  console.log("sec3");
};
const sec4 = () => {
  console.log("sec4");
};

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num4"],
  afterLoad: (old_elem, new_elem, direction) => {
    //old:도착직전페이지
    if (new_elem.index === 0) {
      //현재페이지0오면 섹션실행시켜줘
      sec0();
    }
    if (new_elem.index === 1) {
      //현재페이지0오면 섹션실행시켜줘
      sec1();
    }
    if (new_elem.index === 2) {
      //현재페이지0오면 섹션실행시켜줘
      sec2();
    }
    if (new_elem.index === 3) {
      //현재페이지0오면 섹션실행시켜줘
      sec3();
    }
    if (new_elem.index === 4) {
      //현재페이지0오면 섹션실행시켜줘
      sec4();
    }
  },
});
