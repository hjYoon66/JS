/**
 * Block Scope
 * 문 : 문단. 결과를 리턴하지 않음 -> 문 자체가 하나의 block scope가 됨
 * 식. expression . 값이 될 수 있는 경우
 * 값.
 * TDZ : 임시 사각 지대
 * 호이스팅 : 기존 var : 변수명만 위로 끌어올리고 undefined를 할당한다.
 * let, const : 변수명만 위로 끌어올리고 끝
 */

// console.log(a)
// if (true) {
//     var a = 10
//     if (true) {
//         var a = 20
//         console.log(a)
//     }
//     console.log(a)
// }
// console.log(a)

// console.log(a)
// if (true) {
//     let a = 10
//     if (true) {
//         const a = 20
//         console.log(a)
//     }
//     console.log(a)
// }
// console.log(a)

/**
 * this
 */

// var value = 0;
// var obj ={
//     value:1,
//     setValue: function(){
//         this.value= 2;
//         (function (){
//             this.value = 3;  //this : window -> window.value = 3; 전역 value = 3;
//         })();
//     }
// }
// obj.setValue();
// console.log(value)
// console.log(obj.value)

// var value = 0;
// var obj ={
//     value:1,
//     setValue: function(){
//         this.value= 2;
//         {
//             this.value = 3;  //this : window -> window.value = 3; 전역 value = 3;
//         };
//     }
// }
// obj.setValue();
// console.log(value)
// console.log(obj.value)

