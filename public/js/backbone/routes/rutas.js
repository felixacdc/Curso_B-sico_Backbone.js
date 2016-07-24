var rutas = Backbone.Router.extend({
    routes: {
        'books': 'libros',
        'books/:id': 'detalle'
    },
    detalle: function(id) {
        console.log(id);
    },
    libros: function() {
        console.log("book");
    }
});

var route = new rutas();
Backbone.history.start();
Backbone.history.navigate('books');