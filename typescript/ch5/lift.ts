import fp from 'lodash/fp';
import { Maybe } from './Maybe';
import { WrapperFunc } from './WrapperFunc';

const lift = fp.curry((f: WrapperFunc, value: any) => Maybe.fromNullable(value).map(f));
export { lift };