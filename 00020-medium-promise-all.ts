// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
]


// ============= Your Code Here =============
type FlatAwaited<T extends readonly any[], Result extends any[]> = 
  T extends readonly [infer H, ...infer Rest]
    ? FlatAwaited<Rest, [...Result, Awaited<H>]> 
    : Result

declare function PromiseAll<T extends []|readonly any[]>(
  values: T
): Promise<FlatAwaited<T, []>>
