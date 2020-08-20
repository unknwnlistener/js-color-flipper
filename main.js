const hexArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color-text__code');

btn.addEventListener('click', () => {
    // Create random hex value
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hexArray[getRandomValue()];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

function getRandomValue() {
    return Math.floor(Math.random() * hexArray.length);
}