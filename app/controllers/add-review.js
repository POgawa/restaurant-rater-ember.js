import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['restaurant'],
  actions: {
    save: function() {
      var newReview = this.store.createRecord('review', {
        description: this.get('description'),
        date: new Date().toLocaleString()
      });


      newReview.save();


      var restaurant = this.get('controllers.restaurant.model');
      debugger;
      restaurant.get('reviews').pushObject(newReview);
      restaurant.save();
      restaurant.reload();
      this.get(restaurant).reload();

      this.set('desciption', '');
    }
  }

});
