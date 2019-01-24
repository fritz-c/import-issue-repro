/* eslint-disable no-unused-vars,no-useless-computed-key */

export const foo2 = 3;

// none of these break it when we use "export ..." instead of "module.exports.foo = ..."
const a = {
  ['a']: 1,
};

const b = {
  ...{ b: 1 },
};

const c = () => {}
