/**
 * Class
 * Date는 자바스크립트의 빌트인 클래스이다.
 * new 연산자 사용
 * class는 함수의 선언과 다르게 호이스팅 되지 않는다.
 */
// const bigDay = new Date(2019, 6, 19);
// console.log(bigDay.toLocaleDateString())
// if(bigDay.getTime() < Date.now()){
//     console.log("Once upon a time...")
// }

// class MyClass{
//     constructor() {
//     }
//     myField = "foo"
//     myMethod(){
//
//     }
//     static mytStaticField = 'bar'
//     static myStaticMethod(){
//
//     }
//     #myPrivateField = 'bar'
// }
// const myInstance = new MyClass()
// console.log(myInstance.myField)
// myInstance.myMethod()

// new MyClass()
// class MyClass{}

//Class 표현
// const MyClass = class{
//
// }

// class Color{
//     constructor(...values) {
//         this.values = values;
//     }
// }
// const red = new Color(255, 0, 0);
// console.log(red)
// const anotherRed = new Color(255,0,0)
// console.log(red === anotherRed)
//
// class MyClass{
//     constructor() {
//         this.myField = 'foo'
//         return {}
//     }
// }
//
// console.log(new MyClass().myField)

// class Color{
//     constructor(r,g,b) {
//         this.values = [r,g,b]
//     }
//     getRed(){
//         return this.values[0]
//     }
// }
// const red = new Color(255,0,0)
// console.log(red.getRed())

//Private Fields
// class Color{
//     constructor(r,g,b) {
//         this.values = [r.g,b]
//     }
// }
// const red = new Color(255,0,0)
// red.values[0] = 0
// console.log(red.values[0])

// class Color {
//     #values;
//     constructor(r, g, b) {
//         this.#values = [r, g, b];
//     }
//     getRed() {
//         return this.#values[0];
//     }
//     setRed(value) {
//         this.#values[0] = value;
//     }
// }
//
// const red = new Color(255, 0, 0);
// console.log(red.getRed()); // 255

//Accessor fields
// class Color {
//     constructor(r,g,b) {
//         this.values = [r,g,b]
//     }
//     get red(){
//         return this.values[0]
//     }
//     set red(value){
//         this.values[0] = value;
//     }
// }
// const red = new Color(255,0,0)
// red.red = 0
// console.log(red.red)

//Public fields
// class MyClass{
//     constructor() {
//         this.luckyNumber = Math.random()
//     }
// }
// console.log(new MyClass().luckyNumber)
// console.log(new MyClass().luckyNumber)

//Static fields
// class Color{
//     static isValid(r,g,b){
//         return r>=0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255
//     }
// }
//
// console.log(Color.isValid(255,0,0))
// console.log(Color.isValid(1000,0,0))

//Extends and inheritance
// class Color{
//     #values
//     constructor(r,g,b,a =1) {
//         this.#values = [r,g,b,a]
//     }
//     get alpha(){
//         return this.#values[3]
//     }
//     set alpha(value){
//         if(value < 0 || value >1){
//             throw new RangeError("Alpha value must be between 0 and 1")
//         }
//         this.#values[3] = value
//     }
// }
// class ColorWithAlpha extends Color{
//     #alpha
//     constructor(r,g,b,a) {
//         super(r,g,b);
//         this.#alpha = a
//     }
//     get alpha(){
//         return this.#alpha
//     }
//     set alpha(value){
//         if(value < 0 || value > 1){
//             throw new RangeError("Alpha value must be between 0 and 1")
//         }
//         this.#alpha = value
//     }
// }
// const color = new ColorWithAlpha(255,0,0,0.5)
// console.log(color.red)