window.addEventListener('load', (e) => {
    const div = document.querySelector('#divEliminar');
    const botonEliminar = document.querySelector('.botonElim');
    const formEliminar = document.querySelector('.formbotelim');

    console.log(div);
    console.log(botonEliminar);
    console.log(formEliminar);

    formEliminar.addEventListener('submit', (e) => {
        e.preventDefault();
    });
});