// Crear un model class
// initialize: es como un metodo constructor
/*var Libro = Backbone.Model.extend({
    initialize: function() {
        console.log('Se ha creado una nueva instancia');

        // la funcion change se ejecuta cada vez que se cambia el modelo
        this.on('change', function(){
            console.log('el modelo ha cambiado');
        });
    },
    // defaults crea valores por defecto al hacer una instancia del objeto
    defaults: {
        autor: 'Desconocido',
    }
});*/

// el metodo toJSON despliega los atributos y el contenido del modelo
// existen los metodos set y get se accede a ellos de la siguiente manera
/*
    modelo.get('atributo');
    modelo.set('atributo', 'valor'); o
    modelo.set({
        'atributo1': 'valor',
        'atributo2': 'valor'
    });
*/

// sincronizacion de modelos: se sincroniza con los datos del servidor para ello definimos la propiedad urlRoot
// es recomendable no utilizar esta propiedad a menos qeu el modelo no este dentro de una coleccion

var app = app || {};

app.Libro = Backbone.Model.extend({

    urlRoot: 'libros/',

    defaults: {
        autor: 'Desconocido'
    },

    initialize: function() {
        console.log('Se ha creado una nueva instancia del Modelo Libro.');

        this.on('change', function(){
            console.log('El modelo ha sido modificado.');
        });
    },

    validate: function(atributos) {
        if(!atributos.titulo) {
            return 'Debe tener un titulo.';
        }
    }

});
/*
Optiene los datos del servidor
var libroUno = new Libro({id:'1',});
libroUno.fetch();

almacena datos en el servidor
var libroDos = new Libro({
    titulo: 'Demian',
    autor: 'Herman Hesse',
    categoria: 'literatura', 
});

libroDos.save();

Editar datos del servidor
var libroUno = new Libro({id:'1',});
libroUno.fetch();

libroUno.set({autor: 'desconocido'});
libroUno.save();

Validacion de datos
var Libro = Backbone.Model.extend({
    validate: function(atributos) {
        if(!atributos.titulo) {
            return 'debe tener titulo.';
        }
    } 
});
*/