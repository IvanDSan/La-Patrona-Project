let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
}

const fondoUno = document.querySelector('.fondo_blue');
const fondoDos = document.querySelector('.fondo_red');

const siguiente1 = document.querySelector('.circulo_1');
const siguiente2 = document.querySelector('.circulo_2');

siguiente2.onclick = function () {
  fondoUno.classList.add('move');     // fondo azul se va
  fondoDos.classList.add('activo');   // fondo rojo entra
};

siguiente1.onclick = function () {
  fondoUno.classList.remove('move');     // fondo azul vuelve
  fondoDos.classList.remove('activo');   // fondo rojo se va
};

