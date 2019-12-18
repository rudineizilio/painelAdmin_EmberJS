import Route from '@ember/routing/route';
import Firebase from 'firebase';

export default Route.extend({

  beforeModel: function(){
    console.log(this.get('session'));
    if(!this.get('session.isAuthenticated')){
      this.transitionTo('login');
    }
  },

  model() {
    return this.store.createRecord('usuario');
  },

  actions: {

    saveUsuario(newUsuario) {
        newUsuario.save().then(() => this.transitionTo('usuario'));
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }

});