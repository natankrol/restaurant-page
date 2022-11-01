export let history = () => {
    let historyBoard = document.createElement('div');
    historyBoard.classList.add('history-board');
    historyBoard.classList.add('board-hidden');
    historyBoard.innerHTML = "<h1>Our History</h1><p>For a long time now, Thailand has been tempting visitors with its beauty and phenomenality. The country's culture combines the two most important rules of the philosophy of life - pleasure and harmony, which is also reflected in Thai cuisine. Neighbouring countries have always had a large impact on the development of Thailand. China, Laos, Burma and India contributed to the world of Thai cuisine with their delicacies and rules of culinary art. </p>"
    content.appendChild(historyBoard);
}