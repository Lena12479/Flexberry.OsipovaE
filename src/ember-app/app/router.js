import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-osipova-e-акт-приемки-l');
  this.route('i-i-s-osipova-e-акт-приемки-e',
  { path: 'i-i-s-osipova-e-акт-приемки-e/:id' });
  this.route('i-i-s-osipova-e-акт-приемки-e.new',
  { path: 'i-i-s-osipova-e-акт-приемки-e/new' });
  this.route('i-i-s-osipova-e-заказ-l');
  this.route('i-i-s-osipova-e-заказ-e',
  { path: 'i-i-s-osipova-e-заказ-e/:id' });
  this.route('i-i-s-osipova-e-заказ-e.new',
  { path: 'i-i-s-osipova-e-заказ-e/new' });
  this.route('i-i-s-osipova-e-номенклатура-l');
  this.route('i-i-s-osipova-e-номенклатура-e',
  { path: 'i-i-s-osipova-e-номенклатура-e/:id' });
  this.route('i-i-s-osipova-e-номенклатура-e.new',
  { path: 'i-i-s-osipova-e-номенклатура-e/new' });
  this.route('i-i-s-osipova-e-отпуск-материала-l');
  this.route('i-i-s-osipova-e-отпуск-материала-e',
  { path: 'i-i-s-osipova-e-отпуск-материала-e/:id' });
  this.route('i-i-s-osipova-e-отпуск-материала-e.new',
  { path: 'i-i-s-osipova-e-отпуск-материала-e/new' });
  this.route('i-i-s-osipova-e-поставщики-l');
  this.route('i-i-s-osipova-e-поставщики-e',
  { path: 'i-i-s-osipova-e-поставщики-e/:id' });
  this.route('i-i-s-osipova-e-поставщики-e.new',
  { path: 'i-i-s-osipova-e-поставщики-e/new' });
  this.route('i-i-s-osipova-e-склад-l');
  this.route('i-i-s-osipova-e-склад-e',
  { path: 'i-i-s-osipova-e-склад-e/:id' });
  this.route('i-i-s-osipova-e-склад-e.new',
  { path: 'i-i-s-osipova-e-склад-e/new' });
  this.route('i-i-s-osipova-e-сотрудники-l');
  this.route('i-i-s-osipova-e-сотрудники-e',
  { path: 'i-i-s-osipova-e-сотрудники-e/:id' });
  this.route('i-i-s-osipova-e-сотрудники-e.new',
  { path: 'i-i-s-osipova-e-сотрудники-e/new' });
});

export default Router;
