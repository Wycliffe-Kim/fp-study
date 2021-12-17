const { main } = require('../main');
const { functor1, functor2 } = require('./functor');
const { monadCompose, monad1, monad2, monadChain, monadEither, monadIO, monadLift, monadMaybe } = require('./monad');

main([
  functor1,
  functor2,
  monad1,
  monad2,
  monadMaybe,
  monadLift,
  monadEither,
  monadIO,
  monadChain,
  monadCompose
]);