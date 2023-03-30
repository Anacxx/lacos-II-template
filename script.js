// --------------- PRÁTICA GUIADA ---------------

const bimestre1 = [10,9,9,6]
const bimestre2 = [10,7,9,10]
const bimestre3 = [9,5,10,10]
const bimestre4 = [9,9,10,9]

const notasDoAno = [bimestre1,bimestre2,bimestre3,bimestre4]

for (let c = 0; c < notasDoAno.length; c++){
  let soma = 0
  for (let j = 0; j < notasDoAno[c].length;j++){
    soma += notasDoAno[c][j]
  }
  console.log(`A soma das notas do ${c+1} bimestre é ${soma}`)
  console.log(`A média do ${c+1} bimestre é ${soma/notasDoAno[c].length}`)
}

for (let i in notasDoAno){
  let soma = 0
  for (let nota of notasDoAno[i]){
    soma = soma + nota
  }
  console.log(`A soma das notas do ${Number(i)+1} bimestre é ${soma}`)
  console.log(`A média do ${Number(i+1)} bimestre é ${soma/notasDoAno[i].length}`)
}

// --------------- EXERCÍCIO DE FIXAÇÃO ---------------
const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻
for (let i = 0; i < filmes.length;i++){
  console.log(`${filmes[i].titulo}, de ${filmes[i].ano} dirigido por ${filmes[i].diretor}`)
  for ( let c = 0; c < filmes[i].elenco.length; c++){
    console.log(`Elenco: ${filmes[i].elenco[c]}`)
  }
}