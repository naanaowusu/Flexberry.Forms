import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISFormsCourseLForm from './forms/i-i-s-forms-course-l';
import IISFormsRegistrationLForm from './forms/i-i-s-forms-registration-l';
import IISFormsStudentLForm from './forms/i-i-s-forms-student-l';
import IISFormsCourseEForm from './forms/i-i-s-forms-course-e';
import IISFormsRegistrationEForm from './forms/i-i-s-forms-registration-e';
import IISFormsStudentEForm from './forms/i-i-s-forms-student-e';
import IISFormsCourseModel from './models/i-i-s-forms-course';
import IISFormsRegistrationModel from './models/i-i-s-forms-registration';
import IISFormsStudentModel from './models/i-i-s-forms-student';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-forms-course': IISFormsCourseModel,
    'i-i-s-forms-registration': IISFormsRegistrationModel,
    'i-i-s-forms-student': IISFormsStudentModel
  },

  'application-name': 'Forms',

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
        'application-name': 'Forms',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Forms',
          title: 'Forms'
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
        forms: {
          caption: 'Forms',
          title: 'Forms',
          'i-i-s-forms-student-l': {
            caption: 'Student',
            title: ''
          },
          'i-i-s-forms-course-l': {
            caption: 'Course',
            title: ''
          },
          'i-i-s-forms-registration-l': {
            caption: 'Registration',
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
    'i-i-s-forms-course-l': IISFormsCourseLForm,
    'i-i-s-forms-registration-l': IISFormsRegistrationLForm,
    'i-i-s-forms-student-l': IISFormsStudentLForm,
    'i-i-s-forms-course-e': IISFormsCourseEForm,
    'i-i-s-forms-registration-e': IISFormsRegistrationEForm,
    'i-i-s-forms-student-e': IISFormsStudentEForm
  },

});

export default translations;
