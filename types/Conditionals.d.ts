import { ExpectExtends, IsAny, NotAny as IsNotAny } from '@type-challenges/utils'

export { IsAny, IsNotAny, ExpectExtends }

export type If<Test extends boolean, OnTrue, OnFalse = never> = Test extends true ? OnTrue : OnFalse

// prettier-ignore
export type Extends<Type, ToExtend>
  // This first check accounts for distributivity in types
  = (Type extends ToExtend ? true : false) extends true
    ? true
    : false
export type NotExtends<Type, ToExtend> = Not<Extends<Type, ToExtend>>
export type MutuallyExtend<T1, T2> = If<Extends<T1, T2>, Extends<T2, T1>, false>

export type IfExtends<Type, ToExtend, OnExtends, OnNotExtends = never> = If<
  Extends<Type, ToExtend>,
  OnExtends,
  OnNotExtends
>
export type IfNotExtends<Type, ToExtend, OnNotExtends, OnExtends = never> = If<
  Not<Extends<Type, ToExtend>>,
  OnNotExtends,
  OnExtends
>

export type Not<Test extends boolean> = If<Test, false, true>
export type And<A extends boolean, B extends boolean> = If<A, If<B, true, false>, false>
export type Or<A extends boolean, B extends boolean> = If<A, true, If<B, true, false>>
export type Xor<A extends boolean, B extends boolean> = If<
  A,
  If<Not<B>, true, false>,
  If<B, true, false>
>

export type NeverIf<Test extends boolean, OnTrue = unknown> = If<Test, never, OnTrue>
export type NeverIfNot<Test extends boolean, OnFalse = unknown> = If<Not<Test>, never, OnFalse>

export type IsNever<Type> = [Type] extends [never] ? true : false
export type IsNotNever<Type> = Not<IsNever<Type>>

export type IfNever<Type, OnIsNever, OnIsNotNever = never> = If<
  IsNever<Type>,
  OnIsNever,
  OnIsNotNever
>
export type IfNotNever<Type, OnIsNotNever, OnIsNever = never> = If<
  Not<IsNever<Type>>,
  OnIsNotNever,
  OnIsNever
>

export type IfAny<Type, OnIsAny, OnIsNotAny = never> = If<IsAny<Type>, OnIsAny, OnIsNotAny>
export type IfNotAny<Type, OnIsNotAny, OnIsAny = never> = If<IsNotAny<Type>, OnIsNotAny, OnIsAny>

export type IsObject<Type> = Extends<Type, object>
