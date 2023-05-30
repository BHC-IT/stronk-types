import { IfNotAny, IfNotNever, IsNotAny, IsNotNever } from './Conditionals'

export namespace Object {
  /** Extract an object's keys as union */
  export type Keys<T extends object> = IfNotNever<T, IfNotAny<T, keyof T>>
}
