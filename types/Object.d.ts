import { Accessor, MergeInsertions, PartialExcept } from './Util'
import { EmptyArray, Traversable } from './ArrayUtils'
import { If, IfExtends, IsNotAny, IsNotNever } from './Conditionals'

export type ObjectEntry = [Accessor, unknown]

export type PartialRecord<Keys extends Accessor, Values> = Partial<Record<Keys, Values>>

export namespace Object {
  /** Check that an object type's is neither `never` not `any` */
  export type IsKnown<T extends object> = IsNotNever<IsNotNever<T> & IsNotAny<T>>

  /** Extract an object's keys as union */
  export type Keys<T extends object> = If<IsKnown<T>, keyof T>

  /** Get an union of all the values in an object */
  export type Values<T extends object> = If<IsKnown<T>, T[keyof T]>

  /** Get an union of all the entries in an object */
  export type Entries<T extends object, Keys extends keyof T = keyof T> = Values<
    Required<{
      [k in Keys]: [k, T[k]]
    }>
  >

  // prettier-ignore
  /** Construct an object from an array of [key, value] pairs */
  export type FromEntries<Entries extends Traversable<ObjectEntry>>
    = Entries extends EmptyArray
      ? {}
      : Entries extends [infer First extends ObjectEntry, ...infer Tail extends ObjectEntry[]]
        ? MergeInsertions<
            & IfExtends<First[1], NonNullable<First[1]>,
              { [k in First[0]]: First[1] },
              { [k in First[0]]?: First[1] }
            >
            & FromEntries<Tail>
          >
        : never
}
