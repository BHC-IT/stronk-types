import { Expect, Equal, ExpectTrue, ExpectFalse } from '@type-challenges/utils'

import { Extends, If, Not, And, Or, Xor, NeverIf, NeverIfNot, IsNever, IfNever } from '../types'

// prettier-ignore
type __TEST__ = {
  If: [
    ExpectTrue<If<true, true, false>>,
    ExpectFalse<If<false, true, false>>,
  ]
  // If any edge case comes up when this type misbehaves,
  // add it here before editing the type.
  Extends: [
    ExpectTrue<Extends<'sauce', string>>,
    ExpectTrue<Extends<23 | 42, number>>,
    ExpectTrue<Extends<23, 23 | 42>>,
    ExpectFalse<Extends<23 | 42, 23>>,
    ExpectFalse<Extends<number, 23 | 42>>,
    ExpectFalse<Extends<string, 'sauce'>>,
  ]
  Not: [
    ExpectTrue<Not<false>>,
    ExpectFalse<Not<true>>,
  ]
  And: [
    ExpectTrue<And<true, true>>,
    ExpectFalse<And<true, false>>,
    ExpectFalse<And<false, true>>,
    ExpectFalse<And<false, false>>,
  ]
  Or: [
    ExpectTrue<Or<true, true>>,
    ExpectTrue<Or<true, false>>,
    ExpectTrue<Or<false, true>>,
    ExpectFalse<Or<false, false>>,
  ]
  Xor: [
    ExpectFalse<Xor<true, true>>,
    ExpectTrue<Xor<true, false>>,
    ExpectTrue<Xor<false, true>>,
    ExpectFalse<Xor<false, false>>,
  ]
  NeverIf: [
    Expect<Equal<NeverIf<true, 'OnFalse'>, never>>,
    Expect<Equal<NeverIf<false, 'OnFalse'>, 'OnFalse'>>,
  ]
  NeverIfNot: [
    Expect<Equal<NeverIfNot<false, 'OnTrue'>, never>>,
    Expect<Equal<NeverIfNot<true, 'OnTrue'>, 'OnTrue'>>,
  ]
  IsNever: [
    ExpectTrue<IsNever<never>>,
    ExpectFalse<IsNever<unknown>>,
  ]
  IfNever: [
    Expect<Equal<IfNever<never, 'OnTrue', 'OnFalse'>, 'OnTrue'>>,
    Expect<Equal<IfNever<unknown, 'OnTrue', 'OnFalse'>, 'OnFalse'>>,
  ]
}
