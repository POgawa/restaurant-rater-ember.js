import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    add: function() {
      $('#addReview').modal('show');
    },

    delete: function() {
      if(confirm('Are you sure??')) {

        var restaurant = this.get('model');
        var reviews = restaurant.get('reviews'),
          list = reviews.toArray();
        list.forEach(function(review){
          review.destroyRecord();
          restaurant.save();
        });

        restaurant.destroyRecord();
        this.transitionToRoute('restaurants');
      }
    },

    removeReview: function(review) {
      var restaurant = this.get('model');
      this.store.find('review', review.get('id')).then(function(review){
        review.destroyRecord();
        review.save();
      });
      restaurant.save();
    },

    edit: function() {
      $('#editRestaurant').modal('show');
    }
  }
});
