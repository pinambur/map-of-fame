import{S as G,i as J,s as P,p as U,I as S,H as R,K as w,an as r,b as M,az as v,ad as B,a$ as $,Q as ee,aD as te,u as V,q as W,r as X,g as E,t as D,f as z,h as O,l as T,aE as Y,aC as C,aL as F,M as q,bu as H,aB as le,bb as ie,e as ne,a as fe,m as se,d as ae}from"./index-09f9502f.js";const oe=t=>({}),K=t=>({});function ue(t){let e;const i=t[8]["custom-tip"],l=U(i,t,t[7],K);return{c(){l&&l.c()},m(n,s){l&&l.m(n,s),e=!0},p(n,s){l&&l.p&&(!e||s&128)&&V(l,i,n,n[7],e?X(i,n[7],s,oe):W(n[7]),K)},i(n){e||(O(l,n),e=!0)},o(n){D(l,n),e=!1},d(n){l&&l.d(n)}}}function _e(t){let e,i;return{c(){e=S("div"),i=C(t[1]),w(e,"class","default-tip svelte-853a30")},m(l,n){M(l,e,n),v(e,i)},p(l,n){n&2&&F(i,l[1])},i:q,o:q,d(l){l&&T(e)}}}function re(t){let e,i,l,n,s,f,a,h,m;const b=t[8].default,o=U(b,t,t[7],null),g=[_e,ue],u=[];function d(c,k){return c[1]?0:1}return s=d(t),f=u[s]=g[s](t),{c(){e=S("div"),i=S("button"),o&&o.c(),l=R(),n=S("div"),f.c(),w(i,"class","button tooltip-slot svelte-853a30"),w(n,"class","tooltip svelte-853a30"),r(n,"active",t[0]),r(n,"left",t[5]),r(n,"right",t[3]),r(n,"bottom",t[4]),r(n,"top",t[2]),r(n,"arrow-bottom-left",t[6]),w(e,"class","tooltip-wrapper svelte-853a30")},m(c,k){M(c,e,k),v(e,i),o&&o.m(i,null),v(e,l),v(e,n),u[s].m(n,null),a=!0,h||(m=[B(i,"click",$(t[9])),ee(te.call(null,e)),B(e,"click_outside",t[10])],h=!0)},p(c,[k]){o&&o.p&&(!a||k&128)&&V(o,b,c,c[7],a?X(b,c[7],k,null):W(c[7]),null);let L=s;s=d(c),s===L?u[s].p(c,k):(E(),D(u[L],1,1,()=>{u[L]=null}),z(),f=u[s],f?f.p(c,k):(f=u[s]=g[s](c),f.c()),O(f,1),f.m(n,null)),(!a||k&1)&&r(n,"active",c[0]),(!a||k&32)&&r(n,"left",c[5]),(!a||k&8)&&r(n,"right",c[3]),(!a||k&16)&&r(n,"bottom",c[4]),(!a||k&4)&&r(n,"top",c[2]),(!a||k&64)&&r(n,"arrow-bottom-left",c[6])},i(c){a||(O(o,c),O(f),a=!0)},o(c){D(o,c),D(f),a=!1},d(c){c&&T(e),o&&o.d(c),u[s].d(),h=!1,Y(m)}}}function ce(t,e,i){let{$$slots:l={},$$scope:n}=e,{tip:s=""}=e,{top:f=!1}=e,{right:a=!1}=e,{bottom:h=!1}=e,{left:m=!1}=e,{arrowBottomLeft:b=!1}=e,{active:o=!1}=e;const g=()=>i(0,o=!0),u=()=>i(0,o=!1);return t.$$set=d=>{"tip"in d&&i(1,s=d.tip),"top"in d&&i(2,f=d.top),"right"in d&&i(3,a=d.right),"bottom"in d&&i(4,h=d.bottom),"left"in d&&i(5,m=d.left),"arrowBottomLeft"in d&&i(6,b=d.arrowBottomLeft),"active"in d&&i(0,o=d.active),"$$scope"in d&&i(7,n=d.$$scope)},[o,s,f,a,h,m,b,n,l,g,u]}class me extends G{constructor(e){super(),J(this,e,ce,re,P,{tip:1,top:2,right:3,bottom:4,left:5,arrowBottomLeft:6,active:0})}}function N(t){let e,i,l,n,s,f=t[5]&&Q(t);return{c(){e=S("span"),i=C(t[4]),l=R(),f&&f.c(),n=ne(),w(e,"class","svelte-1fti5w7")},m(a,h){M(a,e,h),v(e,i),M(a,l,h),f&&f.m(a,h),M(a,n,h),s=!0},p(a,h){(!s||h&16)&&F(i,a[4]),a[5]?f?(f.p(a,h),h&32&&O(f,1)):(f=Q(a),f.c(),O(f,1),f.m(n.parentNode,n)):f&&(E(),D(f,1,1,()=>{f=null}),z())},i(a){s||(O(f),s=!0)},o(a){D(f),s=!1},d(a){a&&(T(e),T(l),T(n)),f&&f.d(a)}}}function Q(t){let e,i;return e=new me({props:{tip:t[5],top:!0,arrowBottomLeft:!0,$$slots:{default:[be]},$$scope:{ctx:t}}}),{c(){fe(e.$$.fragment)},m(l,n){se(e,l,n),i=!0},p(l,n){const s={};n&32&&(s.tip=l[5]),n&1048576&&(s.$$scope={dirty:n,ctx:l}),e.$set(s)},i(l){i||(O(e.$$.fragment,l),i=!0)},o(l){D(e.$$.fragment,l),i=!1},d(l){ae(e,l)}}}function be(t){let e;return{c(){e=S("span"),e.textContent="info",w(e,"class","info-trigger svelte-1fti5w7")},m(i,l){M(i,e,l)},p:q,d(i){i&&T(e)}}}function j(t){let e,i;return{c(){e=S("div"),i=C(t[1]),w(e,"class","floating-label svelte-1fti5w7")},m(l,n){M(l,e,n),v(e,i)},p(l,n){n&2&&F(i,l[1])},d(l){l&&T(e)}}}function A(t){let e,i=(t[3]||t[2])+"",l;return{c(){e=S("div"),l=C(i),w(e,"class","hint svelte-1fti5w7")},m(n,s){M(n,e,s),v(e,l)},p(n,s){s&12&&i!==(i=(n[3]||n[2])+"")&&F(l,i)},d(n){n&&T(e)}}}function de(t){let e,i,l,n,s,f,a,h,m=t[4]&&N(t),b=t[1]&&!t[11]&&j(t),o=(t[3]||t[2])&&A(t);return{c(){e=S("label"),m&&m.c(),i=R(),l=S("input"),n=R(),b&&b.c(),s=R(),o&&o.c(),w(l,"type","text"),w(l,"placeholder",t[1]),l.readOnly=t[6],w(l,"class","svelte-1fti5w7"),w(e,"class","svelte-1fti5w7"),r(e,"with-label",!!t[4]),r(e,"with-hint",!!t[2]),r(e,"error",!!t[3]),r(e,"wide-on-mobile",t[7]),r(e,"edit-spot",t[8]),r(e,"add-spot",t[9]),r(e,"link",t[10]),r(e,"search",t[11]),r(e,"invite",t[12]),r(e,"extra-margin",t[13]),r(e,"disabled",t[14])},m(g,u){M(g,e,u),m&&m.m(e,null),v(e,i),v(e,l),H(l,t[0]),v(e,n),b&&b.m(e,null),v(e,s),o&&o.m(e,null),f=!0,a||(h=[B(l,"input",t[18]),B(l,"blur",t[15]),B(l,"input",t[16]),B(l,"click",function(){le(t[6]&&this.select())&&(t[6]&&this.select()).apply(this,arguments)}),B(l,"keydown",t[17])],a=!0)},p(g,[u]){t=g,t[4]?m?(m.p(t,u),u&16&&O(m,1)):(m=N(t),m.c(),O(m,1),m.m(e,i)):m&&(E(),D(m,1,1,()=>{m=null}),z()),(!f||u&2)&&w(l,"placeholder",t[1]),(!f||u&64)&&(l.readOnly=t[6]),u&1&&l.value!==t[0]&&H(l,t[0]),t[1]&&!t[11]?b?b.p(t,u):(b=j(t),b.c(),b.m(e,s)):b&&(b.d(1),b=null),t[3]||t[2]?o?o.p(t,u):(o=A(t),o.c(),o.m(e,null)):o&&(o.d(1),o=null),(!f||u&16)&&r(e,"with-label",!!t[4]),(!f||u&4)&&r(e,"with-hint",!!t[2]),(!f||u&8)&&r(e,"error",!!t[3]),(!f||u&128)&&r(e,"wide-on-mobile",t[7]),(!f||u&256)&&r(e,"edit-spot",t[8]),(!f||u&512)&&r(e,"add-spot",t[9]),(!f||u&1024)&&r(e,"link",t[10]),(!f||u&2048)&&r(e,"search",t[11]),(!f||u&4096)&&r(e,"invite",t[12]),(!f||u&8192)&&r(e,"extra-margin",t[13]),(!f||u&16384)&&r(e,"disabled",t[14])},i(g){f||(O(m),f=!0)},o(g){D(m),f=!1},d(g){g&&T(e),m&&m.d(),b&&b.d(),o&&o.d(),a=!1,Y(h)}}}function he(t,e,i){let{value:l=""}=e,{placeholder:n=""}=e,{hint:s=""}=e,{errorText:f=""}=e,{label:a=""}=e,{tooltip:h=""}=e,{isReadOnly:m=!1}=e,{wideOnMobile:b=!1}=e,{editSpot:o=!1}=e,{addSpot:g=!1}=e,{link:u=!1}=e,{search:d=!1}=e,{invite:c=!1}=e,{extraMargin:k=!1}=e,{isDisabled:L=!1}=e;const I=ie(),Z=()=>I("blur"),p=_=>I("input",_),y=_=>I("keyDown",_);function x(){l=this.value,i(0,l)}return t.$$set=_=>{"value"in _&&i(0,l=_.value),"placeholder"in _&&i(1,n=_.placeholder),"hint"in _&&i(2,s=_.hint),"errorText"in _&&i(3,f=_.errorText),"label"in _&&i(4,a=_.label),"tooltip"in _&&i(5,h=_.tooltip),"isReadOnly"in _&&i(6,m=_.isReadOnly),"wideOnMobile"in _&&i(7,b=_.wideOnMobile),"editSpot"in _&&i(8,o=_.editSpot),"addSpot"in _&&i(9,g=_.addSpot),"link"in _&&i(10,u=_.link),"search"in _&&i(11,d=_.search),"invite"in _&&i(12,c=_.invite),"extraMargin"in _&&i(13,k=_.extraMargin),"isDisabled"in _&&i(14,L=_.isDisabled)},[l,n,s,f,a,h,m,b,o,g,u,d,c,k,L,Z,p,y,x]}class ge extends G{constructor(e){super(),J(this,e,he,de,P,{value:0,placeholder:1,hint:2,errorText:3,label:4,tooltip:5,isReadOnly:6,wideOnMobile:7,editSpot:8,addSpot:9,link:10,search:11,invite:12,extraMargin:13,isDisabled:14})}}export{ge as F};
