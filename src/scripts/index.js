//import $ from 'jquery';

let form = document.getElementById('user-form');

form.addEventListener('submit', event => {
    //Prevent the browser from submitting the form
    let user = form.elements['user']; //Accedemos a la informacion de los input con el .elements llevandole
    // el 'name' del input lo que nos retorna un objeto en la variable user
    let avatarFile = form.elements['avatar-file'];
    let userError = document.getElementById('user-error');

    if (user.value.length < 4) {
        userError.textContent = 'Invalyd entry';
        userError.style.color = 'red';
        user.style.borderColor = 'red';
        user.focus();

        event.preventDefault();
    }

    let posting = { //Se obtiene la informacion de el form y se almacenan en este objeto
        user: user.value, //con el metodo .value accedemos a dato que se envio del input
        avatarFile: avatarFile.value

    };

    let promise = $.post( //Primero iria la URL donde se va a hacer el POST y luego la informacion
        "Aca iria la URL de el servidor al que se le va a hacer el post", posting
    );

    promise.then(
        data => console.log('success: ', data),
        error => console.log('error: ', error)
    );
    event.preventDefault(); //Se llama este metodo para que el form no haga el submite al browser
    //porque ya lo estamos haciendo manual con el jquery
});