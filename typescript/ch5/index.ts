import main from '../main';
import { functor1, functor2 } from './functor';
import { monad1, monad2, monadChain, monadEither, monadIO, monadLift, monadMaybe } from './monad';

main([
  functor1,
  functor2,
  monad1,
  monad2,
  monadMaybe,
  monadLift,
  monadEither,
  monadIO,
  monadChain
]);
