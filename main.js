
const LG=["ca","es","en","fr","de"],$=q=>document.querySelector(q);
const L={ca:{},es:{},en:{},fr:{},de:{}};
const D=window.__D,L5=["ca","es","en","fr","de"],A5=o=>L5.map(l=>o[l]);
for(const k in D.textos)Object.assign(L[k],D.textos[k]);
D.CODE=D.config.codi;D.SCH=D.config.escola;D.GEO=window.__MAP.GEO;D.G=window.__MAP.G;D.K=D.llocs.map(l=>A5(l.consell));
const A=D.activitats.map(a=>({e:a.e,img:a.img,c:a.categoria,r:a.valoracio,rc:a.valoracions,p:[a.preu,a.preu*2,a.preu*4],n:A5(a.nom),d:A5(a.descripcio)})),REV=D.ressenyes.map(r=>({a:r.activitat,n:r.nom,f:r.pais,s:r.estrelles,t:A5(r.text)}));
const P=D.llocs.map((l,i)=>({e:l.e,n:l.nom,s:l.curt,d:A5(l.descripcio),ap:l.aprox?1:0,xy:[(l.lon-2.445)*6000,(42.178-l.lat)*8182],g:D.G[i],k:D.K[i]}));
const R=[{n:3,i:"☕",k:"r1"},{n:5,i:"🥐",k:"r2"},{n:7,i:"🎁",k:"r3"}];
let s={d:[],m:"",c:{},t:[],l:LG.find(x=>(navigator.language||"").startsWith(x))||"ca"},cur=null,tab=0,tm;
try{Object.assign(s,JSON.parse(localStorage.getItem("pdp")||"{}"))}catch(e){}
s.t=(s.t||[]).filter(k=>k.it);
const sv=()=>{try{localStorage.setItem("pdp",JSON.stringify(s))}catch(e){}},t=k=>L[s.l][k],shf=a=>a.map(x=>[Math.random(),x]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);
const btn=e=>{const x=document.createElement("button");x.className="cd";x.textContent=e;return x};
function sl(v){s.l=v;sv();draw();if(cur!=null)rs()}
function vw(v){["map","rw"].forEach((x,i)=>{$("#"+x).hidden=i!=v;$("#n"+i).className=i==v?"on":""})}
function nx(){const i=P.findIndex((p,i)=>!s.d.includes(i));return i}
function draw(){
$("#lg").value=s.l;document.documentElement.lang=s.l;$("#n0").textContent=t("map");$("#n1").textContent=t("rew");document.querySelectorAll("[data-k]").forEach(e=>e.textContent=t(e.dataset.k));hw();plb();rc();$("#lg2").value=s.l;
$("#pb").style.width=s.d.length/7*100+"%";$("#pt").textContent="👣 "+s.d.length+" / 7 · "+t("scan");
R.forEach(r=>{if(s.d.length>=r.n&&!s.c[r.k]){s.c[r.k]="PRES-"+r.n+"-"+Math.random().toString(36).slice(2,6).toUpperCase();sv()}});
const n=nx(),G=D.GEO;let h=`<svg viewBox="0 0 360 475" preserveAspectRatio="xMidYMid meet" class="${window.__intro?"intro":""}"><svg width="360" height="475" viewBox="0 0 360 475" style="overflow:hidden"><defs><radialGradient id="pv" cx=".5" cy=".5" r=".75"><stop offset="0" stop-color="#f3e5bd"/><stop offset=".7" stop-color="#e3c98f"/><stop offset="1" stop-color="#b98f4f"/></radialGradient><filter id="nz"><feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="3" seed="4"/><feColorMatrix values="0 0 0 0 .36 0 0 0 0 .25 0 0 0 0 .1 0 0 0 .55 -.12"/></filter><filter id="rf"><feTurbulence type="fractalNoise" baseFrequency=".05" numOctaves="2" seed="2" result="t"/><feDisplacementMap in="SourceGraphic" in2="t" scale="3"/></filter><filter id="bl"><feGaussianBlur stdDeviation="9"/></filter></defs><rect width="360" height="475" fill="url(#pv)"/><rect width="360" height="475" filter="url(#nz)" opacity=".5"/>`;
G.nb.forEach(o=>h+=`<path d="${o.d}" class="nb" filter="url(#rf)"/>`);
h+=`<path d="${G.les}" class="ls" filter="url(#rf)"/><path d="${G.les}" class="lo" filter="url(#rf)"/>`;
G.nb.forEach(o=>o.c&&(h+=`<text class="rg2" x="${o.c[0]}" y="${o.c[1]}" text-anchor="middle">${o.n.toUpperCase()}</text>`));
h+=`<ellipse class="cs" cx="80" cy="120" rx="70" ry="26" filter="url(#bl)"/><ellipse class="cs c2" cx="260" cy="330" rx="80" ry="28" filter="url(#bl)"/>`;
const v=P[1].xy,q0=P[4].xy;h+=`<path class="vc" d="M${v[0]+14} ${v[1]-6}l12-22 12 22z"/><path class="vc" d="M${q0[0]+16} ${q0[1]-4}l10-18 10 18zM${q0[0]+30} ${q0[1]-4}l8-13 8 13z"/>`;
h+=`<rect x="5" y="5" width="350" height="465" class="fr" filter="url(#rf)"/><rect x="11" y="11" width="338" height="453" class="fr2"/><g transform="translate(24 30)"><rect width="118" height="40" rx="4" class="ct"/><text class="ctt" x="59" y="19" text-anchor="middle">LES PRESES</text><text class="cts" x="59" y="32" text-anchor="middle">La Garrotxa</text></g>`;
h+=`<g transform="translate(48 424)"><circle r="34" class="cr"/><path class="cs2" d="M0-32L5-5 32 0 5 5 0 32-5 5-32 0-5-5Z"/><path class="nd" d="M0-26L4 0H-4Z"/><text y="-38" text-anchor="middle" class="ctt">N</text></g><g transform="translate(252 446)"><path class="sb" d="M0 0H72.6M0-4V4M36.3-3V3M72.6-4V4"/><text class="cts" y="-8" x="0">0</text><text class="cts" y="-8" x="72.6" text-anchor="end">1 km</text></g>`;
for(let i=0;i<6;i++){const a=P[i].xy,b=P[i+1].xy,mx=(a[0]+b[0])/2+(b[1]-a[1])*.15,my=(a[1]+b[1])/2-(b[0]-a[0])*.15;h+=`<path id="s${i}" class="sg ${s.d.includes(i)&&s.d.includes(i+1)?"on":""}" d="M${a[0]} ${a[1]}Q${mx} ${my} ${b[0]} ${b[1]}"/>`}
P.forEach((p,i)=>{const d=s.d.includes(i);h+=`<g transform="translate(${p.xy[0]} ${p.xy[1]})" onclick="op(${i})" class="mk ${d?"dn":""} ${p.ap?"ap":""}"><g class="mi" style="--i:${i}">${i==n?'<circle class="pl" r="19"/>':""}<circle class="ws" r="14"/><circle class="wr" r="10"/><text class="wn" y="4.5" text-anchor="middle">${d?"✓":i+1}</text><text class="lb" y="30" text-anchor="middle">${p.s}</text></g></g>`});
const q=P[n<0?6:n].xy;h+=`<text class="av" id="av" x="${q[0]-12}" y="${q[1]-26}">${n<0?"🏆":s.m||"🚶"}</text></svg></svg>`;$("#map").innerHTML=h;
if(window.__intro){window.__intro=0;if(window.gsap){const av=$("#av");if(n>0){const ps=$("#s"+(n-1)),L=ps.getTotalLength(),o={t:0},mv=()=>{const z=ps.getPointAtLength(L*o.t);av.setAttribute("x",z.x-12);av.setAttribute("y",z.y-26)};mv();gsap.to(o,{t:1,duration:2.4,delay:.9,ease:"power1.inOut",onUpdate:mv})}
document.querySelectorAll(".sg.on").forEach(p=>{const L=p.getTotalLength();gsap.fromTo(p,{strokeDasharray:L,strokeDashoffset:L},{strokeDashoffset:0,duration:1.6,delay:.4,ease:"power2.out",onComplete:()=>p.style.strokeDasharray="none"})})}}
$("#rw").innerHTML=`<h2>🎫 ${t("pass")}</h2><div class="st">${P.map((p,i)=>`<span class="${s.d.includes(i)?"on":""}">${s.d.includes(i)?p.e:i+1}</span>`).join("")}</div>`+R.map(r=>{const u=s.d.length>=r.n;return `<div class="rc ${u?"u":""}"><div class="ri">${u?r.i:"🔒"}</div><div><b>${t(r.k)}</b><br><small>${u?t("unl")+" · "+t("code")+"<br><code>"+s.c[r.k]+"</code>":t("need").replace("{n}",r.n-s.d.length)}</small></div></div>`}).join("")+`<p class="nt">${t("ex")}</p><button class="tg" style="width:100%" onclick="if(confirm(t('rgc')))rg()">${t("rg")}</button>`}
function op(i){cur=i;tab=0;rs();$("#sh").classList.add("open");$("#vl").classList.add("on")}
function cl(){clearInterval(tm);cur=null;$("#sh").classList.remove("open");$("#vl").classList.remove("on")}
function tb(v){tab=v;rs()}
function rs(){const p=P[cur],g=p.g;clearInterval(tm);
$("#sh").innerHTML=`<div class="sh"><b>${p.e} ${cur+1}. ${p.n}</b><button onclick="cl()">✕</button></div><div class="tabs"><button class="${tab?"":"on"}" onclick="tb(0)">${t("info")}</button><button class="${tab?"on":""}" onclick="tb(1)">${t("ch")}</button></div><div id="sb"></div>`;
const b=$("#sb");
if(!tab){b.innerHTML=(s.d.includes(cur)?'<span class="bdg">✓ 👣</span><br>':"")+`<p style="line-height:1.5;margin-top:0">${p.d[LG.indexOf(s.l)]}</p><p class="tip">💡 ${p.k[li()]}</p>${p.ap?`<p style="font-size:12px;color:var(--mut)">≈ ${t("ap")}</p>`:""}<button class="pb" onclick="tb(1)">▶ ${t("go")}</button>`}
else{b.innerHTML=`<p style="margin:0">${g.t=="mem"?t("hm"):g.t=="ord"?t("ho"):g.t=="cho"?t("hc"):g.t=="srt"?t("hs"):t("tap")+" "+g.g+" "+t("avoid")+" "+g.b}</p><div id="sc"></div><div class="grid" id="gm"></div>`;G()}}
function G(){const g=P[cur].g,b=$("#gm");b.innerHTML="";b.className="grid "+(g.t=="col"?"c3":"c4");clearInterval(tm);
if(g.t=="mem"){let o=[],f=0;shf([...g.a,...g.a]).forEach(e=>{const x=btn("❔");x.onclick=()=>{if(x.disabled||o.length>1||o.includes(x))return;x.textContent=e;x.classList.add("up");o.push(x);if(o.length>1){if(o[0].textContent==e){o.forEach(y=>{y.disabled=true;y.className="cd ok"});o=[];++f==g.a.length&&win()}else setTimeout(()=>{o.forEach(y=>{y.textContent="❔";y.className="cd"});o=[]},700)}};b.append(x)})}
else if(g.t=="cho"){let n=0;const nx2=()=>{b.className="grid c3";b.innerHTML="";if(n==g.r.length){win();return}const r=g.r[n];shf([[r[0],1],[r[1],0]]).forEach(x=>{const e=btn(x[0]);e.style.fontSize="48px";e.onclick=()=>{if(x[1]){n++;e.className="cd ok";setTimeout(nx2,350)}else{e.classList.add("no");setTimeout(()=>e.classList.remove("no"),400)}};b.append(e)});$("#sc").textContent=(n+1)+" / "+g.r.length};nx2()}
else if(g.t=="srt"){let it=null,n=0;const I=[["🍌","o"],["📰","p"],["🍾","v"],["🥤","e"]],Bn=[["🟤","o"],["🔵","p"],["🟢","v"],["🟡","e"]];b.className="";b.innerHTML='<div class="grid c4" id="si"></div><div class="grid c4" id="sb2" style="margin-top:14px"></div>';shf(I).forEach(x=>{const e=btn(x[0]);e.onclick=()=>{if(e.disabled)return;if(it)it.classList.remove("up");it=e;e.classList.add("up");e.dataset.k=x[1]};$("#si").append(e)});Bn.forEach(x=>{const e=btn(x[0]);e.onclick=()=>{if(!it)return;if(it.dataset.k==x[1]){it.disabled=true;it.className="cd ok";it=null;++n==4&&win()}else{e.classList.add("no");setTimeout(()=>e.classList.remove("no"),400)}};$("#sb2").append(e)})}
else if(g.t=="ord"){let n=0;shf([...g.a]).forEach(e=>{const x=btn(e);x.onclick=()=>{if(e==g.a[n]){x.disabled=true;x.className="cd ok";++n==g.a.length&&win()}else{x.classList.add("no");setTimeout(()=>x.classList.remove("no"),400)}};b.append(x)})}
else{let sc=0,T=14;const up=()=>$("#sc").textContent="⭐ "+sc+" / 7   ⏱ "+T,cs=[...Array(9)].map(()=>{const x=btn("·");x.onclick=()=>{if(x.dataset.v=="g"){sc++;x.className="cd ok"}else if(x.dataset.v=="b"){sc=Math.max(0,sc-1);x.className="cd no"}x.dataset.v="";x.textContent="·";up()};b.append(x);return x});up();
tm=setInterval(()=>{T--;cs.forEach(x=>{x.dataset.v="";x.textContent="·";x.className="cd"});for(let k=0;k<2;k++){const x=cs[Math.random()*9|0],ok=Math.random()<.65;x.dataset.v=ok?"g":"b";x.textContent=ok?g.g:g.b}up();if(sc>=7){clearInterval(tm);win()}else if(T<=0){clearInterval(tm);lose()}},900)}}
function win(){if(!s.d.includes(cur)){s.d.push(cur);sv()}conf();$("#sc").textContent="";$("#gm").className="";$("#gm").innerHTML=`<div class="res">🎉<br>${t("ok")}</div><p class="tip">💡 ${P[cur].k[li()]}</p>`;draw()}
function lose(){$("#gm").className="";$("#gm").innerHTML=`<div class="res">🌧️ ${t("ko")}<br><br><button class="pb" onclick="G()">${t("again")}</button></div>`}
function conf(){for(let i=0;i<28;i++){const e=document.createElement("span");e.className="cf";e.textContent=["👣","🌿","⭐","🎉"][i%4];e.style.cssText=`left:${Math.random()*100}%;animation-delay:${Math.random()*.6}s;font-size:${16+Math.random()*16}px`;document.body.append(e);setTimeout(()=>e.remove(),2800)}}
function hh(){const m=/^#p([1-7])$/.exec(location.hash);if(m){if(!hasQR()){lock();return}gm(1);op(m[1]-1)}}
function md(){const o=$("#md");if(s.m){o.hidden=true;return}o.hidden=false;o.innerHTML=`<div><h2 style="margin-top:0">${t("how")}</h2><button onclick="sm('🚶')">🚶</button><button onclick="sm('🚲')">🚲</button></div>`}
function sm(v){s.m=v;sv();md();draw()}


const li=()=>LG.indexOf(s.l),DISC=D.config.descomptes.map(x=>x/100);let b={sel:[1,0,0,0,0,0],n:2,dt:"",tot:0};
function gm(v){if(v&&!hasQR()){lock();return}document.body.classList.toggle("gm",!!v);if(v){window.__intro=1;md();draw()}else{cl();window.ScrollTrigger&&setTimeout(()=>ScrollTrigger.refresh(),60)}}
let sid=0;const stars=r=>{let o="";for(let i=0;i<5;i++){const f=Math.max(0,Math.min(1,r-i)),n="g"+(sid++);o+=`<svg class="sr" viewBox="0 0 24 24"><defs><linearGradient id="${n}"><stop offset="${f}" stop-color="#2a8a8a"/><stop offset="${f}" stop-color="#cfe3e3"/></linearGradient></defs><path fill="url(#${n})" d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z"/></svg>`}return o};
let ACC=false;const hasQR=()=>ACC;
function plb(){document.querySelectorAll("[data-k=play]").forEach(e=>e.textContent=hasQR()?t("play"):"🔒 "+t("play").replace("🎮 ",""))}
function lock(){$("#sh").innerHTML=`<div class="sh"><b>🔒 ${t("lk1")}</b><button onclick="cl()">✕</button></div><p style="line-height:1.5">${t("lk2").replace("{n}",A[1].n[li()])}</p><button class="bt2 w" onclick="unlock()">${t("lk3")}</button><p class="nt" style="margin:18px 0 6px">${t("cd1")}</p><div class="cdr"><input id="cdi" type="text" autocomplete="off" placeholder="${t("cd2")}" onkeydown="if(event.key==='Enter')acc()"><button class="bt2" onclick="acc()">${t("cd3")}</button></div><p class="nt" id="cde"></p>`;$("#sh").classList.add("open");$("#vl").classList.add("on")}
function acc(){const v=($("#cdi").value||"").trim().toUpperCase(),dm=v&&v===String(D.CODE).toUpperCase(),tk=v&&s.t.some(k=>k.it.includes(1)&&String(k.c).toUpperCase()===v);if(dm||tk){if(dm){s.d=[];s.c={};sv()}ACC=true;cl();plb();rtk();gm(1)}else $("#cde").textContent=t("cd4")}
function rg(){s.d=[];s.c={};sv();draw()}
function unlock(){cl();b.sel[1]=1;rcards();rb();$("#pass").scrollIntoView({behavior:"smooth"})}
const pe=n=>n+" "+t(n==1?"pe1":"pe2");
function pn(d,v){b.n=Math.max(1,Math.min(99,v!=null?(+v||1):b.n+d));rb()}
let E={n:28,dt:"",nm:""};
function en(d,v){const S=D.SCH;E.n=Math.max(S.min,Math.min(S.max,v!=null?(+v||S.min):E.n+d));resc()}
function resc(){const od=$("#edt")?$("#edt").value:E.dt,on=$("#enm")?$("#enm").value:E.nm;E.dt=od;E.nm=on;const S=D.SCH,full=A.reduce((q,a)=>q+a.p[0],0),tot=E.n*S.pp,norm=E.n*full,sp=Math.round((1-S.pp/full)*100);
$("#esc").innerHTML=`<div class="esc"><div class="ei"><img src="${D.SCH.img||A[5].img}" alt=""><span class="eb">−${sp} %</span></div><div><p class="ed">${t("sc2").replace("{f}",D.SCH.free)}</p><ul class="el">${A.map(a=>`<li>${a.n[li()]}</li>`).join("")}</ul></div><aside class="bs"><div class="stp"><span>${t("scs")}</span><button onclick="en(-1)" aria-label="−">−</button><input id="en" type="number" min="${S.min}" max="${S.max}" value="${E.n}" onchange="en(0,this.value)"><button onclick="en(1)" aria-label="+">+</button></div><p class="nt" style="margin:0 0 10px;text-align:left">${S.pp} € ${t("scp")}</p><input id="enm" class="txi" type="text" placeholder="${t("scn")}" value="${(on||"").replace(/"/g,"&quot;")}"><p style="margin:6px 0">${t("dt")}</p><input type="date" id="edt" min="${new Date().toISOString().slice(0,10)}" value="${od||""}"><div class="sum"><span>${t("scv")}: <s>${fm(norm)}</s></span><span class="sv">${t("scx")}: ${fm(norm-tot)}</span><b class="tt">${fm(tot)}</b></div><button class="bt2 w" onclick="epy()">${t("scb")}</button><p class="nt">${t("demo")} · ${t("ex2")}</p></aside></div>`}
function epy(){const d=$("#edt").value;if(!d){$("#edt").focus();return}E.dt=d;E.nm=$("#enm").value;
$("#sh").innerHTML=`<div class="sh"><b>${t("pm")}</b><button onclick="cl()">✕</button></div><p>${E.nm?E.nm.replace(/</g,"&lt;")+"<br>":""}${t("sc1")} · ${E.n} × ${D.SCH.pp} € · ${d}<br><b>${fm(E.n*D.SCH.pp)}</b></p><div class="grid c3"><button class="cd pk" onclick="ebk()">💳</button><button class="cd pk" onclick="ebk()">📲 Bizum</button><button class="cd pk" onclick="ebk()">🍎 Pay</button></div><p class="nt">${t("demo")}</p>`;$("#sh").classList.add("open");$("#vl").classList.add("on")}
function ebk(){const k={it:[0,1,2,3,4,5],n:E.n,dt:E.dt,tot:E.n*D.SCH.pp,sc:E.nm||"—",c:"ESC-"+Math.random().toString(36).slice(2,7).toUpperCase()};s.t.push(k);ACC=true;sv();rtk();plb();conf();
$("#sh").innerHTML=`<div class="sh"><b>🎟️ ${t("sc1")}</b><button onclick="cl()">✕</button></div><div class="res">🎉<br><code>${k.c}</code><br><small>${k.sc} · ${k.n} · ${k.dt} · ${fm(k.tot)}</small></div><button class="bt2 w" onclick="cl();gm(1)">${t("play")}</button>`}
const fm=v=>v.toFixed(2).replace(".",",")+" €";let cat=0,cm=0;const CB=[[0,1],[0,5],[2,5],[3,2]];
function hw(){const h=$(".hero h1");h.innerHTML=t("h1").split(" ").map(w=>`<span class="wo"><span class="hw">${w}</span></span>`).join(" ")}
function rc(){rcards();rside();rb();rrev();rtk();rmq();rstat();resc()}
function rmq(){const w=[t("v1"),t("v2"),t("v3")].concat(A.map(a=>a.n[li()])).join("  ✦  ")+"  ✦  ";$("#mt").innerHTML=`<span>${w}</span><span>${w}</span>`}
function rstat(){$("#stt").innerHTML=[[7,"st1"],[6,"st2"],[5,"st3"],[25,"st4"]].map(x=>`<div><b data-c="${x[0]}">${x[0]}</b><span>${t(x[1])}</span></div>`).join("")}
function rcards(){$("#chips").innerHTML=[0,1,2,3,4].map(k=>`<button class="${k==cat?"on":""}" onclick="cat=${k};rcards()">${t("c"+k)}</button>`).join("");
$("#grid").innerHTML=A.map((a,i)=>[a,i]).filter(x=>!cat||x[0].c==cat).map(([a,i])=>`<article class="ac" data-i="${i}"><div class="im"><img src="${a.img}" alt="${a.n[li()]}" loading="lazy"></div><h3>${a.n[li()]}</h3><div class="rt">${stars(a.r)}<span>${a.r.toFixed(1)} (${a.rc})</span></div><p>${a.d[li()]}</p><div class="pr2"><span>${t("ind")}: <b>${a.p[0]} €</b></span><i class="ch">${t("inc")}</i></div><button class="tg ${b.sel[i]?"on":""}" onclick="tg(${i})">${b.sel[i]?"✓ "+t("added"):"+ "+t("add")}</button></article>`).join("");
if(window.gsap)gsap.from("#grid .ac",{y:36,opacity:0,stagger:.09,duration:.7,ease:"power3.out",clearProps:"all"})}
function rside(){const m=A.map(a=>a.p[0]).sort((x,y)=>x-y),f=Math.round((m[0]+m[1])*.9);
$("#sbox").innerHTML=`<p>${t("sbox")}</p><div class="fr">${t("from")} <b>${f} €</b> ${t("pp")}</div><small>${t("sbox2")}</small><br><a class="bt2" href="#pass">${t("cta")}</a>`;
const c=CB[cm];$("#cmb").innerHTML=`<h3>${t("cmb")}</h3><p>${t("cmb2")}</p><div class="pol">${c.map((i,k)=>`<figure style="--r:${k?6:-6}deg"><img src="${A[i].img}" alt=""><figcaption>${A[i].n[li()]}</figcaption></figure>`).join("")}</div><button class="bt2 w" onclick="cm=(cm+1)%4;rside();window.gsap&&gsap.from('.pol figure',{scale:.6,rotate:30,opacity:0,stagger:.12,duration:.7,ease:'back.out(1.6)'})">${t("cmbb")}</button>`}
function tg(i){b.sel[i]=b.sel[i]?0:1;document.querySelectorAll(".tg").forEach(x=>{const k=+x.closest(".ac").dataset.i;x.className="tg"+(b.sel[k]?" on":"");x.textContent=b.sel[k]?"✓ "+t("added"):"+ "+t("add")});rb()}
function num(e,v){const o={v:b.sh||0};b.sh=v;if(!window.gsap){e.textContent=fm(v);return}gsap.to(o,{v,duration:.7,ease:"power2.out",onUpdate:()=>e.textContent=fm(o.v)})}
function rb(){const od=$("#dt")?$("#dt").value:b.dt;b.dt=od;
const n=b.sel.filter(x=>x).length,sub=A.reduce((q,a,i)=>q+(b.sel[i]?a.p[0]*b.n:0),0),pc=DISC[n],tot=Math.round(sub*(1-pc)*100)/100;b.tot=tot;
$("#bld").innerHTML=`<div><div class="stp"><span>${t("wo")}</span><button onclick="pn(-1)" aria-label="−">−</button><input id="pn" type="number" min="1" max="99" value="${b.n}" onchange="pn(0,this.value)"><button onclick="pn(1)" aria-label="+">+</button></div>${A.map((a,i)=>`<label class="row"><img src="${a.img}" alt=""><span>${a.n[li()]}</span><b>${a.p[0]*b.n} €</b><input type="checkbox" ${b.sel[i]?"checked":""} onchange="tg(${i})"></label>`).join("")}</div><aside class="bs"><div class="dbar"><i style="width:${n/A.length*100}%"></i></div><p class="tiers">${t("tiers")}</p><div class="sum"><span>${t("sub")}: ${fm(sub)}</span><span class="sv">${t("dis")}: −${Math.round(pc*100)} %</span><b class="tt" id="tot"></b></div><p>${t("dt")}</p><input type="date" id="dt" min="${new Date().toISOString().slice(0,10)}" value="${od||""}"><button class="bt2 w" ${n?"":"disabled"} onclick="py()">${t("pay")}</button><p class="nt">${t("demo")} · ${t("ex2")}</p></aside>`;num($("#tot"),tot)}
function go(){b.dt=$("#sd").value||b.dt;b.n=Math.max(1,Math.min(99,+$("#sw").value||2));rb();$("#pass").scrollIntoView({behavior:"smooth"})}
function sc2(d){$("#rvs").scrollBy({left:d*360,behavior:"smooth"})}
function rrev(){$("#rvs").innerHTML=REV.map(r=>`<figure class="rv2"><div class="rt">${stars(r.s)}</div><blockquote>“${r.t[li()]}”</blockquote><figcaption>${r.n} ${r.f} · ${A[r.a].n[li()]}<br><small>${t("rev")}</small></figcaption></figure>`).join("")}
function rtk(){$("#tks").innerHTML=(s.t.length||ACC)?s.t.map(k=>`<div class="rc u"><div class="ri">🎟️</div><div><b>${k.sc?t("sc1"):k.it.map(i=>A[i].n[li()]).join(" · ")}</b><br><small>${k.sc?k.sc+" · ":""}${k.sc?k.n+" "+t("sc3").toLowerCase()+" + "+D.SCH.free+" "+t("sc8"):pe(k.n||[1,2,4][k.pk])} · ${k.dt} · ${k.tot} €<br><code>${k.c}</code></small></div></div>`).join("")+`<button class="tg" onclick="rst()">${t("rs")}</button>`:`<p class="nt">${t("nt")}</p>`}
function rst(){s.t=[];s.d=[];s.c={};ACC=false;sv();rtk();plb()}
function fx(){const g=window.gsap;if(!g||!window.ScrollTrigger)return;g.registerPlugin(ScrollTrigger);document.documentElement.classList.add("js");
const tl=g.timeline({defaults:{ease:"power3.out"},paused:true});window.__hero=tl;setTimeout(()=>tl.play(),9000);
tl.from(".hs.l",{x:-140,opacity:0,duration:1.2}).from(".hs.r",{x:140,opacity:0,duration:1.2},0).from(".hc",{scale:.9,opacity:0,duration:1.1},0).from(".gl",{y:60,opacity:0,duration:.9},.35).from(".hw",{yPercent:115,stagger:.07,duration:.8},.55).from(".bdg",{scale:0,rotate:-50,duration:.8,ease:"back.out(2.2)"},1);
g.to(".bdg",{y:-5,rotate:-1,repeat:-1,yoyo:true,duration:1.8,ease:"sine.inOut",delay:2});
const sr={trigger:".hero",start:"top top",end:"bottom top",scrub:true};
g.to(".hc img",{yPercent:14,scale:1.15,scrollTrigger:sr});g.to(".hs",{yPercent:-12,scrollTrigger:sr});
ScrollTrigger.batch(".rv",{start:"top 90%",once:true,onEnter:e=>g.to(e,{opacity:1,y:0,duration:.9,stagger:.12,ease:"power3.out"})});
ScrollTrigger.create({start:0,end:"max",onUpdate:s=>document.body.classList.toggle("sc",s.scroll()>40)});
g.to("#pg",{scaleX:1,ease:"none",scrollTrigger:{start:0,end:"max",scrub:.2}});
ScrollTrigger.create({trigger:"#stt",start:"top 88%",once:true,onEnter:()=>document.querySelectorAll("#stt b").forEach(e=>g.fromTo(e,{textContent:0},{textContent:+e.dataset.c,duration:1.8,ease:"power2.out",snap:{textContent:1}}))});
g.from(".qr img",{clipPath:"inset(0 0 0 100%)",duration:1.4,ease:"power4.inOut",scrollTrigger:{trigger:".qr",start:"top 78%",once:true}});
g.fromTo(".qr img",{scale:1.18},{scale:1,ease:"none",scrollTrigger:{trigger:".qr",scrub:true,start:"top bottom",end:"bottom top"}});
const bk=$("#bk");for(let i=0;i<10;i++){const d=document.createElement("i"),z=24+Math.random()*56;d.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;width:${z}px;height:${z}px`;bk.append(d);g.to(d,{x:"random(-40,40)",y:"random(-50,50)",opacity:"random(.1,.55)",duration:"random(3,6)",repeat:-1,yoyo:true,ease:"sine.inOut"})}
const cu=$("#cur");if(matchMedia("(hover:hover)").matches){const xq=g.quickTo(cu,"x",{duration:.25,ease:"power3"}),yq=g.quickTo(cu,"y",{duration:.25,ease:"power3"});addEventListener("pointermove",e=>{cu.style.opacity=1;xq(e.clientX);yq(e.clientY)});document.addEventListener("pointerover",e=>cu.classList.toggle("h",!!e.target.closest("a,button,.ac,.row,label,select,input,.mk")))}else cu.remove();
let mg=null;document.addEventListener("pointermove",e=>{const b=e.target.closest(".bt2,.go");if(b){const r=b.getBoundingClientRect();mg=b;g.to(b,{x:(e.clientX-r.left-r.width/2)*.25,y:(e.clientY-r.top-r.height/2)*.35,duration:.3})}else if(mg){g.to(mg,{x:0,y:0,duration:.7,ease:"elastic.out(1,.4)"});mg=null}});
setTimeout(()=>g.set(".rv",{opacity:1,y:0}),6000)}
function py(){const d=$("#dt").value;if(!d){$("#dt").focus();return}b.dt=d;
$("#sh").innerHTML=`<div class="sh"><b>${t("pm")}</b><button onclick="cl()">✕</button></div><p>${A.filter((a,i)=>b.sel[i]).map(a=>a.e+" "+a.n[li()]).join("<br>")}<br>${pe(b.n)} · ${d}<br><b>${b.tot} €</b></p><div class="grid c3"><button class="cd pk" onclick="bk()">💳</button><button class="cd pk" onclick="bk()">📲 Bizum</button><button class="cd pk" onclick="bk()">🍎 Pay</button></div><p class="nt">${t("demo")}</p>`;$("#sh").classList.add("open");$("#vl").classList.add("on")}
function bk(){const k={it:b.sel.map((x,i)=>x?i:-1).filter(i=>i>=0),n:b.n,dt:b.dt,tot:b.tot,c:"PRES-"+Math.random().toString(36).slice(2,7).toUpperCase()};s.t.push(k);if(k.it.includes(1))ACC=true;sv();rb();rtk();conf();
$("#sh").innerHTML=`<div class="sh"><b>🎟️ ${t("tk")}</b><button onclick="cl()">✕</button></div><div class="res">🎉<br><code>${k.c}</code><br><small>${pe(k.n||[1,2,4][k.pk])} · ${k.dt} · ${k.tot} €</small></div>${k.it.includes(1)?`<button class="bt2 w" onclick="cl();gm(1)">${t("play")}</button>`:""}`;plb()}
addEventListener("hashchange",hh);$("#sd").min=new Date().toISOString().slice(0,10);draw();hh();fx();
$("#grid").addEventListener("pointermove",e=>{const c=e.target.closest(".ac");if(!c||e.pointerType=="touch")return;const q=c.getBoundingClientRect(),x=(e.clientX-q.left)/q.width-.5,y=(e.clientY-q.top)/q.height-.5;c.style.transform=`perspective(700px) rotateY(${x*8}deg) rotateX(${-y*8}deg)`});
$("#grid").addEventListener("pointerout",e=>{const c=e.target.closest(".ac");if(c)c.style.transform=""});
if("serviceWorker" in navigator&&location.protocol.indexOf("http")==0)navigator.serviceWorker.register("sw.js").catch(()=>{});

function pre(){const p=$("#pre");if(!p)return;if(window.L&&t("h1"))$("#pi").textContent=t("h1");const bar=$("#pb2");let v=0;
const tick=setInterval(()=>{v+=(90-v)*.06;bar.style.width=v+"%"},60);
const done=()=>{clearInterval(tick);bar.style.width="100%";setTimeout(()=>{p.classList.add("out");document.body.classList.remove("is-loading");window.__hero&&window.__hero.play();setTimeout(()=>p.remove(),1000)},350)};
const t0=performance.now(),go=()=>setTimeout(done,Math.max(0,2700-(performance.now()-t0)));
document.readyState==="complete"?go():addEventListener("load",go)}
pre();
