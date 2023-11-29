const h1 = document.querySelector("h1");
const box = document.querySelector(".box"); //box의 위치주자
let x = 0;
let y = 0;
//타켓:목표지점으로 따라가는 해당 아이템
let targetX = 0;
let targetY = 0;
//속도
let speed = 0.03;
window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
  h1.innerText = `x: ${x}, y: ${y}`;
  box.style.top = e.pageY + "px"; //Y축이 마우스 이동에 따라 같이 움직임
  box.style.left = e.pageX + "px"; //x축으로 움직임
  const loop = () => {
    targetX += x = targetX;
  };
  loop();
});
