const originalArr = [5, 3, 9, 7]
const shallowCopiedArr = originalArr
shallowCopiedArr[0] = 0
console.log(originalArr, shallowCopiedArr)