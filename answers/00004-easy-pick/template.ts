type MyPickAnswer<T, K extends keyof T> = { [Property in keyof T & K]: T[Property] }
