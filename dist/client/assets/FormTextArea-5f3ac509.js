import{S as C,i as q,s as D,I as g,H as w,K as b,bK as k,am as u,b as m,ax as _,bt as F,ad as c,M as z,l as v,aC as E,ba as I,aA as L,aK as R}from"./index-e502461a.js";function S(i){let e,l;return{c(){e=g("div"),l=L(i[2]),b(e,"class","floating-label svelte-1wbnskx")},m(n,f){m(n,e,f),_(e,l)},p(n,f){f&4&&R(l,n[2])},d(n){n&&v(e)}}}function T(i){let e,l;return{c(){e=g("div"),l=L(i[3]),b(e,"class","error-text svelte-1wbnskx")},m(n,f){m(n,e,f),_(e,l)},p(n,f){f&8&&R(l,n[3])},d(n){n&&v(e)}}}function M(i){let e,l,n,f,d,h,s=i[2]&&i[6]&&S(i),t=i[3]&&T(i);return{c(){e=g("div"),l=g("textarea"),n=w(),s&&s.c(),f=w(),t&&t.c(),b(l,"placeholder",i[2]),k(l,"height",i[1]+"px"),b(l,"class","svelte-1wbnskx"),u(l,"resizable",i[4]),b(e,"class","container svelte-1wbnskx"),u(e,"error",!!i[3]),u(e,"add-spot",i[5]),u(e,"no-floating-label",!i[6])},m(a,o){m(a,e,o),_(e,l),F(l,i[0]),_(e,n),s&&s.m(e,null),_(e,f),t&&t.m(e,null),d||(h=[c(l,"input",i[9]),c(l,"blur",i[7]),c(l,"input",i[8])],d=!0)},p(a,[o]){o&4&&b(l,"placeholder",a[2]),o&2&&k(l,"height",a[1]+"px"),o&1&&F(l,a[0]),o&16&&u(l,"resizable",a[4]),a[2]&&a[6]?s?s.p(a,o):(s=S(a),s.c(),s.m(e,f)):s&&(s.d(1),s=null),a[3]?t?t.p(a,o):(t=T(a),t.c(),t.m(e,null)):t&&(t.d(1),t=null),o&8&&u(e,"error",!!a[3]),o&32&&u(e,"add-spot",a[5]),o&64&&u(e,"no-floating-label",!a[6])},i:z,o:z,d(a){a&&v(e),s&&s.d(),t&&t.d(),d=!1,E(h)}}}function W(i,e,l){let{placeholder:n}=e,{value:f}=e,{height:d=84}=e,{errorText:h=""}=e,{isResizable:s=!1}=e,{addSpot:t=!1}=e,{isFloatingLabel:a=!0}=e;const o=I(),A=()=>o("blur"),H=()=>o("input");window.innerHeight<850&&window.innerWidth>window.innerHeight&&t&&(d*=.87);function K(){f=this.value,l(0,f)}return i.$$set=r=>{"placeholder"in r&&l(2,n=r.placeholder),"value"in r&&l(0,f=r.value),"height"in r&&l(1,d=r.height),"errorText"in r&&l(3,h=r.errorText),"isResizable"in r&&l(4,s=r.isResizable),"addSpot"in r&&l(5,t=r.addSpot),"isFloatingLabel"in r&&l(6,a=r.isFloatingLabel)},[f,d,n,h,s,t,a,A,H,K]}class B extends C{constructor(e){super(),q(this,e,W,M,D,{placeholder:2,value:0,height:1,errorText:3,isResizable:4,addSpot:5,isFloatingLabel:6})}}export{B as F};