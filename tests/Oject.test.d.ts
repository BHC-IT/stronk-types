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

    // prettier-ignore
    type __TEST__ = {
        IsKnown: [
          ExpectTrue<IsKnown<Dummy>>,
          ExpectTrue<IsKnown<{}>>,
          ExpectFalse<IsKnown<any>>,
          ExpectFalse<IsKnown<never>>
        ]
        Keys: [
          Expect<Equal<Keys<Dummy>, 'aString' | 'aNumber' | 'anObject'>>,
          ExpectNever<Keys<{}>>,
          ExpectNever<Keys<never>>,
          ExpectNever<Keys<any>>,
          // @ts-expect-error
          Keys<'sauce'>,
        ],
        Entry: [
          Expect<Equal<Entry<Dummy, 'aString'>, ['aString', Dummy['aString']]>>,
          Expect<Equal<Entry<Dummy, 'aNumber'>, ['aNumber', Dummy['aNumber']]>>,
          Expect<Equal<Entry<Dummy, 'anObject'>, ['anObject', Dummy['anObject']]>>,
        ]
      }
  }
}
