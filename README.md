# js
 Estudos em JavaScript
===================================================================

o nome de cada variavel, chamamos de identificadores

regras:

°Podem começar com letra, $ ou _

°Não podem começar com números
ex: não pode começar com 1s, e sim s1, senão dá erro

°E possivel usar letras ou números

°É possivel usar acentos e símbolos

°Não podem conter espaços
substitui pelo sinal de _

°Não podem ser palavras reservadas
ex: function, alert
palavras que já são utilizadas pelo JS como comandos

===================================================================

Dicas pra criar variavel

° Maiúsculas e minúsculas fazem diferença
se eu crio uma variavel a minusculo, vou terq ue usar a minusculo
se eu criar minusculo e depois usar maiusculo vai dá erro
var a = 10
var A = 20

°Tente escolher nomes coerentes para variáveis
quero guardar nome de uma pessoa: nome da variavel "nome"
quero guardar um salário: "salário" ou "sal"
quero gurdar idade: "idade" 
telefone: "tel" "telefone"

°Evite se tornar um 'progrmador alfabeto' ou um 'programador contador'
o programador alfabeto é que todas as variaveis dele é a,b,c,d,e,f
e o contador é aqueles que usam n1,n2,n3,n4,n5
foge disso!


================================================================================


variaveis são pra guardar dados.

3 tipos de dados que guardamos:

5 18 -15.9 3.14 8.0
number

true false
booleans

"google" "javascript" "maria" "21 26975925"
string


=====================================================================================================================

Uma "cola" de um outro estudante que anotou também:

Minhas Anotações:
Comandos em JS:

<script>	window.alert (‘este comando emite uma mensagem!')
window.confirm (‘este comando faz uma pergunta de confirmação')
window.prompt (‘este comando faz um pergunta de resposta!')
</script>
______________________________________________________________________

Variáveis:

Como Criar variáveis, Ex: var nome ou let nome

para uma variável receber um valor usamos var nome = Gustavo (desta forma criamos uma variável e ao mesmo tempo demos uma valor a ela) 

nome = Gustavo (desta forma apenas demos um valor para a variável )

Regras das variáveis:
Podem começar com: Letra, $ ou _
Não podem começar com números 
É possível usar letras ou números
É possível usar  acentos e símbolos 
Não pode conter espaços 
Não pode usar palavras que são comandos

Dicas para nomes das variáveis: 
Maiúsculas e Minúsculas fazem a diferença!
Tente escolher nomes coerentes a função da variável. Ex: Variável que vai armazenar a idade, coloca o nome dela de “idade”
Evite se tornar um “Programador Alfabeto” ou um “Programador Numérico”. Ex: Não usar os nomes das variáveis como “a”, “b”, “c”, etc; ou “a1”, “a2”, “a3”, etc.

Tipos de Dados das Variáveis: (Tipos Primitivos, lembrando que existem muitas outras!)

Numbers;
Strings;
Boolean;

Numbers: 1; -2; 4.5; 6.555 -> Basicamente números
Strings: Maria, Google, Joao, pedreiro, (seu CPF) -> Basicamente cadeia de caracteres
Boolean: True; False ->

______________________________________________________________________

FORMATANDO STRINGS

let s = 'JavaScript'

'Estou aprendendo s'       //não faz interpolação
'Estou aprendendo ' +      //usa concatenação
`Estou aprendendo ${s}`    //usa template string

s.length                   //quantos caracteres tem a string
s.toUpperCase()            //tudo para 'MAIÚSCULAS'
s.toLowerCase()            //tudo para 'minúsculas'

FORMATANDO NUMEROS

let n1 = 166.6

n1.toFixed(2)
'166.60'

n1.toFixed(2).replace('.', ',')
'166,60'

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
'R$ 166,60'

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
'US$ 166,60'

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})
'€ 166,60'