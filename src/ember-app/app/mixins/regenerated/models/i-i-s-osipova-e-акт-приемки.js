import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПриемки: DS.attr('date'),
  номерАкта: DS.attr('number'),
  поставщики: DS.belongsTo('i-i-s-osipova-e-поставщики', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-osipova-e-сотрудники', { inverse: null, async: false }),
  принятыйМат: DS.hasMany('i-i-s-osipova-e-принятый-мат', { inverse: 'актПриемки', async: false })
});

export let ValidationRules = {
  датаПриемки: {
    descriptionKey: 'models.i-i-s-osipova-e-акт-приемки.validations.датаПриемки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерАкта: {
    descriptionKey: 'models.i-i-s-osipova-e-акт-приемки.validations.номерАкта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  поставщики: {
    descriptionKey: 'models.i-i-s-osipova-e-акт-приемки.validations.поставщики.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-osipova-e-акт-приемки.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  принятыйМат: {
    descriptionKey: 'models.i-i-s-osipova-e-акт-приемки.validations.принятыйМат.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АктПриемкиE', 'i-i-s-osipova-e-акт-приемки', {
    номерАкта: attr('Номер акта', { index: 0 }),
    датаПриемки: attr('Дата приемки', { index: 1 }),
    поставщики: belongsTo('i-i-s-osipova-e-поставщики', 'Наименование', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-osipova-e-сотрудники', 'Ф и осотрудника', {
      фИОсотрудника: attr('Ф и осотрудника', { index: 3, hidden: true }),
      должность: attr('Должность', { index: 4 })
    }, { index: -1, hidden: true }),
    принятыйМат: hasMany('i-i-s-osipova-e-принятый-мат', 'Принятый мат', {
      номерПозиции: attr('Номер позиции', { index: 0 }),
      номенклатура: belongsTo('i-i-s-osipova-e-номенклатура', 'Наименование', {
        наименование: attr('Наименование', { index: 1, hidden: true })
      }, { index: -1, hidden: true }),
      колво: attr('Колво', { index: 2 }),
      склад: belongsTo('i-i-s-osipova-e-склад', 'Имя склада', {
        имяСклада: attr('Имя склада', { index: 3, hidden: true })
      }, { index: -1, hidden: true })
    })
  });

  modelClass.defineProjection('АктПриемкиL', 'i-i-s-osipova-e-акт-приемки', {
    номерАкта: attr('Номер акта', { index: 0 }),
    датаПриемки: attr('Дата приемки', { index: 1 }),
    поставщики: belongsTo('i-i-s-osipova-e-поставщики', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-osipova-e-сотрудники', 'Ф и осотрудника', {
      фИОсотрудника: attr('Ф и осотрудника', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
