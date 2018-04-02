import type { pixelType } from '../types/PixelType';
import { HEIGHT, WIDTH } from '../constants';

function createPixels(): pixelType[] {

  const pixels = [];

  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      pixels.push({
        x,
        y,
        color: 'ERASE'
      })
    }
  }
  return pixels;
}

export default createPixels;