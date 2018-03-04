export const isMac = (): boolean => {
  if (process
  && typeof process.platform === 'string'
  && process.platform.toLowerCase() === 'darwin') {
    return true;
  } else if (typeof navigator !== 'undefined'
  && typeof navigator.platform === 'string'
  && navigator.platform.toLowerCase().indexOf('mac') > -1) {
    return true;
  } else {
    return false;
  }
};

export const isPc = (): boolean => {
  if (process
  && typeof process.platform === 'string'
  && process.platform.toLowerCase() === 'win32') {
    return true;
  } else if (typeof navigator !== 'undefined'
    && typeof navigator.platform === 'string'
    && navigator.platform.toLowerCase().indexOf('win') > -1) {
    return true;
  } else {
    return false;
  }
};

export const isBrowser = (): boolean => {
  return typeof window !== 'undefined';
};

export const isNode = (): boolean => {
  return typeof window === 'undefined' && typeof process !== 'undefined';
};
