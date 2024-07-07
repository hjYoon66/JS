/**
 * Class Extends
 */
// class Square{
//     constructor(width) {
//         this.width = width
//     }
//     getArea(){
//         return this.width * (this.height || this.width)
//     }
// }
// class Rectangle extends Square{
//     constructor(width, height) {
//         super(width);
//         this.height = height
//     }
// }
// const r = new Rectangle(5,6)
// console.log(r.getArea())

// class NewArray extends Array{
//     toString(){
//         return `[${super.toString()}]`
//     }
// }
//
// const arr = new NewArray(1, 2, 3);
// console.log(arr)
// console.log(arr.toString())

/**
 * super
 * 1. constructor 내부에서
 * 수퍼클래스의 constructor를 호출하는 함수 개념
 * 서브 클래스의 constructor 내부에서 this에 접근하려 할 때는 가장 먼저 super 함수를 호출해야만 한다.
 * 서브 클래스에서 constructor를 사용하지 않는다면 무관.
 * 2. 메서드 내부에서
 * 수퍼클래스의 프로토타입 객체 개념
 * 메서드 오버라이드 또는 상위 메서드 호출 목적으로 활용
 */
// class Rectangle{
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }
//     getArea(){
//         return this.width * this.height
//     }
// }
// class Square extends Rectangle{
//     constructor(width) {
//         super(width, width);
//     }
//     getArea(){
//         console.log('get area if square')
//         return super.getArea()
//     }
//     getX(){
//         return super.getArea()
//     }
// }
// const square = new Square(3)
// console.log(square.getArea())
// console.log(square.getX())

// class Shape{
//     constructor() {
//         if(new.target === Shape){
//             throw new Error("이 클래스는 직접 인스턴스화할 수 없는 추상 클래스입니다.")
//         }
//     }
// }
// class Rectangle extends Shape{
//     constructor(width, height) {
//         super();
//         this.width = width
//         this.height = height
//     }
//     getSize(){
//         return this.width * this.height
//     }
// }
// const s = new Shape()
// const r = new Rectangle(4,5)
// r

