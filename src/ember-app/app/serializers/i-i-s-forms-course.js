import { Serializer as CourseSerializer } from
  '../mixins/regenerated/serializers/i-i-s-forms-course';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(CourseSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
