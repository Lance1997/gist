// Get Forms
let joinForm = document.getElementById('joinForm')
let personalForm = document.getElementById('personalForm')
let socialForm = document.getElementById('socialForm')

// GEt Buttons
let Next1 = document.getElementById('Next1')
let Next2 = document.getElementById('Next2')
let Back1 = document.getElementById('Back1')
let Back2 = document.getElementById('Back2')

//container_stepRow-progress
let progress = document.getElementById('container_stepRow-progress')

Next1.onclick = () => {
    joinForm.style.left = "-450px"
    personalForm.style.left = "30px"
    progress.style.width = "240px"
}

Back1.onclick = () => {
    joinForm.style.left = "30px"
    personalForm.style.left = "450px"
    progress.style.width = "120px"
}

Next2.onclick = () => {
    personalForm.style.left = "-450px"
    socialForm.style.left = "30px"
    progress.style.width = "360px"
}

Back2.onclick = () => {
    socialForm.style.left = "450px"
    personalForm.style.left = "30px"
    progress.style.width = "240px"
}