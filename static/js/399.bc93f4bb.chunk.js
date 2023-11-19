"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[399],{8399:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var i,r,a,s,o=t(9434),l=t(5594),c=t(2946),p=t(168),d=t(6487),x=d.ZP.div(i||(i=(0,p.Z)(["\n  .text {\n    text-align: center;\n    font-size: 36px;\n  }\n\n  .text-white {\n    text-align: center;\n    font-size: 36px;\n    color: white;\n  }\n\n  .form {\n    display: flex;\n    flex-direction: column;\n    width: 400px;\n  }\n\n  .label {\n    font-size: 14px;\n    line-height: 1.29;\n    letter-spacing: -0.04em;\n    text-transform: uppercase;\n    font-weight: 600;\n  }\n\n  .input {\n    width: 100%;\n    height: 30px;\n    margin-bottom: 14px;\n    padding: 14px 24px;\n    outline: 1px solid rgba(0, 0, 0, 0.3);\n    border-radius: 10px;\n    border: none;\n    transition: outline var(--duration-timing-func);\n    font-size: 20px;\n    line-height: 1.29;\n    letter-spacing: -0.04em;\n    color: black;\n  }\n\n  .title {\n    display: block;\n    margin-bottom: 10px;\n    font-size: 18px;\n    line-height: 1.17;\n    letter-spacing: 0.04em;\n  }\n\n  .btn {\n    display: block;\n    margin: auto;\n    min-width: 110px;\n    height: 40px;\n    padding: 5px 20px;\n    border: 1px solid grey;\n    border-radius: 10px;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 1.5;\n    letter-spacing: 0.04em;\n    cursor: pointer;\n    background-color: white;\n    color: black;\n\n    &:hover,\n    &:focus {\n      background-color: rgb(21, 184, 21);\n      color: white;\n      transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),\n        color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n    }\n  }\n"]))),u=t(3329),m=function(){var n=(0,o.I0)(),e=(0,o.v9)(c.EX);return(0,u.jsxs)(x,{children:[(0,u.jsxs)("h1",{className:"text",children:[(0,u.jsx)("span",{className:"text-white",children:"Phone"}),"book"]}),(0,u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var i=t.currentTarget.elements.name.value,r=t.currentTarget.elements.number.value;if(e.some((function(n){return n.name.toLowerCase()===i.toLowerCase()})))alert("".concat(i," is already in contacts."));else{var a={name:i,number:r};n((0,l.uK)(a)),t.currentTarget.reset()}},className:"form",children:[(0,u.jsxs)("label",{className:"label",children:[(0,u.jsx)("span",{className:"title",children:"Name"}),(0,u.jsx)("input",{className:"input",name:"name",type:"text",required:!0,placeholder:"Enter name"}),(0,u.jsx)("span",{className:"title",children:"Number"}),(0,u.jsx)("input",{className:"input",type:"tel",name:"number",required:!0,placeholder:"Number",minLength:"7",maxLength:"12"})]}),(0,u.jsx)("button",{className:"btn",type:"submit",children:"Add contact"})]})]})},h=t(614),g=d.ZP.div(r||(r=(0,p.Z)(["\nwidth: 300px;\n\n.title {\n  font-size: 18px;\n    line-height: 1.29;\n    letter-spacing: -0.04em;\n    text-transform: uppercase;\n    font-weight: 600;\n}\n  .input {\n    width: 100%;\n    height: 20px;\n    margin-top: 8px;\n    margin-bottom: 14px;\n    padding: 10px 20px;\n    outline: 1px solid rgba(0, 0, 0, 0.3);\n    border-radius: 10px;\n    border: none;\n    transition: outline var(--duration-timing-func);\n    font-size: 20px;\n    line-height: 1.29;\n    letter-spacing: -0.04em;\n    color: black;\n  }\n    \n  }\n"]))),b=function(){var n=(0,o.v9)(c._W),e=(0,o.I0)();return(0,u.jsxs)(g,{children:[(0,u.jsx)("p",{className:"title",children:"Find contacts by name:"}),(0,u.jsx)("form",{children:(0,u.jsx)("input",{type:"text",placeholder:"Search contacts",value:n,onChange:function(n){var t=n.target.value;e((0,h.Tv)(t))},className:"input"})})]})},f=d.ZP.div(a||(a=(0,p.Z)(["\n  padding: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  background: hwb(138 33% 38% / 0.7);\n\n  .appstyled {\n    display: flex;\n    align-items: center;\n    justify-items: center;\n    flex-direction: column;\n    width: 800px;\n    padding-top: 15px;\n\n    margin: 0 auto;\n  }\n\n  .text {\n    text-align: center;\n    font-size: 36px;\n  }\n"]))),j=t(2791),v=t(5518),w=t(503),k=d.ZP.div(s||(s=(0,p.Z)(["\n  width: 360px;\n\n  .item {\n    margin-bottom: 8px;\n    display: flex;\n    -webkit-box-pack: justify;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    align-items: center;\n  }\n\n  .btn_delete {\n    color: black;\n\n    &:hover,\n    &:focus {\n      background-color: rgb(165, 168, 173);\n      color: white;\n    }\n  }\n"]))),N=t(7797),y=function(){var n=(0,o.I0)(),e=(0,o.v9)(c.wt),t=(0,o.v9)(c.I0),i=(0,o.v9)(c.Fc);(0,j.useEffect)((function(){n((0,l.yF)())}),[n]);return(0,u.jsxs)(k,{children:[(0,u.jsx)("ul",{children:i.length>0?i.map((function(e){return(0,u.jsxs)("li",{className:"item",children:[e.name,": ",e.number,(0,u.jsx)(N.Z,{className:"btn_delete","aria-label":"delete",onClick:function(){return t=e.id,void n((0,l.GK)(t));var t},children:(0,u.jsx)(w.Z,{})})]},e.id)})):(0,u.jsx)("p",{children:"No contacts found"})}),e&&(0,u.jsx)(v.Z,{}),t&&(0,u.jsx)("p",{children:"Oppsss Erorr"})]})},z=function(){return(0,u.jsx)(f,{children:(0,u.jsxs)("div",{className:"appstyled",children:[(0,u.jsx)(m,{}),(0,u.jsx)("h2",{className:"text",children:"Contacts"}),(0,u.jsx)(b,{}),(0,u.jsx)(y,{})]})})}}}]);
//# sourceMappingURL=399.bc93f4bb.chunk.js.map