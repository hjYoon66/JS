/**
 * Function
 * 1. name property
 * 2. new.target
 */

// function a (){}
// console.log(a.name)
//
// const b = function(){}
// console.log(b.name)
//
// const c = function cc(){}
// console.log(c.name)
//
// const d = () =>{}
// console.log(d.name)

// const e  ={
//     om1:function (){},
//     om2 (){},
//     om3: () =>{}
// }
// console.log(e.om1.name, e.om2.name, e.om3.name)

// class F {
//     static method1 () {}
//     method2 () {}
// }
//
// function G() {}
// G.method1 = function (){}
// G.prototype.method2 = function(){}
//
// const f = new F()
// console.log(F.method1.name, f.method2.name)

// const g = new G()
// console.log(G.method1.name, g.method2.name)

/**
 * new.target
 */
// function Person(name){
//     if(this instanceof Person){
//         this.name = name
//     }else{
//         throw new Error("new 연산자를 활용하세요")
//     }
// }
// console.log(new Person(1))

// function Person(name){
//     console.dir(new.target)
//     if(new.target !== undefined){
//         this.name = name;
//     }else{
//         throw new Error('new 연산자를 사용하세요');
//     }
// }
// console.log(new Person(1))

// function Person(name){
//     console.log(new.target);
//     if(new.target === Person){
//         this.name = name;
//     } else{
//         throw new Error('Person 생성자 함수를 new로 호출해야함')
//     }
// }
// function Android (name){
//     Person.call(this, name)
// }
// const p2 = new Android("형준")

/**
 * 함수 선언문과 스코프
 * 'strict mode' : 함수 선언문도 블록 스코프에 갇힌다.
 * es6에서는 함수 선언문을 쓰지 마세요. arrow function, 객체 : 메소드 축약형, class
 * 어떻게든 안쓰는 쪽으로 고민을 하고, 작성해라
 */

// a()
// if(true){
//     a()
//     function a() {console.log(true)}
// }
// a()

