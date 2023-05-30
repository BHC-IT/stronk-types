import { MergeInsertions, MutableArray, Primitive, Simpleton } from '.'

/* eslint-disable @typescript-eslint/ban-types */
// These types need to use the `Function` type wich triggers the rule.

/**
 * Make all the keys of a type immutable, recursively
 */
// prettier-ignore
export type Freeze<T> = {
  +readonly [K in keyof T]:
    T[K] extends infer U extends unknown
      ? U extends Primitive ? U
      : U extends MutableArray
        ? U extends Simpleton<infer V>
          ? readonly [Freeze<V>]
          : U extends [infer First, ...infer Tail]
            ? readonly [Freeze<First>, ...Freeze<Tail>]
            : never
      : U extends Function ? U
      : Freeze<U>
    : Readonly<T[K]>;
};

/**
 * Remove all immutability from a type, recursively
 */
// prettier-ignore
export type Unfreeze<T> = {
  -readonly [K in keyof T]:
    T[K] extends infer U extends unknown
      ? U extends Primitive ? U
      : U extends MutableArray
        ? U extends Simpleton<infer V>
          ? readonly [Unfreeze<V>]
          : U extends [infer First, ...infer Tail]
            ? readonly [Unfreeze<First>, ...Unfreeze<Tail>]
            : never
      : U extends Function ? U
      : Unfreeze<U>
    : T[K];
};

/**
 * Use {@link Freeze} on properties described by Union K in type T
 *
 * @param T The type to freeze the props of
 * @param K Keys describing the properties of T to {@link Freeze}
 */
// prettier-ignore
export type FreezeProps<T, K extends keyof T = keyof T> = MergeInsertions<
  & Freeze<Pick<T, K>>
  & Omit<T, K>
>;
