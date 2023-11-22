let visitas = localStorage.getItem('visitas');
let contador;
const contadorVisitas = document.getElementById('contadorVisitas');
const btnReestablecer = document.getElementById('btnReestablecer');

if (!visitas) {
    contador = 0;
    localStorage.setItem('visitas', contador);
} else {
    contador = localStorage.getItem('visitas');
    contador++;
    localStorage.setItem('visitas', contador);
}
contadorVisitas.innerHTML = contador;


btnReestablecer.addEventListener('click', function() {
    localStorage.removeItem('visitas');
    // con este método recargo la pg
    location.reload();

})