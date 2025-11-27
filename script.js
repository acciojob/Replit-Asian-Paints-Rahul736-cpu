// RESET ALL BLOCKS TO TRANSPARENT
function clearAll() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i).style.backgroundColor = "transparent";
    }
}

// CHANGE COLOR BUTTON
document.getElementById("change_button").onclick = function () {
    let block = document.getElementById("block_id").value;
    let color = document.getElementById("colour_id").value;

    clearAll(); // Set all transparent first

    if (block >= 1 && block <= 9) {
        document.getElementById(block).style.backgroundColor = color;
    }
};

// RESET BUTTON
document.getElementById("Reset").onclick = function () {
    clearAll();
};
