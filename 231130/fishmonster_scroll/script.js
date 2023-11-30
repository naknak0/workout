// 사전 정의 필요한 부분
// 1. 마우스 휠 스크롤시 상단 사라짐
// 2. 하단부 밑에서 올라옴
// 3. 중간부분에서 프로그래스바가 나타남

// 우리 컴픂터 스크롤이동에 대한 값을 도출함
// window -> scrollY 값을 도출함

//위 값이 도출된다면 위에 정리한 1~3번 효과가 발생해야 한다 -> addEventListener

//상단부가 없어지려면 상단부가 무엇인지 컴퓨터에게 알려줘야 한다
//상단부: 헤더,프로그래스바,컨텐츠랩,fillter,커버랩

//위에 효과인 상단부가 없어짐 동시 하단부 위로 올라옴
//하단부: 컨텐츠 랩

//컴퓨터에 알려줘야 하는 정의
// 사라질 애
const header = document.querySelector("header");
const coverTitle = document.querySelector(".coverTitle");
const progressBar = document.querySelector(".bar");
const coverWrap = document.querySelector(".coverWrap");
const dimd = document.querySelector(".dimd");
//튀어나오는애
const contWrap = document.querySelector(".contWrap");
//스크롤바 전체 문서에서 얼만큼의 위치를 차지하고 있는지 -> 전체 문서대비 %
let scrollNum = 0; //스크롤위치
let documentHeight = 0; //문서높이
let per = 0; //스크롤이 전체 문서중 몇 %?
// 현재 확인가능한 화면 영역의 높이
const coverHeight = window.innerHeight; //전체문서에서 이 친구를 빼줘야함
coverWrap.style.height = coverHeight + "px";
contWrap.style.marginTop = coverHeight + "px";

//현재의 스크롤 위치에 대한 %를 구하는 공식을 담고 있는 함수
const percent = (num, totalNum) => {
  return ((num / totalNum) * 100).toFixed(0); //퍼센트구하는 공식
};
window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight;
  per = percent(scrollNum, documentHeight); //()의결과값은 per로 나온다
  progressBar.style.width = per + "%";
  if (scrollNum >= coverHeight) {
    header.classList.add("fixed"); //문서높이값 만큼 내려오면 그때 클래스fixed만듦
  } else {
    header.classList.remove("fixed");
    coverTitle.style.top = `${-scrollNum / 5}px`;
    coverWrap.style.backgroundPosition = `center ${-scrollNum / 15}px`;
    dimd.style.backgroundColor = `rgba(0, 0, 0, ${0.4 + scrollNum / 1000})`;
  }
});
