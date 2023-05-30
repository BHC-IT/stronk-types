import { ExpectExtends as Extends, IsAny, NotAny as IsNotAny } from '@type-challenges/utils'

export { IsAny, IsNotAny, Extends }

export type If<Test extends boolean, OnTrue, OnFalse = never> = Test extends true ? OnTrue : OnFalse

export type NotExtends<Type, ToExtend> = Not<Extends<Type, ToExtend>>

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
