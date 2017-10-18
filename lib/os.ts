export const isMac = (): boolean => {
  return navigator
    && typeof navigator.platform === 'string'
    && navigator.platform.toLowerCase().indexOf('mac') > -1;
};

export const isPc = (): boolean => {
  return navigator
    && typeof navigator.platform === 'string'
    && navigator.platform.toLowerCase().indexOf('win') > -1;
};
