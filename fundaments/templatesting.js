const nome = 'Jonas'
const concatenacao = 'Olá eu sou o ' + nome
console.log(concatenacao)

const template = `Olá tudo bem? Eu sou o ${nome} e 1 + 1 = ${1 + 1}`
console.log(template)

// expressoes  
const up = texto => texto.toUpperCase()
console.log(`Ei ...${up('cuidado')}`)