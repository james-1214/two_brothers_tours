// CSS 3D scroll-driven car. Layered photo, not a true 3D model.
const car=document.getElementById('car'),stage=document.getElementById('stage');
if(!reduce&&window.gsap&&window.ScrollTrigger){
 gsap.registerPlugin(ScrollTrigger);
 gsap.timeline({scrollTrigger:{trigger:'#home',start:'top top',end:'bottom top',scrub:.6}})
  .to(car,{rotateY:-18,xPercent:14,scale:1.1,ease:'none'},0)
  .to('.mtn-back',{xPercent:-6},0).to('.mtn-front',{xPercent:-12},0).to('.sun',{y:40},0).to('.shadow',{x:'14%'},0);
 if(matchMedia('(hover:hover)').matches)stage.addEventListener('pointermove',e=>{const r=stage.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
  gsap.to(car,{rotateX:-y*6,rotateZ:x*1.5,duration:.6,overwrite:'auto'});});
}
