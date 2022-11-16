const token = "BQCB7lzaKKdeuFxdNBddTSKIdoSnBdQpROpMjpeK-r8KqcqlQozHK-FCboXXUxj6RaJhEUCOJn2obFGYZq-uSxA5RbV8lhlleLrsbQe4Bzwdk2TJjrnW3GdoQ5cGEck4vKq7EO3FJ8TUvOcC9KNtMwUXEvD1i4XP2O_LPjkxMyWt"

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

    
//     setTimeout(() => {
//         event.target.style.color = "";
//       }, 500);
//     }, false)




 

function getDataFromSpotify(id){
fetch(`https://api.spotify.com/v1/search?q=${id}%20&type=playlist&limit=12&offset=0`, {
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
    const div = document.createElement(`div`)
    container.append(div)    
    let p = document.createElement('h2')
    p.className = "search-results-text"
    div.append(p)
    div.setAttribute(`class`,`result`)
    p.textContent = playlist.name
    const img =document.createElement('img')
    img.className = "search-results-img"
    div.append(img)
    img.src = playlist.images[0].url
    let span = document.createElement('span')
    span.className = "description"
    // img.append(span)
    span.textContent = playlist.description
    div.append(span)
    var id= playlist.id
    img.addEventListener('click', (e) => {
        setSideBar(id)
    })

})
}   

const cubeTitles = document.querySelectorAll('.p')
cubeTitles.forEach(element => {
    element.addEventListener("mouseover", (e) => {
    e.target.style.color = "white"});
    element.addEventListener('mouseout', (e) => {
        e.target.style.color = "black"
    })
});


// image of playlist = data.playlists.items[0].images[0].url
// name of playlist =data.playlists.items[0].name
// description of playlist = data.playlists.items[0].description


// document.addEventListener(`DOMContentLoaded`, (e) => {

// })


// searchForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     userSearchInput.value
// })