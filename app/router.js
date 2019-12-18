import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  this.route('exibicao', function() {
    
  });

  this.route('carrossel', function() {
    this.route('new');
    this.route('edit', { path: '/:carrossel_id/edit' });
  });

  this.route('equipe', function() {
    this.route('new');
    this.route('edit', { path: '/:equipe_id/edit' });
  });

  this.route('usuario', function() {
    this.route('new');
    this.route('edit', { path: '/:usuario_id/edit' });
  });

  this.route('login', { path: '/' });

});

export default Router;
