var app = app || {};

// Marker Model
// ====================================================
app.Marker = Backbone.Model.extend({
  // get_cords: function(collection) {
  //   var latitude  = collection.latitude,
  //       longitude = collection.longitude;
  // }
});

// Marker View
// ====================================================
app.MarkerView = Backbone.View.extend({
  tagName: 'div',
  className: 'marker',
  template: _.template( $('#marker-row-template' ).html() ),

  events: {},

  // Render view
  render: function() {
    this.$el.html( this.template(this.model.attributes ));
    return this;
  },
});

// Marker Collection
// ====================================================
app.Markers = Backbone.Collection.extend({
  model: app.Marker,
  url: '/data/markers_hidalgo_latlong.json',

  comparator: function( collection ) {
    return collection.get('title');
  }
});

// The Application
// ====================================================
app.AppView = Backbone.View.extend({
  el: '#markers-app',

  initialize: function() {
    this.collection = new app.Markers();
    this.collection.fetch({reset: true});
    this.render();
    this.listenTo( this.collection, 'reset', this.render );
  },

  // Render
  render: function() {
    this.collection.each( function(item) {
      var markerView = new app.MarkerView({ model: item });
      $('#markers-list').append( markerView.render().el );
    }, this);
  },

  // Events
  events: {
    'click #marker-controls #sort-by-title': 'sortMarkersByTitle',
    'click #marker-controls #sort-by-city': 'sortMarkersByCity',
    'click #marker-controls #sort-by-year': 'sortMarkersByYear'
  },

  sortMarkersByTitle: function() {
    console.log('Sorting Title.');    
    return false;
  },

  sortMarkersByCity: function() {
    console.log('Sorting city.');
    return false;
  },

  sortMarkersByYear: function() {
    console.log('Sorting year.');
    return false;
  }

});

// Start Marking
// ====================================================
$(function() {
  new app.AppView();
});