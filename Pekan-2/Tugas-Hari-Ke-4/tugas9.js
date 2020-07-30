// ===> SOAL 1 <===
const newFunction = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName: () => {
      console.log(`${firstName} ${lastName}`)
    }
  }
}

//Driver Code 
console.log('===> JAWABAN SOAL 1 <===')
newFunction("William", "Imoh").fullName()
console.log('')


// ===> SOAL 2 <===
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}
const { firstName, lastName, destination, occupation } = newObject

// Driver code
console.log('===> JAWABAN SOAL 2 <===')
console.log(firstName, lastName, destination, occupation)
console.log('')


// ===> SOAL 3 <===
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
// const combined = west.concat(east)
const combined = [...west, ...east]

//Driver Code
console.log('===> JAWABAN SOAL 3 <===')
console.log(combined)








