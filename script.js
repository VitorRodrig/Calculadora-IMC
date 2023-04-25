function calculaImc(){
    var altura = document.querySelector('.inputAltura').value/100 
    var peso = document.querySelector('.inputPeso').value

    var imc = peso / altura ** 2
    var classificacao = ''

    if (imc < 18.5){
        classificacao = 'Você está magro'
    } else if(imc < 24.9){
        classificacao = 'Você está normal'
    } else if(imc < 29.9){
        classificacao = 'Você está com sobrepeso'
    } else if(imc < 39.9){
        classificacao = 'Você está com obesidade'
    } else{
        classificacao = 'Você está com obesidade mórbida'
    }
    
    document.getElementById('text-area').innerText = 'Classificação de peso: ' + classificacao
}