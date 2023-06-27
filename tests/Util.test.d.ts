import { Equal, Expect, ExpectFalse, ExpectTrue, IsUnion, PartialExcept } from '../types'

declare namespace PartialExcept {
  interface Dummy {
    prop1: string
    prop2: number
  }
}

type __TEST__ = {
  PartialExcept: [
    Expect<Equal<PartialExcept<PartialExcept.Dummy, 'prop1'>, { prop1: string; prop2?: number }>>,
    Expect<Equal<PartialExcept<PartialExcept.Dummy, 'prop2'>, { prop1?: string; prop2: number }>>,
    Expect<
      Equal<
        PartialExcept<PartialExcept.Dummy, keyof PartialExcept.Dummy>,
        { prop1: string; prop2: number }
      >
    >,
    Expect<Equal<PartialExcept<PartialExcept.Dummy, never>, Partial<PartialExcept.Dummy>>>
  ]
  IsUnion: [
    ExpectTrue<IsUnion<'sauce' | 'blanche'>>,
    ExpectTrue<IsUnion<string | number>>,
    ExpectFalse<IsUnion<never>>,
    ExpectFalse<IsUnion<string>>,
    // `string | 'a literal'` evaluates to string
    ExpectFalse<IsUnion<string | 'sauce'>>,
    // `string | never` evalutates to string
    ExpectFalse<IsUnion<string | never>>
  ]
}
