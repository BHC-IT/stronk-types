import { Equal, Expect, ExpectEmpty, ExpectFalse, ExpectNever, ExpectTrue } from '../types'

import '../types'

declare module '../types' {
    // prettier-ignore
    type __TEST__ = {
        Keys: [
          Expect<Equal<Keys<Dummy>, 'aString' | 'aNumber' | 'anObject'>>,
          ExpectNever<Keys<{}>>,
          ExpectNever<Keys<never>>,
          ExpectNever<Keys<any>>,
          // @ts-expect-error
          Keys<'sauce'>,
        ],
      }
  }
}
