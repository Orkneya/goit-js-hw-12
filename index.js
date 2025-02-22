import{a as d,S as g,i as p}from"./assets/vendor-CrAdtshy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const f="48810135-3fc2af65eea4986756bc51882",y="https://pixabay.com/api/?";function h(n){const t=new URLSearchParams({key:f,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:20});return d.get(`${y}${t}`)}function b(n){const t=new g(".gallery a"),s=n.map(r=>`<li class="gallery-item">
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
      </li>`).join("");a.container.insertAdjacentHTML("afterbegin",s),t.refresh()}const a={container:document.querySelector(".gallery"),formSubmit:document.querySelector(".form"),loader:document.querySelector(".loader"),btnChange:document.querySelector(".btn_down")},u="Fill please all fields!",l="Sorry, there are no images matching your search query. Please, try again!";let c="";a.formSubmit.addEventListener("submit",L);async function L(n){if(n.preventDefault(),c=n.currentTarget.elements.inpImg.value,!c.trim())return m(u),console.log(u);a.loader.style.display="block",h(c).then(t=>{if(t.data.hits.length===0)return a.container.innerHTML="",m(l),a.loader.style.display="none",console.log(l);b(t.data.hits),a.loader.style.display="none"}).catch(t=>(m(l),console.log("Error:",t))),n.target.reset()}function m(n){p.show({message:n,position:"topRight",messageColor:"white",backgroundColor:"#cb4335"})}
//# sourceMappingURL=index.js.map
