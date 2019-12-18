import DS from 'ember-data';

export default DS.Model.extend({
  nome: DS.attr('string'),
  link: DS.attr('string'),
  imagem: DS.attr('string')
});
