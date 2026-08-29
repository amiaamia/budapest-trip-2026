(()=>{
const Q={
'Wonder Budapest':'Wonder Budapest Kiraly utca Budapest',
'חצרות גוז׳דו':'Gozsdu Udvar Budapest',
'חשמלית 2':'Budapest tram line 2 Danube',
'בית הכנסת הגדול':'Dohany Street Synagogue Budapest',
'קפה ניו-יורק':'New York Cafe Budapest interior',
'Tibidabo':'Tibidabo bakery Budapest',
'פריז אודבר':'Parisi Udvar Budapest interior',
'Easy Rider':'Buda Castle Budapest panorama',
'השוק המרכזי':'Central Market Hall Budapest',
'Rózsavölgyi Csokoládé':'Rozsavolgyi Csokolade Budapest',
'בזיליקת סנט אישטוון':'St Stephen Basilica Budapest interior',
'מוזיאון האתנוגרפיה':'Museum of Ethnography Budapest',
'מוזיאון הפינבול':'Flippermuzeum Budapest Pinball Museum',
'האי מרגריט':'Margaret Island Budapest',
'Mazi Greek Kitchen':'Mazi Greek Kitchen Budapest',
'כיכר החירות':'Liberty Square Budapest Szabadsag ter',
'בית השטרודל':'Elso Pesti Reteshaz Budapest',
'הפרלמנט':'Hungarian Parliament Building Budapest',
'אנדרטת הנעליים':'Shoes on the Danube Bank Budapest',
'ברך הדנובה':'Danube Bend Hungary Visegrad panorama',
'סנטאנדרה':'Szentendre Hungary town',
'כיכר הגיבורים':'Heroes Square Budapest',
'Városliget':'Varosliget Budapest City Park',
'טירת ויידהוניאד':'Vajdahunyad Castle Budapest',
'בית המוזיקה ההונגרי':'House of Music Hungary Budapest',
'שוק האיכרים ב-Szimpla':'Szimpla Kert Budapest interior',
'Twentysix Budapest':'Twentysix Budapest restaurant',
'Cafe Brunch Anker':'Cafe Brunch Budapest Anker',
'Pampas Steakhouse':'Pampas Argentin Steakhouse Budapest',
'Belvárosi Disznótoros':'Belvarosi Disznotoros Budapest',
'Hot Stone Steakhouse':'Hot Stone Steakhouse Budapest'
};
const cache=new Map(),used=new Set();let busy=false,pending=false;
const style=document.createElement('style');style.textContent=`.dynPhoto{position:relative}.dynPhoto img{display:block;width:100%;height:175px;object-fit:cover}.dynCredit{position:absolute;left:7px;bottom:7px;background:#111b;color:#fff!important;font-size:10px;padding:3px 7px;border-radius:999px;max-width:82%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(5px)}.dynPhoto.loading{height:175px;background:linear-gradient(135deg,#e8ded3,#f6f1ea)}`;document.head.appendChild(style);
function text(h=''){const d=document.createElement('div');d.innerHTML=h;return(d.textContent||'').trim()}
async function find(q){
 if(cache.has(q))return cache.get(q);
 try{
  const u='https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrlimit=10&prop=imageinfo&iiprop=url%7Cextmetadata&iiurlwidth=1100&iiextmetadatafilter=Artist%7CLicenseShortName&origin=*&format=json&gsrsearch='+encodeURIComponent(q);
  const r=await fetch(u);if(!r.ok)throw 0;const j=await r.json();
  const pages=Object.values(j.query?.pages||{});
  const list=pages.map(p=>{const i=p.imageinfo?.[0];return i&&{url:i.thumburl||i.url,page:i.descriptionurl||'https://commons.wikimedia.org/',artist:text(i.extmetadata?.Artist?.value||''),lic:i.extmetadata?.LicenseShortName?.value||'Commons'}}).filter(x=>x?.url&&/\.(jpe?g|png|webp)(\?|$)/i.test(x.url));
  cache.set(q,list);return list;
 }catch(e){cache.set(q,[]);return[]}
}
function wrap(photo,title){const w=document.createElement('div');w.className='dynPhoto';const im=document.createElement('img');im.loading='lazy';im.alt=title;im.src=photo.url;w.appendChild(im);const a=document.createElement('a');a.className='dynCredit';a.target='_blank';a.rel='noopener';a.href=photo.page;a.textContent=(photo.artist?photo.artist+' · ':'')+photo.lic;w.appendChild(a);return w}
async function one(el){
 if(el.dataset.photoDone==='1')return;const h=el.querySelector('h3');if(!h)return;const title=h.textContent.trim(),q=Q[title];if(!q)return;
 const old=el.querySelector(':scope > img, :scope > .dynPhoto');let duplicate=false;
 if(old?.tagName==='IMG'){const u=old.currentSrc||old.src;if(u){duplicate=used.has(u);used.add(u)}}
 if(old&&!duplicate){el.dataset.photoDone='1';return}
 const list=await find(q);const photo=list.find(x=>!used.has(x.url))||list[0];if(!photo)return;
 used.add(photo.url);const w=wrap(photo,title);if(old)old.replaceWith(w);else el.insertBefore(w,el.firstChild);el.dataset.photoDone='1';
}
async function run(){if(busy){pending=true;return}busy=true;document.querySelectorAll('.card,.place').forEach(el=>{const im=el.querySelector(':scope > img');if(im?.src)used.add(im.src)});const els=[...document.querySelectorAll('.card,.place')];for(let i=0;i<els.length;i+=6)await Promise.all(els.slice(i,i+6).map(one));busy=false;if(pending){pending=false;run()}}
let timer;new MutationObserver(()=>{clearTimeout(timer);timer=setTimeout(run,180)}).observe(document.body,{childList:true,subtree:true});
setTimeout(run,50);
})();