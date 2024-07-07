/**
 * Class
 */
//ES5
// function Person1(name){
//     this.name = name
// }
// Person1.prototype.getName = function(){ //prototype method
//     return this.name
// }
// Person1.isPerson = function (obj){ //static method
//     return obj instanceof this
// }
// const hj1 = new Person1('형준')
// console.log(hj1.getName())
// console.log(Person1.isPerson(hj1))

//ES6
// class Person2{
//     constructor(name) {
//         this.name = name
//     }
//     getName(){
//         return this.name
//     }
//     static isPerson(obj){
//         return obj instanceof this
//     }
// }
// const hj2 = new Person2('형준')
// console.log(hj2.getName())
// console.log(Person2.isPerson(hj2))

/**
 * 선언 방식
 */
// //클래스 리터럴
// class Person1{ }
// //기명 클래스 표현식
// const Person2 = class Person22{ }
// console.log(Person2.name)
// //익명 클래스 표현식
// let Person3 = class { }

/**
 * 기존 방식과의 차이점
 */
//클래스는 let, const와 마찬가지로 TDZ가 존재하며, 블록스코프에 갇힌다.
// if(true){
//     class A{}
//     const a = new A()
//     if(true){
//         const b = new A() //TDZ
//         class A{}
//     }
// }

//clss 내부는 strict mode가 강제된다.
//모든 메서드를 열거할 수 없다
// class A{
//     a(){}
//     b(){}
//     static c(){}
// }
// for(let p in A.prototype){
//     console.log(p)
// }
// console.log(A.prototype)

//constructor를 제외한 모든 메서드는 new 명령어로 호출할 수 없다.
//클래스는 생성자로서만 동작
// class A{
//     constructor() {
//     }
//     a(){}
//     static b(){}
// }
// const a = new A();
// console.log(a)
// const aa = new A.prototype.a()

//클래스 내부에서 클래스명 수정
// let A = class{
//     constructor() {
//         A='A'
//     }
// }
// const a =  new A()
// console.log(A)
//
// class C{
//     constructor() {
//         C="C"
//     }
// }
// const c = new C()

//문이 아닌 식이다.
// const instanceGenerator = (className, ...params) => new className(...params)
// class Person{
//     constructor(name) {
//         this.name = name
//     }
//     sayName() {
//         console.log(this.name)
//     }
// }
// const hj = instanceGenerator(Person, "형준")
// const hh = instanceGenerator(class{
//     constructor(name) {
//         this.name = name
//     }
//     sayName(){
//         console.log(this.name)}
// }, '하현')
// hj.sayName()
// hh.sayName()

//접근자
// class CustomHTMLElement{
//     constructor(element) {
//         this._element = element
//     }
//     get html (){
//         return this._element.innerHTML
//     }
//     set html(value){
//         this._element.innerHTML = value
//     }
// }
//
// console.log(Object.entries(CustomHTMLElement.prototype))
// console.log(Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype,'html'))

//computed property names
// const method1 = 'sayName'
// const fullNameGetter = 'fullname'
// class Person{
//     constructor(name) {
//         this.name = name
//     }
//     [method1](){
//         console.log(this.name)
//     }
//     get [fullNameGetter] (){
//         return this.name + ' 윤'
//     }
// }
// const hj = new Person("형준")
// hj.sayName()
// console.log(hj.fullname)

//제너레이터
// class A{
//     *gene(){ }
// }

//Symbol.iterator
// class Products{
//     constructor() {
//         this.items = new Set()
//     }
//     addItem(name){
//         this.items.add(name)
//     }
//     [Symbol.iterator](){
//         let count = 0
//         const items = [...this.items]
//         return{
//             next(){
//                 return{
//                     done: count >= items.length,
//                     value: items[count++]
//                 }
//             }
//         }
//     }
// }
// const a = new Products()
// a.addItem("밥")
// a.addItem("밥밥")
// console.log([...a])
