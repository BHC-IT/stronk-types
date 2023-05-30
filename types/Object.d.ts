import { IfNotAny, IfNotNever, IsNotAny, IsNotNever } from './Conditionals'

export namespace Object {
  /** Check that an object type is neither `never` not `any` */
  export type IsKnown<T extends object> = IsNotNever<IsNotNever<T> & IsNotAny<T>>

  /** Extract an object's keys as union */
  export type Keys<T extends object> = IfNotNever<T, IfNotAny<T, keyof T>>
}
