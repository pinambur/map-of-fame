import{S as _e,i as de,s as ge,I as P,H as L,aA as q,a as D,K as H,b as O,ax as k,m as F,ad as Fe,a_ as Ue,h as d,g as Q,t as I,f as X,aK as be,a$ as J,b9 as ie,l as z,d as U,T as te,au as we,bg as oe,aI as Ne,E as Be,e as $e,M as Z,G,b1 as K,b2 as W,b0 as x,bh as M,aY as $,aE as He,aP as Ye,bj as qe,bk as Ge,bl as Ke,bm as We,bp as je}from"./index-e502461a.js";import{f as j,M as Oe}from"./Modal-491dd598.js";import{g as ze,A as he}from"./AutoComplete-8ce64c7d.js";import{f as Je}from"./auth-e9453778.js";import{t as Qe}from"./transformers-2ad5cf36.js";import{B as Xe}from"./ButtonModalBack-ca0a6d9a.js";import{B as Ze}from"./ButtonPrimary-6d2e3ac2.js";import{F as xe}from"./FormEmailInput-3e1bf77c.js";import{F as et}from"./FormPasswordInput-1ad9bf24.js";import{F as re}from"./FormTextInput-b19a5076.js";import"./globals-7f7f1b26.js";import"./endpoints-6d51edb4.js";import"./SelectIndicatorSvg-0ce3a4b3.js";import"./each-86a114b8.js";function ae(r){let e;function t(l,o){return l[1]?rt:tt}let i=t(r),a=i(r);return{c(){a.c(),e=$e()},m(l,o){a.m(l,o),O(l,e,o)},p(l,o){i===(i=t(l))&&a?a.p(l,o):(a.d(1),a=i(l),a&&(a.c(),d(a,1),a.m(e.parentNode,e)))},d(l){l&&z(e),a.d(l)}}}function tt(r){let e,t,i=r[0].from+"",a,l,o,_,p;return{c(){e=P("div"),t=q("По воле юзера "),a=q(i),l=L(),o=P("br"),_=q(`\r
        ты получил доступ в святую святых, аминь друг мой, да прибудет с тобой силы.`),H(e,"class","invite-from svelte-1rey94i")},m(f,y){O(f,e,y),k(e,t),k(e,a),k(e,l),k(e,o),k(e,_)},p(f,y){y[0]&1&&i!==(i=f[0].from+"")&&be(a,i)},i(f){f&&(p||J(()=>{p=x(e,j,{duration:200}),p.start()}))},o:Z,d(f){f&&z(e)}}}function rt(r){let e,t;return{c(){e=P("div"),e.innerHTML=`CHEATER or L👀SER? <br/>
        Anyway your invitation code = used or wrong`,H(e,"class","invite-from error svelte-1rey94i")},m(i,a){O(i,e,a)},p:Z,i(i){i&&(t||J(()=>{t=x(e,j,{duration:200}),t.start()}))},o:Z,d(i){i&&z(e)}}}function le(r){let e,t;return e=new Xe({props:{withTransition:!0}}),e.$on("click",r[19]),{c(){D(e.$$.fragment)},m(i,a){F(e,i,a),t=!0},p:Z,i(i){t||(d(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){U(e,i)}}}function ue(r){let e,t,i,a,l,o,_,p,f,y,T,v;function g(s){r[22](s)}let c={placeholder:"Email",errorText:r[3].email};r[4]!==void 0&&(c.value=r[4]),t=new xe({props:c}),G.push(()=>K(t,"value",g)),t.$on("input",r[23]);function V(s){r[24](s)}let R={placeholder:"Password",autocomplete:"new-password",errorText:r[3].password};r[5]!==void 0&&(R.value=r[5]),l=new et({props:R}),G.push(()=>K(l,"value",V)),l.$on("input",r[25]);function N(s){r[26](s)}let n={items:r[15],optionIdentifier:"name",label:"name",placeholder:"Profile Subtype",errorMessage:r[3].userType,showIndicator:!0};return r[6]!==void 0&&(n.selectedValue=r[6]),f=new he({props:n}),G.push(()=>K(f,"selectedValue",N)),f.$on("select",r[27]),{c(){e=P("div"),D(t.$$.fragment),a=L(),D(l.$$.fragment),_=L(),p=P("div"),D(f.$$.fragment),H(p,"class","profile_subtype")},m(s,m){O(s,e,m),F(t,e,null),k(e,a),F(l,e,null),k(e,_),k(e,p),F(f,p,null),v=!0},p(s,m){const w={};m[0]&8&&(w.errorText=s[3].email),!i&&m[0]&16&&(i=!0,w.value=s[4],W(()=>i=!1)),t.$set(w);const h={};m[0]&8&&(h.errorText=s[3].password),!o&&m[0]&32&&(o=!0,h.value=s[5],W(()=>o=!1)),l.$set(h);const S={};m[0]&8&&(S.errorMessage=s[3].userType),!y&&m[0]&64&&(y=!0,S.selectedValue=s[6],W(()=>y=!1)),f.$set(S)},i(s){v||(d(t.$$.fragment,s),d(l.$$.fragment,s),d(f.$$.fragment,s),s&&(T||J(()=>{T=x(e,j,{duration:200}),T.start()})),v=!0)},o(s){I(t.$$.fragment,s),I(l.$$.fragment,s),I(f.$$.fragment,s),v=!1},d(s){s&&z(e),U(t),U(l),U(f)}}}function fe(r){let e,t,i,a,l,o,_,p,f,y,T,v;t=new re({props:{placeholder:"Username",errorText:r[3].username,value:r[7]}}),t.$on("input",r[18]);let g=r[6].name!==M.crew&&me(r),c=r[6].name!==M.hunter&&pe(r);function V(s){r[32](s)}let R={items:r[13],optionIdentifier:"name",label:"name",placeholder:"Country",errorMessage:r[3].country};r[10]!==void 0&&(R.selectedValue=r[10]),o=new he({props:R}),G.push(()=>K(o,"selectedValue",V)),o.$on("select",r[33]);function N(s){r[34](s)}let n={placeholder:"Link to Your Portfolio: Like Instagram@",errorText:r[3].link};return r[11]!==void 0&&(n.value=r[11]),f=new re({props:n}),G.push(()=>K(f,"value",N)),f.$on("input",r[35]),{c(){e=P("div"),D(t.$$.fragment),i=L(),g&&g.c(),a=L(),c&&c.c(),l=L(),D(o.$$.fragment),p=L(),D(f.$$.fragment)},m(s,m){O(s,e,m),F(t,e,null),k(e,i),g&&g.m(e,null),k(e,a),c&&c.m(e,null),k(e,l),F(o,e,null),k(e,p),F(f,e,null),v=!0},p(s,m){const w={};m[0]&8&&(w.errorText=s[3].username),m[0]&128&&(w.value=s[7]),t.$set(w),s[6].name!==M.crew?g?(g.p(s,m),m[0]&64&&d(g,1)):(g=me(s),g.c(),d(g,1),g.m(e,a)):g&&(Q(),I(g,1,1,()=>{g=null}),X()),s[6].name!==M.hunter?c?(c.p(s,m),m[0]&64&&d(c,1)):(c=pe(s),c.c(),d(c,1),c.m(e,l)):c&&(Q(),I(c,1,1,()=>{c=null}),X());const h={};m[0]&8192&&(h.items=s[13]),m[0]&8&&(h.errorMessage=s[3].country),!_&&m[0]&1024&&(_=!0,h.selectedValue=s[10],W(()=>_=!1)),o.$set(h);const S={};m[0]&8&&(S.errorText=s[3].link),!y&&m[0]&2048&&(y=!0,S.value=s[11],W(()=>y=!1)),f.$set(S)},i(s){v||(d(t.$$.fragment,s),d(g),d(c),d(o.$$.fragment,s),d(f.$$.fragment,s),s&&(T||J(()=>{T=x(e,j,{duration:200}),T.start()})),v=!0)},o(s){I(t.$$.fragment,s),I(g),I(c),I(o.$$.fragment,s),I(f.$$.fragment,s),v=!1},d(s){s&&z(e),U(t),g&&g.d(),c&&c.d(),U(o),U(f)}}}function me(r){let e,t,i;function a(o){r[28](o)}let l={placeholder:r[6].name===M.artist?"Artist Name":"Name",errorText:r[3].name};return r[8]!==void 0&&(l.value=r[8]),e=new re({props:l}),G.push(()=>K(e,"value",a)),e.$on("input",r[29]),{c(){D(e.$$.fragment)},m(o,_){F(e,o,_),i=!0},p(o,_){const p={};_[0]&64&&(p.placeholder=o[6].name===M.artist?"Artist Name":"Name"),_[0]&8&&(p.errorText=o[3].name),!t&&_[0]&256&&(t=!0,p.value=o[8],W(()=>t=!1)),e.$set(p)},i(o){i||(d(e.$$.fragment,o),i=!0)},o(o){I(e.$$.fragment,o),i=!1},d(o){U(e,o)}}}function pe(r){let e,t,i;function a(o){r[30](o)}let l={placeholder:"Crew",errorText:r[3].crew};return r[9]!==void 0&&(l.value=r[9]),e=new re({props:l}),G.push(()=>K(e,"value",a)),e.$on("input",r[31]),{c(){D(e.$$.fragment)},m(o,_){F(e,o,_),i=!0},p(o,_){const p={};_[0]&8&&(p.errorText=o[3].crew),!t&&_[0]&512&&(t=!0,p.value=o[9],W(()=>t=!1)),e.$set(p)},i(o){i||(d(e.$$.fragment,o),i=!0)},o(o){I(e.$$.fragment,o),i=!1},d(o){U(e,o)}}}function ce(r){let e,t,i,a,l,o,_;return{c(){e=P("div"),t=P("span"),t.textContent="Have an account?",i=L(),a=P("a"),l=q("Log in"),H(a,"href",o=r[14]("/login")),H(a,"class","svelte-1rey94i"),H(e,"class","switch-to-sign-in svelte-1rey94i")},m(p,f){O(p,e,f),k(e,t),k(e,i),k(e,a),k(a,l)},p(p,f){f[0]&16384&&o!==(o=p[14]("/login"))&&H(a,"href",o)},i(p){p&&(_||J(()=>{_=x(e,j,{duration:200}),_.start()}))},o:Z,d(p){p&&z(e)}}}function nt(r){var S;let e,t,i,a,l,o,_,p,f,y,T,v,g,c,V,R,N,n=((S=r[0])==null?void 0:S.from)&&ae(r),s=r[2]===2&&le(r),m=r[2]===1&&ue(r),w=r[2]===2&&fe(r);v=new Ze({props:{text:r[2]==1?"Next":"Register",type:"submit",className:"wide",isDisabled:r[12]}});let h=r[2]===1&&ce(r);return{c(){e=P("form"),n&&n.c(),t=L(),s&&s.c(),i=L(),a=P("div"),l=q("step "),o=q(r[2]),_=q(" of 2"),p=L(),m&&m.c(),f=L(),w&&w.c(),y=L(),T=P("div"),D(v.$$.fragment),g=L(),h&&h.c(),H(a,"class","step svelte-1rey94i"),H(T,"class","submit-wrapper svelte-1rey94i"),e.noValidate=!0,H(e,"class","svelte-1rey94i")},m(b,C){O(b,e,C),n&&n.m(e,null),k(e,t),s&&s.m(e,null),k(e,i),k(e,a),k(a,l),k(a,o),k(a,_),k(e,p),m&&m.m(e,null),k(e,f),w&&w.m(e,null),k(e,y),k(e,T),F(v,T,null),k(e,g),h&&h.m(e,null),V=!0,R||(N=Fe(e,"submit",Ue(r[16])),R=!0)},p(b,C){var ee;(ee=b[0])!=null&&ee.from?n?n.p(b,C):(n=ae(b),n.c(),n.m(e,t)):n&&(n.d(1),n=null),b[2]===2?s?(s.p(b,C),C[0]&4&&d(s,1)):(s=le(b),s.c(),d(s,1),s.m(e,i)):s&&(Q(),I(s,1,1,()=>{s=null}),X()),(!V||C[0]&4)&&be(o,b[2]),b[2]===1?m?(m.p(b,C),C[0]&4&&d(m,1)):(m=ue(b),m.c(),d(m,1),m.m(e,f)):m&&(Q(),I(m,1,1,()=>{m=null}),X()),b[2]===2?w?(w.p(b,C),C[0]&4&&d(w,1)):(w=fe(b),w.c(),d(w,1),w.m(e,y)):w&&(Q(),I(w,1,1,()=>{w=null}),X());const A={};C[0]&4&&(A.text=b[2]==1?"Next":"Register"),C[0]&4096&&(A.isDisabled=b[12]),v.$set(A),b[2]===1?h?(h.p(b,C),C[0]&4&&d(h,1)):(h=ce(b),h.c(),d(h,1),h.m(e,null)):h&&(h.d(1),h=null)},i(b){V||(d(s),d(m),d(w),d(v.$$.fragment,b),d(h),J(()=>{V&&(c||(c=ie(e,j,{duration:200},!0)),c.run(1))}),V=!0)},o(b){I(s),I(m),I(w),I(v.$$.fragment,b),c||(c=ie(e,j,{duration:200},!1)),c.run(0),V=!1},d(b){b&&z(e),n&&n.d(),s&&s.d(),m&&m.d(),w&&w.d(),U(v),h&&h.d(),b&&c&&c.end(),R=!1,N()}}}function st(r,e,t){let i,a,l;te(r,we,u=>t(36,i=u)),te(r,oe,u=>t(13,a=u)),te(r,Ne,u=>t(14,l=u));let{inviteData:o}=e,{isInviteError:_=!1}=e,{setInviteError:p}=e,f=1,y="",T="",v,g="@",c="",V="",R,N="",n={email:"",password:"",userType:"",username:"",name:"",crew:"",country:"",link:""},s=!1,m=!1;const w=[{id:M.artist.toLowerCase(),name:M.artist},{id:M.crew.toLowerCase(),name:M.crew},{id:M.hunter.toLowerCase(),name:M.hunter}];Be(()=>{(!a||a.length===0)&&h()});const h=()=>{ze().then(u=>{const{success:B,result:Y}=u;B&&Y&&oe.set(Qe(Y))})},S=u=>u.startsWith("@")?u.substring(1):u,b=()=>{if(f===1){const u=Ge(y),B=Ke(T);u&&B&&v?(t(3,n.email="",n),t(3,n.password="",n),t(3,n.userType="",n)):(u?t(3,n.email="",n):t(3,n.email=y?$.emailInvalid:$.emailEmpty,n),B?t(3,n.password="",n):t(3,n.password=T?$.passwordInvalid:$.passwordEmpty,n),t(3,n.userType=v?"":$.profileSubtypeEmpty,n))}else{const u=S(g);We(u)?t(3,n.username="",n):t(3,n.username=u?$.usernameInvalid:$.usernameEmpty,n),(v==null?void 0:v.name)!==M.crew?t(3,n.name=c?"":$.nameEmpty,n):t(3,n.crew=V?"":$.crewEmpty,n),t(3,n.country=R?"":$.countryCityEmpty,n)}},C=()=>{b(),f===1?!n.email&&!n.password&&!n.userType&&(t(2,f=2),t(3,n={email:"",password:"",userType:"",username:"",name:"",crew:"",country:"",link:""})):!n.username&&!n.name&&!n.crew&&!n.country&&!n.link&&(t(21,m=!0),Je({name:c,username:S(g),password:T,email:y,country:R.name,type:v.id,crew:V,link:N,invite:o==null?void 0:o.code}).then(u=>{const{success:B,result:Y,errors:E}=u;t(21,m=!1),B&&Y?(He.set(Y),Ye.set(!0),qe("token",Y.token),i("/")):(E!=null&&E.email&&(t(3,n.email=E.email,n),t(2,f=1)),E!=null&&E.password&&(t(3,n.password=E.password[0],n),t(2,f=1)),Array.isArray(E)&&t(3,n.link=E[0],n),(E!=null&&E.message||E!=null&&E.invite)&&p(),E!=null&&E.username&&Array.isArray(E.username)&&t(3,n.username=E.username[0],n))}).catch(u=>{console.error(u),t(21,m=!1),t(3,n.password="Something went wrong",n)}))},A=u=>{(s||f===1&&(n.email||n.password||n.userType)||f===2&&(n.username||n.name||n.crew||n.country||n.link))&&t(3,n[u]="",n)},ee=u=>{var B,Y,E,ne,se;if(A("username"),!((E=(Y=(B=u==null?void 0:u.detail)==null?void 0:B.target)==null?void 0:Y.value)!=null&&E.startsWith("@"))){u.detail.target.value=g;return}t(7,g=(se=(ne=u==null?void 0:u.detail)==null?void 0:ne.target)==null?void 0:se.value)},ve=()=>{t(2,f=1)};function ke(u){y=u,t(4,y)}const Ee=()=>A("email");function ye(u){T=u,t(5,T)}const Ie=()=>A("password");function Te(u){v=u,t(6,v)}const Ve=()=>A("userType");function Ce(u){c=u,t(8,c)}const Re=()=>A("name");function Le(u){V=u,t(9,V)}const Se=()=>A("crew");function Ae(u){R=u,t(10,R)}const Me=()=>A("country");function Pe(u){N=u,t(11,N)}const De=()=>A("link");return r.$$set=u=>{"inviteData"in u&&t(0,o=u.inviteData),"isInviteError"in u&&t(1,_=u.isInviteError),"setInviteError"in u&&t(20,p=u.setInviteError)},r.$$.update=()=>{r.$$.dirty[0]&2097164&&t(12,s=m||f===1&&(!!n.email||!!n.password||!!n.userType)||f===2&&(!!n.name||!!n.crew||!!n.country||!!n.link))},[o,_,f,n,y,T,v,g,c,V,R,N,s,a,l,w,C,A,ee,ve,p,m,ke,Ee,ye,Ie,Te,Ve,Ce,Re,Le,Se,Ae,Me,Pe,De]}class it extends _e{constructor(e){super(),de(this,e,st,nt,ge,{inviteData:0,isInviteError:1,setInviteError:20},null,[-1,-1])}}function ot(r){let e,t;return e=new it({props:{inviteData:r[2],isInviteError:r[0],setInviteError:r[3]}}),{c(){D(e.$$.fragment)},m(i,a){F(e,i,a),t=!0},p(i,a){const l={};a&1&&(l.isInviteError=i[0]),a&1&&(l.setInviteError=i[3]),e.$set(l)},i(i){t||(d(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){U(e,i)}}}function at(r){let e,t;return e=new Oe({props:{id:"registration-modal",title:r[0]?"Registr💩tion":"Registration",withFooter:!0,$$slots:{default:[ot]},$$scope:{ctx:r}}}),e.$on("close",r[4]),{c(){D(e.$$.fragment)},m(i,a){F(e,i,a),t=!0},p(i,[a]){const l={};a&1&&(l.title=i[0]?"Registr💩tion":"Registration"),a&33&&(l.$$scope={dirty:a,ctx:i}),e.$set(l)},i(i){t||(d(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){U(e,i)}}}function lt(r,e,t){let i;te(r,we,p=>t(1,i=p));let a=je(),l=!1;return[l,i,a,()=>t(0,l=!0),()=>i("/")]}class yt extends _e{constructor(e){super(),de(this,e,lt,at,ge,{})}}export{yt as default};