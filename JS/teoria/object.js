class Persona {
    //attributi
    nome;
    cognome;
    eta;

    //costruttore
    constructor(nome="marco", cognome="marconi", eta=4){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }

    //metodi

    set nome(nome){
        this._nome = nome
    }

    
}

let persona1 = new Persona();
let persona2 = new Persona("marco", "marconini", 4)

console.log(persona1)
console.log(persona2)