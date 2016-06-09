'use strict'

// --------------------
// Deep comparison
// --------------------

class Queue extends Array {
  isEmpty () {
    return !this.length
  }
  enqueue (e) {
    return this.push(e)
  }
  dequeue () {
    return this.shift()
  }
}

const deepEqual = (object1, object2) => {
  if (typeof object1 === 'object' && object1 !== null &&
      typeof object2 === 'object' && object2 !== null) {
    let queue1 = new Queue()
    let queue2 = new Queue()
    queue1.enqueue(object1)
    queue2.enqueue(object2)
    while (!queue1.isEmpty()) {
      let obj1 = queue1.dequeue()
      let obj2 = queue2.dequeue()
      if (obj1 !== obj2) {
        for (let property in obj1) {
          if (obj1.hasOwnProperty(property)) {
            let prop1 = obj1[property]
            let prop2 = obj2[property]
            if (prop1 !== prop2) {
              if (typeof prop1 === 'object' && typeof prop2 === 'object') {
                queue1.enqueue(prop1)
                queue2.enqueue(prop2)
              } else {
                return false
              }
            }
          }
        }
      }
    }
    return true
  } else {
    return object1 === object2
  }
}

let obj = {here: {is: 'an'}, object: 2}
console.log(deepEqual(obj, obj))
console.log(deepEqual(obj, {here: 1, object: 2}))
console.log(deepEqual(obj, {here: {is: 'an'}, object: 2}))
console.log(deepEqual(null, null))
