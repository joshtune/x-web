(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{CNG0:function(e,t,c){"use strict";c.r(t),c.d(t,"FormTemplatesModule",(function(){return $}));var a=c("sEIs"),o=c("Ecwh"),i=c("C05f"),r=c("ROBh"),l=c("SKbq"),m=c("gLp2"),n=c("wxdu"),s=c("jxfh"),p=c("cJ9h"),b=c("EM62"),u=c("qFEQ"),f=c("CBLR"),h=c("FlRo"),d=c("bFHC");function T(e,t){1&e&&(b.Ub(0,"th",13),b.Pc(1,"Name"),b.Tb())}function C(e,t){if(1&e){const e=b.Vb();b.Ub(0,"td",14),b.gc("click",(function(){b.Dc(e);const c=t.$implicit;return b.kc().clickFormTemplate(c)})),b.Pc(1),b.Tb()}if(2&e){const e=t.$implicit;b.Bb(1),b.Rc(" ",e.Name," ")}}function g(e,t){1&e&&(b.Ub(0,"th",15),b.Pc(1,"FormCategoryID"),b.Tb())}function k(e,t){if(1&e){const e=b.Vb();b.Ub(0,"td",16),b.gc("click",(function(){b.Dc(e);const c=t.$implicit;return b.kc().clickFormTemplate(c)})),b.Pc(1),b.Tb()}if(2&e){const e=t.$implicit;b.Bb(1),b.Rc(" ",e.FormCategoryID," ")}}function F(e,t){1&e&&(b.Ub(0,"th",15),b.Pc(1,"ID"),b.Tb())}function D(e,t){if(1&e){const e=b.Vb();b.Ub(0,"td",16),b.gc("click",(function(){b.Dc(e);const c=t.$implicit;return b.kc().clickFormTemplate(c)})),b.Pc(1),b.Tb()}if(2&e){const e=t.$implicit;b.Bb(1),b.Rc(" ",e.ID," ")}}function y(e,t){1&e&&b.Pb(0,"th",17)}function w(e,t){if(1&e){const e=b.Vb();b.Ub(0,"td",18),b.Ub(1,"mat-icon",19),b.gc("click",(function(){b.Dc(e);const c=t.$implicit;return b.kc().clickDeleteFormTemplate(c)})),b.Pc(2," delete "),b.Tb(),b.Tb()}}function I(e,t){1&e&&b.Pb(0,"tr",20)}function S(e,t){1&e&&b.Pb(0,"tr",21)}let v=(()=>{class e{constructor(){this.displayedColumns=["Name","FormCategoryID","ID","Actions"],this.formTemplates=[],this.formTemplateItemClick=new b.o,this.deleteFormTemplateItemClick=new b.o}clickFormTemplate(e){this.formTemplateItemClick.emit(e)}clickDeleteFormTemplate(e){this.deleteFormTemplateItemClick.emit(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=b.Ib({type:e,selectors:[["xenon-form-template-list"]],inputs:{formTemplates:"formTemplates"},outputs:{formTemplateItemClick:"formTemplateItemClick",deleteFormTemplateItemClick:"deleteFormTemplateItemClick"},decls:15,vars:3,consts:[["mat-table","",1,"mat-elevation-z0",3,"dataSource"],["matColumnDef","Name"],["mat-header-cell","",4,"matHeaderCellDef"],["class","clickable","mat-cell","",3,"click",4,"matCellDef"],["matColumnDef","FormCategoryID"],["mat-header-cell","","class","text-right",4,"matHeaderCellDef"],["mat-cell","","class","text-right clickable",3,"click",4,"matCellDef"],["matColumnDef","ID"],["matColumnDef","Actions"],["width","10","mat-header-cell","",4,"matHeaderCellDef"],["class","clickable","width","10","mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell","",1,"clickable",3,"click"],["mat-header-cell","",1,"text-right"],["mat-cell","",1,"text-right","clickable",3,"click"],["width","10","mat-header-cell",""],["width","10","mat-cell","",1,"clickable"],["color","primary",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(b.Ub(0,"table",0),b.Sb(1,1),b.Nc(2,T,2,0,"th",2),b.Nc(3,C,2,1,"td",3),b.Rb(),b.Sb(4,4),b.Nc(5,g,2,0,"th",5),b.Nc(6,k,2,1,"td",6),b.Rb(),b.Sb(7,7),b.Nc(8,F,2,0,"th",5),b.Nc(9,D,2,1,"td",6),b.Rb(),b.Sb(10,8),b.Nc(11,y,1,0,"th",9),b.Nc(12,w,3,0,"td",10),b.Rb(),b.Nc(13,I,1,0,"tr",11),b.Nc(14,S,1,0,"tr",12),b.Tb()),2&e&&(b.sc("dataSource",t.formTemplates),b.Bb(13),b.sc("matHeaderRowDef",t.displayedColumns),b.Bb(1),b.sc("matRowDefColumns",t.displayedColumns))},directives:[h.o,h.c,h.i,h.b,h.k,h.n,h.h,h.a,d.a,h.j,h.m],styles:[".mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%], mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%]{padding:0 .4rem}"]}),e})();var P=c("PBFl"),N=c("2kYt");const U=[{path:"",component:(()=>{class e extends m.a{constructor(e,t,c,a,o){super(),this.uiPromptService=e,this.notificationService=t,this.appNavigationService=c,this.apiFormTemplateService=a,this.localStorageService=o,this.formTemplates$=new i.a([]),this.search$=new i.a(null),this.columnsToSearchBy=["Name","ID","FormCategoryID"],this.loggedInUser=this.localStorageService.getItem("user"),this.searchPipe=new l.a}ngOnInit(){this.refreshData()}ngOnDestroy(){this.subscriptions.unsubscribe()}searchChange(e){const t=this.searchPipe.transform(this.cachedTemplates,e,this.columnsToSearchBy);this.formTemplates$.next(t)}openFormTemplateForm(e){this.appNavigationService.navigateToApp(n.a.FormBuilder,e?`layout?action=edit&id=${e.ID}&formCategoryId=${e.FormCategoryID}`:"#/layout?action=create")}deleteFormTemplate(e){const t=this.uiPromptService.prompt(`Are you sure you sure you want to delete "${e.Name}"?`).afterClosed().pipe(Object(p.a)(t=>t.ok?this.apiFormTemplateService.deleteFormTemplate(e.ID):Object(r.a)({Status:"empty"}))).subscribe(e=>{"success"===e.Status&&(this.notificationService.show(s.NotificationType.success,"Close","Deleted Form Template",2500),setTimeout(()=>{this.refreshData()},2500))});this.subscriptions.add(t)}refreshData(){const e=this.apiFormTemplateService.getFormTemplatesByOrg(this.loggedInUser.CurrentOrg.ID).subscribe(e=>{this.cachedTemplates=e,this.formTemplates$.next(e)});this.subscriptions.add(e)}}return e.\u0275fac=function(t){return new(t||e)(b.Ob(s.UiPromptService),b.Ob(s.UiNotificationService),b.Ob(n.b),b.Ob(o.ApiFormTemplateService),b.Ob(l.f))},e.\u0275cmp=b.Ib({type:e,selectors:[["xenon-form-templates"]],features:[b.yb],decls:11,vars:7,consts:[["fxLayout","row","fxLayoutAlign","space-between center",1,"page-header"],[1,"title"],[3,"searchString","label","searchChange"],[1,"page-body"],[3,"formTemplates","formTemplateItemClick","deleteFormTemplateItemClick"],["mat-fab","","mat-flat-button","","color","primary","aria-label","Create new Form Template",1,"add-button",3,"click"]],template:function(e,t){1&e&&(b.Ub(0,"div",0),b.Ub(1,"h6",1),b.Pc(2,"Form Templates"),b.Tb(),b.Ub(3,"xenon-ui-string-search",2),b.gc("searchChange",(function(e){return t.searchChange(e)})),b.lc(4,"async"),b.Tb(),b.Tb(),b.Ub(5,"div",3),b.Ub(6,"xenon-form-template-list",4),b.gc("formTemplateItemClick",(function(e){return t.openFormTemplateForm(e)}))("deleteFormTemplateItemClick",(function(e){return t.deleteFormTemplate(e)})),b.lc(7,"async"),b.Tb(),b.Ub(8,"button",5),b.gc("click",(function(){return t.openFormTemplateForm()})),b.Ub(9,"mat-icon"),b.Pc(10,"add"),b.Tb(),b.Tb(),b.Tb()),2&e&&(b.Bb(3),b.sc("searchString",b.mc(4,3,t.search$))("label","Search Templates"),b.Bb(3),b.sc("formTemplates",b.mc(7,5,t.formTemplates$)))},directives:[u.f,u.e,f.a,v,P.b,d.a],pipes:[N.b],styles:[".add-button[_ngcontent-%COMP%]{position:absolute;bottom:20px;right:20px;border-radius:30px}"]}),e})()}];let O=(()=>{class e{}return e.\u0275mod=b.Mb({type:e}),e.\u0275inj=b.Lb({factory:function(t){return new(t||e)},imports:[[a.f.forChild(U)],a.f]}),e})();var x=c("PCNd");let $=(()=>{class e{}return e.\u0275mod=b.Mb({type:e}),e.\u0275inj=b.Lb({factory:function(t){return new(t||e)},imports:[[x.a,O]]}),e})()}}]);