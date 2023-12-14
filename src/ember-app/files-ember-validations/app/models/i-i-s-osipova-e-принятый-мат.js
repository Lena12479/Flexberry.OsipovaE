import {
  defineNamespace,
  defineProjections,
  Model as ПринятыйМатMixin
} from '../mixins/regenerated/models/i-i-s-osipova-e-принятый-мат';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПринятыйМатMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
