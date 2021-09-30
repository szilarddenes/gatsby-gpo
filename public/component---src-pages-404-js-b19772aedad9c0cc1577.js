"use strict";(self.webpackChunkgatsby_solidgarden_theme=self.webpackChunkgatsby_solidgarden_theme||[]).push([[883],{2847:function(e,t,n){n.d(t,{ZP:function(){return N}});var r=n(7294);function o(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}var i=n(7326),s=n(4578),c=n(8812),u=n(5706),l=n.n(u);function f(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}var h=r.createContext();var d={initialChunks:{}},p="PENDING",m="REJECTED";var v=function(e){return e};function y(e){var t=e.defaultResolveComponent,n=void 0===t?v:t,u=e.render,y=e.onLoad;function g(e,t){void 0===t&&(t={});var v=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),g={};function b(e){return t.cacheKey?t.cacheKey(e):v.resolve?v.resolve(e):"static"}function k(e,r,o){var a=t.resolveComponent?t.resolveComponent(e,r):n(e);if(t.resolveComponent&&!(0,c.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return l()(o,a,{preload:!0}),a}var E,C,w=function(e){function n(n){var r;return(r=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:b(n)},f(!n.__chunkExtractor||v.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===t.ssr||(v.requireAsync(n).catch((function(){return null})),r.loadSync(),n.__chunkExtractor.addChunk(v.chunkName(n))),(0,i.Z)(r)):(!1!==t.ssr&&(v.isReady&&v.isReady(n)||v.chunkName&&d.initialChunks[v.chunkName(n)])&&r.loadSync(),r)}(0,s.Z)(n,e),n.getDerivedStateFromProps=function(e,t){var n=b(e);return a({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var r=n.prototype;return r.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===m&&this.setCache(),this.state.loading&&this.loadAsync()},r.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},r.componentWillUnmount=function(){this.mounted=!1},r.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},r.getCacheKey=function(){return b(this.props)},r.getCache=function(){return g[this.getCacheKey()]},r.setCache=function(e){void 0===e&&(e=void 0),g[this.getCacheKey()]=e},r.triggerOnLoad=function(){var e=this;y&&setTimeout((function(){y(e.state.result,e.props)}))},r.loadSync=function(){if(this.state.loading)try{var e=k(v.requireSync(this.props),this.props,N);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:v.resolve(this.props),chunkName:v.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},r.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var n=k(t,e.props,{Loadable:N});e.safeSetState({result:n,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},r.resolveAsync=function(){var e=this,t=this.props,n=(t.__chunkExtractor,t.forwardedRef,o(t,["__chunkExtractor","forwardedRef"])),r=this.getCache();return r||((r=v.requireAsync(n)).status=p,this.setCache(r),r.then((function(){r.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:v.resolve(e.props),chunkName:v.chunkName(e.props),error:t?t.message:t}),r.status=m}))),r},r.render=function(){var e=this.props,n=e.forwardedRef,r=e.fallback,i=(e.__chunkExtractor,o(e,["forwardedRef","fallback","__chunkExtractor"])),s=this.state,c=s.error,l=s.loading,f=s.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===p)throw this.loadAsync();if(c)throw c;var h=r||t.fallback||null;return l?h:u({fallback:h,result:f,options:t,props:a({},i,{ref:n})})},n}(r.Component),_=(C=function(e){return r.createElement(h.Consumer,null,(function(t){return r.createElement(E,Object.assign({__chunkExtractor:t},e))}))},(E=w).displayName&&(C.displayName=E.displayName+"WithChunkExtractor"),C),N=r.forwardRef((function(e,t){return r.createElement(_,Object.assign({forwardedRef:t},e))}));return N.displayName="Loadable",N.preload=function(e){v.requireAsync(e)},N.load=function(e){return v.requireAsync(e)},N}return{loadable:g,lazy:function(e,t){return g(e,a({},t,{suspense:!0}))}}}var g=y({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,n=e.props;return r.createElement(t,n)}}),b=g.loadable,k=g.lazy,E=y({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.props;return n.children?n.children(t):null}}),C=E.loadable,w=E.lazy;var _=b;_.lib=C,k.lib=w;var N=_},9616:function(e,t,n){n.r(t);var r=n(7294),o=n(2847),a=(0,o.ZP)((function(){return Promise.all([n.e(532),n.e(351)]).then(n.bind(n,6700))})),i=(0,o.ZP)((function(){return n.e(351).then(n.bind(n,2163))}));t.default=function(){return r.createElement(a,null,r.createElement(i,{title:"404: Not found",location:"/404"}),r.createElement("h1",null,"NOT FOUND"),r.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},7326:function(e,t,n){function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-404-js-b19772aedad9c0cc1577.js.map