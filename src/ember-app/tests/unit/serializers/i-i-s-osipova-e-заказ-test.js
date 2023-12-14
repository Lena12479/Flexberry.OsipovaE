import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-osipova-e-заказ', 'Unit | Serializer | i-i-s-osipova-e-заказ', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-osipova-e-заказ',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-osipova-e-способ-доставки',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
