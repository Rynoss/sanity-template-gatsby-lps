import hexToRgb from '../src/utils/hexToRgb.ts';

describe('HEX to RGB conversion module', () => {
  it('should return array of corresponding RGB values when HEX string is given', () => {
    expect(hexToRgb('#000000')).toEqual([0, 0, 0]); //black
    expect(hexToRgb('#FFFFFF')).toEqual([255, 255, 255]); //white
    expect(hexToRgb('#FF0000')).toEqual([255, 0, 0]); //red
    expect(hexToRgb('#454B1B')).toEqual([69, 75, 27]); //green
    expect(hexToRgb('#0000FF')).toEqual([0, 0, 255]); //blue
  });

  it('should return undefined when a non string value is given', () => {
    expect(hexToRgb(1)).toEqual(undefined);
    expect(hexToRgb(null)).toEqual(undefined);
    expect(hexToRgb([1, 2, 3])).toEqual(undefined);
    expect(hexToRgb({})).toEqual(undefined);
  });

  it('should return "invalid hex code given" when # is missing or str length != 7', () => {
    expect(hexToRgb('000000')).toEqual('invalid hex code given');
    expect(hexToRgb('#00000')).toEqual('invalid hex code given');
    expect(hexToRgb('#FFF')).toEqual('invalid hex code given');
    expect(hexToRgb('#FFFFFFF')).toEqual('invalid hex code given');
  });
});
