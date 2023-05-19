import { MergeInsertions } from "@type-challenges/utils"

export type Primitive = string | number
export type Accessor = Primitive | symbol

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

declare module '@type-challenges/utils' {
  // prettier-ignore
  export namespace MergeInsertions {
    /**
    * Same as {@link MergeInsertions}, but recursive
    */
    export type Deep<T>
      = T extends Function ? T
      : T extends object ? { [K in keyof T]: Deep<T[K]> }
      : T
  }
}

export type PartialExcept<T, K extends keyof T>
  = MergeInsertions<Partial<T> & Pick<T, K>>
