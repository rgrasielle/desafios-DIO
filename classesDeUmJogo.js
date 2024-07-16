class Hero {
    constructor (nome, idade, tipo) {
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
    }
    atacar(){
      console.log(`O ${this.tipo} atacou usando ${ataque}.`)
    }
  }
  
  let heroi = new Hero("Logan", 26, "ninja")
      
  let tipo = ["guerreiro", "mago", "monge", "ninja"]
  let ataque = ["magia", "espada", "artes marciais", "shuriken"] 
      
  if (tipo === "guerreiro") {
     ataque = "magia";
  } else if (tipo === "mago") {
     ataque = "espada";
  } else if (tipo === "monge") {
     ataque = "artes marciais";
  } else {
     ataque = "shuriken"
  }
         
  heroi.atacar()