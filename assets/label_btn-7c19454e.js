let l=document.createDocumentFragment();function a(e){let t=document.createElement("a");return t.href=e.link,t.classList.add("py-1","px-3","px-md-4","text-primary-3","d-block","w-100"),t.textContent=`${e.name}`,t}function r(){let e=document.createElement("li");return e.classList.add("noto-tc-serif","fw-bold"),e}function c(e){let t=a(e),n=r();return l.appendChild(t),n.appendChild(l),n}const i={mountLi:c};export{i as l};