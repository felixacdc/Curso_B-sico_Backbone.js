var app = app || {};

var rutas = Backbone.Router.extend({
    routes: {
        '': 'libros',
        'books/:id': 'detalle'
    },
    detalle: function(id) {
        window.libroID = id;
        window.stade = 'detalle';
    },
    libros: function() {
        window.stade = 'libro';
    }
});

app.route = new rutas();