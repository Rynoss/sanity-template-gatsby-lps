export default function hexToRgb(
  hex: string | null
): number[] | string | undefined {
  if (typeof hex === 'string') {
    const validHex = hex[0] === '#' && hex.length === 7;
    if (!validHex) {
      return 'invalid hex code given';
    }
    return hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (r: string, g: string, b: string) => '#' + r + r + g + g + b + b
      )
      ?.substring(1)
      ?.match(/.{2}/g)
      ?.map((x: string) => parseInt(x, 16));
  }
}
