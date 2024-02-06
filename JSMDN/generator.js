/**
 * 반복기
 */
/**
 * Iterator는 시퀀스를 정의하고 종료시의 반환값을 잠재적으로 정의하는 객체
 * 두 개의 속성(value, done)을 반환하는 next()메서드를 사용하여 Iterator protocol을 구현
 */
// function makeRangeIterator(start = 0, end = Infinity, step = 1) {
//     var nextIndex = start;
//     var n = 0;
//
//     var rangeIterator = {
//         next: function () {
//             var result;
//             if (nextIndex < end) {
//                 result = { value: nextIndex, done: false };
//             } else if (nextIndex == end) {
//                 result = { value: n, done: true };
//             } else {
//                 result = { done: true };
//             }
//             nextIndex += step;
//             n++;
//             return result;
//         },
//     };
//     return rangeIterator;
// }
//
// let it = makeRangeIterator(1,4)
// let result = it.next()
// while(!result.done){
//     console.log(result.value)
//     result = it.next()
// }
// console.log(result.value)

/**
 * Generator 함수
 * 생성자의 next메서드를 호출함으로서 어떤 값이 소비되면, 생성자 함수는 yield 키워드를 만날때까지 실행된다.
 */
// function* makeRangeIterator(start = 0, end = Infinity, step =1){
//     let n = 0;
//     for(let i = start; i<end;i+=step){
//         n++;
//         yield i;
//     }
//     return n;
// }

