const WA_NUMBER='918867570388'; // client to confirm
const waLink=t=>`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t)}`;
function bindWhatsApp(){
 document.querySelectorAll('.wa-btn').forEach(b=>b.addEventListener('click',()=>{
  window.open(waLink(`Hello TWO BROTHERS Tours & Travels,\nService: ${b.dataset.service}\nEnquiry about: ${b.dataset.item}\nPlease share details and availability.`),'_blank','noopener');}));
 const f=document.getElementById('bform'),fb=document.getElementById('fb');
 f.addEventListener('submit',e=>{e.preventDefault();const d=Object.fromEntries(new FormData(f));
  f.querySelectorAll('.bad').forEach(x=>x.classList.remove('bad'));const errs=[];
  if(!d.name.trim())errs.push('name');
  if(!/^(\+?91)?[6-9]\d{9}$/.test(d.mobile.replace(/[\s-]/g,'')))errs.push('mobile');
  if(!d.service)errs.push('service');
  if(d.date&&new Date(d.date)<new Date(new Date().toDateString()))errs.push('date');
  if(errs.length){errs.forEach(n=>f.elements[n].classList.add('bad'));fb.className='full err';
   fb.textContent='Please check: '+errs.map(n=>({name:'name',mobile:'a valid 10-digit Indian mobile number',service:'service type',date:'a travel date that is today or later'}[n])).join(', ')+'.';f.elements[errs[0]].focus();return;}
  const t=`Hello TWO BROTHERS Tours & Travels,\nI would like to enquire.\nName: ${d.name}\nMobile: ${d.mobile}\nService: ${d.service}\nTravel date: ${d.date||'-'}\nPickup: ${d.pickup||'-'}\nDestination: ${d.dest||'-'}\nPassengers: ${d.pax||'-'}\nMessage: ${d.msg||'-'}`;
  fb.className='full';fb.textContent='Opening WhatsApp. Press send there to submit your enquiry. This is not a confirmed booking.';
  window.open(waLink(t),'_blank','noopener');});}
