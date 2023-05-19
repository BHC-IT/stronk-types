type CheckIfExtends<Type, ToExtend> = Type extends ToExtend ? true : false

// prettier-ignore
export type Extends<Type, ToExtend>
  = CheckIfExtends<Type, ToExtend> extends true
    ? true
    : CheckIfExtends<Type, ToExtend> extends false
      ? false
      : CheckIfExtends<Type, ToExtend> extends boolean
        ? false
        : never

export type If<Test extends boolean, OnTrue, OnFalse = never> = Test extends true ? OnTrue : OnFalse

export type Not<Test extends boolean> = If<Test, false, true>
export type And<A extends boolean, B extends boolean> = If<A, If<B, true, false>, false>
export type Or<A extends boolean, B extends boolean> = If<A, true, If<B, true, false>>
export type Xor<A extends boolean, B extends boolean> = If<A, If<Not<B>, true, false>, If<B, true, false>>

export type NeverIf<Test extends boolean, OnTrue = unknown> = If<Test, never, OnTrue>
export type NeverIfNot<Test extends boolean, OnFalse = unknown> = If<Not<Test>, never, OnFalse>

export type IsNever<Type> = [Type] extends [never] ? true : false
export type IsNotNever<Type> = Not<IsNever<Type>>

export type IfNever<Type, OnIsNever, OnIsNotNever = never> = If<IsNever<Type>, OnIsNever, OnIsNotNever>
export type IfNotNever<Type, OnIsNotNever, OnIsNever = never> = If<Not<IsNever<Type>>, OnIsNotNever, OnIsNever>
