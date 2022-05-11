import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-forms-course-l');
  this.route('i-i-s-forms-course-e',
  { path: 'i-i-s-forms-course-e/:id' });
  this.route('i-i-s-forms-course-e.new',
  { path: 'i-i-s-forms-course-e/new' });
  this.route('i-i-s-forms-registration-l');
  this.route('i-i-s-forms-registration-e',
  { path: 'i-i-s-forms-registration-e/:id' });
  this.route('i-i-s-forms-registration-e.new',
  { path: 'i-i-s-forms-registration-e/new' });
  this.route('i-i-s-forms-student-l');
  this.route('i-i-s-forms-student-e',
  { path: 'i-i-s-forms-student-e/:id' });
  this.route('i-i-s-forms-student-e.new',
  { path: 'i-i-s-forms-student-e/new' });
});

export default Router;
