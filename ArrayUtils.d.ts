import { Freeze } from './Freeze'
import { StringUtils } from './StringUtils'

// prettier-ignore
type __Split<Tuple, N extends number, O extends unknown[] = []>
  = O['length'] extends N ? {init: O, rest: Tuple}
  : Tuple extends [infer Head, ...infer Tail] ? __Split<[...Tail], N, [...O, Head]>
  : {init: O, rest: Tuple}

/** Mutable array */
export type MutableArray<T = unknown> = ArrayLike<T> & T[]

/** Read Only array */
export type ReadonlyArray<T = unknown> = Freeze<ArrayLike<T>> & readonly T[]

/** Either a regular array or a read only one */
export type Traversable<T = unknown> = MutableArray<T> | ReadonlyArray<T>

/** A tuple containing only one item */
export type Simpleton<T = unknown> = [T]

/** An array with no contents */
export type EmptyArray = []

// prettier-ignore
export namespace ArrayUtils {
  // Untested (older) types below
  /**
   * Convert given string to a tuple of each individual characters
   *
   * TODO: Test me
   */
  export type FromString<S extends string>
    = S extends `${infer Head}${infer Tail}`
    ? [Head, ...FromString<Tail>]
    : []

  /**
   * Convert an array of characters into a string
   *
   * TODO: Test me
   */
  export type AsString<A extends Traversable<string>> = StringUtils.FromArray<A>

  /**
   * Get the length of a frozen array
   *
   * TODO: Test me
   */
  export type Length<A extends ReadonlyArray> = A['length'];

  /**
   * Split a tuple `T` into `{init: [N first elements], rest: [remainder]}`
   *
   * TODO: Test me
   */
  export type Split<Tuple extends unknown[], N extends number> = __Split<Tuple, N, []>

  /**
   * Get the first element of an array
   *
   * TODO: Test me
   */
  export type First<A extends Traversable>
    = A extends [infer F, ...unknown[]]
      ? F
      : never

  /**
   * Get a copy of an array without its first element
   *
   * TODO: Test me
   */
  export type Shift<A extends Traversable>
    = A extends [unknown, ...infer Tail]
      ? Tail
      : EmptyArray

  /**
   * Convert a const {@link Tuple} type to an Union type of its values
   *
   * TODO: Test me
   */
  export type ToUnion<Tuple extends ReadonlyArray> = Tuple[number]

  /** Check if a {@link Traversable} contains a given type  */
  export type Includes<Type, T extends Traversable>
    = T extends [infer First, ...infer Tail]
      ? (<V>() => V extends First ? 0 : 1) extends (<V>() => V extends Type ? 0 : 1)
        ? true
        : Includes<Type, Tail>
      : false


  type MakeUnique<T extends Traversable, U extends Traversable>
    = T extends [infer First, ...infer Tail]
      ? MakeUnique<
          Tail,
          Includes<First, U> extends true
            ? U
            : [...U, First]
        >
      : U

  /** Make all values in {@link T} unique */
  export type Unique<T extends Traversable> = MakeUnique<T, []>
}
