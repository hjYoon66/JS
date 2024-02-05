/**
 * Map
 * 간단한 키와 값을 서로 연결(매핑)시켜 저장하며 저장된 순서대로 각 요소들을 반복적으로 접근할 수 있도록 한다.
 */

let sayings = new Map()
sayings.set('dog', 'woof')
sayings.set('cat', 'meow')
sayings.set('elephant','toot')
console.log(sayings.size)
console.log(sayings.get('fox'))
console.log(sayings.has('bird'))
sayings.delete('dog')

for(let [key, value] of sayings){
    console.log(key + ' goes '+ value)
}

/**
 * Object와 Map 비교
 * Object의 키는 Strings이며, Map의 키는 모든 값을 가질 수 있다.
 * Object의 크기를 수동으로 추적해야하지만, Map은 크기를 쉽게 얻을 수 있다.
 * Map은 삽입된 순서대로 반복된다.
 * 객체에는 prototype이 있어 Map에 기본 키들이 있다.
 */

/**
 * WeakMap
 * object만을 키로 허용하고 값은 임의의 값을 허용하는 키/값 형태의 요소의 집합
 * 키가 가지고 있는 객체에 대한 참조는 객체에 대한 참조가 더이상 존재하지 않을 경우 GC의 수거 대상이 되는 약한 참조를 의미
 */
// const privates = new WeakMap()

/**
 * Set
 * 중복된 값을 허용하지 않음
 * 입력된 순서에 따라 저장된 요소를 반복처리 가능
 * indexOf 메서드를 사용하여 배열 내에 특정 요소가 존재하는지 확인하는 것은 느리다.
 * NaN은 배열에서 indexOf메서드로 찾을 수 없다.
 * Set 객체는 값의 유일성을 보장하기 때문에 직접 요소의 중복성을 확인할 필요 없다.
 */
// let mySet = new Set()
// mySet.add(1)
// mySet.add("some text")
// mySet.add('foo')
// console.log(mySet.has(1))
// mySet.delete('foo')
// console.log(mySet.size)
//
// for(let item of mySet)
//     console.log(item)
//
// Array.from(mySet)
//
// myset2 = new Set([1,2,3,4])
// myset2

/**
 * WeakSet
 * Set과는 다르게 WeakSet은 객체의 집합이며 객체만 저장 가능, 특정 type의 값을 저장할 수는 없다.
 */
