const token = "BQA-8A9OefqL26IZ3itzew1JO3lnqUhlpToxUFck93j6EFWYWQM_DIqDbT065VfUEH3VbC--IEk0FV8eTknEJUBr9i0HNs50XHgTK37TIAIQ04k5YU51ZVvwMZeV-GsCiVM-i9jOs4H8_OXWKd5dZPLMk0rby5UPv7Uc96aNVtm9"

const searchForm = document.querySelector('#search-bar')
let userSearchInput = document.querySelector('#submit')

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    var id = userSearchInput.value
    getDataFromSpotify(id);
    renderSearchResults(); 

    
})

let clearBtn = document.querySelector('#clear-btn')
clearBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    userSearchInput.value = "";
    container.innerHTML= "";
})

const tileCubes = document.querySelectorAll(".highlight")
tileCubes.addEventListener("mouseover", (event) => {
    
    event.target.style.color = "white";
    
    setTimeout(() => {
        event.target.style.color = "";
      }, 500);
    }, false)




 

function getDataFromSpotify(id){
fetch(`https://api.spotify.com/v1/search?q=${id}%20&type=playlist&limit=10&offset=0`, {
    method:'GET',
    headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/json",
        "Authorization": "Bearer " + token
    }
})
    .then(r => r.json())
    .then(data => {        
        console.log(data.playlists.items);
        let allPlaylist = data.playlists.items;
        renderSearchResults(allPlaylist)

    })
}
let container = document.querySelector('#search-results')
function renderSearchResults(allPlaylist){
    allPlaylist.forEach(playlist =>{    
    let p = document.createElement('p')
    container.append(p)
    p.textContent = playlist.name
    const img =document.createElement('img')
    container.append(img)
    img.src = playlist.images[0].url
    let span = document.createElement('span')
    container.append(span)
    span.textContent = playlist.description

})
}   

// image of playlist = data.playlists.items[0].images[0].url
// name of playlist =data.playlists.items[0].name
// description of playlist = data.playlists.items[0].description


// document.addEventListener(`DOMContentLoaded`, (e) => {

// })


// searchForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     userSearchInput.value
// })