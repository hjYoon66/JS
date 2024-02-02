/**
 * Date
 * 자바와 비슷하게 날짜를 처리한다.
 * set 함수. 날짜 개체 안에서의 날짜 및 시간 값을 설정
 * get 함수. 날짜 개체 안에서의 날짜 및 시간 값을 얻는다.
 * to 함수. 날짜 개체로부터 문자열의 값을 반환한다.
 *
 */
const today = new Date();
today

const endYear = new Date(2024,2,1,15,59,59,999)
endYear
endYear.setFullYear(today.getFullYear())

const msPerDay = 24 * 60 * 60 * 1000
msPerDay

let daysLeft = (endYear.getTime() - today.getTime())
daysLeft

daysLeft = Math.round(daysLeft)

function JSClock(){
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    let temp = ""+ (hour > 12 ? hour-12: hour)
    if(hour == 0) temp = "12";
    temp += (minute < 10 ? ":0" : ":") + minute;
    temp += (second < 10 ? ":0" : ":") + second;
    temp += hour >= 12 ? " P.M" : " A.M"
    return temp;
}

console.log(JSClock())