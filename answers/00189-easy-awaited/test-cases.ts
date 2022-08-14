import type { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>

type cases = [
  Expect<Equal<MyAwaitedAnswer<X>, string>>,
  Expect<Equal<MyAwaitedAnswer<Y>, { field: number }>>,
  Expect<Equal<MyAwaitedAnswer<Z>, string | number>>,
  Expect<Equal<MyAwaitedAnswer<Z1>, string | boolean>>,
]

type error = MyAwaitedAnswer<number>
