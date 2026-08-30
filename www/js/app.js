let count = 0;

const button = document.getElementById('tapButton');
const counterText = document.getElementById('counterText');

button.addEventListener('click', function () {
  count = count + 1;
  counterText.textContent = 'Du hast ' + count + ' mal getippt';
});
