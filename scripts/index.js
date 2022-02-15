import Person from './classes'

const form = document.querySelector('.form-input')
const inputs = form.querySelectorAll('.form-input')
const btnSave = document.getElementById('btn-save')
const btnDownload = document.getElementById('btn-download')

const firstTester = new Person({
  name: 'Pavel',
  age: 19,
  message: 'Darov!',
})
const dataBase = [firstTester]

form.addEventListener('submit', (e) => {
  e.preventDefault()
})

btnSave.addEventListener('click', (e) => {
  console.log('send')

  const tester = new Person()

  for (let i = 0; i < inputs.length; i++) {
    console.log(tester.name)
  }
  dataBase.push(tester)
  console.log(dataBase)
})
console.log(dataBase)
