type MyExcludeAnswer<T, U> = T extends T & U ? never : T

type answer = MyExcludeAnswer<'a' | 'b' | 'c', 'a' | 'b'>
