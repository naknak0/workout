const h1 = document.querySelector("h1");
const box = document.querySelector(".box"); //box의 위치주자

window.addEventListener("mousemove", (e) => {
  console.log(e.pageX, e.pageY);
  h1.innerText = `x: ${e.pageX}, y: ${e.pageY}`;
  box.style.top = e.pageY + "px"; //Y축이 마우스 이동에 따라 같이 움직임
  box.style.left = e.pageX + "px";
});
//마우스이동시 mousemove라는 이벤트처리가 가능함 값을 가지고 마우스 움직여 화면너비줌
