export default function lightenDarkenColor(hex: string, amt: number): string {
  let usePound = false;

  if (hex === undefined) {
    return '#000000';
  }

  if (hex[0] === '#') {
    hex = hex.slice(1);
    usePound = true;
  }

  const num: number = parseInt(hex, 16);
  let r: number = (num >> 16) + amt;
  if (r > 255) {
    r = 255;
  } else if (r < 0) {
    r = 0;
  }

  let b: number = ((num >> 8) & 0x00ff) + amt;
  if (b > 255) {
    b = 255;
  } else if (b < 0) {
    b = 0;
  }

  let g: number = (num & 0x0000ff) + amt;
  if (g > 255) {
    g = 255;
  } else if (g < 0) {
    g = 0;
  }

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
}
