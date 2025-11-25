const form = document.querySelector('form')
const submitBtn = document.getElementById('submit')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const emailAdress = document.getElementById('emailAdress')
const message = document.getElementById('message')
const radios = document.querySelectorAll('input[type="radio"]')
const checkbox = document.getElementById('checkbox')
const dismissBtn = document.querySelector('.okay')
const hidden = document.querySelector('.hidden')

//ERROR Messages
const errorMsgFirst = document.querySelector('.errorMsgFirst')
const errorMsgLast = document.querySelector('.errorMsgLast')
const errorMsgMsg = document.querySelector('.errorMsgMsg')
const errorMsgQuery = document.querySelector('.errorMsgQuery')
const errorMsgMail = document.querySelector('.errorMsgMail')
const errorMsgCheck = document.querySelector('.errorMsgCheck')

const emailRe = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const nameRe = /^(?=.*\p{L})[\p{L}\p{M}\p{Pd}\s']+$/u;








submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let valid = true

    if (!nameRe.test(firstName.value) || firstName.value.trim() == '') {
        console.log('first name nope')
        firstName.style.borderColor = "red"
        errorMsgFirst.style.display = 'flex'
        valid = false
    }else{
        firstName.style.borderColor = ""
        errorMsgFirst.style.display = 'none'
    }

    if(!nameRe.test(lastName.value) || lastName.value.trim() == ''){
        console.log('last name nope')
        lastName.style.borderColor = "red"
        errorMsgLast.style.display = 'flex'
        valid = false
    }else{
        lastName.style.borderColor = ""
        errorMsgLast.style.display = 'None'
    }



    if (!emailRe.test(emailAdress.value) || emailAdress.value.trim === '') {
        console.log('mail nope')
        emailAdress.style.borderColor = "red"
        errorMsgMail.style.display = 'flex'
        valid = false
    }else{
        emailAdress.style.borderColor = ""
        errorMsgMail.style.display = 'none'
    }

    const selectedRadio = [...radios].some(r => r.checked)
    if(!selectedRadio){
        radios.forEach(r => r.parentElement.style.border = "1px solid red")
        errorMsgQuery.style.display = 'flex'
        console.log('radio nope')
        valid = false
    }else{
        radios.forEach(r => r.parentElement.style.border = "1px solid")
        errorMsgQuery.style.display = 'none'
    }

    if(message.value.trim() === ''){
        message.style.borderColor = "red"
        errorMsgMsg.style.display = 'flex'
        console.log('message nope')
        valid = false
    }else{
        message.style.borderColor = ""
        errorMsgMsg.style.display = 'none'
    }

    if(!checkbox.checked){
        errorMsgCheck.style.display = 'flex'
        console.log('checkbox nope')
        valid = false
    }else{
        errorMsgCheck.style.display = 'none'
    }

    if(valid){
        firstName.style.borderColor = ""
        lastName.style.borderColor = ""
        radios.forEach(r => r.parentElement.style.border = "1px solid")
        message.style.borderColor = ""
        checkbox.parentElement.style.color = ''
        
        form.reset()
        hidden.style.display = 'flex'
        form.style.filter = 'blur(.5em)'

    }
    
})

dismissBtn.addEventListener('click', () =>{
    hidden.style.display = 'none'
    form.style.filter = 'none'
})

form.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && document.activeElement !== submit) {
    e.preventDefault();
  }
});

