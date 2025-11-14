//your JS code here. If required.
// Function to reset colors
function resetGrid() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i).style.backgroundColor = "transparent";
    }
}

document.getElementById("change_button").addEventListener("click", function () {
    const blockId = document.getElementById("block_id").value;
    const color = document.getElementById("colour_id").value;

    resetGrid(); // Clear all first

    if (blockId >= 1 && blockId <= 9) {
        document.getElementById(blockId).style.backgroundColor = color;
    } else {
        alert("Please enter a valid block id (1 to 9)");
    }
});

document.getElementById("Reset").addEventListener("click", function () {
    resetGrid();
});
