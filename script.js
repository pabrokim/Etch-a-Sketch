const head = document.createElement('h1');
head.classList.add('head');
head.textContent='Etch-A-Sketch';
document.body.appendChild(head);

const button = document.createElement('button');
button.classList.add('button');
button.textContent='Set Number of Boxes';
document.body.appendChild(button);

const div = document.createElement('div');
div.classList.add('container');
document.body.appendChild(div);

button.addEventListener('click', () => {
        let x = parseInt(prompt('Choose boxes per side'));
        if(x < 1 || x > 100){
            alert('Please enter a number between 1 and 100')
        }
        clearGrid();
        createGrids(x);
});


const container = document.querySelector('.container');
let containerWidth = container.offsetWidth;
let containerHeight = container.offsetHeight;

//creates grids
function createGrids(x) {
    for(let row = 0; row < x; row++){ 
        for(let column = 0; column < x; column++){
            const grid = document.createElement('div');
            grid.classList.add('grid');
            grid.style.width = (containerWidth/x) +'px';
            grid.style.height = (containerHeight/x) +'px';
            container.appendChild(grid);
        }
    }
}
createGrids(16);

//clear grids

function clearGrid() {
    let parent = document.querySelector('.container');
    let child = parent.querySelectorAll('.grid');
      for (let i = 0; i < child.length; i++) {
        parent.removeChild(child[i]);

    }
}

//mouse hover effect for dynamically created grids

const gridContainer = document.querySelector('.container');
gridContainer.addEventListener('mouseover', (e) => {
    if(e.target.classList.contains('grid')){
        e.target.style.backgroundColor = 'black';
    }
})
