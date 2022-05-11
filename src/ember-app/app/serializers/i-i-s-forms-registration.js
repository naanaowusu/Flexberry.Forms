import { Serializer as RegistrationSerializer } from
  '../mixins/regenerated/serializers/i-i-s-forms-registration';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(RegistrationSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
