/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/

function criptografar(){
	acao();
}

const entrada = document.getElementById("input-texto");
const botaoCripto = document.getElementById("btn-cripto");	
const botaoDescripto = document.getElementById("btn-descripto");
const inputTexto = document.getElementById("btn-copy");
const copiarTexto = document.getElementById("msg");
entrada.focus();
document.addEventListener("click", function(event){
	event.preventDefault();
	let botao = event.target.value;

	if(botao == "criptografar!"){
		criptografador();
	} else if(botao == "descriptografar!"){
		descriptografador();
	} else if (botao == "copiar"){
		copiar();
	}
});

function criptografador(){
	let valorTexto = entrada.value;
	let resultado = valorTexto
	   .replace(/e/gi, "enter")
	   .replace(/i/gi, "imes")
	   .replace(/a/gi, "ai")
	   .replace(/o/gi, "ober")
	   .replace(/u/gi, "ufat");
	   copiarTexto.value = resultado;
}

function descriptografador(){
	let textoValor = entrada.value;
	let resultado = textoValor
	   .replace(/enter/gi, "e")
	   .replace(/imes/gi, "i")
	   .replace(/ai/gi, "a")
	   .replace(/ober/gi, "o")
	   .replace(/ufat/gi, "u");
	   copiarTexto.value = resultado;
}

function copiar(){
	var conteudo = copiarTexto.value;

	if(conteudo != ""){
		navigator.clipboard
		  .writeText(conteudo)
		  .then(() => {
		  	alert("Texto copiado");
		  })
		  .catch((erro) => {
		  	alert("regra invalida");
		  });
	} else {
	}
}
