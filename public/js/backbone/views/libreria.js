// Creacion de una vista
// var Libreria = Backbone.View.extend();
// crear la propiedad "el" desde 0
/*var Libreria = Backbone.View.extend({
    tagName: 'span',
    className: 'nombreClase',
    id: 'nombreId'
});*/
// crear la propiedad "el" desde un elemento existente
/*var Libreria = Backbone.View.extend({
    el: '.vista',
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html('<h1>Metodo render en accion.</h1>');
    }
});*/
// var Libreria = Backbone.View.extend({
//     el: '.vista',
//     events: {
//         'click .cambiarColor': 'cambiarColor'
//     },
//     cambiarColor: function() {
//         this.$el.css('color', 'red');
//     }
// });

// var vista = new Libreria();
// el objeto principal de una vista es "el" ya que contiene toda la vista dentro de un elemento DOM
// "el" tiene tres propiedades tagName, id y className
/*
ejemplo

var Libreria = Backbone.View.extend({
    tagName: 'span'
});
var vista = new Libreria();
// cuando no definimos ninguna de las proviedades el valor por defecto del "el" es un div
vista.el;

// Otra forma de asignar la propiedad "el" a un elemento ya creado en nuestra pagina
// si se le agrega un $ antes del "el" ($el) optiene las caracteristicas de jquery
var vista = new Libreria();
vista.$el;
vista.$el.text("hola mundo con Backbone.js");
vista.$el.css("background", "blue");
vista.$el.append('<strong>Genial</strong>');
*/
// el metodo render es el mas importante ya que ayuda a renderizar la vista de nuestra pagina
// el metodo initialize se registra cada vez que creamos una vista
// los eventos se registran dentro de un hash la sintaxis es 'Nombre_de_evento selector': 'funcion_callback'
var app = app || {};

app.Libreria = Backbone.View.extend({
    el: '#app',
    initialize: function() {
        app.libros.on('add', this.mostrarLibro);
        app.libros.fetch();
    },

    mostrarLibro: function(modelo) {
        var vista = new MostrarLibroView({model:modelo});
        $(".libros").append( vista.render().$el );
    }
});

var MostrarLibroView = Backbone.View.extend({
    template: _.template( $("#tplMostrarLibro").html() ),

    render: function() {
        this.$el.html( this.template( this.model.toJSON() ) );
        return this;
    }
});

var appView = new app.Libreria();