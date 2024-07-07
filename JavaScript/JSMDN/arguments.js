/**
 * arguments 객체를 이용하면, 보통 함수에 정의된 개수보다 많은 인수를 넘겨주면서 함수를 호출할 수 있다.
 */
function myConcat(separator) {
    // 리스트를 초기화한다
    let result = "";
    // arguments를 이용하여 반복한다
    for (let i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    return result;
}

// "red, orange, blue, "를 반환합니다.
myConcat(", ", "red", "orange", "blue");
console.log(myConcat(", ", "red", "orange", "blue"))

// "elephant; giraffe; lion; cheetah; "를 반환합니다.
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");
console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"))
// "sage. basil. oregano. pepper. parsley. "를 반환합니다.
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
