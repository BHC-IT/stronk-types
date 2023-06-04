import { Extends, If, IsNotNever, NeverIfNot } from './Conditionals'
import { ArrayUtils, Traversable } from './ArrayUtils'
import { Union } from './Union'
import { NotEqual } from '@type-challenges/utils'

export type EmptyString = ''
export type WhiteSpace = ' ' | '\t' | '\n'

export namespace Letters {
  export type Lowercase = Union.FromString<'abcdefghijklmnopqrstuvwxyz'>
  export type Uppercase = Union.FromString<'ABCDEFGHIJKLMNOPQRSTUVWXYZ'>
}

export type Letters = Letters.Lowercase | Letters.Uppercase

export type Digits = Union.FromString<'0123456789'>

export type VariableNameChars = Letters | Digits | '_'

// prettier-ignore
/**
 * A collection of utility to manage strings types like a pro
 */
export namespace StringUtils {
  type IsValidVariableNameTail<S extends string>
    = S extends EmptyString
      ? true
      : S extends `${VariableNameChars}${infer Tail}`
        ? IsValidVariableNameTail<Tail>
        : false

  /**
   * Check if a string is a valid variable name in TS/JS
   */
  export type IsValidVariableName<S extends string>
    = S extends `${Exclude<VariableNameChars, Digits>}${infer Tail}`
      ? IsValidVariableNameTail<Tail>
      : false

  /**
   * Convert given string to a tuple of each individual characters
   *
   * @template S Any regular {@link string}
   */
  export type AsArray<S extends string>
    = ArrayUtils.FromString<S>

  /**
   * Convert an array of characters to a {@link string}
   *
   * @template A {@link Traversable} of single character strings
   */
  export type FromArray<A extends Traversable<string>>
    = A extends [infer S] ? S
    : A extends [infer S extends string, ...infer R extends string[]] ? `${S}${FromArray<R>}`
    : EmptyString

  /**
   * Concatenate two {@link string}s
   */
  export type Concat<S1 extends string, S2 extends string>
    = FromArray<[...AsArray<S1>, ...AsArray<S2>]>;

  export type Length<S extends string>
    = ArrayUtils.Length<AsArray<S>>;

  /**
   * A collection of utility types to manage template strings
   */
  export namespace Template {
    type IsUnclosedField<S extends string>
      = S extends `\$\{${infer Field}`
        ? Field extends `${string}}`
          ? false
          : true
        : never

    type IsNestedField<S extends string>
      = Extends<S, `${string}\${${string}\${${string}}}${string}`>

    type FieldNamesTuple<S extends string>
      = S extends `${string}\$\{${infer Name}}${infer Tail}`
        ? [Name, ...FieldNamesTuple<Tail>]
        : []

    type HasFields<S extends string>
      = S extends `${string}\${${string}}${string}`
        ? true
        : false

    type ExtractFields<S extends string, T extends string[] = []>
      = S extends `${string}\${${infer Name}}${infer Tail}`
        ? ExtractFields<Tail, If<IsValidVariableName<Name>, [...T, Name], T>>
        : ArrayUtils.Unique<T>

    /**
     * Check is a string is a template
     */
    export type IsTemplate<S extends string> = IsNotNever<FieldNames<S>>

    /**
     * Get field names tor a {@link Template} as an Union
     */
    export type FieldNames<S extends string> = FieldNames.AsTuple<S>[number]

    export namespace FieldNames {
      /**
       * Get field names tor a {@link Template} as a Tuple
       */
      export type AsTuple<S extends string>
        = ExtractFields<S> extends infer Fields extends string[]
          ? If<NotEqual<Fields, []>, Fields>
          : never
    }
  }

  export type Template<S extends string> = NeverIfNot<Template.IsTemplate<S>, S>
}
