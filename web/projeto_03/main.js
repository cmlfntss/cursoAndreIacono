let firstName = prompt('Digite o seu primeiro nome: ') 
/* função nada mais é do que uma execução de tarefas, sempre retonar 
valor como string*/

let lastName = prompt('Digite o seu sobrenome: ')

let age = parseInt(prompt('Digite sua idade: ')) 
/* Aqui adicionamos a condição  parSeInt que serve para visualizarmos o valor que era string em
number */

let age2 = 2
/* Para criarmos uma variável que não pode ser alterada usamos o const, isso faz com que 
ela se torne fixa e imutável */

age = age + age2

console.log(firstName)
console.log(lastName)
console.log(age)