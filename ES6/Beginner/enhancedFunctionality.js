/**
 * 객체의 향상된 기능들
 * 1. 프로퍼티 축약
 * 프로퍼티의 key와 value에 할당할 변수명이 동일한 경우 value 생략 가능
 * 2. 간결한 메서드 : 생성자로서의 기능은 사라졌다.
 * 3. 계산된 프로퍼티명
 * 객체 리터럴 선언시 프로퍼티 키 값에 대괄호 표기로 접근 가능
 * 대괄호 내에는 값 또는 식을 넣어 조합 가능
 * 4. 고정된 프로퍼티 열거 순서
 * 숫자가 먼저 오고, 작은 수에서 큰수의 순서로, 문자열이 입력된 순서 그대로
 * 숫자인데 첫글자가 0이 아닌 경우 -> 숫자로 인식
 * 객체의 열거 순서 : 숫자를 ascending, 문자열을 입력된 순서, 심볼을 입력된 순서.
 */

// const x = 10
// const y = 20
// const obj ={
//     x,
//     y
// }
// console.log(obj)

// const {
//     name,
//     age
// } ={
//     name: 'HJ',
//     age:27
// }
// console.log(name, age)

// var obj ={
//     name : "foo",
//     getName() {return this.name},
//     getName2: function(){ return this.name}
// }
//
// const a = new obj.getName2()
// console.log(a)
// const b = new obj.getName()
// console.log(b)

// const Person={
//     greeting (){return "hello"}
// }
// const friend = {
//     greeting (){
//         return 'hi,' + super.greeting()
//     }
// }
// Object.setPrototypeOf(friend,Person)
// console.log(friend.greeting())

// const className = "aaa";
// const obj = {
//     ["A" + className] : '하하'
// }
// console.log(obj)

const obj1={
    c:1,
    2:2,
    a:3,
    0:4,
    b:5,
    1:6
}
const keys1=[]
for(const key in obj1){
    keys1.push(key)
}
keys1