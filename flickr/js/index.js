const serverURL = 'https://api-helpers.herokuapp.com/flickr-proxy-simple/';

const getPhotosFlowers = () => {
    fetch(serverURL + '?tags=flowers')
        .then(response => response.json())
        .then(loadCards);
};

const getPhotosCars = () => {
    fetch(serverURL + '?tags=cars')
        .then(response => response.json())
        .then(loadCards);
};

const getPhotosBikes = () => {
    fetch(serverURL + '?tags=bikes')
        .then(response => response.json())
        .then(loadCards);
};


const getPhotosNature = () => {
    fetch(serverURL + '?tags=nature')
        .then(response => response.json())
        .then(loadCards);
};


const getPhotosDogs = () => {
    fetch(serverURL + '?tags=dogs')
        .then(response => response.json())
        .then(loadCards);
};

const getPhotosCats = () => {
    fetch(serverURL + '?tags=cats')
        .then(response => response.json())
        .then(loadCards);
};


const getPhotosOcean = () => {
    fetch(serverURL + '?tags=ocean')
        .then(response => response.json())
        .then(loadCards);
};

const getPhotosSearch = () => {
    fetch(serverURL + '?tags='+String(document.querySelector("#search").value))
        // console.log('?tags='+String(document.querySelector("#search").value))
        .then(response => response.json())
        .then(loadCards);
};

const loadCards = (items) => {
    document.querySelector('.cards').innerHTML = '';
    // load new ones (based on photos list)
    for (item of items) {
        const template = `
            <li class="card">
                <div class="image" style="background-image:url('${item.img_url}')"></div>
                <div class="caption">${item.title}</div>
            </li>`;
        document.querySelector('.cards').innerHTML += template;
    }
    initCarousel();
};

document.querySelector('#flowers-button').onclick = getPhotosFlowers;
document.querySelector('#cars-button').onclick = getPhotosCars;
document.querySelector('#bikes-button').onclick = getPhotosBikes;
document.querySelector('#nature-button').onclick = getPhotosNature;
document.querySelector('#dogs-button').onclick = getPhotosDogs;
document.querySelector('#cats-button').onclick = getPhotosCats;
document.querySelector('#ocean-button').onclick = getPhotosOcean;
document.querySelector('#search-button').onclick = getPhotosSearch;

// default to the flowers:
getPhotosFlowers();
