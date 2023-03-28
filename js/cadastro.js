function registro() {
    if(document.getElementById("username").value.length > 3 && (document.getElementById("email").value.length > 10) && (document.getElementById("password").value.length > 4) && (document.getElementById("passwordRepeat").value.length > 4)){
      alert("Registrado com Sucesso!");
    }}