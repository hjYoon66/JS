export function* generator() {
    console.log('generator stared...');
    let value = 1
    while (value < 4)
        yield value++
    console.log('generator finished...')
}