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

const zooms=document.querySelectorAll(".zoomable");
zooms.forEach((zoom),
  {
    zoom.addEventListener("mouseover",(e)=>
    {
      // zoom externe au centre de la page ok?
      const rect=zoom.getBoundingClientRect();//position de l'element
      const centerX=rect.left + rect.width/2;// coordonee actuel x du centre de mon image
      const centerY=rect.top+ rect.height/2;//coordonee y actuel du centre de mon image 
      
      const offsetX=window.innerWidth/2 -centerX;
      const offsetwindow=window.innerHeight/2 -centerY;

      zoom.style.transform=`translate(${offsetX}px,${offsetY}px)scale(1.4)`;
       zoom.style.width="400px";
       zoom.style.height="400px";
    }
  );
  
  }
);