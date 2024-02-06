/**
 * 형식화 배열
 * 버퍼 : 데이터 부분을 나타내는 객체
 * 뷰 : 문맥을 제공해 데이터를 실제 형식화 배열로 바꾼다.
 */
/**
 * ArrayBuffer
 * 일반 고정 길이 이진 데이터 버퍼를 나타내는데 사용되는 데이터 형
 * DataView
 * 버퍼에 임의 데이터를 읽고 쓰기 위해 getter/setter API를 제공하는 저레벨 인터페이스
 */
var buffer = new ArrayBuffer(16)
if(buffer.byteLength === 16){
    console.log("Yes, it's 16 bytes")
}else{
    console.log("Oh no, it's the wrong size!")
}
var int32View = new Int32Array(buffer)
for(let i = 0 ;i<int32View.length;i++){
    int32View[i] = i*2
}
int32View