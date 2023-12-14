import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-osipova-e-поставщики', 'Unit | Model | i-i-s-osipova-e-поставщики', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-osipova-e-акт-приемки',
    'model:i-i-s-osipova-e-заказ',
    'model:i-i-s-osipova-e-номенклатура',
    'model:i-i-s-osipova-e-отпуск-материала',
    'model:i-i-s-osipova-e-поставщики',
    'model:i-i-s-osipova-e-принятый-мат',
    'model:i-i-s-osipova-e-склад',
    'model:i-i-s-osipova-e-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
