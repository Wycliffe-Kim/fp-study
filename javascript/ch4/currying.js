const R = require('ramda');

function currying() {
  const checkType = R.curry((typeDef, obj) => {
    if (!R.is(typeDef, obj)) {
      const type = typeof obj;
      throw new TypeError(`형식 불일치: [${typeDef}]이어야 하는데, [${type}]입니다.`);
    }
    return obj;
  });

  console.log(checkType(String)('Curry'));
  console.log(checkType(Number)(3));
  // checkType(String)(42);
}

module.exports = {
  currying
};