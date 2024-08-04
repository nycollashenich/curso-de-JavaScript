const nome = "Nycollas"

console.log(nome.charAt(5))
console.log(nome.charAt(10))

console.log(nome.charCodeAt(3))
// unicode table

console.log(nome.indexOf('y'))

console.log(nome.substring(0,9))
console.log(nome.substring(3,5))

console.log('Meu nome é '.concat(nome).concat('!'))

const escola = 'ETEC'
console.log('Olá, eu sou o '.concat(nome), 'e estudo na escola '.concat(escola))

const name1 = 'N3co4l5as0'
console.log(name1.replace(/\d/g, 'A'))

console.log('Nycollas,Henrique,Henich'.split(','))
console.log('Nycollas-Henrique-Henich'.split('-'))
console.log('Nycollas.Henrique.Henich'.split('.'))

console.log('nycollas'.toUpperCase())

const sobrenome = 'Henich'
console.log('Nycollas ' + sobrenome.concat('!'))


console.log('Olá eu sou o ' + nome, 'e sou estudante da ' + escola)