import{S as C,i as D,s as L,G as V,b1 as q,I as M,H as I,a as w,K as W,b as v,ax as F,m as b,ad as B,a_ as A,b2 as H,h,a$ as K,b9 as R,t as S,l as G,d as E,aY as T,bk as N,T as O,aj as j,au as Y}from"./index-e502461a.js";import{f as y,M as J}from"./Modal-491dd598.js";import{b as Q}from"./auth-e9453778.js";import{B as U}from"./ButtonPrimary-6d2e3ac2.js";import{F as X}from"./FormEmailInput-3e1bf77c.js";import"./globals-7f7f1b26.js";import"./endpoints-6d51edb4.js";function z(o){let e;return{c(){e=M("p"),e.textContent="Letter was sent to the email",W(e,"class","svelte-17gjmgc")},m(t,s){v(t,e,s)},d(t){t&&G(e)}}}function Z(o){let e,t,s,f,r,i,a,d,m,p,_,u=o[0]&&!o[1]&&z();function P(n){o[9](n)}let l={placeholder:"Email",errorText:o[2]};return o[3]!==void 0&&(l.value=o[3]),s=new X({props:l}),V.push(()=>q(s,"value",P)),s.$on("input",o[6]),a=new U({props:{text:"Send",type:"submit",className:"wide",isDisabled:o[4]||o[0]}}),{c(){e=M("form"),u&&u.c(),t=I(),w(s.$$.fragment),r=I(),i=M("div"),w(a.$$.fragment),W(i,"class","submit-wrapper svelte-17gjmgc"),e.noValidate=!0,W(e,"class","svelte-17gjmgc")},m(n,g){v(n,e,g),u&&u.m(e,null),F(e,t),b(s,e,null),F(e,r),F(e,i),b(a,i,null),m=!0,p||(_=B(e,"submit",A(o[5])),p=!0)},p(n,[g]){n[0]&&!n[1]?u||(u=z(),u.c(),u.m(e,t)):u&&(u.d(1),u=null);const c={};g&4&&(c.errorText=n[2]),!f&&g&8&&(f=!0,c.value=n[3],H(()=>f=!1)),s.$set(c);const k={};g&17&&(k.isDisabled=n[4]||n[0]),a.$set(k)},i(n){m||(h(s.$$.fragment,n),h(a.$$.fragment,n),K(()=>{m&&(d||(d=R(e,y,{duration:200},!0)),d.run(1))}),m=!0)},o(n){S(s.$$.fragment,n),S(a.$$.fragment,n),d||(d=R(e,y,{duration:200},!1)),d.run(0),m=!1},d(n){n&&G(e),u&&u.d(),E(s),E(a),n&&d&&d.end(),p=!1,_()}}}function $(o,e,t){let{setForgotPasswordEmailSent:s}=e,{forgotPasswordEmailSent:f}=e,{isMobileWidth:r}=e,i="",a="",d=!1,m=!1;const p=()=>{const l=N(i);if(!l){i?l?t(2,a=""):t(2,a=T.emailInvalid):t(2,a=T.emailEmpty);return}t(2,a="")},_=()=>{p(),a||(t(8,m=!0),Q(i).then(l=>{const{success:n,result:g,errors:c}=l;t(8,m=!1),n&&g?s(!0):t(2,a=(c==null?void 0:c.email)??"Something went wrong")}).catch(l=>{console.error(l),t(8,m=!1),t(2,a="Something went wrong")}))},u=()=>{(d||a)&&(t(2,a=""),t(4,d=!1))};function P(l){i=l,t(3,i)}return o.$$set=l=>{"setForgotPasswordEmailSent"in l&&t(7,s=l.setForgotPasswordEmailSent),"forgotPasswordEmailSent"in l&&t(0,f=l.forgotPasswordEmailSent),"isMobileWidth"in l&&t(1,r=l.isMobileWidth)},o.$$.update=()=>{o.$$.dirty&260&&t(4,d=!!a||m)},[f,r,a,i,d,_,u,s,m,P]}class x extends C{constructor(e){super(),D(this,e,$,Z,L,{setForgotPasswordEmailSent:7,forgotPasswordEmailSent:0,isMobileWidth:1})}}function ee(o){let e,t;return e=new x({props:{setForgotPasswordEmailSent:o[3],forgotPasswordEmailSent:o[0],isMobileWidth:o[1]}}),{c(){w(e.$$.fragment)},m(s,f){b(e,s,f),t=!0},p(s,f){const r={};f&1&&(r.forgotPasswordEmailSent=s[0]),f&2&&(r.isMobileWidth=s[1]),e.$set(r)},i(s){t||(h(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){E(e,s)}}}function te(o){let e,t,s,f;return e=new J({props:{id:"forgot-password-modal",title:o[0]&&o[1]?"Letter was sent to the email":"Forgot",accentTitle:o[0]&&o[1],withFooter:!0,$$slots:{default:[ee]},$$scope:{ctx:o}}}),e.$on("close",o[5]),{c(){w(e.$$.fragment)},m(r,i){b(e,r,i),t=!0,s||(f=B(window,"resize",o[4]),s=!0)},p(r,[i]){const a={};i&3&&(a.title=r[0]&&r[1]?"Letter was sent to the email":"Forgot"),i&3&&(a.accentTitle=r[0]&&r[1]),i&67&&(a.$$scope={dirty:i,ctx:r}),e.$set(a)},i(r){t||(h(e.$$.fragment,r),t=!0)},o(r){S(e.$$.fragment,r),t=!1},d(r){E(e,r),s=!1,f()}}}function se(o,e,t){let s;O(o,Y,m=>t(2,s=m));let f=!1,r=j();return[f,r,s,m=>t(0,f=m),()=>{t(1,r=j())},()=>s("/")]}class me extends C{constructor(e){super(),D(this,e,se,te,L,{})}}export{me as default};
