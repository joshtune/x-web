(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{TDaj:function(o,r,t){"use strict";t.r(r),t.d(r,"SettingsModule",(function(){return M}));var e=t("2kYt"),n=t("sEIs"),i=t("ZTXN"),a=t("xsw0"),c=t("Ecwh"),s=t("kuMc"),l=t("YtkY"),d=t("cJ9h"),b=t("EM62"),g=t("bFHC"),m=t("29Wa"),p=t("Cd2c"),u=t("nIj0"),f=t("B4gZ");const h=[{path:"",component:(()=>{class o{constructor(o,r,t){this.formBuilderService=o,this.apiRoleService=r,this.apiFormService=t,this.formTemplateName="Form_Template_Name",this.formPluralName="Plural_Name",this.formTemplateDesc="Description",this.hasRoles=!1,this.permissionsList=["Create","View","Edit","Delete"],this.unsubscribe=new i.a}ngOnInit(){this.getRoles()}ngOnDestroy(){this.unsubscribe.next(),this.unsubscribe.complete()}getRoles(){this.formBuilderService.currentForm.pipe(Object(s.a)(this.unsubscribe),Object(l.a)(o=>(this.currentForm=o,o.OrgID)),Object(d.a)(o=>this.apiRoleService.getRolesByOrg(o))).subscribe(o=>{this.rolesList=o.OrgRoleList,this.rolesList&&this.rolesList.length>0&&(this.hasRoles=!0)})}compareFn(o,r){return o&&r?o.ID===r.ID:o===r}}return o.\u0275fac=function(r){return new(r||o)(b.Ob(a.b),b.Ob(c.ApiRoleService),b.Ob(c.ApiFormService))},o.\u0275cmp=b.Ib({type:o,selectors:[["xenon-settings"]],decls:25,vars:7,consts:[[1,"settings-container","background-gradient"],[1,"sidebar"],[1,"left-buttons"],[1,"main-form-container","text-center"],[1,"main-form","background-white"],[1,"task-field","border-bottom","text-left"],[1,"icon-row"],[3,"floatLabel"],["matInput","","placeholder","Form_Template_Name",3,"ngModel","ngModelChange"],["matInput","","placeholder","Plural_Name",3,"ngModel","ngModelChange"],["matInput","","placeholder","Description",3,"ngModel","ngModelChange"],[3,"selectedTask","newRoleList"]],template:function(o,r){1&o&&(b.Ub(0,"div",0),b.Ub(1,"div",1),b.Pb(2,"div",2),b.Tb(),b.Ub(3,"div",3),b.Ub(4,"div",4),b.Ub(5,"div",5),b.Ub(6,"h6"),b.Pc(7,"Template"),b.Tb(),b.Ub(8,"div",6),b.Ub(9,"mat-icon"),b.Pc(10," content_paste "),b.Tb(),b.Ub(11,"mat-form-field",7),b.Ub(12,"input",8),b.gc("ngModelChange",(function(o){return r.currentForm.Name=o})),b.Tb(),b.Tb(),b.Ub(13,"mat-form-field",7),b.Ub(14,"input",9),b.gc("ngModelChange",(function(o){return r.currentForm.NamePlural=o})),b.Tb(),b.Tb(),b.Pb(15,"div"),b.Tb(),b.Ub(16,"div",6),b.Ub(17,"mat-icon"),b.Pc(18,"description"),b.Tb(),b.Ub(19,"mat-form-field",7),b.Ub(20,"input",10),b.gc("ngModelChange",(function(o){return r.currentForm.Description=o})),b.Tb(),b.Tb(),b.Pb(21,"div"),b.Tb(),b.Tb(),b.Ub(22,"div",5),b.Ub(23,"xenon-ui-fields-permissions",11),b.gc("newRoleList",(function(o){return r.currentForm.AssignedRoles=o})),b.Tb(),b.Tb(),b.Tb(),b.Tb(),b.Pb(24,"div",1),b.Tb()),2&o&&(b.Bb(11),b.sc("floatLabel","never"),b.Bb(1),b.sc("ngModel",r.currentForm.Name),b.Bb(1),b.sc("floatLabel","never"),b.Bb(1),b.sc("ngModel",r.currentForm.NamePlural),b.Bb(5),b.sc("floatLabel","never"),b.Bb(1),b.sc("ngModel",r.currentForm.Description),b.Bb(3),b.sc("selectedTask",r.currentForm))},directives:[g.a,m.c,p.b,u.d,u.t,u.w,f.a],styles:[".color-red{color:#e60404!important}.color-red-dark{color:#ad1b1b!important}.color-red-light{color:#ffcdd2!important}.color-gray{color:#586069!important}.color-gray-light{color:#f7f8f8!important}.color-white{color:#fff!important}.color-black{color:#000!important}.color-border-light{color:#e0e0e0!important}.color-primary{color:#048be6!important}.color-primary-dark{color:#005797!important}.color-primary-light{color:#def2fe!important}.color-accent{color:#037dd1!important}.background-red{background-color:#e60404!important}.background-red-dark{background-color:#ad1b1b!important}.background-red-light{background-color:#ffcdd2!important}.background-gray{background-color:#586069!important}.background-gray-light{background-color:#f7f8f8!important}.background-white{background-color:#fff!important}.background-black{background-color:#000!important}.background-border-light{background-color:#e0e0e0!important}.background-primary{background-color:#048be6!important}.background-primary-dark{background-color:#005797!important}.background-primary-light{background-color:#def2fe!important}.background-accent{background-color:#037dd1!important}.background-gradient{background:linear-gradient(180deg,#fff,#def2fe 78.12%,#e6f5fe)!important}xenon-settings .settings-container{display:flex;height:100%}xenon-settings .main-form-container{flex-grow:1;padding:24px}xenon-settings .main-form-container .main-form{box-shadow:0 0 2px rgba(0,0,0,.14),0 2px 2px rgba(0,0,0,.12),0 1px 3px rgba(0,0,0,.2);border-radius:12px;margin-bottom:20px}xenon-settings .main-form-container .main-form .task-field{padding:20px}xenon-settings .sidebar{width:260px}xenon-settings .sidebar .left-buttons{padding:20px}xenon-settings .sidebar button{margin-bottom:10px;display:block}xenon-settings .icon-row{display:flex;margin-top:10px}xenon-settings .icon-row>*{flex:1;margin-right:20px}xenon-settings .icon-row>:first-child{width:20px;flex:none}xenon-settings .icon-row>:last-child{margin-right:0;width:30px;flex:none}xenon-settings .icon-row mat-icon{width:20px;height:20px;margin-top:15px}xenon-settings .add-button{font-size:14px;background-color:transparent;width:100%;text-transform:uppercase;border:0;border-radius:5px}xenon-settings .add-button mat-icon{height:15px;width:15px;margin-right:20px}xenon-settings .add-button mat-icon svg{vertical-align:top!important}xenon-settings .info-label{color:rgba(0,0,0,.6);margin-bottom:5px}"],encapsulation:2}),o})()}];let x=(()=>{class o{}return o.\u0275mod=b.Mb({type:o}),o.\u0275inj=b.Lb({factory:function(r){return new(r||o)},imports:[[n.f.forChild(h)],n.f]}),o})();var k=t("PBFl"),w=t("OZ4H"),v=t("gcUQ"),T=t("mFH5"),y=t("F1o0"),U=t("R7+U"),F=t("jxfh");let M=(()=>{class o{}return o.\u0275mod=b.Mb({type:o}),o.\u0275inj=b.Lb({factory:function(r){return new(r||o)},imports:[[e.c,x,g.b,k.c,w.g,p.c,u.n,v.m,T.n,y.c,U.b,F.UiFieldsModule]]}),o})()}}]);