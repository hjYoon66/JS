/**
 * Map
 * 객체의 단점
 * 1. Iterable하지 않다
 * 2. 키를 문자열로 취급한다.
 */
// //1
// const o = { a:1, b:2, c:3}
// for(let key in o){
//     console.log(key, o[key])
// }
// //2
// Object.prototype.method = function(){}
// for(let key in o){
//     console.log(key, o[key])
// }
// //3
// for (let key in o){
//     if(o.hasOwnProperty(key)){
//         console.log(key, o[key])
//     }
// }
// //4
// const obj2Arr = obj =>{
//     const arr = []
//     for (let key in obj){
//         if(obj.hasOwnProperty(key)){
//             arr.push([key, obj[key]])
//         }
//     }
//     return arr
// }
// const oArr = obj2Arr(o)
// oArr
// oArr.forEach(v => console.log(v))
//5
// const oArr2 = Object.keys(o).map(k => [k,o[k]])
// oArr2.forEach(v => console.log(v))
// oArr2

//2. 키를 문자열로 취급한다.
//따라서 키값의 unique함을 완벽히 보장하지 못함
//프로퍼티의 값을 직접 파악 X
// const obj = {
//     1:10,
//     2:20,
//     3:30
// }
// let res = 0;
// for(let key in obj){
//     res += key
// }
// console.log(res)

/**
 * Map
 * 1. [key, value] 쌍으로 이루어진 요소들의 집합
 * 2. 순서를 보장하며, iterable 하다
 * 3. 키에는 어떤 데이터타입도 저장할 수 있으며, 문자열로 취급하지 않는다.
 */
// const map = new Map()
// map.set(1,10)
// map.set(0o1,20)
// map.set('01',30)
// map.set({},40)
// map.set(function() {}, () =>{})
// map

// 추가/값 가져오기/ 삭제/ 초기화/ 요소의 총 개수/ 포함여부 확인
// const map = new Map()
// map.set('name', '형준')
// map.set('age', 27)
//
// console.log(map.size)
// console.log(map.get('name'))
// console.log(map.get('age'))
//
// map.delete('name')
// console.log(map.has('name'))
// console.log(map.has('age'))
// console.log(map.size)
//
// map.clear()
// console.log(map.has('name'))
// console.log(map.has('age'))
// console.log(map.size)

//초깃값 지정 : 인자로 iterable한 개체를 지정할 수 있다.
// const map1 = new Map([[10,10],['10','10'],[false, true]])
// map1
//
// const map2 = new Map(map1)
// map2
// console.log(map1 === map2)
//
// const gen = function*() {
//     for(let i = 0; i<5;i++){
//         yield [i,i+1]
//     }
// }
// const map3 = new Map(gen())
// map3

//기타 메서드
// const map = new Map([[10,10],['10','10'],[false, true],['name','형준']])
// const mapKeys = map.keys()
// const mapValues = map.values()
// const mapEntries = map.entries()
//
// map.forEach(function(value,key, ownerMap){
//     console.log(`${key}: ${value}`)
//     console.log('ownerMap : ', ownerMap, 'this: ', this)
// },[])
