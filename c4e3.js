'use strict'

// --------------------
// A list
// --------------------

const arrayToList = (array) => {
  let list = null
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list}
  }
  return list
}

const listToArray = (list) => {
  let array = []
  for (var node = list; node; node = node.rest) {
    array.push(node.value)
  }
  return array
}

const prepend = (value, list) => {
  let newList = {value: value, rest: list}
  return newList
}

const nth = (list, index) => {
  for (var node = list, i = 0; i <= index; node = node.rest, i++) {
    if (i === index) {
      return node.value
    }
  }
}

console.log(listToArray(arrayToList([1, 2, 3, 4, 5])))
console.log(prepend(10, prepend(20, null)))
console.log(nth(arrayToList([10, 20, 30]), 1))
