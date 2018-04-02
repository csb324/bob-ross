// @flow

import type { paintType, paletteType } from '../types/PaintType';

type unfinishedPaint = {
  count: number,
  color: string,
  currentCount?: number,
  paintName?: string
};

function createPaints(): paletteType {

  const localStoragePaints = localStorage.getItem(`bobross-paints`);
  if (localStoragePaints) {
    const newPaints = JSON.parse(localStoragePaints);
    return newPaints; // stop before fetch happens!
  }

  const paints: { [string]: unfinishedPaint } = {
    ERASE: { count: 3220, color: "#ffffff", currentCount: 3220 },
    APPLE_FRAME: { count: 0, color: "#BBFFFF" },
    AURORA_BOREALIS: { count: 2, color: "#00FFFF" },
    BARN: { count: 17, color: "#55FFFF" },
    BEACH: { count: 27, color: "#FFBBFF" },
    BOAT: { count: 2, color: "#BBBBFF" },
    BRIDGE: { count: 7, color: "#00BBFF" },
    BUILDING: { count: 1, color: "#55BBFF" },
    BUSHES: { count: 120, color: "#FF00FF" },
    CABIN: { count: 69, color: "#BB00FF" },
    CACTUS: { count: 4, color: "#0000FF" },
    CIRCLE_FRAME: { count: 2, color: "#5500FF" },
    CIRRUS: { count: 28, color: "#FF55FF" },
    CLIFF: { count: 8, color: "#BB55FF" },
    CLOUDS: { count: 179, color: "#e1e7f7" },
    CONIFER: { count: 212, color: "#5555FF" },
    CUMULUS: { count: 86, color: "#FFFFBB" },
    DECIDUOUS: { count: 227, color: "#486827" },
    DIANE_ANDRE: { count: 1, color: "#00FFBB" },
    DOCK: { count: 1, color: "#55FFBB" },
    DOUBLE_OVAL_FRAME: { count: 1, color: "#FFBBBB" },
    FARM: { count: 1, color: "#BBBBBB" },
    FENCE: { count: 24, color: "#00BBBB" },
    FIRE: { count: 1, color: "#55BBBB" },
    FLORIDA_FRAME: { count: 1, color: "#FF00BB" },
    FLOWERS: { count: 12, color: "#BB00BB" },
    FOG: { count: 23, color: "#0000BB" },
    FRAMED: { count: 53, color: "#5500BB" },
    GRASS: { count: 142, color: "#FF55BB" },
    GUEST: { count: 22, color: "#BB55BB" },
    HALF_CIRCLE_FRAME: { count: 1, color: "#0055BB" },
    HALF_OVAL_FRAME: { count: 1, color: "#5555BB" },
    HILLS: { count: 18, color: "#FFFF00" },
    LAKE: { count: 143, color: "#BBFF00" },
    LAKES: { count: 0, color: "#00FF00" },
    LIGHTHOUSE: { count: 1, color: "#55FF00" },
    MILL: { count: 2, color: "#FFBB00" },
    MOON: { count: 3, color: "#BBBB00" },
    MOUNTAIN: { count: 160, color: "#b2b6b2" },
    MOUNTAINS: { count: 99, color: "#55BB00" },
    NIGHT: { count: 11, color: "#FF0000" },
    OCEAN: { count: 36, color: "#BB0000" },
    OVAL_FRAME: { count: 38, color: "#000000" },
    PALM_TREES: { count: 9, color: "#550000" },
    PATH: { count: 49, color: "#FF5500" },
    PERSON: { count: 1, color: "#BB5500" },
    PORTRAIT: { count: 3, color: "#005500" },
    RECTANGLE_3D_FRAME: { count: 1, color: "#555500" },
    RECTANGULAR_FRAME: { count: 1, color: "#FFFF55" },
    RIVER: { count: 126, color: "#BBFF55" },
    ROCKS: { count: 77, color: "#00FF55" },
    SEASHELL_FRAME: { count: 1, color: "#55FF55" },
    SNOW: { count: 75, color: "#FFBB55" },
    SNOWY_MOUNTAIN: { count: 109, color: "#BBBB55" },
    SPLIT_FRAME: { count: 1, color: "#00BB55" },
    STEVE_ROSS: { count: 11, color: "#55BB55" },
    STRUCTURE: { count: 85, color: "#FF0055" },
    SUN: { count: 40, color: "#BB0055" },
    TOMB_FRAME: { count: 1, color: "#000055" },
    TREE: { count: 361, color: "#165819" },
    TREES: { count: 337, color: "#284b30" },
    TRIPLE_FRAME: { count: 1, color: "#BB5555" },
    WATERFALL: { count: 39, color: "#005555" },
    WAVES: { count: 34, color: "#555555" },
    WINDMILL: { count: 1, color: "#FFFF55" },
    WINDOW_FRAME: { count: 1, color: "#BBFF88" },
    WINTER: { count: 69, color: "#00FF88" },
    WOOD_FRAMED: { count: 1, color: "#55FF88" }
  };

  const paintNames = Object.keys(paints);
  const newPaints: paletteType = {};

  paintNames.forEach((pname) => {
    newPaints[pname] = finishPaint(pname, paints[pname]);
  });

  return newPaints;
}

function finishPaint(name: string, unfinished: unfinishedPaint): paintType {
  unfinished['paintName'] = name || '';
  unfinished['currentCount'] = unfinished['currentCount'] || 0;
  const p: paintType = (unfinished: any)
    return p;
}

export default createPaints;