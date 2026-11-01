let links = document.getElementById('links')
let userData  = document.getElementById('user-info')
let user = document.getElementById('user')

if(localStorage.getItem("username")){
    links.remove()
    userData.style.display="flex"
    user.innerHTML=localStorage.getItem("username")
    user.style.textTransform="capitalize"
}

let logout = document.getElementById('logout').onclick = () =>{
    alert('logout clicked')
    localStorage.clear()
    window.location="register.html"
}
