function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')

    var data = new Date()
    
    var hora = data.getHours()
    if (hora < 10) {
        hora = '0' + hora
    }

    var min = data.getMinutes()
    if (min < 10) {
        min = '0' + min
    }

    msg.innerHTML = `Agora são <strong>${hora}:${min}</strong>.`

    if (hora >= 5 && hora < 12){
        img.src = '_imgs/manha.png'
        document.body.style.background = 'linear-gradient(#aab4d7, #fdcea4)'
    } else if (hora >= 12 && hora < 18) {
        img.src = '_imgs/tarde.png'
        document.body.style.background = 'linear-gradient(#d3dde6, #898a81)'
    } else {
        img.src = '_imgs/noite.png'
        document.body.style.background = 'linear-gradient(#2d3330, #d6d885)'
    }
}