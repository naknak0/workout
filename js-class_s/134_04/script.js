//이미지 드랍을 진행할 공간에 대한 정의
const fileZone = document.querySelector(".file-zone");
const imagePreviewArea = document.querySelector(".image_list");
// filezone영역에 이미지 드랍 되었단 사실을 알 수 있도록 이벤트 정의
fileZone.addEventListener("dragover", (e) => {
  e.preventDefault();
}); //이벤트를 넣어주자
const displayImages = (transferedFiles) => {
  const imageFileList = []; // 들어온 배열을 이미지에 넣고 싶어
  const fileNum = transferedFiles.length; //파일의 숫자까지 출력
  for (let i = 0; i < fileNum; i++) {
    if (transferedFiles[i].type.match("image.*") === false) {
      //*:이미지의 타입 속성만 가지고 있다면
      return;
    }
    imageFileList.push(transferedFiles[i]);
  }
  for (let imageFile of imageFileList) {
    //들어간 이미지 파일들 하나씩 확인해서..
    const fileReader = new fileReader(); // fileReader:
    fileReader.readAsDataURL(imageFile);
    fileReader.addEventListener('load', (e) => {
        const image =
    })
  }
};
fileZone.addEventListener("drop", (e) => {
  e.preventDefault(); //다른 페이지로 튀어나가지 않게함
  const transferdFiles = e.dataTransfer.files;
  displayImages(transferedFiles);
});
//e.dataTransfer.files특정요소를 활용해 웹브라우저에서 드래그앤 드랍기능을 사용했을 때 드롭한 해당요소의 파일 정보를 읽어내는 이벤트 속성
//누가 드랍되었는지 알 수 있음
