const box = document.querySelector(".box");
box.addEventListener("dragenter", () => {
  console.log("드래그엔터 이벤트"); //반경에 들어오자마자 뜬다
});

box.addEventListener("dragover", () => {
  console.log("드래그오버 이벤트"); //반경에 들어오자마자 뜬다
});
box.addEventListener("dragleave", () => {
  console.log("드래그리브 이벤트"); //반경에 들어오자마자 뜬다
});
box.addEventListener("dragdrop", () => {
  e.preventDefault();
  console.log("드래그드랍 이벤트"); //반경에 들어오자마자 뜬다
});
