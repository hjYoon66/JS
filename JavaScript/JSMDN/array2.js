/**
 * 희소 배열
 * 배열에는 undefined라는 값으로 채워진 슬롯과는 다른 '빈 슬록'이 포함될 수 있다
 */
// const a = Array(5);
//
// const b = [1, 2, , , 5];
//
// const c = [1,2];
// c[4] = 5;
// c
//
// const d = [1, 2];
// d.length = 5
// d
//
// const e = [1, 2, 3, 4, 5];
// delete e[2];
// e
//
// const arr = [1, 2, , , 5];
// console.log(arr[2])
//
// for(const i of arr){
//     console.log(i);
// }
//
// const another = [...arr]
// another
//
// const mapped = arr.map((i) => i+1)
// arr.forEach((i) => console.log(i));
// arr
// const filtered = arr.filter(()=>true)
// const hasFalsy = arr.some((k)=>!k)
//
// const keys = Object.keys(arr)
// keys
// for(const key in arr){
//     console.log(key)
// }
// const objectSpread = {...arr}
// objectSpread

/**
 * 다차원 배열
 * 배열은 중첩 가능
 */
// const a = new Array(4);
// for(let i = 0; i<4;i++){
//     a[i] = new Array(4);
//     for (let j = 0; j < 4; j++) {
//         a[i][j] = `[${i},${j}]`
//     }
// }
// a
//
// const arr = [1, 2, 3];
// arr.property = "value";
// console.log(arr.property)

/**
 * 유사 배열 객체 arguments
 * length 속성을 제공하지만 forEach()와 같은 배열 메서드는 구현하지 않는다.
 */

// function printArguments(){
//     Array.prototype.forEach.call(arguments,(item)=>{
//         console.log(item)
//     })
// }
// printArguments()