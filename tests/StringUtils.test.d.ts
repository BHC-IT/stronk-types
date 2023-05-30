import { Equal, ExpectFalse, ExpectTrue, Expect } from '@type-challenges/utils'

import '../types'

// prettier-ignore
declare module '../types' {
  namespace StringUtils {
    type __TEST__ = {
      IsValidVariableNameTail: [
        ExpectTrue<IsValidVariableNameTail<'_'>>,
        ExpectTrue<IsValidVariableNameTail<'___'>>,
        ExpectTrue<IsValidVariableNameTail<'__TEST__'>>,
        ExpectTrue<IsValidVariableNameTail<'snake_case'>>,
        ExpectTrue<IsValidVariableNameTail<'SCREAMING_SNAKE_CASE'>>,
        ExpectTrue<IsValidVariableNameTail<'PascalCase'>>,
        ExpectTrue<IsValidVariableNameTail<'camelCase'>>,
        ExpectTrue<IsValidVariableNameTail<'enumerated23'>>,
        // FIXME
        ExpectFalse<IsValidVariableNameTail<'1start_with_num'>>,
        ExpectFalse<IsValidVariableNameTail<'Forbidden-Characters!'>>,
      ]
      IsValidVariableName: [
        ExpectTrue<IsValidVariableName<'_'>>,
        ExpectTrue<IsValidVariableName<'___'>>,
        ExpectTrue<IsValidVariableName<'__TEST__'>>,
        ExpectTrue<IsValidVariableName<'snake_case'>>,
        ExpectTrue<IsValidVariableName<'SCREAMING_SNAKE_CASE'>>,
        ExpectTrue<IsValidVariableName<'PascalCase'>>,
        ExpectTrue<IsValidVariableName<'camelCase'>>,
        ExpectTrue<IsValidVariableName<'enumerated23'>>,
        ExpectFalse<IsValidVariableName<'1start_with_num'>>,
        ExpectFalse<IsValidVariableName<'Forbidden characters'>>,
      ]
    }

    namespace Template {
      type __TEST__ = {
        IsUnclosedField: [
          ExpectTrue<IsUnclosedField<'${unclosed'>>,
          ExpectFalse<IsUnclosedField<'${closed}'>>,
          // This is why IsValidFieldName tests both IsNestedField and IsUnclosedField
          ExpectFalse<IsUnclosedField<'${nested${field}}'>>,
        ]
        IsNestedField: [
          ExpectTrue<IsNestedField<'${nested${field}}'>>,
          ExpectFalse<IsNestedField<'${notNested}'>>,
          // This is also why IsValidFieldName tests both IsNestedField and IsUnclosedField
          ExpectFalse<IsNestedField<'${unclosed'>>
        ]
        ExtractFields: [
          Expect<Equal<ExtractFields<'Has a ${field}, yup'>, ['field']>>,
          Expect<Equal<ExtractFields<'Has ${two} ${fields}'>, ['two', 'fields']>>,
          Expect<Equal<ExtractFields<'Has ${a} repe${a}ted field'>, ['a']>>,
          Expect<Equal<ExtractFields<'Has ${nested${field}}'>, []>>,
          Expect<Equal<ExtractFields<'Has ${unclosed field'>, []>>,
          Expect<Equal<ExtractFields<string>, []>>,
          Expect<Equal<ExtractFields<''>, []>>,
          Expect<Equal<ExtractFields<'sauce'>, []>>,
        ]
        IsTemplate: [
          ExpectTrue<IsTemplate<'Has a ${field}, yup'>>,
          ExpectTrue<IsTemplate<'Has ${two} ${fields}'>>,
          ExpectTrue<IsTemplate<'Has ${a} repe${a}ted field'>>,
          ExpectFalse<IsTemplate<'Has ${nested${field}}'>>,
          ExpectFalse<IsTemplate<'Has ${unclosed field'>>,
          ExpectFalse<IsTemplate<string>>,
          ExpectFalse<IsTemplate<''>>,
          ExpectFalse<IsTemplate<'sauce'>>
        ]
        FieldNames: [
          Expect<Equal<FieldNames<'sauce'>, never>>,
          Expect<Equal<FieldNames<'${sauce'>, never>>,
          Expect<Equal<FieldNames<'${sauce${blanche}}'>, never>>,
          Expect<Equal<FieldNames<'${sauce}'>, 'sauce'>>,
          Expect<Equal<FieldNames<'${sauce}${sauce}'>, 'sauce'>>,
          Expect<Equal<FieldNames<'${sauce}${blanche}'>, 'sauce' | 'blanche'>>,
        ]
      }
    }
  }
}
