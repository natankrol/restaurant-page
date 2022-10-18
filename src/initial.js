export let initial = () => {
    

    let navbar = document.createElement('div');
    navbar.classList.add('navbar')
    navbar.innerHTML = "<button type='button'>Menu</button> <button type='button'>Contact</button> <button type='button'>History</button>";
    content.appendChild(navbar);

    let title = document.createElement('div');
    title.innerHTML = "<h1>Welcome to Nathan's Restaurant</h1>"
    title.classList.add('title')
    content.appendChild(title)

    

    let restaurantPhoto = document.createElement('div');
    restaurantPhoto.classList.add('restaurant-photo');
    restaurantPhoto.innerHTML = "<img src='./restaurant-photo.jpg' alt='restaurant'></img>";
    content.appendChild(restaurantPhoto);



    
};