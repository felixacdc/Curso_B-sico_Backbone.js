var app = app || {};

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

app.route = new rutas();