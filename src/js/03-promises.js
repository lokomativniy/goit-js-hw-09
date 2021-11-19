{
  /* <form class="form">
<label>
  First delay (ms)
  <input type="number" name="delay" required />
</label>
<label>
  Delay step (ms)
  <input type="number" name="step" required />
</label>
<label>
  Amount
  <input type="number" name="amount" required />
</label>
<button type="submit">Create promises</button>
</form>

<script src="js/03-promises.js"></script>
</body>
</html> */
}

import Notiflix from 'notiflix';

const form = document.querySelector('form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  let amount = Number(form.elements.amount.value);
  let delay = Number(form.elements.delay.value);
  let step = Number(form.elements.step.value);
  for (let position = 1; position <= amount; position += 1){
    createPromise(position, delay)
      .then(onFulfilled)
      .catch(onRejected);
    delay += step;
  }
}
function onFulfilled({ position, delay }) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}
function onRejected({ position, delay }) {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
