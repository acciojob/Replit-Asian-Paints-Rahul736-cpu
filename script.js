function resetGrid() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i).style.backgroundColor = "transparent";
    }
}

document.getElementById("change_button").addEventListener("click", function () {
    const blockID = document.getElementById("block_id").value;
    const color = document.getElementById("colour_id").value;

    resetGrid(); 

    if (blockID >= 1 && blockID <= 9) {
        document.getElementById(blockID).style.backgroundColor = color;
    }
});

document.getElementById("Reset").addEventListener("click", function () {
    resetGrid();
});

