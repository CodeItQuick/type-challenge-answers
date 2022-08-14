import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyPickAnswer<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPickAnswer<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPickAnswer<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}
