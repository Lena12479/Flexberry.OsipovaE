import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СпособДоставкиEnum from '../enums/i-i-s-osipova-e-способ-доставки';

export default FlexberryEnum.extend({
  enum: СпособДоставкиEnum,
  sourceType: 'IIS.OsipovaE.СпособДоставки'
});
