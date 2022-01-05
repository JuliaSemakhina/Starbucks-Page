const btn = document.getElementById('menu-btn');
const mobile = document.getElementById('menu');

function navToggle(){
  btn.classList.toggle('open');
  mobile.classList.toggle('hidden');
  document.body.classList.toggle('no-scroll');
}

btn.addEventListener('click', navToggle)