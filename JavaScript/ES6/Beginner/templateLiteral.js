/**
 * template literal
 * ` `
 */
// console.log(`a
// bb
// ccc`)

// const a = 10
// const b = 20
// const str = `${a} + ${b} = $${a+b}`
// console.log(str)

/**
 * forEach, map, reduce
 */
/**
 * forEach
 * for문 돌리는거랑 같은 개념
 */
// const a = [1,2,3]
// a.forEach(function(v,i,arr){
//     console.log(v,i,arr,this)
// },[10,11,12])

/**
 * map
 * for문을 돌려서 새로운 배열을 만드는 목적
 */
// const a = [1,2,3]
// const b = a.map(function(v,i,arr){
//     console.log(v,i,arr,this)
//     return this[0] + v
// },[ 10 ])

/**
 * reduce
 * for문을 돌려서 최종적으로 다른 무언가를 만드는 목적
 */
// const arr = [1,2,3]
// const res = arr.reduce(function(p,c,i){
//     console.log(p,c,i)
//     return p+c
// },10)
// res

/**
 * tag function
 */
// const tag = function(strs, arg1, arg2){
//     return {strs: strs, args: [arg1, arg2]}
// }
// const res = tag`순서가 ${1}이렇게 ${2}`
// res


/**
 * String.raw
 */
// const tag = function(strs,...args){
//     return {strs:strs, args}
// }
// const res = tag`순서가 ${1}이렇게 ${2}\n\n`;
// res

// console.log(String.raw `순서가 ${1}이렇게 ${2}\n\n`)
