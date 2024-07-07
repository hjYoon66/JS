/**
 * Promise
 * 비동기 작업의 최종 완료 또는 실패를 나타내는 객체
 * 함수에 콜백을 전달하는 대신에, 콜백을 첨부하는 방식의 객체
 * 콜백은 Event Loop가 현재 실행중인 콜 스택을 완료하기 이전에는 절대 호출되지 않는다.
 * 비동기 작업이 성공하거나 실패한 뒤에 then()을 이용하여 추가한 콜백의 경우에도 위와 같다.
 * then()을 여러번 사용하여 여러개의 콜백을 추가할 수 있다. 각각의 콜백은 주어진 순서대로 하나하나 실행되게 된다.
 */
//Chaining :  순차적으로 각각의 작업이 이전 단계 비동기 작업이 성공하고 나서 그 결과값을 이용하여 다음 비동기 작업을 실행해야 하는 경우

// const promise = dosomethin();
// const promise2 = promise.then(successCallback, failureCallback)

// dosomething()
//     .then((result) => doSomethingElse(result))
//     .then((newResult) => doThirdThing(newResult))
//     .then((finalResult) => {
//         console.log(`Got the final result : ${finalResult}`)
//     })
//     .catch(failureCallback)
// 반환값이 반드시 있어야한다. 만약 없다면 콜백 함수가 이전의 promise의 결과를 받지 못한다.

// new Promise((resolve, reject) =>{
//     console.log("Initial")
//     resolve()
// })
// .then(() => {
//     throw new Error("Something failed")
//     console.log("Do this")
// })
// .catch(()=>{
//     console.log("Do that")
// })
// .then(()=>{
//     console.log("Do this, whatever happened before")
// })

// async function foo(){
//     try{
//         const result = await doSomething()
//         const newResult = await doSomethingElse(result)
//         const finalResult = await doThirdThing(newResult)
//         console.log(`Got the final result : ${finalResult}`)
//     }catch(error){
//         failureCallback(error)
//     }
// }