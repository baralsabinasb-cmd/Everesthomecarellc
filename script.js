
const button=document.querySelector('.menu-toggle'),nav=document.querySelector('.site-nav');
button?.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open')});
document.querySelectorAll('.site-nav a').forEach(a=>a.addEventListener('click',()=>{nav?.classList.remove('open');button?.setAttribute('aria-expanded','false')}));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const items=document.querySelectorAll('.reveal');
if('IntersectionObserver'in window){const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.1});items.forEach(i=>obs.observe(i))}else items.forEach(i=>i.classList.add('visible'));
