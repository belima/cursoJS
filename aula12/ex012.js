var agora = new Date()

var hora = agora.getHours()
var min = agora.getMinutes()
if (min < 10) {
    min = '0' + min
}

console.log(`São exatamente ${hora}:${min}.`)
if (hora < 5) {
    console.log('Boa madruga!')
} else if (hora < 12) {
    console.log('Buenos dias!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}