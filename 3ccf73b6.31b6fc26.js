(window.webpackJsonp=window.webpackJsonp||[]).push([[45,20],{274:function(e,t,n){"use strict";var a=n(3),l=n(0),r=n.n(l),c=n(24),o=n(22),s=n(268),u=n(271),i=n(269),b=n(23),m=n(275),h=n(357),O=n(358),d=n(283);let j=null;function f({hit:e,children:t}){return r.a.createElement(i.a,{to:e.url},t)}function p({state:e,onClose:t}){const{generateSearchPageLink:n}=Object(m.a)();return r.a.createElement(i.a,{to:n(e.query),onClick:t},"See all ",e.context.nbHits," results")}function C({contextualSearch:e,...t}){var i,m;const{siteMetadata:C}=Object(o.default)(),g=Object(d.a)(),k=null!==(i=null===(m=t.searchParameters)||void 0===m?void 0:m.facetFilters)&&void 0!==i?i:[],E=e?[...g,...k]:k,v={...t.searchParameters,facetFilters:E},{withBaseUrl:w}=Object(u.b)(),S=Object(s.useHistory)(),P=Object(l.useRef)(null),[y,F]=Object(l.useState)(!1),[M,R]=Object(l.useState)(null),I=Object(l.useCallback)((()=>j?Promise.resolve():Promise.all([n.e(189).then(n.bind(null,282)),Promise.all([n.e(0),n.e(190)]).then(n.bind(null,281)),n.e(0).then(n.t.bind(null,56,7))]).then((([{DocSearchModal:e}])=>{j=e}))),[]),$=Object(l.useCallback)((()=>{I().then((()=>{F(!0)}))}),[I,F]),x=Object(l.useCallback)((()=>{F(!1)}),[F]),A=Object(l.useCallback)((e=>{I().then((()=>{F(!0),R(e.key)}))}),[I,F,R]),B=Object(l.useRef)({navigate({itemUrl:e}){S.push(e)}}).current,H=Object(l.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:w(`${t.pathname}${t.hash}`)}})))).current,J=Object(l.useMemo)((()=>e=>r.a.createElement(p,Object(a.a)({},e,{onClose:x}))),[x]),U=Object(l.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",C.docusaurusVersion),e)),[C.docusaurusVersion]);return Object(h.a)({isOpen:y,onOpen:$,onClose:x,onInput:A,searchButtonRef:P}),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement("link",{rel:"preconnect",href:`https://${t.appId}-dsn.algolia.net`,crossOrigin:"anonymous"})),r.a.createElement(O.a,{onTouchStart:I,onFocus:I,onMouseOver:I,onClick:$,ref:P}),y&&Object(c.createPortal)(r.a.createElement(j,Object(a.a)({onClose:x,initialScrollY:window.scrollY,initialQuery:M,navigator:B,transformItems:H,hitComponent:f,resultsFooterComponent:J,transformSearchClient:U},t,{searchParameters:v})),document.body))}t.a=function(){const{siteConfig:e}=Object(o.default)();return r.a.createElement(C,e.themeConfig.algolia)}}}]);