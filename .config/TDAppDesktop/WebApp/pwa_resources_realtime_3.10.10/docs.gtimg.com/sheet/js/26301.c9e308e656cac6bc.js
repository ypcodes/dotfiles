(self.webpackChunksheet=self.webpackChunksheet||[]).push([["26301"],{572916:function(e,t,r){"use strict";var i=r(463313),n=r(757711),o={tag:"svg",attrs:{fill:"none",viewBox:"0 0 12 12",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#information-circle-12_clip0_1462_34025)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6 .5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM1.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm3.75-2.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm0 2.5a.75.75 0 011.5 0v2.5a.75.75 0 01-1.5 0v-2.5z",fillRule:"evenodd",clipRule:"evenodd"}}]},{tag:"defs",attrs:{},children:[{tag:"clipPath",attrs:{id:"information-circle-12_clip0_1462_34025"},children:[{tag:"path",attrs:{fill:"#fff",d:"M0 0h12v12H0z"}}]}]}],defIds:["information-circle-12_clip0_1462_34025"]},a=(0,i.forwardRef)(function(e,t){return(0,i.createElement)(n.A,Object.assign({},e,{id:"information-circle-12",ref:t,icon:o}))});a.displayName="InformationCircle12",t.Z=a},432399:function(e){"use strict";e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZyBpZD0i6aG16Z2iLTEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPjxnIGlkPSLmlofmoaPor6bmg4XpobXliIflm77otYTmupAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNyAtMTMwKSI+PGcgaWQ9Iue8lue7hC05IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNyAxMzApIj48cGF0aCBpZD0i5b2i54q257uT5ZCIIiBmaWxsPSIjNDY0RDVBIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xMC4yMzggNC4zdjUuMDc1aDUuMDc1djEuMWgtNS4wNzdsLjAwMiA1LjA3NWgtMS4xbC0uMDAyLTUuMDc1SDQuMDYzdi0xLjFoNS4wNzVWNC4zeiIvPjwvZz48L2c+PC9nPjwvc3ZnPg=="},743171:function(e,t,r){"use strict";r.r(t),r.d(t,{ViewManagerService:function(){return i.s}});var i=r(447955)},184301:function(e,t,r){"use strict";r.d(t,{D:function(){return i}});var i=(0,r(463313).createContext)({draggingId:null})},600732:function(e,t,r){"use strict";r.d(t,{Q:function(){return n}});var i=r(88511);function n(e,t,r){var n=e.length,o=(0,i._)(e),a=e=>e>=0&&e<n;if(!a(t)||!a(r))return o;var l=o.splice(t,1)[0];return o.splice(r,0,l),o}},772267:function(e,t,r){"use strict";r.d(t,{I:function(){return s}});var i=r(463313),n=r.n(i),o=r(144744),a=r(184301),l={shadow:"shadow___oeXM"},s=e=>{var{draggableId:t,index:r,children:s,allowDragOutside:u,lockAxis:c,draggerStyles:d={},getDraggerStyles:f,styles:p={},getDragItemStyles:_=e=>e,needBadContainer:g=!0}=e,{draggingId:v}=(0,i.useContext)(a.D),b=(0,i.useMemo)(()=>v===t,[t,v]),m=(0,i.useRef)(null);return n().createElement(o._l,{draggableId:t,key:r,index:r},(e,t,r)=>{var i,{style:o}=e.draggableProps;if(!u&&void 0!==o.left&&void 0!==o.top){o.left=void 0;var{top:a}=o;if(m.current){var v=m.current.getBoundingClientRect().top;a-=null!=v?v:0}o.top=a}var x=n().createElement("div",{ref:e.innerRef,...e.dragHandleProps,...e.draggableProps,style:(e=>{if(!c)return e;if(null==e?void 0:e.transform){var{transform:t}=e;try{var r=e.transform.slice(10,-2).split(",").map(e=>parseInt(e,10));t="x"===c?`translate(${r[0]}px, 0)`:`translate(0, ${r[1]}px)`}catch(e){console.error("DraggableWrapper parse transform error: ",e)}return Object.assign(Object.assign({},e),{transform:t})}return e})(Object.assign(Object.assign(Object.assign({},null==f?void 0:f(b)),d),_(null!=(i=e.draggableProps.style)?i:{}))),...e.innerRef,className:b?l.shadow:"",tabIndex:-1},s(e,t,r));if(g){var h=Object.assign(Object.assign(Object.assign({},null==f?void 0:f(b)),p),u?{}:{transform:"translate(0, 0)"});return n().createElement("div",{ref:m,style:h},x)}return x})}},53577:function(e,t,r){"use strict";r.d(t,{J:function(){return n},P:function(){return o}}),(i=n||(n={}))[i.DRAWER_CONTENT=1]="DRAWER_CONTENT",i[i.SELECT_FIELD_PROPERTY=2]="SELECT_FIELD_PROPERTY",i[i.ATTACHMENT_FIELD=3]="ATTACHMENT_FIELD",i[i.FIELD_SETTING=4]="FIELD_SETTING",i[i.TABLE_SUMMARY_PANEL=5]="TABLE_SUMMARY_PANEL",i[i.VIEW_SWITCH=6]="VIEW_SWITCH";var i,n,o={[n.DRAWER_CONTENT]:"drawer-content-droppable",[n.SELECT_FIELD_PROPERTY]:"select-field-property-droppable",[n.ATTACHMENT_FIELD]:"attachment-field-droppable",[n.FIELD_SETTING]:"field-setting-droppable",[n.TABLE_SUMMARY_PANEL]:"table-summary-panel",[n.VIEW_SWITCH]:"view-switch-droppable"}},55788:function(e,t,r){"use strict";r.d(t,{b:function(){return u}});var i=r(88511),n=r(463313),o=r.n(n),a=r(144744),l=r(817758),s=r(184301),u=e=>{var{context:t,droppable:r,innerStyle:u}=e,[c,d]=(0,n.useState)(null),f=(0,n.useCallback)(e=>{var r;d(e.draggableId),null==(r=t.onBeforeDragStart)||r.call(t,e)},[t]),p=(0,n.useCallback)(function(){for(var e,r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];d(null),null==(e=t.onDragEnd)||e.call.apply(e,[t].concat((0,i._)(n)))},[t]);return o().createElement("div",{style:{overflow:(0,l.Wx)()?void 0:"hidden"}},o().createElement(a.Z5,{...t,onBeforeDragStart:f,onDragEnd:p},o().createElement(a.bK,r,(e,t)=>o().createElement("div",{ref:e.innerRef,...e.droppableProps,style:u},o().createElement(s.D.Provider,{value:{draggingId:c}},r.children(e,t)),e.placeholder))))}},111483:function(e,t,r){"use strict";r.d(t,{I:function(){return l},M:function(){return a}});var i=r(463313),n=r.n(i),o=r(739287),a=e=>{var t=(0,i.useRef)(null);return((0,i.useEffect)(()=>{t.current&&t.current.setAttribute("data-testid",e.testId)}),(0,o.V)("E2E_TEST"))?n().createElement("div",{ref:t,style:{position:"absolute",left:0,top:0,height:"100%",width:"100%"}}):null},l=e=>{(0,i.useEffect)(()=>{var t,r;null==(r=null==(t=e.targetElement)?void 0:t.current)||r.setAttribute("data-testid",e.testId)},[e.targetElement,e.testId])}},568672:function(e,t,r){"use strict";r.d(t,{O:function(){return o}}),r(575739);var i=r(463313),n=r(802955),o=e=>{var{domRef:t,onCompositionStart:r,onCompositionEnd:o}=e,a=(0,i.useRef)(!1),l=(0,i.useRef)([]),s=(0,i.useCallback)(()=>{a.current=!0,null==r||r()},[r]),u=(0,i.useCallback)(()=>{a.current=!1,null==o||o()},[o]),c=(0,i.useCallback)(()=>{var e=null==t?void 0:t.current;e&&(l.current.push(n.v.addDisposableListener(e,"compositionstart",s)),l.current.push(n.v.addDisposableListener(e,"compositionend",u)))},[t,u,s]),d=(0,i.useCallback)(()=>{(null==t?void 0:t.current)&&l.current.forEach(e=>null==e?void 0:e.dispose())},[t,u,s]);return(0,i.useEffect)(()=>(c(),()=>{d()}),[c,d]),{isCompposition:a}}},766945:function(e,t,r){"use strict";r.d(t,{A:function(){return o}});var i=r(463313),n=r(802955),o=(e,t)=>{var r=(0,i.useCallback)(r=>{var i=null==r?void 0:r.composedPath();(null==i?void 0:i.length)&&(i.some(t=>e.some(e=>{var r,i;return(null==(i=null==(r=t.className)?void 0:r.includes)?void 0:i.call(r,e))||t.id===e}))||t(r))},[e,t]);(0,i.useEffect)(()=>{var e=n.v.addDisposableListener(document.body,"mousedown",r);return()=>{null==e||e.dispose()}},[r])}},665671:function(e,t,r){"use strict";r.d(t,{NT:function(){return n},Ui:function(){return o},wv:function(){return a}});var i=r(830982),n=i.ZP.div`
  display: flex;
  align-items: center;
  height: 22px;
  line-height: 22px;
  overflow: hidden;

  .option-title {
    margin-left: 4px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`,o=i.ZP.div`
  box-sizing: border-box;
  box-shadow: 0 6px 32px 2px rgba(68, 73, 77, 0.16), 0 4px 6px 2px rgba(0, 0, 0, 0.04);
  border: solid 1px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  background-color: var(--bg-lv4-default, rgb(255, 255, 255));
  display: flex;
  flex-direction: column;
  max-height: 100%;

  .field-editor {
    max-height: 100%;
    color: var(--text-ultrastrong, rgba(0, 0, 0, 0.88));

    .editor-title {
      margin-top: 12px;
      line-height: 30px;
      font-size: 12px;
      color: var(--text-medium, rgba(0, 0, 0, 0.4));
    }

    .description {
      margin-top: 4px;
      font-size: 12px;
      color: var(--text-medium, rgba(0, 0, 0, 0.4));
    }

    .hint {
      height: 32px;
      font-size: 12px;
      line-height: 16px;
      color: var(--text-medium, rgba(0, 0, 0, 0.4));
      margin: 8px 0;
    }

    .property-editor-wrapper {
      display: flex;
      flex-direction: column;
    }

    .field-editor-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row-reverse;

      .button-group {
        display: flex;
        flex-direction: row-reverse;

        .cancel-button {
          margin-right: 10px;
        }
      }
    }

    .default-value-title {
      margin-top: 16px;
      line-height: 30px;
      font-size: 12px;
      color: #999999;
      display: flex;
      align-items: center;
    }

    .default-value-wrapper {
      border: 1px solid var(--border-ultrastrong, rgba(0, 0, 0, 0.16));
      border-radius: 4px;

      :focus-within {
        border: 1px solid var(--accent-pressed, rgb(19, 74, 224));
      }

      .select {
        border: none;
      }
    }

    .scroll-box {
      padding: 0 16px;
      padding-bottom: 12px;
      // 28px \u662F\u6309\u94AE\u7684\u9AD8\u5EA6\uFF0C32px \u662F\u6309\u94AE\u4E0A\u4E0B\u8FB9\u8DDD
      max-height: calc(100% - 28px - 32px);
      box-sizing: border-box;

      overflow-x: hidden;
      overflow-y: auto;
      overflow-y: overlay;
      visibility: hidden;
      & > * {
        visibility: visible;
      }
      &:hover {
        visibility: visible;
      }
    }

    .scroll-box-ent {
      overflow-x: hidden;
      overflow-y: auto;
      visibility: hidden;
      & > * {
        visibility: visible;
      }
      &:hover {
        visibility: visible;
      }
    }

    .fix-box {
      padding: 16px;
    }
  }
`,a=i.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${e=>e.width||20}px;
  height: ${e=>e.height||20}px;
  flex-shrink: 0;

  > div {
    line-height: 1;
  }
`},569950:function(e,t,r){"use strict";r.d(t,{O7:function(){return o},mZ:function(){return a},r$:function(){return l}}),(i=n||(n={})).TAB="Tab",i.ENTER="Enter",i.ESC="Escape",i.ARROW_DOWN="ArrowDown",i.ARROW_UP="ArrowUp",i.ARROW_LEFT="ArrowLeft",i.ARROW_RIGHT="ArrowRight",i.SPACE=" ";var i,n,o=229;function a(e,t){var{key:r,keyCode:i}=e;if(i!==o){var n=t[r];null==n||n(e)}}function l(e){return"Enter"===e.key&&e.keyCode!==o}},585797:function(e,t,r){"use strict";r.d(t,{$G:function(){return u},CG:function(){return p},Md:function(){return f},gg:function(){return c},wR:function(){return d}});var i=r(259718),n=r(384341),o=r(426644),a=r(175055),l=r(36272),s=r(426105),u={total_edit_page_exposure:"total_edit_page_exposure",total_read_page_exposure:"total_read_page_exposure",total_submit_form:"total_submit_form",total_get_share_info:"total_get_share_info",total_modify_share_info:"total_modify_share_info",total_get_forward_info:"total_get_forward_info",total_get_form_view_dependencies_data:"total_get_form_view_dependencies_data",total_cgi_request:"cgiReq",total_cgi_rsp:"cgiRsp",fail_cgi_request:"cgiFail",fail_get_can_edit_form:"fail_get_can_edit_form",fail_get_can_fill_form:"fail_get_can_fill_form",fail_submit:"fail_submit",fail_client_submit:"fail_client_submit",fail_get_share_info:"fail_get_share_info",fail_modify_share_info:"fail_modify_share_info",fail_get_forward_info:"fail_get_forward_info",fail_get_form_view_dependencies_data:"fail_get_form_view_dependencies_data",op_edit_add_question:"op_edit_add_question",op_edit_remove_question:"op_edit_remove_question",op_edit_insert_question:"op_edit_insert_question",op_edit_delete_question:"op_edit_delete_question",op_edit_sort_question:"op_edit_sort_question",base_report_log:"base_report_log"};function c(){var e=n.default.isPC?"pc":"mb",t=n.default.isWxWork?"qywx":"web";return n.default.isWeChat&&(t="wx"),`${e}_${t}`}function d(){return(0,s.M)()?"out":"in"}var f=(e,t,r)=>{try{(null==r?void 0:r.notNeedLog)!==!0&&o.k.info(`formViewCubeReport action: ${e}, params:`,t),a.E.metricsWDocs(Object.assign({module:l.f9.FORM_VIEW,action:e,str4:d(),str5:c()},t||{}))}catch(e){}},p=(0,i.default)(f,1e3)},426105:function(e,t,r){"use strict";function i(){return n()?(location.pathname.split("/")||[])[3]:""}function n(){return 0===location.pathname.indexOf("/smartsheet/form/")}r.d(t,{M:function(){return n},r:function(){return i}})},593496:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},542163:function(e,t,r){"use strict";function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(null,arguments)}r.d(t,{Z:function(){return i}})},62380:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var i=r(937312);function n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,i.Z)(e,t)}},626445:function(e,t,r){"use strict";function i(e,t){if(null==e)return{};var r={};for(var i in e)if(({}).hasOwnProperty.call(e,i)){if(-1!==t.indexOf(i))continue;r[i]=e[i]}return r}r.d(t,{Z:function(){return i}})},237684:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});function i(e,t){if(!e)throw Error("Invariant failed")}}}]);
//# sourceMappingURL=26301.c9e308e656cac6bc.js.map