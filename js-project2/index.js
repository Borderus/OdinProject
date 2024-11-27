// Drawing capability
const gridsize = 100;

boundary = document.querySelector("#boundary")

for (i=0; i<gridsize; i++){
    const row = document.createElement("div");
    row.className = "row";
    for (j=0; j<gridsize; j++) {
        const block = document.createElement("div");
        block.className = "block";
        block.addEventListener("mouseover", () => {
            block.style.backgroundColor = "black";
        })
        row.appendChild(block);
    }
    boundary.appendChild(row);
}
  
// Refresh button
headerButton = document.querySelector("#headerButton");

headerButton.addEventListener("click", () => {
    blockList = document.querySelectorAll("div.block");
    for (i=0; i<blockList.length; i++) {
        blockList[i].style.backgroundColor = "white";
    }
})