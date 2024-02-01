/**
 * spread operator
 * 1. 배열의 인자를 펼친 효과
 * 2. 앞 뒤로 다른 값들을 함께 사용 가능
 * getter : 나머지 /받는 입장
 * setter : 펼치기 / 주는 입장
 * 3. iterable한 모든 데이터는 펼칠 수 있다.
 * 4. push, unshift, concat 등의 기능을 대체할 수 있다.
 * 5. '새로운' 배열이다.
 * 6. 얕은 복사만을 수행한다.
 */

// var birds = ['eagle','pigeon']
// var mammals = ['rabbit', 'cat']
// var animals = birds.concat('whale').concat(mammals)
// console.log(animals)
//
// const animals2 = [...birds, 'whale', ...mammals]
// console.log(animals2)

// const values = [3,4,5,6,7,8]
// const sum = (...args) => args.reduce((p,c) => p+c)
// console.log(sum(1,2,...values,9,10))

// const str = "Hello!"
// const splitArr = str.split('')
// const restArr = [...str]
// console.log(splitArr)
// console.log(restArr)

// let original = [2,3]
//
// original = [0,...original,5]
// console.log(original)
//
// original.unshift(1)
// original.push(4)
// console.log(original)

let original = [{
    first : "Hello",
    second: "World!"
}, {
    first: "Welcome",
    second: "ES6!"
}]

let copy = [...original]
console.log(original[0].first)

copy[0].first = 'Hi,'
console.log(original[0].first)