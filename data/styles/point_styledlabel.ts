import { Style } from 'geostyler-style';

const pointStyledLabel: Style = {
  type: 'Point',
  rules: [
    {
      symbolizer: {
        kind: 'Text',
        color: '#000000',
        field: 'name',
        font: ['Arial'],
        size: 12,
        offset: [0, 5]
      }
    }
  ]
};

export default pointStyledLabel;
