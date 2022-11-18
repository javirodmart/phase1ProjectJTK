const sidebar = document.querySelector(`#side-bar`)
const sadSpanish = document.querySelector(`#sad-spanish`) 
const wrapper = document.querySelectorAll(`button`)

//set id src to frame
function setSideBar(id){
       sidebar.src = `https://open.spotify.com/embed/playlist/${id}?si=zLUn-H4DTl2SxyKlpLo5gA&amp&size=detail&amp;theme=light`
}

function startingEmbedPlayer(data){
    wrapper.forEach(btn => {
        btn.addEventListener(`click`, (e) => {
            console.log(e.target.id)
            var id2 = e.target.id
            setSideBar(id2)
            fetchSpotify(id2)
        })
    })
}
 

function lightDark(){
    const button = document.querySelector(`details`)
    const body = document.querySelector(`body`)
    button.addEventListener(`toggle`, (e) => {
       const sum = document.querySelector(`.toggle`) 
       const title = document.querySelector(`.title`)
       const intro = document.querySelector(`.intro`)      
        var element = document.body;
        body.classList.toggle("dark");
        intro.classList.toggle("dark")
        title.classList.toggle("dark")
        sum.classList.toggle("dark")  
    })
}





document.addEventListener(`DOMContentLoaded`, (e) => {
   startingEmbedPlayer()
  lightDark()
})
