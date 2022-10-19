//Default values;
const defaultColor = "#000000";
const defaultMode = "color";

const container = document.getElementById('gridContainer');
let gridColor = defaultColor;
let gridMode = defaultMode;
let mouseDown = false;
let colorPrevRainbow = defaultColor;

let colorInput = document.getElementById('colorBtn');
let rainbowBtn = document.getElementById('rainbowBtn')
let eraseBtn = document.getElementById('eraseBtn');
let clearBtn = document.getElementById('clearBtn');
let grids = document.querySelector('gridBoxes');
let colorBtn = document.getElementById('color');
let rangeBtn = document.getElementById('rangeBtn');
const rangeSpan = document.getElementById('range');
let currentSize = 16;


rangeBtn.addEventListener('change', (e) => {
    container.innerHTML = ''
    currentSize = e.target.value;
    rangeSpan.innerText = `${currentSize} x ${currentSize}`;
    setDefaultGrid();
})

colorBtn.addEventListener('click', () => {
    gridColor = colorPrevRainbow;
    gridMode = defaultMode;
})
colorInput.addEventListener('change', (e) => {
    gridColor = e.target.value;
    colorPrevRainbow = e.target.value;
    gridMode = defaultMode;
});

rainbowBtn.addEventListener('click', (e) => {
    gridMode = "rainbow";
    colorPrevRainbow = colorInput.value;
});
eraseBtn.addEventListener('click', (e) => {
    gridMode = 'erase'
    gridColor = "#ffffff";
});

clearBtn.addEventListener('click', () => {
    container.innerHTML = '';
    setDefaultGrid()
});





window.addEventListener('mousedown', () => {
    mouseDown = true;
});
window.addEventListener('mouseup',  () => {
    mouseDown = false;
})

function drawingColor(e) {

    if (e.type === 'mouseover' && !mouseDown) return
    if (gridMode === 'rainbow') {
        let rainbow1 = Math.floor(Math.random() * 256)
        let rainbow2 = Math.floor(Math.random() * 256)
        let rainbow3 = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = 'rgb(' + rainbow1 + ',' + rainbow2 + ',' + rainbow3 + ')';
    }
    else {
        console.log(gridColor)
        e.target.style.backgroundColor = gridColor;
    }
}



function setDefaultGrid() {
    container.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`;
    for (let i = 0; i < currentSize * currentSize; ++i){
        const div1 = document.createElement('div');
        div1.setAttribute('id', 'gridBoxes');
        div1.addEventListener('mouseover', drawingColor);
        div1.addEventListener('mousedown', drawingColor);
        container.appendChild(div1);
    }
}


window.onload = () => {
    setDefaultGrid();
}

