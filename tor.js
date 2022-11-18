// const token ="BQBxTMx9E2f9-g_866TC9ap7SHlel830WUHcqTulePOgAY5xV7rj8Ur13-B8G1NX9SmwzeH3zbMiUEz3ZtcdVZt2FCMmaqMqIaqnDoy-PN5c2Sve-bqa7TzguHYo33yDH2usT65nkwwrUiWF64KogG6qpEU_gGQUzYlZERgKnPYX"

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
        var allPlaylist = data.playlists.items;
        renderSearchResults(allPlaylist)
    })
}
let container = document.querySelector('#search-results')

function renderSearchResults(allPlaylist){
    allPlaylist.forEach(playlist => {  
    const div = document.createElement(`div`)
    let p = document.createElement('h2')
    let span = document.createElement('span')
    const img =document.createElement('img')
    container.append(div)  
    p.className = "search-results-text"
    div.append(p)
    div.setAttribute(`class`,`result`)
    p.textContent = playlist.name    
    img.className = "search-results-img"
    div.append(img)
    img.src = playlist.images[0]?.url ||  "https://i.pinimg.com/originals/6a/6d/11/6a6d1124cf69e5588588bc7e397598f6.png"  
    span.className = "description"
    span.innerHTML = playlist?.description || `songs: ${playlist.tracks.total}`
    div.append(span)
    var id= playlist.id
    img.addEventListener('click', (e) => {
        setSideBar(id)
    })

})
}   

const cubeElement = document.querySelectorAll('.p')
cubeElement.forEach(textCollection => {
    textCollection.addEventListener("mouseover", (e) => {
    e.target.style.color = "white"});
    textCollection.addEventListener('mouseout', (e) => {
        e.target.style.color = "black"
    })
});


