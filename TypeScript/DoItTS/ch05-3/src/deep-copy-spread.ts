const oArr = [1, 2, 3, 4]
const deepCopiedArr = [...oArr]
deepCopiedArr[0] = 0
console.log(oArr, deepCopiedArr)