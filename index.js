import{a as p,S as d,i as n}from"./assets/vendor-CIF6YjI2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="56179959-a7008e00e45022e107cf5162b";async function y(s){return(await p.get("https://pixabay.com/api/",{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const t=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:r,views:i,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a href="${a}">
          <img
            class="gallery-image"
            src="${o}"
            alt="${e}"
          />
        </a>

        <div class="info">
          <p><b>Likes</b><br>${r}</p>
          <p><b>Views</b><br>${i}</p>
          <p><b>Comments</b><br>${u}</p>
          <p><b>Downloads</b><br>${f}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",t),g.refresh()}function b(){c.innerHTML=""}function L(){document.querySelector(".loader").classList.add("is-visible")}function S(){document.querySelector(".loader").classList.remove("is-visible")}const l=document.querySelector(".form");l.addEventListener("submit",q);async function q(s){s.preventDefault();const t=s.currentTarget.elements["search-text"].value.trim();if(!t){n.error({message:"Please enter a search query!",position:"topRight"});return}b(),L();try{const o=await y(t);if(o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(o.hits)}catch(o){n.error({message:"Something went wrong!",position:"topRight"}),console.log(o)}finally{S()}l.reset()}
//# sourceMappingURL=index.js.map
