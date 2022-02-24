console.log("Let's get this party started!");

const form = document.querySelector("form");
let searchTerm =  document.querySelector("#searchInput").value;

function getGif() {

}

form.addEventListener("submit", async function(event){
    event.preventDefault();
    console.log("from submitted!");
    searchTerm.value = '';

    let response = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
            q: searchTerm,
            api_key: 'vY0bZrawNcgjW64eLSVdRFndHxkcSz1A'
        }
    });
    console.log(response);
    return response.data;
    console.log("data returned");
  })




