import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExcludeAnswer<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExcludeAnswer<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExcludeAnswer<string | number | (() => void), Function>, string | number>>,
]
