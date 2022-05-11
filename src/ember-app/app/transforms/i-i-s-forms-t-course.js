import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tCourseEnum from '../enums/i-i-s-forms-t-course';

export default FlexberryEnum.extend({
  enum: tCourseEnum,
  sourceType: 'IIS.Forms.tCourse'
});
