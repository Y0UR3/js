const personagem = {
  nome: "Scorpion",
  clan: "Shirai Ryu",
  idade: 32,
  status: "vivo",
  chamado: function () {
    return "O estado do " + this.nome + " é " + this.status;
  },
};

console.log(personagem.chamado());

/*
                                    O que é um objeto em JavaScript?

Um objeto em JavaScript é uma coleção de pares chave-valor, onde cada chave (também chamada de propriedade) está associada a um valor. 
As propriedades podem conter dados primitivos (como números, strings e booleanos) ou outras estruturas de dados, incluindo outros objetos.

*/
