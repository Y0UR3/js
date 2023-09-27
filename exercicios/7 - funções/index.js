
function soma(valor1, valor2){
    return valor1 + valor2;
}
document.getElementById('texto') = soma(15, 15);





/*
O que é uma função?

    Uma função em JavaScript é como uma receita em um livro de culinária. 
    Ela é um conjunto de instruções que fazem algo específico quando você as segue. 
    Essas instruções são agrupadas em um bloco de código e podem ser usadas repetidamente sempre que você precisar realizar a mesma tarefa.


Como você cria uma função?

        Para criar uma função, você precisa seguir alguns passos:

        Declaração da função:

        Use a palavra-chave function seguida por um nome para a função. O nome é como um rótulo para a sua receita. 
        Por exemplo:

            function saudacao() {
            // Código da função vai aqui
            }

Parâmetros (opcional):

        Se a sua função precisa de informações específicas para funcionar, você pode adicionar parâmetros dentro dos parênteses. Os parâmetros são como ingredientes que você precisa para fazer a receita. 
        Por exemplo:

            function saudacao(nome) {
            // Usamos 'nome' como um parâmetro
            console.log(`Olá, ${nome}!`);
            }


Corpo da função:

        O corpo da função contém as instruções que serão executadas quando você chamar a função. É onde você escreve o código da sua "receita". 
        Por exemplo:   

            function saudacao(nome) {
            console.log(`Olá, ${nome}!`);
            }

            
Como você usa uma função?

        Depois de criar uma função, você pode usá-la chamando-a pelo seu nome, seguido de parênteses. 
        Se a função espera parâmetros, você precisa fornecê-los entre os parênteses.

            saudacao("João");

Quando você chama a função saudacao("João"), o código dentro da função é executado e você verá a mensagem "Olá, João!" no console.


Por que as funções são úteis?

        As funções são úteis porque permitem que você reutilize código. Em vez de escrever o mesmo código várias vezes, você cria uma função e a chama sempre que precisar realizar a mesma tarefa. Isso torna seu código mais organizado, mais fácil de entender e menos suscetível a erros.

        Em resumo, uma função em JavaScript é como uma receita que contém um conjunto de instruções para realizar uma tarefa específica. Você declara a função com function, pode adicionar parâmetros se necessário, escreve o código dentro do corpo da função e, em seguida, a chama quando quiser executar essas instruções. É uma das características mais poderosas e fundamentais da linguagem JavaScript.
*/