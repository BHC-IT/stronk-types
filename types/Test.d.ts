// @ts-nocheck These types cause TS errors when not used in a testing context

import { Expect, ExpectTrue, ExpectFalse, ExpectExtends, ExpectValidArgs, Equal, NotEqual } from '@type-challenges/utils'
import { IsNever, IsNotNever } from './Conditionals'

export { Expect, ExpectTrue, ExpectFalse, ExpectExtends, ExpectValidArgs, Equal, NotEqual }

export type ExpectNever<T> = ExpectTrue<IsNever<T>>
export type ExpectNotNever<T> = ExpectTrue<IsNotNever<T>>

export type ExpectEqual<T, U> = Expect<Equal<T, U>>
export type ExpectNotEqual<T, U> = Expect<NotEqual<T, U>>
