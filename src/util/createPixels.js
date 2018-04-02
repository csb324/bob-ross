import type { pixelType } from '../types/PixelType';
import { HEIGHT, WIDTH } from '../constants';

function createPixels(): pixelType[] {
  const localStoragePixels = localStorage.getItem(`bobross-pixels`);

  if (localStoragePixels) {
    const newPixels = JSON.parse(localStoragePixels);
    return newPixels; // stop before fetch happens!
  }

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