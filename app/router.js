import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('restaurants',function() {
    this.resource('add-restaurant', {path: '/add'});
  });
  this.resource('restaurant', {path: '/:restaurant_id'}, function() {
    this.resource('reviews');
  });
  this.resource('users');
});

export default Router;
