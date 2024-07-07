/**
 * 배열
 * 요소가 하나인 배열을 만들기 : Array.of
 * length : 배열의 길이는 항상 마지막 요소의 인덱스에 1에 더한 값을 반환
 *
 */

// const arrayLength = 3;
// const arr1 = new Array(arrayLength);
// arr1
// const arr2 = Array(arrayLength)
// arr2
// const arr3 = [];
// arr3.length = arrayLength;
// arr3

// const arr1 = [42];
// arr1
// const arr2 = Array(42)
// arr2
// const arr3 = [];
// arr3.length = 42;
// arr3
//
// const wisenArray = Array.of(9, 3);
// wisenArray

// const myArray = ["Wind", "Rain", "Fire"];
// console.log(myArray[2])
// console.log(myArray.length)

// const emp = [];
// emp[0] = "Jones";
// emp[1] = "Lesh";
// emp[2] = "West"
// emp

// const cats = [];
// cats[30] = ["Dusty"];
// console.log(cats.length); // 31

// const colors = ['red','green', 'blue'];
// colors.forEach((color) => console.log(color))

// concat
// let myArray = ['1', '2', '3'];
// myArray = myArray.concat('a','b','c')
// myArray

// join
// const myArray = ['Wind', 'Rain', 'Fire'];
// const list = myArray.join(" - ");
// list

// push
// const myArray =['1','2'];
// myArray.push('3')
// myArray

//pop
// const myArray = ['1','2','3']
// const last = myArray.pop()
// last

//shift : 배열의 첫번째 요소를 제거하고 그 제거된 요소를 반환
// const myArray = ['1','2','3']
// const first  = myArray.shift()
// first

//unshift : 하나 혹은 그 이상의 요소를 배열의 앞쪽에 추가하고 추가한 요소를 포함한 길이를 반환
// const myArray = ['1', '2', '3'];
// myArray.unshift('4','5')
// myArray

//slice : 배열의 특정 부분을 추출하여 그 추출된 부분을 포함하는 새로운 배열 반환
// let myArray = ['a', 'b', 'c', 'd', 'e'];
// myArray = myArray.slice(1,4)
// myArray

//at : 배열의 지정된 인덱스에 있는 요소를 반환하거나 인덱스가 범위를 벗어난 경우 undefined를 반환
// const myArray = ['a', 'b', 'c', 'd', 'e'];
// console.log(myArray.at(-2))
// console.log(myArray.at(7))

//splice : 배열에서 요소를 제거한 후 (선택적으로) 대채. 배열에서 제거된 항목을 반환
// const myArray = ['1', '2', '3', '4', '5'];
// console.log(myArray.splice(1,3,'a','b','c','d'))
// console.log(myArray)

//reverse : 배열의 요소를 첫 번쨰 배열 요소가 마지막이 되고 마지막 요소가 첫번째가 되는 식으로 배열의 요소를 바꿈
// const myArray = ['1', '2', '3'];
// myArray.reverse();
// myArray

//flat : 지정된 깊이까지 재귀적으로 연결된 모든 하위 배열 요소가 포함된 새 배열을 반환
// let myArray = [1, 2, [3, 4]];
// myArray = myArray.flat();
// myArray

//sort : 배열의 요소를 새로운 배열이 아닌 주어진 배열 내에서 정렬하고 배열에 대한 참조를 반환
// const myArray = ['Wind', 'Rain', 'Fire'];
// console.log(myArray.sort())
//
// // 어떻게 해당 배열의 요소를 정렬할지 결정하는 콜백 함수를 인자로 받을 수 있음
//
// const sortFn = (a, b) => {
//     if(a[a.length - 1] < b[b.length - 1]){
//         return -1
//     }else if (a[a.length - 1] > b[b.length -1]){
//         return 1
//     }
//     return 0;
// }
//
// console.log(myArray.sort(sortFn))

//indexOf : 배열에서 searchElement를 찾아서 첫번째 일치하는 요소의 인덱스를 반환
// const a = ['a', 'b', 'a', 'b', 'a'];
// console.log(a.indexOf('b'));
// console.log(a.indexOf('b', 2));
// console.log(a.indexOf('z')) //z를 찾지 못해서

//lastIndexOf : indexOf 메서드와 유사하게 작동하지만 배열의 뒤쪽에서부터 요소를 찾는다.
// const a = ['a','b','c','d','a','b']
// console.log(a.lastIndexOf('b'))
// console.log(a.lastIndexOf('b',4))
// console.log(a.lastIndexOf('z'))

//forEach : 배열의 모든 요소에 대해 반복적으로 주어진 callback 함수를 실행하며 undefined를 반환
// const a = ['a','b','c']
// a.forEach((e)=>{
//     console.log(e)
// })

// const a1 = ['a', 'b', 'c'];
// const a2 = a1.map((item) => item.toUpperCase());
// console.log(a2)


//flatMap : map()에 이어 깊이 1의 flat()을 실행
// const a1 = ['a', 'b', 'c'];
// const a2 = a1.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
// console.log(a2)

//filter : callback 함수가 true를 반홚는 요소를 새로운 배열에 담아 반환
// const a1 = ['a', 10, 'b', 20, 'c', 30];
// const a2 = a1.filter((item)=> typeof item === 'number')
// console.log(a2)

//find : callback이 true를 반환하는 첫번째 항목을 반환
// const a1 = ['a', 10, 'b', 20, 'c', 30];
// const i = a1.find((item)=> typeof item ==="number")
// console.log(i)

//findLast : callback이 true를 반환하는 마지막 항목을 반환
// const a1 = ['a', 10, 'b', 20, 'c', 30];
// const i = a1.findLast((item)=> typeof item ==="number")
// console.log(i)

// findIndex : callback이 true를 반환하는 첫번째 항목의 인덱스를 반환
// const a1 = ['a', 10, 'b', 20, 'c', 30];
// const i = a1.findIndex((item)=> typeof item ==="number")
// console.log(i)

//findLastIndex : callback이 true를 반환하는 마지막 항목의 인덱스를 반환
// const a1 = ['a', 10, 'b', 20, 'c', 30];
// const i = a1.findLastIndex((item)=> typeof item ==="number");
// console.log(i)

//every : callback이 배열의 모든 항목에 대해 true를 반환하면 true 반환
// function isNumber(value){
//     return typeof value === "number";
// }
// const a1 = [1,2,3]
// console.log(a1.every(isNumber))
// const a2 = [1, "2", 3];
// console.log(a2.every(isNumber))

//some() : 배열에서 적어도 callback이 true를 적어도 한번이라도 반환하면 true 반환
// function isNumber(value){
//     return typeof value === "number";
// }
//
// const a1 = [1, 2, 3];
// console.log(a1.some(isNumber))
//
// const a2 = [1, '2', 3];
// console.log(a2.some(isNumber))
//
// const a3 = ['1', '2', '3'];
// console.log(a3.some(isNumber))

//reduce() : 배열 내의 요소를 하나의 요소로 줄이기 위해 callback을 배열의 각 값마다 적용. reduce함수는 callback 함수가 반환하는 마지막 값을 반환
//callback(accumulator, currentValue, currentIndex, array)
//reduceRight : reduce처럼 동작하지만 마지막 요소부터 시작
// const a = [10, 20, 30];
// const total = a.reduce(
//     (accumulator, currentValue) => accumulator+ currentValue,
//     0
// )
// console.log(total)


