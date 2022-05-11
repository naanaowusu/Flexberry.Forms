import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  courseType: DS.attr('i-i-s-forms-t-course'),
  dateOfRegister: DS.attr('date'),
  course: DS.belongsTo('i-i-s-forms-course', { inverse: null, async: false }),
  student: DS.belongsTo('i-i-s-forms-student', { inverse: null, async: false })
});

export let ValidationRules = {
  courseType: {
    descriptionKey: 'models.i-i-s-forms-registration.validations.courseType.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dateOfRegister: {
    descriptionKey: 'models.i-i-s-forms-registration.validations.dateOfRegister.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  course: {
    descriptionKey: 'models.i-i-s-forms-registration.validations.course.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  student: {
    descriptionKey: 'models.i-i-s-forms-registration.validations.student.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('RegistrationE', 'i-i-s-forms-registration', {
    courseType: attr('Course type', { index: 0 }),
    dateOfRegister: attr('Date of register', { index: 1 }),
    course: belongsTo('i-i-s-forms-course', '', {
      name: attr('', { index: 2 })
    }, { index: -1, hidden: true }),
    student: belongsTo('i-i-s-forms-student', '', {
      name: attr('', { index: 3 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('RegistrationL', 'i-i-s-forms-registration', {
    courseType: attr('Course type', { index: 0 }),
    dateOfRegister: attr('Date of register', { index: 1 }),
    course: belongsTo('i-i-s-forms-course', 'Course', {
      name: attr('Course', { index: 2 })
    }, { index: -1, hidden: true }),
    student: belongsTo('i-i-s-forms-student', 'Student', {
      name: attr('Student', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
