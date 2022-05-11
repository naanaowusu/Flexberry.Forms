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
          caption: i18n.t('forms.application.sitemap.forms.caption'),
          title: i18n.t('forms.application.sitemap.forms.title'),
          children: [{
            link: 'i-i-s-forms-student-l',
            caption: i18n.t('forms.application.sitemap.forms.i-i-s-forms-student-l.caption'),
            title: i18n.t('forms.application.sitemap.forms.i-i-s-forms-student-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-forms-course-l',
            caption: i18n.t('forms.application.sitemap.forms.i-i-s-forms-course-l.caption'),
            title: i18n.t('forms.application.sitemap.forms.i-i-s-forms-course-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-forms-registration-l',
            caption: i18n.t('forms.application.sitemap.forms.i-i-s-forms-registration-l.caption'),
            title: i18n.t('forms.application.sitemap.forms.i-i-s-forms-registration-l.title'),
            icon: 'table',
            children: null
          }]
        }
      ]
    };
  }),
})