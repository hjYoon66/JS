/**
 * Promise
 * 비동기 처리를 해주는 함수
 *  한번 Promise는 영원한 Promise
 */

/**
 * Promise Status
 * unsettled(미확정) 상태 : pending. thenable하지 않다.
 * settled(확정) 상태 : resolved. thenable한 상태
 * fulfilled(성공), rejected(실패)
 */
// const promiseTest = param => new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         if(param){
//             resolve("해결 완료")
//         }else{
//             reject(Error("실패!"))
//         }
//     },1000)
// })
// const testRun = param => promiseTest(param)
// .then(text => { console.log(text)})
// .catch(error =>{ console.log(error)})
//
// const a = testRun(true)
// const b = testRun(false)

/**
 * new Promise(function)
 * .then(), .catch() 는 언제나 promise를 반환한다
 */
// const executer = (resolve, reject)=>{...}
// const prom = new Promise(executer)
// const onResolve = res =>{...}
// const onReject = err =>{...}
// //1
// prom.then(onResolve, onReject)
// //2
// prom.then(onResolve).catch(onReject)
// //3
// new Promise((resolve, reject)=>{...})
// .then(res =>{...})
// .catch(err =>{...})

// const simplePromiseBuilder = value =>{
//     return new Promise((resolve, reject)=>{
//         if(value) {resolve(value)}
//         else{reject(value)}
//     })
// }
// simplePromiseBuilder(1)
// .then(res =>{console.log(res)})
// .catch(err =>{console.error(err)})

/**
 * 전체 소스 실행하는 과정에서 Promise 인스턴스의 함수도 같이 실행되었다.
 * fulfilled가 되면서 then 함수가 queue에 추가
 * 계속 전체소스실행이 끝나고 나서
 * 다음번 큐에 있는 then 함수가 실행돔
 * reject는 무시되었음
 * 정리
 * 1. then이나 catch구문은 실행 큐에 후순위로 등록되고 실행된다.
 * 2. promise인스턴스에 넘긴 함수 내부에서는, resolve나 reject 둘 중에 먼저 호출한 것만 실제로 실행된다.
 * 3. 사실은 실제로 실행되는게 아니라, 실행은 둘 다 되는데, pending 상태일 때만 의미가 있기 떄문에 2번과 같은 결과가 나옴
 */
// const prom = new Promise((resolve, reject)=>{
//     resolve()
//     reject()
//     console.log('Promise')
// })
// prom.then(()=>{
//     console.log('then')
// })
// prom.catch(()=>{
//     console.log('catch')
// })
// console.log('Hi')

// Promise.resolve(42)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err)
//     })
//
// Promise.reject(12)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err)
//     })

//thenable 객체
// const thenable = {
//     then(resolve, reject) {
//         resolve(33)
//     }
// }
// const prom = Promise.resolve(thenable)
// prom.then(res => {
//     console.log(res)
// })

// const thenable = {
//     then(resolve, reject) {
//         reject(33)
//     }
// }
// const prom = Promise.resolve(thenable)
// prom.catch(err =>{ console.log(err)})

/**
 * Promise Chaning
 * .then이나 .catch안에서
 * 1. return promise 인스턴스 : promise 인스턴스가 리턴된 것
 * 2. return 일반값 : promise 객체에 resolved 상태로 반환됨. 그 안에 값이 담긴
 * 3. return 안하면 : return undefined -> 2번과 같다.
 * 4. Promise.resolve() or Promise.reject() : return 해주지 않는 이상 의미 없음
 */
// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('첫번째 프로미스')
//     },1000)
// })
// .then(res =>{
//     console.log(res)
//     return '두번째 프로미스'
// })
// .then(res =>{
//     console.log(res)
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('세번째 프로미스')
//         },1000)
//     })
// })
// .then(res =>{
//     console.log(res)
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             reject('네번쨰 프로미스')
//         },1000)
//     })
// })
// .then(res =>{
//     console.log(res)
// })
// .catch(err =>{
//     console.error(err)
//     return new Error('이 에러는 then에 잡힙니다.')
// })
// .then(res =>{
//     console.log(res)
//     throw new Error('이 에러는 catch에 잡힙니다.')
// })
// .then(res =>{
//     console.log('출력 안됨')
// })
// .catch(err =>{
//     console.error(err)
// })

/**
 * Error Handling
 */
// asyncThing1()
// .then(asyncThing2)
// .then(asyncThing3)
// .catch(asyncRecovery1)
// .then(asyncThing4, asyncRecovery2)
// .catch(err =>{console.log("Don't worry about it")})
// .then(()=>{console.log('All done!')})

/**
 * Multi Handling
 * 1. Promise.all()
 * iterable의 모든 요소가 fulfilled되는 경우: 전체 결과 값들을 배열 형태로 then에 전달.
 * iterable의 요소 중 일부가 rejected 되는 경우 : 가장 먼저 rejected되는 요소 '하나'의 결과를 catch에 전달
 */
// const arr = [
//     1,
//     new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('resolved after 1000ms')
//         },1000)
//     }),
//     'abc',
//     ()=>{'not called function'},
//     (()=>'IIFE')()
// ]
// Promise.all(arr)
//     .then(res =>{console.log(res)})
//     .catch(err =>{console.error(err)})

/**
 * Promise.race(iterable) : Array.prototype.some()과 비슷한 느낌적 느낌
 * 1. 일반값은 그냥 resolved된 값으로 간주
 * 2. iterable 내의 요소 중에 가장 먼저 resolved(then) 또는 rejected(catch)된 값을 반환
 */
// const arr =  [
//     new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('1번 요소, 1000ms')
//         },1000)
//     }),
//     new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('2번 요소, 500ms')
//         },500)
//     }),
//     new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('3번 요소, 750ms')
//         },750)
//     })
// ]
// Promise.race(arr)
// .then(res =>{console.log(res)})
// .catch(err =>{console.error(err)})

/**
 * Async - await
 */
// function resolveAfter2Seconds(){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('resolved')
//         },2000)
//     })
// }
// async function asyncCall(){
//     console.log('calling')
//     var result = await resolveAfter2Seconds()
//     console.log(result)
// }
// asyncCall()

