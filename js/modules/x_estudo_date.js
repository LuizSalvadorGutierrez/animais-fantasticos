// Estudo à parte de trabalho com "TEMPO"

const agora = new Date();
const futuro = new Date("Feb 17 2022 08:29");

console.log(agora.getMonth());
console.log(futuro);

function transformarDias(tempo) {
  return tempo / (24 * 60 * 60 * 1000); // quantidade de milesegundos de um dia
}
console.log(transformarDias(agora.getTime())); //18675 dias desde 01/01/1970
console.log(futuro.getTime());

const diasAgora = transformarDias(agora.getTime());
const diasFuturo = transformarDias(futuro.getTime());

console.log(diasFuturo - diasAgora);

/* Código */

export default function initFuncionamento() {}

const funcionamento = document.querySelector("[data-semana]");
const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

console.log(diasSemana); // (5) [1, 2, 3, 4, 5]
console.log(horarioSemana); // (2) [8, 18]

const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horarioAgora = dataAgora.getHours();

const teste = [1, 2, 3, 4, 5].indexOf(4); // vai verificar a posição do númro 4, e retornar 3
// se colocarmos 6, que não existe, retorna -1

const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

console.log(diaAgora); // 3 ==> quarta feira ==> semana começa em domingo "0"
console.log(horarioAgora); // 8 ==> eram 8:51 horas
console.log(semanaAberto); // true ==> está aberto

const horarioAberto =
  horarioAgora >= horarioSemana[0] && horarioAgora <= horarioSemana[1];
//if (horarioAgora >= horarioSemana[0] && horarioAgora <= horarioSemana[1]) {
//  console.log("Sim é maior");
//} // ==> passou para cima como ternário

console.log(horarioAberto); // true

if (semanaAberto && horarioAberto) {
  funcionamento.classList.add("aberto");
}
