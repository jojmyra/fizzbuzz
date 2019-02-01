let fizzBuzz = num => {
    var result = ''
    if(num % 3 == 0 || num.toString().includes('3')) {
        result += 'Fizz'
    }
    if(num % 5 == 0 || num.toString().includes('5')) {
        result += 'Buzz'
    }

    return result
}

console.log(fizzBuzz(35))

module.exports = fizzBuzz