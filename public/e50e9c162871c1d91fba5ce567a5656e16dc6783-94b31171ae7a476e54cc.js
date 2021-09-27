(self.webpackChunkgatsby_solidgarden_theme=self.webpackChunkgatsby_solidgarden_theme||[]).push([[61],{2847:function(t,e,n){"use strict";n.d(e,{ZP:function(){return E}});var r=n(7294);function o(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}var a=n(7326),s=n(4578),l=n(8812),c=n(5706),d=n.n(c);function u(t,e){if(!t){var n=new Error("loadable: "+e);throw n.framesToPop=1,n.name="Invariant Violation",n}}var p=r.createContext();var f={initialChunks:{}},m="PENDING",g="REJECTED";var h=function(t){return t};function b(t){var e=t.defaultResolveComponent,n=void 0===e?h:e,c=t.render,b=t.onLoad;function y(t,e){void 0===e&&(e={});var h=function(t){return"function"==typeof t?{requireAsync:t,resolve:function(){},chunkName:function(){}}:t}(t),y={};function v(t){return e.cacheKey?e.cacheKey(t):h.resolve?h.resolve(t):"static"}function w(t,r,o){var i=e.resolveComponent?e.resolveComponent(t,r):n(t);if(e.resolveComponent&&!(0,l.isValidElementType)(i))throw new Error("resolveComponent returned something that is not a React component!");return d()(o,i,{preload:!0}),i}var k,T,C=function(t){function n(n){var r;return(r=t.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:v(n)},u(!n.__chunkExtractor||h.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===e.ssr||(h.requireAsync(n).catch((function(){return null})),r.loadSync(),n.__chunkExtractor.addChunk(h.chunkName(n))),(0,a.Z)(r)):(!1!==e.ssr&&(h.isReady&&h.isReady(n)||h.chunkName&&f.initialChunks[h.chunkName(n)])&&r.loadSync(),r)}(0,s.Z)(n,t),n.getDerivedStateFromProps=function(t,e){var n=v(t);return i({},e,{cacheKey:n,loading:e.loading||e.cacheKey!==n})};var r=n.prototype;return r.componentDidMount=function(){this.mounted=!0;var t=this.getCache();t&&t.status===g&&this.setCache(),this.state.loading&&this.loadAsync()},r.componentDidUpdate=function(t,e){e.cacheKey!==this.state.cacheKey&&this.loadAsync()},r.componentWillUnmount=function(){this.mounted=!1},r.safeSetState=function(t,e){this.mounted&&this.setState(t,e)},r.getCacheKey=function(){return v(this.props)},r.getCache=function(){return y[this.getCacheKey()]},r.setCache=function(t){void 0===t&&(t=void 0),y[this.getCacheKey()]=t},r.triggerOnLoad=function(){var t=this;b&&setTimeout((function(){b(t.state.result,t.props)}))},r.loadSync=function(){if(this.state.loading)try{var t=w(h.requireSync(this.props),this.props,E);this.state.result=t,this.state.loading=!1}catch(e){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:h.resolve(this.props),chunkName:h.chunkName(this.props),error:e?e.message:e}),this.state.error=e}},r.loadAsync=function(){var t=this,e=this.resolveAsync();return e.then((function(e){var n=w(e,t.props,{Loadable:E});t.safeSetState({result:n,loading:!1},(function(){return t.triggerOnLoad()}))})).catch((function(e){return t.safeSetState({error:e,loading:!1})})),e},r.resolveAsync=function(){var t=this,e=this.props,n=(e.__chunkExtractor,e.forwardedRef,o(e,["__chunkExtractor","forwardedRef"])),r=this.getCache();return r||((r=h.requireAsync(n)).status=m,this.setCache(r),r.then((function(){r.status="RESOLVED"}),(function(e){console.error("loadable-components: failed to asynchronously load component",{fileName:h.resolve(t.props),chunkName:h.chunkName(t.props),error:e?e.message:e}),r.status=g}))),r},r.render=function(){var t=this.props,n=t.forwardedRef,r=t.fallback,a=(t.__chunkExtractor,o(t,["forwardedRef","fallback","__chunkExtractor"])),s=this.state,l=s.error,d=s.loading,u=s.result;if(e.suspense&&(this.getCache()||this.loadAsync()).status===m)throw this.loadAsync();if(l)throw l;var p=r||e.fallback||null;return d?p:c({fallback:p,result:u,options:e,props:i({},a,{ref:n})})},n}(r.Component),x=(T=function(t){return r.createElement(p.Consumer,null,(function(e){return r.createElement(k,Object.assign({__chunkExtractor:e},t))}))},(k=C).displayName&&(T.displayName=k.displayName+"WithChunkExtractor"),T),E=r.forwardRef((function(t,e){return r.createElement(x,Object.assign({forwardedRef:e},t))}));return E.displayName="Loadable",E.preload=function(t){h.requireAsync(t)},E.load=function(t){return h.requireAsync(t)},E}return{loadable:y,lazy:function(t,e){return y(t,i({},e,{suspense:!0}))}}}var y=b({defaultResolveComponent:function(t){return t.__esModule?t.default:t.default||t},render:function(t){var e=t.result,n=t.props;return r.createElement(e,n)}}),v=y.loadable,w=y.lazy,k=b({onLoad:function(t,e){t&&e.forwardedRef&&("function"==typeof e.forwardedRef?e.forwardedRef(t):e.forwardedRef.current=t)},render:function(t){var e=t.result,n=t.props;return n.children?n.children(e):null}}),T=k.loadable,C=k.lazy;var x=v;x.lib=T,w.lib=C;var E=x},2993:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var s,l,c,d;if(Array.isArray(t)){if((s=t.length)!=a.length)return!1;for(l=s;0!=l--;)if(!i(t[l],a[l]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(d=t.entries();!(l=d.next()).done;)if(!a.has(l.value[0]))return!1;for(d=t.entries();!(l=d.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(d=t.entries();!(l=d.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((s=t.length)!=a.length)return!1;for(l=s;0!=l--;)if(t[l]!==a[l])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((s=(c=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,c[l]))return!1;if(e&&t instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!t.$$typeof)&&!i(t[c[l]],a[c[l]]))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return i(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(t,e,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,c=[];function d(){l=t(c.map((function(t){return t.props}))),u.canUseDOM?e(l):n&&(l=n(l))}var u=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=l;return l=void 0,c=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){c.push(this),d()},a.componentDidUpdate=function(){d()},a.componentWillUnmount=function(){var t=c.indexOf(this);c.splice(t,1),d()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(u,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(u,"canUseDOM",s),u}}},3835:function(t,e,n){"use strict";n.d(e,{zx:function(){return g},Zb:function(){return h},W2:function(){return m},II:function(){return y},Ar:function(){return f},pQ:function(){return Lt},BV:function(){return b}});var r,o,i,a,s=n(7294),l=n(2847),c=n(4466),d=n(9),u=(0,d.createGlobalStyle)(["html{font-family:'Roboto',Helvetica,sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block;}audio,canvas,progress,video{display:inline-block;}audio:not([controls]){display:none;height:0;}progress{vertical-align:baseline;}[hidden],template{display:none;}a{background-color:transparent;-webkit-text-decoration-skip:objects;}a:active,a:hover{outline-width:0;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:inherit;font-weight:bolder;}dfn{font-style:italic;}h1{font-size:2em;margin:0.67em 0;}mark{background-color:#ff0;color:#000;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}svg:not(:root){overflow:hidden;}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em;}figure{margin:1em 40px;}hr{box-sizing:content-box;height:0;overflow:visible;}button,input,optgroup,select,textarea{font:inherit;margin:0;}optgroup{font-weight:700;}button,input{overflow:visible;}button,select{text-transform:none;}[type='reset'],[type='submit'],button,html [type='button']{-webkit-appearance:button;}[type='button']::-moz-focus-inner,[type='reset']::-moz-focus-inner,[type='submit']::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0;}[type='button']:-moz-focusring,[type='reset']:-moz-focusring,[type='submit']:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText;}fieldset{border:1px solid silver;margin:0 2px;padding:0.35em 0.625em 0.75em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}textarea{overflow:auto;}[type='checkbox'],[type='radio']{box-sizing:border-box;padding:0;}[type='number']::-webkit-inner-spin-button,[type='number']::-webkit-outer-spin-button{height:auto;}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}[type='search']::-webkit-search-cancel-button,[type='search']::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-input-placeholder{color:inherit;opacity:0.54;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}html{font:112.5%/1.45em georgia,serif;box-sizing:border-box;overflow-y:scroll;}*{box-sizing:inherit;}*:before{box-sizing:inherit;}*:after{box-sizing:inherit;}img{max-width:100%;margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;}h1{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;color:inherit;font-weight:bold;text-rendering:optimizeLegibility;font-size:2.25rem;line-height:1.1;}h2{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;color:inherit;font-weight:bold;text-rendering:optimizeLegibility;font-size:1.62671rem;line-height:1.1;}h3{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;color:inherit;font-weight:bold;text-rendering:optimizeLegibility;font-size:1.38316rem;line-height:1.1;}h4{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;color:inherit;font-weight:bold;text-rendering:optimizeLegibility;font-size:1rem;line-height:1.1;}h5{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;color:inherit;font-weight:bold;text-rendering:optimizeLegibility;font-size:0.85028rem;line-height:1.1;}h6{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;color:inherit;font-weight:bold;text-rendering:optimizeLegibility;font-size:0.78405rem;line-height:1.1;}hgroup{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}ul{margin-left:1.45rem;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;list-style-position:outside;list-style-image:none;}ol{margin-left:1.45rem;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;list-style-position:outside;list-style-image:none;}dl{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}dd{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}p{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}figure{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}pre{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;font-size:0.85rem;line-height:1.42;background:hsla(0,0%,0%,0.04);border-radius:3px;overflow:auto;word-wrap:normal;padding:1.45rem;}table{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;font-size:1rem;line-height:1.45rem;border-collapse:collapse;width:100%;}fieldset{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}blockquote{margin-left:1.45rem;margin-right:1.45rem;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}form{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}noscript{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}iframe{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}hr{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:calc(1.45rem - 1px);background:hsla(0,0%,0%,0.2);border:none;height:1px;}address{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}b{font-weight:bold;}strong{font-weight:bold;}dt{font-weight:bold;}th{font-weight:bold;}li{margin-bottom:calc(1.45rem / 2);}ol li{padding-left:0;}ul li{padding-left:0;}li > ol{margin-left:1.45rem;margin-bottom:calc(1.45rem / 2);margin-top:calc(1.45rem / 2);}li > ul{margin-left:1.45rem;margin-bottom:calc(1.45rem / 2);margin-top:calc(1.45rem / 2);}blockquote *:last-child{margin-bottom:0;}li *:last-child{margin-bottom:0;}p *:last-child{margin-bottom:0;}li > p{margin-bottom:calc(1.45rem / 2);}code{font-size:0.85rem;line-height:1.45rem;}kbd{font-size:0.85rem;line-height:1.45rem;}samp{font-size:0.85rem;line-height:1.45rem;}abbr{border-bottom:1px dotted hsla(0,0%,0%,0.5);cursor:help;}acronym{border-bottom:1px dotted hsla(0,0%,0%,0.5);cursor:help;}abbr[title]{border-bottom:1px dotted hsla(0,0%,0%,0.5);cursor:help;text-decoration:none;}thead{text-align:left;}td,th{text-align:left;border-bottom:1px solid hsla(0,0%,0%,0.12);font-feature-settings:'tnum';-moz-font-feature-settings:'tnum';-ms-font-feature-settings:'tnum';-webkit-font-feature-settings:'tnum';padding-left:0.96667rem;padding-right:0.96667rem;padding-top:0.725rem;padding-bottom:calc(0.725rem - 1px);}th:first-child,td:first-child{padding-left:0;}th:last-child,td:last-child{padding-right:0;}tt,code{background-color:hsla(0,0%,0%,0.04);border-radius:3px;font-family:'SFMono-Regular',Consolas,'Roboto Mono','Droid Sans Mono','Liberation Mono',Menlo,Courier,monospace;padding:0;padding-top:0.2em;padding-bottom:0.2em;}pre code{background:none;line-height:1.42;}code:before,code:after,tt:before,tt:after{letter-spacing:-0.2em;content:' ';}pre code:before,pre code:after,pre tt:before,pre tt:after{content:'';}@media only screen and (max-width:480px){html{font-size:100%;}}body{margin:0;padding:0;font-family:'Roboto',Helvetica,sans-serif;color:",";background-color:",";transition:.3s all;font-weight:normal;word-wrap:break-word;font-kerning:normal;-moz-font-feature-settings:'kern','liga','clig','calt';-ms-font-feature-settings:'kern','liga','clig','calt';-webkit-font-feature-settings:'kern','liga','clig','calt';font-feature-settings:'kern','liga','clig','calt';}a{text-decoration:none;}input,select,textarea,button{&:focus{outline:none;}}}.fade-in-section-left{opacity:0;transform:translateX(0.7vh);visibility:hidden;transition:opacity 1000ms ease-out,transform 400ms ease-out,visibility 1000ms ease-out;will-change:opacity,transform,visibility;}.fade-in-section-left.is-visible{opacity:1;transform:none;visibility:visible;}.fade-in-section-right{opacity:0;transform:translateX(-0.7vh);visibility:hidden;transition:opacity 1000ms ease-out,transform 400ms ease-out,visibility 1000ms ease-out;will-change:opacity,transform,visibility;}.fade-in-section-right.is-visible{opacity:1;transform:none;visibility:visible;}"],(function(t){return"light"===t.theme?"hsla(0, 0%, 0%, 0.8)":"#fff"}),(function(t){return"light"===t.theme?"#fff":"#212121"})),p=(n(5444),(0,l.ZP)((function(){return n.e(887).then(n.bind(n,4887))}))),f=function(t){var e=t.children,n=(0,s.useContext)(c.N).theme;return s.createElement(s.Fragment,null,s.createElement(u,{theme:n}),e,s.createElement(p,null))},m=d.default.div.withConfig({displayName:"Container",componentId:"sc-7imeq9-0"})(["max-width:1280px;margin:0 auto;width:90%;@media (min-width:601px){width:90%;}@media (min-width:993px){width:80%;}"]),g=d.default.button.withConfig({displayName:"Button",componentId:"sc-1k2skvk-0"})(["cursor:pointer;border-radius:3px;padding:0.7rem 2.5rem;border:2px solid black;-webkit-appearance:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#000;background:#ffff38;&:focus{outline:none;}&:disabled{background:gray;}",""],(function(t){return t.secondary&&"\n\t\tbackground: #fcfcb6;\n\t"})),h=d.default.div.withConfig({displayName:"Card",componentId:"sc-gluzyr-0"})(["padding:1rem;background:",";height:100%;"],(function(t){return"light"===t.theme?"#fff":"#181717"})),b=d.default.div.withConfig({displayName:"Card__TitleWrap",componentId:"sc-gluzyr-1"})(["display:flex;flex-direction:row;justify-content:space-between;"]),y=d.default.input.withConfig({displayName:"Input",componentId:"sc-1dyhli7-0"})(["width:100%;box-sizing:border-box;border:2px solid #6c63ff;padding:0.8rem 1rem;border-radius:7px;margin-bottom:0.5rem;transition:0.3s;"," &::placeholder{color:#a7a7a7;}"],(function(t){return t.error&&"\n\t\tborder-color: #ff4136;\n\t"})),v=n(5697),w=n.n(v),k=n(4839),T=n.n(k),C=n(2993),x=n.n(C),E=n(6494),A=n.n(E),O="bodyAttributes",S="htmlAttributes",z="titleAttributes",L={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},j=(Object.keys(L).map((function(t){return L[t]})),"charset"),P="cssText",N="href",I="http-equiv",R="innerHTML",_="itemprop",M="name",D="property",q="rel",B="src",K="target",H={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},F="defaultTitle",U="defer",Y="encodeSpecialCharacters",V="onChangeClientState",W="titleTemplate",Z=Object.keys(H).reduce((function(t,e){return t[H[e]]=e,t}),{}),G=[L.NOSCRIPT,L.SCRIPT,L.STYLE],J="data-react-helmet",X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Q=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),tt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},et=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},nt=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},rt=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ot=function(t){var e=ct(t,L.TITLE),n=ct(t,W);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=ct(t,F);return e||r||void 0},it=function(t){return ct(t,V)||function(){}},at=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return tt({},t,e)}),{})},st=function(t,e){return e.filter((function(t){return void 0!==t[L.BASE]})).map((function(t){return t[L.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},lt=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&mt("Helmet: "+t+' should be of type "Array". Instead found type "'+X(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var s=i[a],l=s.toLowerCase();-1===e.indexOf(l)||n===q&&"canonical"===t[n].toLowerCase()||l===q&&"stylesheet"===t[l].toLowerCase()||(n=l),-1===e.indexOf(s)||s!==R&&s!==P&&s!==_||(n=s)}if(!n||!t[n])return!1;var c=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var s=i[a],l=A()({},r[s],o[s]);r[s]=l}return t}),[]).reverse()},ct=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},dt=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){dt(t)}),0)}),ut=function(t){return clearTimeout(t)},pt="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||dt:n.g.requestAnimationFrame||dt,ft="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ut:n.g.cancelAnimationFrame||ut,mt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},gt=null,ht=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,s=t.noscriptTags,l=t.onChangeClientState,c=t.scriptTags,d=t.styleTags,u=t.title,p=t.titleAttributes;vt(L.BODY,r),vt(L.HTML,o),yt(u,p);var f={baseTag:wt(L.BASE,n),linkTags:wt(L.LINK,i),metaTags:wt(L.META,a),noscriptTags:wt(L.NOSCRIPT,s),scriptTags:wt(L.SCRIPT,c),styleTags:wt(L.STYLE,d)},m={},g={};Object.keys(f).forEach((function(t){var e=f[t],n=e.newTags,r=e.oldTags;n.length&&(m[t]=n),r.length&&(g[t]=f[t].oldTags)})),e&&e(),l(t,m,g)},bt=function(t){return Array.isArray(t)?t.join(""):t},yt=function(t,e){void 0!==t&&document.title!==t&&(document.title=bt(t)),vt(L.TITLE,e)},vt=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(J),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),s=0;s<a.length;s++){var l=a[s],c=e[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),-1===o.indexOf(l)&&o.push(l);var d=i.indexOf(l);-1!==d&&i.splice(d,1)}for(var u=i.length-1;u>=0;u--)n.removeAttribute(i[u]);o.length===i.length?n.removeAttribute(J):n.getAttribute(J)!==a.join(",")&&n.setAttribute(J,a.join(","))}},wt=function(t,e){var n=document.head||document.querySelector(L.HEAD),r=n.querySelectorAll(t+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===R)n.innerHTML=e.innerHTML;else if(r===P)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var s=void 0===e[r]?"":e[r];n.setAttribute(r,s)}n.setAttribute(J,"true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},kt=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},Tt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[H[n]||n]=t[n],e}),e)},Ct=function(t,e,n){switch(t){case L.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[J]=!0,o=Tt(n,r),[s.createElement(L.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=kt(n),i=bt(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+rt(i,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+rt(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case O:case S:return{toComponent:function(){return Tt(e)},toString:function(){return kt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[J]=!0,r);return Object.keys(e).forEach((function(t){var n=H[t]||t;if(n===R||n===P){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),s.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===R||t===P)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+rt(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===G.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},xt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,s=t.noscriptTags,l=t.scriptTags,c=t.styleTags,d=t.title,u=void 0===d?"":d,p=t.titleAttributes;return{base:Ct(L.BASE,e,r),bodyAttributes:Ct(O,n,r),htmlAttributes:Ct(S,o,r),link:Ct(L.LINK,i,r),meta:Ct(L.META,a,r),noscript:Ct(L.NOSCRIPT,s,r),script:Ct(L.SCRIPT,l,r),style:Ct(L.STYLE,c,r),title:Ct(L.TITLE,{title:u,titleAttributes:p},r)}},Et=T()((function(t){return{baseTag:st([N,K],t),bodyAttributes:at(O,t),defer:ct(t,U),encode:ct(t,Y),htmlAttributes:at(S,t),linkTags:lt(L.LINK,[q,N],t),metaTags:lt(L.META,[M,j,I,D,_],t),noscriptTags:lt(L.NOSCRIPT,[R],t),onChangeClientState:it(t),scriptTags:lt(L.SCRIPT,[B,R],t),styleTags:lt(L.STYLE,[P],t),title:ot(t),titleAttributes:at(z,t)}}),(function(t){gt&&ft(gt),t.defer?gt=pt((function(){ht(t,(function(){gt=null}))})):(ht(t),gt=null)}),xt)((function(){return null})),At=(o=Et,a=i=function(t){function e(){return $(this,e),nt(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!x()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case L.SCRIPT:case L.NOSCRIPT:return{innerHTML:e};case L.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return tt({},r,((e={})[n.type]=[].concat(r[n.type]||[],[tt({},o,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case L.TITLE:return tt({},o,((e={})[r.type]=a,e.titleAttributes=tt({},i),e));case L.BODY:return tt({},o,{bodyAttributes:tt({},i)});case L.HTML:return tt({},o,{htmlAttributes:tt({},i)})}return tt({},o,((n={})[r.type]=tt({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=tt({},e);return Object.keys(t).forEach((function(e){var r;n=tt({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return s.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[Z[n]||n]=t[n],e}),e)}(et(o,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case L.LINK:case L.META:case L.NOSCRIPT:case L.SCRIPT:case L.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=et(t,["children"]),r=tt({},n);return e&&(r=this.mapChildrenToProps(e,r)),s.createElement(o,r)},Q(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(s.Component),i.propTypes={base:w().object,bodyAttributes:w().object,children:w().oneOfType([w().arrayOf(w().node),w().node]),defaultTitle:w().string,defer:w().bool,encodeSpecialCharacters:w().bool,htmlAttributes:w().object,link:w().arrayOf(w().object),meta:w().arrayOf(w().object),noscript:w().arrayOf(w().object),onChangeClientState:w().func,script:w().arrayOf(w().object),style:w().arrayOf(w().object),title:w().string,titleAttributes:w().object,titleTemplate:w().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var t=o.rewind();return t||(t=xt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);At.renderStatic=At.rewind;var Ot=At,St=n.p+"static/thumbnail-41e447f85ac43bf9b5a985768a7fd591.png",zt=n(7140),Lt=function(t){var e=t.title,n=void 0===e?zt.defaultTitle:e,r=t.description,o=void 0===r?zt.defaultDescription:r,i=t.location,a=void 0===i?"":i,l='{ \n\t\t"@context": "http://schema.org",\n\t\t"@type": "Organization",\n\t\t"legalName": "'+zt.legalName+'",\n\t\t"url": "'+zt.url+'",\n\t\t"logo": "'+zt.logo+'",\n\t\t"foundingDate": "'+zt.foundingDate+'",\n\t\t"founders": [{\n\t\t\t"@type": "Person",\n\t\t\t"name": "'+zt.legalName+'"\n\t\t}],\n\t\t"contactPoint": [{\n\t\t\t"@type": "ContactPoint",\n\t\t\t"email": "'+zt.contact.email+'",\n\t\t\t"telephone": "'+zt.contact.phone+'",\n\t\t\t"contactType": "customer service"\n\t\t}],\n\t\t"address": {\n\t\t\t"@type": "PostalAddress",\n\t\t\t"addressLocality": "'+zt.address.city+'",\n\t\t\t"addressRegion": "'+zt.address.region+'",\n\t\t\t"addressCountry": "'+zt.address.country+'",\n\t\t\t"postalCode": "'+zt.address.zipCode+'"\n\t\t},\n\t\t"sameAs": [\n\t\t\t"'+zt.socialLinks.twitter+'",\n\t\t\t"'+zt.socialLinks.google+'",\n\t\t\t"'+zt.socialLinks.youtube+'",\n\t\t\t"'+zt.socialLinks.linkedin+'",\n\t\t\t"'+zt.socialLinks.instagram+'",\n\t\t\t"'+zt.socialLinks.github+'"\n\t\t]\n  \t}';return s.createElement(Ot,null,s.createElement("meta",{name:"description",content:o}),s.createElement("meta",{name:"image",content:St}),s.createElement("meta",{property:"og:url",content:""+zt.url+a+"/?ref=smakosh.com"}),s.createElement("meta",{property:"og:type",content:"website"}),s.createElement("meta",{property:"og:title",content:n}),s.createElement("meta",{property:"og:description",content:o}),s.createElement("meta",{property:"og:image",content:St}),s.createElement("meta",{property:"fb:app_id",content:zt.social.facebook}),s.createElement("meta",{name:"twitter:card",content:"summary"}),s.createElement("meta",{name:"twitter:creator",content:zt.socialLinks.twitter}),s.createElement("meta",{name:"twitter:site",content:zt.social.twitter}),s.createElement("meta",{name:"twitter:title",content:n}),s.createElement("meta",{name:"twitter:description",content:o}),s.createElement("meta",{name:"twitter:image:src",content:St}),s.createElement("script",{type:"application/ld+json"},l),s.createElement("link",{rel:"publisher",href:zt.socialLinks.google}),s.createElement("title",null,n),s.createElement("html",{lang:"en",dir:"ltr"}))}},7140:function(t){t.exports={defaultTitle:"GPO",logo:"https://gpoauto.ro/favicon",author:"GPO",url:"https://gpoauto.ro",legalName:"GPO",defaultDescription:"I’m John and I’m a Backend & Devops engineer!",socialLinks:{twitter:"http://www.twitter.com/smakosh",github:"https://github.com/smakosh",linkedin:"https://www.linkedin.com/in/ismail-ghallou-630149122/",instagram:"https://instagram.com/smakosh19",youtube:"https://www.youtube.com/user/smakoshthegamer",google:"https://plus.google.com/u/0/+IsmailSmakoshGhallou"},googleAnalyticsID:"UA-88875900-4",themeColor:"#6b63ff",backgroundColor:"#6b63ff",social:{facebook:"appId",twitter:"@smakosh"},address:{city:"City",region:"Region",country:"Country",zipCode:"ZipCode"},contact:{email:"email",phone:"phone number"},foundingDate:"2018"}},7326:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=e50e9c162871c1d91fba5ce567a5656e16dc6783-94b31171ae7a476e54cc.js.map