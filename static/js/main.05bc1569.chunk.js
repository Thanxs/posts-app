(this["webpackJsonpposts-app"]=this["webpackJsonpposts-app"]||[]).push([[0],{19:function(e,t,a){e.exports={rxModal:"RxModal_rxModal__uRqnV",rxModal__content:"RxModal_rxModal__content__3c8vM",active:"RxModal_active__1rrod"}},21:function(e,t,a){e.exports={rxInput:"RxInput_rxInput__2Ps4_"}},31:function(e,t,a){e.exports={ldsFacebook:"Loader_ldsFacebook__ouT7P","lds-facebook":"Loader_lds-facebook__3sUog"}},32:function(e,t,a){e.exports={rxButton:"RxButton_rxButton__1JRpE"}},40:function(e,t,a){},41:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),s=a(30),r=a.n(s),c=(a(40),a(9)),o=a(2),u=(a(41),a(0)),l=function(){return Object(u.jsxs)("div",{className:"error-page",children:[Object(u.jsxs)("div",{className:"error-page__emoji",children:["404 - Page not found",Object(u.jsx)("span",{children:"\ud83e\udd2c"})]}),Object(u.jsx)(c.b,{className:"error-page__link",to:"/posts",children:"Go to posts"})]})},d=a(3),p=a.n(d),m=a(6),j=a(4),b=function(e){var t=Object(n.useState)(!1),a=Object(j.a)(t,2),i=a[0],s=a[1],r=Object(n.useState)(""),c=Object(j.a)(r,2),o=c[0],u=c[1],l=function(){var t=Object(m.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s(!0),t.next=4,e();case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),u(t.t0.message);case 9:return t.prev=9,s(!1),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})));return function(){return t.apply(this,arguments)}}();return[l,i,o]},f=a(16),v=a(17),h=a(11),O=a.n(h),x="https://posts-app-react-node.herokuapp.com/api",g=function(){function e(){Object(f.a)(this,e)}return Object(v.a)(e,null,[{key:"getAllPosts",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(x,"/posts"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getPostById",value:function(){var e=Object(m.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(x,"/posts/").concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"createPost",value:function(){var e=Object(m.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("".concat(x,"/posts"),t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"deletePost",value:function(){var e=Object(m.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.delete("".concat(x,"/posts/").concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchImage",value:function(e){return"".concat(x,"/").concat(e.picture)}},{key:"fetchTestPosts",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(x,"/test"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),_=a(31),q=a.n(_),y=function(){return Object(u.jsxs)("div",{className:q.a.ldsFacebook,children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{})]})},k=a(18),N=a.n(k),w=(a(63),function(){var e=Object(o.g)(),t=Object(n.useState)({title:"",author:"",body:"",_id:"",picture:""}),a=Object(j.a)(t,2),i=a[0],s=a[1],r=Object(n.useState)(""),c=Object(j.a)(r,2),l=c[0],d=c[1],f=b(Object(m.a)(p.a.mark((function t(){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.getPostById(e.id);case 2:a=t.sent,d(g.fetchImage(a)),s(a);case 5:case"end":return t.stop()}}),t)})))),v=Object(j.a)(f,2),h=v[0],O=v[1];return Object(n.useEffect)((function(){h()}),[]),Object(u.jsx)("div",{className:"post-page",children:O?Object(u.jsx)("div",{className:"post-page__loader",children:Object(u.jsx)(y,{})}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"post-page__title",children:i.title}),Object(u.jsx)("div",{className:"post-page__author",children:i.author}),Object(u.jsx)("div",{className:"post-page__description",children:i.body}),Object(u.jsx)("div",{className:"post-page__image",children:l&&Object(u.jsx)("img",{src:l,alt:"post-img",width:"350"})}),Object(u.jsx)("div",{className:"post-page__created",children:N()(i.createdAt).format("MMMM Do YYYY")})]})})}),C=a(13),M=function(e,t,a){var i=function(e,t){return Object(n.useMemo)((function(){return t?Object(C.a)(e).sort((function(e,a){return e[t].localeCompare(a[t])})):e}),[t,e])}(e,t);return Object(n.useMemo)((function(){return i&&i.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}))}),[a,i])},S=a(5),P=a(35),I=a(32),T=a.n(I),A={primary:"#607d8b",accent:"#e91e63",warn:"#f44336"},B=["children","color"],E=function(e){var t=e.children,a=e.color,n=Object(P.a)(e,B),i=a;return i&&i in A&&(i=A[i]),Object(u.jsx)("button",Object(S.a)(Object(S.a)({},n),{},{style:{background:n.disabled?"#ddd":i},className:T.a.rxButton,children:t}))},L=a(19),z=a.n(L),R=function(e){var t=e.children,a=e.visible,n=e.setVisible,i=[z.a.rxModal];return a&&i.push(z.a.active),Object(u.jsx)("div",{className:i.join(" "),onClick:function(){return n(!1)},children:Object(u.jsx)("div",{className:z.a.rxModal__content,onClick:function(e){return e.stopPropagation()},children:t})})},D=a(21),F=a.n(D),Y=function(e){return Object(u.jsx)(u.Fragment,{children:"textarea"===e.inputtype?Object(u.jsx)("textarea",Object(S.a)({rows:10,className:F.a.rxInput},e)):Object(u.jsx)("input",Object(S.a)({className:F.a.rxInput},e))})},V=(a(64),function(e){var t=e.create,a=Object(n.useState)({title:"",body:"",author:"",picture:""}),i=Object(j.a)(a,2),s=i[0],r=i[1];return Object(u.jsxs)("form",{className:"post__form",children:[Object(u.jsx)(Y,{value:s.title,onChange:function(e){return r(Object(S.a)(Object(S.a)({},s),{},{title:e.target.value}))},type:"text",placeholder:"post title"}),Object(u.jsx)(Y,{value:s.body,onChange:function(e){return r(Object(S.a)(Object(S.a)({},s),{},{body:e.target.value}))},inputtype:"textarea",placeholder:"post description"}),Object(u.jsx)(Y,{value:s.author,onChange:function(e){return r(Object(S.a)(Object(S.a)({},s),{},{author:e.target.value}))},type:"text",placeholder:"author"}),Object(u.jsx)(E,{color:"accent",onClick:function(e){e.preventDefault(),t(s),r({title:"",body:"",author:"",picture:""})},children:"Create post"})]})}),Q=(a(65),function(e){var t=e.defaultValue,a=e.options,n=e.value,i=e.onChange;return Object(u.jsxs)("select",{className:"rx-select",value:n,onChange:function(e){return i(e.target.value)},children:[Object(u.jsx)("option",{disabled:!0,value:"",children:t}),a.map((function(e){return Object(u.jsx)("option",{value:e.value,children:e.name},e.value)}))]})}),J=(a(66),function(e){var t=e.filter,a=e.setFilter;return Object(u.jsxs)("div",{className:"post-filter",children:[Object(u.jsx)(Y,{value:t.query,onChange:function(e){return a(Object(S.a)(Object(S.a)({},t),{},{query:e.target.value}))},placeholder:"Search by title..."}),Object(u.jsx)("div",{className:"post-filter__select",children:Object(u.jsx)(Q,{value:t.sort,defaultValue:"Sorting",onChange:function(e){return a(Object(S.a)(Object(S.a)({},t),{},{sort:e}))},options:[{value:"title",name:"By title"},{value:"body",name:"By description"},{value:"author",name:"By author"},{value:"createdAt",name:"By date"}]})})]})}),U=(a(67),function(e){var t=e.post,a=e.remove,n=Object(o.f)();return Object(u.jsx)("div",{className:"post",children:Object(u.jsxs)("div",{className:"post__content",children:[Object(u.jsx)("h3",{className:"post__title",children:t.title}),Object(u.jsx)("div",{className:"post__author",children:t.author}),Object(u.jsx)("div",{className:"post__description",children:t.body}),Object(u.jsx)("div",{className:"post__created",children:N()(t.createdAt).format("MMMM Do YYYY")}),Object(u.jsxs)("div",{className:"post__btns",children:[Object(u.jsx)(E,{color:"accent",onClick:function(){return n("/posts/".concat(t._id))},children:"Open"}),Object(u.jsx)("div",{className:"post__btns-margin"}),Object(u.jsx)(E,{color:"warn",onClick:function(){return a(t)},children:"Remove"})]})]})})}),G=(a(68),function(e){var t=e.posts,a=e.title,n=e.remove;return t&&t.length?Object(u.jsxs)("div",{className:"posts__list",children:[Object(u.jsx)("h1",{className:"posts__title",children:a}),t.map((function(e){return Object(u.jsx)(U,{post:e,remove:n},e._id)}))]}):Object(u.jsxs)("div",{className:"posts__not",children:["Posts not found ",Object(u.jsx)("span",{children:"\ud83d\ude15"})]})}),H=(a(69),function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],i=t[1],s=Object(n.useState)({sort:"",query:""}),r=Object(j.a)(s,2),c=r[0],o=r[1],l=Object(n.useState)(!1),d=Object(j.a)(l,2),f=d[0],v=d[1],h=M(a,c.sort,c.query),O=b(Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getAllPosts();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})))),x=Object(j.a)(O,3),_=x[0],q=x[1],k=x[2];Object(n.useEffect)((function(){_()}),[]);var N=function(){var e=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.createPost(t);case 2:n=e.sent,i([].concat(Object(C.a)(a),[n])),v(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.deletePost(t._id);case 2:n=e.sent,i(Object(C.a)(a.filter((function(e){return e._id!==n._id}))));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.fetchTestPosts();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"posts",children:[Object(u.jsx)(R,{visible:f,setVisible:v,children:Object(u.jsx)(V,{create:N})}),Object(u.jsx)("div",{className:"posts__fetch",children:Object(u.jsx)(E,{disabled:a.length,color:"primary",onClick:S,children:"Fetch test posts"})}),Object(u.jsx)("div",{className:"posts__filter",children:Object(u.jsx)(J,{filter:c,setFilter:o})}),Object(u.jsx)("div",{className:"posts__create",children:Object(u.jsx)(E,{onClick:function(){return v(!0)},children:"Create Post"})}),k&&Object(u.jsx)("div",{children:k}),q?Object(u.jsx)("div",{className:"posts__loader",children:Object(u.jsx)(y,{})}):Object(u.jsx)(G,{remove:w,posts:h,title:"JS POSTS"})]})}),K={dark:{background:"#12181b",color:"#ffffff"},light:{background:"#ffffff",color:"#12181b"}},W=Object(n.createContext)({theme:K.dark,toggleTheme:function(){}}),X=a(34),Z=a(33),$=(a(70),function(e){Object(X.a)(a,e);var t=Object(Z.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"home",children:Object(u.jsx)("h1",{className:"home__title",children:"welcome to post app"})})}}]),a}(n.Component)),ee=$,te=(a(71),function(){return Object(u.jsx)("div",{className:"about",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi blanditiis iste fuga at magni dolorem deserunt necessitatibus facilis et sunt, impedit, veritatis rerum! Incidunt, ad, optio esse accusantium quae amet sint sunt dolor dicta explicabo soluta in, a ducimus! Praesentium reprehenderit nam at quasi odit, necessitatibus quam, temporibus quas nisi nobis exercitationem blanditiis culpa, quo libero. Nam voluptate dolore numquam repellendus voluptatem unde rem aut animi quidem impedit? Accusantium facere officiis aspernatur amet sed aperiam sint aliquid cupiditate doloremque ullam mollitia, qui illo unde, ea repellat illum quas. Odit nostrum voluptatum nam repellendus impedit quis ad dignissimos possimus necessitatibus nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni labore alias a culpa possimus ad placeat, distinctio beatae cum recusandae illum earum sequi perferendis, ab dicta reiciendis quo aut? Dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quo explicabo distinctio, consequuntur ab, perferendis perspiciatis architecto unde rerum non placeat atque voluptates quasi nesciunt accusamus dolorum dignissimos, corrupti laboriosam. Nam earum sapiente facilis sunt, optio ad quae asperiores, quo repudiandae, libero rerum reprehenderit? Delectus cumque quis ipsum similique, consequuntur ex earum atque aliquid unde quam aut, cum eius reiciendis. Illum dolor iste saepe culpa consequatur dolore impedit aspernatur quidem sunt, corporis dolorem laborum veniam eligendi, vel, dolores id optio perferendis voluptatibus magni voluptatem eius itaque quaerat! Maiores, natus beatae. Excepturi, vitae? Quasi doloribus perferendis consequatur delectus quibusdam eveniet similique obcaecati, nam adipisci animi voluptas dolorum ea molestias ex quisquam velit. Iusto ipsum rem odit! Eaque sunt voluptatem neque quos? Quas ipsam aut deserunt mollitia sunt et odit optio tenetur odio dignissimos quisquam quos, error eum voluptate quae ea suscipit cupiditate saepe eius distinctio eos? Nulla atque quis delectus hic. Nobis, laborum in id repudiandae quo enim excepturi, accusantium quidem consequuntur quos, totam incidunt delectus voluptatem soluta ratione nostrum nulla veniam quis ab vero dolor magnam. Eveniet, nesciunt. Sed, quo. Explicabo culpa inventore dolorem, quis corporis maxime sapiente molestiae itaque expedita! Totam, tempore dolores? Dolor fugit rerum, a nobis similique dignissimos ipsum. Totam, suscipit est cum reprehenderit libero repellendus? Sit. Odit provident ad voluptatibus. Architecto fugit rem exercitationem, voluptates unde minus earum debitis magni dolorum nesciunt harum consectetur sequi dignissimos eos ad iste repudiandae itaque similique quis. Laboriosam, consequuntur at? Id sapiente modi voluptatum praesentium, dicta magni molestiae accusantium illum ullam labore voluptate corrupti suscipit voluptatem provident cumque magnam unde, officia cum? Eaque ex voluptate nisi molestiae nulla magni voluptates. Deleniti, corporis dolores ab sed vero ipsa? Itaque sit reiciendis molestiae explicabo totam enim minus non aut excepturi ea laborum quia exercitationem culpa similique blanditiis repudiandae rem minima, hic aliquam? Similique minus consectetur reiciendis officia eligendi sequi doloribus perspiciatis itaque ex quam nihil, quaerat vel ratione perferendis quod, magni adipisci provident sed excepturi? Ut, placeat corrupti? Quam quisquam placeat at. Aoloremque cumque laboriosam temporibus accusantium. Reprehenderit illo dolorem minus! Voluptas, fuga. Aperiam, quos! Velit provident non consequuntur sit aperiam, architecto vitae corporis fugiat id doloribus esse officiis rerum recusandae doloremque sint! Laborum perferendis vero nesciunt. Corrupti, repellendus ad similique cumque quasi quia suscipit! Quod quo ea asperiores quaerat magni cumque nobis ut? Ducimus eum in delectus, quae dignissimos architecto dolorum eius officiis distinctio eligendi numquam saepe tempore fugiat, corrupti odit voluptate fugit deleniti! Omnis, porro harum odit quas reiciendis numquam nobis tenetur ratione officiis mollitia officia assumenda ipsam enim. Assumenda pariatur aspernatur cum, corrupti amet, voluptatibus aperiam iste dignissimos cupiditate, eos rem voluptas. Quae voluptas perspiciatis minus dolores aspernatur ratione dolore, atque natus repudiandae. Optio culpa, voluptatum ducimus voluptatem dolorem assumenda impedit! Inventore quas consectetur eos, enim sit aliquam molestiae nobis vero. Tenetur!"})}),ae=(a(72),Object(n.lazy)((function(){return a.e(3).then(a.bind(null,78))}))),ne=function(){return Object(u.jsxs)("div",{className:"lazy",children:[Object(u.jsx)("h2",{className:"lazy__title",children:"Lazy loading"}),Object(u.jsx)("div",{className:"lazy__description",children:"This page was created for testing such a feature of the React as lazy loading. Open development tools to check"}),Object(u.jsx)(n.Suspense,{fallback:Object(u.jsx)("div",{className:"lazy__loader",children:Object(u.jsx)(y,{})}),children:Object(u.jsx)(ae,{})})]})},ie=(a(73),function(){var e=Object(n.useContext)(W).theme;return Object(u.jsx)("div",{id:"layout",style:e,children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/",element:Object(u.jsx)(ee,{})}),Object(u.jsx)(o.a,{path:"/about",element:Object(u.jsx)(te,{})}),Object(u.jsx)(o.a,{path:"/posts",element:Object(u.jsx)(H,{})}),Object(u.jsx)(o.a,{path:"/lazy",element:Object(u.jsx)(ne,{})}),Object(u.jsx)(o.a,{path:"/posts/:id",element:Object(u.jsx)(w,{})}),Object(u.jsx)(o.a,{path:"*",element:Object(u.jsx)(l,{})})]})})}),se=(a(74),function(){var e=Object(n.useContext)(W),t=e.toggleTheme,a=e.theme===K.dark?"fa-sun":"fa-star-and-crescent";return Object(u.jsxs)("nav",{className:"navbar",children:[Object(u.jsxs)("div",{className:"navbar__links",children:[Object(u.jsx)(c.b,{className:"navbar__link",to:"/",children:"Home"}),Object(u.jsx)(c.b,{className:"navbar__link",to:"/about",children:"About"}),Object(u.jsx)(c.b,{className:"navbar__link",to:"/posts",children:"Posts"}),Object(u.jsx)(c.b,{className:"navbar__link",to:"/lazy",children:"Lazy"})]}),Object(u.jsx)("i",{className:"fas navbar__toogle ".concat(a),onClick:t})]})}),re=(a(75),function(){var e=function(){var e=Object(n.useState)(K.dark),t=Object(j.a)(e,2),a=t[0],i=t[1],s=function(e){i(K[e]),localStorage.setItem("theme",e)};return Object(n.useEffect)((function(){localStorage.getItem("theme")&&"dark"===localStorage.getItem("theme")?s("dark"):s("light")}),[]),{theme:a,toggleTheme:function(){return s(a===K.dark?"light":"dark")}}}(),t=e.theme,a=e.toggleTheme;return Object(u.jsx)(W.Provider,{value:{theme:t,toggleTheme:a},children:Object(u.jsxs)(c.a,{children:[Object(u.jsx)(se,{}),Object(u.jsx)(ie,{})]})})});r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(re,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.05bc1569.chunk.js.map