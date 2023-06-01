import { Accessor, EmptyArray, MergeInsertions, Traversable } from '.'
import { If, IsNotAny, IsNotNever } from './Conditionals'
import { Union } from './Union'

export type ObjectEntry = [Accessor, unknown]

export type PartialRecord<Keys extends Accessor = Accessor, Values = unknown> = Partial<Record<Keys,Values>>

export namespace Object {
  /** Check that an object type's is neither `never` not `any` */
  export type IsKnown<T extends object> = IsNotNever<IsNotNever<T> & IsNotAny<T>>

  /** Extract an object's keys as union */
  export type Keys<T extends object> = If<IsKnown<T>, keyof T>

  /** Get an union of all the values in an object */
  export type Values<T extends object> = If<IsKnown<T>, T[keyof T]>

}
