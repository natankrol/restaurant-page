(()=>{"use strict";document.getElementById("content"),window.addEventListener("load",(()=>{let t=document.createElement("div");t.classList.add("navbar"),t.innerHTML="<button class='menu-btn' type='button'>Menu</button> <button class='contact-btn' type='button'>Contact</button> <button class='history-btn' type='button'>History</button>",content.appendChild(t);let e=document.createElement("div");e.innerHTML="<h1>Welcome to Nathan's Restaurant</h1>",e.classList.add("title"),content.appendChild(e);let n=document.createElement("div");n.classList.add("main-section"),n.innerHTML="<img class='restaurant-photo' src='./restaurant-photo.jpg' alt='restaurant'></img>",content.appendChild(n)})());const t=document.querySelector(".restaurant-photo");(()=>{let t=document.createElement("div");t.classList.add("menu-board"),t.innerHTML="<h1>Our Menu</h1><ul class='menu-list'><li>Spaghetti</li><li>Fried Chicken</li><li>Lasagne</li><li>PulledPork</li><li>Cheeseburger</li><li>Fries</li></ul>",content.appendChild(t)})();let e=document.querySelector(".menu-btn"),n=document.querySelector(".menu-board"),a=document.querySelector(".main-section");e.addEventListener("click",(function(){t.classList.add("restaurant-photo-hidden"),a.appendChild(n)}))})();