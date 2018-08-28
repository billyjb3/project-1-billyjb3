
function start()
{

}

function showRegister()
{
    let login = document.getElementById("loginBox");
    let register = document.getElementById("registerBox");

    login.style.display = "none";
    register.style.display = "block";
}

function showLogin()
{
    let login = document.getElementById("loginBox");
    let register = document.getElementById("registerBox");

    login.style.display = "block";
    register.style.display = "none";
}

addEventListener("load", start, false);