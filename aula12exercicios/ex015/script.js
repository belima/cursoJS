function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nascusr = document.getElementById('txtnasc')

    var res = document.querySelector('div#res')
    var corpo = document.querySelector('body')

    var img = document.createElement('img')
    img.setAttribute('id', 'img')

    if (nascusr.value.length == 0 || nascusr.value > ano) {
        alert('Dados inválidos')
    } else {
         var fgen = document.getElementsByName('radsex')
         var idade = ano - Number(nascusr.value)
         var genero = ''
         if (fgen[0].checked) {
            genero = 'Mulher'

            if (idade < 3){
                img.setAttribute('src', '_imgs/bebe-f.png')
            } else if (idade < 15) {
                img.setAttribute('src', '_imgs/crianca-f.png')
            } else if (idade < 30) {
                img.setAttribute('src', '_imgs/jovem-f.png')
            } else if (idade < 65) {
                img.setAttribute('src', '_imgs/adult-f.png')
            } else {
                img.setAttribute('src', '_imgs/old-f.png')
            }

         } else {
            genero = 'Homem'

            if (idade < 3){
                img.setAttribute('src', '_imgs/bebe-m.png')
            } else if (idade < 15) {
                img.setAttribute('src', '_imgs/crianca-m.png')
            } else if (idade < 30) {
                img.setAttribute('src', '_imgs/jovem-m.png')
            } else if (idade < 65) {
                img.setAttribute('src', '_imgs/adult-m.png')
            } else {
                img.setAttribute('src', '_imgs/old-m.png')
            }
         }
         res.innerHTML = `<p>${genero} com ${idade} anos de idade.</p>`
         res.appendChild(img)
    }

    
}