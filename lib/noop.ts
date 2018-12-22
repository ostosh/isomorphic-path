export const noop = (from: string, to: string): string => {
  throw Error('method unsupported in isomorphic-path');
};
