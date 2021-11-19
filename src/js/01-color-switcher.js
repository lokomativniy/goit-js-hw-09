{
  /* <button type="button" data-start>Start</button>
<button type="button" data-stop>Stop</button> */
}

const body = document.body;
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;
console.log(startBtn);
console.log(body);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
   
   startBtn.disabled = true
   stopBtn.disabled = false
});

stopBtn.addEventListener('click', () => {
   clearInterval(timerId);
   startBtn.disabled = false
   stopBtn.disabled = true
});
