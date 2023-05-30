import { ExpectNever, ExpectEmpty } from '../types'

type __TEST__ = {
  ExpectNever: [
    ExpectNever<never>,
    // @ts-expect-error
    ExpectNever<{}>,
    // @ts-expect-error
    ExpectNever<string>,
    // @ts-expect-error
    ExpectNever<'literal'>,
    // @ts-expect-error
    ExpectNever<23>,
    // @ts-expect-error
    ExpectNever<unknown>,
    // @ts-expect-error
    ExpectNever<any>
  ]
  ExpectEmpty: [
    ExpectEmpty<[]>,
    // @ts-expect-error
    ExpectEmpty<['wesh']>
  ]
}
