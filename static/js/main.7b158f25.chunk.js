(this.webpackJsonpsharedlayouttransitions=this.webpackJsonpsharedlayouttransitions||[]).push([[0],{20:function(e,a,t){e.exports=t(35)},25:function(e,a,t){},26:function(e,a,t){},32:function(e,a,t){e.exports=t.p+"static/media/fruit.4946a590.webp"},33:function(e,a,t){e.exports=t.p+"static/media/compressed-image.f454b1ec.jpg"},34:function(e,a,t){e.exports=t.p+"static/media/fruit.aa8bb458.jpg"},35:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),r=t(16),l=t.n(r),c=(t(25),t(1)),s=t(9),m=t(2),o=(t(26),function(){return n.a.createElement("header",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row space-between"},n.a.createElement("div",{className:"logo"},n.a.createElement(s.b,{to:"/fruit_site/"},"SOME FRUIT")),n.a.createElement("div",{className:"menu"},"MENU"))))}),u=t(18),d=t.n(u),E={duration:.5,ease:[.43,.13,.23,.96]},p=function(e){var a=e.imageDetails,r=e.image;return n.a.createElement(i.Fragment,null,n.a.createElement("main",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row center"},n.a.createElement("div",{className:"image-container"},n.a.createElement("div",{className:"thumbnail",ref:r,style:{width:a.width,height:a.height}},n.a.createElement("div",{className:"frame"},n.a.createElement(s.b,{to:"/fruit_site/some/fruit"},n.a.createElement(d.a,{src:t(32),placeholder:t(33)},(function(e){return n.a.createElement(c.b.img,{whileHover:{scale:1.1},transition:{transition:E},src:e,alt:"Fruit"})}))))),n.a.createElement(c.b.div,{exit:{opacity:0},transition:{transition:E},className:"information"},n.a.createElement("div",{className:"title"},"Fruit"),n.a.createElement("div",{className:"location"},n.a.createElement("span",null,"28.538336"),n.a.createElement("span",null,"-81.379234"))))))))},v=t(19),h=t(8),b={duration:1.4,ease:[.6,.01,-.05,.9]},f=function(){return n.a.createElement(c.b.div,{className:"scroll-for-more",initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:Object(h.a)({delay:1.2},b)}},n.a.createElement("div",{className:"icon"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"23.539",height:"29.985",viewBox:"0 0 23.539 29.985"},n.a.createElement("g",{id:"down-arrow",transform:"translate(-67.666 0.6)"},n.a.createElement("g",{id:"Group_1","data-name":"Group 1",transform:"translate(68.266)"},n.a.createElement("path",{id:"Path_1","data-name":"Path 1",d:"M90.452,18.153l-2.9-2.664a.528.528,0,0,0-.71,0L81.974,20V.48A.5.5,0,0,0,81.466,0H77.4A.5.5,0,0,0,76.9.48V20l-4.872-4.515a.529.529,0,0,0-.709,0l-2.9,2.664a.46.46,0,0,0,0,.687l10.662,9.81a.528.528,0,0,0,.708,0l10.662-9.81a.461.461,0,0,0,0-.687Z",transform:"translate(-68.266)",fill:"none",stroke:"#fff","stroke-width":"1.2"}))))),n.a.createElement("div",{className:"text"},"Scroll ",n.a.createElement("br",null),"for more"))},g={duration:1.4,ease:[.6,.01,-.05,.9]},w={animate:{transition:{delayChildren:.6,staggerChildren:.04,staggerDirection:-1}}},N={animate:{transition:{delayChildren:.6,staggerChilren:.04,staggerDirection:1}}},y={initial:{y:400},animate:{y:0,transition:Object(h.a)({duration:1},g)}},x=function(e){var a=e.imageDetails,r=Object(c.d)().scrollYProgress,l=Object(c.c)(r,[0,1],[1.1,1.25]),s=Object(i.useState)(!1),m=Object(v.a)(s,2),o=m[0],u=m[1];return Object(i.useEffect)((function(){!1===o?document.querySelector("body").classList.add("no-scroll"):document.querySelector("body").classList.remove("no-scroll")}),[o]),n.a.createElement(c.b.div,{onAnimationComplete:function(){u(!0)},initial:"initial",animate:"animate",exit:"exit",className:"single"},n.a.createElement("div",{className:"container fluid"},n.a.createElement("div",{className:"row center top-row"},n.a.createElement("div",{className:"top"},n.a.createElement(c.b.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:20,transition:Object(h.a)({delay:1.2},g)},className:"details"},n.a.createElement("div",{className:"location"},n.a.createElement("span",null,"28.538336"),n.a.createElement("span",null,"-81.379234")),n.a.createElement("div",{className:"mua"},"Instagram: @somefruit")),n.a.createElement(c.b.div,{className:"model"},n.a.createElement(c.b.span,{variants:w,className:"first"},n.a.createElement(c.b.span,{variants:y},"S"),n.a.createElement(c.b.span,{variants:y},"o"),n.a.createElement(c.b.span,{variants:y},"m"),n.a.createElement(c.b.span,{variants:y},"e")),n.a.createElement(c.b.span,{variants:N,className:"last"},n.a.createElement(c.b.span,{variants:y},"F"),n.a.createElement(c.b.span,{variants:y},"r"),n.a.createElement(c.b.span,{variants:y},"u"),n.a.createElement(c.b.span,{variants:y},"i"),n.a.createElement(c.b.span,{variants:y},"t"))))),n.a.createElement("div",{className:"row bottom-row"},n.a.createElement("div",{className:"bottom"},n.a.createElement("div",{className:"image-container-single"},n.a.createElement(c.b.div,{initial:{y:"-50%",width:a.width,height:a.height},animate:{y:0,width:"100%",height:window.innerWidth>1440?800:400,transition:Object(h.a)({delay:.2},g)},className:"thumbnail-single"},n.a.createElement("div",{className:"frame-single"},n.a.createElement(c.b.img,{style:{scale:l},initial:{scale:1.1},animate:{transition:Object(h.a)({delay:.2},g),y:window.innerWidth>1440?-1200:-600},src:t(34),alt:"some fruit"}))))),n.a.createElement(f,null))),n.a.createElement("div",{className:"detailed-information"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("h2",{className:"title"},"Why make a project about ",n.a.createElement("br",null)," some fruit?"),n.a.createElement("p",null,"Dolor nisi do quis pariatur. Occaecat aliqua duis elit qui occaecat quis. Sint aliqua sint reprehenderit do id quis reprehenderit ut incididunt cillum duis. Cillum velit velit ut ex exercitation occaecat Lorem et nulla in duis sint. Et esse ut veniam minim officia consectetur. Proident consequat est aute exercitation ad velit voluptate consectetur ea. Laborum anim sint ipsum sint quis labore aliqua. Minim est et est incididunt. Qui eu et laborum velit aliquip minim minim elit nulla non sint esse. Laborum voluptate ullamco voluptate adipisicing incididunt deserunt aute cupidatat culpa do. Mollit elit laboris culpa est exercitation proident. Et consequat eu tempor nisi adipisicing mollit culpa cillum ut. Minim veniam cupidatat ut occaecat do ex laborum pariatur. Velit non in ea veniam minim enim qui. Reprehenderit sit anim sint laborum fugiat Lorem sit aute id aliquip cillum culpa non ut. Do id occaecat voluptate magna velit.")))))};var q=function(){var e={width:524,height:650};return n.a.createElement(s.a,null,n.a.createElement(o,null),n.a.createElement(m.a,{render:function(a){var t=a.location;return n.a.createElement(c.a,{initial:!1,exitBeforeEnter:!0},n.a.createElement(m.c,{location:t,key:t.pathname},n.a.createElement(m.a,{exact:!0,path:"/fruit_site/",render:function(){return n.a.createElement(p,{imageDetails:e})}}),n.a.createElement(m.a,{exact:!0,path:"/fruit_site/some/:id",render:function(){return n.a.createElement(x,{imageDetails:e})}})))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.7b158f25.chunk.js.map