(this.webpackJsonppicsearch=this.webpackJsonppicsearch||[]).push([[0],{24:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),s=n(17),c=n.n(s),i=(n(24),n(8)),o=n.n(i),u=n(18),m=n(3),l=n(4),h=n(6),p=n(5),j=n(19),b=n.n(j).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID KxnIRS8jJmaoRgMacCNOKgRsKMVZJpI1pID5JcZ_pMw"}}),f=n(0),d=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.term)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsx)("div",{className:"ui segment",children:Object(f.jsx)("form",{onSubmit:this.onFormSubmit,className:"ui form",action:"",children:Object(f.jsxs)("div",{className:"field",children:[Object(f.jsx)("label",{htmlFor:"",children:"Image Search"}),Object(f.jsx)("input",{type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}})]})})})}}]),n}(a.Component),v=(n(45),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).setSpans=function(){var e=a.imageRef.current.clientHeight,t=Math.ceil(e/10);a.setState({spans:t})},a.state={spans:0},a.imageRef=r.a.createRef(),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.description,n=e.urls;return Object(f.jsx)("div",{style:{gridRowEnd:"span ".concat(this.state.spans)},children:Object(f.jsx)("img",{ref:this.imageRef,src:n.regular,alt:t})})}}]),n}(a.Component)),g=function(e){var t=e.images.map((function(e){return Object(f.jsx)(v,{image:e},e.id)}));return Object(f.jsx)("div",{className:"image-list",children:t})},O=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={images:[]},e.onSearchSubmit=function(){var t=Object(u.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.get("/search/photos",{params:{query:n}});case 2:a=t.sent,e.setState({images:a.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"ui container mybox",style:{marginTop:"10px"},children:[Object(f.jsx)(d,{onSubmit:this.onSearchSubmit}),Object(f.jsx)(g,{images:this.state.images})]})}}]),n}(a.Component);c.a.render(Object(f.jsx)(O,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.6c17a900.chunk.js.map