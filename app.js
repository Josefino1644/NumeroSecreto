let tentativas = 1
let chute


alert('Boas vindas ao jogo do número secreto')
const name = prompt('Digite seu nome para começar a jogar')
let max = prompt('De quanto a quando')

let numeroSecreto = parseInt(Math.random() * max)

while (chute != numeroSecreto) {
    let chute = prompt(`Escolha um número entre 0 e ${max} `)
    if (chute == numeroSecreto) {
        break
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor ${chute}`)
        } else {
            alert(`O número secreto é maior ${chute}`)
        }
    }
    tentativas++
}

if(tentativas > 1){
    alert(`Parabéns ${name}, acertou o ${numeroSecreto} com ${tentativas} tentativas`)
} else {
    alert(`Gênio ${name}, acertou o ${numeroSecreto} com ${tentativas} tentativas`)
    alert(`Tenho direito a 3 desejos agora`)
}