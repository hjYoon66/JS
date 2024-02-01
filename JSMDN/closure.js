//클로저 : 함수의 중첩을 허용하고, 내부 함수가 외부 함수 안에서 정의된 모든 변수와 함수에 대해 전체 접근 권한을 부여한다.
// const pet = function (name){
//     const getName = function(){
//         return name;
//     };
//     return getName();
// }
//
// const myPet = pet("vivie");
//
// console.log(myPet);

// const createPet = function(name){
//     let sex;
//
//     const pet = {
//         setName(newName){
//             name = newName
//         },
//         getName(){
//             return name;
//         },
//         getSex(){
//             return sex;
//         },
//         setSex(newSex){
//             if(
//                 typeof newSex === "string" && (newSex.toLowerCase() === "male" || newSex.toLowerCase() ==="female")){
//                     sex = newSex;
//             }
//         }
//     }
//     return pet;
// }
// const pet = createPet("Vivie");
// console.log(pet.getName());
// console.log(pet.setName("Oliver"));
// console.log(pet.setSex("male"));
// console.log(pet.getSex());
// console.log(pet.getName());

const createPet = function(name){
    return{
        setName(name){
            name = name;
        }
    }
}
// 둘러싸인 함수가 외부 스코프의 변수와 동일한 이름을 가진 변수를 정의하면, 외부 스코프의 변수에 다시 참조할 방법이 없다.
