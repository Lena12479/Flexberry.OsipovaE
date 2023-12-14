import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  должность: DS.attr('string'),
  табель: DS.attr('number'),
  фИОсотрудника: DS.attr('string')
});

export let ValidationRules = {
  должность: {
    descriptionKey: 'models.i-i-s-osipova-e-сотрудники.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  табель: {
    descriptionKey: 'models.i-i-s-osipova-e-сотрудники.validations.табель.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИОсотрудника: {
    descriptionKey: 'models.i-i-s-osipova-e-сотрудники.validations.фИОсотрудника.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-osipova-e-сотрудники', {
    фИОсотрудника: attr('Ф и осотрудника', { index: 0 }),
    должность: attr('Должность', { index: 1 }),
    табель: attr('Табель', { index: 2 })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-osipova-e-сотрудники', {
    фИОсотрудника: attr('Ф и осотрудника', { index: 0 }),
    должность: attr('Должность', { index: 1 }),
    табель: attr('Табель', { index: 2 })
  });
};
