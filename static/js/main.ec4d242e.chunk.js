(this["webpackJsonpposts-app"]=this["webpackJsonpposts-app"]||[]).push([[0],{19:function(e,t,a){e.exports={rxModal:"RxModal_rxModal__uRqnV",rxModal__content:"RxModal_rxModal__content__3c8vM",active:"RxModal_active__1rrod"}},21:function(e,t,a){e.exports={rxInput:"RxInput_rxInput__2Ps4_"}},31:function(e,t,a){e.exports={ldsFacebook:"Loader_ldsFacebook__ouT7P","lds-facebook":"Loader_lds-facebook__3sUog"}},32:function(e,t,a){e.exports={rxButton:"RxButton_rxButton__1JRpE"}},40:function(e,t,a){},41:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),s=a(30),r=a.n(s),c=(a(40),a(9)),u=a(2),o=(a(41),"https://posts-api-thanxs.vercel.app/api"),l="posts-app",d=a(0),p=function(){return Object(d.jsxs)("div",{className:"error-page",children:[Object(d.jsxs)("div",{className:"error-page__emoji",children:["404 - Page not found",Object(d.jsx)("span",{children:"\ud83e\udd2c"})]}),Object(d.jsx)(c.b,{className:"error-page__link",to:l+"/posts",children:"Go to posts"})]})},m=a(3),j=a.n(m),b=a(6),f=a(4),v=function(e){var t=Object(n.useState)(!1),a=Object(f.a)(t,2),i=a[0],s=a[1],r=Object(n.useState)(""),c=Object(f.a)(r,2),u=c[0],o=c[1],l=function(){var t=Object(b.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s(!0),t.next=4,e();case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),o(t.t0.message);case 9:return t.prev=9,s(!1),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})));return function(){return t.apply(this,arguments)}}();return[l,i,u]},h=a(16),O=a(17),x=a(11),_=a.n(x),g=function(){function e(){Object(h.a)(this,e)}return Object(O.a)(e,null,[{key:"getAllPosts",value:function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("".concat(o,"/posts"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getPostById",value:function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("".concat(o,"/posts/").concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"createPost",value:function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post("".concat(o,"/posts"),t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"deletePost",value:function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.delete("".concat(o,"/posts/").concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchImage",value:function(e){return"".concat(o,"/").concat(e.picture)}},{key:"fetchTestPosts",value:function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("".concat(o,"/test"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),q=a(31),y=a.n(q),N=function(){return Object(d.jsxs)("div",{className:y.a.ldsFacebook,children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})},k=a(18),w=a.n(k),C=(a(63),function(){var e=Object(u.g)(),t=Object(n.useState)({title:"",author:"",body:"",_id:"",picture:""}),a=Object(f.a)(t,2),i=a[0],s=a[1],r=Object(n.useState)(""),c=Object(f.a)(r,2),o=(c[0],c[1]),l=v(Object(b.a)(j.a.mark((function t(){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.getPostById(e.id);case 2:a=t.sent,o(g.fetchImage(a)),s(a);case 5:case"end":return t.stop()}}),t)})))),p=Object(f.a)(l,2),m=p[0],h=p[1];return Object(n.useEffect)((function(){m()}),[]),Object(d.jsx)("div",{className:"post-page",children:h?Object(d.jsx)("div",{className:"post-page__loader",children:Object(d.jsx)(N,{})}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:"post-page__title",children:i.title}),Object(d.jsx)("div",{className:"post-page__author",children:i.author}),Object(d.jsx)("div",{className:"post-page__description",children:i.body}),Object(d.jsx)("div",{className:"post-page__image"}),Object(d.jsx)("div",{className:"post-page__created",children:w()(i.createdAt).format("MMMM Do YYYY")})]})})}),M=a(13),S=function(e,t,a){var i=function(e,t){return Object(n.useMemo)((function(){return t?Object(M.a)(e).sort((function(e,a){return e[t].localeCompare(a[t])})):e}),[t,e])}(e,t);return Object(n.useMemo)((function(){return i&&i.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}))}),[a,i])},P=a(5),I=a(35),T=a(32),A=a.n(T),B={primary:"#607d8b",accent:"#e91e63",warn:"#f44336"},E=["children","color"],L=function(e){var t=e.children,a=e.color,n=Object(I.a)(e,E),i=a;return i&&i in B&&(i=B[i]),Object(d.jsx)("button",Object(P.a)(Object(P.a)({},n),{},{style:{background:n.disabled?"#ddd":i},className:A.a.rxButton,children:t}))},z=a(19),R=a.n(z),D=function(e){var t=e.children,a=e.visible,n=e.setVisible,i=[R.a.rxModal];return a&&i.push(R.a.active),Object(d.jsx)("div",{className:i.join(" "),onClick:function(){return n(!1)},children:Object(d.jsx)("div",{className:R.a.rxModal__content,onClick:function(e){return e.stopPropagation()},children:t})})},F=a(21),Y=a.n(F),V=function(e){return Object(d.jsx)(d.Fragment,{children:"textarea"===e.inputtype?Object(d.jsx)("textarea",Object(P.a)({rows:10,className:Y.a.rxInput},e)):Object(d.jsx)("input",Object(P.a)({className:Y.a.rxInput},e))})},Q=(a(64),function(e){var t=e.create,a=Object(n.useState)({title:"",body:"",author:"",picture:""}),i=Object(f.a)(a,2),s=i[0],r=i[1];return Object(d.jsxs)("form",{className:"post__form",children:[Object(d.jsx)(V,{value:s.title,onChange:function(e){return r(Object(P.a)(Object(P.a)({},s),{},{title:e.target.value}))},type:"text",placeholder:"post title"}),Object(d.jsx)(V,{value:s.body,onChange:function(e){return r(Object(P.a)(Object(P.a)({},s),{},{body:e.target.value}))},inputtype:"textarea",placeholder:"post description"}),Object(d.jsx)(V,{value:s.author,onChange:function(e){return r(Object(P.a)(Object(P.a)({},s),{},{author:e.target.value}))},type:"text",placeholder:"author"}),Object(d.jsx)(L,{color:"accent",onClick:function(e){e.preventDefault(),t(s),r({title:"",body:"",author:"",picture:""})},children:"Create post"})]})}),J=(a(65),function(e){var t=e.defaultValue,a=e.options,n=e.value,i=e.onChange;return Object(d.jsxs)("select",{className:"rx-select",value:n,onChange:function(e){return i(e.target.value)},children:[Object(d.jsx)("option",{disabled:!0,value:"",children:t}),a.map((function(e){return Object(d.jsx)("option",{value:e.value,children:e.name},e.value)}))]})}),U=(a(66),function(e){var t=e.filter,a=e.setFilter;return Object(d.jsxs)("div",{className:"post-filter",children:[Object(d.jsx)(V,{value:t.query,onChange:function(e){return a(Object(P.a)(Object(P.a)({},t),{},{query:e.target.value}))},placeholder:"Search by title..."}),Object(d.jsx)("div",{className:"post-filter__select",children:Object(d.jsx)(J,{value:t.sort,defaultValue:"Sorting",onChange:function(e){return a(Object(P.a)(Object(P.a)({},t),{},{sort:e}))},options:[{value:"title",name:"By title"},{value:"body",name:"By description"},{value:"author",name:"By author"},{value:"createdAt",name:"By date"}]})})]})}),G=(a(67),function(e){var t=e.post,a=e.remove,n=Object(u.f)();return Object(d.jsx)("div",{className:"post",children:Object(d.jsxs)("div",{className:"post__content",children:[Object(d.jsx)("h3",{className:"post__title",children:t.title}),Object(d.jsx)("div",{className:"post__author",children:t.author}),Object(d.jsx)("div",{className:"post__description",children:t.body}),Object(d.jsx)("div",{className:"post__created",children:w()(t.createdAt).format("MMMM Do YYYY")}),Object(d.jsxs)("div",{className:"post__btns",children:[Object(d.jsx)(L,{color:"accent",onClick:function(){return n(t._id)},children:"Open"}),Object(d.jsx)("div",{className:"post__btns-margin"}),Object(d.jsx)(L,{color:"warn",onClick:function(){return a(t)},children:"Remove"})]})]})})}),H=(a(68),function(e){var t=e.posts,a=e.title,n=e.remove;return t&&t.length?Object(d.jsxs)("div",{className:"posts__list",children:[Object(d.jsx)("h1",{className:"posts__title",children:a}),t.map((function(e){return Object(d.jsx)(G,{post:e,remove:n},e._id)}))]}):Object(d.jsxs)("div",{className:"posts__not",children:["Posts not found ",Object(d.jsx)("span",{children:"\ud83d\ude15"})]})}),K=(a(69),function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],i=t[1],s=Object(n.useState)({sort:"",query:""}),r=Object(f.a)(s,2),c=r[0],u=r[1],o=Object(n.useState)(!1),l=Object(f.a)(o,2),p=l[0],m=l[1],h=S(a,c.sort,c.query),O=v(Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getAllPosts();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})))),x=Object(f.a)(O,3),_=x[0],q=x[1],y=x[2];Object(n.useEffect)((function(){_()}),[]);var k=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.createPost(t);case 2:n=e.sent,i([].concat(Object(M.a)(a),[n])),m(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.deletePost(t._id);case 2:n=e.sent,i(Object(M.a)(a.filter((function(e){return e._id!==n._id}))));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.fetchTestPosts();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"posts",children:[Object(d.jsx)(D,{visible:p,setVisible:m,children:Object(d.jsx)(Q,{create:k})}),Object(d.jsx)("div",{className:"posts__fetch",children:Object(d.jsx)(L,{disabled:a.length,color:"primary",onClick:C,children:"Fetch test posts"})}),Object(d.jsx)("div",{className:"posts__filter",children:Object(d.jsx)(U,{filter:c,setFilter:u})}),Object(d.jsx)("div",{className:"posts__create",children:Object(d.jsx)(L,{onClick:function(){return m(!0)},children:"Create Post"})}),y&&Object(d.jsx)("div",{children:y}),q?Object(d.jsx)("div",{className:"posts__loader",children:Object(d.jsx)(N,{})}):Object(d.jsx)(H,{remove:w,posts:h,title:"JS POSTS"})]})}),W={dark:{background:"#12181b",color:"#ffffff"},light:{background:"#ffffff",color:"#12181b"}},X=Object(n.createContext)({theme:W.dark,toggleTheme:function(){}}),Z=a(34),$=a(33),ee=(a(70),function(e){Object(Z.a)(a,e);var t=Object($.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(O.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"home",children:Object(d.jsx)("h1",{className:"home__title",children:"welcome to post app"})})}}]),a}(n.Component)),te=ee,ae=(a(71),function(){return Object(d.jsx)("div",{className:"about",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi blanditiis iste fuga at magni dolorem deserunt necessitatibus facilis et sunt, impedit, veritatis rerum! Incidunt, ad, optio esse accusantium quae amet sint sunt dolor dicta explicabo soluta in, a ducimus! Praesentium reprehenderit nam at quasi odit, necessitatibus quam, temporibus quas nisi nobis exercitationem blanditiis culpa, quo libero. Nam voluptate dolore numquam repellendus voluptatem unde rem aut animi quidem impedit? Accusantium facere officiis aspernatur amet sed aperiam sint aliquid cupiditate doloremque ullam mollitia, qui illo unde, ea repellat illum quas. Odit nostrum voluptatum nam repellendus impedit quis ad dignissimos possimus necessitatibus nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni labore alias a culpa possimus ad placeat, distinctio beatae cum recusandae illum earum sequi perferendis, ab dicta reiciendis quo aut? Dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quo explicabo distinctio, consequuntur ab, perferendis perspiciatis architecto unde rerum non placeat atque voluptates quasi nesciunt accusamus dolorum dignissimos, corrupti laboriosam. Nam earum sapiente facilis sunt, optio ad quae asperiores, quo repudiandae, libero rerum reprehenderit? Delectus cumque quis ipsum similique, consequuntur ex earum atque aliquid unde quam aut, cum eius reiciendis. Illum dolor iste saepe culpa consequatur dolore impedit aspernatur quidem sunt, corporis dolorem laborum veniam eligendi, vel, dolores id optio perferendis voluptatibus magni voluptatem eius itaque quaerat! Maiores, natus beatae. Excepturi, vitae? Quasi doloribus perferendis consequatur delectus quibusdam eveniet similique obcaecati, nam adipisci animi voluptas dolorum ea molestias ex quisquam velit. Iusto ipsum rem odit! Eaque sunt voluptatem neque quos? Quas ipsam aut deserunt mollitia sunt et odit optio tenetur odio dignissimos quisquam quos, error eum voluptate quae ea suscipit cupiditate saepe eius distinctio eos? Nulla atque quis delectus hic. Nobis, laborum in id repudiandae quo enim excepturi, accusantium quidem consequuntur quos, totam incidunt delectus voluptatem soluta ratione nostrum nulla veniam quis ab vero dolor magnam. Eveniet, nesciunt. Sed, quo. Explicabo culpa inventore dolorem, quis corporis maxime sapiente molestiae itaque expedita! Totam, tempore dolores? Dolor fugit rerum, a nobis similique dignissimos ipsum. Totam, suscipit est cum reprehenderit libero repellendus? Sit. Odit provident ad voluptatibus. Architecto fugit rem exercitationem, voluptates unde minus earum debitis magni dolorum nesciunt harum consectetur sequi dignissimos eos ad iste repudiandae itaque similique quis. Laboriosam, consequuntur at? Id sapiente modi voluptatum praesentium, dicta magni molestiae accusantium illum ullam labore voluptate corrupti suscipit voluptatem provident cumque magnam unde, officia cum? Eaque ex voluptate nisi molestiae nulla magni voluptates. Deleniti, corporis dolores ab sed vero ipsa? Itaque sit reiciendis molestiae explicabo totam enim minus non aut excepturi ea laborum quia exercitationem culpa similique blanditiis repudiandae rem minima, hic aliquam? Similique minus consectetur reiciendis officia eligendi sequi doloribus perspiciatis itaque ex quam nihil, quaerat vel ratione perferendis quod, magni adipisci provident sed excepturi? Ut, placeat corrupti? Quam quisquam placeat at. Aoloremque cumque laboriosam temporibus accusantium. Reprehenderit illo dolorem minus! Voluptas, fuga. Aperiam, quos! Velit provident non consequuntur sit aperiam, architecto vitae corporis fugiat id doloribus esse officiis rerum recusandae doloremque sint! Laborum perferendis vero nesciunt. Corrupti, repellendus ad similique cumque quasi quia suscipit! Quod quo ea asperiores quaerat magni cumque nobis ut? Ducimus eum in delectus, quae dignissimos architecto dolorum eius officiis distinctio eligendi numquam saepe tempore fugiat, corrupti odit voluptate fugit deleniti! Omnis, porro harum odit quas reiciendis numquam nobis tenetur ratione officiis mollitia officia assumenda ipsam enim. Assumenda pariatur aspernatur cum, corrupti amet, voluptatibus aperiam iste dignissimos cupiditate, eos rem voluptas. Quae voluptas perspiciatis minus dolores aspernatur ratione dolore, atque natus repudiandae. Optio culpa, voluptatum ducimus voluptatem dolorem assumenda impedit! Inventore quas consectetur eos, enim sit aliquam molestiae nobis vero. Tenetur!"})}),ne=(a(72),Object(n.lazy)((function(){return a.e(3).then(a.bind(null,78))}))),ie=function(){return Object(d.jsxs)("div",{className:"lazy",children:[Object(d.jsx)("h2",{className:"lazy__title",children:"Lazy loading"}),Object(d.jsx)("div",{className:"lazy__description",children:"This page was created for testing such a feature of the React as lazy loading. Open development tools to check"}),Object(d.jsx)(n.Suspense,{fallback:Object(d.jsx)("div",{className:"lazy__loader",children:Object(d.jsx)(N,{})}),children:Object(d.jsx)(ne,{})})]})},se=(a(73),function(){var e=Object(n.useContext)(X).theme;return Object(d.jsx)("div",{id:"layout",style:e,children:Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{path:l,element:Object(d.jsx)(te,{})}),Object(d.jsx)(u.a,{path:l+"/about",element:Object(d.jsx)(ae,{})}),Object(d.jsx)(u.a,{path:l+"/posts",element:Object(d.jsx)(K,{})}),Object(d.jsx)(u.a,{path:l+"/lazy",element:Object(d.jsx)(ie,{})}),Object(d.jsx)(u.a,{path:l+"/posts/:id",element:Object(d.jsx)(C,{})}),Object(d.jsx)(u.a,{path:"*",element:Object(d.jsx)(p,{})})]})})}),re=(a(74),function(){var e=Object(n.useContext)(X),t=e.toggleTheme,a=e.theme===W.dark?"moon":"sun";return Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsxs)("div",{className:"navbar__links",children:[Object(d.jsx)(c.b,{className:"navbar__link",to:l,children:"Home"}),Object(d.jsx)(c.b,{className:"navbar__link",to:l+"/about",children:"About"}),Object(d.jsx)(c.b,{className:"navbar__link",to:l+"/posts",children:"Posts"}),Object(d.jsx)(c.b,{className:"navbar__link",to:l+"/lazy",children:"Lazy"})]}),Object(d.jsx)("i",{className:"fas navbar__toogle ".concat(a),onClick:t})]})}),ce=(a(75),function(){var e=function(){var e=Object(n.useState)(W.dark),t=Object(f.a)(e,2),a=t[0],i=t[1],s=function(e){i(W[e]),localStorage.setItem("theme",e)};return Object(n.useEffect)((function(){localStorage.getItem("theme")&&"dark"===localStorage.getItem("theme")?s("dark"):s("light")}),[]),{theme:a,toggleTheme:function(){return s(a===W.dark?"light":"dark")}}}(),t=e.theme,a=e.toggleTheme;return Object(d.jsx)(X.Provider,{value:{theme:t,toggleTheme:a},children:Object(d.jsxs)(c.a,{children:[Object(d.jsx)(re,{}),Object(d.jsx)(se,{})]})})});r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(ce,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.ec4d242e.chunk.js.map