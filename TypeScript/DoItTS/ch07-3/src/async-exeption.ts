const asyncExeption = async () => {
    throw new Error('error')
}
asyncExeption()
    .catch(err => console.log('error : ', err.message))