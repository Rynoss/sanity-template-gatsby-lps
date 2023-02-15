import getContrastingColor from '../src/utils/getContrastingColor';

describe('get visually contrasting hex color', () => {
  it('should return dark color when invalid hex is given', () => {
    expect(getContrastingColor(1)).toEqual('#231f20');
    expect(getContrastingColor('000000')).toEqual('#231f20');
    expect(getContrastingColor('#000')).toEqual('#231f20');
    expect(getContrastingColor(true)).toEqual('#231f20');
  });

  it('should return light text when given dark colors', () => {
    expect(getContrastingColor('#000000')).toEqual('#ffffff');
    expect(getContrastingColor('#36454F')).toEqual('#ffffff');
    expect(getContrastingColor('#023020')).toEqual('#ffffff');
    expect(getContrastingColor('#301934')).toEqual('#ffffff');
    expect(getContrastingColor('#191970')).toEqual('#ffffff');
  });

  it('should return dark text when given light colors', () => {
    expect(getContrastingColor('#FFFFFF')).toEqual('#231f20');
    expect(getContrastingColor('#8B8989')).toEqual('#231f20');
    expect(getContrastingColor('#CDC9C9')).toEqual('#231f20');
    expect(getContrastingColor('#EEE9E9')).toEqual('#231f20');
  });

  it('should return light color when no hex is given', () => {
    expect(getContrastingColor()).toEqual('#ffffff');
  });
});
