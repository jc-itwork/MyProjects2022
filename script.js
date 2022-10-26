// targeting 3 things:
// 1. the button itself, to initiate the change in background color;
// 2. the body, to change color;
// 3. the text to adapt to code color

const backgroundChange = document.getElementById('backgroundChange');
const color = document.getElementById('color');
const body = document.body;


function changeBG() {

   const col1 = getRandomRGB();
   const col2 = getRandomRGB();
   const col3 = getRandomRGB();

   const colorString = `rgb(${col1}, ${col2}, ${col3})`;
   body.style.background = colorString;
   color.innerText = colorString;
}
backgroundChange.addEventListener(`click`, changeBG); 


function getRandomRGB() {
return Math.floor(Math.random() *256);
}