function resetGrid() {
    const blocks = document.querySelectorAll('[id="grid-item"]');
    blocks.forEach(block => {
        block.style.backgroundColor = "transparent";
    });
}

document.getElementById("change_button").addEventListener("click", () => {
    const idValue = document.getElementById("block_id").value;
    const colorValue = document.getElementById("colour_id").value.trim();

    // Always reset first (per requirement)
    resetGrid();

    // Parse and validate numeric id
    const blockNum = parseInt(idValue, 10);
    if (!Number.isNaN(blockNum) && blockNum >= 1 && blockNum <= 9 && colorValue.length > 0) {
        // find the element with the matching data-id (our numeric identifier)
        const target = document.querySelector(`[data-id='${blockNum}']`);
        if (target) {
            target.style.backgroundColor = colorValue;
        }
    }
});

document.getElementById("Reset").addEventListener("click", resetGrid);

resetGrid();

