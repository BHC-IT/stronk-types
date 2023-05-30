import { Expect, ExpectTrue, ExpectFalse, ExpectValidArgs, Equal, NotEqual } from '@type-challenges/utils'
import { EmptyArray } from './ArrayUtils'
import { IsNotNever } from './Conditionals'

export { Expect, ExpectTrue, ExpectFalse, ExpectValidArgs, Equal, NotEqual }

/**
 * Check that a given type is never
 *
 * Note:
 * As of writing, `any` is not assignable to `never`, but `never` is not assignable to `any`.
 * A consequence of this is that it is not possible to make an ExpectNotNever<T>.
 * To test such a case, use {@link Expect} in combination with {@link IsNotNever}.
 */
export type ExpectNever<T extends never> = T

/**
 * Check that a given {@link Traversable} is empty
 */
export type ExpectEmpty<T extends EmptyArray> = T
