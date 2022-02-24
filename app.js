console.log("Let's get this party started!");

const formElement = document.querySelector("form");
const searchTerm =  document.querySelector("#searchTerm");


formElement.addEventListener("submit", async function(event){
    event.preventDefault();
    // console.log("from submitted!");
    searchTerm.value = '';

    let response = await axios.get('api.giphy.com/v1/gifs/search', {
        params: {
            q: searchTerm,
            api_key: 'vY0bZrawNcgjW64eLSVdRFndHxkcSz1A'
        }
    });
    console.log(response);
    return response.data;
  })





