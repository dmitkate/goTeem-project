function scrollFunction(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("myBtn").style.display="block":document.getElementById("myBtn").style.display="none"}function topFunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}window.onscroll=function(){scrollFunction()};var animItems=document.querySelectorAll("._anim-items");if(animItems.length>0){function animOnScroll(){for(var n=0;n<animItems.length;n++){var o=animItems[n],t=o.offsetHeight,e=offset(o).top,l=window.innerHeight-t/4;t>window.innerHeight&&(l=window.innerHeight-window.innerHeight/4),scrollY>e-l&&scrollY<e+t?o.classList.add("active-animate"):o.classList.contains("_anim-no-hide")||o.classList.remove("active-animate")}}function offset(n){var o=n.getBoundingClientRect(),t=window.scrollX||document.documentElement.scrollLeft;return scrollTop=window.scrollY||document.documentElement.scrollTop,{top:o.top+scrollTop,left:o.left+t}}window.addEventListener("scroll",animOnScroll)}
//# sourceMappingURL=index.4a2d924e.js.map
