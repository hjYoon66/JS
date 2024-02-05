/**
 * Block Scope Variables
 */
/**
 * let
 * 1. 재할당 가능
 * 2. 반복문 내에서 함수 실행 시 사용
 */

// let a = 1;
// function f(){
//     console.log(a,b,c);
//     let b = 2
//     console.log(a, b, c);
//     if(true){
//         let c =3;
//         console.log(a,b,c)
//     }
//     console.log(a,b,c)
// }
//
// f()

// let funcs= []
// for(let i = 0;i<10;i++){
//     funcs.push(function(){
//         console.log(i)
//     })
// }
// funcs.forEach(function(f){
//     f()
// })

/**
 * const
 * 1. 재할당
 */

// const OBJ = {
//     prop1 : 1,
//     prop2: 2
// }
// OBJ.prop1 = 3
// OBJ

/**
 * Object.freeze, deep copy
 * 얕은 복사 : 객체의 프로퍼티들을 복사 (depth 1단계까지만)
 * 깊은 복사 : 객체의 프로퍼티들을 복사 (모든 depth에 대해서)
 * 1. 프로퍼티들을 복사한다.
 * 2. 프로퍼티들 중에 참조형이 있으면 반복 -> 재귀
 */
// const obj2={
//     prop1:1,
//     prop2:[1,2,3]
// }
// Object.freeze(obj2)
// obj2
// obj2.prop2 = 10;
// obj2
// obj2.prop2[1] = 20
// obj2

// var a ={
//     a:1,
//     b:[1,2,3],
//     c:{d:1,e:2}
// }
//
// var b = Object.assign({}, a) //얕은 복사
// b.b = Object.assign([],a.b)
//
// //깊은 복사를 해야만 immutable 하다
// b.b[1] = 20
// console.log(b)
// console.log(a)

/**
 * for문
 */

// var obj = {
//     prop1:1,
//     prop2:2,
//     prop3:3
// }
// for(const prop in obj){
//     console.log(prop)
// }
// for(let i = 0; i<5; i++){
//     console.log(i)
// }

/**
 * let, const 공통사항
 * var 쓰지 말자
 * let -> 값 자체의 변경이 필요한 예외적인 경우
 * const -> 객체
 */


