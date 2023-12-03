const oldTime = Date.now(); //현재 시간은 70/1/1기준으로 계속 흐르고 있는것
const totalTime = 10000; //10초 밀리초는10000
const timerId = setInterval(() => {
  const currentTime = Date.now();
  const diff = currentTime - oldTime; //현재와 과거 시간의 차이가 담긴 변수

  const remainMsec = totalTime - diff;
  const remainSec = Math.ceil(remainMsec / 1000); //우리가 살아가는 시간에 대한 초가 될 것
  let label = `남은 시간은 ${remainSec}초`;
  if (remainMsec <= 0) {
    clearInterval(timerId); //(timerID)종료시킴
    label = "종료!";
  }
  document.querySelector("#log").innerTEXT = label;
}, 1000); //특정 시간1000(1초)에 맞춰 반복해 무엇인가 하라는 말
