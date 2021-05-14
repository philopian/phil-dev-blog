// Have an array of values you want to make into an object
const someArr = ["name", "age", "city"]

const arrObj = someArr.map(item => ({ [item]: "..." }))
// console.log(arrObj)

const obj = arrObj.reduce((result, item) => {
  return { ...result, ...item }
}, {})
console.log(obj)
