import Route from '@ember/routing/route';

export default Route.extend({

  beforeModel: function(){
    console.log(this.get('session'));
    if(!this.get('session.isAuthenticated')){
      this.transitionTo('login');
    }
  },

  model() {
    return this.store.createRecord('equipe');
  },

  actions: {

    saveEquipe(newEquipe) {
        newEquipe.save().then(() => this.transitionTo('equipe'));
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});