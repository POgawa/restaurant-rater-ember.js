import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    add: function() {
      $('#addReview').modal('show');
    }
  }
});
