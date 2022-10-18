import { initial } from "./initial";
import { menu } from "./menu";
const content = document.getElementById('content');


window.addEventListener('load', initial());
const restaurantPhoto = document.querySelector('.restaurant-photo');

menu()


let menuBtn = document.querySelector('.menu-btn');
let menuBoard = document.querySelector('.menu-board')
let mainSection = document.querySelector('.main-section')
menuBtn.addEventListener('click', function(){
    restaurantPhoto.classList.add('restaurant-photo-hidden');
    mainSection.appendChild(menuBoard)
})



    







