import{l,V as m,I as f,m as w,L as y,n as u,o as S,N as R}from"./endpoints-6d51edb4.js";import{bh as i}from"./index-e502461a.js";const E=async(s,a)=>{const e=new URLSearchParams;return e.append("email",s),e.append("password",a),await(await fetch(y(),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e})).json()},b=async s=>{const a=`Bearer ${s}`;return await(await fetch(m(),{method:"POST",headers:{Authorization:a}})).json()},O=async({username:s,name:a,email:e,password:n,country:r,type:p,crew:c,link:d,invite:t})=>{const o=new URLSearchParams;return o.append("username",s),p!==i.crew.toLowerCase()&&o.append("artist",a),o.append("email",e),o.append("password",n),o.append("country",r),o.append("type",p),p!==i.hunter.toLowerCase()&&o.append("crew",c),o.append("link",d),t&&o.append("invite",t),await(await fetch(S(),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:o})).json()},_=async s=>{const a=new URLSearchParams;return a.append("email",s),await(await fetch(u(),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a})).json()},L=async(s,a)=>{const e=new URLSearchParams;return e.append("reset_password_token",s),e.append("id",a),await(await fetch(l(),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e})).json()},j=async(s,a)=>{const e=new URLSearchParams,n=`Bearer ${s}`;return e.append("password",a),e.append("confirmation",a),await(await fetch(u(),{method:"PUT",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:n},body:e})).json()},C=async s=>{const a=`Bearer ${s}`;return await(await fetch(f(),{method:"GET",headers:{Authorization:a}})).json()},I=async({username:s,name:a,email:e,password:n,country:r,type:p,crew:c,link:d})=>{const t=new URLSearchParams;return t.append("username",s),p!==i.crew.toLowerCase()&&t.append("artist",a),t.append("email",e),t.append("password",n),t.append("country",r),t.append("type",p),t.append("crew",c),t.append("link",d),await(await fetch(R(),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t})).json()},g=async s=>await(await fetch(w(s),{method:"GET"})).json(),x=async(s,a,{isSpotsHidden:e,background:n,about:r})=>{const p=`Bearer ${s}`,c=new FormData;return typeof e<"u"&&c.append("is_spots_hidden",e),typeof n<"u"&&c.append("background",n),typeof r<"u"&&c.append("about",r),await(await fetch(w(a),{method:"POST",headers:{Authorization:p},body:c})).json()};export{C as a,_ as b,L as c,j as d,x as e,O as f,g,E as l,I as n,b as v};