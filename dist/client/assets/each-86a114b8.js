import{aC as q,t as z,h as B}from"./index-e502461a.js";function F(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function G(e,f){e.d(1),f.delete(e.key)}function D(e,f){z(e,1,1,()=>{f.delete(e.key)})}function H(e,f){e.f(),D(e,f)}function I(e,f,x,S,k,m,h,A,_,C,a,j){let i=e.length,c=m.length,d=i;const u={};for(;d--;)u[e[d].key]=d;const o=[],w=new Map,y=new Map,p=[];for(d=c;d--;){const n=j(k,m,d),s=x(n);let t=h.get(s);t?S&&p.push(()=>t.p(n,f)):(t=C(s,n),t.c()),w.set(s,o[d]=t),s in u&&y.set(s,Math.abs(d-u[s]))}const M=new Set,v=new Set;function g(n){B(n,1),n.m(A,a),h.set(n.key,n),a=n.first,c--}for(;i&&c;){const n=o[c-1],s=e[i-1],t=n.key,l=s.key;n===s?(a=n.first,i--,c--):w.has(l)?!h.has(t)||M.has(t)?g(n):v.has(l)?i--:y.get(t)>y.get(l)?(v.add(t),g(n)):(M.add(l),i--):(_(s,h),i--)}for(;i--;){const n=e[i];w.has(n.key)||_(n,h)}for(;c;)g(o[c-1]);return q(p),o}export{G as d,F as e,H as f,D as o,I as u};
