(function(){
if(window.top!==window.self&&location.hostname==="malohe-collection.fr"){document.documentElement.style.visibility="hidden";try{window.top.location.replace(location.href)}catch(e){}}
var K='malohe-cart',cart={};try{cart=JSON.parse(localStorage.getItem(K)||'{}')}catch(e){cart={}}
function n(){var t=0;for(var r in cart)t+=cart[r].q||0;return t}
function upd(){var e=document.getElementById('nsel');if(e)e.textContent=n()}
function eur(x){return x.toFixed(2).replace('.',',')+'\u00a0€'}
upd();
var D=document.getElementById('pd');if(!D)return;D=JSON.parse(D.textContent);
var form=document.getElementById('buy'),pr=document.getElementById('price'),img=document.getElementById('pimg'),btn=document.getElementById('add'),ok=document.getElementById('done'),qv=document.getElementById('qv'),q=1;
function cur(){var i=form.querySelector('input[name=v]:checked');return i?D.v[+i.value]:null}
function show(){var v=cur();if(!v)return;pr.textContent=v.pt;if(v.src&&img&&img.getAttribute('src')!==v.src)img.src=v.src;qv.textContent=q;btn.disabled=!!v.x;btn.textContent=v.x?'Épuisé':(q>1?'Ajouter · '+eur(v.p*q):'Ajouter à ma sélection')}
form.addEventListener('change',function(){ok.classList.remove('on');show()});
document.getElementById('qm').onclick=function(){if(q>1)q--;show()};
document.getElementById('qp').onclick=function(){if(q<20)q++;show()};
show();
form.addEventListener('submit',function(e){e.preventDefault();var v=cur();if(!v||v.x)return;
 try{cart=JSON.parse(localStorage.getItem(K)||'{}')}catch(x){}
 if(cart[v.r])cart[v.r].q+=q;else cart[v.r]={r:v.r,t:D.t,l:v.l,p:v.p,q:q,im:v.im};
 try{localStorage.setItem(K,JSON.stringify(cart))}catch(x){}
 upd();ok.classList.add('on');ok.querySelector('span').textContent=(q>1?q+' × ':'')+D.t+' ('+v.l+') ajouté'+(q>1?'s':'')+' à votre sélection.';q=1;show();});
})();
