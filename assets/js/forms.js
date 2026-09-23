import {$,$$} from './dom.js';

/* forms */
$('#newsForm').addEventListener('submit',e=>{e.preventDefault();const i=e.target.querySelector('input');i.value='';i.placeholder='✓ Subscribed!';});
