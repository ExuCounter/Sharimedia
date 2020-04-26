let passwordInputEntry = document.querySelector(".entry-password-input");
let eyeButtonEntry = document.querySelector(".show-entry-password-btn");
 
eyeButtonEntry.addEventListener('click', (e)=>{
    e.preventDefault();
  if(passwordInputEntry.getAttribute('type') == 'password') {
    passwordInputEntry.removeAttribute('type');
    passwordInputEntry.setAttribute('type', 'text');

   } else {
    passwordInputEntry.removeAttribute('type');
    passwordInputEntry.setAttribute('type', 'password');

   }
});

let passwordInputReEntry = document.querySelector(".re-password-input");
let eyeButtonReEntry = document.querySelector(".show-re-password-btn");
 
eyeButtonReEntry.addEventListener('click', (e)=>{
    e.preventDefault();
  if(passwordInputReEntry.getAttribute('type') == 'password') {
    passwordInputReEntry.removeAttribute('type');
    passwordInputReEntry.setAttribute('type', 'text');

   } else {
    passwordInputReEntry.removeAttribute('type');
    passwordInputReEntry.setAttribute('type', 'password');

   }
});