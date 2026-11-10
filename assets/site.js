const menuButton=document.querySelector('.menu-toggle'),nav=document.querySelector('#main-nav');
function closeMenu(returnFocus=false){nav?.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');if(returnFocus)menuButton?.focus()}
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';nav.classList.toggle('open',!open);menuButton.setAttribute('aria-expanded',String(!open))});
nav?.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menuButton?.getAttribute('aria-expanded')==='true')closeMenu(true)});
document.addEventListener('click',e=>{if(!e.target.closest('.header'))closeMenu()});
window.addEventListener('pageshow',()=>closeMenu());
matchMedia('(min-width:901px)').addEventListener('change',()=>closeMenu());
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
if('IntersectionObserver'in window&&!reduced.matches){const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})},{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}
const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
document.querySelector('#area-search')?.addEventListener('input',e=>{const q=normalize(e.target.value.trim());let count=0;document.querySelectorAll('[data-location]').forEach(el=>{el.hidden=!normalize(el.dataset.location).includes(q);if(!el.hidden)count++});document.querySelectorAll('.location-group').forEach(el=>{el.hidden=![...el.querySelectorAll('[data-location]')].some(li=>!li.hidden)});document.querySelector('#area-status').textContent=count?`${count} ${count===1?'região encontrada':'regiões encontradas'}.`:'Nenhuma região encontrada. Consulte seu CEP pelo WhatsApp.'});
document.querySelector('#quote-form')?.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.currentTarget),service=String(data.get('service')||''),area=String(data.get('area')||'').trim(),message=String(data.get('message')||'').trim();let text=`Olá! Gostaria de um orçamento na Lavanderia Inovata.\nServiço: ${service}`;if(area)text+=`\nBairro ou CEP: ${area}`;if(message)text+=`\nPeças e observações: ${message}`;const link=`https://wa.me/5511921691307?text=${encodeURIComponent(text)}`;e.currentTarget.querySelector('.form-status').textContent='Abrindo o WhatsApp para você revisar e enviar a mensagem.';window.location.assign(link)});
document.querySelector('#quote-form button[type=submit]')?.removeAttribute('disabled');
document.querySelectorAll('[data-share]').forEach(button=>button.addEventListener('click',async()=>{const url=document.querySelector('link[rel=canonical]')?.href||location.href;const statuses=document.querySelectorAll('.share-status');const report=text=>statuses.forEach(s=>s.textContent=text);try{if(navigator.share){await navigator.share({title:document.title,url});report('Compartilhamento concluído.')}else if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(url);report('Link copiado.');button.textContent='Link copiado ✓';setTimeout(()=>button.textContent='Compartilhar esta página ↗',2500)}else{report('Copie o endereço desta página na barra do navegador.');button.textContent='Copie o endereço no navegador'}}catch(error){if(error.name!=='AbortError'){report('Não foi possível compartilhar. Copie o endereço na barra do navegador.')}}}));
const progress=document.querySelector('.reading-progress');if(progress){let waiting=false;const update=()=>{const available=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${available>0?Math.min(100,scrollY/available*100):0}%`;waiting=false};addEventListener('scroll',()=>{if(!waiting){waiting=true;requestAnimationFrame(update)}},{passive:true});addEventListener('resize',update);update()}

// Native semantic dialogs keep background content inert and trap focus.
document.querySelectorAll('[data-comparison-open]').forEach(trigger=>{
 const dialog=document.querySelector('#'+trigger.dataset.comparisonOpen);
 if(!dialog||typeof dialog.showModal!=='function')return;
 trigger.setAttribute('role','button');trigger.setAttribute('aria-haspopup','dialog');trigger.setAttribute('aria-controls',dialog.id);
 trigger.addEventListener('click',event=>{
  event.preventDefault();dialog.returnFocus=trigger;
  dialog.querySelectorAll('[data-srcset]').forEach(source=>{source.srcset=source.dataset.srcset});
  dialog.querySelectorAll('[data-src]').forEach(img=>{img.src=img.dataset.src});
  dialog.showModal();dialog.scrollTop=0;document.documentElement.classList.add('has-image-dialog');dialog.querySelector('[data-dialog-close]').focus({preventScroll:true});
 });
 trigger.addEventListener('keydown',event=>{if(event.key===' '){event.preventDefault();trigger.click()}});
});
document.querySelectorAll('.comparison-dialog').forEach(dialog=>{
 dialog.querySelector('[data-dialog-close]').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('keydown',event=>{if(event.key!=='Tab')return;const controls=[...dialog.querySelectorAll('button:not([disabled]),a[href]')],first=controls[0],last=controls[controls.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}});
 dialog.addEventListener('click',event=>{const r=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom))dialog.close()});
 dialog.addEventListener('close',()=>{document.documentElement.classList.remove('has-image-dialog');if(dialog.returnFocus?.isConnected)dialog.returnFocus.focus({preventScroll:true})});
});
