import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колво: DS.attr('number'),
  номерПозиции: DS.attr('number'),
  номенклатура: DS.belongsTo('i-i-s-osipova-e-номенклатура', { inverse: null, async: false }),
  склад: DS.belongsTo('i-i-s-osipova-e-склад', { inverse: null, async: false }),
  актПриемки: DS.belongsTo('i-i-s-osipova-e-акт-приемки', { inverse: 'принятыйМат', async: false })
});

export let ValidationRules = {
  колво: {
    descriptionKey: 'models.i-i-s-osipova-e-принятый-мат.validations.колво.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерПозиции: {
    descriptionKey: 'models.i-i-s-osipova-e-принятый-мат.validations.номерПозиции.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-osipova-e-принятый-мат.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склад: {
    descriptionKey: 'models.i-i-s-osipova-e-принятый-мат.validations.склад.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  актПриемки: {
    descriptionKey: 'models.i-i-s-osipova-e-принятый-мат.validations.актПриемки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПринятыйМатE', 'i-i-s-osipova-e-принятый-мат', {
    номерПозиции: attr('Номер позиции', { index: 0 }),
    номенклатура: belongsTo('i-i-s-osipova-e-номенклатура', 'Наименование', {
      наименование: attr('Наименование', { index: 1, hidden: true })
    }, { index: -1, hidden: true }),
    колво: attr('Колво', { index: 2 }),
    склад: belongsTo('i-i-s-osipova-e-склад', 'Имя склада', {
      имяСклада: attr('Имя склада', { index: 3, hidden: true })
    }, { index: -1, hidden: true })
  });
};
