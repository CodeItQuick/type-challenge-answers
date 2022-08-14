type MyAwaitedAnswer<T> = T extends Promise<infer U> ? U : T extends MyAwaitedAnswer<infer S> ? S : never
