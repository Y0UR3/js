/*

    Variáveis em JavaScript são usadas para armazenar e manipular dados. 
    Elas são como recipientes que você pode usar para armazenar valores, como números, strings (texto), objetos e muito mais. 
    Variáveis permitem que você atribua um nome a um valor, tornando mais fácil referenciar e manipular esses valores em seu código.


    Declaração de Variáveis:
    Você pode declarar uma variável em JavaScript usando a palavra-chave var, let ou const, seguida pelo nome da variável. 
    Por exemplo:
                var nome;
                let idade;
                const PI = 3.1415;

        var: Era a maneira tradicional de declarar variáveis, mas possui escopo de função (escopo de função significa que a variável é visível em toda a função onde foi declarada).

        let: Introduzido no ES6 (ECMAScript 2015), permite que você declare variáveis com escopo de bloco (visível apenas dentro do bloco onde foi declarada).

        const: Também introduzido no ES6, cria uma variável de somente leitura com escopo de bloco. Isso significa que seu valor não pode ser reatribuído após a atribuição inicial.



    Atribuição de Valores:
    Você pode atribuir um valor a uma variável usando o operador de atribuição =. 
    Por exemplo:
                nome = "João";
                idade = 30;




    Utilizando Variáveis:
    Você pode usar o valor de uma variável em operações matemáticas, concatenação de strings, como parte de instruções condicionais e em muitos outros lugares em seu código. 
    Por exemplo:
                var a = 5;
                var b = 10;
                var soma = a + b;
                var frase = "O resultado é: " + soma;



    Regras para Nomes de Variáveis:

    Os nomes de variáveis devem começar com uma letra, sublinhado _ ou cifrão $.
    Eles podem conter letras, números, sublinhados e cifrões.
    JavaScript é sensível a maiúsculas e minúsculas, portanto, nome e Nome são consideradas variáveis diferentes.
    Boas Práticas:

    Use nomes de variáveis descritivos para que seu código seja mais legível (exemplo: idade em vez de x).
    Prefira const sempre que possível, pois isso ajuda a evitar acidentalmente reatribuir valores.
    Use let quando você precisa de uma variável com escopo de bloco que pode ser reatribuída.
    Evite o uso de var em favor de let e const, pois var possui escopo de função e pode levar a problemas de escopo.
    Lembre-se de que a escolha entre var, let e const depende do escopo e da mutabilidade desejados para a variável em seu código. É importante entender como esses diferentes tipos de variáveis funcionam para escrever código JavaScript eficiente e livre de bugs.
    


*/

