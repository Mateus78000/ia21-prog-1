import * as readline from 'readline'
import { stdin as input, stdout as output } from 'process'
const rl = readline.createInterface({ input, output })
const question = q => new Promise((rs, rj) => rl.question(q + ' ', a => rs(a)))

const color = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",

    fg: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        crimson: "\x1b[38m" // Scarlet
    },
    bg: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
        crimson: "\x1b[48m"
    }
}

// essa variavel serve para somar o total das notas informadas pelo usuário
let soma = 0

// essa variavel serve para contar o numero de notas informadas pelo usuário
let count = 0

// essa variavel serve para ser a media das notas informadas pelo ciente
let media

// esse laço de repetição serve para contar o numero de notas e somar os seus valores
while (true) {

    // Serve para perguntar o valor da proxima nota ou se as notas acabaram
    let strNota = await question(`Digite o valor da ${count + 1}° nota ou N/n para cacular a média entre os valores inseridos:`)
    
    // parar o laço de repetição se o valor digitado for "N/n"
    if (strNota.toUpperCase() == 'N') break
    
    // serve para ler a resposta dada
    let nota = parseFloat(strNota)

    // esse if serve para analisar se a nota dada pelo usuario está entre 0 e 10
    if (isNaN(nota) || nota < 0 || nota > 10) {

        // serve para sinalizar um erro devido ao valor ser maior que 10 ou menor que zero  
        console.log(`${color.fg.red}[ ERRO ] Por favor digite um número real entre 0 e 10 ou a letra N/n.${color.reset}`)
        
        //serve para continuar o laço de repetição, caso o valor digitado não seja "N/n"
        continue
    }

    // essa linha serve para somar a notas dadas pelo usuario
    soma = soma + nota

    // adicionar 1 ao nuemro de notas
    count++
}

// se o numero de notas for menor que 0
if (count <= 0) {

    // diga que ocorreu um erro devido a nenhuma nota tiver sido digitada
    console.log(`${color.fg.red}[ ERRO ] Nenhum valor foi digitado para que fosse possível calcular média.${color.reset}`)
    
    // encerre o programa
    process.exit()
}

// a media é igual a soma de todas notas dividido pelo numero de notas
media = soma / count

// dizer qual é a média de todos os valores
console.log(`${color.fg.green}[ RESULTADO ] A média de todos os valores informados é ${color.fg.yellow}${media}${color.reset}`)

//encerrar o programa
process.exit()