const isAllTrue = (values: boolean[]) => values.every((value => value == true))

console.log(
    isAllTrue([true, true, true,]),
    isAllTrue([true, false, true])
)