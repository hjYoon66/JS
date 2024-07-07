/**
 * WeakMap
 * Map에 객체를 키로 하는 데이터를 추가할 경우 Map에도 해당 객체에 대한 참조가 연결되어, 여타의 참조가 없어지더락도 Map에는 객체가 여전히 살아있음
 * WeakMap은 객체에 대한 참조카운트를 올리지 않아(약한 참조), 여타의 참조가 없어질 경우 WeakMap 내의 객체는 G.C의 대상이 됨
 * 1. iterable 하지 않음
 * for ...of 사용 불가
 * size 프로퍼티 없음
 * keys(), values(), entries(), clear() 등 사용 불가
 * 활용 사례
 * 비공개 객체 멤버
 */
// let obj1 = {a:1}
// let map = new Map()
// map.set(obj1,10)
// obj1 = null
//
// let obj2 = {b:2}
// let wmap = new WeakMap()
// wmap.set(obj2, 20)
// obj2 = null

//참조형 데이터만 키로 설정할 수 있다.
// const keysArray = [{a: 1}, [1, 2, 3], function () {}, Symbol('키'), 45, '문자열', false];
// const wmap = new WeakMap()
// keysArray.forEach((v,i)=>{
//     wmap.set(v,i)
//     console.log(wmap.get(v))
// })

// const weakMapValueAdder = (wmap, key, addValue)=>{
//     wmap.set(key,Object.assign({}, wmap.get(key), addValue))
// }
// const Person = (() =>{
//     const privateMembers = new WeakMap()
//     return class{
//         constructor(n, a) {
//             privateMembers.set(this, {name:n, age:a})
//         }
//         set name(n){
//             weakMapValueAdder(privateMembers, this, {name:n})
//         }
//         get name(){
//             return privateMembers.get(this).name
//         }
//         set age(a){
//             weakMapValueAdder(privateMembers, this, {age:a})
//         }
//         get age(){
//             return privateMembers.get(this).age
//         }
//     }
// })()
//
// const hj = new Person("형준",27)
// console.log(hj.name, hj.age, hj)

