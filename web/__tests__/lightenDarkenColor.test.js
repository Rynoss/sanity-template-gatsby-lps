import lightenDarkenColors from '../src/utils/lightenDarkenColor';

describe('lighten or darken colors', () => {
  it('should return dark color when invalid hex is given', () => {
    expect(getContrastingColor(1)).toEqual('#231f20');
  });

  it('should return light text when given dark colors', () => {
    expect(getContrastingColor('#000000')).toEqual('#ffffff');
  });

  it('should return dark text when given light colors', () => {
    expect(getContrastingColor('#FFFFFF')).toEqual('#231f20');
  });

  it('should return light color when no hex is given', () => {
    expect(getContrastingColor()).toEqual('#ffffff');
  });
});
