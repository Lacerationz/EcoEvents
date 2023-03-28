function login(){
    let user = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (user === "username" && password === "password"){
        alert("Login Efetuado Com Sucesso!!!");
        window.location.href("https://ecoevents.000webhostapp.com/feed.html");
    }
    else{
        alert("ERRO! Preencheu um dos campos incorretamente. Tente de Novo.")
    }
}