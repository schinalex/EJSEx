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
  for (let node = list; node; node = node.rest) {
    array.push(node.value)
  }
  return array
}

const prepend = (value, list) => {
  let newList = {value: value, rest: list}
  return newList
}

const nth = (list, index) => {
  for (let node = list, i = 0; i <= index && node; node = node.rest, i++) {
    if (i === index) {
      return node.value
    }
  }
}

const recursiveNth = (list, index) => {
  if (!(index < 0)) {
    if (index > 0 && list.rest) {
      return recursiveNth(list.rest, index - 1)
    } else {
      return list.value
    }
  }
}

console.log(listToArray(arrayToList([1, 2, 3, 4, 5])))
console.log(prepend(10, prepend(20, null)))
console.log(recursiveNth(arrayToList([10, 20, 30]), -1))
