/**
 * 비동기 작업 수행
 */
//userId가 1000번 이후인 데이터를 가져와서 그중에 4번째에 위치한 user 정보를 보고싶다.
    //server request보내고, server에서 response가 온다. 응답시간은 천차만별
// const ajaxCalls=() =>{
//     const res1 = fetch.get('https://api.github.com/users?since=1000') //res1에는 request를 하자마자 바로 결과가 담긴다. 불필요한 데이터
//     const res2 = fetch.get(`https://api.github.com/user/${res1[3]}`)
// }
// const m = ajaxCalls()

//콜백 방식의 비동기 처리
// $.ajax({
//     method: "GET",
//     url: 'https://api.github.com',
//     success: function(res){
//         const res2 = fetch.get(`https://api.github.com/user/${res1[3]}`)
//     }
// })

//Promise 방식의 비동기 처리
// fetch.get('https://api.github.com/users?since=1000')
// .then(function(res){
//     const res2 = fetch.get(`https://api.github.com/user/${res1[3]}`)
// })

//Generator 방식의 비동기 처리
// const fetchWrapper = (gen, url)=> fetch(url)
// .then(res => res.json())
// .then(res =>gen.next(res))
//
// function* getNthUserInfo(){
//     const [gen, from, nth ] = yield;
//     const req1  = yield fetchWrapper(gen, `https://api.github.com/users?since=${from || 0}`)
//     const userId = req1[nth - 1 || 0].id;
//     console.log(userId)
//     const req2 = yield fetchWrapper(gen, `https://api.github.com/user/${userId}`);
//     console.log(req2)
// }
// const runGenerator = (generator, ...rest)=>{
//     const gen = generator()
//     gen.next();
//     gem.next([gen,...rest])
// }
// runGenerator(getNthUserInfo(),1000,4)
// runGenerator(getNthUserInfo(),1000,6)
