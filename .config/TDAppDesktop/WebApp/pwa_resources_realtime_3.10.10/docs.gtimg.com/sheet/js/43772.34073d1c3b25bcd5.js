(self.webpackChunksheet=self.webpackChunksheet||[]).push([["43772"],{148623:function(e,t,i){"use strict";i.d(t,{C:function(){return l}});var r=i(593323),n=i(175055),o=i(622177),a=i(531079),l=new(function(){function e(){var t=this;(0,r._)(this,e),this.moduleName="view",this.clickView=()=>{this.report("cli")},this.createView=(e,t)=>{this.report("create",{ver5:null!=e?e:0});var i=t.getCurrentTable(),r=i.getFields(),n=i.getRecordIdList(),a=r.length*n.length;this.reportWecomDocs({itemname:"smartsheet_create_view",Channel2:e?o.b[e]:"",value:a})},this.checkView=e=>{this.report("check",{ver5:null!=e?e:0})},this.delView=e=>{this.report("del",{ver5:null!=e?e:0})},this.copyView=e=>{this.report("copy",{ver5:null!=e?e:0})},this.report=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n.E.metricsTdw(Object.assign(Object.assign({},i),{action:e,module:t.moduleName}))},this.reportWecomDocs=e=>{n.E.metricsKVR(Object.assign(Object.assign({},e),{biz:"wecomDocs"})),n.E.metricsWDocs({module:"wecomDocs",action:e.itemname,str1:e.Channel1,str2:e.Channel2,str3:e.Extra1,str4:e.Extra2,str5:e.Extra3,value1:e.value})}}var t=e.prototype;return t.doubleClickView=function(){this.report("double_cli")},t.renameView=function(){this.report("rename")},t.changePublicLevel=function(e){this.report("change_public_level",{ver5:e}),this.reportWecomDocs({itemname:"smartsheet_view_protect_setting",Channel1:{[a.t.PUBLIC]:"public",[a.t.LOCKED]:"lock",[a.t.PERSONAL]:"personal"}[e]})},t.showMenu=function(e){this.reportWecomDocs({itemname:"smartsheet_view_menu_show",Extra1:e})},t.clickMenu=function(e,t){this.reportWecomDocs({itemname:"smartsheet_view_menu_click",Channel1:e,Extra1:t})},t.unlockView=function(e){this.reportWecomDocs({itemname:"smartsheet_view_unlock_setting",Channel1:e})},e}())},794199:function(e,t,i){"use strict";i.d(t,{$:function(){return I},A:function(){return R}});var r,n,o,a,l=i(593323);i(249091);var s=i(209787),d=i(384341),c=i(426644),u=i(485584),p=i(69528),v=i(175055),f=i(36272),g=i(794673),h=i(332879),m=i(252750),_=i(168659),w=i(343854),b=i(974152),y=i(44293),x=i(531079),E=i(622177),V=i(892922),T="[ClearOfflineResources]",I=[m.gh.ERROR_FIELD_TYPE,m.gh.ERROR_MUTATION_ID,m.gh.ERROR_VIEW_TYPE,m.gh.ERROR_BLOCK_TYPE,m.gh.ERROR_EXTERNAL_DATA_SOURCE_TYPE];(r=o||(o={})).SHOW_MODAL="version_update_show",r.CLEAR_ERROR="version_update_clear_error",r.CLEAR_SUCCESS="version_update_clear_success",r.CLICK_OK="version_update_clear",(n=a||(a={})).FAIl_CLEAR_IN_SHEET="1",n.FAIl_CLEAR_IN_SMARTSHEET="2",n.ERROR_CLEAR="3";var R=function(){function e(){(0,l._)(this,e)}return e.doToast=function(e){var{tag:t,value:i,info:r}=e,n=[];switch(t){case m.gh.ERROR_FIELD_TYPE:n=this.fieldTypeSupported;break;case m.gh.ERROR_MUTATION_ID:n=this.mutationIdSupported;break;case m.gh.ERROR_VIEW_PUBLIC_TYPE:n=this.viewPublicTypeSupported;break;case m.gh.ERROR_VIEW_TYPE:n=this.viewTypeSupported;break;case m.gh.ERROR_BLOCK_TYPE:n=this.blockTypeSupported;break;case m.gh.ERROR_EXTERNAL_DATA_SOURCE_TYPE:n=this.externalDataSourceTypeSupported}return!!n.includes(i)||(!0!==window.__isOfflinePkg?(c.k.info(T,"\u672A\u547D\u4E2D\u79BB\u7EBF\u4E0D\u5F39",t,i,r),!0):(this.isForcedRefresh()||this.doClear({tag:t,value:i,info:r}),!1))},e.doClear=function(e){var t,i;!1===this.isShowClearToast&&(c.k.info(T,e.tag,e.value,e.info),null==(i=(t=_.coreInstantiationService.invokeFunction(e=>e.get(w.ISmartSheetCore)).permissionService).shutdown)||i.call(t),this.isShowClearToast=!0,this.showSnackbar(e))},e.showSnackbar=function(e){return(0,s.__awaiter)(this,void 0,void 0,function*(){var t,r=0;this.report({attrid:o.SHOW_MODAL,status:0,errType:e.tag,errmsg:e.value},e.info),(d.default.isMobile?(yield Promise.resolve().then(i.bind(i,989398))).Modal.confirm:(yield Promise.resolve().then(i.bind(i,905252))).Modal.confirm)({title:u.ag.t("update_tip"),content:u.ag.t("update_content"),okText:u.ag.t("confirm2"),cancelText:null,closable:!1,onOk:()=>{c.k.info(T,e.tag,"\u5237\u65B0\u5566\uFF01\uFF01\uFF01\uFF01"),this.report({attrid:o.CLICK_OK,status:0,errType:e.tag,errmsg:e.value},e.info),this.clickAction()},onClickMask:()=>{(r+=1)%this.WEBLOG_NUMBER===0&&window.log.loadAsset("WL_REPORT_DIALOG")}})})},e.clearPcOfflineResources=function(e){return(0,s.__awaiter)(this,void 0,void 0,function*(){return fetch(`/sw/api/remove-precache?docType=${e}&dver=3.0.0`).then(e=>e.json())})},e.clearWxWorkMobile=function(e){var t,i,r,n;return(0,s.__awaiter)(this,void 0,void 0,function*(){var{result:o}=yield null==(i=null==(t=window.tdocs)?void 0:t.getBidInfo)?void 0:i.call(t,{type:e}),a=!1;for(var l of o)l.dver.startsWith("3.")&&(yield null==(n=null==(r=window.tdocs)?void 0:r.disableOfflinePackage)?void 0:n.call(r,{bid:l.bid,version:l.version}),a=!0);return a})},e.reportClear=function(e,t,i){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.report({attrid:e?o.CLEAR_SUCCESS:o.CLEAR_ERROR,status:+!e,errmsg:i,errType:t},r?"mobile":"pc")},e.isForcedRefresh=function(){c.k.info(T,location.href);var e=new URLSearchParams(location.search),t=!1;return this.WxWorkMobile?"0"===e.get(m.AL.OFFLINE_PKG):"networkFirst"===e.get(m.AL.PWA_STRATEGY)},e.gotoOnlineURL=function(){this.WxWorkMobile?this.gotoNewURL(m.AL.OFFLINE_PKG,"0"):this.gotoNewURL(m.AL.PWA_STRATEGY,"networkFirst")},e.gotoNewURL=function(e,t){var i=(0,p.oW)(e),r=`${e}=${t}`,n=new URL(i).search?`&${r}`:`?${r}`;location.replace(i+n)},e.report=function(e,t){v.E.metricsStatus(e),v.E.metricsWDocs({module:f.f9.VERSION_UPDATE,action:e.attrid,str1:e.errType,str2:e.errmsg,str3:t,value1:e.status})},e}();R.WxWorkMobile=d.default.isWxWork&&d.default.isMobile,R.isShowClearToast=!1,R.WEBLOG_NUMBER=10,R.fieldTypeSupported=Object.values(b.fS).filter(e=>!Number.isNaN(Number(e))).map(String),R.mutationIdSupported=Object.values(y.x).filter(e=>!Number.isNaN(Number(e))).map(String),R.viewPublicTypeSupported=Object.values(x.t).filter(e=>!Number.isNaN(Number(e))).map(String),R.viewTypeSupported=Object.values(E.b).filter(e=>!Number.isNaN(Number(e))).map(String),R.blockTypeSupported=Object.values(g.kH),R.externalDataSourceTypeSupported=Object.values(V.O).filter(e=>!Number.isNaN(Number(e))).map(String),R.clickAction=()=>(0,s.__awaiter)(void 0,void 0,void 0,function*(){R.WxWorkMobile?yield R.clickMobileAction():yield R.clickPcAction()}),R.clickPcAction=()=>(0,s.__awaiter)(void 0,void 0,void 0,function*(){try{if(h.J6.getType()===h.Hs.SHEET){var e=yield R.clearPcOfflineResources("sheet");c.k.info(T,"pc \u5220\u9664sheet\u79BB\u7EBF\u5305\u7ED3\u679C",e),R.reportClear(null==e?void 0:e.success,a.FAIl_CLEAR_IN_SHEET)}else{var t=yield R.clearPcOfflineResources("smartsheet");c.k.info(T,"pc \u5220\u9664smartsheet\u79BB\u7EBF\u5305\u7ED3\u679C",t),R.reportClear(null==t?void 0:t.success,a.FAIl_CLEAR_IN_SMARTSHEET)}}catch(e){c.k.info(T,"pc \u5220\u9664\u79BB\u7EBF\u5305\u62A5\u9519",e),R.reportClear(!1,a.ERROR_CLEAR,null==e?void 0:e.message)}finally{R.gotoOnlineURL()}}),R.clickMobileAction=()=>(0,s.__awaiter)(void 0,void 0,void 0,function*(){var e,t;if(d.default.isWxWorkVersionAboveOrEqual("4.1.22")&&(null==(e=window.tdocs)?void 0:e.getBidInfo)&&(null==(t=window.tdocs)?void 0:t.disableOfflinePackage))try{if(h.J6.getType()===h.Hs.SHEET){var i=yield R.clearWxWorkMobile("t_sheet");c.k.info(T,"mobile \u5220\u9664sheet\u79BB\u7EBF\u5305\u7ED3\u679C",i),R.reportClear(i,a.FAIl_CLEAR_IN_SMARTSHEET,void 0,!0)}else{var r=yield R.clearWxWorkMobile("t_smartsheet");c.k.info(T,"mobile \u5220\u9664smartsheet\u79BB\u7EBF\u5305\u7ED3\u679C",r),R.reportClear(r,a.FAIl_CLEAR_IN_SMARTSHEET,void 0,!0)}}catch(e){c.k.info(T,"pc \u5220\u9664\u79BB\u7EBF\u5305\u62A5\u9519",e),R.reportClear(!1,a.ERROR_CLEAR,null==e?void 0:e.message,!0)}finally{R.gotoOnlineURL()}else R.gotoOnlineURL()})},794976:function(e,t,i){"use strict";i.d(t,{I6:function(){return c}}),i(575739);var r=i(463313),n=i(802955),o=i(740353),a=(e,t)=>!!t&&(t===e||a(e,t.parentNode)),l=void 0,s=()=>{l&&(clearTimeout(l),l=void 0),l=setTimeout(()=>{var e;null==(e=document.querySelector("#inspect-node"))||e.remove()},3e3)},d=()=>{if("undefined"!=typeof window){var e=(0,o.e)("free_go_id")&&(0,o.e)("free_go_proxy"),t=/__inspect__=1/.test(location.search);if(e&&t)return{outline:"1px solid gold"}}};function c(e){var t,i,o,c,{name:u,nodeId:p}=e,v=d(),[f]=(t=(0,r.useCallback)(e=>{if(v){if(e)return void function(e,t){l&&(clearTimeout(l),l=void 0);var i=document.querySelector("#inspect-node");if(i){if(i.innerText===e)return()=>{};i.remove()}(i=document.createElement("a")).id="inspect-node",i.style.display="inline-flex",i.style.alignItems="center",i.style.height="32px",i.style.padding="0 12px",i.style.fontSize="13px",i.style.fontWeight="500",i.style.color="white",i.style.backgroundColor="rgb(21, 21, 21)",i.style.cursor="pointer",i.style.border="1px solid rgb(52,52,52)",i.style.borderRadius="4px",i.style.textDecoration="none",i.style.fontFamily="system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Droid Sans,Helvetica Neue,sans-serif",i.style.zIndex="99999999999",i.style.transition="bottom 0.3s ease-out",i.style.position="fixed",i.style.margin="0",i.style.bottom="-32px",i.style.right="16px",i.target="_blank",document.body.appendChild(i),i.innerText=e,i.href=t,setTimeout(()=>{i&&(i.style.bottom="16px")},100),()=>{}}(`[\u{7EC4}\u{4EF6}] ${u}`,`https://www.figma.com/design/fshAJezBuIZUPcJlv8QOMT/%F0%9F%93%83-Document-UI-Library?node-id=${p}`);s()}},[u,p,v]),i=(0,r.useRef)(null),o=(0,r.useCallback)(()=>t(!0),[t]),c=(0,r.useCallback)(e=>{e.toElement&&a(i.current,e.toElement)||t(!1)},[t]),(0,r.useEffect)(()=>{var e=i.current;if(e){var t=[];return t.push(n.v.addDisposableListener(e,"mouseover",o)),t.push(n.v.addDisposableListener(e,"mouseout",c)),()=>{t.forEach(e=>null==e?void 0:e.dispose())}}},[c,o]),[i]);return[f,v]}},690876:function(e,t,i){"use strict";i.d(t,{n:function(){return p},y:function(){return u}});var r=i(463313),n=i.n(r),o=i(804739),a=i(707331),l=i(531079),s=i(794976),d=i(665671),c=i(389380),u=(e,t)=>e?(null==e?void 0:e.getAllVisibleViews()).filter(e=>{var i,r;return 0===e.type||(null==t||!t.onlyPublic||e.getPublicLevel()!==l.t.PERSONAL)&&((null==(i=null==t?void 0:t.excludeType)?void 0:i.length)?!t.excludeType.includes(e.type):null==(r=null==t?void 0:t.includeType)||!r.length||t.includeType.includes(e.type))}):[],p=e=>{var t,i,{view:r}=e,[l,u]=(0,s.I6)({name:"<ViewAtom />",nodeId:"3527-511630"});return n().createElement(d.NT,{ref:l,style:u},n().createElement(a.t,{style:{flexShrink:0},src:null!=(i=null==(t=(0,c.TO)(r.type))?void 0:t.icon)?i:o,width:20,height:20}),n().createElement("div",{className:"option-title"},r.getTitle()))}},508690:function(e,t,i){"use strict";i.d(t,{q:function(){return o}});var r=i(88511),n=i(827168);function o(e){return function(t,i,o){var a=o.value;o.value=function(t){for(var i=arguments.length,o=Array(i>1?i-1:0),l=1;l<i;l++)o[l-1]=arguments[l];var{editableStatusService:s}=t.getCore(),d=t.getCurrentTable();if(d)return s.getTableStatus(d.id)!==e?void(0,n.l)():a.call.apply(a,[this,t].concat((0,r._)(o)))}}}},880882:function(e,t,i){"use strict";i.d(t,{M:function(){return r}});var r={onViewCreated:new(i(991228)).Emitter}},100580:function(e,t,i){"use strict";i.d(t,{$:function(){return n},f:function(){return o}}),(r=n||(n={})).SIDEBAR="smshsidebar",r.TITLEBAR="smshtitlebar",r.SUBSHEET="smshsubsheet";var r,n,o={[n.SIDEBAR]:1,[n.TITLEBAR]:2,[n.SUBSHEET]:3}},665671:function(e,t,i){"use strict";i.d(t,{NT:function(){return n},Ui:function(){return o},wv:function(){return a}});var r=i(830982),n=r.ZP.div`
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
`},971800:function(e,t,i){"use strict";i.d(t,{f:function(){return v},g:function(){return p}});var r=i(593323);i(604658);var n=i(209787),o=i(732162),a=i(638794),l=i(475203),s=i(426644),d=i(175055),c=i(36272),u=i(332879),p=function(){function e(){(0,r._)(this,e)}return e.prototype.use=function(e){var t=(null==e?void 0:e.path)||[];return s.k.info("ReportMiddleware",`info: ${JSON.stringify(e)}, path: ${JSON.stringify(t)}`),d.E.metricsTdw({opername:c.ox.FEATURE,module:u.J6.getName(),action:"click",ver7:null==e?void 0:e.name,ver8:null==e?void 0:e.from,ver9:t.join(","),ver10:t[0],ver11:t[1],ver12:t[2]}),!1},e}();function v(e){return(t,i,r)=>{var n=r.value;r.value=function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return l.Am.get(p).use(Object.assign({name:i},e)),n.apply(this,r)}}}(0,n.__decorate)([(0,n.__param)(0,(0,o.g)()),(0,n.__metadata)("design:type",Function),(0,n.__metadata)("design:paramtypes",[Object]),(0,n.__metadata)("design:returntype",void 0)],p.prototype,"use",null),p=(0,n.__decorate)([(0,a.d)()],p)},182796:function(e,t,i){"use strict";i.r(t),i.d(t,{ViewOperationService:function(){return K}});var r,n=i(593323),o=i(209787),a=i(991228),l=i(804739),s=i(869243),d=i(414109),c=i(475203),u=i(175055),p=i(426644),v=i(485584),f=i(817758),g=i(865046),h=i(622177),m=i(204962),_=i(531079),w=i(48308),b=i(243633),y=i(252750),x=i(589491),E=i(972861),V=i(148623),T=i(794199),I=i(690876),R=i(508690),C=i(880882),O=i(100580),S=i(727301),A=i(971800),L=i(389380),k=i(384341),P=i(905252),B=i(989398),N=i(824579),M=i(191058),W=i(724952),D=e=>{M.K.getIsWeCom()?(k.default.isMobile?N.WecomModalMobile:N.WecomModal).confirm(e):(k.default.isMobile?B.Modal:P.Modal).confirm(e)},j=e=>W.A9.show(e),F=e=>new Promise(t=>D({title:v.ag.t({[_.t.PUBLIC]:"view_level_public",[_.t.LOCKED]:"view_level_lock",[_.t.PERSONAL]:"view_level_personal"}[e]),content:v.ag.t({[_.t.PUBLIC]:"view_level_public_content",[_.t.LOCKED]:"view_level_lock_content",[_.t.PERSONAL]:"view_level_personal_content"}[e]),okText:v.ag.t("confirm"),cancelText:v.ag.t("cancel"),showIcon:!0,onOk:()=>t(!0),onCancel:()=>t(!1)})),U=e=>new Promise(t=>{j({message:v.ag.t("view_title_duplicated"),type:"info",autoClose:!0,closable:!0,duration:3e3,action:[{text:v.ag.t("view_title_duplicated_button"),onClick:e}]}),t(!1)}),H=i(879536),K=r=function(){function e(t){(0,n._)(this,e),this.exportImageServiceLoader=t,this.renameViewEmitter=new a.Emitter}var t=e.prototype;return t.getViewPermission=function(e,t,i,r,n){var o=this.getTableByTableId(e,t);if(!o)return()=>!1;var a=!!n||e.getCore().permissionService.getPermissionStatus("canEdit",{type:g.nn.TABLE,tableId:o.id});return n=>{var l,s=this.getViewByIndex(e,{tableId:t,viewIndex:n});return a&&e.getCore().permissionService.getPermissionStatus(i,{tableId:o.id,viewId:null!=(l=null==s?void 0:s.id)?l:""})&&(!r||r(o,s))}},t.isTableCanEditView=function(e,t){return this.getViewPermission(e,t,"canEdit")},t.isTableCanAddView=function(e,t){return this.getViewPermission(e,t,"canInsertView",e=>!this.tableExceedLimit(e))},t.isTableExceedLimit=function(e,t){var i=this.getTableByTableId(e,t);return i?()=>this.tableExceedLimit(i):()=>!1},t.isTableChangePublicLevel=function(e,t){return this.getViewPermission(e,t,"canEditViewConfig")},t.isTableCanEditViewConfig=function(e,t){return this.getViewPermission(e,t,"canEditViewConfig")},t.isTableCanExportView=function(e,t){return this.getViewPermission(e,t,"canExportViewToImage",void 0,!0)},t.isTableCanDeleteView=function(e,t){return this.getViewPermission(e,t,"canDeleteView")},t.isTableCanRenameView=function(e,t){return this.getViewPermission(e,t,"canRenameView")},t.getViewCountByTableId=function(e,t){var i=this.getTableByTableId(e,t);if(i)return{allViewCount:i.getViewCount(),visibleViewCount:i.getAllVisibleViews().length}},t.insertView=function(e,t){var i,r,n,{tableId:o,viewType:a}=t,l=this.getViewCountByTableId(e,o);if(void 0!==l){var{allViewCount:s,visibleViewCount:d}=l,c=null==(i=e.getBehaviorApi())?void 0:i.insertView({tableId:o,delta:{index:s,type:a}});u.E.metricsKVR({biz:"wecomDocs",itemname:"smartsheet_create_view",value:c.isSuccess?l.allViewCount+1:l.allViewCount,Channel2:h.b[a].toLocaleLowerCase(),Extra1:o,Extra3:c.isSuccess?null==(r=c.data)?void 0:r.viewId:""}),V.C.createView(a,e),(null==c?void 0:c.isSuccess)&&(this.switchView(e,{tableId:o,viewIndex:d,isNewCreate:!0}),C.M.onViewCreated.fire({viewId:null==(n=c.data)?void 0:n.viewId}))}},t.copyView=function(e,t){var{tableId:i}=t,r=this.getViewByIndex(e,t);r&&(this.copyViewByViewId(e,{tableId:i,viewId:r.id}),V.C.copyView(r.type))},t.copyViewByViewId=function(e,t){var i,{tableId:r,viewId:n}=t,o=this.getVisibleViewIndex(e,{tableId:r,viewId:n});if(-1===o)return p.k.error("copyViewByViewId failed: index not found",t),!1;var a=null==(i=e.getBehaviorApi())?void 0:i.copyView(t);return(null==a?void 0:a.isSuccess)?(this.switchView(e,{tableId:r,viewIndex:o+1,isNewCreate:!0}),!0):(p.k.error("copyViewByViewId failed: request failed",t,a),!1)},t.switchView=function(e,t){var i,r,n=this.getViewByIndex(e,t);if(n){var o=n.id,a=null==(i=e.getCurrentTable())?void 0:i.id,l=null==(r=e.getCurrentView())?void 0:r.id,{tableId:s,isNewCreate:d}=t;(a!==s||l!==o)&&e.getCore().permissionService.getPermissionStatus("canRead",{type:g.nn.VIEW,tableId:s,viewId:o})&&(e.render({tableId:t.tableId,viewId:o,source:d?m.K.NEW_CREADE:void 0}),V.C.checkView(n.type))}},t.moveView=function(e,t){var i,r,n,o,a,{tableId:l,source:s,target:d}=t,c=this.getTableByTableId(e,l),u=(null==(i=null==c?void 0:c.getAllVisibleViews)?void 0:i.call(c))||[],v=null==(r=u[s])?void 0:r.id,f=null==(n=u[d])?void 0:n.id;return v&&f?(null==c||c.getAllViews().forEach((e,t)=>{e.id===v&&(o=t),e.id===f&&(a=t)}),void 0===o||void 0===a)?void p.k.error("sourceIndex or targetIndex is undefined",{sourceIndex:o,targetIndex:a,sourceViewId:v,targetViewId:f}):void e.getBehaviorApi().moveView({tableId:l,viewId:v,delta:{source:o,target:a}}):void p.k.error("sourceViewId or targetViewId is undefined",{sourceViewId:v,targetViewId:f,source:s,target:d})},t.changeViewPublicLevel=function(e,t){return(0,o.__awaiter)(this,void 0,void 0,function*(){var{tableId:i,publicLevel:r}=t,n=this.getTableByTableId(e,i),o=this.getViewByIndex(e,t),a=null==o?void 0:o.id;if(!a||!n)return Promise.resolve(!1);var l=o.getPublicLevel();if(l===r)return Promise.resolve(!1);if(l===_.t.PERSONAL){var s=o.getTitle();if(n.getAllVisibleViews().some(e=>e.id!==a&&e.getTitle()===s))return U(()=>this.renameViewEmitter.fire(a))}var d=yield F(r);return d&&(e.getBehaviorApi().setViewAttributes({tableId:i,viewId:a,delta:{publicLevel:r}}),V.C.changePublicLevel(r)),Promise.resolve(d)})},t.changeViewName=function(e,t){return(0,o.__awaiter)(this,void 0,void 0,function*(){var{viewName:i,tableId:r}=t,n=this.getViewByIndex(e,t),o=null==n?void 0:n.id;if(o&&n.getTitle()!==i){if(i.length>L.CV)return void s.default.show({message:v.ag.t("view_name_length_over",{length:L.CV}),type:"info"});e.getBehaviorApi().setViewAttributes({tableId:r,viewId:o,delta:{title:i}}),V.C.renameView()}})},t.deleteView=function(e,t){var i,r,{tableId:n}=t,o=this.getViewByIndex(e,t);if(o){var a=o.id,l=null==(i=e.getCurrentView())?void 0:i.id,s=this.getVisibleViewIndex(e,{tableId:n,viewId:a}),d=null==(r=e.getBehaviorApi())?void 0:r.deleteView({tableId:n,viewId:a}),c=o.type;V.C.delView(c),d.isSuccess&&l===a&&this.beforeDeleteView(e,{tableId:n,viewIndex:s})}},t.beforeDeleteView=function(e,t){var i,{tableId:r,viewIndex:n}=t,o=n;if(void 0===o){var a=null==(i=e.getCurrentView())?void 0:i.id;o=void 0===a?0:this.getVisibleViewIndex(e,{tableId:r,viewId:a})}0!==o&&(o-=1),this.switchView(e,{tableId:r,viewIndex:o})},t.exportViewToImage=function(e,t){return(0,o.__awaiter)(this,void 0,void 0,function*(){var i=yield this.getExportImageService();yield i.exportViewToImage(e,t,O.$.SIDEBAR)})},t.openModifyPermission=function(e,t){},t.switchPreviousVisibleIndexByDeletedIndex=function(e,t,i){var r=this.getTableByTableId(e,t),n=null==r?void 0:r.getVisibleViewIdList(),o=null==r?void 0:r.getViewIdList(),a=i-1;if(a>0&&n&&o)for(var l=a;l>-1;l--){var s=o[l],d=n.indexOf(s);if(d>-1){a=d;break}}else a=0;this.switchView(e,{tableId:t,viewIndex:a})},t.getVisibleViewIndex=function(e,t){var i,r,{tableId:n,viewId:o}=t,a=this.getTableByTableId(e,n);return null!=(r=null==(i=null==a?void 0:a.getVisibleViewIdList())?void 0:i.indexOf(o))?r:-1},t.getViewByIndex=function(e,t){var i,{tableId:r,viewIndex:n}=t,o=this.getTableByTableId(e,r);return null==(i=null==o?void 0:o.getAllVisibleViews())?void 0:i[n]},t.getTableByTableId=function(e,t){return e.getCore().base.getTableByTableId(t)},t.getExportImageService=function(){return this.exportImageServiceLoader.getInstance()},t.tableExceedLimit=function(e){return e.getViewCount()>=w.l.getConfig()[b.n.MAXIMUM_VIEW_LIMIT]},e.getViewInfoListByTableId=function(e,t){var i,n=e.getCore().base.getTableByTableId(t);return null!=(i=(0,I.y)(n).map(t=>{var i=t.type;return T.A.doToast({tag:y.gh.ERROR_VIEW_PUBLIC_TYPE,value:String(t.getPublicLevel())}),{id:t.id,type:i,name:t.getTitle(),icon:r.getViewIconByViewType(i),icon20:r.getViewIconByViewType(i,!0),publicLevel:(0,x.m)(e.getCore())?t.getPublicLevel():void 0,isOwner:t.getOwnerId()===e.getCore().userService.getCurrentUserIdForViewOwner(i)}}))?i:[]},e.getViewIconByViewType=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=r.getViewInfoByViewType(e);return t?(null==i?void 0:i.icon20)||l:(0,f.Wx)()?(null==i?void 0:i.icon)||l:(null==i?void 0:i.iconOld)||(null==i?void 0:i.icon)||l},e.getViewInfoByViewType=function(e){return(0,L.TO)(e)},e}();(0,o.__decorate)([(0,A.f)({}),(0,o.__metadata)("design:type",Function),(0,o.__metadata)("design:paramtypes",[Object,Object]),(0,o.__metadata)("design:returntype",void 0)],K.prototype,"insertView",null),(0,o.__decorate)([(0,A.f)({}),(0,o.__metadata)("design:type",Function),(0,o.__metadata)("design:paramtypes",[Object,Object]),(0,o.__metadata)("design:returntype",void 0)],K.prototype,"copyView",null),(0,o.__decorate)([(0,R.q)(E.H.ALL_EDITABLE),(0,A.f)({}),(0,o.__metadata)("design:type",Function),(0,o.__metadata)("design:paramtypes",[Object,Object]),(0,o.__metadata)("design:returntype",void 0)],K.prototype,"switchView",null),(0,o.__decorate)([(0,A.f)({}),(0,o.__metadata)("design:type",Function),(0,o.__metadata)("design:paramtypes",[Object,Object]),(0,o.__metadata)("design:returntype",void 0)],K.prototype,"moveView",null),(0,o.__decorate)([(0,A.f)({}),(0,o.__metadata)("design:type",Function),(0,o.__metadata)("design:paramtypes",[Object,Object]),(0,o.__metadata)("design:returntype",Promise)],K.prototype,"changeViewPublicLevel",null),(0,o.__decorate)([(0,A.f)({}),(0,o.__metadata)("design:type",Function),(0,o.__metadata)("design:paramtypes",[Object,Object]),(0,o.__metadata)("design:returntype",Promise)],K.prototype,"changeViewName",null),(0,o.__decorate)([(0,A.f)({}),(0,o.__metadata)("design:type",Function),(0,o.__metadata)("design:paramtypes",[Object,Object]),(0,o.__metadata)("design:returntype",void 0)],K.prototype,"deleteView",null),(0,o.__decorate)([(0,A.f)({}),(0,o.__metadata)("design:type",Function),(0,o.__metadata)("design:paramtypes",[Object,Object]),(0,o.__metadata)("design:returntype",Promise)],K.prototype,"exportViewToImage",null),(0,o.__decorate)([(0,A.f)({}),(0,o.__metadata)("design:type",Function),(0,o.__metadata)("design:paramtypes",[Object,Object]),(0,o.__metadata)("design:returntype",void 0)],K.prototype,"openModifyPermission",null),K=r=(0,o.__decorate)([(0,d.t)({provide:H.O}),(0,o.__param)(0,(0,c.aN)(S.l)),(0,o.__metadata)("design:paramtypes",[Object])],K)},593496:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)({}).hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},153366:function(e,t,i){var r=i(364700);e.exports=function(e,t){if(null==e)return{};var i,n,o=r(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],-1===t.indexOf(i)&&({}).propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o},e.exports.__esModule=!0,e.exports.default=e.exports},364700:function(e){e.exports=function(e,t){if(null==e)return{};var i={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;i[r]=e[r]}return i},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=43772.34073d1c3b25bcd5.js.map