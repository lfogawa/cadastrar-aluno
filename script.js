var nome = prompt("Digite o nome do estudante");
var idade = prompt("Digite a idade do estudante");

class Estudante {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  get declarar() {
    return document.getElementById("cadastro").innerHTML = `O nome do estudante é ${this.nome} e sua idade é ${this.idade}`;
  }
}

const estudante = new Estudante(nome, idade);
estudante.declarar();