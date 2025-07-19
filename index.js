import{a as p,S as m,i as a}from"./assets/vendor-Dx9D5Pvt.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f=i=>p.get("https://pixabay.com/api/",{params:{key:"51348790-b4b99e7923fa7dbd5fd948fd1",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits),y=i=>i.map(({largeImageURL:t,tags:s,webformatURL:l,likes:e,views:r,comments:o,downloads:d})=>`<li class="gallery-item">
	<a class="gallery-link" href="${t}">
		<img 
        width="360"
		  class="gallery-image" 
		  src="${l}" 
		  alt="${s}" 
		/>
	</a>
        <ul class = "description">
        <li class = "description-item">Likes <p>${e}</p><li>
        <li class = "description-item">Views <p>${r}</p><li>
        <li class = "description-item">Downloads <p>${d}</p><li>
        <li class = "description-item">Comments <p>${o}</p><li>
        </ul>
</li>`).join(""),g=i=>{h(),c.innerHTML=y(i),b()},h=()=>{c.innerHTML=""},L=new m(".gallery a");function b(){L.refresh()}const v=()=>{u.classList.remove("visually-hidden")},E=()=>{u.classList.add("visually-hidden")},n=document.querySelector(".form"),c=document.querySelector(".gallery"),u=document.querySelector(".loader"),S=i=>{i.preventDefault();const t=n.elements["search-text"].value.trim();if(!t)return a.error({position:"topRight",title:"Error",message:"please fill your search request"});v(),f(t).then(s=>{s.length===0&&a.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),g(s)}).catch(s=>{console.log(s),a.error({title:"Error",message:`${s}`})}).finally(s=>{E()}),n.reset()};n.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
