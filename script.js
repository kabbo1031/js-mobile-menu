const menu = document.getElementById('menu');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

openBtn.onclick = ()=> {
  menu.style.right = '0';
};

closeBtn.onclick = ()=> {
  menu.style.right = '-260px';
};
