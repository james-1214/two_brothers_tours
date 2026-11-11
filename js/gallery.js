/* Karnataka gallery: 100 places.
   Photo order for each card:
   1) your own file listed in gallery/manifest.json  ({"Mysore Palace":"mysore-palace.jpg"})
   2) real photo pulled live from Wikipedia/Wikimedia Commons (free licence, credited)
   3) a neat placeholder card (never a broken image) */
(function(){
const CATS={all:'All',heritage:'Heritage & Forts',temples:'Temples',falls:'Waterfalls & Dams',hills:'Hills & Treks',coffee:'Coffee & Ghats',wildlife:'Wildlife',beaches:'Beaches',city:'City'};
// [display name, Wikipedia article title, category, area]
const P=[
// verified Wikimedia Commons files (5th value = file name)
['Shade-grown coffee, Chikmagalur','','coffee','Chikkamagaluru','Traditional shade coffee plantation Chikmagalur 1.jpg',2288],
['Coffee estate rows, Chikmagalur','','coffee','Chikkamagaluru','Traditional shade coffee plantation Chikmagalur 2.jpg',2288],
['Coffee plantation','','coffee','Karnataka','Coffee plantation.jpg',4160],
['Coffee plantation, South Canara','','coffee','Dakshina Kannada','Coffee plantation, South Canara.jpg',2048],
['Coffee estate road, Coorg','','coffee','Kodagu','Road Coffee Estate Inakanahalli Coorg Jun24 A7CR 01542.jpg',9504],
['Coffee forests, Western Ghats','','coffee','Western Ghats','India coffee forests.jpg',1128],
['Dabbe Falls','','falls','Shivamogga','Dabbe Falls-Karnataka.jpg',5184],
['Mysore Palace','Mysore Palace','heritage','Mysuru'],['Bangalore Palace','Bangalore Palace','heritage','Bengaluru'],['Vidhana Soudha','Vidhana Soudha','city','Bengaluru'],
['Lalbagh Botanical Garden','Lalbagh','city','Bengaluru'],['Cubbon Park','Cubbon Park','city','Bengaluru'],["Tipu Sultan's Summer Palace","Tipu Sultan's Summer Palace",'heritage','Bengaluru'],
['Bull Temple','Bull Temple, Bangalore','temples','Bengaluru'],['St. Mary\'s Basilica','St. Mary\'s Basilica, Bangalore','city','Bengaluru'],['ISKCON Temple','ISKCON Temple Bangalore','temples','Bengaluru'],
['Jaganmohan Palace','Jaganmohan Palace','heritage','Mysuru'],['Lalitha Mahal','Lalitha Mahal','heritage','Mysuru'],['Chamundi Hills','Chamundi Hills','hills','Mysuru'],
['Brindavan Gardens','Brindavan Gardens','city','Mandya'],['Krishna Raja Sagara Dam','Krishna Raja Sagara','falls','Mandya'],['Mysore Zoo','Mysore Zoo','wildlife','Mysuru'],
['Srirangapatna','Srirangapatna','heritage','Mandya'],['Daria Daulat Bagh','Daria Daulat Bagh','heritage','Srirangapatna'],['Ranganathittu Bird Sanctuary','Ranganathittu Bird Sanctuary','wildlife','Mandya'],
['Somanathapura Temple','Chennakeshava Temple, Somanathapura','temples','Mysuru'],['Talakadu','Talakadu','temples','Mysuru'],
['Melukote','Melukote','temples','Mandya'],['Shravanabelagola','Shravanabelagola','temples','Hassan'],['Gommateshwara Statue','Gommateshwara statue','temples','Hassan'],
['Chennakeshava Temple, Belur','Chennakeshava Temple, Belur','temples','Hassan'],['Hoysaleswara Temple, Halebidu','Hoysaleswara Temple','temples','Hassan'],['Hampi','Hampi','heritage','Vijayanagara'],
['Virupaksha Temple','Virupaksha Temple, Hampi','temples','Hampi'],['Vittala Temple','Vittala Temple','temples','Hampi'],['Lotus Mahal','Lotus Mahal','heritage','Hampi'],
['Anegundi','Anegundi','heritage','Koppal'],['Tungabhadra Dam','Tungabhadra Dam','falls','Vijayanagara'],['Badami','Badami','heritage','Bagalkot'],
['Badami Cave Temples','Badami cave temples','temples','Bagalkot'],['Pattadakal','Pattadakal','heritage','Bagalkot'],['Aihole','Aihole','heritage','Bagalkot'],
['Gol Gumbaz','Gol Gumbaz','heritage','Vijayapura'],['Ibrahim Rauza','Ibrahim Rauza','heritage','Vijayapura'],['Bidar Fort','Bidar Fort','heritage','Bidar'],
['Mahmud Gawan Madrasa','Mahmud Gawan Madrasa','heritage','Bidar'],['Gulbarga Fort','Gulbarga Fort','heritage','Kalaburagi'],['Chitradurga Fort','Chitradurga Fort','heritage','Chitradurga'],
['Gokak Falls','Gokak Falls','falls','Belagavi'],['Almatti Dam','Almatti Dam','falls','Vijayapura'],
['Gokarna','Gokarna, Karnataka','beaches','Uttara Kannada'],['Om Beach','Om Beach','beaches','Gokarna'],['Murudeshwar','Murdeshwar','temples','Uttara Kannada'],
['Maravanthe','Maravanthe','beaches','Udupi'],["St. Mary's Island","St. Mary's Islands",'beaches','Udupi'],['Malpe','Malpe','beaches','Udupi'],
['Udupi Sri Krishna Matha','Udupi Sri Krishna Matha','temples','Udupi'],['Kaup','Kaup','beaches','Udupi'],['Panambur Beach','Panambur','beaches','Mangaluru'],
['Karwar','Karwar','beaches','Uttara Kannada'],['Mangaluru','Mangalore','city','Dakshina Kannada'],['Dharmasthala','Dharmasthala','temples','Dakshina Kannada'],
['Kukke Subramanya Temple','Kukke Subramanya Temple','temples','Dakshina Kannada'],['Mookambika Temple, Kollur','Kollur Mookambika Temple','temples','Udupi'],['Sringeri','Sringeri','temples','Chikkamagaluru'],
['Horanadu Annapoorneshwari','Annapoorneshwari Temple, Horanadu','temples','Chikkamagaluru'],['Jog Falls','Jog Falls','falls','Shivamogga'],['Abbey Falls','Abbey Falls','falls','Kodagu'],
['Shivanasamudra Falls','Shivanasamudra Falls','falls','Chamarajanagar'],['Magod Falls','Magod Falls','falls','Uttara Kannada'],['Unchalli Falls','Unchalli Falls','falls','Uttara Kannada'],
['Hebbe Falls','Hebbe Falls','falls','Chikkamagaluru'],['Mallalli Falls','Mallalli Falls','falls','Kodagu'],['Irupu Falls','Irupu Falls','falls','Kodagu'],
['Linganamakki Dam','Linganamakki Dam','falls','Shivamogga'],['Mullayanagiri','Mullayanagiri','coffee','Chikkamagaluru'],['Baba Budangiri','Baba Budangiri','coffee','Chikkamagaluru'],
['Kemmangundi','Kemmangundi','coffee','Chikkamagaluru'],['Chikkamagaluru','Chikkamagaluru','coffee','Chikkamagaluru'],['Sakleshpur','Sakleshpur','coffee','Hassan'],
['Madikeri','Madikeri','coffee','Kodagu'],['Kodagu (Coorg)','Kodagu district','coffee','Kodagu'],['Agumbe','Agumbe','coffee','Shivamogga'],
['Tadiandamol','Tadiandamol','hills','Kodagu'],['Kudremukh','Kudremukh','hills','Chikkamagaluru'],['Kodachadri','Kodachadri','hills','Shivamogga'],
['Nandi Hills','Nandi Hills, Karnataka','hills','Chikkaballapur'],['Skandagiri','Skandagiri','hills','Chikkaballapur'],['Savandurga','Savandurga','hills','Ramanagara'],
['Devarayanadurga','Devarayanadurga','hills','Tumakuru'],['Madhugiri','Madhugiri','hills','Tumakuru'],['Biligiriranga Hills','Biligiriranga Hills','hills','Chamarajanagar'],
['Bandipur National Park','Bandipur National Park','wildlife','Chamarajanagar'],['Nagarahole National Park','Nagarahole National Park','wildlife','Kodagu'],['Bannerghatta National Park','Bannerghatta National Park','wildlife','Bengaluru'],
['Dandeli','Dandeli Wildlife Sanctuary','wildlife','Uttara Kannada'],['Kabini Reservoir','Kabini Reservoir','wildlife','Mysuru'],['Bhadra Wildlife Sanctuary','Bhadra Wildlife Sanctuary','wildlife','Chikkamagaluru'],
['Daroji Bear Sanctuary','Daroji Sloth Bear Sanctuary','wildlife','Vijayanagara'],['Namdroling Monastery','Namdroling Monastery','temples','Bylakuppe'],


];
const grid=document.getElementById('gal-grid');if(!grid)return;
const chips=document.getElementById('gal-chips'),count=document.getElementById('gal-count');
let manifest={},filter='all',visible=[];
const WIKI='https://en.wikipedia.org/api/rest_v1/page/summary/';
const items=P.map((p,i)=>({name:p[0],title:p[1],cat:p[2],area:p[3],file:p[4]||null,fw:p[5]||0,i,src:null,full:null,state:'idle'}));

function card(it){
 const b=document.createElement('button');b.type='button';b.className='gal-card';b.dataset.i=it.i;
 b.setAttribute('aria-label','Open photo: '+it.name);
 b.innerHTML='<span class="gal-ph"><b>'+(it.name.charAt(0))+'</b></span><span class="gal-cap"><strong></strong><small></small></span>';
 b.querySelector('strong').textContent=it.name;b.querySelector('small').textContent=it.area+' · '+CATS[it.cat];
 b.onclick=()=>openBox(it.i);it.el=b;return b;
}
function paint(it,src){
 const img=new Image();img.alt=it.name+', Karnataka';img.decoding='async';
 img.onload=()=>{it.el.prepend(img);it.el.classList.add('has-img');it.state='ok';};
 img.onerror=()=>{it.state='fail';it.src=null;it.full=null;it.el.classList.add('no-img');};
 img.src=src;
}
const COMMONS='https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&prop=imageinfo&iiprop=url|size|mime&iiurlwidth=500';
const BAD=/map|logo|flag|svg|coat of arms|diagram|poster|plan|sign|board|stamp|painting|sketch|drawing|inscription/i;
const sized=(u,w,full)=>u.replace(/\/\d+px-/,'/'+(full?(w>=1280?1280:w>=960?960:500):500)+'px-');
const fileUrl=(f,w)=>'https://commons.wikimedia.org/wiki/Special:FilePath/'+encodeURIComponent(f)+'?width='+w;
function pick(j){
 const pg=j&&j.query&&j.query.pages;if(!pg)return null;
 const list=Object.values(pg).map(x=>({t:x.title||'',o:x.index||0,i:x.imageinfo&&x.imageinfo[0]})).filter(x=>x.i&&x.i.thumburl&&x.i.mime==='image/jpeg'&&x.i.width>=1000&&x.i.width>=x.i.height*1.2&&!BAD.test(x.t));
 if(!list.length)return null;
 list.sort((a,b)=>(a.o&&b.o)?a.o-b.o:Math.min(b.i.width,4000)-Math.min(a.i.width,4000));
 const x=list[0].i;return {src:x.thumburl,full:sized(x.thumburl,x.width,true),page:x.descriptionurl,w:x.width};
}
async function commons(it){
 const t=it.title||it.name;
 const tries=[COMMONS+'&generator=categorymembers&gcmtype=file&gcmlimit=60&gcmtitle='+encodeURIComponent('Category:'+t.replace(/ /g,'_')),
  COMMONS+'&generator=search&gsrnamespace=6&gsrlimit=25&gsrsearch='+encodeURIComponent(t+' Karnataka')];
 for(const u of tries){try{const r=await fetch(u);if(!r.ok)continue;const f=pick(await r.json());if(f)return f;}catch(e){}}
 return null;
}
async function load(it){
 if(it.state!=='idle')return;it.state='loading';
 if(manifest[it.name]){it.src=it.full='gallery/'+manifest[it.name];paint(it,it.src);return;}
 if(it.file){it.src=fileUrl(it.file,500);it.full=fileUrl(it.file,it.fw>=1280?1280:960);
  it.page='https://commons.wikimedia.org/wiki/File:'+encodeURIComponent(it.file.replace(/ /g,'_'));paint(it,it.src);return;}
 let wiki=null;
 try{const r=await fetch(WIKI+encodeURIComponent(it.title.replace(/ /g,'_')),{headers:{Accept:'application/json'}});
  if(r.ok){const d=await r.json();const t=d.thumbnail;
   if(t&&t.source)wiki={src:sized(t.source,0,false),full:sized(t.source,(d.originalimage&&d.originalimage.width)||0,true),w:t.width,h:t.height,
    page:(d.content_urls&&d.content_urls.desktop&&d.content_urls.desktop.page)||'https://en.wikipedia.org/wiki/'+encodeURIComponent(it.title)};}}catch(e){}
 // use the Wikipedia photo only if it is landscape; otherwise look for a better one on Commons
 let ch=wiki&&wiki.w>=wiki.h*1.15?wiki:null;
 if(!ch)ch=await commons(it)||wiki;
 if(!ch){it.state='fail';it.el.classList.add('no-img');return;}
 it.src=ch.src;it.full=ch.full;it.page=ch.page;paint(it,it.src);
}
const io='IntersectionObserver'in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){io.unobserve(e.target);load(items[e.target.dataset.i]);}}),{rootMargin:'500px'}):null;
function render(){
 visible=items.filter(it=>filter==='all'||it.cat===filter);
 grid.replaceChildren(...visible.map(it=>it.el||card(it)));
 count.textContent=visible.length+' of '+items.length+' places';
 visible.forEach(it=>{if(io&&it.state==='idle')io.observe(it.el);else load(it);});
}
Object.entries(CATS).forEach(([k,v])=>{const c=document.createElement('button');c.type='button';c.className='chip'+(k==='all'?' on':'');c.textContent=v;c.setAttribute('aria-pressed',k==='all');
 c.onclick=()=>{filter=k;chips.querySelectorAll('.chip').forEach(x=>{x.classList.toggle('on',x===c);x.setAttribute('aria-pressed',x===c);});render();};chips.append(c);});

