const test = () => {
    console.log('from other module')
}
test1 = () =>{ console.log('test 1')}

module.exports = {
    test,
    test1
}

/*

{
    test: test,
    test1: test1
}
*/