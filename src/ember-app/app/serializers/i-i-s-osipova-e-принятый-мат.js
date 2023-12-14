import { Serializer as ПринятыйМатSerializer } from
  '../mixins/regenerated/serializers/i-i-s-osipova-e-принятый-мат';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПринятыйМатSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
