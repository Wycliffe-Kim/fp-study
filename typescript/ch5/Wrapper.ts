import { WrapperFunc } from './WrapperFunc';

interface WrapperReturn {
  map(f: WrapperFunc): any;
  fmap(f: WrapperFunc): any;
  toString(): string;
}

function Wrapper(value: any) {
  const _value = value;

  return {
    map(f: WrapperFunc) {
      return f(_value);
    },

    fmap(f: WrapperFunc) {
      return Wrapper(f(_value));
    },

    toString() {
      return `Wrapper(${_value})`;
    }
  };
}

export {
  WrapperReturn,
  Wrapper
};