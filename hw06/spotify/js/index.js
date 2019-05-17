const search = (ev) => {
    console.log(document.querySelector('input').value);
    // let url = 'https://www.apitutor.org/spotify/simple/v1/search?q=beyonce&type=track';
    let url = 'https://www.apitutor.org/spotify/simple/v1/search?q='+String(document.querySelector("#search-text").value)+'&type=track';
    console.log('https://www.apitutor.org/spotify/simple/v1/search?q='+String(document.querySelector("#search-text").value)+'&type=track');
    fetch(url)
        .then(response => response.json())
        .then(displayResults);
};

const reset = (ev) => {
    document.querySelector('#output').innerHTML = "";
    document.querySelector('#search-text').value = "";
    console.log(document.querySelector('#search-text').innerHTML);
};


// Allow search on enter
document.getElementById("search-text")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("search").click();
    }
});

const displayResults = (data) => {
    console.log(data);
    // document.querySelector('#output').innerHTML = JSON.stringify(data, null, 4);

    document.querySelector('#output').innerHTML = "";
    for (item of data){
      const template = `
        <div class="card">
          <div class="albumImage" style="background-image:url('${item.album.image_url}')">
          </div>
          <audio controls>
            <source src='${item.preview_url}'>
          </audio>
          <p>${item.name}</p>
        </div>
        `;
      document.querySelector('#output').innerHTML += template;
    }

};

document.querySelector('#search').onclick = search;
document.querySelector('.logo').onclick = reset;
