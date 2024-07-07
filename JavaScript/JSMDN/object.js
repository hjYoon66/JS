/**
 * 객체와 속성
 */
// const myCar = new Object()
// myCar.make = 'Ford'
// myCar.model = 'Mustang'
// myCar.year = 1996
// myCar

// const myCar={
//     make:"Ford",
//     model: 'Mustang',
//     year: 1996
// }
// myCar

// const myCar = new Object();
// myCar['make'] = 'Ford'
// myCar['model']='Mustang'
// myCar['year']= 1996
//
// function showProps(obj, objName){
//     let result = ""
//     for(let i in obj){
//         if(obj.hasOwnProperty(i)){
//             result+=`${objName}.${i} = ${obj[i]}\n`
//         }
//     }
//     console.log(result)
// }
// showProps(myCar, 'myCar')

/**
 * 객체 속성 나열하기
 * 1. for...in 반복문
 * 2. Object.keys(o)
 * 3. Object.getOwnPropertyNames(o)
 */
// function listAllProperties(o){
//     let objectToInspect = o;
//     let result = []
//
//     while(objectToInspect !==null){
//         result = result.concat(Object.getOwnPropertyNames(objectToInspect))
//         objectToInspect = Object.getPrototypeOf(objectToInspect)
//     }
//     return result
// }
// const o ={
//     name:"o",
//     age : 27
// }
// console.log(listAllProperties(o))

/**
 * 객체 생성
 */
// let x
// const cond = true
// if(cond){
//     x= {greeting:"안녕하세요"}
// }
// x
//
// const myHonda = {
//     color:'red',
//     wheels:4,
//     engine:{cylinders:4, size:2.2}
// }
// myHonda

/**
 * 생성자 함수 사용하기
 */
// function Car(make, model, year,owner){
//     this.make = make;
//     this.model = model
//     this.year = year
//     this.owner = owner
// }
// const myCar = new Car("Eagle", "talon TSI",1993)
// myCar
//
// function Person(name, age, sex) {
//     this.name = name
//     this.age = age
//     this.sex = sex
// }
// const rand = new Person("Rand McKinnon", 33, "M")
// const car1 = new Car("Nissan", "300ZX",1992, rand)
// car1
// car1.color = 'black'
// car1

/**
 * Object.create() : 생성자 함수 정의 없이도 생성할 객체의 프로토타입을 지정할 수 있다
 */
// const Animal = {
//     type : '무척추동물',
//     displayType : function(){
//         console.log(this.type)
//     }
// }
// const animal1 = Object.create(Animal)
// animal1.displayType()
//
// const fish = Object.create(Animal)
// fish.type = '물고기'
// fish.displayType()

/**
 * 메서드 정의
 */
// objectName.methodName = functionName
// const myObj = {
//     myMethod:function(params){
//         ///
//     },
//     myOtherMethod(params){
//         //
//     }
// }
// object.methodName(params)

// function Car(make, model, year, owner){
//     this.make = make
//     this.model = model
//     this.year = year
//     this.owner = owner
//     this.displayCar = displayCar
// }
// function displayCar(){
//     const result = `아름다운 ${this.year} ${this.make} ${this.model}`
//     prettyPrint(result)
// }

/**
 * this로 객체 참조하기
 */
// const Manager = {
//     name:"John",
//     age :27,
//     job: "소프트웨어 엔지니어"
// }
// const Intern ={
//     name : "Ben",
//     age : 21,
//     job: "소프트웨어 엔지니어 인턴"
// }
// function sayHi(){
//     console.log(`안녕하세요, 제 이름은 ${this.name}입니다`)
// }
// Manager.sayHi = sayHi
// Intern.sayHi = sayHi
// Manager.sayHi()
// Intern.sayHi()
//
// function howOldAmI(){
//     console.log(`저는 ${this.age}살입니다.`)
// }
// Manager.howOldAmI = howOldAmI
// Manager.howOldAmI()

/**
 * 접근자와 설정자 정의하기
 * 접근자 : 특정 속성의 값을 반환하는 메서드
 * 설정자 : 특정 속성의 값을 설정하는 메서드
 * 객체 생성 이후에 Object.defineProperties() 메서드로 추가할 수 있다.
 */
// const o ={
//     a:7,
//     get b(){
//         return this.a +1
//     },
//     set c(x){
//         this.a = x/2
//     }
// }
// console.log(o.a)
// console.log(o.b)
// o.c=50
// console.log(o.a)

// const o2 = {a:0}
// Object.defineProperties(o2,{
//     b:{
//         get:function (){
//             return this.a +1
//         },
//     },
//     c:{
//         set:function(x){
//             this.a = x/2
//         }
//     }
// })
// o2.c = 10
// console.log(o2.b)

/**
 * 속성 삭제
 */
// const myobj = new Object()
// myobj.a = 5;
// myobj.b = 12
//
// delete myobj.a
// console.log("a" in myobj)

/**
 * 객체 비교
 */
// const fruit = {name : '사과'}
// const fruitbear = fruit
//
// console.log(fruit === fruitbear)
// fruit.name = "포도"
// console.log(fruitbear)