/**
 * Generator
 * 중간에 멈췄다가 이어서 실행할 수 있는 함수
 * function 키워드 뒤에 *를 붙여 표현하며, 함수 내부에는 yield 키워드를 활용한다.
 * 함수 실행 결과에 대해 next() 메서드를 호출할 때마다 순차적으로 제너레이터 함수 내부의 yield 키워드를 만나기 전까지 실행하고, yield 키워드에서 일시 정지한다.
 * 다시 next() 메서드를 호출하면 그 다음 yield 키워드를 만날 때까지 함수 내부의 내용을 진행하는 식이다.
 */
// function* gene(){
//     console.log(1)
//     yield 1
//     console.log(2)
//     yield 2
//     console.log(3)
// }
// const gen = gene()
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

//선언 방식
// function* gene(){yield }
// const gene = function*() {yield }

// const obj = {
//     gene1 : function* (){ yield },
//     *gene2 () {yield}
// }
//
// class A {
//     *gene(){yield }
// }

//이터레이터로서의 제너레이터
// function* gene(){
//     console.log(1)
//     yield 1
//     console.log(2)
//     yield 2
//     console.log(3)
// }

// const obj = {
//     a:1,
//     b:2,
//     c:3,
//     *[Symbol.iterator](){
//         for(let prop in this){
//             yield [prop,this[prop]]
//         }
//     }
// }
// console.log(...obj)

//yield* 활용
// function* gene(){
//     yield* [1, 2, 3, 4, 5];
//     yield
//     yield* 'abcde'
// }
// for(const c of gene()){
//     console.log(c)
// }

// function* gene1(){
//     yield [1, 20];
//     yield [2, 20];
// }
// function * gene2(){
//     yield [3, 30];
//     yield [4, 40];
// }
// function* gene3(){
//     console.log('yield gene1')
//     yield* gene1()
//     console.log('yield gene2')
//     yield * gene2()
//     console.log('yield [[5,50],[6,60]]')
//     yield * [[5,50], [6,60]]
//     console.log('yield [7,70]')
//     yield [7,70]
// }
// const gen = gene3()
// for(let [k,v] of gen){
//     console.log(k,v)
// }

//인자 전달하기
// function* gene(){
//     let first = yield 1
//     console.log(first)
//     let second = yield first +2
//     console.log(second)
//     yield second +3
// }
// const gen = gene()
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

