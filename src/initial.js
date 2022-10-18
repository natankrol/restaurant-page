export let initial = () => {
    

    let navbar = document.createElement('div');
    navbar.classList.add('navbar')
    navbar.innerHTML = "<button class='menu-btn' type='button'>Menu</button> <button class='contact-btn' type='button'>Contact</button> <button class='history-btn' type='button'>History</button>";
    content.appendChild(navbar);

    let title = document.createElement('div');
    title.innerHTML = "<h1>Welcome to Nathan's Restaurant</h1>"
    title.classList.add('title')
    content.appendChild(title)

    

    let restaurantPhoto = document.createElement('div');
    restaurantPhoto.classList.add('main-section');
    restaurantPhoto.innerHTML = "<img class='restaurant-photo' src='./restaurant-photo.jpg' alt='restaurant'></img>";
    content.appendChild(restaurantPhoto);



    
};