import Route from '@ember/routing/route';

export default Route.extend({

  beforeModel: function(){
    console.log(this.get('session'));
    if(!this.get('session.isAuthenticated')){
      this.transitionTo('login');
    }
  },

  model() {
    return this.store.findAll('usuario');
  },

  actions: {

    deleteUsuario(usuario) {
      let confirmacao = confirm('Tem certeza que deseja excluir esse usuário?');

      if (confirmacao) {
        usuario.destroyRecord();
      }
    }
  }

})