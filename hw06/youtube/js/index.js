const search = (ev) => {
    console.log(document.querySelector('input').value);
    let url = 'https://www.apitutor.org/youtube/simple/?q='+String(document.querySelector("#search-text").value)+'&type=video';
    console.log('https://www.apitutor.org/youtube/simple/?q='+String(document.querySelector("#search-text").value)+'&type=video');
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
          <iframe width="300" height="300" src="https://www.youtube.com/embed/${item.videoId}" frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
          <p>${item.title}</p>
        </div>
        `;
      document.querySelector('#output').innerHTML += template;
    }

};

document.querySelector('#search').onclick = search;
document.querySelector('.logo').onclick = reset;
