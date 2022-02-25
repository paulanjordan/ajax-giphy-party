console.log("Let's get this party started!");

const form = document.querySelector("form");
const button = document.querySelector("#remove");
const gifDiv = document.querySelector("#addedGifs");

let searchTerm =  document.querySelector("#searchInput").value;

function getRandomGif(response) {
    let numResults = response.data.length;
    if (numResults) {
        let randomIndex = Math.floor(Math.random() * numResults);
        let newGif = document.createElement("img")
        newGif.classList.add('newGif')
        newGif.src= response.data[randomIndex].images.original.url;
        gifDiv.append(newGif);
    }
}

form.addEventListener("submit", async function(event){
    event.preventDefault();
    searchTerm =  document.querySelector("#searchInput").value;

    let response = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
            q: searchTerm,
            api_key: 'vY0bZrawNcgjW64eLSVdRFndHxkcSz1A'
        }
    });
    getRandomGif(response.data)
  })

button.addEventListener("click", function () {
    gifDiv.innerHTML = '';
});

