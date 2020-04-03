(this["webpackJsonpbox-springs-bouldering"]=this["webpackJsonpbox-springs-bouldering"]||[]).push([[0],{217:function(e){e.exports=JSON.parse('[{"boulder":"Speed Bump Boulder","population":"8,175,133","image":"/img/speedbump.jpg","desc":"The Speed Bump boulder is a little hard to find, requiring a scramble into a hidden nook. Landing is great, but slopes towards a small ledge.","area":"Crow\'s Nest Area","latitude":33.991351,"longitude":-117.306592,"numClimbs":4,"climbs":[{"name":"Speed Bump Traverse","grade":1,"stars":2,"desc":"start left and go up","height":15,"fa":"L. Song"},{"name":"Speed Bumps","grade":1,"stars":2,"desc":"start left and go up","height":15,"fa":"L. Song"}]},{"boulder":"Big Bass Boulder","population":"8,175,133","image":"/img/bigbass.jpg","desc":"The Big Bass Boulder is a large, red boulder directly on the ridgeline. It is a great spot to practice footwork, with good holds and sloping feet.","area":"Crow\'s Nest Area","latitude":33.991019,"longitude":-117.306679,"numClimbs":4,"climbs":[{"name":"Speed Bump Traverse","grade":1,"stars":2,"desc":"start left and go up this is a climb with many cool features and different edges topout is scary","height":15,"fa":"L. Song"},{"name":"Speed Bumps","grade":1,"stars":3,"desc":"start left and go up","height":15,"fa":"L. Song"},{"name":"Speed Bump Traverse","grade":4,"stars":0,"desc":"start left and go up","height":15,"fa":"L. Song"},{"name":"Speed Bumps","grade":8,"stars":4,"desc":"start left and go up","height":15,"fa":"L. Song"},{"name":"Speed Bumps","grade":1,"stars":3,"desc":"start left and go up","height":15,"fa":"L. Song"},{"name":"Speed Bump Traverse","grade":4,"stars":0,"desc":"start left and go up","height":15,"fa":"L. Song"}]}]')},229:function(e,t,a){e.exports=a(387)},234:function(e,t,a){},387:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(49),o=a.n(l),i=(a(234),a(74),a(219)),c=a(37),s=a(38),u=a(39),m=a(40),d=a(63),p=a(395),g=a(218),f=a(393),h=a(398),b=a(399),E=a(392),v=a(401),w=a(394),C=a(397),S=a(396),y=a(100),k=a(402),B=["green","green","blue","blue","red","red","brown","brown","black","black"],j=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={activeIndex:null},e.handleClick=function(t,a){var n=a.index,r=e.state.activeIndex===n?-1:n;e.setState({activeIndex:r})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.activeIndex,t=this.props.climb;return r.a.createElement(S.a,{fluid:!0,styled:!0},r.a.createElement(S.a.Title,{active:0,index:0,onClick:this.handleClick},r.a.createElement(w.a.Row,null,r.a.createElement(w.a.Cell,null,r.a.createElement(y.a,{color:B[t.grade],ribbon:!0},r.a.createElement("b",null,"V",t.grade))),r.a.createElement(w.a.Cell,null,r.a.createElement(k.a,{icon:"star",defaultRating:t.stars,maxRating:4,size:"small",disabled:!0})),r.a.createElement(w.a.Cell,null,r.a.createElement(v.a,{size:"medium"},t.name)),r.a.createElement(w.a.Cell,null,t.height,"ft"))),r.a.createElement(S.a.Content,{active:0===e},r.a.createElement(b.a,{columns:3},r.a.createElement(b.a.Row,null,r.a.createElement(b.a.Column,{width:4},r.a.createElement(y.a,null,"FA: ",t.fa)),r.a.createElement(b.a.Column,{width:10},t.desc)))))}}]),a}(n.Component),O=function(e){return r.a.createElement(f.a,{closeIcon:!0,trigger:r.a.createElement(h.a,null,"View Climbs")},r.a.createElement(f.a.Content,{image:!0,scrolling:!0},r.a.createElement(b.a,{stackable:!0,columns:2},r.a.createElement(b.a.Row,null,r.a.createElement(b.a.Column,null,r.a.createElement(E.a,null,r.a.createElement("div",{className:"sticky-wrapper"},r.a.createElement(v.a,{as:"h2",className:"boulder-header",style:{marginTop:"10px",backgroundColor:"#fffff"}},e.info.boulder),r.a.createElement(g.a,{rounded:!0,size:"boulder-image",src:e.info.image})))),r.a.createElement(b.a.Column,null,r.a.createElement(f.a.Description,null,r.a.createElement(w.a,null,r.a.createElement(C.a,null,r.a.createElement("p",null,e.info.desc)),r.a.createElement(w.a.Body,null,e.info.climbs.map((function(e){return r.a.createElement(j,{climb:e})}))))))))))},x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={modalInfo:null},e._openModal=function(){e.setState({showModal:e.info})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.info;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(g.a,{src:e.image,className:"boulder-image"}),r.a.createElement(p.a.Content,null,r.a.createElement(p.a.Header,null,e.boulder),r.a.createElement(p.a.Meta,null,e.area),r.a.createElement(p.a.Description,null,e.numClimbs," Climbs")),r.a.createElement(O,{info:e})))}}]),a}(n.PureComponent),I=(a(217),n.PureComponent,function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={viewport:{latitude:33.993,longitude:-117.3,zoom:14,bearing:0,pitch:0},popupInfo:null},e._sourceRef=r.a.createRef(),e._onViewportChange=function(t){return e.setState({viewport:t})},e._onClick=function(t){var a=t.features[0],n=a.properties.cluster_id;e._sourceRef.current.getSource().getClusterExpansionZoom(n,(function(t,n){t||e._onViewportChange(Object(i.a)({},e.state.viewport,{longitude:a.geometry.coordinates[0],latitude:a.geometry.coordinates[1],zoom:n,transitionDuration:500}))}))},e._onClickMarker=function(t){e.setState({popupInfo:t})},e}return Object(s.a)(a,[{key:"_renderPopup",value:function(){var e=this,t=this.state.popupInfo;return t&&r.a.createElement(d.c,{style:{display:"none !important"},tipSize:6,anchor:"top",longitude:t.longitude,latitude:t.latitude,closeOnClick:!1,onClose:function(){return e.setState({popupInfo:null})}},r.a.createElement(x,{info:t}))}},{key:"render",value:function(){this.state.viewport}}]),a}(n.Component));var L=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(386);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,a){}},[[229,1,2]]]);
//# sourceMappingURL=main.f855725b.chunk.js.map