import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПринятыйМатMixin
} from '../mixins/regenerated/models/i-i-s-osipova-e-принятый-мат';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПринятыйМатMixin, Validations, {
});

defineProjections(Model);

export default Model;
