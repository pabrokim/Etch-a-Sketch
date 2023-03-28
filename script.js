const div = document.createElement('div');
div.classList.add('container');
document.body.appendChild(div);

const container = document.querySelector('.container');

function addDiv() {

    for(let i = 1; i <=256; i++){ 
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
    }
}

addDiv();

const items = document.querySelectorAll('.grid');

items.forEach((item) => {
    item.addEventListener('mouseover', () => {
    item.style.backgroundColor = 'green';
    })
});



