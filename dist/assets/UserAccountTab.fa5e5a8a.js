import{w as c,u as d,j as e,a,I as r,A as o,d as p,p as l}from"./index.8a6f1c27.js";const i=t=>{const s=d(n=>n.profile);return e("div",{className:"user-profile",children:a("div",{className:"user-profile-block",children:[a("div",{className:"user-profile-banner",children:[e("div",{className:"user-profile-banner-wrapper",children:e(r,{alt:"Banner",className:"user-profile-banner-img",src:s.banner})}),e("div",{className:"user-profile-avatar-wrapper",children:e(r,{alt:"Avatar",className:"user-profile-img",src:s.avatar})}),e("button",{className:"button button-small user-profile-edit",onClick:()=>t.history.push(o),type:"button",children:"Edit Account"})]}),a("div",{className:"user-profile-details",children:[e("h2",{className:"user-profile-name",children:s.fullname}),e("span",{children:"Email"}),e("br",{}),e("h5",{children:s.email}),e("span",{children:"Address"}),e("br",{}),s.address?e("h5",{children:s.address}):e("h5",{className:"text-subtle text-italic",children:"Address not set"}),e("span",{children:"Mobile"}),e("br",{}),s.mobile?e("h5",{children:s.mobile.value}):e("h5",{className:"text-subtle text-italic",children:"Mobile not set"}),e("span",{children:"Date Joined"}),e("br",{}),s.dateJoined?e("h5",{children:p(s.dateJoined)}):e("h5",{className:"text-subtle text-italic",children:"Not available"})]})]})})};i.propTypes={history:l.exports.shape({push:l.exports.func}).isRequired};const u=c(i);export{u as default};
