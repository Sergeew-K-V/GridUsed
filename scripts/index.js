document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form-input')
  const inputs = form.querySelectorAll('.form-input__input')
  const btnSave = document.getElementById('btn-save')
  const btnDownload = document.getElementById('btn-download')

  class Person {
    constructor(options) {
      this.name = options.name
      this.age = options.age
      this.message = options.message
    }
  }

  const firstTester = new Person({
    name: 'Pavel',
    age: 19,
    message: 'Darov!',
  })
  const secondTester = new Person({
    name: 'Nikita',
    age: 17,
    message: 'Grettings!',
  })
  const dataBase = [firstTester, secondTester]

  form.addEventListener('submit', (e) => {
    e.preventDefault()
  })

  btnSave.addEventListener('click', () => {
    const tempTester = new Person({})
    let inputHaveSomething = false

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value === '') {
        inputHaveSomething = false
        alert('Пустые инпуты!')
        break
      }
      inputHaveSomething = true
    }
    if (inputHaveSomething) {
      for (let k = 0; k < inputs.length; k++) {
        if (k === 0) {
          tempTester.name = inputs[k].value
          inputs[k].value = ''
        }
        if (k === 1) {
          tempTester.age = inputs[k].value
          inputs[k].value = ''
        }
        if (k === 2) {
          tempTester.message = inputs[k].value
          inputs[k].value = ''
        }
      }
      dataBase.push(tempTester)
      console.log('send')
    }

    console.log(dataBase)
  })

  const list = document.querySelectorAll('.grid-big__list')

  btnDownload.addEventListener('click', () => {
    for (i = 0; i < inputs.length; i++) {
      list[i].insertAdjacentHTML('beforeend', `<li>Hello</span>`)
    }
    console.log(list)
  })
})
