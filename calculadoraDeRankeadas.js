let ganhou = 150
let perdeu = 49

let saldoVitorias = calcularSaldo(ganhou, perdeu)

function calcularSaldo (vitorias, derrotas) {
    let saldo = vitorias - derrotas
    return saldo
}

if (saldoVitorias <= 10) {
  nivel = "Ferro"
} else if (saldoVitorias <= 20) {
  nivel = "Bronze"
} else if (saldoVitorias <= 50) {
  nivel = "Prata"
} else if (saldoVitorias <= 80) {
  nivel = "Ouro"
} else if (saldoVitorias <= 90) {
  nivel = "Diamante"
} else if (saldoVitorias <= 100) {
  nivel = "Lendário"
} else {
  nivel = "Imortal"
}
console.log("O herói tem saldo de " + saldoVitorias + " vitórias e está no nível de " + nivel)
