document.getElementById("change_button").addEventListener("click", function () {
    let items = document.getElementsByClassName("grid-item");
    for (let i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = "transparent";
    }

    let blockId = document.getElementById("block_id").value;
    let colour = document.getElementById("colour_id").value;

    if (blockId >= 1 && blockId <= 9) {
        document.getElementById(blockId).style.backgroundColor = colour;
    }
});

document.getElementById("Reset").addEventListener("click", function () {
    let items = document.getElementsByClassName("grid-item");
    for (let i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = "transparent";
    }
});
