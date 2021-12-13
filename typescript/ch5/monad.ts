import { MonadWrapper } from './MonadWrapper';
import fp from 'lodash/fp';

function monad1() {
  const data = MonadWrapper.prototype.of('Hello Monads!')
    .map(fp.toUpper)
    .map(fp.identity);

  console.log(data.join().get());
}

export {
  monad1
};