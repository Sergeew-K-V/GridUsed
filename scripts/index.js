const form = document.querySelector('.form-input')
const inputs = form.querySelectorAll('.form-input__item')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('hello')
})

for (let i = 0; i < inputs.length; i++) {
  console.log(inputs[i])
}

console.log(form)
