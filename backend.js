let perso = document.getElementById('person')
let obstacle = document.getElementById('obstacle')

function sauter(){
    if(perso.classList != "animation")
    {
        perso.classList.add("animation")
    }
    setTimeout(function(){
        perso.classList.remove("animation")
    },500)
}

let verification =
setInterval(
    function()
    {
        let persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue('top'))
        let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'))
        if(obstacleLeft<20 &&  obstacleLeft>0 && persoTop >= 100)
        {
            obstacle.style.animation = "none"
            alert("Vous avez perdu")
        }
    }
,50)