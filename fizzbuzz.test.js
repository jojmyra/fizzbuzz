const fizzBuzz = require('./fizzbuzz')

test(' * A number is Fizz if it is divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
    expect(fizzBuzz(6)).toBe('Fizz')
    expect(fizzBuzz(9)).toBe('Fizz')
})


test(' * A number is Buzz if it is divisible by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
    expect(fizzBuzz(10)).toBe('Buzz')
}) 

test(' * A number is FizzBuzz if it is divisible by 3,5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
}) 

test(' * A number is Fizz if it is divisible by 3 or if it has a 3 in it', () => {
    expect(fizzBuzz(13)).toBe('Fizz')
    expect(fizzBuzz(23)).toBe('Fizz')
    expect(fizzBuzz(43)).toBe('Fizz')
    expect(fizzBuzz(63)).toBe('Fizz')
    expect(fizzBuzz(73)).toBe('Fizz')
    expect(fizzBuzz(83)).toBe('Fizz')
    expect(fizzBuzz(93)).toBe('Fizz')
})

test(' * A number is Buzz if it is divisible by 5 or if it has a 5 in it', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
    expect(fizzBuzz(25)).toBe('Buzz')
    expect(fizzBuzz(55)).toBe('Buzz')
    expect(fizzBuzz(65)).toBe('Buzz')
    expect(fizzBuzz(85)).toBe('Buzz')
    expect(fizzBuzz(95)).toBe('Buzz')
}) 

test(' * A number is FizzBuzz if it is divisible by 3,5 or if it has a 3,5 in it', () => {
    expect(fizzBuzz(35)).toBe('FizzBuzz')
    expect(fizzBuzz(53)).toBe('FizzBuzz')
}) 