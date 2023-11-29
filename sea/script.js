//심해의 깊이 나타내주는 정의
const depthWrap = document.querySelector(".depthWrap");
//스크롤 위치에 따라 이동해야하는 바 정의
const progressBar = document.querySelector(".bar");
//잠수함에 대한 정의
const submarine = document.querySelector(".submarine");
//스크롤 위치에 따라 정의해야하는 문어에 대한 정의
const octopus = document.querySelector(".octopus");
//현재 스크롤에 대한 위치값
let scrollNum = 0;
//현재 문서의 길이값
let documentHeight = 0;
//문서 총 길이 대비 스크롤 위치값에 퍼센트
let per = 0;

const percent = (num, totalNum) => {
  return ((num / totalNum) * 100).toFixed(0);
};
window.addEventListener("scroll", () => {
  scrollNum = window.scrollY; //스크롤에 대한 위치값이 변경되고 있음
  documentHeight = document.body.scrollHeight = window.innerHeight;
  per = percent(scrollNum, documentHeight);
  depthWrap.querySelector("span").innerText = scrollNum.toFixed(0);
  progressBar.style.width = per + "%";
  submarine.style.transform = `translateX(${per}%)`;
  octopus.style.transform = `translateY(${-per / 2}%)`; //위아래움직임, 위올라오니-
});
