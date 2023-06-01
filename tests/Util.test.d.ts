import { Equal, Expect, PartialExcept } from '../types'

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
}
