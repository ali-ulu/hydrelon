import {$,$$} from './dom.js';

/* forms */
$('#contactForm').addEventListener('submit',e=>{e.preventDefault();$('#formOk').classList.add('show');});
$('#newsForm').addEventListener('submit',e=>{e.preventDefault();const i=e.target.querySelector('input');i.value='';i.placeholder='✓ Subscribed!';});
