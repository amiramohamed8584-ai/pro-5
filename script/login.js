let username = document.getElementById('username')
let password = document.getElementById('password')
let loginBtn = document.getElementById('sign-in')


let getusername = localStorage.getItem('username')
let getpassword = localStorage.getItem('password')
loginBtn.addEventListener('click',(e)=>{
e.preventDefault()
  if(username.value =="" ||password.value ==""){
            Swal.fire({
  title: "Oops!",
  text: " please fill in all field",
  icon: "warning"
});
    }else{
        if(getusername.trim() === username.value.trim() && getpassword === password.value){
                         Swal.fire({
  title: " تم الارسال بنجاح",
  text: " thank you for contacting us,we will reply soon",
  icon: "success"})
            setTimeout(()=>{
                window.location = "index.html"
            },1000)
        }else{
            alert("Username Or Password IS Wrong")
        }
    }
})