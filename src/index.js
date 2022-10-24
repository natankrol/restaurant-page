import { initial } from "./initial";
import { menu } from "./menu";
import { contact } from "./contact";
import { history } from "./history";
const content = document.getElementById('content');


window.addEventListener('load', initial());
const restaurantPhoto = document.querySelector('.restaurant-photo');

menu()
contact()
history()


// menu
let menuBtn = document.querySelector('.menu-btn');
let menuBoard = document.querySelector('.menu-board');
// contact
let contactBtn = document.querySelector('.contact-btn');
let contactBoard = document.querySelector('.contact-board');
// history
let historyBtn = document.querySelector('.history-btn');
let historyBoard = document.querySelector('.history-board');

let mainSection = document.querySelector('.main-section');


menuBtn.addEventListener('click', function(){
    restaurantPhoto.classList.add('restaurant-photo-hidden');
    mainSection.appendChild(menuBoard);
    menuBoard.classList.remove('board-hidden');
    contactBoard.classList.add('board-hidden');
    historyBoard.classList.add('board-hidden')
});

contactBtn.addEventListener('click', function(){
    restaurantPhoto.classList.add('restaurant-photo-hidden');
    mainSection.appendChild(contactBoard);
    contactBoard.classList.remove('board-hidden');
    menuBoard.classList.add('board-hidden');
    historyBoard.classList.add('board-hidden');
});
 historyBtn.addEventListener('click', function(){
    restaurantPhoto.classList.add('restaurant-photo-hidden');
    mainSection.appendChild(historyBoard);
    historyBoard.classList.remove('board-hidden');
    menuBoard.classList.add('board-hidden');
    contactBoard.classList.add('board-hidden');
 })




    







