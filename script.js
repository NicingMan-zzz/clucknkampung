document.addEventListener('DOMContentLoaded',()=>{
const $=i=>document.getElementById(i);
// 1. Mobile menu
const b=$('burger'),m=$('menu');
if(b)b.onclick=()=>{const o=m.classList.toggle('open');b.setAttribute('aria-expanded',o);b.textContent=o?'✕':'☰'};
// 2. Fake visitor counter (Y2K staple)
const c=$('count');
if(c){let n=1337;try{n=+(localStorage.getItem('visits')||1337)+1;localStorage.setItem('visits',n)}catch(e){}c.textContent=String(n).padStart(6,'0')}
// 3. Sparkle cursor trail
document.addEventListener('mousemove',e=>{if(Math.random()>.3)return;const s=document.createElement('span'),k=['#ff2bd6','#00e5ff','#c6ff00','#fff200'];s.className='sp';s.textContent=['✦','★','✧'][Math.random()*3|0];s.style.cssText=`left:${e.pageX}px;top:${e.pageY}px;color:${k[Math.random()*4|0]}`;document.body.appendChild(s);setTimeout(()=>s.remove(),700)});
// 4. Chicken Wisdom generator (index)
const w=$('wisdom');
if(w){const q=['One does not simply eat just one piece.','The chicken is a lie. The sambal is real.','Be the drumstick you wish to see in the bucket.','Touch grass. Then touch fried chicken.','It is not a diet, it is a lifestyle with extra crunch.','Error 404: leftovers not found.','Keep calm and ask for extra sambal.'];w.onclick=()=>{$('quote').textContent=q[Math.random()*q.length|0]}}
// 5. Bucket calculator (products)
const k=$('calc');
if(k)k.onclick=()=>{const s=$('item'),n=parseInt($('qty').value,10),o=$('out');if(isNaN(n)||n<1){o.className='fb bad';o.textContent='Bro. Enter at least 1.';return}const t=s.value*n,d=n>=10?t*.1:0;o.className='fb ok';o.textContent=`${n} x ${s.options[s.selectedIndex].dataset.n} = RM ${(t-d).toFixed(2)}`+(d?` (Sigma Discount: -RM ${d.toFixed(2)})`:'')};
// 6. Contact form validation (contact)
const f=$('cf');
if(f){const sp=f.elements.spice,sv=$('sv');sp.oninput=()=>sv.textContent=sp.value;f.elements.date.min=new Date().toISOString().split('T')[0];
f.addEventListener('reset',()=>setTimeout(()=>sv.textContent=5));
f.addEventListener('submit',e=>{e.preventDefault();const g=n=>f.elements[n].value.trim(),fb=$('fb');
if(!g('person')||!/^\S+@\S+\.\S+$/.test(g('email'))||!g('date')||!g('time')||!g('msg')){fb.className='fb bad';fb.textContent='ERROR 404: required fields not found. Add a name, valid email, date, time and message.';return}
if(g('pin')&&g('pin').length<4){fb.className='fb bad';fb.textContent='PIN too short. Use at least 4 characters or leave it blank.';return}
const ad=[...f.querySelectorAll('[name=add]:checked')].map(x=>x.value).join(', ')||'none';
fb.className='fb ok';fb.textContent=`Order logged, ${g('person')}! ${f.elements.svc.value} at ${g('outlet')} on ${g('date')} at ${g('time')}. Spice ${sp.value}/10. Extras: ${ad}. We will email ${g('email')} faster than dial-up.`;f.reset()})}
});
