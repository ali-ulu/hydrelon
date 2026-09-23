import {$,$$} from './dom.js';
import {hamb,drawer} from './nav.js';
/* modal */
const modalBg=$('#modalBg');
const openM=()=>modalBg.classList.add('open'),closeM=()=>modalBg.classList.remove('open');
['portalOpen','portalOpen2','portalOpen3'].forEach(id=>{const el=$('#'+id);if(el)el.addEventListener('click',e=>{e.preventDefault();hamb.classList.remove('open');drawer.classList.remove('open');openM();});});
$('#modalClose').addEventListener('click',closeM);
modalBg.addEventListener('click',e=>{if(e.target===modalBg)closeM();});
$('#portalForm').addEventListener('submit',e=>{e.preventDefault();$('#portalOk').classList.add('show');});

/* chat */
const chatBox=$('#chatBox'),chatBody=$('#chatBody');
$('#chatFab').addEventListener('click',()=>chatBox.classList.toggle('open'));
$('#chatClose').addEventListener('click',()=>chatBox.classList.remove('open'));
const REP={
 'Which product suits me?':'Our HYDRELON Water Filter System uses multi-stage filtration for clean, great-tasting water — scroll to Products for the details. 💧',
 'Where are you based?':'HYDRELON is a brand of Hercules Investments LLC, based at 815 Hylton Rd, Pennsauken, NJ 08110, United States.',
 'Become a dealer':'Great — open the Trade Portal from the top of the page and request access. Our team replies within one business day. 🤝'
};
function addB(t,w){const b=document.createElement('div');b.className='bubble '+w;b.textContent=t;chatBody.appendChild(b);chatBody.scrollTop=chatBody.scrollHeight;}
$('#chatQuick').addEventListener('click',e=>{if(e.target.tagName!=='BUTTON')return;const q=e.target.textContent;addB(q,'me');setTimeout(()=>addB(REP[q]||'Please use the contact form and we will get back to you within one business day.','bot'),650);});

/* esc closes overlays */
addEventListener('keydown',e=>{if(e.key==='Escape'){closeM();chatBox.classList.remove('open');hamb.classList.remove('open');drawer.classList.remove('open');}});
