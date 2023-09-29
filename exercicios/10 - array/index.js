/*
        Array é uma estrutura de dados que permite armazenar e organizar uma coleção de valores, sejam eles números, strings, objetos, funções ou até mesmo outros arrays. 
        Os arrays são usados para trabalhar com conjuntos de dados de forma eficiente. Aqui estão alguns conceitos fundamentais sobre arrays em JavaScript:

        Declaração de um Array:
        Você pode criar um array em JavaScript de várias maneiras, mas a forma mais comum é usando colchetes [] e separando os valores com vírgulas.
                let frutas = ["maçã", "banana", "laranja"];
        

        
        Acesso a Elementos:
        Os elementos de um array são acessados por meio de um índice, começando em 0 para o primeiro elemento.
                console.log(frutas[0]); // Saída: "maçã"



        Comprimento do Array:
        Você pode obter o número de elementos em um array usando a propriedade length.
                console.log(frutas.length); // Saída: 3


        Adição e Remoção de Elementos:
        Você pode adicionar elementos a um array usando o método push() e removê-los usando pop() para o último elemento, ou shift() para o primeiro elemento.
                frutas.push("uva"); // Adiciona "uva" ao final do array
                frutas.pop(); // Remove o último elemento ("uva")
                frutas.shift(); // Remove o primeiro elemento ("maçã")


        Iteração em um Array:
        Você pode percorrer todos os elementos de um array usando loops, como for ou forEach().
                for (let i = 0; i < frutas.length; i++) {
                console.log(frutas[i]);
                }

                frutas.forEach(function(fruta) {
                    console.log(fruta);
                });


        Métodos de Array:
        JavaScript oferece muitos métodos incorporados para manipular arrays, como map(), filter(), reduce(), slice(), entre outros. Esses métodos tornam a manipulação de arrays mais fácil e eficiente.
                let numeros = [1, 2, 3, 4, 5];
                let dobrados = numeros.map(function(numero) {
                    return numero * 2;
                });
                // dobrados agora é [2, 4, 6, 8, 10]

            
        Arrays Multidimensionais:
        Você pode criar arrays dentro de arrays, criando assim arrays multidimensionais. Isso é útil para representar dados tabulares ou matrizes.
                let matriz = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ];



        Métodos para Adicionar e Remover Elementos no Início ou Meio:
        Além de push() e pop(), você pode usar unshift() para adicionar elementos no início e splice() para adicionar ou remover elementos em posições específicas.
                frutas.unshift("abacaxi"); // Adiciona "abacaxi" no início
                frutas.splice(1, 0, "morango"); // Adiciona "morango" na segunda posição


        Os arrays são uma parte fundamental da linguagem JavaScript e são amplamente usados em programação para armazenar, acessar e manipular coleções de dados. Eles oferecem flexibilidade e versatilidade na manipulação de dados em um programa.

*/
