import { MergeInsertions } from "@type-challenges/utils"

export { MergeInsertions }

export type Primitive = string | number
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

export type PartialExcept<T, K extends keyof T>
  = MergeInsertions<
    & Partial<T>
    & Pick<T, K>
  >
