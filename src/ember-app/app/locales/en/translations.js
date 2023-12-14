import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISOsipovaEАктПриемкиLForm from './forms/i-i-s-osipova-e-акт-приемки-l';
import IISOsipovaEЗаказLForm from './forms/i-i-s-osipova-e-заказ-l';
import IISOsipovaEНоменклатураLForm from './forms/i-i-s-osipova-e-номенклатура-l';
import IISOsipovaEОтпускМатериалаLForm from './forms/i-i-s-osipova-e-отпуск-материала-l';
import IISOsipovaEПоставщикиLForm from './forms/i-i-s-osipova-e-поставщики-l';
import IISOsipovaEСкладLForm from './forms/i-i-s-osipova-e-склад-l';
import IISOsipovaEСотрудникиLForm from './forms/i-i-s-osipova-e-сотрудники-l';
import IISOsipovaEАктПриемкиEForm from './forms/i-i-s-osipova-e-акт-приемки-e';
import IISOsipovaEЗаказEForm from './forms/i-i-s-osipova-e-заказ-e';
import IISOsipovaEНоменклатураEForm from './forms/i-i-s-osipova-e-номенклатура-e';
import IISOsipovaEОтпускМатериалаEForm from './forms/i-i-s-osipova-e-отпуск-материала-e';
import IISOsipovaEПоставщикиEForm from './forms/i-i-s-osipova-e-поставщики-e';
import IISOsipovaEСкладEForm from './forms/i-i-s-osipova-e-склад-e';
import IISOsipovaEСотрудникиEForm from './forms/i-i-s-osipova-e-сотрудники-e';
import IISOsipovaEАктПриемкиModel from './models/i-i-s-osipova-e-акт-приемки';
import IISOsipovaEЗаказModel from './models/i-i-s-osipova-e-заказ';
import IISOsipovaEНоменклатураModel from './models/i-i-s-osipova-e-номенклатура';
import IISOsipovaEОтпускМатериалаModel from './models/i-i-s-osipova-e-отпуск-материала';
import IISOsipovaEПоставщикиModel from './models/i-i-s-osipova-e-поставщики';
import IISOsipovaEПринятыйМатModel from './models/i-i-s-osipova-e-принятый-мат';
import IISOsipovaEСкладModel from './models/i-i-s-osipova-e-склад';
import IISOsipovaEСотрудникиModel from './models/i-i-s-osipova-e-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-osipova-e-акт-приемки': IISOsipovaEАктПриемкиModel,
    'i-i-s-osipova-e-заказ': IISOsipovaEЗаказModel,
    'i-i-s-osipova-e-номенклатура': IISOsipovaEНоменклатураModel,
    'i-i-s-osipova-e-отпуск-материала': IISOsipovaEОтпускМатериалаModel,
    'i-i-s-osipova-e-поставщики': IISOsipovaEПоставщикиModel,
    'i-i-s-osipova-e-принятый-мат': IISOsipovaEПринятыйМатModel,
    'i-i-s-osipova-e-склад': IISOsipovaEСкладModel,
    'i-i-s-osipova-e-сотрудники': IISOsipovaEСотрудникиModel
  },

  'application-name': 'Osipova E',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Osipova E',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Osipova E',
          title: 'Osipova E'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'акты-приемки': {
          caption: 'Акты приемки',
          title: 'Акты приемки',
          'i-i-s-osipova-e-акт-приемки-l': {
            caption: 'Акт приемки',
            title: ''
          }
        },
        заказы: {
          caption: 'Заказы',
          title: 'Заказы',
          'i-i-s-osipova-e-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-osipova-e-отпуск-материала-l': {
            caption: 'Отпуск материала',
            title: ''
          }
        },
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-osipova-e-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-osipova-e-склад-l': {
            caption: 'Склад',
            title: ''
          },
          'i-i-s-osipova-e-номенклатура-l': {
            caption: 'Номенклатура',
            title: ''
          },
          'i-i-s-osipova-e-поставщики-l': {
            caption: 'Поставщики',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-osipova-e-акт-приемки-l': IISOsipovaEАктПриемкиLForm,
    'i-i-s-osipova-e-заказ-l': IISOsipovaEЗаказLForm,
    'i-i-s-osipova-e-номенклатура-l': IISOsipovaEНоменклатураLForm,
    'i-i-s-osipova-e-отпуск-материала-l': IISOsipovaEОтпускМатериалаLForm,
    'i-i-s-osipova-e-поставщики-l': IISOsipovaEПоставщикиLForm,
    'i-i-s-osipova-e-склад-l': IISOsipovaEСкладLForm,
    'i-i-s-osipova-e-сотрудники-l': IISOsipovaEСотрудникиLForm,
    'i-i-s-osipova-e-акт-приемки-e': IISOsipovaEАктПриемкиEForm,
    'i-i-s-osipova-e-заказ-e': IISOsipovaEЗаказEForm,
    'i-i-s-osipova-e-номенклатура-e': IISOsipovaEНоменклатураEForm,
    'i-i-s-osipova-e-отпуск-материала-e': IISOsipovaEОтпускМатериалаEForm,
    'i-i-s-osipova-e-поставщики-e': IISOsipovaEПоставщикиEForm,
    'i-i-s-osipova-e-склад-e': IISOsipovaEСкладEForm,
    'i-i-s-osipova-e-сотрудники-e': IISOsipovaEСотрудникиEForm
  },

});

export default translations;
