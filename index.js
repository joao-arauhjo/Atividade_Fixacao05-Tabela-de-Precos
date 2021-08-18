//5.Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.//

function Car(veiculo, valor) {
  this.veiculo = veiculo;
  this.valor = valor
}

let car01 = new Car ('Onix Plus', 'R$ 69.000');
let car02 = new Car ('Kwid', 'R$ 42.600');
let car03 = new Car('Fiat Mobi' , 'R$ 44.690');

console.table([car01, car02, car03]);

let escolha = prompt('Qual carro você prefere? ');

if (escolha == '0') {
  console.log('O dono é João');
}
else if (escolha == '1') {
  console.log('A dona é Charnely');
}
else if (escolha == '2') {
  console.log('A dona é Ana');
}
