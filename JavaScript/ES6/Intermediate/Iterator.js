/**
 * Iterator
 * 반복을 위해 설계된 특별한 인터페이스를 가진 객체
 * 객체 내부에는 next() 메서드가 있는데
 * value와 done 프로퍼티를 지닌 객체를 반환한다.
 */
//
// const iter = {
//     items: [10,20,30],
//     count: 0,
//     next(){
//         const done = this.count >= this.items.length
//         return {
//             done,
//             value: !done ? this.items[this.count++]: undefined
//         }
//     }
// }
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

// const iter = {
//     val:0,
//     next(){
//         const isDone = ++this.val >= 5
//         return{
//             done:isDone,
//             value : !isDone ? this.val : undefined
//         }
//     }
// }
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

//객체가 이터레이터인지 확인
// const isIterable = target => typeof target[Symbol.iterator] === 'function'
// console.log(isIterable({}))
// console.log(isIterable([]))

/**
 * Iterator 만들기
 * obj는 [Symbol.iterator] 메서드가 없는데
 * [Symbol.iterator] 메서드를 추가해주면 iterable하게 된다.
 * 그런데 그 메서드가 iterator를 반환해야하고,
 * 그런데 그 iterator는 next 메서드를 가진 객체여야 하고,
 * next 메서드는 다시 value와 done프로퍼티를 가진 객체를 반환하면 된다.
 * 그러면 이제 obj는 iterable하다
 */
// const createIterator = () =>{
//     return{
//         next(){
//             return {
//                 done: false
//             }
//         }
//     }
// }
// const obj = {
//     [Symbol.iterator] : createIterator
// }
// console.log(...obj)
//
// [Symbol.iterator]: function(){
//     return iterator
// }
// iterator === {
//     next(){
//         return {
//             value : ~,
//             done: ~
//         }
//     }
// }

//객체 내부에 직접 할당
// const obj = {
//     a:1,
//     b:2,
//     c:3,
//     d:4,
//     [Symbol.iterator](){
//         let count = 0
//         const items = Object.entries(this)
//         return{
//             next(){
//                 return{
//                     done : count >= items.length,
//                     value: items[count++]
//                 }
//             }
//         }
//     }
// }
// console.log(...obj)

/**
 * for-of, ...(spread operator), forEach 메서드 등은 내부적으로
 * [Symbol.iterator]를 실행한 결과 객체를 들고,
 * 객체 내부의 next() 메서드를
 * done 프로퍼티가 true가 나올 때까지 반복하여 호출한다.
 * 즉, Symbol.iterator 메서드의 내용을 위 요구사항에 맞추어 구현하기만 하면 iterable한 객체이다.
 */
