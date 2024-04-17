function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBoxes = document.querySelector(`#boxes`);
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const input = document.querySelector('input');

createBtn.addEventListener('click', (event) => {
  destroyBoxes();
  createBoxes(input.value);
});
destroyBtn.addEventListener('click', (event) => {
  destroyBoxes();
});


function createBoxes(amount) {
  const arrayBoxes = [];
  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      const size = 30 + i * 10;
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      arrayBoxes.push(box);
      
    }
    divBoxes.append(...arrayBoxes);
    input.value = '';
  } else {
      alert('Please enter a number between 1 and 100');
    }

}

function destroyBoxes() {
  divBoxes.innerHTML = '';
}

