function sum(a, b) {
    // normal function
    return (a + b);
}
console.log('sum = ' + sum(10, 20))

var add = function (a, b) {
    // anonymous function
    return (a + b);
}
console.log('add = ' + add(10, 60))


function complex(add) {
    // callback function
    console.warn('complex = ' + add(200, 300));
}

complex(function (a, b) {
    // anonymous function with callback
    return (a + b);
})