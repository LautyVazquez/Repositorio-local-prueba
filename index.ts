/**
 * La herencia es la capacidad que tiene una clase de extenderse a otra clases "hijas". La clase hija hereda todas las propiedades y atributos de la clase padre.
 */

class mamifero{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    comer(){
        console.log(this.name + " esta comiedo");
    }
}

class perro extends mamifero{
    // Para redefinir el constructor debemos utilizar super
    constructor(name: string, colorPelo: string){
        super(name);
        this.colorPelo = colorPelo;
    }

    colorPelo: string;
    
    ladrar(){
        console.log(this.name + " esta ladrando");
    }

}

function main(){
    const perro1 = new perro("Ares", "dorado");
    console.log(perro1);
    // la clase perro puede acceder al metodo ladrar, como tambien al metodo comer de la clase animal
    perro1.comer();
    perro1.ladrar();
}
main();

