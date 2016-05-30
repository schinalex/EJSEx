'use strict'

// --------------------
// Reversing an array
// --------------------

const reverseArray = (array) => {
  let reversed = []
  for (let element of array) {
    reversed.unshift(element)
  }
  return reversed
}

const reverseArrayInPlace = (array) => {
  let length = array.length
  let half = Math.floor(length / 2)
  let removed
  for (let i = 0; i < half; i++) {
    removed = array.splice(i, 1)
    removed = array.splice(length - i - 2, 1, removed[0])
    array.splice(i, 0, removed[0])
  }
}

console.log(reverseArray(['A', 'B', 'C']))

let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
