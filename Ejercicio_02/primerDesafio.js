// Creamos nuestra clase de usuario
class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    // Creamos un metodo para agregar mascotas
    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    // Creamos un metodo para contar mascotas y no requiere parametros
    countMascotas(){
        return this.mascotas.length
    }

    // Creamos un metodo para agregar libros y requiere dos parametros
    addBook(book, author){
        this.libros.push({name: book, author: author})
    }

    // Creamos un metodo para traernos los libros
    getBooks() {
        let arrayNombres = []
        for (let i = 0; i < this.libros.length; i++) {
            arrayNombres.push(this.libros[i].name)
        }
        return arrayNombres
    }

    // Creamos un metodo que devuelve un template string con nombre y apellido.
    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }
}

// Insertar datos mediante los metodos.
let nombre = 'Juan', apellido = 'Perez', libros = [], mascotas = []
let usuario = new Usuario(nombre, apellido, libros, mascotas);

// la variable usuario HEREDO las propieades de la clase Usuario y sus argumentos.
// nombre_de_la_variable.nombre_del_argumento
usuario.addMascota('Perro')
usuario.addMascota('Gato')
usuario.addBook('Harry Potter', 'J.K.Rowling')
usuario.addBook('The Shinning', 'Stephen King')

// Mostramos en la consola los valores agregados
console.log(usuario);
console.log(usuario.countMascotas());
console.log(usuario.getBooks());
console.log(usuario.getFullName());