const grid = document.querySelector("#container");
const resetButton = document.querySelector(".reset");
const userInput = document.querySelector("#quantity");

//create grid 

makeGrid = () => {
    for (let i = 0; i < 256; i++){
        const div = document.createElement("div");
        div.classList.add("box");
        grid.appendChild(div);
    }
};

//customize grid with user input

customGrid = () => {
    grid.innerHTML = "";
    grid.style.setProperty("grid-template-columns", `repeat (${userInput.value}, 2fr)`);
    grid.style.setProperty("grid-template-rows", `repeat (${userInput.value}, 2fr)`);

    for(let i = 0; i < userInput.value * userInput.value; i++){
        const div = document.createElement("div");
        div.classList.add("box");
        grid.appendChild(div);
    }
    console.log(userInput.value);
};

const box = document.querySelector("div");
box.addEventListener("mouseover", function(event){
    event.target.classList.replace("box", "color");
});

userInput.addEventListener("change", customGrid);

//reset to default 16x16 grid

resetButton.addEventListener("click", function(){
    grid.innerHTML = "";
    userInput.value = "";
    grid.style.setProperty("grid-template.columns", `repeat(16, 2fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    makeGrid();
});

makeGrid();