// lightbox
const box=document.getElementById('gal-box'),bimg=box.querySelector('img'),bcap=box.querySelector('figcaption');let cur=0,last=null;
function show(n){
 cur=(n+visible.length)%visible.length;const it=visible[cur];load(it);
 bimg.removeAttribute('src');
 if(it.state==='fail'||!it.full){bimg.hidden=true;bcap.innerHTML='';const s=document.createElement('span');s.textContent=it.name+' — photo not available yet';bcap.append(s);}
 else{bimg.hidden=false;bimg.src=it.full;bimg.alt=it.name+', Karnataka';bcap.innerHTML='';
  const s=document.createElement('strong');s.textContent=it.name;const m=document.createElement('small');m.textContent=' · '+it.area;bcap.append(s,m);
  if(it.page){const a=document.createElement('a');a.href=it.page;a.target='_blank';a.rel='noopener';a.textContent='Photo: Wikipedia / Wikimedia Commons';bcap.append(document.createElement('br'),a);}}
}
function openBox(i){last=document.activeElement;cur=visible.findIndex(v=>v.i===i);box.hidden=false;document.body.style.overflow='hidden';
 typeof lenis!=='undefined'&&lenis&&lenis.stop();show(cur);box.querySelector('.gb-close').focus();}
function closeBox(){box.hidden=true;document.body.style.overflow='';typeof lenis!=='undefined'&&lenis&&lenis.start();last&&last.focus();}
box.querySelector('.gb-close').onclick=closeBox;box.querySelector('.gb-prev').onclick=()=>show(cur-1);box.querySelector('.gb-next').onclick=()=>show(cur+1);
box.addEventListener('click',e=>{if(e.target===box)closeBox();});
document.addEventListener('keydown',e=>{if(box.hidden)return;if(e.key==='Escape')closeBox();if(e.key==='ArrowRight')show(cur+1);if(e.key==='ArrowLeft')show(cur-1);});

