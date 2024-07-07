/**
 * Set
 * 1. 중복이 허용되지 않으며 순서를 보장하는, 값들로만 이루어진 리스트
 * 2. 추가, 삭제, 초기화, 요소의 총 개수, 포함 여부 확인
 * 장점
 * 1. 중복 제거
 * 2. 전체 순회할 필요성이 있는 경우
 * 3. 값의 유무 판단
 * 단점
 * 1. 특정 요소에 접근
 * 2. 인덱스가 필요한 경우
 */
// const a = [1, 2, 3, 5, 4, 3, 2, 5, 4];
// const b = a.reduce((a,v) =>{
//     if(a.includes(v)) return a;
//     a.push(v);
//     return a
// },[])
// b
// const c = new Set(a)
// c

// const set = new Set()
// set.add(5)
// set.add('5')
// set.add(-0)
// set.add(+0)
// set
// console.log(set.size)
// console.log(set.has(5))
// set.delete(5)
// set
// console.log(set.has(5))
// set.clear()
// set
//
// console.log(set.entries())
// console.log(set.keys())

//초기값 지정 : 인자로 iterable한 개체를 지정할 수 있다.
// const set1 = new Set([1, 2, 3, 4, 5, 3, 4, 3]);
// console.log(set1)
// const ss = new Set([...set1])
// ss

//인덱스가 없다
// const set = new Set([1, 2, 3, 4, 5, 3, 4, 3]);
// console.log(set.keys())
// console.log(set.values())
// console.log(set.entries())
//
// set.forEach(function(key, value, ownerSet){
//     console.log(key, value, this)
// },{})

//중복 제거한 배열
// const arr = [1,2,3,4,5,1,2,4,3,5,6]
// const newArr = [...new Set(arr)]
// newArr

