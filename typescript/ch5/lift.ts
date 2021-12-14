import fp from 'lodash/fp';
import { MaybeFactory } from './MaybeFactory';
import { WrapperFunc } from './WrapperFunc';

const lift = fp.curry((f: WrapperFunc, value: any) => MaybeFactory.fromNullable(value).map(f));
export { lift };