import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имяСклада: DS.attr('string'),
  кодСклада: DS.attr('number')
});

export let ValidationRules = {
  имяСклада: {
    descriptionKey: 'models.i-i-s-osipova-e-склад.validations.имяСклада.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодСклада: {
    descriptionKey: 'models.i-i-s-osipova-e-склад.validations.кодСклада.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СкладE', 'i-i-s-osipova-e-склад', {
    кодСклада: attr('Код склада', { index: 0 }),
    имяСклада: attr('Имя склада', { index: 1 })
  });

  modelClass.defineProjection('СкладL', 'i-i-s-osipova-e-склад', {
    кодСклада: attr('Код склада', { index: 0 }),
    имяСклада: attr('Имя склада', { index: 1 })
  });
};
