/**
 * Crearemos una tercera clase llamada ProductoAlimenticio que hereda de Producto, pero tiene propiedades y métodos adicionales específicos para productos alimenticios.
 */
class Producto {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  name: string;
  price: number;
  getPrice() {
    return this.price;
  }
}

class ProductoAlimenticio extends Producto {
    fechaCaducidad: Date;

    constructor(name: string, price: number, fechaCaducidad: any){
        super(name, price);
        this.fechaCaducidad = new Date(fechaCaducidad);
    }

    checkCaducidad(): boolean{
        const fechaActual = new Date;
        //console.log(fechaActual.getDate())
        if(fechaActual >= this.fechaCaducidad){
            return true;
        }else{
            return false;
        }
    }

}
/**
 * Crearemos una subclase de ProductoAlimenticio llamada ProductoCongelado que representará productos que necesitan ser almacenados en congelación.
 */
class ProductoCongelado extends ProductoAlimenticio{
    constructor(name: string, price: number, fechaCaducidad: any, temperaturaRecomendada: number, margen = 5){
        super(name, price, fechaCaducidad);
        this.temperaturaRecomendada = temperaturaRecomendada;
        this.margen = margen;
    }
    temperaturaRecomendada: number;
    // este atributo se itiliza como margen entre la temperatura Recomendada y 5 grados mas o menos. eso quiere decir que el chequeo este entre este rango.
    // Private hace que el atributo sea solo accesible  y modificable desde esta clase
    private margen: number;

    estaAlmacenadoCorrectamente(temperaturaActual: number): boolean{
        if(temperaturaActual >= this.temperaturaRecomendada-this.margen &&
            temperaturaActual <= this.temperaturaRecomendada+this.margen
        ){
            return true;
        }else{
            return false;
        }
    }

}


function main(){

    // Prueba producto alimenticio
        /*const pan = new ProductoAlimenticio("Pan Integral", 3.50, "2026-05-30");
        const estaVencido = pan.checkCaducidad();
        console.log("¿El producto está vencido?:", estaVencido ? "Sí" : "No");

        // Mostrar detalles del producto
        console.log("Nombre del Producto:", pan.name);
        console.log("Precio:", pan.getPrice());
        console.log("Fecha de Caducidad:", pan.fechaCaducidad);*/

    // Prueba producto congelado
        // Creación de la instancia
        const helado = new ProductoCongelado("Helado de Vainilla", 2.99, "2024-12-31", -18);

        // Temperatura actual de almacenamiento
        const temperaturaActual = -23; // Supongamos que esta es la temperatura actual

        // Verificar si el producto está almacenado correctamente
        const estaAlmacenadoCorrectamente = helado.estaAlmacenadoCorrectamente(temperaturaActual);
        console.log("¿Está almacenado correctamente?:", estaAlmacenadoCorrectamente ? "Sí" : "No");

        // Verificar si el producto está caducado
        const esCaducado = helado.checkCaducidad();
        console.log("¿El producto está caducado?:", esCaducado ? "Sí" : "No");

        // Mostrar detalles del producto
        console.log("Nombre del Producto:", helado.name);
        console.log("Precio:", helado.getPrice());
        console.log("Fecha de Caducidad:", helado.fechaCaducidad.toDateString());
        console.log("Temperatura Recomendada:", helado.temperaturaRecomendada, "grados");

}
main()