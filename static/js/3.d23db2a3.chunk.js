(this.webpackJsonpposition_web_app=this.webpackJsonpposition_web_app||[]).push([[3],{2071:function(e,t,n){"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,"a",(function(){return h}));var i=n(1),a=n(92),o=n(1982),u=n(296),c=n.n(u),l=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})},s="undefined"!==typeof window&&window.document&&window.document.createElement?i.useLayoutEffect:i.useEffect,d=[];function f(e){var t=i.useRef(e);return t.current=e,i.useCallback((function(){return t.current}),[])}var b=function(){};function v(e,t){return void 0===e&&(e=0),void 0===t&&(t=0),function(){return{width:0,height:0,top:t,right:e,bottom:t,left:e,x:0,y:0,toJSON:function(){return null}}}}var p=["styles","attributes"],m={getBoundingClientRect:v()},O={closeOnOutsideClick:!0,closeOnTriggerHidden:!1,defaultVisible:!1,delayHide:0,delayShow:0,followCursor:!1,interactive:!1,mutationObserverOptions:{attributes:!0,childList:!0,subtree:!0},offset:[0,6],trigger:"hover"};function h(e,t){var n,u,h;void 0===e&&(e={}),void 0===t&&(t={});var g=Object.keys(O).reduce((function(e,t){var n;return r({},e,((n={})[t]=void 0!==e[t]?e[t]:O[t],n))}),e),y=i.useMemo((function(){return[{name:"offset",options:{offset:g.offset}}]}),Array.isArray(g.offset)?g.offset:[]),j=r({},t,{placement:t.placement||g.placement,modifiers:t.modifiers||y}),E=i.useState(null),k=E[0],w=E[1],C=i.useState(null),L=C[0],R=C[1],I=function(e){var t=e.initial,n=e.value,r=e.onChange,a=void 0===r?b:r;if(void 0===t&&void 0===n)throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');var o=i.useState(t),u=o[0],c=o[1],l=f(u),s=i.useCallback((function(e){var t=l(),n="function"===typeof e?e(t):e;"function"===typeof n.persist&&n.persist(),c(n),"function"===typeof a&&a(n)}),[l,a]),d=void 0!==n;return[d?n:u,d?a:s]}({initial:g.defaultVisible,value:g.visible,onChange:g.onVisibleChange}),S=I[0],N=I[1],P=i.useRef();i.useEffect((function(){return function(){return clearTimeout(P.current)}}),[]);var T=function(e,t,n){void 0===n&&(n={});var r=i.useRef(null),u={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||d},f=i.useState({styles:{popper:{position:u.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),b=f[0],v=f[1],p=i.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);a.flushSync((function(){v({styles:l(n.map((function(e){return[e,t.styles[e]||{}]}))),attributes:l(n.map((function(e){return[e,t.attributes[e]]})))})}))},requires:["computeStyles"]}}),[]),m=i.useMemo((function(){var e={onFirstUpdate:u.onFirstUpdate,placement:u.placement,strategy:u.strategy,modifiers:[].concat(u.modifiers,[p,{name:"applyStyles",enabled:!1}])};return c()(r.current,e)?r.current||e:(r.current=e,e)}),[u.onFirstUpdate,u.placement,u.strategy,u.modifiers,p]),O=i.useRef();return s((function(){O.current&&O.current.setOptions(m)}),[m]),s((function(){if(null!=e&&null!=t){var r=(n.createPopper||o.a)(e,t,m);return O.current=r,function(){r.destroy(),O.current=null}}}),[e,t,n.createPopper]),{state:O.current?O.current.state:null,styles:b.styles,attributes:b.attributes,update:O.current?O.current.update:null,forceUpdate:O.current?O.current.forceUpdate:null}}(g.followCursor?m:k,L,j),x=T.styles,D=T.attributes,M=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(T,p),_=M.update,F=f({visible:S,triggerRef:k,tooltipRef:L,finalConfig:g}),A=i.useCallback((function(e){return Array.isArray(g.trigger)?g.trigger.includes(e):g.trigger===e}),Array.isArray(g.trigger)?g.trigger:[g.trigger]),U=i.useCallback((function(){clearTimeout(P.current),P.current=window.setTimeout((function(){return N(!1)}),g.delayHide)}),[g.delayHide,N]),B=i.useCallback((function(){clearTimeout(P.current),P.current=window.setTimeout((function(){return N(!0)}),g.delayShow)}),[g.delayShow,N]),H=i.useCallback((function(){F().visible?U():B()}),[F,U,B]);i.useEffect((function(){if(F().finalConfig.closeOnOutsideClick){var e=function(e){var t,n=F(),r=n.tooltipRef,i=n.triggerRef,a=(null==e.composedPath||null==(t=e.composedPath())?void 0:t[0])||e.target;a instanceof Node&&(null==r||null==i||r.contains(a)||i.contains(a)||U())};return document.addEventListener("mousedown",e),function(){return document.removeEventListener("mousedown",e)}}}),[F,U]),i.useEffect((function(){if(null!=k&&A("click"))return k.addEventListener("click",H),function(){return k.removeEventListener("click",H)}}),[k,A,H]),i.useEffect((function(){if(null!=k&&A("right-click")){var e=function(e){e.preventDefault(),H()};return k.addEventListener("contextmenu",e),function(){return k.removeEventListener("contextmenu",e)}}}),[k,A,H]),i.useEffect((function(){if(null!=k&&A("focus"))return k.addEventListener("focus",B),k.addEventListener("blur",U),function(){k.removeEventListener("focus",B),k.removeEventListener("blur",U)}}),[k,A,B,U]),i.useEffect((function(){if(null!=k&&A("hover"))return k.addEventListener("mouseenter",B),k.addEventListener("mouseleave",U),function(){k.removeEventListener("mouseenter",B),k.removeEventListener("mouseleave",U)}}),[k,A,B,U]),i.useEffect((function(){if(null!=L&&F().finalConfig.interactive)return L.addEventListener("mouseenter",B),L.addEventListener("mouseleave",U),function(){L.removeEventListener("mouseenter",B),L.removeEventListener("mouseleave",U)}}),[L,B,U,F]);var z=null==M||null==(n=M.state)||null==(u=n.modifiersData)||null==(h=u.hide)?void 0:h.isReferenceHidden;i.useEffect((function(){g.closeOnTriggerHidden&&z&&U()}),[g.closeOnTriggerHidden,U,z]),i.useEffect((function(){if(g.followCursor&&null!=k)return k.addEventListener("mousemove",e),function(){return k.removeEventListener("mousemove",e)};function e(e){var t=e.clientX,n=e.clientY;m.getBoundingClientRect=v(t,n),null==_||_()}}),[g.followCursor,k,_]),i.useEffect((function(){if(null!=L&&null!=_&&null!=g.mutationObserverOptions){var e=new MutationObserver(_);return e.observe(L,g.mutationObserverOptions),function(){return e.disconnect()}}}),[g.mutationObserverOptions,L,_]);return r({getArrowProps:function(e){return void 0===e&&(e={}),r({},e,D.arrow,{style:r({},e.style,x.arrow),"data-popper-arrow":!0})},getTooltipProps:function(e){return void 0===e&&(e={}),r({},e,{style:r({},e.style,x.popper)},D.popper,{"data-popper-interactive":g.interactive})},setTooltipRef:R,setTriggerRef:w,tooltipRef:L,triggerRef:k,visible:S},M)}},2133:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(11),i=n(283),a=n(1970),o=n(1003),u=n(758),c=n(1995),l=n(139),s=n(111),d=n(1890),f=n(1963),b=n(1);function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function p(e){void 0===e&&(e={});var t=e,n=t.defaultIsChecked,p=t.defaultChecked,O=void 0===p?n:p,h=t.isChecked,g=t.isFocusable,y=t.isDisabled,j=t.isReadOnly,E=t.isRequired,k=t.onChange,w=t.isIndeterminate,C=t.isInvalid,L=t.name,R=t.value,I=t.id,S=t.onBlur,N=t.onFocus,P=t["aria-label"],T=t["aria-labelledby"],x=t["aria-invalid"],D=t["aria-describedby"],M=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["defaultIsChecked","defaultChecked","isChecked","isFocusable","isDisabled","isReadOnly","isRequired","onChange","isIndeterminate","isInvalid","name","value","id","onBlur","onFocus","aria-label","aria-labelledby","aria-invalid","aria-describedby"]),_=Object(i.a)(k),F=Object(i.a)(S),A=Object(i.a)(N),U=Object(a.a)(),B=Object(r.a)(U,2),H=B[0],z=B[1],q=Object(a.a)(),K=Object(r.a)(q,2),J=K[0],V=K[1],G=Object(a.a)(),X=Object(r.a)(G,2),Y=X[0],Q=X[1],W=Object(b.useRef)(null),Z=Object(b.useState)(!0),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ne=Object(b.useState)(!!O),re=Object(r.a)(ne,2),ie=re[0],ae=re[1],oe=Object(o.a)(h,ie),ue=Object(r.a)(oe,2),ce=ue[0],le=ue[1];Object(l.h)({condition:!!n,message:'The "defaultIsChecked" prop has been deprecated and will be removed in a future version. Please use the "defaultChecked" prop instead, which mirrors default React checkbox behavior.'});var se=Object(b.useCallback)((function(e){j||y?e.preventDefault():(ce||ae(le?e.target.checked:!!w||e.target.checked),null==_||_(e))}),[j,y,le,ce,w,_]);Object(u.a)((function(){W.current&&(W.current.indeterminate=Boolean(w))}),[w]);var de=y&&!g,fe=Object(b.useCallback)((function(e){" "===e.key&&Q.on()}),[Q]),be=Object(b.useCallback)((function(e){" "===e.key&&Q.off()}),[Q]);Object(u.a)((function(){W.current&&(W.current.checked!==le&&ae(W.current.checked))}),[W.current]);var ve=Object(b.useCallback)((function(e,t){void 0===e&&(e={}),void 0===t&&(t=null);return v({},e,{ref:t,"data-active":Object(s.e)(Y),"data-hover":Object(s.e)(J),"data-checked":Object(s.e)(le),"data-focus":Object(s.e)(H),"data-indeterminate":Object(s.e)(w),"data-disabled":Object(s.e)(y),"data-invalid":Object(s.e)(C),"data-readonly":Object(s.e)(j),"aria-hidden":!0,onMouseDown:Object(l.b)(e.onMouseDown,(function(e){e.preventDefault(),Q.on()})),onMouseUp:Object(l.b)(e.onMouseUp,Q.off),onMouseEnter:Object(l.b)(e.onMouseEnter,V.on),onMouseLeave:Object(l.b)(e.onMouseLeave,V.off)})}),[Y,le,y,H,J,w,C,j,Q,V.off,V.on]),pe=Object(b.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),v({},M,e,{ref:Object(c.a)(t,(function(e){e&&te("LABEL"===e.tagName)})),onClick:Object(l.b)(e.onClick,(function(){var e;ee||(null==(e=W.current)||e.click(),Object(d.a)(W.current,{nextTick:!0}))})),"data-disabled":Object(s.e)(y)})}),[M,y,ee]),me=Object(b.useCallback)((function(e,t){void 0===e&&(e={}),void 0===t&&(t=null);return v({},e,{ref:Object(c.a)(W,t),type:"checkbox",name:L,value:R,id:I,onChange:Object(l.b)(e.onChange,se),onBlur:Object(l.b)(e.onBlur,F,z.off),onFocus:Object(l.b)(e.onFocus,A,(function(){Object(l.g)(z.on)})),onKeyDown:Object(l.b)(e.onKeyDown,fe),onKeyUp:Object(l.b)(e.onKeyUp,be),required:E,checked:le,disabled:de,readOnly:j,"aria-label":P,"aria-labelledby":T,"aria-invalid":x?Boolean(x):C,"aria-describedby":D,"aria-disabled":y,style:f.b})}),[L,R,I,se,z.off,z.on,F,A,fe,be,E,le,de,j,P,T,x,C,D,y]),Oe=Object(b.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),v({},e,{ref:t,onMouseDown:Object(l.b)(e.onMouseDown,m),onTouchStart:Object(l.b)(e.onTouchStart,m),"data-disabled":Object(s.e)(y),"data-checked":Object(s.e)(le),"data-invalid":Object(s.e)(C)})}),[le,y,C]);return{state:{isInvalid:C,isFocused:H,isChecked:le,isActive:Y,isHovered:J,isIndeterminate:w,isDisabled:y,isReadOnly:j,isRequired:E},getRootProps:pe,getCheckboxProps:ve,getInputProps:me,getLabelProps:Oe,htmlProps:M}}function m(e){e.preventDefault(),e.stopPropagation()}},2232:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(143),i=n(444),a=n(280),o=n(154),u=n(344),c=n(111),l=n(49),s=n(1892),d=n(1);function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}var b=Object(r.a)((function(e,t){var n=Object(i.a)("Input",e),r=Object(a.b)(e),l=r.children,b=r.className,v=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(r,["children","className"]),p=Object(c.d)("chakra-input__group",b),m={},O=Object(s.a)(l),h=n.field;O.forEach((function(e){if(n){var t,r;if(h&&"InputLeftElement"===e.type.id)m.paddingStart=null!=(t=h.height)?t:h.h;if(h&&"InputRightElement"===e.type.id)m.paddingEnd=null!=(r=h.height)?r:h.h;"InputRightAddon"===e.type.id&&(m.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(m.borderStartRadius=0)}}));var g=O.map((function(t){var n,r,i={size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(r=t.props)?void 0:r.variant)||e.variant};return"Input"!==t.type.id?d.cloneElement(t,i):d.cloneElement(t,Object.assign(i,m,t.props))}));return d.createElement(o.a.div,f({className:p,ref:t,__css:{width:"100%",display:"flex",position:"relative"}},v),d.createElement(u.b,{value:n},g))}));l.a&&(b.displayName="InputGroup")},2233:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return p}));var r=n(15),i=n(154),a=n(143),o=n(344),u=n(49),c=n(111),l=n(1);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var f=Object(i.a)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),b=Object(a.a)((function(e,t){var n,i,a,u=e.placement,c=void 0===u?"left":u,b=d(e,["placement"]),v=Object(o.d)().field,p="left"===c?"insetStart":"insetEnd",m=(n={},Object(r.a)(n,p,"0"),Object(r.a)(n,"width",null!=(i=null==v?void 0:v.height)?i:null==v?void 0:v.h),Object(r.a)(n,"height",null!=(a=null==v?void 0:v.height)?a:null==v?void 0:v.h),Object(r.a)(n,"fontSize",null==v?void 0:v.fontSize),n);return l.createElement(f,s({ref:t,__css:m},b))}));b.id="InputElement",u.a&&(b.displayName="InputElement");var v=Object(a.a)((function(e,t){var n=e.className,r=d(e,["className"]),i=Object(c.d)("chakra-input__left-element",n);return l.createElement(b,s({ref:t,placement:"left",className:i},r))}));v.id="InputLeftElement",u.a&&(v.displayName="InputLeftElement");var p=Object(a.a)((function(e,t){var n=e.className,r=d(e,["className"]),i=Object(c.d)("chakra-input__right-element",n);return l.createElement(b,s({ref:t,placement:"right",className:i},r))}));p.id="InputRightElement",u.a&&(p.displayName="InputRightElement")}}]);