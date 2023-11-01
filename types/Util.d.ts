import { MergeInsertions as Merge } from "@type-challenges/utils"

export type Primitive = string | number | boolean
export type Accessor = keyof any

export type Nothing = Record<Accessor, never>

export type DeepRecord<Keys extends Accessor = Accessor, Values = unknown> = {
  [k in Keys]: Values | DeepRecord<Keys, Values>
}

export type Nullable<T> = T | undefined

export type Errorable<T> = {
  value: T
  error?: string
}

/** An opaque type that accepts non-opaque values of the same base type {@link T} */
export type Opaque<T> = T & { readonly __OPAQUE__?: T }

export namespace Opaque {
  const __TAG__: unique symbol

  type Tagged<Token> = { readonly [__TAG__]: Token }

  /**
   * An opaque type that only accepts value of precisely the same {@link Opaque.Strict} type
   *
   * @template Tag A unique string indetifier to differentiate this {@link Opaque} from others
   */
  export type Strict<T, Tag extends string> = T & Tagged<Tag>
}

export type MergeInsertions<T> = Merge<T>
export namespace MergeInsertions {
  export type TopLevel<T> = T extends object ? { [key in keyof T]: T[key] } : T
}

export type PartialExcept<T, K extends keyof T>
  = MergeInsertions.TopLevel<
    & Partial<T>
    & Pick<T, K>
  >

export type PickByType<T extends object, ToPick> = {
  [k in keyof T as T[k] extends ToPick ? k : never]: T[k]
}

export namespace PickByType {
  export type Deep<T extends object, ToPick> = {
    [k in keyof T as T[k] extends ToPick | object ? k : never]: T[k] extends object ? Deep<T[k], ToPick> : T[k]
  }
}

export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type Next = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
type Increment<T extends number> =
  T extends -1 ? 0 :
  `${T}` extends `-${infer N extends number}` ? `-${Decrement<N>}` extends
  `${infer M extends number}` ? M : never :
  `${T}` extends `${infer F extends number}${Digit}` ?
  `${T}` extends `${F}${infer D extends Digit}` ?
  `${D extends 9 ? Increment<F> : F}${Next[D]}` extends
  `${infer N extends number}` ? N : never : never :
  T extends 9 ? 10 : Next[T]

type Prev = [9, 0, 1, 2, 3, 4, 5, 6, 7, 8];
type Decrement<T extends number> =
  `${T}` extends `-${infer N extends number}` ? `-${Increment<N>}` extends
  `${infer M extends number}` ? M : never :
  `${T}` extends `${infer F extends number}${Digit}` ?
  `${T}` extends `${F}${infer D extends Digit}` ?
  `${D extends 0 ? Decrement<F> extends 0 ? "" : Decrement<F> : F}${Prev[D]}` extends
  `${infer N extends number}` ? N : never : never :
  T extends 0 ? -1 : Prev[T]

type __NumericRange<Start extends number, End extends number, Accumulator extends number = never> =
  Start extends End ? Accumulator : __NumericRange<Increment<Start>, End, Start | Accumulator>

/**
 * Create a union type of numbers ranging from {@link Start} to {@link End}.
 *
 * Can still receive any number. Use {@link NumericRange.Strict} if you want only
 * literal values between given bounds.
 *
 * @see https://stackoverflow.com/a/76692016/10464267
 */
export type NumericRange<Start extends number, End extends number> = Opaque<__NumericRange<Start, End>> | number
export namespace NumericRange {
  /**
   * Create a union type of numbers ranging from {@link Start} to {@link End}.
   *
   * Can only accept literal values between given bounds.
   */
  export type Strict<Start extends number, End extends number> = __NumericRange<Start, End>
}
