// ============= Test Cases =============
import type { Alike, Expect } from './test-utils'

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
]

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}


// ============= Your Code Here =============

// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#generic-parameter-defaults
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [key in K]: T[key]
} &  {
  [key in Exclude<keyof T, K>]: T[key]
}
