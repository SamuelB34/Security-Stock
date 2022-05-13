function enter(event){
    var user = 'admin';
    var password = '1234';
    if( document.form.user.value==user && document.form.password.value==password ){
        var x = document.createElement("a");
        x.href="cameras.html";
        x.click();
        event.preventDefault();
    }
    else if ( document.form.user.value == '' || document.form.password.value=='') {
        alert("Campo de Usuario o contraseña vacios.");
    } 
    else{
        alert("Usuario o contraseña no validos.");
    }

}