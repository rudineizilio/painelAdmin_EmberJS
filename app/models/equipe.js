import DS from 'ember-data';

export default DS.Model.extend({
  nome: DS.attr('string'),
  facebook: DS.attr('string'),
  instagram: DS.attr('string'),
  funcao: DS.attr('string'),
  rifle: DS.attr('string'),
  imagem: DS.attr('string')
});
