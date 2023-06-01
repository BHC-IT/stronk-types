import { MergeInsertions } from '@type-challenges/utils'

import { Opaque } from './Util'
import { If, IfNot } from './Conditionals'
import { StringUtils, EmptyString } from './StringUtils'
import { ReadonlyArray } from './ArrayUtils'
import { Object } from './Object'

// prettier-ignore
type __Strict<T extends object, TAll extends T>
  = T extends T
    ? MergeInsertions<
      & T
      & Partial<
          Record<
            Exclude<Object.Keys<TAll>, keyof T>,
            never
          >
        >
      >
    : never

// prettier-ignore
type __FromString<S extends string>
  = S extends EmptyString ? never
  : S extends `${infer Head}${infer Tail extends string}` ? Head | __FromString<Tail>
  : never;

// prettier-ignore
export namespace Union {
  /** Generate an union of single characters from a string */
  export type FromString<S extends string, NeverSingleChar extends boolean = false>
    = StringUtils.Length<S> extends 1 | 0
      ? IfNot<NeverSingleChar, S>
      : __FromString<S>

  /** The 26 alphabetical characters as an Union */
  export namespace Alphabet {
    export type Lowercase = FromString<'abcdefghijklmnopqrstuvwxyz'>
    export type Uppercase = FromString<'ABCDEFGHIJKLMNOPQRSTUVWXYZ'>
  }

  /** Make a discriminated union */
  export type Strict<T extends object> = __Strict<T, T>

  /** A Union type that also accepts arbitrary strings */
  export type LiteralFlexible<S extends string> = S | Opaque<string>

  /** Generate a union type from the values in a const Tuple */
  export type FromTuple<Tuple extends ReadonlyArray> = Tuple[number]
}
