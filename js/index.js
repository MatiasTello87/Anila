



const hamburg = document.querySelector('#hamburg');
const linea1 = document.querySelector('#linea1');
const linea2 = document.querySelector('#linea2');
const linea3 = document.querySelector('#linea3');
const nav = document.querySelector('#nav');



// Btn abrir hamburguesa

hamburg.addEventListener('click', ()=>{
  // hamburg.classList.toggle('invisible');
  
  nav.classList.add('nav_visible');
  linea1.classList.add('lin1');
  linea2.classList.add('lin2');
  linea3.classList.add('lin3');
  console.log("hassdf");


})

// Función cerrar menú
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburg.contains(e.target)) {
      nav.classList.remove('nav_visible');
      linea1.classList.remove('lin1');
      linea2.classList.remove('lin2');
      linea3.classList.remove('lin3');
    }
  });
