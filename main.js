const screenOne = document.querySelector(".screen1")
const screenTwo = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const inputNumber = document.querySelector("#inputNumber")
const messageWin = screenTwo.querySelector("h2")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)

function handleTryClick (event) {
  event.preventDefault()

  const attempts = Number(inputNumber.value) == randomNumber && xAttempts > 1
  const attempt = Number(inputNumber.value) == randomNumber && xAttempts == 1
  

  if(attempts) {
    toggleScreen()
    messageWin.innerText = `Acertou em ${xAttempts} tentativas`
  } 
  
  else if(attempt) {
    toggleScreen()
    messageWin.innerText = `Acertou em ${xAttempts} tentativa`
  }

  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  location.reload()
}

function toggleScreen() {
  screenOne.classList.toggle("hide")
  screenTwo.classList.toggle("hide")
}