console.log("Let's get this party started!");

const form = document.querySelector("form");
let searchTerm =  document.querySelector("#searchInput").value;

function getRandomGif(response) {
    let gifDiv = document.querySelector("#gifDiv");
    let numResults = response.data.length;
    if (numResults) {
        let randomIndex = Math.floor(Math.random() * numResults);
        let newGif = document.createElement("IMG").src= response.data[randomIndex].images.original.url;
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
    console.log(response);

    getRandomGif(response.data)
    // searchTerm.value = '';
  })



