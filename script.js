 // coté DOM js


  const tousparagraphes= document.querySelectorAll("p");
  tousparagraphes.forEach(p=> p.style.fontSize="18px");


 const burger= document.querySelector('.burger');
 const nav=document.querySelector('.nav');

 burger.addEventListener('click', ()=>
 {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
 });


 window.addEventListener('load',()=>
{
  const titre=document.getElementById('titre');
 if (titre) {
  setTimeout(() => {
    titre.classList.remove('hidden');
    titre.classList.add('show');
  }, 1000);
}
});