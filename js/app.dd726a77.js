(function(t){function e(e){for(var c,r,i=e[0],u=e[1],s=e[2],b=0,d=[];b<i.length;b++)r=i[b],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(t[c]=u[c]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],c=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(c=!1)}c&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var c={},o={app:0},a=[];function r(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=c,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)r.d(n,c,function(e){return t[e]}.bind(null,c));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/contacts-book/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0c6b":function(t,e,n){"use strict";n("f783")},1572:function(t,e,n){t.exports=n.p+"img/times.f8c56c32.svg"},"27e4":function(t,e,n){t.exports=n.p+"img/arrow.c30ba9a2.svg"},"36d5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("78a7"),n("77ed");var c=n("7a23");function o(t,e,n,o,a,r){var i=Object(c["y"])("Header"),u=Object(c["y"])("router-view");return Object(c["r"])(),Object(c["f"])(c["a"],null,[Object(c["i"])(i),Object(c["i"])(u,null,{default:Object(c["F"])((function(t){return[Object(c["i"])(c["b"],{name:"page",mode:"out-in"},{default:Object(c["F"])((function(){return[(Object(c["r"])(),Object(c["f"])(Object(c["z"])(t.Component)))]})),_:2},1024)]})),_:1})],64)}var a=n("27e4"),r=n.n(a),i=n("e347"),u=n.n(i),s=Object(c["I"])("data-v-4ed9abd1");Object(c["u"])("data-v-4ed9abd1");var l={class:"header"},b={class:"container"},d=Object(c["i"])("img",{src:r.a,alt:""},null,-1),f=Object(c["i"])("h1",{class:"header__name"}," Книга контактов ",-1),p=Object(c["i"])("img",{src:u.a,alt:""},null,-1);Object(c["s"])();var O=s((function(t,e,n,o,a,r){var i=Object(c["y"])("router-link");return Object(c["r"])(),Object(c["f"])("header",l,[Object(c["i"])("div",b,[r.isHome?Object(c["g"])("",!0):(Object(c["r"])(),Object(c["f"])(i,{key:0,tag:"a",to:"/",exact:"","active-class":"active"},{default:s((function(){return[d]})),_:1})),f,Object(c["i"])(i,{tag:"a",to:"/",exact:"","active-class":"active"},{default:s((function(){return[p]})),_:1})])])})),j={computed:{isHome:function(){return"/"===this.$route.path}}};n("0c6b");j.render=O,j.__scopeId="data-v-4ed9abd1";var m=j,v={components:{Header:m}};v.render=o;var h=v,g=n("9483");Object(g["a"])("".concat("/contacts-book/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var y=n("6c02"),_=(n("b0c0"),n("5860")),C=n.n(_),w=Object(c["I"])("data-v-ccd8d846");Object(c["u"])("data-v-ccd8d846");var x={class:"home"},k={class:"container"},F={class:"inputs-row"},S={class:"input"},I=Object(c["i"])("span",null,"Имя:",-1),U={class:"input"},V=Object(c["i"])("span",null,"Телефон:",-1),B={class:"input"},D={class:"input"},H={class:"btns-row"},P=Object(c["i"])("img",{src:C.a,alt:""},null,-1),G=Object(c["h"])(" Добавить поле "),$=Object(c["i"])("button",{type:"submit",class:"btn btn_green"}," Добавить контакт ",-1),N=Object(c["i"])("hr",{class:"separator"},null,-1);Object(c["s"])();var J=w((function(t,e,n,o,a,r){var i=Object(c["y"])("contactsList");return Object(c["r"])(),Object(c["f"])("div",x,[Object(c["i"])("div",k,[Object(c["i"])("form",{onSubmit:e[4]||(e[4]=Object(c["H"])((function(){return r.addContact&&r.addContact.apply(r,arguments)}),["prevent"])),action:"post"},[Object(c["i"])("div",F,[Object(c["i"])("label",S,[I,Object(c["G"])(Object(c["i"])("input",{type:"text",name:"name","onUpdate:modelValue":e[1]||(e[1]=function(t){return a.form.name=t})},null,512),[[c["D"],a.form.name]])]),Object(c["i"])("label",U,[V,Object(c["G"])(Object(c["i"])("input",{type:"tel",name:"tel","onUpdate:modelValue":e[2]||(e[2]=function(t){return a.form.tel=t})},null,512),[[c["D"],a.form.tel]])])]),(Object(c["r"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(a.form.bonusFields,(function(t,e){return Object(c["r"])(),Object(c["f"])("div",{class:"inputs-row",key:t},[Object(c["i"])("label",B,[Object(c["i"])("span",null,"Дополнительное поле "+Object(c["B"])(e+1)+":",1),Object(c["G"])(Object(c["i"])("input",{type:"text",name:t.name,"onUpdate:modelValue":function(e){return t.name=e},placeholder:"Введите название поля"},null,8,["name","onUpdate:modelValue"]),[[c["D"],t.name]])]),Object(c["i"])("label",D,[Object(c["G"])(Object(c["i"])("input",{type:"tel","onUpdate:modelValue":function(e){return t.value=e},placeholder:"Введите значение"},null,8,["onUpdate:modelValue"]),[[c["D"],t.value]])])])})),128)),Object(c["i"])("div",H,[Object(c["i"])("div",{tabindex:"0",onClick:e[3]||(e[3]=function(){return r.addField&&r.addField.apply(r,arguments)}),class:"btn"},[P,G]),$])],32),N,Object(c["i"])(i)])])})),A=n("68e3"),M=n.n(A),E=n("1572"),L=n.n(E),T=Object(c["I"])("data-v-19650354");Object(c["u"])("data-v-19650354");var q={class:"contacts-list"},z={class:"contacts-item__head"},K={class:"btns-row"},Q=Object(c["i"])("img",{src:M.a,alt:"Изменить контакт"},null,-1),R=Object(c["i"])("img",{src:L.a,alt:"Удалить контакт"},null,-1),W=Object(c["i"])("span",null,"Телефон: ",-1),X={class:"contacts-item__list"};Object(c["s"])();var Y=T((function(t,e,n,o,a,r){var i=Object(c["y"])("router-link");return Object(c["r"])(),Object(c["f"])("ul",q,[Object(c["i"])(c["c"],{name:"page",mode:"out-in"},{default:T((function(){return[(Object(c["r"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(r.contacts,(function(t){return Object(c["r"])(),Object(c["f"])("li",{class:"contacts-item",key:t.id},[Object(c["i"])("div",z,[Object(c["i"])("h2",null,Object(c["B"])(t.name),1),Object(c["i"])("div",K,[Object(c["i"])(i,{tag:"div",tabindex:"0",class:"btn btn_s btn_green",to:"/contacts/"+t.id},{default:T((function(){return[Q]})),_:2},1032,["to"]),Object(c["i"])("div",{onClick:function(e){return r.removeContact(t.id)},tabindex:"0",type:"submit",class:"btn btn_s btn_red"},[R],8,["onClick"])])]),Object(c["i"])("h3",null,[W,Object(c["i"])("a",{href:"tel:"+t.tel},Object(c["B"])(t.tel),9,["href"])]),Object(c["i"])("ul",X,[(Object(c["r"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(t.bonusFields,(function(t){return Object(c["r"])(),Object(c["f"])("li",{key:t},[Object(c["i"])("b",null,Object(c["B"])(t.name)+": ",1),Object(c["i"])("span",null,Object(c["B"])(t.value),1)])})),128))])])})),128))]})),_:1})])})),Z={computed:{contacts:function(){return this.$store.getters.contacts}},methods:{removeContact:function(t){confirm("Вы уверены что хотите удалить контакт?")&&this.$store.dispatch("removeContact",t)}}};n("f56f");Z.render=Y,Z.__scopeId="data-v-19650354";var tt=Z,et={components:{contactsList:tt},name:"Home",data:function(){return{form:{name:"",tel:"",bonusFields:[]}}},methods:{addField:function(){var t={name:"",value:""};this.form.bonusFields.push(t)},addContact:function(){var t={name:this.form.name,tel:this.form.tel,bonusFields:this.form.bonusFields,id:Date.now()};this.$store.dispatch("createContact",t),this.form.name="",this.form.tel="",this.form.bonusFields=[]}}};n("9dc8");et.render=J,et.__scopeId="data-v-ccd8d846";var nt=et,ct=(n("b8fa"),[{path:"/",name:"Home",component:nt},{path:"/contacts/:id",name:"contact",component:function(){return Promise.resolve().then(n.bind(null,"b8fa"))}}]),ot=Object(y["a"])({history:Object(y["b"])("/contacts-book/"),routes:ct}),at=ot,rt=(n("7db0"),n("c740"),n("a434"),n("5502")),it=Object(rt["a"])({state:{contacts:JSON.parse(localStorage.getItem("contacts"))||[{id:1,name:"Mironov Ernest Arvovich",tel:"8(911)-195-37-13",bonusFields:[{name:"Adress",value:"Saint - Petersburg"}]}]},mutations:{createContact:function(t,e){t.contacts.push(e),localStorage.setItem("contacts",JSON.stringify(t.contacts))},removeContact:function(t,e){var n=t.contacts.findIndex((function(t){return t.id===e}));t.contacts.splice(n,1),localStorage.setItem("contacts",JSON.stringify(t.contacts))},updateContact:function(t,e){var n=t.contacts.findIndex((function(t){return t.id===e.id}));t.contacts[n]=e,localStorage.setItem("contacts",JSON.stringify(t.contacts))}},actions:{createContact:function(t,e){var n=t.commit;n("createContact",e)},removeContact:function(t,e){var n=t.commit;n("removeContact",e)},updateContact:function(t,e){var n=t.commit;n("updateContact",e)}},modules:{},getters:{contacts:function(t){return t.contacts},getContactById:function(t){return function(e){return t.contacts.find((function(t){return t.id===e}))}}}});Object(c["e"])(h).use(it).use(at).mount("#app")},5860:function(t,e,n){t.exports=n.p+"img/plus.d92c7b67.svg"},"68e3":function(t,e,n){t.exports=n.p+"img/pencil.67a53557.svg"},"78a7":function(t,e,n){},"78e4":function(t,e,n){},"9dc8":function(t,e,n){"use strict";n("36d5")},a25b:function(t,e,n){"use strict";n("78e4")},b8fa:function(t,e,n){"use strict";n.r(e);n("b0c0");var c=n("7a23"),o=n("5860"),a=n.n(o),r=Object(c["I"])("data-v-0dcc7074");Object(c["u"])("data-v-0dcc7074");var i={class:"home"},u={class:"container"},s={class:"input"},l=Object(c["i"])("span",null,"Имя:",-1),b={class:"input"},d=Object(c["i"])("span",null,"Телефон:",-1),f={class:"input"},p={class:"input"},O={class:"btns-row"},j=Object(c["i"])("img",{src:a.a,alt:""},null,-1),m=Object(c["h"])(" Добавить поле "),v=Object(c["i"])("button",{type:"submit",class:"btn btn_green"}," Сохранить изменения ",-1);Object(c["s"])();var h=r((function(t,e,n,o,a,h){return Object(c["r"])(),Object(c["f"])(c["b"],{name:"page",mode:"out-in"},{default:r((function(){return[Object(c["i"])("div",i,[Object(c["i"])("div",u,[Object(c["i"])("form",{onSubmit:e[4]||(e[4]=Object(c["H"])((function(){return h.saveContact&&h.saveContact.apply(h,arguments)}),["prevent"])),action:"post"},[Object(c["i"])("h1",null,Object(c["B"])(a.form.name),1),Object(c["i"])("label",s,[l,Object(c["G"])(Object(c["i"])("input",{type:"text",name:"name","onUpdate:modelValue":e[1]||(e[1]=function(t){return a.form.name=t})},null,512),[[c["D"],a.form.name]])]),Object(c["i"])("label",b,[d,Object(c["G"])(Object(c["i"])("input",{type:"tel",name:"tel","onUpdate:modelValue":e[2]||(e[2]=function(t){return a.form.tel=t})},null,512),[[c["D"],a.form.tel]])]),(Object(c["r"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(a.form.bonusFields,(function(t,e){return Object(c["r"])(),Object(c["f"])("div",{class:"inputs-row",key:t},[Object(c["i"])("label",f,[Object(c["i"])("span",null,"Дополнительное поле "+Object(c["B"])(e+1),1),Object(c["G"])(Object(c["i"])("input",{"onUpdate:modelValue":function(e){return t.name=e},placeholder:"Введите название поля"},null,8,["onUpdate:modelValue"]),[[c["D"],t.name]])]),Object(c["i"])("label",p,[Object(c["G"])(Object(c["i"])("input",{"onUpdate:modelValue":function(e){return t.value=e},placeholder:"Введите значение"},null,8,["onUpdate:modelValue"]),[[c["D"],t.value]])])])})),128)),Object(c["i"])("div",O,[Object(c["i"])("div",{tabindex:"0",onClick:e[3]||(e[3]=function(){return h.addField&&h.addField.apply(h,arguments)}),class:"btn"},[j,m]),v])],32)])])]})),_:1})})),g=n("5530"),y={name:"Home",data:function(){return{form:{name:"",tel:"",bonusFields:[]}}},computed:{contact:function(){return this.$store.getters.getContactById(+this.$route.params.id)}},methods:{addField:function(){var t={name:"",value:""};this.form.bonusFields.push(t)},saveContact:function(){this.$store.dispatch("updateContact",Object(g["a"])({id:this.contact.id},this.form)),this.$router.push({path:"/"})}},mounted:function(){this.form=this.contact,console.log(this.form)}};n("a25b");y.render=h,y.__scopeId="data-v-0dcc7074";e["default"]=y},bf52:function(t,e,n){},e347:function(t,e,n){t.exports=n.p+"img/logo.16f0fde2.svg"},f56f:function(t,e,n){"use strict";n("bf52")},f783:function(t,e,n){}});
//# sourceMappingURL=app.dd726a77.js.map