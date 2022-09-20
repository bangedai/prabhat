const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const vatInput = document.getElementById('vatInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)


const calculateBill = () => {

  const bill = Number(billInput.value)

  const vat = 13/100

  const tipPercentage = Number(tipInput.value) / 100

  const tipAmount = bill * tipPercentage

  const total = bill + tipAmount + bill * vat

  const perPersonTotal = total / numberOfPeople

  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}

const increasePeople = () => {

  numberOfPeople += 1

  numberOfPeopleDiv.innerText = numberOfPeople

  calculateBill()
}
// const increasePeople = () => {
//   // increment the amount of people
//   numberOfPeople += 1

//   // update the DOM with the new number of people
//   numberOfPeopleDiv.innerText = numberOfPeople

//   // calculate the bill based on the new number of people
//   calculateBill()
// }

const decreasePeople = () => {
  if(numberOfPeople <= 1){
    return
  }

  numberOfPeople -= 1
  numberOfPeopleDiv.innerText = numberOfPeople
                  
  calculateBill()
}

