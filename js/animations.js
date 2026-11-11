(function(){
const q=s=>document.querySelectorAll(s);
q('[data-split]').forEach(h=>{const wrap=n=>{[...n.childNodes].forEach(c=>{if(c.nodeType===3){const f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(w=>{if(!w.trim()){f.append(w);return;}const o=document.createElement('span');o.className='split-w';const i=document.createElement('span');i.textContent=w;o.append(i);f.append(o);});c.replaceWith(f);}else if(c.nodeType===1&&c.tagName!=='BR')wrap(c);});};wrap(h);});
const done=()=>{const l=document.getElementById('loader');l&&l.remove();};
if(reduce||!window.gsap||!window.ScrollTrigger){done();return;}
gsap.set(['#nav','.cta .btn','.sub','.stage .glass'],{autoAlpha:0});gsap.set('.car3d',{xPercent:-120,rotateY:40,autoAlpha:0});
gsap.timeline()
 .to('.bar i',{width:'100%',duration:1,ease:'power1.inOut'})
 .to('#loader',{yPercent:-100,duration:.8,ease:'power4.inOut',onComplete:done})
 .from('h1 .split-w>span',{yPercent:110,stagger:.08,duration:.8,ease:'power4.out'},'-=.3')
 .to('.sub',{autoAlpha:1,duration:.6},'-=.4')
 .from('.sun,.mtn',{y:60,autoAlpha:0,stagger:.1,duration:1},'-=.8')
 .to('.car3d',{xPercent:0,rotateY:0,autoAlpha:1,duration:1.6,ease:'power3.out'},'-=.9')
 .to('.stage .glass',{autoAlpha:1,stagger:.12},'-=.6')
 .to(['#nav','.cta .btn'],{autoAlpha:1,stagger:.1},'-=.4');
q('.sec h2:not([data-split]),.lead').forEach(e=>gsap.from(e,{y:30,autoAlpha:0,duration:.8,scrollTrigger:{trigger:e,start:'top 88%'}}));
gsap.from('#about h2 .split-w>span',{yPercent:110,stagger:.06,scrollTrigger:{trigger:'#about h2',start:'top 85%'}});

gsap.to('#progress',{scaleX:1,ease:'none',scrollTrigger:{trigger:document.body,start:'top top',end:'bottom bottom',scrub:.2}});
if(matchMedia('(hover:hover)').matches){
 q('.tilt').forEach(c=>{c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;gsap.to(c,{rotateY:x*10,rotateX:-y*10,transformPerspective:900,duration:.4});});c.addEventListener('pointerleave',()=>gsap.to(c,{rotateX:0,rotateY:0,duration:.6}));});
 q('.magnetic').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();gsap.to(b,{x:(e.clientX-r.left-r.width/2)*.25,y:(e.clientY-r.top-r.height/2)*.35,duration:.3});});b.addEventListener('pointerleave',()=>gsap.to(b,{x:0,y:0,duration:.5,ease:'elastic.out(1,.5)'}));});}

const links=[...q('#menu a')],secs=links.map(l=>document.querySelector(l.getAttribute('href')));
secs.forEach((s,i)=>s&&ScrollTrigger.create({trigger:s,start:'top 50%',end:'bottom 50%',onToggle:v=>v&&links.forEach((l,k)=>l.classList.toggle('active',k===i))}));
q('.dcard').forEach((c,i)=>gsap.from(c,{autoAlpha:0,y:40,duration:.8,delay:(i%3)*.1,scrollTrigger:{trigger:c,start:'top 90%'}}));
})();
