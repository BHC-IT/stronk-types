import { Equal, Expect, ExpectEmpty, ExpectFalse, ExpectNever, ExpectTrue } from '../types'

import '../types'

declare module '../types' {
  namespace Object {
    export interface Dummy {
      aString: string
      aNumber: number
      anObject: {
        prop1: string
        prop2: string
      }
    }

    type __TEST__ = {
      IsKnown: [
        ExpectTrue<IsKnown<Dummy>>,
        ExpectTrue<IsKnown<{}>>,
        ExpectFalse<IsKnown<any>>,
        ExpectFalse<IsKnown<never>>
      ]
      Keys: [
        Expect<Equal<Keys<Dummy>, 'aString' | 'aNumber' | 'anObject'>>,
        Expect<
          Equal<Keys<Dummy & { sauce: string }>, 'aString' | 'aNumber' | 'anObject' | 'sauce'>
        >,
        ExpectNever<Keys<Dummy | { sauce: string }>>,
        ExpectNever<Keys<{}>>,
        ExpectNever<Keys<never>>,
        ExpectNever<Keys<any>>,
        // @ts-expect-error
        Keys<'sauce'>
      ]
  }
}
