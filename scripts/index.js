document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form-input')
  const inputs = form.querySelectorAll('.form-input__input')
  const btnSave = document.getElementById('btn-save')
  const btnDownload = document.getElementById('btn-download')
  const list = document.querySelectorAll('.grid-big__list')

  const databaseLS = localStorage.getItem('database')
  const dataBaseParsed = JSON.parse(databaseLS)

  let firstCreated = true

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

  if (dataBaseParsed !== null) {
    for (let k = 0; k < dataBaseParsed.length; k++) {
      for (let i = 0; i < inputs.length; i++) {
        if (i === 0) {
          list[i].insertAdjacentHTML(
            'beforeend',
            `<li class="grid-small-item">${dataBaseParsed[k].name}</span>`
          )
        }
        if (i === 1) {
          list[i].insertAdjacentHTML(
            'beforeend',
            `<li class="grid-small-item">${dataBaseParsed[k].age}</span>`
          )
        }
        if (i === 2) {
          list[i].insertAdjacentHTML(
            'beforeend',
            `<li class="grid-small-item">${dataBaseParsed[k].message}</span>`
          )
        }
      }
    }
    firstCreated = false
  }
  console.log(dataBaseParsed)

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
          tempTester.age = inputs[k].value - 0
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
    localStorage.setItem('database', JSON.stringify(dataBase))
    console.log(dataBase)
  })

  btnDownload.addEventListener('click', () => {
    if (firstCreated) {
      for (let k = 0; k < dataBaseParsed.length; k++) {
        for (let i = 0; i < inputs.length; i++) {
          if (i === 0) {
            list[i].insertAdjacentHTML(
              'beforeend',
              `<li class="grid-small-item">${dataBaseParsed[k].name}</span>`
            )
          }
          if (i === 1) {
            list[i].insertAdjacentHTML(
              'beforeend',
              `<li class="grid-small-item">${dataBaseParsed[k].age}</span>`
            )
          }
          if (i === 2) {
            list[i].insertAdjacentHTML(
              'beforeend',
              `<li class="grid-small-item">${dataBaseParsed[k].message}</span>`
            )
          }
        }
      }
      firstCreated = false
    } else {
      const listGridSmall = document.querySelectorAll('.grid-small-item')
      listGridSmall.forEach((item) => item.remove())

      for (let k = 0; k < dataBaseParsed.length; k++) {
        for (let i = 0; i < inputs.length; i++) {
          if (i === 0) {
            list[i].insertAdjacentHTML(
              'beforeend',
              `<li class="grid-small-item">${dataBaseParsed[k].name}</span>`
            )
          }
          if (i === 1) {
            list[i].insertAdjacentHTML(
              'beforeend',
              `<li class="grid-small-item">${dataBaseParsed[k].age}</span>`
            )
          }
          if (i === 2) {
            list[i].insertAdjacentHTML(
              'beforeend',
              `<li class="grid-small-item">${dataBaseParsed[k].message}</span>`
            )
          }
        }
      }
    }
    console.log(list)
    console.log(dataBase)
  })
})
