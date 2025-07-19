import{a as m,S as f,i as a}from"./assets/vendor-Dx9D5Pvt.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p=o=>m.get("https://pixabay.com/api/",{params:{key:"51348790-b4b99e7923fa7dbd5fd948fd1",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}),g=o=>o.map(({largeImageURL:s,tags:t,webformatURL:l,likes:e,views:r,comments:i,downloads:d})=>`<li class="gallery-item">
	<a class="gallery-link" href="${s}">
		<img 
        width="360"
		  class="gallery-image" 
		  src="${l}" 
		  alt="${t}" 
		/>
	</a>
        <ul class = "describtion">
        <li class = "describtion-item">Likes <p>${e}</p><li>
        <li class = "describtion-item">Views <p>${r}</p><li>
        <li class = "describtion-item">Downloads <p>${d}</p><li>
        <li class = "describtion-item">Comments <p>${i}</p><li>
        </ul>
</li>`).join(""),y=()=>{c.innerHTML=""},h=new f(".gallery a");function b(){h.refresh()}const L=()=>{u.classList.remove("visually-hidden")},q=()=>{u.classList.add("visually-hidden")},n=document.querySelector(".form"),c=document.querySelector(".gallery"),u=document.querySelector(".loader"),v=o=>{o.preventDefault(),y();const s=n.elements["search-text"].value.trim();if(!s)return console.log("pustrequset"),a.error({position:"topRight",title:"Error",message:"please fill your search request"});L(),p(s).then(t=>t.data.hits).then(t=>{t.length===0&&a.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c.insertAdjacentHTML("beforeend",g(t)),b()}).catch(t=>{console.log(t),a.error({title:"Error",message:`${t}`})}).finally(t=>{q()}),n.reset()};n.addEventListener("submit",v);
//# sourceMappingURL=index.js.map
