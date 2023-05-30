import { ExpectTrue, ExpectNever, ExpectFalse, ExpectNotNever, ExpectEqual, ExpectEmpty } from '../types'

declare namespace ExpectTrue {
  export type TwentyThree = 23
  export type Sauce = 'blanche' | 'samurai'
  export type String = string
  export type Kebab = {
    pain: 'kebab' | 'galette'
    sauce: Sauce
    crudités: { [key in 'salade' | 'tomates' | 'oignons']: boolean }
  }
}

type __TEST__ = {
  ExpectEqual: [
    ExpectTrue<ExpectEqual<ExpectTrue.TwentyThree, 23>>,
    ExpectTrue<ExpectEqual<ExpectTrue.Sauce, 'blanche' | 'samurai'>>,
    ExpectTrue<
      ExpectEqual<
        ExpectTrue.Kebab,
        {
          pain: 'kebab' | 'galette'
          sauce: 'blanche' | 'samurai'
          crudités: {
            salade: boolean
            tomates: boolean
            oignons: boolean
          }
        }
      >
    >
  ]
  ExpectNever: [
    ExpectTrue<ExpectNever<never>>,
    ExpectFalse<ExpectNever<{}>>,
    ExpectFalse<ExpectNever<string>>,
    ExpectFalse<ExpectNever<'literal'>>,
    ExpectFalse<ExpectNever<23>>
  ]
  ExpectNotNever: [
    ExpectFalse<ExpectNotNever<never>>,
    ExpectTrue<ExpectNotNever<{}>>,
    ExpectTrue<ExpectNotNever<string>>,
    ExpectTrue<ExpectNotNever<'literal'>>,
    ExpectTrue<ExpectNotNever<23>>
  ]
  // prettier-ignore
  ExpectEmpty: [
    ExpectTrue<ExpectEmpty<[]>>,
    ExpectFalse<ExpectEmpty<['wesh']>>
  ]
}
