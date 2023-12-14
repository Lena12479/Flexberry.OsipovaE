import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПроводки: DS.attr('date'),
  заказ: DS.belongsTo('i-i-s-osipova-e-заказ', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-osipova-e-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  датаПроводки: {
    descriptionKey: 'models.i-i-s-osipova-e-отпуск-материала.validations.датаПроводки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-osipova-e-отпуск-материала.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-osipova-e-отпуск-материала.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтпускМатериалаE', 'i-i-s-osipova-e-отпуск-материала', {
    датаПроводки: attr('Дата проводки', { index: 0 }),
    заказ: belongsTo('i-i-s-osipova-e-заказ', 'Номер заказа', {
      номерЗаказа: attr('Номер заказа', { index: 1 }),
      фИОзаказчика: attr('Ф и озаказчика', { index: 2, hidden: true }),
      адресЗаказа: attr('Адрес заказа', { index: 3 }),
      способПолучения: attr('Способ получения', { index: 4 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-osipova-e-сотрудники', 'Ф и осотрудника', {
      фИОсотрудника: attr('Ф и осотрудника', { index: 5, hidden: true }),
      должность: attr('Должность', { index: 6 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('ОтпускМатериалаL', 'i-i-s-osipova-e-отпуск-материала', {
    датаПроводки: attr('Дата проводки', { index: 0 }),
    заказ: belongsTo('i-i-s-osipova-e-заказ', 'Ф и озаказчика', {
      фИОзаказчика: attr('Ф и озаказчика', { index: 1 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-osipova-e-сотрудники', 'Ф и осотрудника', {
      фИОсотрудника: attr('Ф и осотрудника', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
