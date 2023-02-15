import hexToRgb from './hexToRgb';

export default function getConstrastingColor(hex = '#000000'): string {
  const rgbArr: number[] | string = hexToRgb(hex);
  const lightText = '#ffffff';
  const darkText = '#231f20';
  if (Array.isArray(rgbArr)) {
    const colorBrightness: number = Math.round(
      (rgbArr[0] * 299 + rgbArr[1] * 587 + rgbArr[2] * 114) / 1000
    ); //http://www.w3.org/TR/AERT#color-contrast
    return colorBrightness > 125 ? darkText : lightText;
  }
  return darkText;
}
