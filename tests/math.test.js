const {calculateTip, celsiusToFahrenheit, fahrenheitToCelsius} = require("../src/math")

test('Should calculate total with tip', ()=>{
    const total = calculateTip(10, .3)
    expect(total).toBe(13)
  
})

test('Should calculate total with default tip', ()=>{
    const total = calculateTip(10)
    expect(total).toBe(12.5)
  
})

test('Should calculate the temperature to celsius', ()=>{
    const total = fahrenheitToCelsius(50)
    expect(total).toBe(12)
  
})

test('Should calculate the temperature to fahrenheit', ()=>{
    const total = celsiusToFahrenheit(10)
    expect(total).toBe(50)
  
})
