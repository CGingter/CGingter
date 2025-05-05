function toggleTile(tile) {
    tile.classList.toggle("expanded");
}

function toggleMenu() {
    const menu = document.getElementById("side-menu");
    menu.style.left = menu.style.left === "0px" ? "-250px" : "0px";
}