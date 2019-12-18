import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel: function(){
    console.log(this.get('session'));
    if(!this.get('session.isAuthenticated')){
      this.transitionTo('login');
    }
  },
  
  model() {
    return this.store.createRecord('carrossel');
  },

  actions: {

    saveCarrossel(newCarrossel) {
        newCarrossel.save().then(() => this.transitionTo('carrossel'));
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});