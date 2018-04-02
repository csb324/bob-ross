// @flow

import type { paintType, paletteType } from '../types/PaintType';


function createPaints(): paletteType {
  const localStoragePaints = localStorage.getItem(`bobross-paints`);
  if (localStoragePaints) {
    const newPaints = JSON.parse(localStoragePaints);
    return newPaints; // stop before loading default set!
  }

  const paints: { [string]: paintType } = { 
    "ERASE": { "count": 3220, "color": "#ffffff", "paintName": "ERASE", "currentCount":3220}, 
    "APPLE_FRAME": { "count":0, "color":"#BBFFFF", "paintName":"APPLE_FRAME", "currentCount":0}, 
    "AURORA_BOREALIS": { "count":2, "color":"#d3f6f6", "paintName":"AURORA_BOREALIS", "currentCount":0}, 
    "BARN": { "count":17, "color":"#c4f0f0", "paintName":"BARN", "currentCount":0}, 
    "BEACH": { "count":27, "color":"#cfc59f", "paintName":"BEACH", "currentCount":0}, 
    "BOAT": { "count":2, "color":"#b2e6e6", "paintName":"BOAT", "currentCount":0}, 
    "BRIDGE": { "count":7, "color":"#8b572a", "paintName":"BRIDGE", "currentCount":0}, 
    "BUILDING": { "count":1, "color":"#5e3816", "paintName":"BUILDING", "currentCount":0}, 
    "BUSHES": { "count":120, "color":"#477610", "paintName":"BUSHES", "currentCount":0}, 
    "CABIN": { "count":69, "color":"#68533f", "paintName":"CABIN", "currentCount":0}, 
    "CACTUS": { "count":4, "color":"#a0dd55", "paintName":"CACTUS", "currentCount":0}, 
    "CIRCLE_FRAME": { "count":2, "color":"#c3fdff", "paintName":"CIRCLE_FRAME", "currentCount":0}, 
    "CIRRUS": { "count":28, "color":"#def2f2", "paintName":"CIRRUS", "currentCount":0}, 
    "CLIFF": { "count":8, "color":"#cddad7", "paintName":"CLIFF", "currentCount":0}, 
    "CLOUDS": { "count":179, "color":"#d1e2f0", "paintName":"CLOUDS", "currentCount":0}, 
    "CONIFER": { "count":212, "color":"#658f38", "paintName":"CONIFER", "currentCount":0}, 
    "CUMULUS": { "count":86, "color":"#f6f6f6", "paintName":"CUMULUS", "currentCount":0}, 
    "DECIDUOUS": { "count":227, "color":"#486827", "paintName":"DECIDUOUS", "currentCount":0}, 
    "DIANE_ANDRE": { "count":1, "color":"#bdf9f9", "paintName":"DIANE_ANDRE", "currentCount":0}, 
    "DOCK": { "count":1, "color":"#8b572a", "paintName":"DOCK", "currentCount":0}, 
    "DOUBLE_OVAL_FRAME": { "count":1, "color":"#c9fffa", "paintName":"DOUBLE_OVAL_FRAME", "currentCount":0}, 
    "FARM": { "count":1, "color":"#BBBBBB", "paintName":"FARM", "currentCount":0}, 
    "FENCE": { "count":24, "color":"#d0d0d0", "paintName":"FENCE", "currentCount":0}, 
    "FIRE": { "count":1, "color":"#f5a623", "paintName":"FIRE", "currentCount":0}, 
    "FLORIDA_FRAME": { "count":1, "color":"#FF00BB", "paintName":"FLORIDA_FRAME", "currentCount":0}, 
    "FLOWERS": { "count":12, "color":"#BB00BB", "paintName":"FLOWERS", "currentCount":0}, 
    "FOG": { "count":23, "color":"#a7dde6", "paintName":"FOG", "currentCount":0}, 
    "FRAMED": { "count":53, "color":"#243624", "paintName":"FRAMED", "currentCount":0}, 
    "GRASS": { "count":142, "color":"#8dbc4b", "paintName":"GRASS", "currentCount":0}, 
    "GUEST": { "count":22, "color":"#524c52", "paintName":"GUEST", "currentCount":0}, 
    "HALF_CIRCLE_FRAME": { "count":1, "color":"#d0ffed", "paintName":"HALF_CIRCLE_FRAME", "currentCount":0}, 
    "HALF_OVAL_FRAME": { "count":1, "color":"#5555BB", "paintName":"HALF_OVAL_FRAME", "currentCount":0}, 
    "HILLS": { "count":18, "color":"#6d8266", "paintName":"HILLS", "currentCount":0}, 
    "LAKE": { "count":143, "color":"#4aa4a4", "paintName":"LAKE", "currentCount":0}, 
    "LAKES": { "count":0, "color":"#00FF00", "paintName":"LAKES", "currentCount":0}, 
    "LIGHTHOUSE": { "count":1, "color":"#d0021b", "paintName":"LIGHTHOUSE", "currentCount":0}, 
    "MILL": { "count":2, "color":"#b9fdf1", "paintName":"MILL", "currentCount":0}, 
    "MOON": { "count":3, "color":"#e8e8e8", "paintName":"MOON", "currentCount":0}, 
    "MOUNTAIN": { "count":160, "color":"#b2b6b2", "paintName":"MOUNTAIN", "currentCount":0}, 
    "MOUNTAINS": { "count":99, "color":"#779393", "paintName":"MOUNTAINS", "currentCount":0}, 
    "NIGHT": { "count":11, "color":"#adefff", "paintName":"NIGHT", "currentCount":0}, 
    "OCEAN": { "count":36, "color":"#508f88", "paintName":"OCEAN", "currentCount":0}, 
    "OVAL_FRAME": { "count":38, "color":"#48261c", "paintName":"OVAL_FRAME", "currentCount":0}, 
    "PALM_TREES": { "count":9, "color":"#9dd657", "paintName":"PALM_TREES", "currentCount":0}, 
    "PATH": { "count":49, "color":"#ad9b83", "paintName":"PATH", "currentCount":0}, 
    "PERSON": { "count":1, "color":"#7cefdd", "paintName":"PERSON", "currentCount":0}, 
    "PORTRAIT": { "count":3, "color":"#addfff", "paintName":"PORTRAIT", "currentCount":0}, 
    "RECTANGLE_3D_FRAME": { "count":1, "color":"#555500", "paintName":"RECTANGLE_3D_FRAME", "currentCount":0}, 
    "RECTANGULAR_FRAME": { "count":1, "color":"#ffd88a", "paintName":"RECTANGULAR_FRAME", "currentCount":0}, 
    "RIVER": { "count":126, "color":"#427979", "paintName":"RIVER", "currentCount":0}, 
    "ROCKS": { "count":77, "color":"#566b5c", "paintName":"ROCKS", "currentCount":0}, 
    "SEASHELL_FRAME": { "count":1, "color":"#bdb2b1", "paintName":"SEASHELL_FRAME", "currentCount":0}, 
    "SNOW": { "count":75, "color":"#ebebeb", "paintName":"SNOW", "currentCount":0}, 
    "SNOWY_MOUNTAIN": { "count":109, "color":"#d3d7d7", "paintName":"SNOWY_MOUNTAIN", "currentCount":0}, 
    "SPLIT_FRAME": { "count":1, "color":"#00BB55", "paintName":"SPLIT_FRAME", "currentCount":0}, 
    "STEVE_ROSS": { "count":11, "color":"#a6f2f2", "paintName":"STEVE_ROSS", "currentCount":0}, 
    "STRUCTURE": { "count":85, "color":"#603527", "paintName":"STRUCTURE", "currentCount":0}, 
    "SUN": { "count":40, "color":"#fffbe8", "paintName":"SUN", "currentCount":0}, 
    "TOMB_FRAME": { "count":1, "color":"#a6dbff", "paintName":"TOMB_FRAME", "currentCount":0}, 
    "TREE": { "count":361, "color":"#165819", "paintName":"TREE", "currentCount":0}, 
    "TREES": { "count":337, "color":"#284b30", "paintName":"TREES", "currentCount":0}, 
    "TRIPLE_FRAME": { "count":1, "color":"#a6f0f1", "paintName":"TRIPLE_FRAME", "currentCount":0}, 
    "WATERFALL": { "count":39, "color":"#005555", "paintName":"WATERFALL", "currentCount":0}, 
    "WAVES": { "count":34, "color":"#7da6b6", "paintName":"WAVES", "currentCount":0}, 
    "WINDMILL": { "count":1, "color":"#a1faff", "paintName":"WINDMILL", "currentCount":0}, 
    "WINDOW_FRAME": { "count":1, "color":"#88f6ff", "paintName":"WINDOW_FRAME", "currentCount":0}, 
    "WINTER": { "count":69, "color":"#c5f2f7", "paintName":"WINTER", "currentCount":0}, 
    "WOOD_FRAMED": { "count":1, "color":"#9ed4ff", "paintName":"WOOD_FRAMED", "currentCount":0}
  };

  const paintNames = Object.keys(paints);
  const newPaints: paletteType = {};

  paintNames.forEach((pname) => {
    if (paints[pname].count > 0) {
      newPaints[pname] = paints[pname];
    }
  });

  return newPaints;
}

export default createPaints;