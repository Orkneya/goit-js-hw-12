import{a as b,S as L,i as w}from"./assets/vendor-CMSP9hSB.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const v="48810135-3fc2af65eea4986756bc51882",S="https://pixabay.com/api/?";async function u(n,e){const o=new URLSearchParams({key:v,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:p}),{data:l}=await b(`${S}${o}`);return l}function f(n){const e=n.map(o=>`<li class="gallery-item">
      <a class="gallery-link" href="${o.largeImageURL}">
      <img
        class="gallery-image"
        src="${o.webformatURL}"
        data-source="${o.largeImageURL}"
        alt="${o.tags.split(",",3)}"
      />
      </a>
        <div class="img-info">
            <span class="img-span"> Likes: <br> ${o.likes}</span>
            <span class="img-span"> Views: <br> ${o.views}</span>
            <span class="img-span"> Comments: <br> ${o.comments}</span>
            <span class="img-span"> Downloads: <br> ${o.downloads}</span>
        </div>
      </li>`).join("");r.container.insertAdjacentHTML("beforeend",e)}const r={container:document.querySelector(".gallery"),formSubmit:document.querySelector(".form"),loader:document.querySelector(".loader"),btnChange:document.querySelector(".btn_down")},g=new L(".gallery a",{captionsData:"alt",captionsDelay:200}),C="Fill please all fields!",$="Sorry, there are no images matching your search query. Please, try again!",P="We're sorry, but you've reached the end of search results.";let c="";const p=40;let a=1,m=1;r.formSubmit.addEventListener("submit",I);r.btnChange.addEventListener("click",q);async function I(n){if(n.preventDefault(),c=n.currentTarget.elements.inpImg.value.trim(),r.container.innerHTML="",!c){i(C);return}r.loader.style.display="block",a=1;try{const{hits:e,totalHits:o}=await u(c,a);if(m=Math.ceil(o/p),e.length===0){r.container.innerHTML="",i($),n.target.reset(),r.loader.style.display="none",y();return}f(e),g.refresh(),r.loader.style.display="none",m>1&&h()}catch(e){i(e)}n.target.reset()}async function q(n){n.preventDefault(),r.loader.style.display="block",a++;try{const{hits:e}=await u(c,a);f(e),g.refresh(),r.loader.style.display="none",E(),a<m?h():(y(),i(P))}catch{i("This is : ")}}function i(n){w.show({message:n,position:"topRight",messageColor:"white",backgroundColor:"#cb4335"})}function h(){r.btnChange.classList.remove("hidden")}function y(){r.btnChange.classList.add("hidden")}function E(){const e=r.container.firstElementChild.getBoundingClientRect().height;console.log("hello"),console.log(567,e),scrollBy({behavior:"smooth",top:e*2})}
//# sourceMappingURL=index.js.map
