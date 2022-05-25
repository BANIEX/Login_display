let user_profile = []
document.getElementsByTagName("button")[0].addEventListener("click", function(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    let user = {
        name : name,
        email : email,
        password : password
    }

    console.log(user)
    user_profile.push(user)
    console.log(user_profile)
})

document.getElementsByClassName("admin")[0].addEventListener("click",  function(){
    alert('hi')
    document.getElementsByClassName('wrapper')[0].style.display = "block";
    document.getElementsByClassName("form")[0].style.display = 'none'
})