import {createRangeIterator} from "./createRangeIterator";

const iterator = createRangeIterator(1, 3 + 1)
while (true) {
    const {value, done} = iterator.next()
    if (done) break
    console.log(value)
}