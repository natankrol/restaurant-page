export let menu =() =>{
    let menuBoard = document.createElement('div');
    menuBoard.classList.add('menu-board');
    menuBoard.classList.add('board-hidden');
    menuBoard.innerHTML = "<h1>Our Menu</h1><ul class='menu-list'><li>Spaghetti</li><li>Fried Chicken</li><li>Lasagne</li><li>PulledPork</li><li>Cheeseburger</li><li>Fries</li></ul>"
    content.appendChild(menuBoard);
}