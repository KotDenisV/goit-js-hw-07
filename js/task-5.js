function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const setColor = document.querySelector('body');
const span = document.querySelector('.color');

const Click = (event) => {
  const colorBody = getRandomHexColor();
  setColor.style.backgroundColor = colorBody;
  span.textContent = colorBody;
  
};

btn.addEventListener("click", Click);

