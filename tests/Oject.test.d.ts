import { Equal, Expect, ExpectEmpty, ExpectFalse, ExpectNever, ExpectTrue, Extends } from '../types'

import '../types'

declare module '../types' {
  namespace Object {
    export interface Dummy {
      string: string
      number: number
      object: {
        prop1: string
        prop2: string
      }
      optional?: 23
      polymorphic: string | number
    }

    type __TEST__ = {
      IsKnown: [
        ExpectTrue<IsKnown<Dummy>>,
        ExpectTrue<IsKnown<{}>>,
        ExpectFalse<IsKnown<any>>,
        ExpectFalse<IsKnown<never>>
      ]
      Keys: [
        // prettier-ignore
        Expect<
          Equal<
            Keys<Dummy>,
            | 'string'
            | 'number'
            | 'object'
            | 'optional'
            | 'polymorphic'
          >
        >,
        // prettier-ignore
        Expect<
          Equal<
            Keys<Dummy & { sauce: string }>,
            | 'string'
            | 'number'
            | 'object'
            | 'optional'
            | 'polymorphic'
            | 'sauce'
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
        // prettier-ignore
        Expect<
          Equal<
            Values<Dummy>,
            | Dummy['string']
            | Dummy['number']
            | Dummy['object']
            | Dummy['optional']
          >
        >
      ]
      Entries: [
        Expect<Equal<Entries<Dummy, 'string'>, ['string', Dummy['string']]>>,
        Expect<Equal<Entries<Dummy, 'number'>, ['number', Dummy['number']]>>,
        Expect<Equal<Entries<Dummy, 'object'>, ['object', Dummy['object']]>>,
        Expect<Equal<Entries<Dummy, 'optional'>, ['optional', Dummy['optional']]>>,
        Expect<
          Equal<
            Entries<Dummy>,
            | ['string', string]
            | ['number', number]
            | ['object', { prop1: string; prop2: string }]
            | ['optional', 23 | undefined]
            | ['polymorphic', string | number]
          >
        >,
        ExpectEmpty<Entries<{}>>
      ]
      FromEntries: [
        Expect<
          Equal<
            FromEntries<
              [
                Entries<Dummy, 'string'>,
                Entries<Dummy, 'number'>,
                Entries<Dummy, 'object'>,
                Entries<Dummy, 'optional'>,
                Entries<Dummy, 'polymorphic'>
              ]
            >,
            Dummy
          >
        >
      ]
    }
  }
}
