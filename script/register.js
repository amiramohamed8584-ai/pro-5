let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let RegisterBtn = document.getElementById('sign-up')


RegisterBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    if(username.value =="" || email.value =="" ||password.value ==""){
       Swal.fire({
  title: "Oops!",
  text: " please fill in all field",
  icon: "warning"
});
    }else{
        localStorage.setItem("username",username.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)
               Swal.fire({
  title: " تم الارسال بنجاح",
  text: " thank you for contacting us,we will reply soon",
  icon: "success"})
        setTimeout(()=>{
            window.location ="login.html"
        },1500)
    }
})
let show = document.getElementById('show')
show.addEventListener('click', ()=>{
    password.type = show.checked ? "text" :"password"
})