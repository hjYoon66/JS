/**
 * Arrow Function
 * 1. (매개변수) => { 본문 }
 * 2. 매개변수가 하나뿐인 경우 괄호 생략 가능
 * 3. 매개변수가 없을 경우엔 괄호 필수
 * 4. 본문이 return [식 or 값] 뿐인 경우 {}와 return 키워드 생략 가능
 * 5. 4에서 return할 값이 객체인 경우엔 괄호 필수
 * 6. 실행 컨텍스트 생성시 this 바인딩을 하지 않음
 */
//
// let a = () => new Date()
// let b = a => a*a
// let c = (a, b) => a+b;
//
// let e = x => ({x})
//
// let f = a => b => a+b;

// let g = _ => 10

// const obj = {
//     a:function(){
//         console.log(this)
//
//         const b = () => {
//             console.log(this)
//         }
//         b()
//     }
// }
// obj.a()

