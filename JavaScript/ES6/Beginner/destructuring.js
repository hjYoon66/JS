/**
 * Destructuring assignment : 해체 할당, 구조 분해할당, 디스트럭쳐링
 */

/**
 * 배열 해체 할당
 */
// var colors = ['red','white','orange']
// const [first, second, third] = colors
// console.log(first,second,third)
// const [ , ,third, fourth] = colors
// console.log(third, fourth)

// const arr = [1,2,3,4,5]
// const [a, ...b] = arr
// const [ , ,...c]=arr
// console.log(a,b,c)

// const [a =10, b= 20] =[]
// const [c,d = c*2]=[5]

// let a = 10;
// let b =20;
// [b,a]=[a,b]

/**
 * 객체 해체 할당
 */
// const iu ={
//     name:"아이유",
//     age:25,
//     gender:'female'
// }
// const {
//     name,
//     age,
//     gender
// } = iu
// console.log(name,age,gender)


// const loginInfo = {
//     device: {
//         createdAt: '2017-12-06T00:14:04+0000',
//         deviceId: '0000000000004Vx',
//         deviceType: 'desktop'
//     },
//     user: {
//         createdAt: '2017-03-08T18:00:28+0000',
//         email: 'power4ce@gmail.com',
//         name: '정재남',
//         nickname: 'gomugom',
//         phoneNumber: '010-9185-9155'
//     }
// }
// const{
//     device:{
//         createdAt,
//         deviceId,
//         deviceType
//     },
//     user:userInfo,
//     user:{
//         createdAt:userCreatedAt,
//         email,
//         name
//     }
// } = loginInfo


// const phone={
//     name:'iPhone',
//     color:undefined
// }
// const{
//     name:n,
//     version: v='6+',
//     color:c = 'silver'
// } =phone;

