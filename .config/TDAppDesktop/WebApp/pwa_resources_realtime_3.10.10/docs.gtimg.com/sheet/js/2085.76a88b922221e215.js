"use strict";(self.webpackChunksheet=self.webpackChunksheet||[]).push([["2085"],{186874:function(e,t,r){var i=r(463313),n=r(757711),a={tag:"svg",attrs:{fill:"none",viewBox:"0 0 32 32",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"url(#progress-ring-blue-32_paint0_linear_3342_242481)",d:"M16 28.5h9.99a15.97 15.97 0 000-25H16a12.5 12.5 0 110 25z",fillRule:"evenodd",clipRule:"evenodd"}},{tag:"path",attrs:{fill:"url(#progress-ring-blue-32_paint1_linear_3342_242481)",d:"M3.5 16C3.5 9.1 9.1 3.5 16 3.5H6.01A16 16 0 0016 32v-3.5C9.1 28.5 3.5 22.9 3.5 16z",fillRule:"evenodd",clipRule:"evenodd"}},{tag:"path",attrs:{fill:"#267EF0",d:"M6.01 3.5A15.93 15.93 0 0116 0c3.78 0 7.25 1.31 9.99 3.5H6z",fillOpacity:.5,fillRule:"evenodd",clipRule:"evenodd"}},{tag:"path",attrs:{fill:"#267EF0",d:"M16 28.5V32c3.78 0 7.25-1.31 9.99-3.5H16z",fillRule:"evenodd",clipRule:"evenodd"}},{tag:"path",attrs:{fill:"#267EF0",d:"M16 32a1.75 1.75 0 110-3.5V32z"}},{tag:"defs",attrs:{},children:[{tag:"linearGradient",attrs:{id:"progress-ring-blue-32_paint0_linear_3342_242481",x1:24,x2:24,y1:3.5,y2:28.5,gradientUnits:"userSpaceOnUse"},children:[{tag:"stop",attrs:{stopColor:"#267EF0",stopOpacity:.5}},{tag:"stop",attrs:{offset:1,stopColor:"#267EF0"}}]},{tag:"linearGradient",attrs:{id:"progress-ring-blue-32_paint1_linear_3342_242481",x1:8,x2:8,y1:3.5,y2:32,gradientUnits:"userSpaceOnUse"},children:[{tag:"stop",attrs:{stopColor:"#267EF0",stopOpacity:.5}},{tag:"stop",attrs:{offset:1,stopColor:"#267EF0",stopOpacity:0}}]}]}],defIds:["progress-ring-blue-32_paint0_linear_3342_242481","progress-ring-blue-32_paint1_linear_3342_242481"]},d=(0,i.forwardRef)(function(e,t){return(0,i.createElement)(n.A,Object.assign({},e,{id:"progress-ring-blue-32",ref:t,icon:a}))});d.displayName="ProgressRingBlue32",t.Z=d},415291:function(e,t,r){e.exports=r.p+"assets/file_smartsheet.12bc694a9557b832.svg"},187737:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBpZD0iTW9iaWxlIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIj48ZyBpZD0iTW9iaWxlL+W3peWFt+iPnOWNlS/nvJbovpEv6KGo5qC8L+afpeaJvuabv+aNoiIgZmlsbD0iIzQ2NEQ1QSIgZmlsbC1ydWxlPSJub256ZXJvIj48ZyBpZD0i57yW57uEIj48cGF0aCBpZD0i5b2i54q257uT5ZCIIiBkPSJNMTEgNGE3IDcgMCAwIDEgNS4xMDMgMTEuNzkybDMuNzU2IDMuNzU2LTEuMDYgMS4wNi0zLjgzOC0zLjgzNkE3IDcgMCAxIDEgMTEgNG0wIDEuNWE1LjUgNS41IDAgMSAwIDAgMTEgNS41IDUuNSAwIDAgMCAwLTExIi8+PC9nPjwvZz48L2c+PC9zdmc+"},922837:function(e,t,r){r.d(t,{k:function(){return i}});var i={COLUMN_DEFAULT_WIDTH:140,COLUMN_CHECKBOX_WIDTH:90,COLUMN_PRIMARY_WIDTH:180}},204284:function(e,t,r){r.d(t,{A:function(){return x}});var i=r(805155),n=r(593323),a=r(758699),d=r(425601),l=r(982121),s=r(921734),o=r(88511);r(575739);var c=r(828579),u=r(696030),h=r(426644),p=r(622177),g=r(566835),b=r(531079),f=r(974152),I=r(3277),m=r(513740),v=r(922837),x=function(e){function t(e,r){var a;return(0,n._)(this,t),(a=(0,i._)(this,t)).tableModel=e,a.type=p.b.GRID,a.storedRecordIds=[],a.searchText="",a.recordIds=r,a}(0,s._)(t,e);var r=t.prototype;return r.dispose=function(e){(0,d._)((0,l._)(t.prototype),"dispose",this).call(this,e),this.cancelSearch()},r.doSearch=function(e,t){if(h.k.info(`[dashboard-table-model][${this.tableModel.id}] do search ${e}`),this.searchText=e,this.storedRecordIds=[],this.cancelSearch(),""===e)return void t({isCompleted:!0,recordIds:this.getDisplayedRecordIds(),searchString:e});var r=[];this.searchTask=(0,g.D)({recordIds:this.recordIds,fieldIds:this.getAllFieldIds(),unitCallback:this.searchUnitCallback.bind(this,t,r,e),finishCallback:this.searchFinishCallback.bind(this,t,r,e)}),this.searchTask.promise.catch(e=>{h.k.warn(`[dashboard-table-model][${this.tableModel.id}] error`,e)})},r.updateRecordIds=function(e){return!(0,c.default)(this.recordIds,e)&&(h.k.info(`[dashboard-table-model][${this.tableModel.id}] update recordIds`),this.recordIds=e,!0)},r.getDisplayedRecordIds=function(){return this.isSearchMode?this.storedRecordIds:this.recordIds},r.getVisibleFieldIds=function(){var e,t,r=(null==(t=null==(e=this.tableModel.getAllVisibleViews())?void 0:e[0])?void 0:t.getVisibleFieldIds())||[];return r.length>0?r:this.tableModel.getAllFieldIds()},r.getAllFieldIds=function(){return this.tableModel.getAllFieldIds()},r.isFieldHidden=function(e){return!1},r.getFieldByFieldId=function(e){return this.tableModel.getFieldByFieldId(e)},r.getPrimaryFieldId=function(){return this.tableModel.getPrimaryFieldId()},r.getAllRecordIds=function(){return this.tableModel.getRecordIdList()},r.getGroupFields=function(){return[]},r.isFieldStatEnabled=function(){return!1},r.getFormattedTree=function(){return[]},r.getRowHeightLevel=function(){return b.K.Short},r.getColumnWidth=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v.k.COLUMN_DEFAULT_WIDTH,r=this.tableModel.getFieldByFieldId(e);return r?this.tableModel.getPrimaryFieldId()===e?v.k.COLUMN_PRIMARY_WIDTH:r.getType()===f.fS.CHECKBOX?v.k.COLUMN_CHECKBOX_WIDTH:t:0},r.getProperties=function(){return I.c.generateDefaultProperty(this.tableModel)},r.getFrozenFieldCount=function(){return 0},r.getPrimaryField=function(){return this.tableModel.getFieldByFieldId(this.tableModel.getPrimaryFieldId())},r.getRecordById=function(e){return this.tableModel.getRecordByRecordId(e)},r.cancelSearch=function(){this.searchTask&&(this.searchTask.abort(),this.searchTask=void 0,h.k.info(`[dashboard-table-model][${this.tableModel.id}] cancel search`))},r.searchUnitCallback=function(e,r,i,n){var a,d=this.tableModel.getFieldByFieldId(n.fieldId);if(d){var l=d.getStandardCell(n.recordId);l.data.length>0&&m.p.get(d.getType()).isMatchField(l.data,i)&&(r.push(n.recordId),null==(a=this.searchTask)||a.seekToNextRowStart()),r.length<t.splitThreshold||(this.storedRecordIds=(0,o._)(this.storedRecordIds).concat((0,o._)(r)),e({isCompleted:!1,recordIds:(0,o._)(r),searchString:i}),r.splice(0,r.length))}},r.searchFinishCallback=function(e,t,r){this.storedRecordIds=(0,o._)(this.storedRecordIds).concat((0,o._)(t)),e({isCompleted:!0,recordIds:t,searchString:r}),this.searchTask=void 0,h.k.info(`[dashboard-table-model][${this.tableModel.id}] search finish, ${r}`)},(0,a._)(t,[{key:"isSearchMode",get:function(){return""!==this.searchText}}]),t}(u.Disposable);x.splitThreshold=100},167067:function(e,t,r){r.r(t),r.d(t,{DashboardTableContribution:function(){return H},MODAL_WIDTH:function(){return z},MODAL_HEIGHT:function(){return $},MAX_PADDING:function(){return V}});var i=r(805155),n=r(593323),a=r(921734),d=r(463313),l=r.n(d),s=r(696030),o=r(905252),c=r(869243),u=r(485584),h=r(259718),p=r(830982),g=r(415291),b=r(155533),f=r(187737),I=r(906406),m=r(540852),v=r(757711),x={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"#2ACDB1",d:"M0 1.35C0 .6.6 0 1.35 0h12.3C14.4 0 15 .6 15 1.35v13.3c0 .75-.6 1.35-1.35 1.35H1.35C.6 16 0 15.4 0 14.65V1.35z",fillRule:"evenodd",clipRule:"evenodd"}},{tag:"path",attrs:{fill:"#fff",d:"M9.04 10.24l1.88 1.73L9.8 13.2l-1.88-1.74 1.13-1.22zm-3.08 0l-1.88 1.73L5.2 13.2l1.88-1.74-1.13-1.22z",opacity:.75,fillRule:"evenodd",clipRule:"evenodd"}},{tag:"path",attrs:{fill:"#fff",d:"M5.96 9.48L4.08 7.74 5.2 6.52l1.88 1.73-1.13 1.23zm3.08 0l1.88-1.74L9.8 6.52 7.91 8.25l1.13 1.23z",fillRule:"evenodd",clipRule:"evenodd"}}]},y=(0,d.forwardRef)(function(e,t){return(0,d.createElement)(v.A,Object.assign({},e,{id:"file-smartsheet-typeb-16",ref:t,icon:x}))});y.displayName="FileSmartsheetTypeb16";var C=r(707331),T=r(426644),_=r(622177),S=r(175524),w=r(920486),E=r(204284),M=r(991228),R=r(370520),D=r(393186),F=r(817733),A=function(e){function t(e){var r;return(0,n._)(this,t),(r=(0,i._)(this,t)).isLite=!0,r.liteConfig={selectMode:"none"},r.id="dashboard-xtable",r.onUnionRendererViewChangedEmitter=r._register(new M.Emitter),r.emitter=new D.ys,r.tempState=new F.Z,r.getRenderRoot=()=>r.renderRoot,r.getCore=()=>r.core,r.getCurrentTable=()=>r.core.base.getTableByTableId(r.tablePosition.tableId),r.getCurrentView=()=>r.dashboardTableViewModel,r.getId=()=>r.id,r.getCanvasEmitter=()=>r.emitter,r.getTempState=()=>r.tempState,r.getScale=()=>1,r.core=e.core,r.tablePosition=e.tablePosition,r.renderRoot=e.renderRoot,r.dashboardTableViewModel=e.dashboardTableViewModel,r.onUnionRendererViewChanged=r.onUnionRendererViewChangedEmitter.event,r.activeTableStateService=new R.v(r.core.base,r.core.lastViewService,r.core.permissionService),r}return(0,a._)(t,e),t}(s.Disposable),N="--text-medium",U=(e,t)=>(0,h.default)(r=>{e.doSearch(r,t)},300),k=p.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${792}px;
  max-width: calc(100vw - ${z-792+V}px);
  height: 378px;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .icon {
    font-size: 48px;
    margin-bottom: 6px;
  }
  .desc {
    color: var(--text-strong, rgba(11, 18, 26, 0.6));
    font-size: 13px;
    font-weight: 400;
  }
`,P=p.ZP.div`
  .content-info-bar {
    width: 100%;
    height: 40px;
    padding: 10px 16px;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    border-radius: 8px;
    background: var(--bg-lv1-medium, rgba(239, 240, 241, 1));
    justify-content: flex-start;
    margin-bottom: 12px;
    .content-info-bar-icon {
      height: 16px;
      width: 16px;
      font-size: 16px;
      flex: none;
      margin-right: 8px;
    }
    .content-info-bar-msg {
      font-size: 14px;
      font-weight: 400;
      color: var(--base_gray_080, rgba(14, 19, 26, 0.8));
    }
  }

  .content-header {
    height: 36px;
    font-size: 14px;
    line-height: 20px;
    color: ${N};
    display: flex;
    align-items: center;

    .samrtsheet-icon-box {
      padding-right: 4px;
      display: flex;

      &.wecom {
        display: none;
      }
    }
  }

  .content-body {
    background: var(--bg-lv4-default, rgb(255, 255, 255));
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid var(--border-medium, rgba(0, 0, 0, 0.08));
    overflow: hidden;
    width: ${792}px;
    max-width: calc(100vw - ${z-792+V}px);

    .body-search {
      background: var(--bg-lv4-default, rgb(255, 255, 255));
      height: 60px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 12px;

      .search-icon-box {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .search-input {
        background: var(--tsp-fill-weak, rgba(51, 77, 102, 0.06));
        width: 100%;
      }
    }

    .render-table {
      position: relative;

      .empty-text {
        background: var(--bg-lv3-medium, #f3f5f7);
        position: absolute;
        // \u663E\u793A\u51FA\u5217\u6807\u9898
        top: 33px;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;

        display: flex;
        justify-content: center;
        align-items: center;
        color: ${N};
        padding: 0 1em;
      }

      .body-table {
        position: relative;
        left: -1px;
      }
    }

    .body-add-action {
      height: 36px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding-left: 28px;
      background: var(--bg-lv4-default, rgb(255, 255, 255));
      border-top: 1px solid var(--border-medium, rgba(0, 0, 0, 0.08));

      :hover {
        background: rgba(0, 0, 0, 0.04);
      }
    }
  }
`,O=e=>{var{tablePosition:t,core:r,recordIds:i,options:n={}}=e,{hideInsertRecordButton:a,tips:s,globalErrorTips:o}=n,[c,h]=(0,d.useState)(""),[p,v]=(0,d.useState)(!1),x=(0,d.useRef)(""),{sourceValue:M}=(0,S.Hf)({tableId:t.tableId}),R=(0,d.useRef)(null),D=(0,d.useRef)(null),F=(0,d.useRef)(null),N=(0,d.useRef)(null),O=(0,d.useRef)(null),B=(0,d.useMemo)(()=>M?M.table:null,[M]),L=(0,d.useMemo)(()=>B&&r.permissionService.getPermissionStatus("canInsertRecord",{tableId:B.id,viewId:""}),[B,r]),W=(0,d.useCallback)(()=>{var e,t,r;null==(e=D.current)||e.dispose(),D.current=null,null==(t=F.current)||t.dispose(),F.current=null,null==(r=N.current)||r.dispose(),N.current=null,O.current=null,h(""),x.current=""},[]);(0,d.useEffect)(()=>()=>{W()},[W]),(0,d.useEffect)(()=>{W()},[W,e.tablePosition.tableId]);var H=(0,d.useCallback)(()=>{N.current&&(N.current.recollect(),N.current.render())},[]),Z=(0,d.useCallback)(()=>{var e=D.current;e&&v(x.current.length>0&&0===e.getDisplayedRecordIds().length)},[]),j=(0,d.useCallback)(()=>{H(),Z()},[Z,H]);(0,d.useEffect)(()=>{T.k.info("[dashboard-table] source value update"),H()},[H,M]),(0,d.useEffect)(()=>{B&&R.current&&(N.current||(0,w.T)(_.b.GRID).then(e=>{var n;B&&R.current&&(N.current||(D.current=new E.A(B,i),F.current=new A({core:r,tablePosition:t,renderRoot:R.current,dashboardTableViewModel:D.current}),N.current=new e(F.current),null==(n=N.current)||n.render(),O.current=U(D.current,j),T.k.info(`[dashboard-table][${B.id}] init success`)))}))},[r,H,i,B,t,j]),(0,d.useEffect)(()=>{if(D.current){var t;D.current.updateRecordIds(e.recordIds)&&(null==(t=O.current)||t.call(O,x.current))}},[e.recordIds]);var G=(0,d.useMemo)(()=>l().createElement("div",{className:"search-icon-box"},l().createElement(C.t,{src:f,width:20,height:20,viewBox:"0 0 24 24"})),[]),J=(0,d.useCallback)(e=>{var t;null==(t=O.current)||t.call(O,e),h(e),x.current=e},[]),K=(0,d.useCallback)(()=>{},[]);if(o)return l().createElement(k,null,l().createElement("div",{className:"container"},l().createElement(m.Z,{className:"icon"}),l().createElement("div",{className:"desc"},o)));var X=L?s?"268px":"320px":s?"304px":"356px";return l().createElement(P,null,s&&l().createElement("div",{className:"content-info-bar"},l().createElement(m.Z,{className:"content-info-bar-icon"}),l().createElement("div",{className:"content-info-bar-msg"},u.ag.t("no_permission_to_run_dashboard_data"))),l().createElement("div",{className:"content-header"},l().createElement("div",{className:"samrtsheet-icon-box"},l().createElement(C.t,{src:g})),l().createElement("div",{className:"samrtsheet-icon-box wecom"},l().createElement(y,null)),l().createElement("span",null,null==B?void 0:B.getDisplayTitle())),l().createElement("div",{className:"content-body",style:{maxWidth:`calc(100vw - ${z-792+V}px)`}},l().createElement("div",{className:"body-search"},l().createElement(I.default,{value:c,leftIcon:G,placeholder:u.ag.t("search2"),onChange:J,autoFocus:!0,className:"search-input"})),l().createElement("div",{className:"render-table"},l().createElement("div",{ref:R,className:"body-table",style:{height:X,maxHeight:`calc(100vh - ${$-parseInt(X)+V}px)`}}),l().createElement("div",{className:"empty-text",style:{opacity:+!!p}},u.ag.t("search_no_result"))),L&&!a?l().createElement("div",{className:"body-add-action",onClick:K},l().createElement(C.t,{src:b,height:24,width:24})):null))},B=r(186874),L=p.ZP.div`
  width: ${792}px;
  height: 378px;
  max-width: calc(100vw - ${z-792+V}px);
  display: flex;
  justify-content: center;
  align-items: center;
  @keyframes turn-around {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .icon {
    animation: turn-around 700ms linear infinite;
    font-size: 28px;
    margin-bottom: 6px;
  }
  .desc {
    color: var(--text-strong, rgba(11, 18, 26, 0.6));
    font-size: 13px;
    font-weight: 400;
  }
`,W=()=>l().createElement(L,null,l().createElement("div",{className:"container"},l().createElement(B.Z,{className:"icon"}),l().createElement("p",{className:"desc"},u.ag.t("dashboard_detail_loading")))),z=840,$=560,V=32,H=function(e){function t(){var e;return(0,n._)(this,t),e=(0,i._)(this,t,arguments),e.modalConfirmApi=null,e.disposer=null,e.openTableModal=(t,r,i,n,a,d,s)=>{e.modalConfirmApi=o.default.confirm(Object.assign({style:{width:`${z}px`,height:`${$}px`,maxHeight:`calc(100vh - ${V}px)`,maxWidth:`calc(100vw - ${V}px)`},title:u.ag.t("data_details"),content:s?l().createElement(W,null):l().createElement(O,{tablePosition:t,core:i,recordIds:r,options:d}),footer:null},a)),e.disposer=n},e.updateModal=(t,r,i,n)=>{var a;null==(a=e.modalConfirmApi)||a.update({content:l().createElement(O,{tablePosition:t,core:i,recordIds:r,options:n})})},e.closeModal=()=>{var t,r;null==(t=e.disposer)||t.dispose(),null==(r=e.modalConfirmApi)||r.close()},e.closeModalWhenDataChange=()=>{e.closeModal(),c.default.show({message:u.ag.t("data_changes_cause_close"),type:"info",duration:3e3})},e}return(0,a._)(t,e),t}(s.Disposable)},175524:function(e,t,r){r.d(t,{Hf:function(){return M},yI:function(){return w},iB:function(){return R},Vv:function(){return D},JJ:function(){return E}});var i=r(463313),n=r(69780),a=r(805155),d=r(593323),l=r(921734),s=r(513740),o=r(163130),c=r(974152),u=r(937225),h=r(44293),p=r(425601),g=r(982121),b=r(696030),f=r(426644),I=function(e){function t(e){var r;return(0,d._)(this,t),(r=(0,a._)(this,t)).disposableStore=new b.DisposableStore,r.onUpdate=null,r.onChangeSetApplied=e=>{r.shouldUpdateSourceAfterDataChanged(e)&&(f.k.debug(`[DataSource]update after data changed ${r.getDeps()}`),r.updateSource())},r.onPermissionStatusChanged=()=>{r.shouldUpdateSourceAfterPermissionChanged()&&(f.k.debug(`[DataSource]update after permission changed ${r.getDeps()}`),r.updateSource())},r.startListener=()=>{r.unbind(),r.disposableStore.add(r.xTableCore.behaviorApi.onDidChangeModel(r.onChangeSetApplied)),r.disposableStore.add(r.xTableCore.permissionService.onPermissionStatusChanged(r.onPermissionStatusChanged)),r.unbind=()=>{f.k.debug(`[DataSource]unbind ${r.getDeps()}`),r.disposableStore.clear(),r.resetUnbind()}},r.xTableCore=e.xTableCore,r.resetUnbind(),r}(0,l._)(t,e);var r=t.prototype;return r.bindUpdate=function(e){this.onUpdate=e,this.startListener()},r.updateSource=function(){"function"==typeof this.onUpdate&&this.onUpdate(this.getSource())},r.dispose=function(){f.k.debug(`[DataSource]dispose ${this.getDeps()}`),this.unbind(),(0,p._)((0,g._)(t.prototype),"dispose",this).call(this)},r.resetUnbind=function(){this.unbind=()=>{}},t}(b.Disposable),m=function(e){function t(e){var r;return(0,d._)(this,t),(r=(0,a._)(this,t,[e])).tableId=e.tableId,r.fieldId=e.fieldId,r.recordId=e.recordId,r}(0,l._)(t,e);var r=t.prototype;return r.getSource=function(){var e,t,r=this.getFieldInstance();return r?{title:r.getTitle(),type:r.getType(),property:r.getProperty(),cellValue:r.getCellValue(this.recordId),standardCell:r.getStandardCell(this.recordId),explanation:null==(t=(e=s.p.get(r.getType())).getExplanation)?void 0:t.call(e),fieldErrorType:r.fieldErrorType,isWecomExternal:r.isWecomExternal}:null},r.getDeps=function(){return`${this.tableId}, ${this.recordId}, ${this.fieldId}`},r.shouldUpdateSourceAfterDataChanged=function(e){var{mutations:t}=e;return!!e.recordIdsChanged.includes(o.a)||!!this.isAffected(e)&&(0===t.length?this.handleAcceptCommit():this.handleMutations(t))},r.shouldUpdateSourceAfterPermissionChanged=function(){return!1},r.getFieldInstance=function(){var e=this.xTableCore.base.getTableByTableId(this.tableId);if(!e)return null;var t=e.getFieldByFieldId(this.fieldId);return t||null},r.isAffected=function(e){var{affectedTables:t,mutations:r}=e;if(r.some(e=>{var{tableId:t}=e;return t===this.tableId})||t.has(this.tableId))return!0;var i=this.getFieldInstance();if(!i||i.type!==c.fS.TWO_WAY_LINK_RECORDS&&i.type!==c.fS.LINK_RECORDS)return!1;var{tableId:n}=i.getCorrectedLinkOptions();return t.has(n)},r.handleAcceptCommit=function(){var e=this.getFieldInstance();return!!e&&!!u.n.includes(e.getType())},r.handleMutations=function(e){var t=this.getFieldInstance();return!!(!t||u.n.includes(t.getType()))||e.some(e=>{switch(e.id){case h.x.SET_RECORD_MUTATION:return this.shouldUpdateBySetRecordMutation(e);case h.x.SET_RECORDS_MUTATION:return this.shouldUpdateBySetRecordsMutation(e);case h.x.SET_FIELD_ATTRIBUTES_MUTATION:return this.shouldUpdateBySetFieldAttributes(e);case h.x.INSERT_RECORD_MUTATION:var{recordId:t}=e.delta;return this.shouldUpdateByRecordAction(e.tableId,[t]);case h.x.INSERT_RECORDS_MUTATION:var r=e.delta.map(e=>{var{recordId:t}=e;return t});return this.shouldUpdateByRecordAction(e.tableId,r);default:return!1}})},r.shouldUpdateByRecordAction=function(e,t){return e===this.tableId&&!!t.includes(this.recordId)},r.shouldUpdateBySetRecordMutation=function(e){if(e.tableId!==this.tableId||this.recordId!==e.recordId)return!1;var t=e.delta;return this.fieldId in t},r.shouldUpdateBySetRecordsMutation=function(e){if(e.tableId!==this.tableId)return!1;var t=e.delta;if(!(this.recordId in t))return!1;var r=t[this.recordId];return this.fieldId in r},r.shouldUpdateBySetFieldAttributes=function(e){return e.tableId===this.tableId&&e.fieldId===this.fieldId},t}(I);r(449529),r(575739);var v=function(e){function t(e){var r;return(0,d._)(this,t),(r=(0,a._)(this,t,[e])).tableId=e.tableId,r.viewId=e.viewId,r}(0,l._)(t,e);var r=t.prototype;return r.getSource=function(){var e=this.xTableCore.base.getTableByTableId(this.tableId),t=null==e?void 0:e.getViewByViewId(this.viewId);if(!e||!t)return null;var{fieldIds:r}=t.properties;return{allFieldIds:r.reduce((r,i)=>{var n=e.getFieldByFieldId(i);if(!n)return r;var{canEditFieldConfig:a}=this.xTableCore.fieldRestrictionService.getFieldRestriction({table:e,view:t,fieldId:n.getId()}),d=t.isFieldHidden(n.getId());return r.push({id:i,canEdit:a,isHidden:d,title:n.getTitle(),type:n.getType(),property:n.getProperty()}),r},[])}},r.getDeps=function(){return`[mobile-field-operation]${this.tableId}`},r.shouldUpdateSourceAfterDataChanged=function(e){var{mutations:t,affectedTables:r}=e;return t.some(e=>{var{tableId:t}=e;return t===this.tableId})||r.has(this.tableId)},r.shouldUpdateSourceAfterPermissionChanged=function(){return!1},t}(I),x=r(622177),y=function(e){function t(e){var r;return(0,d._)(this,t),(r=(0,a._)(this,t,[e])).tableId=e.tableId,r.viewId=e.viewId,r}(0,l._)(t,e);var r=t.prototype;return r.getSource=function(){var e=this.getViewInstance();if(!e)return null;var t=e.getFormConfig();return{title:e.getTitle(),formDescription:t.formDescription,formCover:t.formCover,allFieldIds:e.getAllFieldIds(),allFields:e.getAllFields(),fieldInfos:t.fieldInfos}},r.getDeps=function(){return`${this.tableId}, ${this.viewId}`},r.shouldUpdateSource=function(e){var{mutations:t}=e;return t.some(e=>e.tableId===this.tableId&&(e.id===h.x.SET_FORM_CONFIG_MUTATION||e.id===h.x.MOVE_FIELD_MUTATION||e.id===h.x.INSERT_FIELD_MUTATION||e.id===h.x.DELETE_FIELD_MUTATION))},r.shouldUpdateSourceAfterDataChanged=function(e){var{mutations:t,affectedTables:r}=e;return t.some(e=>{var{tableId:t}=e;return t===this.tableId})||r.has(this.tableId)},r.shouldUpdateSourceAfterPermissionChanged=function(){return!1},r.getViewInstance=function(){var e=this.xTableCore.base.getTableByTableId(this.tableId);if(!e)return null;var t=e.getViewByViewId(this.viewId);return t&&t.type===x.b.FORM?t:null},t}(I),C=function(e){function t(e){var r;return(0,d._)(this,t),(r=(0,a._)(this,t,[e])).tableId=e.tableId,r}(0,l._)(t,e);var r=t.prototype;return r.getSource=function(){var e=this.xTableCore.base.getTableByTableId(this.tableId);return e?{table:e}:null},r.getDeps=function(){return this.tableId},r.shouldUpdateSourceAfterDataChanged=function(e){var{mutations:t,affectedTables:r}=e;return t.some(e=>{var{tableId:t}=e;return t===this.tableId})||r.has(this.tableId)},r.shouldUpdateSourceAfterPermissionChanged=function(){return!1},t}(I),T=r(88511),_=r(925427),S=function(e){function t(e){var r;return(0,d._)(this,t),(r=(0,a._)(this,t,[e])).getPermissionStatus=(e,t)=>r.xTableCore.permissionService.getPermissionStatus(e,Object.assign(Object.assign({},t),{tableId:r.tableId,viewId:r.viewId})),r.getPermissionExplanation=(e,t)=>r.xTableCore.permissionService.getPermissionExplanation(e,Object.assign(Object.assign({},t),{tableId:r.tableId,viewId:r.viewId})),r.tableId=e.tableId,r.viewId=e.viewId,r}(0,l._)(t,e);var r=t.prototype;return r.getSource=function(){var e=this.getViewInstance();return e?{allFieldIds:e.getAllFieldIds(),allRecordIds:e.getAllRecordIds(),displayedRecordIds:(0,T._)(new Set(e.getDisplayedRecordIds())),visibleFieldIds:e.getVisibleFieldIds(),primaryFieldId:e.getPrimaryField().getId(),primaryFieldOptions:this.getPrimaryFieldOptions(e),params:{tableId:this.tableId,viewId:this.viewId},getPermissionStatus:this.getPermissionStatus,getPermissionExplanation:this.getPermissionExplanation}:null},r.getDeps=function(){return`${this.tableId}, ${this.viewId}`},r.shouldUpdateSourceAfterDataChanged=function(e){var{mutations:t,affectedTables:r}=e;return t.some(e=>{var{tableId:t}=e;return t===this.tableId})||r.has(this.tableId)},r.shouldUpdateSourceAfterPermissionChanged=function(){return!0},r.getViewInstance=function(){var e=this.xTableCore.base.getTableByTableId(this.tableId);if(!e)return null;var t=e.getViewByViewId(this.viewId);return t||null},r.getPrimaryFieldOptions=function(e){return e.getAllFields().filter(e=>(0,_.e)(e.getType())).map(e=>({id:e.getId(),type:e.getType(),title:e.getTitle(),isWecomExternal:e.isWecomExternal}))},t}(I);function w(e){return F((0,i.useMemo)(()=>new v({tableId:e.tableId,viewId:e.viewId,xTableCore:(0,n.vW)()}),[e.tableId,e.viewId]))}function E(e){var{tableId:t,viewId:r}=e||{};return F((0,i.useMemo)(()=>t&&r?new S({tableId:t,viewId:r,xTableCore:(0,n.vW)()}):void 0,[t,r]))}function M(e){return F((0,i.useMemo)(()=>new C({tableId:e.tableId,xTableCore:(0,n.vW)()}),[e.tableId]))}function R(e){return F((0,i.useMemo)(()=>new m({tableId:e.tableId,recordId:e.recordId,fieldId:e.fieldId,xTableCore:(0,n.vW)()}),[e.fieldId,e.recordId,e.tableId]))}function D(e){return F((0,i.useMemo)(()=>new y({tableId:e.tableId,viewId:e.viewId,xTableCore:(0,n.vW)()}),[e.tableId,e.viewId]))}function F(e){var[t,r]=(0,i.useState)(null);return(0,i.useEffect)(()=>{if(e)return r(e.getSource()),e.bindUpdate(e=>{r(e)}),()=>{e.dispose()}},[e]),{sourceValue:t}}}}]);
//# sourceMappingURL=2085.76a88b922221e215.js.map