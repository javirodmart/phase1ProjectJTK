const token = "BQB51FFPNmbcZd9KFg12fXqIqnQeQf-fFIg9WsKDw8EbBt4IBbM1GLnODYJRFlsccHOA0nv58vYgky6PVS9Wmog2Q_9eKEwvFomURrDMvUBqoA4z_veqAo9XATuVxp6KUXNkky1tFSbyM--DUHG3rCQVs-FSec40Ek-t0g_GVSr4"

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

// const tileCubes = document.querySelectorAll(".highlight")
// tileCubes.addEventListener("mouseover", (event) => {
    
//     event.target.style.color = "white";
    
//     setTimeout(() => {
//         event.target.style.color = "";
//       }, 500);
//     }, false)




 

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
    p.className = "search-results-text"
    container.append(p)
    p.textContent = playlist.name
    const img =document.createElement('img')
    img.className = "search-results-img"
    p.append(img)
    img.src = playlist.images[0].url
    let span = document.createElement('span')
    img.append(span)
    span.textContent = playlist.description
    var id= playlist.id
    img.addEventListener('click', (e) => {
        setSideBar(id)
    })

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