// const registrationForm = document.querySelector('#registrationForm')

// registrationForm.addEventListener('submit', function(event){
//   event.preventDefault()

//       const username= document.querySelector('#username').value
//       const email = document.querySelector('#email').value
//       const password = document.querySelector('#password').value
//       const confirmPassword = document.querySelector('#confirmPassword').value
//       const error = document.querySelector('#error')

//       if (username === "") {
//         error.textContent = "user Name is Requared"
//         return
//       }

//       const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//       if (!email.match(emailPattern)) {
//         error.textContent = "Email isn't Vailed"
//         return
//       }

//       if (password.length < 8 ) {
//         error.textContent = "Paasward ka aad galisay waa in uusan 8 Xaraf waa kayaraanin  "
//         return
//       }

//       if (password !== confirmPassword) {
//         error.textContent = "2 Passwprd isku mid mahan "
//         return
//       }

//       error.textContent = "Register is Seccseefull "
      



// })





// //  main test

// const registrationForm = document.querySelector("#registrationForm")

// registrationForm.addEventListener('submit', function(event){
//   event.preventDefault()

//   const username = document.querySelector("#username").value
//   const emaile = document.querySelector("#email").value
//   const password = document.querySelector("#password").value
//   const confirmPassword = document.querySelector("#confirmPassword").value
//   const error = document.querySelector("#error")


//   if (username === "") {
//     error.textContent = "Waa qasab User Name ku "
//     return
//   }

//   const emailPartten = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

//   if (!emaile.match(emailPartten)){
//     error.textContent = " Email saxan gali sida : Abdi@gmail.com "
//     return

//   }

//   if (password.length < 3 ) {
//     error.textContent= "Waa inuu Baaswayku Noqdaa ugu yaraan 8 Xaraf"
//     return
    
//   }



//   error.textContent = " Diwaangalintaadii waa lagu guulaysatay"

//   if ( password == confirmPassword){
//     error.textContent = "Labada Password isku mid mahan"
//     return
//   }




// })




// Exercise 37
const colorPicker = document.querySelector("#colorPicker")
const colorPreview = document.querySelector("#colorPreview")
const colorHistory = document.querySelector("#colorHistory")
const clearHistoryButton = document.querySelector("#clearHistoryButton")

colorPicker.addEventListener('input', function(){
  const kalarkaLadoortay = colorPicker.value
  colorPreview.style.backgroundColor = kalarkaLadoortay
  
  const li = document. createElement("li");
  li.textContent = kalarkaLadoortay;
  li. style. color = kalarkaLadoortay;
  colorHistory. appendChild(li);

})
clearHistoryButton.addEventListener('click', function(){
  colorHistory.innerHTML=""
})
