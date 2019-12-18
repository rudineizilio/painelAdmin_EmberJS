import Route from '@ember/routing/route';

export default Route.extend({
  
  beforeModel: function(){
    console.log(this.get('session'));
    if(!this.get('session.isAuthenticated')){
      this.transitionTo('login');
    }
  },

  model(params) {
    return this.store.findRecord('equipe', params.equipe_id);
  },

  actions: {

    saveEquipe(equipe) {
      equipe.save().then(() => this.transitionTo('equipe'));
    },

    willTransition(transition) {

      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmacao = confirm("Suas alterações não foram salvas, deseja realmente sair?");

        if (confirmacao) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});