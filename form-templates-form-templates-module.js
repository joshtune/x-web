(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-templates-form-templates-module"],{

/***/ "./src/app/features/admin/form-templates/form-template-list/form-template-list.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/features/admin/form-templates/form-template-list/form-template-list.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: FormTemplateListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTemplateListComponent", function() { return FormTemplateListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");




function FormTemplateListComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormTemplateListComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormTemplateListComponent_td_3_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const element_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.clickFormTemplate(element_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r10.Name, " ");
} }
function FormTemplateListComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "FormCategoryID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormTemplateListComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormTemplateListComponent_td_6_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const element_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.clickFormTemplate(element_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.FormCategoryID, " ");
} }
function FormTemplateListComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormTemplateListComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormTemplateListComponent_td_9_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const element_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.clickFormTemplate(element_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.ID, " ");
} }
function FormTemplateListComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 17);
} }
function FormTemplateListComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormTemplateListComponent_td_12_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const element_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.clickDeleteFormTemplate(element_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormTemplateListComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
} }
function FormTemplateListComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
} }
class FormTemplateListComponent {
    constructor() {
        this.displayedColumns = ['Name', 'FormCategoryID', 'ID', 'Actions'];
        this.formTemplates = [];
        this.formTemplateItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteFormTemplateItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    clickFormTemplate(record) {
        this.formTemplateItemClick.emit(record);
    }
    clickDeleteFormTemplate(record) {
        this.deleteFormTemplateItemClick.emit(record);
    }
}
FormTemplateListComponent.ɵfac = function FormTemplateListComponent_Factory(t) { return new (t || FormTemplateListComponent)(); };
FormTemplateListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormTemplateListComponent, selectors: [["xenon-form-template-list"]], inputs: { formTemplates: "formTemplates" }, outputs: { formTemplateItemClick: "formTemplateItemClick", deleteFormTemplateItemClick: "deleteFormTemplateItemClick" }, decls: 15, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z0", 3, "dataSource"], ["matColumnDef", "Name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "clickable", "mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "FormCategoryID"], ["mat-header-cell", "", "class", "text-right", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right clickable", 3, "click", 4, "matCellDef"], ["matColumnDef", "ID"], ["matColumnDef", "Actions"], ["width", "10", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "clickable", "width", "10", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "clickable", 3, "click"], ["mat-header-cell", "", 1, "text-right"], ["mat-cell", "", 1, "text-right", "clickable", 3, "click"], ["width", "10", "mat-header-cell", ""], ["width", "10", "mat-cell", "", 1, "clickable"], ["color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function FormTemplateListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormTemplateListComponent_th_2_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormTemplateListComponent_td_3_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormTemplateListComponent_th_5_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormTemplateListComponent_td_6_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormTemplateListComponent_th_8_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormTemplateListComponent_td_9_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FormTemplateListComponent_th_11_Template, 1, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FormTemplateListComponent_td_12_Template, 3, 0, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FormTemplateListComponent_tr_13_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FormTemplateListComponent_tr_14_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.formTemplates);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: ["mat-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%] {\n  padding: 0 0.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvd2ViL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vZm9ybS10ZW1wbGF0ZXMvZm9ybS10ZW1wbGF0ZS1saXN0L2Zvcm0tdGVtcGxhdGUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0VBTUUsaUJBQUE7QUFDRiIsImZpbGUiOiJhcHBzL3dlYi9zcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2Zvcm0tdGVtcGxhdGVzL2Zvcm0tdGVtcGxhdGUtbGlzdC9mb3JtLXRlbXBsYXRlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2VsbCxcbi5tYXQtY2VsbCxcbm1hdC1mb290ZXItY2VsbCxcbi5tYXQtZm9vdGVyLWNlbGwsXG5tYXQtaGVhZGVyLWNlbGwsXG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgcGFkZGluZzogMCAwLjRyZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormTemplateListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xenon-form-template-list',
                templateUrl: './form-template-list.component.html',
                styleUrls: ['./form-template-list.component.scss'],
            }]
    }], null, { formTemplates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formTemplateItemClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deleteFormTemplateItemClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/admin/form-templates/form-templates-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/features/admin/form-templates/form-templates-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: FormTemplatesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTemplatesRoutingModule", function() { return FormTemplatesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_templates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-templates.component */ "./src/app/features/admin/form-templates/form-templates.component.ts");





const routes = [
    {
        path: '',
        component: _form_templates_component__WEBPACK_IMPORTED_MODULE_2__["FormTemplatesComponent"],
    },
];
class FormTemplatesRoutingModule {
}
FormTemplatesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormTemplatesRoutingModule });
FormTemplatesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FormTemplatesRoutingModule_Factory(t) { return new (t || FormTemplatesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormTemplatesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormTemplatesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/admin/form-templates/form-templates.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/admin/form-templates/form-templates.component.ts ***!
  \***************************************************************************/
/*! exports provided: FormTemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTemplatesComponent", function() { return FormTemplatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _xenon_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xenon/api */ "../../libs/api/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _xenon_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @xenon/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _shared_admin_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/admin-base */ "./src/app/shared/admin-base.ts");
/* harmony import */ var _xenon_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @xenon/auth */ "../../libs/auth/src/index.ts");
/* harmony import */ var _xenon_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @xenon/ui */ "../../libs/ui/src/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _libs_ui_src_lib_components_ui_string_search_ui_string_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../libs/ui/src/lib/components/ui-string-search/ui-string-search.component */ "../../libs/ui/src/lib/components/ui-string-search/ui-string-search.component.ts");
/* harmony import */ var _form_template_list_form_template_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-template-list/form-template-list.component */ "./src/app/features/admin/form-templates/form-template-list/form-template-list.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



















class FormTemplatesComponent extends _shared_admin_base__WEBPACK_IMPORTED_MODULE_4__["AdminBase"] {
    constructor(uiPromptService, notificationService, appNavigationService, apiFormTemplateService, localStorageService) {
        super();
        this.uiPromptService = uiPromptService;
        this.notificationService = notificationService;
        this.appNavigationService = appNavigationService;
        this.apiFormTemplateService = apiFormTemplateService;
        this.localStorageService = localStorageService;
        this.formTemplates$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.columnsToSearchBy = ['Name', 'ID', 'FormCategoryID'];
        this.loggedInUser = this.localStorageService.getItem('user');
        this.searchPipe = new _xenon_utils__WEBPACK_IMPORTED_MODULE_3__["SearchPipe"]();
    }
    ngOnInit() {
        this.refreshData();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    searchChange(searchInput) {
        const filteredTemplates = this.searchPipe.transform(this.cachedTemplates, searchInput, this.columnsToSearchBy);
        this.formTemplates$.next(filteredTemplates);
    }
    openFormTemplateForm(formTemplate) {
        const append2Url = formTemplate ? `layout?action=edit&id=${formTemplate.ID}&formCategoryId=${formTemplate.FormCategoryID}` : '#/layout?action=create';
        this.appNavigationService.navigateToApp(_xenon_auth__WEBPACK_IMPORTED_MODULE_5__["AppList"].FormBuilder, append2Url);
    }
    deleteFormTemplate(formTemplate) {
        const sub = this.uiPromptService
            .prompt(`Are you sure you sure you want to delete "${formTemplate.Name}"?`)
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["flatMap"])((r) => {
            return r.ok ? this.apiFormTemplateService.deleteFormTemplate(formTemplate.ID) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ Status: 'empty' });
        }))
            .subscribe((m) => {
            if (m.Status === 'success') {
                this.notificationService.show(_xenon_ui__WEBPACK_IMPORTED_MODULE_6__["NotificationType"].success, 'Close', 'Deleted Form Template', 2500);
                setTimeout(() => {
                    this.refreshData();
                }, 2500);
            }
        });
        this.subscriptions.add(sub);
    }
    refreshData() {
        const sub = this.apiFormTemplateService.getFormTemplatesByOrg(this.loggedInUser.CurrentOrg.ID).subscribe((res) => {
            this.cachedTemplates = res;
            this.formTemplates$.next(res);
        });
        this.subscriptions.add(sub);
    }
}
FormTemplatesComponent.ɵfac = function FormTemplatesComponent_Factory(t) { return new (t || FormTemplatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_ui__WEBPACK_IMPORTED_MODULE_6__["UiPromptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_ui__WEBPACK_IMPORTED_MODULE_6__["UiNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_auth__WEBPACK_IMPORTED_MODULE_5__["AppNavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_api__WEBPACK_IMPORTED_MODULE_1__["ApiFormTemplateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_utils__WEBPACK_IMPORTED_MODULE_3__["UtilLocalStorageService"])); };
FormTemplatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormTemplatesComponent, selectors: [["xenon-form-templates"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 7, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "page-header"], [1, "title"], [3, "searchString", "label", "searchChange"], [1, "page-body"], [3, "formTemplates", "formTemplateItemClick", "deleteFormTemplateItemClick"], ["mat-fab", "", "mat-flat-button", "", "color", "primary", "aria-label", "Create new Form Template", 1, "add-button", 3, "click"]], template: function FormTemplatesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Form Templates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "xenon-ui-string-search", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchChange", function FormTemplatesComponent_Template_xenon_ui_string_search_searchChange_3_listener($event) { return ctx.searchChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "xenon-form-template-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formTemplateItemClick", function FormTemplatesComponent_Template_xenon_form_template_list_formTemplateItemClick_6_listener($event) { return ctx.openFormTemplateForm($event); })("deleteFormTemplateItemClick", function FormTemplatesComponent_Template_xenon_form_template_list_deleteFormTemplateItemClick_6_listener($event) { return ctx.deleteFormTemplate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormTemplatesComponent_Template_button_click_8_listener() { return ctx.openFormTemplateForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchString", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.search$))("label", "Search Templates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formTemplates", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, ctx.formTemplates$));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _libs_ui_src_lib_components_ui_string_search_ui_string_search_component__WEBPACK_IMPORTED_MODULE_9__["UiStringSearchComponent"], _form_template_list_form_template_list_component__WEBPACK_IMPORTED_MODULE_10__["FormTemplateListComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]], styles: [".add-button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvd2ViL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vZm9ybS10ZW1wbGF0ZXMvZm9ybS10ZW1wbGF0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJhcHBzL3dlYi9zcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2Zvcm0tdGVtcGxhdGVzL2Zvcm0tdGVtcGxhdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormTemplatesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xenon-form-templates',
                styleUrls: ['./form-templates.component.scss'],
                template: `
    <div class="page-header" fxLayout="row" fxLayoutAlign="space-between center">
      <h6 class="title">Form Templates</h6>
      <xenon-ui-string-search [searchString]="search$ | async" (searchChange)="searchChange($event)" [label]="'Search Templates'"> </xenon-ui-string-search>
    </div>

    <div class="page-body">
      <xenon-form-template-list
        [formTemplates]="formTemplates$ | async"
        (formTemplateItemClick)="openFormTemplateForm($event)"
        (deleteFormTemplateItemClick)="deleteFormTemplate($event)"
      ></xenon-form-template-list>
      <button mat-fab mat-flat-button (click)="openFormTemplateForm()" class="add-button" color="primary" aria-label="Create new Form Template">
        <mat-icon>add</mat-icon>
      </button>
    </div>
  `,
            }]
    }], function () { return [{ type: _xenon_ui__WEBPACK_IMPORTED_MODULE_6__["UiPromptService"] }, { type: _xenon_ui__WEBPACK_IMPORTED_MODULE_6__["UiNotificationService"] }, { type: _xenon_auth__WEBPACK_IMPORTED_MODULE_5__["AppNavigationService"] }, { type: _xenon_api__WEBPACK_IMPORTED_MODULE_1__["ApiFormTemplateService"] }, { type: _xenon_utils__WEBPACK_IMPORTED_MODULE_3__["UtilLocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/admin/form-templates/form-templates.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/admin/form-templates/form-templates.module.ts ***!
  \************************************************************************/
/*! exports provided: FormTemplatesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTemplatesModule", function() { return FormTemplatesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _form_templates_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-templates-routing.module */ "./src/app/features/admin/form-templates/form-templates-routing.module.ts");
/* harmony import */ var _form_templates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-templates.component */ "./src/app/features/admin/form-templates/form-templates.component.ts");
/* harmony import */ var _form_template_list_form_template_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-template-list/form-template-list.component */ "./src/app/features/admin/form-templates/form-template-list/form-template-list.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






class FormTemplatesModule {
}
FormTemplatesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormTemplatesModule });
FormTemplatesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FormTemplatesModule_Factory(t) { return new (t || FormTemplatesModule)(); }, imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _form_templates_routing_module__WEBPACK_IMPORTED_MODULE_1__["FormTemplatesRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormTemplatesModule, { declarations: [_form_templates_component__WEBPACK_IMPORTED_MODULE_2__["FormTemplatesComponent"], _form_template_list_form_template_list_component__WEBPACK_IMPORTED_MODULE_3__["FormTemplateListComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _form_templates_routing_module__WEBPACK_IMPORTED_MODULE_1__["FormTemplatesRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormTemplatesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_form_templates_component__WEBPACK_IMPORTED_MODULE_2__["FormTemplatesComponent"], _form_template_list_form_template_list_component__WEBPACK_IMPORTED_MODULE_3__["FormTemplateListComponent"]],
                imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _form_templates_routing_module__WEBPACK_IMPORTED_MODULE_1__["FormTemplatesRoutingModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=form-templates-form-templates-module.js.map