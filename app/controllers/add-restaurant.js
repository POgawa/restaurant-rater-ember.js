import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var restaurant = this.store.createRecord('restaurant', {
        name: this.get('name'),
        description: this.get('description'),
        address: this.get('address')
      });
      restaurant.save();
      this.transitionToRoute('restaurant', restaurant.id);

    }
  }

});
