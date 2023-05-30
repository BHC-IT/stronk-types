import { Equal, Expect, ExpectFalse, ExpectTrue } from '@type-challenges/utils'

import '../types'

declare module '../types' {
  namespace ArrayUtils {
    type __TEST__ = {
      Contains: [
        ExpectTrue<Includes<1337, [1337]>>,
        ExpectTrue<Includes<1337, [23, 1337]>>,
        ExpectTrue<Includes<1337, [1337, 42]>>,
        ExpectTrue<Includes<1337, [23, 1337, 42]>>,
        ExpectFalse<Includes<1337, []>>,
        ExpectFalse<Includes<1337, [23, 42]>>,
        ExpectTrue<Includes<string | number, [string | number]>>,
        ExpectFalse<Includes<string | number, [23, 'text', 23 | 'text', 23 | string, number | 'text']>>,
        ExpectTrue<Includes<never, [never]>>
      ]
      Deduplicate: [
        Expect<Equal<Unique<[]>, []>>,
        Expect<Equal<Unique<['unique']>, ['unique']>>,
        Expect<Equal<Unique<['double', 'double']>, ['double']>>,
        Expect<Equal<Unique<['double', 'unique', 'double']>, ['double', 'unique']>>,
        Expect<Equal<Unique<[1, 2, 2, 3, 3, 3]>, [1, 2, 3]>>
      ]
    }
  }
}
