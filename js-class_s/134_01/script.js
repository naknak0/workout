const character = document.querySelector(".character");
console.log(character);
//클릭이벤트, 스크롤이벤트, 마우스무브이벤트
// dragstart : 드래그를 시작한 시점
// drag : 드래그를 하고 있는 시점
// dragend : 드래그가 완료된 시점
character.addEventListener("drag", () => {
  console.log("드래그이벤트진행중");
});
