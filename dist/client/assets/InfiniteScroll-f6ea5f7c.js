import{S as z,i as k,s as I,e as D,b as g,M as E,l as L,ba as K,E as N,o as W,I as q,K as C,bK as G,G as O}from"./index-e502461a.js";function M(r){let t;return{c(){t=q("div"),C(t,"id","svelte-infinite-scroll"),G(t,"width","0")},m(e,o){g(e,t,o),r[11](t)},p:E,d(e){e&&L(t),r[11](null)}}}function j(r){let t,e=!r[1]&&!r[0]&&M(r);return{c(){e&&e.c(),t=D()},m(o,s){e&&e.m(o,s),g(o,t,s)},p(o,[s]){!o[1]&&!o[0]?e?e.p(o,s):(e=M(o),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:E,o:E,d(o){o&&L(t),e&&e.d(o)}}}function v(r,t,e){let{threshold:o=0}=t,{horizontal:s=!1}=t,{elementScroll:m=null}=t,{hasMore:u=!0}=t,{reverse:c=!1}=t,{window:b=!1}=t;const H=K();let f=!1,d,_,S,n;const a=l=>{if(!u)return;const h=l.target;T(h,c,s)<=o?(!f&&u&&(H("loadMore"),e(8,_=h.scrollHeight),e(9,S=h.scrollTop)),e(7,f=!0)):e(7,f=!1)},T=(l,h,w)=>{const i=l.documentElement?l.documentElement:l;return h?w?i.scrollLeft:i.scrollTop:w?i.scrollWidth-i.clientWidth-i.scrollLeft:i.scrollHeight-i.clientHeight-i.scrollTop};N(()=>{b?e(10,n=document):m?e(10,n=m):e(10,n=d.parentNode)}),W(()=>{n&&(n.removeEventListener("scroll",a),n.removeEventListener("resize",a))});function y(l){O[l?"unshift":"push"](()=>{d=l,e(2,d)})}return r.$$set=l=>{"threshold"in l&&e(3,o=l.threshold),"horizontal"in l&&e(4,s=l.horizontal),"elementScroll"in l&&e(0,m=l.elementScroll),"hasMore"in l&&e(5,u=l.hasMore),"reverse"in l&&e(6,c=l.reverse),"window"in l&&e(1,b=l.window)},r.$$.update=()=>{r.$$.dirty&1088&&n&&(c&&e(10,n.scrollTop=n.scrollHeight,n),n.addEventListener("scroll",a),n.addEventListener("resize",a)),r.$$.dirty&1984&&f&&c&&e(10,n.scrollTop=n.scrollHeight-_+S,n)},[m,b,d,o,s,u,c,f,_,S,n,y]}class B extends z{constructor(t){super(),k(this,t,v,j,I,{threshold:3,horizontal:4,elementScroll:0,hasMore:5,reverse:6,window:1})}}export{B as I};