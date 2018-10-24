const app = document.getElementById('app');

app.addEventListener('click', e => {
  let cal = document.getElementById('result');
  if (e.target.matches('input[type="button"]')) {
    const value = e.target.value;
    if (value === '=') {
      cal.value = eval(cal.value);
    } else {
      cal.value += value;
    }
    if (value === 'C') cal.value = '';
  }
});
