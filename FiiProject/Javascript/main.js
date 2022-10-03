const valorCota = 10.37;// custo de 1 cota
const rendimento = 0.13; //rendimento de 1 cota
let contadorCotas = 80;
let rendimentoMes = 0;
let rendimentoBruto = 0; //RENDIMENTO DO MÊS PARA SER EXIBIDO!!!!!!!!!!!
let dadosRendimentos = [];
let numeroCotas = 0;
let mes = 1;
let investimento = valorCota * contadorCotas;// = 80 cotas

numeroCotas = investimento / valorCota; //Número total de cotas
rendimentoBruto = numeroCotas * rendimento;

console.log('INVESTIMENTO INICIAL: ' + investimento.toFixed(2));
console.log('Número de cotas: ' + numeroCotas);


if(rendimentoBruto > valorCota){
    rendimentoMes = rendimentoBruto - valorCota;
    numeroCotas++;
    dadosRendimentos.push(rendimentoMes);
}

console.log(' ');
console.log(`MÊS: ${mes}`);
console.log('RENDIMENTO BRUTO DO MÊS: ' + rendimentoBruto.toFixed(2));
console.log(`Rendimento LÍQUIDO do mês (${rendimentoBruto.toFixed(2)} - ${valorCota}) = ${rendimentoMes.toFixed(2)}`);
console.log('Novo número de cotas: ' + numeroCotas);
console.log(`TOTAL DESEMBOLSADO: ${investimento.toFixed(2)}`);
console.table(dadosRendimentos);// TABELA DE RENDIMENTOS

mes++;

//___________________________MÊS SEGUINTE__________________

rendimentoBruto = numeroCotas * rendimento;

if(rendimentoBruto > valorCota){
    rendimentoMes = rendimentoBruto - valorCota;
    numeroCotas++;
    dadosRendimentos.push(rendimentoMes);
}

console.log(' ');
console.log(`MÊS: ${mes}`);
console.log('RENDIMENTO BRUTO DO MÊS: ' + rendimentoBruto.toFixed(2));
console.log(`Rendimento LÍQUIDO do mês (${rendimentoBruto.toFixed(2)} - ${valorCota}) = ${rendimentoMes.toFixed(2)}`);
console.log('Novo número de cotas: ' + numeroCotas);
console.log(`TOTAL DESEMBOLSADO: ${investimento.toFixed(2)}`);
console.table(dadosRendimentos);// TABELA DE RENDIMENTOS


//PAREI AQUI!!!!!!!!!!!!!!!!!!!!!!!__________________________________
//FAZER O SOMATÓRIO DOS RENDIMENTOS LÍQUIDOS PARA CONTROLÁ-LOS ATÉ QUE ALCANCEM
//O VALOR PARA COMPRAR MAIS UMA COTA
















