(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{152:function(t,e,i){"use strict";i.r(e);i(158);var n=i(9),o=(i(0),i(162)),r=i(161),l=i(159),a=i(163),c=i(170),u=i(169);e.default=function(t){var e=t.location;return Object(n.d)(o.a,{location:e,title:"Additional Resources",compact:!0},Object(n.d)(r.a,{title:"Additional Resources"}),Object(n.d)(l.a,null,Object(n.d)(c.a,{columns:u.a.length},function(t){return u.a.map(function(e,i){var o=e.slug,r=e.title,l=e.posts;return Object(n.d)(a.a,{key:o,id:o,titleRef:t[i],title:Object(n.d)("h3",null,r)},Object(n.d)("ul",null,l.map(function(t){var e=t.link,i=t.title,o=t.body;return Object(n.d)("li",{key:e},Object(n.d)("p",null,Object(n.d)("a",{href:e,target:"_blank",rel:"noopener noreferrer"},i)),Object(n.d)("p",null,Object(n.d)("small",null,o)))})))})})))}},158:function(t,e,i){"use strict";i(160)("link",function(t){return function(e){return t(this,"a","href",e)}})},160:function(t,e,i){var n=i(12),o=i(22),r=i(23),l=/"/g,a=function(t,e,i,n){var o=String(r(t)),a="<"+e;return""!==i&&(a+=" "+i+'="'+String(n).replace(l,"&quot;")+'"'),a+">"+o+"</"+e+">"};t.exports=function(t,e){var i={};i[t]=e(a),n(n.P+n.F*o(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",i)}},163:function(t,e,i){"use strict";i(158);var n=i(156),o=i(9),r=(i(0),i(157)),l=i(164),a=i.n(l),c=Object(n.a)("header",{target:"efyhctv0"})("display:flex;border-bottom:3px solid ",r.b.blue,";padding-bottom:20px;width:100%;"),u=Object(n.a)("div",{target:"efyhctv1"})({name:"lcx8je",styles:"flex-grow:1;h3{margin-bottom:0;}"}),s=Object(n.a)("div",{target:"efyhctv2"})({name:"fqhmwx",styles:"white-space:nowrap;span{margin-right:5px;}svg{position:relative;top:2px;}a{font-weight:400;&:hover,&:focus{text-decoration:none;span{text-decoration:underline;}}}"}),d=Object(n.a)("div",{target:"efyhctv3"})("margin-top:30px;& > * + *{margin-top:10px;}h4{margin-top:25px;margin-bottom:18px;}ul{list-style:none;margin:0;}li{margin:0;padding:0 0 8px 0;border-bottom:1px solid ",r.b.grey,";& + li{padding-top:8px;}p{margin:0;& + p{margin-top:-2px;}}small{line-height:20px;}}");e.a=function(t){var e=t.titleRef,i=t.id,n=t.title,r=t.link,l=t.children;return Object(o.d)("div",{id:i},Object(o.d)(c,{ref:e},Object(o.d)(u,null,n),r&&Object(o.d)(s,null,Object(o.d)("a",{href:r},Object(o.d)("span",null,"View All")," ",Object(o.d)(a.a,null)))),Object(o.d)(d,null,l))}},164:function(t,e,i){var n=i(0);function o(t){return n.createElement("svg",t,n.createElement("path",{d:"M0 15l7.5-7.5L0 0z",fill:"#7691C4",fillRule:"evenodd"}))}o.defaultProps={width:"8",height:"15"},t.exports=o,o.default=o},165:function(t,e,i){var n=i(12),o=i(166)(!1);n(n.S,"Object",{values:function(t){return o(t)}})},166:function(t,e,i){var n=i(16),o=i(40),r=i(39),l=i(81).f;t.exports=function(t){return function(e){for(var i,a=r(e),c=o(a),u=c.length,s=0,d=[];u>s;)i=c[s++],n&&!l.call(a,i)||d.push(t?[i,a[i]]:a[i]);return d}}},167:function(t,e,i){(function(e){var i="Expected a function",n=NaN,o="[object Symbol]",r=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,f=s||d||Function("return this")(),p=Object.prototype.toString,h=Math.max,g=Math.min,b=function(){return f.Date.now()};function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&p.call(t)==o}(t))return n;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=a.test(t);return i||c.test(t)?u(t.slice(2),i?2:8):l.test(t)?n:+t}t.exports=function(t,e,n){var o,r,l,a,c,u,s=0,d=!1,f=!1,p=!0;if("function"!=typeof t)throw new TypeError(i);function v(e){var i=o,n=r;return o=r=void 0,s=e,a=t.apply(n,i)}function j(t){var i=t-u;return void 0===u||i>=e||i<0||f&&t-s>=l}function w(){var t=b();if(j(t))return O(t);c=setTimeout(w,function(t){var i=e-(t-u);return f?g(i,l-(t-s)):i}(t))}function O(t){return c=void 0,p&&o?v(t):(o=r=void 0,a)}function x(){var t=b(),i=j(t);if(o=arguments,r=this,u=t,i){if(void 0===c)return function(t){return s=t,c=setTimeout(w,e),d?v(t):a}(u);if(f)return c=setTimeout(w,e),v(u)}return void 0===c&&(c=setTimeout(w,e)),a}return e=y(e)||0,m(n)&&(d=!!n.leading,l=(f="maxWait"in n)?h(y(n.maxWait)||0,e):l,p="trailing"in n?!!n.trailing:p),x.cancel=function(){void 0!==c&&clearTimeout(c),s=0,o=u=r=c=void 0},x.flush=function(){return void 0===c?a:O(b())},x}}).call(this,i(79))},169:function(t,e,i){"use strict";e.a=[{slug:"languages",title:"Languages",link:"/resources#languages",posts:[{link:"https://gitlab.com/gabriel.alfour/ligo",title:"Ligo",body:"A syntax-agnostic, high-level smart contract language"},{link:"http://smartpy.io/",title:"SmartPy",body:"Tezos smart contracts with Python syntax"},{link:"http://hackage.haskell.org/package/morley",title:"Morley/Lorentz",body:"Haskell-like Michelson Programming Language"},{link:"https://fi-code.com/",title:"Fi",body:"High level language, currently in Alpha"},{link:"http://www.liquidity-lang.org/",title:"Liquidity",body:"Liquidity is a high-level typed smart-contract language for Tezos that strictly complies with Michelson security restrictions"}]},{slug:"libraries",title:"Libraries",link:"/resources#libraries",posts:[{link:"https://www.npmjs.com/package/sotez",title:"Sotez",body:"Javascript library for interacting with Tezos"},{link:"https://github.com/TezosRio/TezosJ_SDK",title:"TezosJ SDK",body:"Android Java SDK for Tezos"},{link:"https://github.com/BrianGuo/MichelsonExecutionEngine",title:"M.E.L.",body:"Michelson Execution library"},{link:"https://ocamlpro.github.io/techelson/user_doc/index.html",title:"Techelson",body:"Test Execution Environment (TEE) for Michelson contracts"},{link:"https://github.com/Cryptonomic/Conseil/ ",title:"Conseil",body:"API tool for querying against nodes"},{link:"https://cryptonomic.github.io/ConseilJS/#/",title:"Conseiljs",body:"Javascript library for building tezos dapps"},{link:"https://github.com/TezTech/eztz",title:"Eztz",body:"Javascript library for interacting with Tezos "},{link:"https://github.com/murbard/pytezos",title:"PyTezos",body:"Python Library for interacting with Tezos "},{link:"https://github.com/DefinitelyNotAGoat/go-tezos",title:"Go-Tezos",body:"Golang Library for interacting with Tezos "},{link:"https://www.tezbridge.com/",title:"TezBridge",body:"Web wallet storing Tezos accounts"}]},{slug:"tools",title:"Tools",link:"/resources#tools",posts:[{link:"https://www.plugin-dev.com/project/tezos-michelson/",title:"Tezos - intellij ",body:"Michelson Plugin for IntelliJ"},{link:"https://stove-labs.github.io/granary/",title:"Granary",body:"Tezos Development Toolkit"},{link:"https://github.com/tezos/tezos/tree/master/emacs",title:"Michelson emacs mode ",body:"Michelson Plugin for Emacs"},{link:"https://tezos.gitlab.io/alphanet/introduction/howtouse.html#faucet",title:"Testnet Faucet",body:"Faucet for the Tezos Alphanet"},{link:"https://tzscan.io/",title:"TzScan",body:"Block Explorer"}]}]},170:function(t,e,i){"use strict";var n=i(156),o=i(9),r=i(0),l=i.n(r),a=(i(80),i(59),i(38),i(165),i(167)),c=i.n(a),u=function(t){var e=t.nodes,i=t.children,n=c()(function(){var t=e.map(function(t){return t.current}).filter(function(t){return t}).map(function(t){t.style.height="auto",t.style.maxHeight="",t.style.minHeight="";var e=t.getBoundingClientRect();return{node:t,top:e.top,height:e.height}});Object.values(t.reduce(function(t,e){var i=e.node,n=e.top,o=e.height;return t[n]||(t[n]=[]),t[n].push({node:i,height:o}),t},{})).forEach(function(t){var e=t.map(function(t){return t.height}),i=Math.max.apply(Math,e);t.forEach(function(t){t.node.style.height=i+"px"})})},50);return Object(r.useEffect)(function(){return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),setTimeout(n),Object(o.d)(l.a.Fragment,null,i)},s=i(157),d=Object(o.c)("@media (min-width:",s.a.mobile,"){grid-template-columns:repeat(auto-fill,minmax(30%,1fr));}"),f=Object(o.c)("@media (min-width:",s.a.mobile,"){grid-template-columns:repeat(auto-fill,minmax(45%,1fr));}@media (min-width:",s.a.tablet,"){grid-template-columns:repeat(auto-fill,minmax(20%,1fr));}"),p=Object(n.a)("div",{target:"e164qiqv0"})("display:grid;grid-template-columns:repeat(auto-fill,minmax(100%,1fr));grid-gap:40px;",function(t){return 3===t.columns?d:f});e.a=function(t){var e=t.columns,i=void 0===e?3:e,n=t.children,l=[Object(r.useRef)(null),Object(r.useRef)(null),Object(r.useRef)(null),Object(r.useRef)(null)];return Object(o.d)(u,{nodes:l},Object(o.d)(p,{columns:i},n(l)))}}}]);
//# sourceMappingURL=component---src-pages-resources-js-911e63267f2bd3c9210c.js.map