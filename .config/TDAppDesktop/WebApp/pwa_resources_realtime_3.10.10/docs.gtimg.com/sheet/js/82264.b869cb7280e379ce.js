(self.webpackChunksheet=self.webpackChunksheet||[]).push([["82264"],{572916:function(e,t,i){"use strict";var r=i(463313),n=i(757711),o={tag:"svg",attrs:{fill:"none",viewBox:"0 0 12 12",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#information-circle-12_clip0_1462_34025)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6 .5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM1.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm3.75-2.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm0 2.5a.75.75 0 011.5 0v2.5a.75.75 0 01-1.5 0v-2.5z",fillRule:"evenodd",clipRule:"evenodd"}}]},{tag:"defs",attrs:{},children:[{tag:"clipPath",attrs:{id:"information-circle-12_clip0_1462_34025"},children:[{tag:"path",attrs:{fill:"#fff",d:"M0 0h12v12H0z"}}]}]}],defIds:["information-circle-12_clip0_1462_34025"]},a=(0,r.forwardRef)(function(e,t){return(0,r.createElement)(n.A,Object.assign({},e,{id:"information-circle-12",ref:t,icon:o}))});a.displayName="InformationCircle12",t.Z=a},432399:function(e){"use strict";e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZyBpZD0i6aG16Z2iLTEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPjxnIGlkPSLmlofmoaPor6bmg4XpobXliIflm77otYTmupAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNyAtMTMwKSI+PGcgaWQ9Iue8lue7hC05IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNyAxMzApIj48cGF0aCBpZD0i5b2i54q257uT5ZCIIiBmaWxsPSIjNDY0RDVBIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xMC4yMzggNC4zdjUuMDc1aDUuMDc1djEuMWgtNS4wNzdsLjAwMiA1LjA3NWgtMS4xbC0uMDAyLTUuMDc1SDQuMDYzdi0xLjFoNS4wNzVWNC4zeiIvPjwvZz48L2c+PC9nPjwvc3ZnPg=="},156701:function(e,t,i){"use strict";i.r(t),i.d(t,{ViewManagerDrawerFeature:function(){return h}});var r=i(593323),n=i(88511),o=i(209787),a=i(475203),s=i(776806),l=i(638423),u=i(196954),d=i(676613),c=i(33084),f=i(938729),p=i(929458),v=i(459535),_=i(447955),g=i(473196),h=function(){function e(){(0,r._)(this,e),this.wrapperResizeObserver=null,this.handleWrapperResize=(e,t)=>(0,o.__awaiter)(this,void 0,void 0,function*(){var i=yield this.getViewManagerService();i.updateEditor(e,{debounce:!1,animation:!1}),t.isDragging?i.transformRoot(e,t.diff):(i.transformRoot(e,0),i.updateMarginLeft(e,!1)),i.updateToolbar()}),this.handleSwitchTable=e=>(0,o.__awaiter)(this,void 0,void 0,function*(){var t=yield this.getViewManagerService();if(f.U.getViewManagerEditorType(e)===v.F4.DRAWER)return void t.updateEditor(e);t.setViewManagerEditorVisible(e,!1),t.updateEditor(e)})}var t=e.prototype;return t.$onEditorFocus=function(e){return(0,o.__awaiter)(this,void 0,void 0,function*(){yield this.handleEditorFocus(e),this.unRegisterResizeObserver(),this.registerResizeObserver(e),this.registerWrapperResizeObserver(e)})},t.$onEditorBlur=function(){var e;null==(e=this.wrapperResizeObserver)||e.dispose(),this.unRegisterResizeObserver()},t.$onTableOpen=function(e){return(0,o.__awaiter)(this,void 0,void 0,function*(){yield this.handleSwitchTable(e),this.registerResizeObserver(e)})},t.$onTableClose=function(){return(0,o.__awaiter)(this,void 0,void 0,function*(){this.unRegisterResizeObserver()})},t.getComponent=function(e){return this.getStaticViewManagerEditor(e)},t.init=function(e){return(0,o.__awaiter)(this,void 0,void 0,function*(){e.xTableDisposedStore.get(s.e.$onEditorClose).add(e.activeTableStateService.onActiveViewSwitched(()=>(0,o.__awaiter)(this,void 0,void 0,function*(){(yield this.getViewManagerService()).updateEditor(e)})));var t=yield this.getViewManagerService();if(!f.U.getViewManagerEditorVisible(e))return void t.updateMarginLeft(e);f.U.getViewManagerEditorType(e)===v.F4.DRAWER&&(yield t.updateEditor(e)),t.updateMarginLeft(e)})},t.toggleEditor=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,o.__awaiter)(this,void 0,void 0,function*(){var e=yield this.getViewManagerService();e.toggleViewManagerEditor.apply(e,(0,n._)(t))})},t.registerResizeObserver=function(e){var t;return(0,o.__awaiter)(this,void 0,void 0,function*(){this.renderRootResizeObserver=new g.do(()=>(0,o.__awaiter)(this,void 0,void 0,function*(){(yield this.getViewManagerService()).updateEditor(e,{animation:!0})})),this.renderRootResizeObserver.observe(e.getRenderRoot());var i=document.getElementById(_.s.listenElementId);i&&(this.workbenchResizeObserver=new g.do(()=>this.handleWorkbenchResize(e)),this.workbenchResizeObserver.observe(i),null==(t=this.disposeUnmount)||t.dispose(),this.disposeUnmount=e.activeTableStateService.onUnmountView(()=>{this.unRegisterResizeObserver()}))})},t.registerWrapperResizeObserver=function(e){this.wrapperResizeObserver=c.H.resizeObserver(t=>this.handleWrapperResize(e,t))},t.unRegisterResizeObserver=function(){var e,t;null==(e=this.renderRootResizeObserver)||e.disconnect(),this.renderRootResizeObserver=null,null==(t=this.workbenchResizeObserver)||t.disconnect(),this.workbenchResizeObserver=null},t.handleWorkbenchResize=function(e){return(0,o.__awaiter)(this,void 0,void 0,function*(){var t=yield this.getViewManagerService();this.updateEditorWithDebounce(e),t.updateMarginLeft(e),e.getRenderRoot().style.width="100%"})},t.updateEditorWithDebounce=function(e){return(0,o.__awaiter)(this,void 0,void 0,function*(){(yield this.getViewManagerService()).updateEditor(e)})},t.handleEditorFocus=function(e){return(0,o.__awaiter)(this,void 0,void 0,function*(){var t=yield this.getViewManagerService();f.U.isSupportDrawerMode&&t.updateMarginLeftWithDebounce(e,!1)})},t.getViewManagerService=function(){return(0,a.nZ)(v.VW).getInstance()},t.getStaticViewManagerEditor=function(e){return new p.b().getComponent(e,!1)},e}();(0,o.__decorate)([(0,l.Ds)(50),(0,o.__metadata)("design:type",Function),(0,o.__metadata)("design:paramtypes",[Object]),(0,o.__metadata)("design:returntype",Promise)],h.prototype,"updateEditorWithDebounce",null),h=(0,o.__decorate)([(0,d.w)({adapters:[u.q],provide:v.i0})],h)},184301:function(e,t,i){"use strict";i.d(t,{D:function(){return r}});var r=(0,i(463313).createContext)({draggingId:null})},600732:function(e,t,i){"use strict";i.d(t,{Q:function(){return n}});var r=i(88511);function n(e,t,i){var n=e.length,o=(0,r._)(e),a=e=>e>=0&&e<n;if(!a(t)||!a(i))return o;var s=o.splice(t,1)[0];return o.splice(i,0,s),o}},772267:function(e,t,i){"use strict";i.d(t,{I:function(){return l}});var r=i(463313),n=i.n(r),o=i(144744),a=i(184301),s={shadow:"shadow___oeXM"},l=e=>{var{draggableId:t,index:i,children:l,allowDragOutside:u,lockAxis:d,draggerStyles:c={},getDraggerStyles:f,styles:p={},getDragItemStyles:v=e=>e,needBadContainer:_=!0}=e,{draggingId:g}=(0,r.useContext)(a.D),h=(0,r.useMemo)(()=>g===t,[t,g]),b=(0,r.useRef)(null);return n().createElement(o._l,{draggableId:t,key:i,index:i},(e,t,i)=>{var r,{style:o}=e.draggableProps;if(!u&&void 0!==o.left&&void 0!==o.top){o.left=void 0;var{top:a}=o;if(b.current){var g=b.current.getBoundingClientRect().top;a-=null!=g?g:0}o.top=a}var m=n().createElement("div",{ref:e.innerRef,...e.dragHandleProps,...e.draggableProps,style:(e=>{if(!d)return e;if(null==e?void 0:e.transform){var{transform:t}=e;try{var i=e.transform.slice(10,-2).split(",").map(e=>parseInt(e,10));t="x"===d?`translate(${i[0]}px, 0)`:`translate(0, ${i[1]}px)`}catch(e){console.error("DraggableWrapper parse transform error: ",e)}return Object.assign(Object.assign({},e),{transform:t})}return e})(Object.assign(Object.assign(Object.assign({},null==f?void 0:f(h)),c),v(null!=(r=e.draggableProps.style)?r:{}))),...e.innerRef,className:h?s.shadow:"",tabIndex:-1},l(e,t,i));if(_){var w=Object.assign(Object.assign(Object.assign({},null==f?void 0:f(h)),p),u?{}:{transform:"translate(0, 0)"});return n().createElement("div",{ref:b,style:w},m)}return m})}},53577:function(e,t,i){"use strict";i.d(t,{J:function(){return n},P:function(){return o}}),(r=n||(n={}))[r.DRAWER_CONTENT=1]="DRAWER_CONTENT",r[r.SELECT_FIELD_PROPERTY=2]="SELECT_FIELD_PROPERTY",r[r.ATTACHMENT_FIELD=3]="ATTACHMENT_FIELD",r[r.FIELD_SETTING=4]="FIELD_SETTING",r[r.TABLE_SUMMARY_PANEL=5]="TABLE_SUMMARY_PANEL",r[r.VIEW_SWITCH=6]="VIEW_SWITCH";var r,n,o={[n.DRAWER_CONTENT]:"drawer-content-droppable",[n.SELECT_FIELD_PROPERTY]:"select-field-property-droppable",[n.ATTACHMENT_FIELD]:"attachment-field-droppable",[n.FIELD_SETTING]:"field-setting-droppable",[n.TABLE_SUMMARY_PANEL]:"table-summary-panel",[n.VIEW_SWITCH]:"view-switch-droppable"}},55788:function(e,t,i){"use strict";i.d(t,{b:function(){return u}});var r=i(88511),n=i(463313),o=i.n(n),a=i(144744),s=i(817758),l=i(184301),u=e=>{var{context:t,droppable:i,innerStyle:u}=e,[d,c]=(0,n.useState)(null),f=(0,n.useCallback)(e=>{var i;c(e.draggableId),null==(i=t.onBeforeDragStart)||i.call(t,e)},[t]),p=(0,n.useCallback)(function(){for(var e,i=arguments.length,n=Array(i),o=0;o<i;o++)n[o]=arguments[o];c(null),null==(e=t.onDragEnd)||e.call.apply(e,[t].concat((0,r._)(n)))},[t]);return o().createElement("div",{style:{overflow:(0,s.Wx)()?void 0:"hidden"}},o().createElement(a.Z5,{...t,onBeforeDragStart:f,onDragEnd:p},o().createElement(a.bK,i,(e,t)=>o().createElement("div",{ref:e.innerRef,...e.droppableProps,style:u},o().createElement(l.D.Provider,{value:{draggingId:d}},i.children(e,t)),e.placeholder))))}},111483:function(e,t,i){"use strict";i.d(t,{I:function(){return s},M:function(){return a}});var r=i(463313),n=i.n(r),o=i(739287),a=e=>{var t=(0,r.useRef)(null);return((0,r.useEffect)(()=>{t.current&&t.current.setAttribute("data-testid",e.testId)}),(0,o.V)("E2E_TEST"))?n().createElement("div",{ref:t,style:{position:"absolute",left:0,top:0,height:"100%",width:"100%"}}):null},s=e=>{(0,r.useEffect)(()=>{var t,i;null==(i=null==(t=e.targetElement)?void 0:t.current)||i.setAttribute("data-testid",e.testId)},[e.targetElement,e.testId])}},568672:function(e,t,i){"use strict";i.d(t,{O:function(){return o}}),i(575739);var r=i(463313),n=i(802955),o=e=>{var{domRef:t,onCompositionStart:i,onCompositionEnd:o}=e,a=(0,r.useRef)(!1),s=(0,r.useRef)([]),l=(0,r.useCallback)(()=>{a.current=!0,null==i||i()},[i]),u=(0,r.useCallback)(()=>{a.current=!1,null==o||o()},[o]),d=(0,r.useCallback)(()=>{var e=null==t?void 0:t.current;e&&(s.current.push(n.v.addDisposableListener(e,"compositionstart",l)),s.current.push(n.v.addDisposableListener(e,"compositionend",u)))},[t,u,l]),c=(0,r.useCallback)(()=>{(null==t?void 0:t.current)&&s.current.forEach(e=>null==e?void 0:e.dispose())},[t,u,l]);return(0,r.useEffect)(()=>(d(),()=>{c()}),[d,c]),{isCompposition:a}}},766945:function(e,t,i){"use strict";i.d(t,{A:function(){return o}});var r=i(463313),n=i(802955),o=(e,t)=>{var i=(0,r.useCallback)(i=>{var r=null==i?void 0:i.composedPath();(null==r?void 0:r.length)&&(r.some(t=>e.some(e=>{var i,r;return(null==(r=null==(i=t.className)?void 0:i.includes)?void 0:r.call(i,e))||t.id===e}))||t(i))},[e,t]);(0,r.useEffect)(()=>{var e=n.v.addDisposableListener(document.body,"mousedown",i);return()=>{null==e||e.dispose()}},[i])}},676613:function(e,t,i){"use strict";i.d(t,{V:function(){return s},w:function(){return a}}),i(575739);var r=i(761121),n=i(69780),o=i(389380);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=>{(0,r.L)(e)(t);var{provide:i,views:a=(0,o.Qx)().map(e=>e.type)}=e;if(i){var l=t.prototype.$onEditorOpen;t.prototype.$onEditorOpen=function(e){if(null==l||l.call(this,e),(0,n.Mc)(e)&&(null==(t=this.$onEditorFocus)||t.call(this,e)),!e.getIsRendering()){null==(i=this.$onTableOpen)||i.call(this,e,{table:e.getCurrentTable()});var t,i,r,o,s,u=null==(r=e.getCurrentView())?void 0:r.type;void 0!==u&&a.includes(u)&&(null==(o=this.$onViewOpen)||o.call(this,e),(0,n.Mc)(e)&&(null==(s=this.$onViewFocus)||s.call(this,e)))}};var u=t.prototype.$onEditorClose;return t.prototype.$onEditorClose=function(e){var t,i,r,o,s,l=null==(t=e.getCurrentView())?void 0:t.type;void 0!==l&&a.includes(l)&&((0,n.Mc)(e)&&(null==(i=this.$onViewBlur)||i.call(this,e)),null==(r=this.$onViewClose)||r.call(this,e)),null==(o=this.$onTableClose)||o.call(this,e,{table:e.getCurrentTable()}),(0,n.Mc)(e)&&(null==(s=this.$onEditorBlur)||s.call(this,e)),null==u||u.call(this,e)},s.table.push({provide:t}),a.forEach(e=>{var i=s.view.get(e)||[];i.push({provide:t}),s.view.set(e,i)}),t}}}var s={table:[],view:new Map}},665671:function(e,t,i){"use strict";i.d(t,{NT:function(){return n},Ui:function(){return o},wv:function(){return a}});var r=i(830982),n=r.ZP.div`
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
`,o=r.ZP.div`
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
`,a=r.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${e=>e.width||20}px;
  height: ${e=>e.height||20}px;
  flex-shrink: 0;

  > div {
    line-height: 1;
  }
`},569950:function(e,t,i){"use strict";i.d(t,{O7:function(){return o},mZ:function(){return a},r$:function(){return s}}),(r=n||(n={})).TAB="Tab",r.ENTER="Enter",r.ESC="Escape",r.ARROW_DOWN="ArrowDown",r.ARROW_UP="ArrowUp",r.ARROW_LEFT="ArrowLeft",r.ARROW_RIGHT="ArrowRight",r.SPACE=" ";var r,n,o=229;function a(e,t){var{key:i,keyCode:r}=e;if(r!==o){var n=t[i];null==n||n(e)}}function s(e){return"Enter"===e.key&&e.keyCode!==o}},585797:function(e,t,i){"use strict";i.d(t,{$G:function(){return u},CG:function(){return p},Md:function(){return f},gg:function(){return d},wR:function(){return c}});var r=i(259718),n=i(384341),o=i(426644),a=i(175055),s=i(36272),l=i(426105),u={total_edit_page_exposure:"total_edit_page_exposure",total_read_page_exposure:"total_read_page_exposure",total_submit_form:"total_submit_form",total_get_share_info:"total_get_share_info",total_modify_share_info:"total_modify_share_info",total_get_forward_info:"total_get_forward_info",total_get_form_view_dependencies_data:"total_get_form_view_dependencies_data",total_cgi_request:"cgiReq",total_cgi_rsp:"cgiRsp",fail_cgi_request:"cgiFail",fail_get_can_edit_form:"fail_get_can_edit_form",fail_get_can_fill_form:"fail_get_can_fill_form",fail_submit:"fail_submit",fail_client_submit:"fail_client_submit",fail_get_share_info:"fail_get_share_info",fail_modify_share_info:"fail_modify_share_info",fail_get_forward_info:"fail_get_forward_info",fail_get_form_view_dependencies_data:"fail_get_form_view_dependencies_data",op_edit_add_question:"op_edit_add_question",op_edit_remove_question:"op_edit_remove_question",op_edit_insert_question:"op_edit_insert_question",op_edit_delete_question:"op_edit_delete_question",op_edit_sort_question:"op_edit_sort_question",base_report_log:"base_report_log"};function d(){var e=n.default.isPC?"pc":"mb",t=n.default.isWxWork?"qywx":"web";return n.default.isWeChat&&(t="wx"),`${e}_${t}`}function c(){return(0,l.M)()?"out":"in"}var f=(e,t,i)=>{try{(null==i?void 0:i.notNeedLog)!==!0&&o.k.info(`formViewCubeReport action: ${e}, params:`,t),a.E.metricsWDocs(Object.assign({module:s.f9.FORM_VIEW,action:e,str4:c(),str5:d()},t||{}))}catch(e){}},p=(0,r.default)(f,1e3)},426105:function(e,t,i){"use strict";function r(){return n()?(location.pathname.split("/")||[])[3]:""}function n(){return 0===location.pathname.indexOf("/smartsheet/form/")}i.d(t,{M:function(){return n},r:function(){return r}})},593496:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)({}).hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},542163:function(e,t,i){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)({}).hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(null,arguments)}i.d(t,{Z:function(){return r}})},62380:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var r=i(937312);function n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,r.Z)(e,t)}},626445:function(e,t,i){"use strict";function r(e,t){if(null==e)return{};var i={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;i[r]=e[r]}return i}i.d(t,{Z:function(){return r}})},237684:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});function r(e,t){if(!e)throw Error("Invariant failed")}}}]);
//# sourceMappingURL=82264.b869cb7280e379ce.js.map