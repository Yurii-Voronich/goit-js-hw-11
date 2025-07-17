import{a as d,i as a}from"./assets/vendor-CYk3T505.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m=s=>d.get("https://pixabay.com/api/",{params:{key:"51348790-b4b99e7923fa7dbd5fd948fd1",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}),f=s=>s.map(({largeImageURL:i,tags:r,webformatURL:n,likes:e,views:t,comments:o,downloads:u})=>`<li class="gallery-item">
	<a class="gallery-link" href="${i}">
		<img 
        width="360"
		  class="gallery-image" 
		  src="${n}" 
		  alt="${r}" 
		/>
	</a>
        <ul class = "describtion">
        <li class = "describtion-item">Likes <p>${e}</p><li>
        <li class = "describtion-item">Views <p>${t}</p><li>
        <li class = "describtion-item">Downloads <p>${u}</p><li>
        <li class = "describtion-item">Comments <p>${o}</p><li>
        </ul>
</li>`).join(""),l=document.querySelector(".form"),c=document.querySelector(".gallery"),p=s=>{let i=null;s.preventDefault(),i=l.elements["search-text"].value.trim(),m(i).then(r=>r.data.hits).then(r=>(r.length===0&&a.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c.insertAdjacentHTML("beforeend",f(r)))).catch(r=>{console.log(r),a.error({title:"Error",message:`${r}`})}),l.reset(),c.innerHTML=""};l.addEventListener("submit",p);
//# sourceMappingURL=index.js.map
