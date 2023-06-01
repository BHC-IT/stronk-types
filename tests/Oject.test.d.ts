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
      optional?: 23
    }

    type __TEST__ = {
      IsKnown: [
        ExpectTrue<IsKnown<Dummy>>,
        ExpectTrue<IsKnown<{}>>,
        ExpectFalse<IsKnown<any>>,
        ExpectFalse<IsKnown<never>>
      ]
      Keys: [
        Expect<Equal<Keys<Dummy>, 'aString' | 'aNumber' | 'anObject' | 'optional'>>,
        Expect<
          Equal<
            Keys<Dummy & { sauce: string }>,
            'aString' | 'aNumber' | 'anObject' | 'optional' | 'sauce'
          >
        >,
        ExpectNever<Keys<Dummy | { sauce: string }>>,
        ExpectNever<Keys<{}>>,
        ExpectNever<Keys<never>>,
        ExpectNever<Keys<any>>,
        // @ts-expect-error
        Keys<'sauce'>
      ]
      Values: [
        Expect<
          Equal<
            Values<Dummy>,
            Dummy['aString'] | Dummy['aNumber'] | Dummy['anObject'] | Dummy['optional']
          >
        >
      ]
      Entries: [
        Expect<Equal<Entries<Dummy, 'aString'>, ['aString', Dummy['aString']]>>,
        Expect<Equal<Entries<Dummy, 'aNumber'>, ['aNumber', Dummy['aNumber']]>>,
        Expect<Equal<Entries<Dummy, 'anObject'>, ['anObject', Dummy['anObject']]>>,
        Expect<Equal<Entries<Dummy, 'optional'>, ['optional', Dummy['optional']]>>,
        Expect<
          Equal<
            Entries<Dummy>,
            | ['aString', string]
            | ['aNumber', number]
            | ['anObject', { prop1: string; prop2: string }]
            | ['optional', 23 | undefined]
          >
        >,
        ExpectEmpty<Entries<{}>>
      ]
      FromEntries: [
        Expect<
          Equal<
            FromEntries<
              [Entries<Dummy, 'aString'>, Entries<Dummy, 'aNumber'>, Entries<Dummy, 'anObject'>]
            >,
            Dummy
          >
        >
      ]
    }
  }
}
