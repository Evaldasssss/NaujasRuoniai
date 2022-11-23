console.log('hello')

function MyArray (a, b, ...c) {
    console.log(a)
    console.log(b)
    console.log(...c)
    console.log(c.length)
}

MyArray(1, 2, 3, 4, 5, 6)