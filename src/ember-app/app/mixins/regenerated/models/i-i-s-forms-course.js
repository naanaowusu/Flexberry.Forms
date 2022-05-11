import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  registration: DS.belongsTo('i-i-s-forms-registration', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-forms-course.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  registration: {
    descriptionKey: 'models.i-i-s-forms-course.validations.registration.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CourseE', 'i-i-s-forms-course', {
    name: attr('Name', { index: 0 }),
    registration: belongsTo('i-i-s-forms-registration', 'Registration', {
      courseType: attr('Course type', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'courseType' })
  });

  modelClass.defineProjection('CourseL', 'i-i-s-forms-course', {
    name: attr('Name', { index: 0 }),
    registration: belongsTo('i-i-s-forms-registration', 'Course type', {
      courseType: attr('Course type', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
