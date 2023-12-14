import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.акты-приемки.caption'),
          title: i18n.t('forms.application.sitemap.акты-приемки.title'),
          children: [{
            link: 'i-i-s-osipova-e-акт-приемки-l',
            caption: i18n.t('forms.application.sitemap.акты-приемки.i-i-s-osipova-e-акт-приемки-l.caption'),
            title: i18n.t('forms.application.sitemap.акты-приемки.i-i-s-osipova-e-акт-приемки-l.title'),
            icon: 'calendar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.заказы.caption'),
          title: i18n.t('forms.application.sitemap.заказы.title'),
          children: [{
            link: 'i-i-s-osipova-e-заказ-l',
            caption: i18n.t('forms.application.sitemap.заказы.i-i-s-osipova-e-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.заказы.i-i-s-osipova-e-заказ-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-osipova-e-отпуск-материала-l',
            caption: i18n.t('forms.application.sitemap.заказы.i-i-s-osipova-e-отпуск-материала-l.caption'),
            title: i18n.t('forms.application.sitemap.заказы.i-i-s-osipova-e-отпуск-материала-l.title'),
            icon: 'phone',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.сотрудники.title'),
          children: [{
            link: 'i-i-s-osipova-e-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-osipova-e-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-osipova-e-сотрудники-l.title'),
            icon: 'book',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочники.caption'),
          title: i18n.t('forms.application.sitemap.справочники.title'),
          children: [{
            link: 'i-i-s-osipova-e-склад-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-osipova-e-склад-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-osipova-e-склад-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-osipova-e-номенклатура-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-osipova-e-номенклатура-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-osipova-e-номенклатура-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-osipova-e-поставщики-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-osipova-e-поставщики-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-osipova-e-поставщики-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }
      ]
    };
  }),
})