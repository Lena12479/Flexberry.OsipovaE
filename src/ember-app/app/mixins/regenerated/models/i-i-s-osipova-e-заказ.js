import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адресЗаказа: DS.attr('string'),
  номерЗаказа: DS.attr('number'),
  способПолучения: DS.attr('i-i-s-osipova-e-способ-доставки'),
  фИОзаказчика: DS.attr('string'),
  номенклатура: DS.belongsTo('i-i-s-osipova-e-номенклатура', { inverse: null, async: false })
});

export let ValidationRules = {
  адресЗаказа: {
    descriptionKey: 'models.i-i-s-osipova-e-заказ.validations.адресЗаказа.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерЗаказа: {
    descriptionKey: 'models.i-i-s-osipova-e-заказ.validations.номерЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  способПолучения: {
    descriptionKey: 'models.i-i-s-osipova-e-заказ.validations.способПолучения.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИОзаказчика: {
    descriptionKey: 'models.i-i-s-osipova-e-заказ.validations.фИОзаказчика.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-osipova-e-заказ.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-osipova-e-заказ', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    фИОзаказчика: attr('Ф и озаказчика', { index: 1 }),
    адресЗаказа: attr('Адрес заказа', { index: 2 }),
    способПолучения: attr('Способ получения', { index: 3 }),
    номенклатура: belongsTo('i-i-s-osipova-e-номенклатура', 'Наименование', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-osipova-e-заказ', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    фИОзаказчика: attr('Ф и озаказчика', { index: 1 }),
    адресЗаказа: attr('Адрес заказа', { index: 2 }),
    способПолучения: attr('Способ получения', { index: 3 }),
    номенклатура: belongsTo('i-i-s-osipova-e-номенклатура', 'Наименование', {
      наименование: attr('Наименование', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
