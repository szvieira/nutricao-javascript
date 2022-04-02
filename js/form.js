    var botaoAdicionar = document.querySelector("#adicionar-paciente"); // selecionar 
    botaoAdicionar.addEventListener("click", function(event) {  // adiciona um escutador de evento, que no caso, é um click no botão, e também, adiciona uma função anonima, que no caso é prevenir que a página recarregue sem nenhum dado
    event.preventDefault();

    var form = document.querySelector("#form-adiciona"); // aqui seleciona um conteudo dentro do form-adiciona
    var paciente = obtemPacienteDoFormulario(form) // chama a função 

    //var pacienteTr = montaTr(paciente) 
    pacienteTr.classList.add("paciente")

    var erro = validaPaciente(paciente);
    console.log(erro);
    if(erro.length > 0){
        exibeMensagensDeErro(erro);
        return;
    }

    adicionaPacienteNaTabela(paciente);

   // var tabela = document.querySelector("#tabela-pacientes"); // seleciona a tabela

    //tabela.appendChild(pacienteTr); // coloca como atributo filho todos os pacienteTr

    form.reset() // limpa o form 

    var mensagenserro = document.querySelector("#mensagem-erro");
    mensagenserro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}
function exibeMensagensDeErro(erro){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erro.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
        
    });
}


function obtemPacienteDoFormulario(form) {

    var paciente = { // declara um objeto, para um objeto ser declarado é preciso abrir chaves {} e nomear com dois pontos :
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)

    }
    return paciente; // retorna paciente
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); // executa a função monta TD dentro da função monta TR colocando os atributos filhos
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    return pacienteTr;
}

function montaTd (dado,classe){
    var td = document.createElement("td")
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){

    var erros = [];
    if(paciente.nome.length == 0){
        erros.push("Nome em branco")
    }
    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    if (paciente.gordura.length == 0){
        erros.push("Gordura em branco ");
    }
    if(paciente.peso.length == 0){
        erros.push("Peso em branco ");
    }
    if(paciente.altura.length == 0){
        erros.push("Altura em branco ");
    }
    return erros;
}