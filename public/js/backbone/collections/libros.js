// las colecciones en un conjunto ordenado de modelos, estos extienden de Backbone.collection
// La principal funcionalidad que tienen las colecciones es agregar o eliminar modelos
var LibrosCollection = Backbone.Collection.extend({
    model: Libro
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
*/