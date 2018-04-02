// @flow

export type paintType = {
  color: string,
  count: number,
  paintName: string,
  currentCount: number
};

export type paletteType = {
  [string]: paintType
};
