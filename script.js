// carne - 400 gr por pessoa + de 6 horas - 550
// cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
// refrigerante/água - 1000 ml por pessoa + de 6 horas 1500ml
// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
	console.log("calculando...");


	let adultos = inputAdultos.value;
	let criancas = inputCriancas.value;
	let duracao = inputDuracao.value;


	let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
	let qtdTotalCerveja = cervejaPP(duracao) * adultos;
	let qtdTotalBebidas = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);


	resultado.innerHTML = `<p>${qdtTotalCarne / 1000} kg de Carne</p>`
	resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja</p>`
	resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Pet's de 2l refrigerante</p>`
}


function carnePP(duracao){
	if (duracao >=6){
		return 650;
	} else {
		return 400;
	}
	
}

function cervejaPP(duracao){
	if (duracao >=6){
		return 2000;
	} else {
		return 1200;
	}
	
}

function bebidaPP(duracao){
	if (duracao >=6){
		return 1500;
	} else {
		return 1000;
	}
	
}