import{a as b,S as L,i as w}from"./assets/vendor-CMSP9hSB.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const v="48810135-3fc2af65eea4986756bc51882",S="https://pixabay.com/api/?";async function f(n,e){const r=new URLSearchParams({key:v,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:h}),{data:l}=await b(`${S}${r}`);return l}function p(n){const e=n.map(r=>`<li class="gallery-item">
      <a class="gallery-link" href="${r.largeImageURL}">
      <img
        class="gallery-image"
        src="${r.webformatURL}"
        data-source="${r.largeImageURL}"
        alt="${r.tags.split(",",3)}"
      />
      </a>
        <div class="img-info">
            <span class="img-span"> Likes: <br> ${r.likes}</span>
            <span class="img-span"> Views: <br> ${r.views}</span>
            <span class="img-span"> Comments: <br> ${r.comments}</span>
            <span class="img-span"> Downloads: <br> ${r.downloads}</span>
        </div>
      </li>`).join("");o.container.insertAdjacentHTML("beforeend",e)}const o={container:document.querySelector(".gallery"),formSubmit:document.querySelector(".form"),loader:document.querySelector(".loader"),btnChange:document.querySelector(".btn_down")},g=new L(".gallery a",{captionsData:"alt",captionsDelay:200}),C="Fill please all fields!",$="Sorry, there are no images matching your search query. Please, try again!",P="We're sorry, but you've reached the end of search results.";let c="";const h=40;let a=1,m=1;o.formSubmit.addEventListener("submit",I);o.btnChange.addEventListener("click",q);async function I(n){if(n.preventDefault(),a=1,c=n.currentTarget.elements.inpImg.value.trim(),o.container.innerHTML="",!c){i(C);return}o.loader.style.display="block";try{const{hits:e,totalHits:r}=await f(c,a);if(m=Math.ceil(r/h),e.length===0){o.container.innerHTML="",i($),n.target.reset(),o.loader.style.display="none",u();return}p(e),g.refresh(),o.loader.style.display="none",m>1?y():u()}catch(e){i(e)}n.target.reset()}async function q(n){n.preventDefault(),o.loader.style.display="block",a++;try{const{hits:e}=await f(c,a);p(e),g.refresh(),o.loader.style.display="none",E(),a<m?y():(u(),i(P))}catch{i("This is : ")}}function i(n){w.show({message:n,position:"topRight",messageColor:"white",backgroundColor:"#cb4335"})}function y(){o.btnChange.classList.remove("hidden")}function u(){o.btnChange.classList.add("hidden")}function E(){const e=o.container.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:e*2})}
//# sourceMappingURL=index.js.map
