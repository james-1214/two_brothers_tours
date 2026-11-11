const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
let lenis=null;
if(window.Lenis&&window.gsap&&!reduce){lenis=new Lenis({lerp:.1});lenis.on('scroll',()=>window.ScrollTrigger&&ScrollTrigger.update());
 gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0);}
const nav=document.getElementById('nav'),burger=document.getElementById('burger');
const setMenu=o=>{nav.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Close menu':'Open menu');lenis&&(o?lenis.stop():lenis.start());document.body.style.overflow=o?'hidden':''};
burger.onclick=()=>setMenu(!nav.classList.contains('open'));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(!t)return;e.preventDefault();setMenu(false);lenis?lenis.scrollTo(t,{offset:-70}):t.scrollIntoView({behavior:reduce?'auto':'smooth'});}));
bindWhatsApp();

// Add real photo file names here once they exist in assets/destinations/ (no 404s when empty).
const DESTINATION_PHOTOS={/* d1:'mountains.jpg', d2:'coffee.jpg', d3:'waterfall.jpg', d4:'forest-road.jpg', d5:'viewpoint.jpg', d6:'nature.jpg' */};
Object.entries(DESTINATION_PHOTOS).forEach(([k,f])=>{const el=document.querySelector('.'+k);if(el)el.style.backgroundImage=`linear-gradient(transparent 45%,rgba(7,19,38,.75)),url(assets/destinations/${f})`;});
