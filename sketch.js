function getRandomColor() {
    // Generate a random color in hexadecimal format
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const rangeInput = document.getElementById('myRange');
        const rangeValue = document.getElementById('rangeValue');

        rangeInput.addEventListener('input', () => {
            rangeValue.textContent = `${rangeInput.value} X ${rangeInput.value}`
        });



const container = document.querySelector(".container");
let selectedColor = colorPicker.value;
const grid = document.querySelector("#grid")
let isMouseDown = false;

        document.addEventListener('mousedown', () => isMouseDown = true);
        document.addEventListener('mouseup', () => isMouseDown = false);
    colorPicker.addEventListener('input', () => {
        selectedColor = colorPicker.value;
    });

   
    function createGrid(size) {
        container.innerHTML = "";
        for (let i = 0; i < size; i++) {
            let gridItem1 = document.createElement("div");
            gridItem1.className = 'grid-item';
            gridItem1.style.height = `${container.clientHeight / size}px`;
            container.append(gridItem1);
            for (let j = 0; j < size; j++) {
                let gridItem2 = document.createElement("div");
                gridItem2.className = 'grid-item';
                gridItem2.style.width = "100%";
                gridItem2.style.height = "100%";
    
                gridItem2.addEventListener('mousedown', function() {
                    gridItem2.style.backgroundColor = selectedColor;
                });
                gridItem2.addEventListener('mousemove', function() {
                    if (isMouseDown) {
                        gridItem2.style.backgroundColor = selectedColor;
                    }
                });
    
                gridItem1.append(gridItem2);
            }
        }
    }

createGrid(16)




let clear = document.querySelector("#clear");
clear.addEventListener("click", function() {
    // Select all grid-item elements
    const divs = document.querySelectorAll('.grid-item');

    // Loop through each div and change its background color to white
    divs.forEach(gridItem => {
        gridItem.style.backgroundColor = 'white';
    });
});

rangeInput.addEventListener('change', function() {
    createGrid(rangeInput.value);
});
    