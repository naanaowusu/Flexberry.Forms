import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  courseType: DS.attr('i-i-s-forms-t-course'),
  dateOfRegister: DS.attr('date')
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
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('RegistrationE', 'i-i-s-forms-registration', {
    courseType: attr('Course type', { index: 0 }),
    dateOfRegister: attr('Date of register', { index: 1 })
  });

  modelClass.defineProjection('RegistrationL', 'i-i-s-forms-registration', {
    courseType: attr('Course type', { index: 0 }),
    dateOfRegister: attr('Date of register', { index: 1 })
  });
};
