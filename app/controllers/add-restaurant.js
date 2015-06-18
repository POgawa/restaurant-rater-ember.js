import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var restaurant = this.store.createRecord('restaurant', {
        name: this.get('name'),
        description: this.get('description'),
        address: this.get('address'),
        hours: this.get('hours'),
        phone: this.get('phone')
      });
      restaurant.save();
      this.setProperties({
        name: '',
        description: '',
        address: ''
      });
      this.transitionToRoute('restaurant', restaurant.id);

    }
  }

});
