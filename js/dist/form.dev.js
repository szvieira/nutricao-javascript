"use strict";

var botaoAdicionar = document.querySelector("#adicionar-paciente"); // selecionar 

botaoAdicionar.addEventListener("click", function (event) {
  // adiciona um escutador de evento, que no caso, é um click no botão, e também, adiciona uma função anonima, que no caso é prevenir que a página recarregue sem nenhum dado
  event.preventDefault();
  var form = document.querySelector("#form-adiciona"); // aqui seleciona um conteudo dentro do form-adiciona

  var paciente = obtemPacienteDoFormulario(form); // chama a função 

  var pacienteTr = montaTr(paciente);
  pacienteTr.classList.add("paciente");
  var erro = validaPaciente(paciente);

  if (erro.lenght > 0) {
    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.textContent = erro;
    return;
  }

  var nome = form.nome.value; // o value é o valor que está em cada campo

  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;
  var tabela = document.querySelector("#tabela-pacientes"); // seleciona a tabela

  tabela.appendChild(pacienteTr); // coloca como atributo filho todos os pacienteTr

  form.reset(); // limpa o form 
});

function obtemPacienteDoFormulario(form) {
  var paciente = {
    // declara um objeto, para um objeto ser declarado é preciso abrir chaves {} e nomear com dois pontos :
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  };
  return paciente; // retorna paciente
}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); // executa a função monta TD dentro da função monta TR colocando os atributos filhos

  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function validaPaciente(paciente) {
  if (validaPeso(paciente.peso)) {
    return "";
  } else {
    return "Peso é inválido";
  }
}