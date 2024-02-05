/**
 * Symbol
 * 기본형 데이터
 * 유일무이하고 고유한 존재
 * 기본적인 열거 대상에서 제외
 * 암묵적 형변환 불가
 * new 연산자 쓸 수 없다
 * 문자열이 아닌 타입은 자동으로 toString 처리
 */
// const a = Symbol('a')
// a
// const b = Symbol()
// console.log(a === b)

// const x = () => {
//     const a = Symbol('a');
//     return {
//         [a]:10,
//         a:a
//     }
// }
// const y = x()
// y
// console.log(y.a)
// const b = Reflect.ownKeys(y)
// b
// console.log(y[b[0]])

/**
 * 객체 프로퍼티의 키로 활용
 */
// const NAME = Symbol('이름');
// const GENDER = Symbol("성별");
// const iu ={
//     [NAME] :"아이유",
//     [GENDER] :"female",
//     age : 29,
// }
// const suzi = {
//     [NAME] : "수지",
//     [GENDER] : "female",
//     age : 29,
// }
// const hj = {
//     [NAME] : "형준",
//     [GENDER] :"male",
//     age : 27
// }
// console.log(iu, suzi, hj)
//
// for(const prop in iu){
//     console.log(prop, iu[prop])
// }

/**
 * private member 만들기
 */

// const obj = (() =>{
//     const _privateMember1 = Symbol('private1')
//     const _privateMember2 = Symbol('private1')
//     return {
//         [_privateMember1]: "외부에서 보이긴 하는데 접근할 방법이 마땅찮네",
//         [_privateMember2]: 10,
//         publicMember1: 20,
//         publicMember2: 30
//     }
// })
// console.log(obj)
// console.log(obj[Symbol('private1')])
// console.log(obj[_privateMember1])
//
// for(const prop in obj){
//     console.log(prop, obj[prop])
// }

/**
 * Symbol.for : 공유 심벌
 * public member 전역공간에서 공유되는 심볼
 */

// const a = Symbol.for('abc')
// const b = Symbol.for('abc')
// console.log(a === b)

// const COMMON1 = Symbol.for('공유 심벌')
// const obj = {
//     [COMMON1] : '공유할 프로퍼티 키 값. 어디서든 접근 가능'
// }
// console.log(obj[COMMON1])
// obj

/**
 * 표준 심벌
 * Symbol.iterator : 추후 다룬다.
 * Symbol.match : 정규 표현식 및 문자열 관련
 * Symbol.replace : 정규 표현식 및 문자열 관련
 * Symbol.search : 정규 표현식 및 문자열 관련
 * Symbol.species : 파생 클래스를 만들기 위한 생성자
 * Symbol.split : 문자열을 나누는 조건 설정
 * 해당 심볼을 재정의함으로써 기존에는 표준 객체 내부 전용이던 기능들을 개발자의 입맛에 맞게 바꾸어 쓸 수 있게 되었음
 */
// const str = '이 _ 문자열을 _ 이렇게 _ 나누어주었으면 _ 좋겠어'
// Symbol.prototype[Symbol.split] = function(string){
//     let result = ''
//     let residue = string
//     let index = 0
//     do {
//         index = residue.indexOf(this)
//         if(index <= -1){
//             break
//         }
//         result += residue.substr(0, index) + '/'
//         residue = residue.substr(index + this.length)
//     }while(true)
//     result += residue
//     return result
// }
//
// console.log(str.split(' _ '))

// class Person{
//     constructor(name) {
//         this.name = name
//     }
// }
// const hj = new Person('형준')
// Person.prototype[Symbol.toStringTag] = 'PERSON'
// console.log(hj.toString())

// const arr = [4,5,6]
// arr[Symbol.isConcatSpreadable] = true
// console.log([1,2,3].concat(arr))

