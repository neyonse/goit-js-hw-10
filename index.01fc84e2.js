!function(){var e=document.querySelector(".breed-select"),t=document.querySelector(".cat-info");fetch("https://api.thecatapi.com/v1/breeds").then((function(e){if(!e.ok)throw new Error("Ми не змогли знайти де лежать котики",e.status);return e.json()})).then((function(t){return function(t){t.forEach((function(t){var n=document.createElement("option");n.textContent=t.name,n.value=t.id,e.appendChild(n)}))}(t)})),e.addEventListener("change",(function(e){var n,r=e.target.options[e.target.selectedIndex];(n=r.value,fetch("".concat("https://api.thecatapi.com/v1/images/search","?breed_ids=").concat(n,"&api_key=").concat("live_puUKGgmlnUJcfdimVBdpD4oNPThpUOR4QA0rTiTbaq8It42r4X3vg0EFqQtB0Dze")).then((function(e){if(!e.ok)throw new Error("",e.status);return e.json()}))).then((function(e){return t=e,selectedCatData={breed:t[0].breeds[0].name,img:t[0].url,imgW:t[0].width,imgH:t[0].height,descr:t[0].breeds[0].description,temperament:t[0].breeds[0].temperament};var t})).then((function(e){return r=(n=e).breed,c=n.img,a=n.imgW,i=n.imgH,o=n.descr,s=n.temperament,void(t.innerHTML="\n  <img src=".concat(c," width=").concat(a," height=").concat(i,">\n  <div class='cat-info-wrap'>\n  <h2>").concat(r,"</h2>\n  <p><span>Description:</span> ").concat(o,"</p>\n  <p><span>Temperament:</span> ").concat(s,"</p>\n  </div>\n  "));var n,r,c,a,i,o,s}))}))}();
//# sourceMappingURL=index.01fc84e2.js.map
