/**
 * default parameter
 */

// const f = function(x = 4, y = 5, z = 6){
//     x = x ? x: 4
//     y = y || 5
//     if(!z){
//         z = 6;
//     }
//     console.log(x,y,z);
// }
//
// f(undefined, 0, undefined);
//
// const f = function(a= 1, b = 2, c= 3, d= 4, e= 5, f= 6){
//     console.log(a, b, c, d, e, f);
// }
// console.log(f(7,0,"",false, null))

/**
 * 유사 배열 객체(array - like object) : 객체인데, 각 프로퍼티의 키가 인덱스이고, length라는 프로퍼티가 있는 객체
 */

// const a = function(a = 1, b= 2, c= 3){
//     console.log(arguments);
//     console.log(a, b, c);
// }
// a(4, 5, 6);