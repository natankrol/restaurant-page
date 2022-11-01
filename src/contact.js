export let contact = () => {
    let contactBoard = document.createElement('div');
    contactBoard.classList.add('contact-board');
    contactBoard.classList.add('board-hidden');
    contactBoard.innerHTML = "<h1>Contact</h1><div class='address'><p>Our Address:</p><p>Owocowa 5, Szczecin, Poland</p></div><div class='phone-number'><p>Phone Number:</p><p>123-456-789</p></div><p>E-mail:</p><p>nathansrestaurant@gmail.com</p>";
    content.appendChild(contactBoard);
}