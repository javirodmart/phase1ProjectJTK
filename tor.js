const token = "BQDBGZsfd8zpeuqFFVnBGsb5ztS9J42zvdZOX_adPwZL_7fyv9mVIRLLn_6ACnZzw5CaIwzZCO3asrLXzR6zuhP0ecaKgOCanDJ0-xwDMyLWE9re_FOyBKxfmNv2HB3OLc7tE-Ie5Jbm8WwrMcvee9gygB4inhgbU1BwPhRoVrhU"

const searchForm = document.querySelector('#search-bar')
let userSearchInput = document.querySelector('#submit')

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    var id = userSearchInput.value
    getDataFromSpotify(id);
    renderSearchResults();
    // setTimeout(()=>{
    //     userSearchInput.value = ''
    //     }, 3000)    
    
})



 

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

function renderSearchResults(allPlaylist){
    allPlaylist.forEach(playlist =>{
    let container = document.querySelector('#search-results')
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