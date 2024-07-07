/**
 * iterable
 * 내부 요소들을 공객적으로 탐색(반복)할 수 있는 데이터 구조
 * [Symbol.iterator] 메서드를 가지고 있다.
 * array, map, set, string
 * Symbol.iterator 또는 generator을 실행하여 iterator로 변환한 상태에서 next()를 반복 호출하는 동일한 로직을 기반으로 함
 */

// const arr = ['a','b','c']
// const set = new Set(['a','b','c'])
// const map = new Map([[false,'no'],[true, 'yes'],['well','soso']])
// const str = "문자열도 이터러블하다!?!"
// arr
// set
// map
// str

// const arr = [1, 2, 3];
// const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
// const set = new Set([1, 2, 3]);
// const str = '이런것도 된다.'
// const gene = (function* (){
//     yield 1
//     yield 2
//     yield 3
// })()
//
// //1. Array.from 메서드로 배열로 전환 가능
// console.log(Array.from(arr))
// console.log(Array.from(map))
// console.log(str)
// console.log(str.split(''))
// console.log(Array.from(gene))
//
// //2. spread operator로 배열로 전환 가능
// console.log(...map)
// console.log(...set)
// console.log(...str)
// console.log(...gene)
//
// //3. 해체 할당 가능
// const [arrA, arrC] = arr
// const [mapA, , mapC] = map;
// const [ ,setB, setC] = set;
// const [ , strB, ...strRest] = str
// const [geneA, ...geneRest] = gene
// console.log(arrA, arrC)
// console.log(mapA, mapC)
// console.log(setB, setC)
// console.log(strB, strRest)
// console.log(geneA, geneRest)
//
// const iter = arr[Symbol.iterator]()
// iter
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next()) //done이 true가 되기 전까지 반복 호출

/**
 * iterable한 개체를 인자로 받을 수 있는 개체
 * new Map()
 * new Set()
 * new WeakMap()
 * new WeakSet()
 * Promise.all()
 * Promise.race()
 * Array.from()
 */