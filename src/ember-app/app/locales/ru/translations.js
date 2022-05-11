import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Forms',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Forms',
          title: 'Forms'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
