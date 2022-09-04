// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<IsAny<any>, true>>,

  Expect<Equal<IsAny<undefined>, false>>,
  Expect<Equal<IsAny<unknown>, false>>,
  Expect<Equal<IsAny<never>, false>>,
  Expect<Equal<IsAny<string>, false>>,
]


// ============= Your Code Here =============
type IsAny<T> = 1 extends T & 0 ? true : false


type A = undefined & 0  // never
type B = unknown & 0    // 0
type C = never & 0      // never
type D = string & 0     // never
type E = any & 0        // any