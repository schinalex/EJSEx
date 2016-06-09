'use strict'

// --------------------
// Deep comparison
// --------------------
const Queue = class {
  constructor () {
    this.enqueue = () => {
      console.log('enqueued')
    }
  }
}

let newQueue = new Queue()
console.log(newQueue)
const deepEqual = (obj1, obj2) => {
  let equal = true
  for (let property of obj1) {

  }
  return equal
}
