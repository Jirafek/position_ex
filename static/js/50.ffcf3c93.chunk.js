(this.webpackJsonpposition_web_app=this.webpackJsonpposition_web_app||[]).push([[50],{2005:function(e,t,n){"use strict";var r=n(6),c=n(127),o=(n(1),n(2076)),i=n(2),a=["value","onChange","customKeyDown","customBlur","onFocus","setColorFocus","limitDecimals"];t.a=function(e){var t=e.value,n=e.onChange,s=e.customKeyDown,u=e.customBlur,l=e.onFocus,b=e.setColorFocus,d=e.limitDecimals,f=void 0===d?8:d,p=Object(c.a)(e,a);new RegExp("^[0-9]*[.,]?[0-9]{0,".concat(f,"}$"));return Object(i.jsx)(o.a,Object(r.a)({type:"number",lang:"en",onFocus:l,value:t,step:"0.01",onKeyDown:function(e){return s&&s(),!0},onWheel:function(e){return e.target.blur()},onBlur:function(e){l&&l(),u&&u(),b&&b();e.target.value},onChange:function(e){var t=e.target.value;n(t&&"string"===typeof t?t.replaceAll(",","."):t)},inputMode:"decimal"},p))}},2007:function(e,t,n){"use strict";var r=n(6),c=n(127),o=n(590),i=n(134),a=n(1),s=n(147),u=n(2071),l=n(435),b=n(2),d=["label","children","content","typeOfLabel","isIcon","containerClassName","isMarkdown","placement"],f=Object(a.memo)((function(e){var t=e.label,n=e.children,a=e.content,f=e.typeOfLabel,p=void 0===f?"body1-r":f,j=e.isIcon,x=e.containerClassName,m=e.isMarkdown,O=e.placement,g=Object(c.a)(e,d),h=Object(u.a)({placement:O||"auto"}),y=h.getArrowProps,v=h.getTooltipProps,w=h.setTooltipRef,k=h.setTriggerRef,C=h.visible,S=Object(o.d)("white","gray.700"),T=Object(o.d)("gray.700","gray.100"),E=Object(o.d)("tooltip-arrow-light","");return Object(b.jsxs)(i.a,{w:"fit-content",h:"fit-content",className:x,children:[Object(b.jsx)(s.a,Object(r.a)(Object(r.a)({cursor:"pointer",borderBottom:j?"none":"1px dashed ".concat(C?"#00A3C4":"#2D3748"),type:p},g),{},{ref:k,children:n})),C&&Object(b.jsxs)(i.a,Object(r.a)(Object(r.a)({ref:w},v({className:"tooltip-container"})),{},{px:"12px",py:"8px",borderRadius:"8px",bg:S,maxW:"240px",borderWidth:"0px",textAlign:"left",flexWrap:"wrap",whiteSpace:"normal",children:[m?Object(b.jsx)(i.a,{className:"markdown-custom-to-default markdown-custom-to-default1",flexDirection:"column",fontSize:"14px",color:T,children:Object(b.jsx)(l.a,{children:a})}):Object(b.jsx)(s.a,{type:"paragraph2",color:T,children:a}),t&&Object(b.jsx)(s.a,{type:"paragraph2",color:T,children:t}),Object(b.jsx)("div",Object(r.a)({},y({className:"tooltip-arrow ".concat(E)})))]}))]})}));t.a=f},2071:function(e,t,n){"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,"a",(function(){return O}));var c=n(1),o=n(92),i=n(1982),a=n(296),s=n.n(a),u=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})},l="undefined"!==typeof window&&window.document&&window.document.createElement?c.useLayoutEffect:c.useEffect,b=[];function d(e){var t=c.useRef(e);return t.current=e,c.useCallback((function(){return t.current}),[])}var f=function(){};function p(e,t){return void 0===e&&(e=0),void 0===t&&(t=0),function(){return{width:0,height:0,top:t,right:e,bottom:t,left:e,x:0,y:0,toJSON:function(){return null}}}}var j=["styles","attributes"],x={getBoundingClientRect:p()},m={closeOnOutsideClick:!0,closeOnTriggerHidden:!1,defaultVisible:!1,delayHide:0,delayShow:0,followCursor:!1,interactive:!1,mutationObserverOptions:{attributes:!0,childList:!0,subtree:!0},offset:[0,6],trigger:"hover"};function O(e,t){var n,a,O;void 0===e&&(e={}),void 0===t&&(t={});var g=Object.keys(m).reduce((function(e,t){var n;return r({},e,((n={})[t]=void 0!==e[t]?e[t]:m[t],n))}),e),h=c.useMemo((function(){return[{name:"offset",options:{offset:g.offset}}]}),Array.isArray(g.offset)?g.offset:[]),y=r({},t,{placement:t.placement||g.placement,modifiers:t.modifiers||h}),v=c.useState(null),w=v[0],k=v[1],C=c.useState(null),S=C[0],T=C[1],E=function(e){var t=e.initial,n=e.value,r=e.onChange,o=void 0===r?f:r;if(void 0===t&&void 0===n)throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');var i=c.useState(t),a=i[0],s=i[1],u=d(a),l=c.useCallback((function(e){var t=u(),n="function"===typeof e?e(t):e;"function"===typeof n.persist&&n.persist(),s(n),"function"===typeof o&&o(n)}),[u,o]),b=void 0!==n;return[b?n:a,b?o:l]}({initial:g.defaultVisible,value:g.visible,onChange:g.onVisibleChange}),A=E[0],R=E[1],N=c.useRef();c.useEffect((function(){return function(){return clearTimeout(N.current)}}),[]);var L=function(e,t,n){void 0===n&&(n={});var r=c.useRef(null),a={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||b},d=c.useState({styles:{popper:{position:a.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),f=d[0],p=d[1],j=c.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);o.flushSync((function(){p({styles:u(n.map((function(e){return[e,t.styles[e]||{}]}))),attributes:u(n.map((function(e){return[e,t.attributes[e]]})))})}))},requires:["computeStyles"]}}),[]),x=c.useMemo((function(){var e={onFirstUpdate:a.onFirstUpdate,placement:a.placement,strategy:a.strategy,modifiers:[].concat(a.modifiers,[j,{name:"applyStyles",enabled:!1}])};return s()(r.current,e)?r.current||e:(r.current=e,e)}),[a.onFirstUpdate,a.placement,a.strategy,a.modifiers,j]),m=c.useRef();return l((function(){m.current&&m.current.setOptions(x)}),[x]),l((function(){if(null!=e&&null!=t){var r=(n.createPopper||i.a)(e,t,x);return m.current=r,function(){r.destroy(),m.current=null}}}),[e,t,n.createPopper]),{state:m.current?m.current.state:null,styles:f.styles,attributes:f.attributes,update:m.current?m.current.update:null,forceUpdate:m.current?m.current.forceUpdate:null}}(g.followCursor?x:w,S,y),B=L.styles,M=L.attributes,_=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(L,j),F=_.update,D=d({visible:A,triggerRef:w,tooltipRef:S,finalConfig:g}),I=c.useCallback((function(e){return Array.isArray(g.trigger)?g.trigger.includes(e):g.trigger===e}),Array.isArray(g.trigger)?g.trigger:[g.trigger]),z=c.useCallback((function(){clearTimeout(N.current),N.current=window.setTimeout((function(){return R(!1)}),g.delayHide)}),[g.delayHide,R]),P=c.useCallback((function(){clearTimeout(N.current),N.current=window.setTimeout((function(){return R(!0)}),g.delayShow)}),[g.delayShow,R]),W=c.useCallback((function(){D().visible?z():P()}),[D,z,P]);c.useEffect((function(){if(D().finalConfig.closeOnOutsideClick){var e=function(e){var t,n=D(),r=n.tooltipRef,c=n.triggerRef,o=(null==e.composedPath||null==(t=e.composedPath())?void 0:t[0])||e.target;o instanceof Node&&(null==r||null==c||r.contains(o)||c.contains(o)||z())};return document.addEventListener("mousedown",e),function(){return document.removeEventListener("mousedown",e)}}}),[D,z]),c.useEffect((function(){if(null!=w&&I("click"))return w.addEventListener("click",W),function(){return w.removeEventListener("click",W)}}),[w,I,W]),c.useEffect((function(){if(null!=w&&I("right-click")){var e=function(e){e.preventDefault(),W()};return w.addEventListener("contextmenu",e),function(){return w.removeEventListener("contextmenu",e)}}}),[w,I,W]),c.useEffect((function(){if(null!=w&&I("focus"))return w.addEventListener("focus",P),w.addEventListener("blur",z),function(){w.removeEventListener("focus",P),w.removeEventListener("blur",z)}}),[w,I,P,z]),c.useEffect((function(){if(null!=w&&I("hover"))return w.addEventListener("mouseenter",P),w.addEventListener("mouseleave",z),function(){w.removeEventListener("mouseenter",P),w.removeEventListener("mouseleave",z)}}),[w,I,P,z]),c.useEffect((function(){if(null!=S&&D().finalConfig.interactive)return S.addEventListener("mouseenter",P),S.addEventListener("mouseleave",z),function(){S.removeEventListener("mouseenter",P),S.removeEventListener("mouseleave",z)}}),[S,P,z,D]);var U=null==_||null==(n=_.state)||null==(a=n.modifiersData)||null==(O=a.hide)?void 0:O.isReferenceHidden;c.useEffect((function(){g.closeOnTriggerHidden&&U&&z()}),[g.closeOnTriggerHidden,z,U]),c.useEffect((function(){if(g.followCursor&&null!=w)return w.addEventListener("mousemove",e),function(){return w.removeEventListener("mousemove",e)};function e(e){var t=e.clientX,n=e.clientY;x.getBoundingClientRect=p(t,n),null==F||F()}}),[g.followCursor,w,F]),c.useEffect((function(){if(null!=S&&null!=F&&null!=g.mutationObserverOptions){var e=new MutationObserver(F);return e.observe(S,g.mutationObserverOptions),function(){return e.disconnect()}}}),[g.mutationObserverOptions,S,F]);return r({getArrowProps:function(e){return void 0===e&&(e={}),r({},e,M.arrow,{style:r({},e.style,B.arrow),"data-popper-arrow":!0})},getTooltipProps:function(e){return void 0===e&&(e={}),r({},e,{style:r({},e.style,B.popper)},M.popper,{"data-popper-interactive":g.interactive})},setTooltipRef:T,setTriggerRef:k,tooltipRef:S,triggerRef:w,visible:A},_)}},2076:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(1991),c=n(143),o=n(444),i=n(280),a=n(154),s=n(111),u=n(49),l=n(1);function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}var d=Object(c.a)((function(e,t){var n=Object(o.a)("Input",e),c=Object(i.b)(e),u=Object(r.a)(c),d=Object(s.d)("chakra-input",e.className);return l.createElement(a.a.input,b({},u,{__css:n.field,ref:t,className:d}))}));u.a&&(d.displayName="Input"),d.id="Input"},2310:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(149),c=n(742),o=function(e){return Object(c.b)(e,4,4)},i=function(e){return!!e&&r.a.utils.isAddress(e)}},3060:function(e,t,n){"use strict";n.r(t);var r=n(590),c=n(700),o=n(134),i=n(1),a=n.n(i),s=n(7),u=n(11),l=n(0),b=n.n(l),d=n(1989),f=n(321),p=n(53),j=n(239),x=n(22),m=n(152),O=n(2005),g=n(147),h=n(298),y=n(370),v=n(128),w=n(39),k=n(240),C=n(72),S=function(){var e=Object(x.f)((function(e){return e.bridgeAsset.sourceChainTokenAmount}));return Object(i.useMemo)((function(){return e}),[e])},T=function(){var e=Object(x.f)((function(e){return e.bridgeAsset.recipient}));return Object(i.useMemo)((function(){return e}),[e])},E=function(e){var t=Object(x.f)((function(e){return e.bridgeAsset.minimumBridgeAmount}))[e]||10;return Object(i.useMemo)((function(){return t}),[t])},A=n(713),R=n(475),N=n(16),L=(n(149),n(178)),B=function(e,t){return e===t},M=function(e,t,n,r,c){return c?(e*t-n-r)/100+n+r||"0.00":e*t/100+n+r||"0.00"},_=n(20),F=n(364),D=n(2),I=function(e){e.tokenSelected;var t=e.onSelectToken,n=e.listToken;return Object(D.jsx)(o.a,{children:n.map((function(e){return Object(D.jsx)(o.a,{bg:"gray.700",borderRadius:"8px",p:"1px",onClick:function(){return t(e)},align:"center",children:Object(D.jsxs)(o.a,{bg:"gray.800",w:"fit-content",minW:"100px",align:"center",borderRadius:"8px",p:"6px 10px",children:[Object(D.jsx)(f.a,{mr:"8px",src:e.imgUrl}),Object(D.jsx)(g.a,{type:"body1",children:e.symbol})]})},"bridge-token-supported-".concat(e.address))}))})},z=function(e){var t=e.bridgeTokenSelected,n=e.onSelectToken,r=e.bridgeTokenAmount,c=e.setBridgeTokenAmount,s=e.chainSelected,u=Object(j.a)(["bridgeAsset","swap","common"]).t,l=Object(N.b)(),b=Object(p.d)().account,d=S(),f=Object(x.e)(),y=Object(N.a)(t.address),v=B(t.symbol,s.name);a.a.useEffect((function(){f(Object(A.d)(s.name,y,v,b)),f(Object(A.b)(s.name,b,l,y))}),[b,s]);var w=E(t.symbol),k=u("error.minimum-amount",{minimum_amount:w,symbol:t.symbol}),C=function(e,t){return!(e<t)}(Number(r),w),T=Number(r)>d,L=u("common:available",{input_amount:Object(_.w)(d,3),symbol:t.symbol}),M=Object(m.g)(s.name);return Object(i.useEffect)((function(){R.a.sendMessage(M)}),[s]),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(o.a,{bg:"gray.900",borderRadius:"12px",p:"18px 16px",w:"100%",mt:"8px",flexDirection:"column",children:[Object(D.jsxs)(o.a,{align:"center",children:[Object(D.jsx)(O.a,{value:r,onChange:c,border:"0px",placeholder:"0.00",fontSize:"28px",w:"80%",_placeholder:{color:"gray.600"},px:"0px"}),Object(D.jsx)(I,{tokenSelected:t,onSelectToken:n,listToken:h.d})]}),Object(D.jsxs)(o.a,{alignItems:"flex-end",align:"center",w:"100%",justifyContent:"flex-end",mt:"12px",children:[Object(D.jsxs)(g.a,{align:"center",type:"body2",color:"gray.500",children:[u("swap:Balance"),": ",Object(_.w)(d||"--",3)]}),Object(D.jsx)(g.a,{type:"button2",color:"teal.150",ml:"4px",onClick:function(){var e,t;c((e=d-.02,t=(t=3)||0,t=Math.pow(10,t),Math.floor(Number(new F.Decimal(e).mul(t)))/t))},cursor:"pointer",children:"MAX"})]})]}),T&&r&&Object(D.jsx)(o.a,{justifyContent:"flex-start",w:"100%",fontSize:"14px",color:"red.400",mt:"8px",children:L}),!C&&!!Number(r)&&!T&&Object(D.jsx)(o.a,{justifyContent:"flex-start",w:"100%",fontSize:"14px",color:"red.400",mt:"8px",children:k})]})},P=n(307),W=function(e){var t=e.bridgeTokenSelected,n=e.bridgeTokenAmount,r=e.chainSelected,c=e.onSelectToken,s=e.isNativeTokenBridge,u=Object(j.a)(["bridgeAsset","swap"]).t,l=function(){var e=Object(x.f)((function(e){return e.bridgeAsset.destinationChainTokenAmount}));return Object(i.useMemo)((function(){return e}),[e])}(),b=t.hasRfi,d=M(b?1:0,Number(n),1,1,s),f=Number(n)-Number(d),m=f&&f>0?Object(_.w)(f||"--",3):0,O=Object(p.d)().account,y=Object(x.e)(),v=Object(N.a)(t.address),w=B(t.symbol,r.name);a.a.useEffect((function(){y(Object(A.c)(r.name,v,w,O))}),[O,r]),Object(P.a)((function(){O&&y(Object(A.c)(r.name,v,w,O))}),1e4);var k=f>Math.pow(10,18)||!f;return Object(D.jsxs)(o.a,{bg:"gray.900",borderRadius:"12px",p:"18px 16px",w:"100%",mt:"8px",flexDirection:"column",children:[Object(D.jsxs)(o.a,{justifyContent:"space-between",w:"100%",align:"center",children:[Object(D.jsx)(o.a,{fontSize:"28px",lineHeight:"32px",color:m?"gray.100":"gray.600",overflow:"hidden",children:k?"0.00":m}),Object(D.jsx)(I,{tokenSelected:t,onSelectToken:c,listToken:h.d})]}),Object(D.jsx)(o.a,{alignItems:"flex-end",align:"center",w:"100%",justifyContent:"flex-end",mt:"12px",children:Object(D.jsxs)(g.a,{align:"center",type:"body2",color:"gray.500",children:[u("swap:Balance"),": ",Object(_.w)(l||"--",3)]})})]})},U=n(59),H=n(2008),J=n(220),K=n(291),V=n(170),q=n(237),X=n(226),G=n(126),Y=n(2076),$=n(699),Q=n(2310),Z=function(e){var t=e.isOpenModal,n=e.onClose,r=Object(j.a)("swap").t,c=Object(x.e)(),a=Object(p.d)().account,s=Object(q.a)("(max-width: 400px ) and (min-width: 0px )"),l=Object(u.a)(s,1)[0];Object(i.useEffect)((function(){n()}),[a]);var b=T(),d=Object(i.useState)(""),f=Object(u.a)(d,2),m=f[0],O=f[1];Object(i.useEffect)((function(){O(b)}),[b]);var g=Object(Q.a)(m.trim()||"");return Object(D.jsxs)(X.a,{isOpen:t,onClose:n,isCentered:!0,children:[Object(D.jsx)(X.h,{}),Object(D.jsxs)(X.d,{bg:"gray.800",borderRadius:"24px",minW:l?"328px":"400px",maxW:l?"328px":"400px",children:[Object(D.jsx)(X.g,{px:"28px",py:"21px",color:"white",fontWeight:"600",fontSize:18,textAlign:"left",children:r("recipient")}),Object(D.jsx)(X.c,{color:"gray.500",my:"4px",mx:"18px"}),Object(D.jsx)(X.b,{px:"0px",children:Object(D.jsx)(o.a,{h:"100px",w:"100%",align:"center",children:Object(D.jsxs)(o.a,{direction:"column",w:"100%",mx:"14px",children:[Object(D.jsx)(o.a,{mb:"12px",children:Object(D.jsx)(G.a,{color:"gray.500",fontSize:"14px",fontWeight:"500",children:r("recipient_address")})}),Object(D.jsx)(o.a,{children:Object(D.jsx)(Y.a,{border:"none",borderRadius:"8px",bg:"rgba(0, 0, 0, 0.3)",placeholder:r("wallet_address"),_placeholder:{color:"gray.600",fontSize:"14px",fontWeight:"400"},_focus:{color:"gray.100",fontSize:"14px",fontWeight:"400",border:"1.5px solid #718096"},_hover:{border:"1.5px solid #4A5568"},color:"white",value:m,onChange:function(e){var t=e.target.value.trim()||"";O(t)}})})]})})}),Object(D.jsx)(X.f,{my:"16px",children:Object(D.jsx)(o.a,{w:"100%",children:Object(D.jsx)($.a,{bg:g?"teal.150":"gray.700",_hover:{bg:g?"teal.150":"gray.700"},w:"100%",borderRadius:"12px",disabled:!g,opacity:"1 !important",onClick:function(){c(Object(A.f)(m)),n()},children:Object(D.jsx)(G.a,{color:g?"white":"gray.500",fontSize:"14px",fontWeight:"500",children:r("save")})})})})]})]})},ee=function(e){var t=e.name,n=e.imgUrl,r=Object(j.a)("bridgeAsset").t;return Object(D.jsxs)(o.a,{flexDirection:"row",w:"fit-content",align:"center",children:[Object(D.jsx)(f.a,{src:n,mr:"2px"}),Object(D.jsx)(g.a,{type:"body1",w:"fit-content",children:"".concat(t," ").concat(r("chain"))})]})},te=n(703),ne=n(1994),re=n(2007),ce=function(e){var t=e.sourceTokenAmount,n=e.bridgeTokenSelected,r=e.isNativeToken,i=n.hasRfi,a=M(i?1:0,t,1,1,r),s=n.symbol,u=Object(j.a)("bridgeAsset").t,l=t?1:"0.00",b=function(e,t,n,r,c){return c?r*(e-t-n)||"0.00":r*e||"0.00"}(t,1,1,.01,r),d=t?1:"0.00",f=Number(a)>Math.pow(10,18),p=f?"--":a;return Object(D.jsx)(o.a,{w:"100%",mt:"12px",children:Object(D.jsx)(ne.a,{allowMultiple:!0,w:"100%",children:Object(D.jsxs)(ne.d,{border:"none",children:[Object(D.jsxs)(ne.b,{children:[Object(D.jsx)(c.a,{flex:"1",textAlign:"left",children:u("bridge-fee")}),Object(D.jsxs)(o.a,{children:[Object(D.jsxs)(g.a,{type:"body1",color:"gray.100",children:[Object(_.w)(t?p:"0.00",2)," ",s]}),Object(D.jsx)(ne.c,{ml:"4px"})]})]}),Object(D.jsxs)(ne.e,{pb:4,color:"gray.500",children:[Object(D.jsxs)(o.a,{justifyContent:"space-between",w:"100%",children:[Object(D.jsx)(re.a,{color:"gray.500",content:u("tooltip.rfi-fee"),typeOfLabel:"body1",children:u("RFI Fee")}),Object(D.jsxs)(g.a,{type:"body1",children:[Object(_.w)(!f&&b>0?b:0,2)," ",s]})]}),Object(D.jsxs)(o.a,{justifyContent:"space-between",w:"100%",mt:"10px",children:[Object(D.jsx)(re.a,{color:"gray.500",content:u("tooltip.system-fee"),typeOfLabel:"body1",children:u("System Fee")}),Object(D.jsxs)(g.a,{type:"body1",children:[Object(_.w)(l,2)," ",s]})]}),Object(D.jsxs)(o.a,{justifyContent:"space-between",w:"100%",mt:"10px",children:[Object(D.jsx)(re.a,{color:"gray.500",content:u("tooltip.relayer-fee"),typeOfLabel:"body1",children:u("Relayer Fee")}),Object(D.jsxs)(g.a,{type:"body1",children:[Object(_.w)(d,2)," ",s]})]})]})]})})})},oe=n(106),ie=n.n(oe),ae=function(){var e=Object(p.d)(),t=e.account,n=e.chainId,r=Object(j.a)(["bridgeAsset","swap"]).t,a=Object(V.a)(),l=a.login,O=a.logout,R=Object(K.a)(l,O).onPresentConnectModal,M=function(){var e=Object(x.f)((function(e){return e.bridgeAsset.allowanceBridgeContract}));return Object(i.useMemo)((function(){return!!e}),[e])}(),_=Object(i.useState)(h.d[0]),F=Object(u.a)(_,2),I=F[0],P=F[1],q=function(e){P(e)},X=Object(N.a)(I.address),G=Object(C.a)(),Y=Object(U.a)(X,G),$=Object(H.e)(Y).onApprove,Q=T(),ne=Object(i.useState)(""),re=Object(u.a)(ne,2),oe=re[0],ae=re[1],se=Object(x.e)(),ue=Object(i.useCallback)(Object(s.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,We("BNB"===Oe.name?56:9e5);case 2:return je(!0),e.next=5,$();case 5:e.sent&&se(Object(A.e)(1e3)),je(!1);case 8:case"end":return e.stop()}}),e)}))),[t,Y]),le=Q||t,be=function(e){var t=e.getType()||L.a.BNB;return{source:h.e.find((function(e){if(e.name===t)return e})),destination:h.a.find((function(e){if(e.name!==t)return e}))}}(Object(m.f)(Number(n))),de=Object(i.useState)(!1),fe=Object(u.a)(de,2),pe=fe[0],je=fe[1],xe=Object(i.useState)(h.e[0]),me=Object(u.a)(xe,2),Oe=me[0],ge=me[1],he=Object(i.useState)(h.a[0]),ye=Object(u.a)(he,2),ve=ye[0],we=ye[1],ke=Object(N.a)(I.address),Ce=B(I.symbol,Oe.name);Object(i.useEffect)((function(){n&&(ge(be.source),we(be.destination))}),[n]);var Se=function(){se(Object(A.d)(Oe.name,ke,Ce,t))},Te=function(e){var t=Object(x.e)(),n=Object(p.d)().account,r=Object(k.f)(e),c=Object(y.a)(),o=c.toastError,a=c.toastSuccess,u=Object(j.a)(["bridgeAsset","common"]).t,l=Object(v.c)(),d=Object(C.a)(),f=Object(i.useCallback)(function(){var t=Object(s.a)(b.a.mark((function t(n,c,i,a,f,p){var j;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.eth.getGasPrice();case 3:return j=t.sent,t.next=6,Object(m.a)(e,r,n,Number(f),c,i,a,function(){var e=Object(s.a)(b.a.mark((function e(t,n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=4;break}return l({hash:n},{summary:"Bridge asset is successful",title:"Transaction receipt",titleFail:"Transaction receipt",trigger:function(){try{p()}catch(e){}}}),e.next=4,Object(w.g)({title:u("common:transaction_submitted"),txHash:n});case 4:if(!t){e.next=10;break}if(null===t||void 0===t||!t.message){e.next=9;break}if(null===t||void 0===t||!t.message){e.next=9;break}return e.next=9,Object(w.g)({title:u("bridgeAsset:bridge.error"),errorMsg:null===t||void 0===t?void 0:t.message});case 9:throw t;case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Number(j));case 6:return t.abrupt("return",!0);case 9:return t.prev=9,t.t0=t.catch(0),o(u("bridgeAsset:bridge.error")),t.abrupt("return",!1);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n,r,c,o,i){return t.apply(this,arguments)}}(),[n,t,r,o,a,e]);return{onBridgeToken:f}}(Oe.name),Ee=Te.onBridgeToken,Ae=Object(m.e)(ve.name),Re=function(){var e=Object(s.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,We("BNB"===Oe.name?56:9e5);case 2:return je(!0),e.next=5,Ee(Number(oe),le,oe,t,Ae,Se);case 5:e.sent&&ae(""),je(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ne=Object(i.useState)(!1),Le=Object(u.a)(Ne,2),Be=Le[0],Me=Le[1],_e=S(),Fe=Number(oe)>_e,De=E(I.symbol),Ie=Number(oe)<De,ze=!oe||pe||Fe||Ie,Pe=function(){var e=Object(s.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.eth.net.getId();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),We=function(){var e=Object(s.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Pe();case 2:if(e.sent===t){e.next=12;break}return e.prev=4,e.next=7,G.currentProvider.request({method:"wallet_switchEthereumChain",params:[{chainId:ie.a.utils.toHex(t)}]});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),4902===e.t0.code&&(O(),l(localStorage.getItem("connectorId")));case 12:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t){return e.apply(this,arguments)}}(),Ue="POSI"===Oe.name;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(o.a,{w:"100%",textAlign:"center",display:"column",mt:["44px","80px","80px"],mb:"44px",children:[Object(D.jsx)(g.a,{type:"headline1",mb:"12px",children:r("posi_bridge")}),Object(D.jsxs)(g.a,{w:"100%",mx:"auto",px:"24px",type:"body1",color:"gray.500",as:"span",children:[r("describing_posi_chain"),Ue&&Object(D.jsxs)(d.a,{status:"warning",mt:"8px",borderRadius:"16px",children:[Object(D.jsx)(d.c,{}),Object(D.jsxs)(g.a,{color:"gray.100",type:"body1",as:"span",children:[r("alert.please-note"),Object(D.jsxs)(g.a,{type:"body1",color:"yellow.400",as:"span",children:[r("alert.bridge-back"),Object(D.jsx)(g.a,{color:"gray.100",type:"body1",as:"span",children:r("alert.update-at")})]})]})]})]})]}),Object(D.jsx)(o.a,{w:"100%",h:"100%",bg:"gray.700",borderRadius:"24px",padding:"0px 2px 2px 0px",children:Object(D.jsx)(c.a,{w:"100%",children:Object(D.jsxs)(o.a,{align:"center",justifyContent:"center",direction:"column",w:"100%",flexDirection:"column",borderRadius:"24px",p:"20px 24px",bg:"gray.800",bottom:"2px",children:[Object(D.jsxs)(o.a,{justifyContent:"space-between",w:"100%",textAlign:"center",children:[Object(D.jsx)(g.a,{type:"body1",color:"gray.500",children:r("from")}),Object(D.jsx)(o.a,{borderRadius:"10px",h:"40px",p:"8px 12px",bg:"gray.900",align:"center",justifyContent:"center",children:Object(D.jsx)(ee,{name:Oe.name,imgUrl:Oe.imgUrl})})]}),Object(D.jsx)(z,{bridgeTokenSelected:I,onSelectToken:q,bridgeTokenAmount:oe,setBridgeTokenAmount:function(e){ae(e)},chainSelected:Oe}),Object(D.jsx)(f.a,{my:"32px",src:"/img/swap-bridge.svg",onClick:function(){ge(ve),we(Oe),We("BNB"===ve.name?56:9e5)},cursor:"pointer",w:"24px",h:"24px"}),Object(D.jsxs)(o.a,{justifyContent:"space-between",w:"100%",align:"center",children:[Object(D.jsx)(g.a,{type:"body1",color:"gray.500",children:r("to")}),Object(D.jsx)(o.a,{borderRadius:"10px",h:"40px",p:"8px 12px",bg:"gray.900",align:"center",justifyContent:"center",children:Object(D.jsx)(ee,{name:ve.name,imgUrl:ve.imgUrl})})]}),Object(D.jsx)(W,{bridgeTokenAmount:oe,bridgeTokenSelected:I,chainSelected:ve,onSelectToken:q,isNativeTokenBridge:Ce}),Q?Object(D.jsxs)(o.a,{py:"12px",pl:"12px",color:"cyan.400",justifyContent:"space-between",bg:"gray.900",my:"28px",borderRadius:"12px",h:"44px",w:"100%",align:"center",children:[Q,Object(D.jsx)(f.a,{onClick:function(){se(Object(A.f)(""))},cursor:"pointer",mr:"12px",src:"/images/games/icon_close.svg"})]}):Object(D.jsxs)(o.a,{my:"28px",onClick:function(){Me(!0)},cursor:"pointer",align:"center",display:M||Ce?"flex":"none",children:[Object(D.jsx)(f.a,{mr:"8px",boxSize:"18px",src:"/img/add_recipient.svg"}),Object(D.jsx)(g.a,{type:"button1",color:"gray.500",children:"Add recipient"})]}),t?Object(D.jsx)(D.Fragment,{children:M||Ce?Object(D.jsxs)(J.a,{variant:"contained",h:"48px",cursor:"pointer",w:"100%",size:"button1",onClick:Re,disabled:ze,position:"relative",children:[Object(D.jsx)(o.a,{position:"absolute",left:["32%","36%","38%"],children:Object(D.jsx)(te.a,{duration:2,isDisable:!pe&&(M||Ce),mr:"16px"})}),"Bridge"]}):Object(D.jsxs)(J.a,{variant:"contained",h:"48px",cursor:"pointer",w:"100%",size:"button1",onClick:ue,disabled:pe,mt:"24px",children:[Object(D.jsx)(o.a,{position:"absolute",left:["32%","36%","38%"],children:Object(D.jsx)(te.a,{duration:2,isDisable:!pe,mr:"16px"})}),"Approve"]})}):Object(D.jsx)(J.a,{variant:"contained",h:"48px",cursor:"pointer",w:"100%",size:"button1",onClick:R,mt:"24px",children:"Connect Wallet"}),Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(Z,{isOpenModal:Be,onClose:function(){Me(!1)}})})]})})}),Object(D.jsx)(ce,{sourceTokenAmount:Number(oe),bridgeTokenSelected:I,isNativeToken:Ce})]})},se=function(){return Object(D.jsx)(o.a,{flexDirection:"column",justifyContent:"center",alignItems:"center",w:"100%",children:Object(D.jsx)(ae,{})})};t.default=function(){var e=Object(r.c)(),t=e.colorMode,n=e.toggleColorMode;return Object(i.useEffect)((function(){"light"===t&&n()}),[]),Object(D.jsx)(c.a,{children:Object(D.jsx)(o.a,{flexDirection:"column",maxW:"510px",w:"100%",mx:"auto",minHeight:"780px",mb:"100px",mt:["100px","40px","0px"],children:Object(D.jsx)(se,{})})})}}}]);