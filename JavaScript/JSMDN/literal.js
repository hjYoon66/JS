/**
 * 문자열
 * 다중선 템플릿 문자열 : ``(back-tick)을 사용해 묶는다.
 */

const s = new String("foo")
console.log(s)
console.log(typeof s)

const s1 = "2+2"
const s2 = new String("2+2")
console.log(eval(s1))
console.log(eval(s2))

console.log(
    `string text line 1
    string text line2`
)


