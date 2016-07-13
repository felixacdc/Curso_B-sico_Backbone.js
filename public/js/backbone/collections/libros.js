// las colecciones en un conjunto ordenado de modelos, estos extienden de Backbone.collection
// La principal funcionalidad que tienen las colecciones es agregar o eliminar modelos
var LibrosCollection = Backbone.Collection.extend({
    model: Libro,
    url: '/libros'
});

/*
var libros = new LibrosCollection();
libros;
// Agregr y eliminar modelos
var a = new Libro({ titulo: 'titulo 1', autor: 'autor 1' }),
    b = new Libro({ titulo: 'titulo 2', autor: 'autor 2' }),
    c = new Libro({ titulo: 'titulo 3', autor: 'autor 3' });

var libros = new LibrosCollection([a, b]);
libros.toJSON();
libros.add(c);
libros.toJSON();
libros.remove(a);
libros.toJSON();
// Para agregar o eliminar mas de un modelo a la vez se manda un arreglo con los modelos
// Optener los modelos de la coleccion, se realiza por el id, id attribute o el cid
// Por id: representa al id enviado por la db
var d = new Libro({ titulo: 'titulo 6', autor: 'autor 6', id: '6' });
var libros = new LibrosCollection(d);
var modeloDevuelto = libros.get(6);
modeloDevuelto.toJSON();
// Por el cid: es un identificador agregado automaticamente por backbonejs
var e = new Libro({ titulo: 'titulo e', autor: 'autor e'});
e;
libros.add(e);
var modelCid = libros.get("c2");
modelCid.toJSON();

// agregar eventos a la coleccion
var libros = new LibrosCollection();
libros.on('add', function() {
    console.log("Se agrego un modelo a la coleccion") ;
});

libros.add([
    { titulo: 'titulo 1', autor: 'autor 1' },
    { titulo: 'titulo 2', autor: 'autor 2' }
]);

// modificar modelos de colecciones
var libros = new LibrosCollection();
libros.add([
    { id: 6, titulo: 'titulo 6', autor: 'autor 6' },
    { id: 7, titulo: 'titulo 7', autor: 'autor 7' }
]);
libros.set([
    { id: 6, titulo: 'titulo 6', autor: 'aula 6' },
    { id: 8, titulo: 'titulo 8', autor: 'autor 8' }
]);
libros.toJSON();
// Resetear el modelo
var libros = new LibrosCollection();
libros.add([
    { id: 6, titulo: 'titulo 6', autor: 'autor 6' },
    { id: 7, titulo: 'titulo 7', autor: 'autor 7' }
]);
libros.set([
    { id: 6, titulo: 'titulo 6', autor: 'aula 6' },
    { id: 8, titulo: 'titulo 8', autor: 'autor 8' }
]);
libros.toJSON();
libros.reset([{ titulo: 'titulo reset', autor: 'autor reset' }]);
libros.toJSON();
// para eliminar todos los modelos se pasa la funcion reset sin parametros
// para traer los datos del servidor y guardarlos en una coleccion, se define el atributo url en la coleccion y despues se utiliza el fetch()
var libros = new LibrosCollection();
libros.fetch();
libros.toJSON();
*/