import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  restaurant: DS.belongsTo('restaurant'),
  user: DS.belongsTo('user')
});
