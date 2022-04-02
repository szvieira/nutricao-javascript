
      // var  nome = window.prompt("Qual seu nome? ") // Chamei a variavel de nome e dei a propriedade de window.prompt para ela receber informação que o usuario colocou
     // var titulo = document.querySelector(".titulo") // Uma variavel com a propriedade document.querySelector para selecionar uma determinada tag do html, no caso a class titulo(tem que colocar .titulo ou # se for ID) 
    // console.log(titulo)  Apenas para mostrar no console
    // console.log(titulo.textContent)  Para mostrar no console o que tem dentro do titulo
     // titulo.textContent = nome  // Trocar o que tem dentro do titulo para a variavel nome que foi pedida para o usuario no window.prompt

        var pacientes = document.querySelectorAll(".paciente");

        for (var i = 0; i < pacientes.length; i++) {
     
         var paciente = pacientes[i];
     
         var tdPeso = paciente.querySelector(".info-peso");
         var peso = tdPeso.textContent;
     
         var tdAltura = paciente.querySelector(".info-altura");
         var altura = tdAltura.textContent;
     
         var tdImc = paciente.querySelector(".info-imc");
     
         var pesoEhValido = validaPeso(peso); // true ou false
         var alturaEhValida = validaAltura(altura);
        
       
         if (!pesoEhValido) {
             //console.log("Peso inválido!");
             pesoEhValido = false;
             tdImc.textContent = "Peso inválido";
             paciente.classList.add("paciente-invalido");
             
         }
     
         if (!alturaEhValida) {
            // console.log("Altura inválida!");
             alturaEhValida = false;
             tdImc.textContent = "Altura inválida";
             paciente.classList.add("paciente-invalido");
         }
     
       if (alturaEhValida && pesoEhValido) {
             var imc = peso / (altura * altura);
             tdImc.textContent = imc.toFixed(2);
         }
     }

     function validaPeso(peso){
         if(peso >= 0 && peso < 1000){
             return true;
         }else{
             return false;
         }
     }

     function validaAltura(altura){
         if(altura >= 0 && altura < 3.00 ){
             return true;
         }else{
             return false;
         }
     }


    function calculaImc(peso, altura){
        var imc = 0;
        imc = peso / (altura*altura);
        return imc.toFixed(2);
    }

    