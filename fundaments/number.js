const peso1 = 9.0;
const peso2 = 3.56;

console.log(peso1);
console.log(Number.isInteger(peso1));

console.log(peso2);
console.log(Number.isInteger(peso2));

const teste = 50.0;
console.log(Number.isInteger(teste))
console.log(typeof(teste))



const nota1 = 10.0;
const nota2 = 5.0;

const total = nota1 * peso1 + peso2 * nota2;
const media = total / (peso1 + peso2)

// toFixed == casa deciaml
console.log(media.toFixed(3))
console.log(media.toString(2))
console.log(typeof(media));