fetch('gallery/manifest.json').then(r=>r.ok?r.json():{}).catch(()=>({})).then(m=>{manifest=m||{};render();});

/* Tour cards: swap the AI illustrations for real photos when a landscape one is found.
   Edit the Wikipedia titles to change which place each card shows. */
const TOUR={d1:'Mullayanagiri',d4:'Agumbe',d5:'Kemmangundi',d6:'Kudremukh'};
const setCard=(cls,u)=>{const el=document.querySelector('.dcard.'+cls);if(!el)return;const im=new Image();
 im.onload=()=>{el.style.backgroundImage='linear-gradient(0deg,rgba(5,18,34,.72),rgba(5,18,34,.04)),url("'+u+'")';el.style.backgroundSize='cover';el.style.backgroundPosition='center';};im.src=u;};
setCard('d2',fileUrl('Traditional shade coffee plantation Chikmagalur 1.jpg',960)); // real coffee estate
setCard('d3',fileUrl('Dabbe Falls-Karnataka.jpg',960));                            // real waterfall
Object.entries(TOUR).forEach(([cls,t])=>{
 fetch(WIKI+encodeURIComponent(t)).then(r=>r.ok?r.json():null).then(async d=>{
  let u=d&&d.thumbnail&&d.thumbnail.width>=d.thumbnail.height*1.15?sized(d.thumbnail.source,(d.originalimage&&d.originalimage.width)||0,true):null;
  if(!u){const f=await commons({title:t,name:t});u=f&&f.full;}
  u&&setCard(cls,u);}).catch(()=>{});});
})();
