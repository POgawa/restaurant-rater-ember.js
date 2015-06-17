import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['restaurant'],
  actions: {
    save: function() {
      if (this.get('description').length < 15) {
        alert("Description must be over 15 characters long");
          $('#addReview').modal('show');

      } else {

        var newReview = this.store.createRecord('review', {
          description: this.get('description'),
          date: new Date()
        });


        var restaurant = this.get('controllers.restaurant.model');
        newReview.save().then(function() {
          restaurant.get('reviews').pushObject(newReview);
          restaurant.save();
        });
        this.setProperties({
          description: ''
        });
        this.transitionToRoute('restaurant', restaurant.id);
      }
    }
  }

});
