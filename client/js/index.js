//Array que busca todos os campos do formulário
var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

// Imprime no console os campos
console.log(campos);

// Seletor da tabela e seu corpo
var tbody = document.querySelector('table tbody');

/** Seletor da classe "form"
 * com observador de evento "submit" que dispara os eventos abaixo
 * (armazenar dados do formulário em uma tabela).
*/

document.querySelector('.form').addEventListener('submit', function(event){
    
    // Impede que a página seja recarregada ao submeter o formulário
    event.preventDefault();

    // Variável da criação de uma tr (linha) na tabela
    var tr = document.createElement('tr');

    // Laço para iterar o array de campo
    campos.forEach(function(campo){

        // Variável de criação de uma td (célula) na tabela 
        var td = document.createElement('td');

        // define o que vem dentro da tag td recém criada como sendo o valor da iteração
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    // Variável que cria a célula de volume 
    var tdVolume = document.createElement('td');

    // Imputa na célula de volume o resultado de quantidade * valor
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();

});