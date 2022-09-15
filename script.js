/*Crie uma um programa de saúde, nesse programa desenvolva uma função que calcula
 *o imc de pacientes, a função deverá receber os  seguintes parâmetros, peso e altura.
*/
const prompt = require('prompt-sync')();
const imcC = require('./imc')

let soma = 0
console.log('Imc Calculador\n');
const weigth = Number(prompt('Digite o seu peso: '));
const heigth = Number(prompt('Digite a sua altura: '))

soma = imcC(weigth,heigth)

console.log(`${soma} Esse é o seu imc ideal`)


