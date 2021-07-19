(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task-templates-task-templates-module"],{

/***/ "./src/app/features/admin/task-templates/task-template-list/task-template-list.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/features/admin/task-templates/task-template-list/task-template-list.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: TaskTemplateListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskTemplateListComponent", function() { return TaskTemplateListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");




function TaskTemplateListComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskTemplateListComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskTemplateListComponent_td_3_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const element_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.clickTaskTemplate(element_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r10.Name, " ");
} }
function TaskTemplateListComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskTemplateListComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskTemplateListComponent_td_6_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const element_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.clickTaskTemplate(element_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.TaskType === 1 ? "Complete Form" : "Complete Checklist", " ");
} }
function TaskTemplateListComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskTemplateListComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskTemplateListComponent_td_9_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const element_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.clickTaskTemplate(element_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.LocationID, " ");
} }
function TaskTemplateListComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 14);
} }
function TaskTemplateListComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskTemplateListComponent_td_12_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const element_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.clickDeleteTaskTemplate(element_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskTemplateListComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
} }
function TaskTemplateListComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
class TaskTemplateListComponent {
    constructor() {
        this.displayedColumns = ['Name', 'Type', 'Location', 'Actions'];
        this.taskTemplates = [];
        this.taskTemplateItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteTaskTemplateItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    clickTaskTemplate(record) {
        this.taskTemplateItemClick.emit(record);
    }
    clickDeleteTaskTemplate(record) {
        this.deleteTaskTemplateItemClick.emit(record);
    }
}
TaskTemplateListComponent.ɵfac = function TaskTemplateListComponent_Factory(t) { return new (t || TaskTemplateListComponent)(); };
TaskTemplateListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskTemplateListComponent, selectors: [["xenon-task-template-list"]], inputs: { taskTemplates: "taskTemplates" }, outputs: { taskTemplateItemClick: "taskTemplateItemClick", deleteTaskTemplateItemClick: "deleteTaskTemplateItemClick" }, decls: 15, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z0", "overflow-y-auto", 3, "dataSource"], ["matColumnDef", "Name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "clickable", "mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "Type"], ["mat-cell", "", "class", "clickable", 3, "click", 4, "matCellDef"], ["matColumnDef", "Location"], ["matColumnDef", "Actions"], ["width", "10", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "clickable", "width", "10", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "clickable", 3, "click"], ["width", "10", "mat-header-cell", ""], ["width", "10", "mat-cell", "", 1, "clickable"], ["color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function TaskTemplateListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TaskTemplateListComponent_th_2_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TaskTemplateListComponent_td_3_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TaskTemplateListComponent_th_5_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TaskTemplateListComponent_td_6_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TaskTemplateListComponent_th_8_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TaskTemplateListComponent_td_9_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TaskTemplateListComponent_th_11_Template, 1, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TaskTemplateListComponent_td_12_Template, 3, 0, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TaskTemplateListComponent_tr_13_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TaskTemplateListComponent_tr_14_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.taskTemplates);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: ["mat-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%] {\n  padding: 0 0.4rem;\n}\n\ntable[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvd2ViL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vdGFzay10ZW1wbGF0ZXMvdGFzay10ZW1wbGF0ZS1saXN0L3Rhc2stdGVtcGxhdGUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0VBTUUsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0YiLCJmaWxlIjoiYXBwcy93ZWIvc3JjL2FwcC9mZWF0dXJlcy9hZG1pbi90YXNrLXRlbXBsYXRlcy90YXNrLXRlbXBsYXRlLWxpc3QvdGFzay10ZW1wbGF0ZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNlbGwsXG4ubWF0LWNlbGwsXG5tYXQtZm9vdGVyLWNlbGwsXG4ubWF0LWZvb3Rlci1jZWxsLFxubWF0LWhlYWRlci1jZWxsLFxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIHBhZGRpbmc6IDAgMC40cmVtO1xufVxuXG50YWJsZSB7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskTemplateListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xenon-task-template-list',
                templateUrl: './task-template-list.component.html',
                styleUrls: ['./task-template-list.component.scss'],
            }]
    }], null, { taskTemplates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], taskTemplateItemClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deleteTaskTemplateItemClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/admin/task-templates/task-templates-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/features/admin/task-templates/task-templates-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: TaskTemplatesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskTemplatesRoutingModule", function() { return TaskTemplatesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _task_templates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-templates.component */ "./src/app/features/admin/task-templates/task-templates.component.ts");





const routes = [
    {
        path: '',
        component: _task_templates_component__WEBPACK_IMPORTED_MODULE_2__["TaskTemplatesComponent"],
    },
];
class TaskTemplatesRoutingModule {
}
TaskTemplatesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TaskTemplatesRoutingModule });
TaskTemplatesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TaskTemplatesRoutingModule_Factory(t) { return new (t || TaskTemplatesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TaskTemplatesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskTemplatesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/admin/task-templates/task-templates.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/admin/task-templates/task-templates.component.ts ***!
  \***************************************************************************/
/*! exports provided: TaskTemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskTemplatesComponent", function() { return TaskTemplatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _xenon_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xenon/api */ "../../libs/api/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _xenon_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @xenon/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _shared_admin_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/admin-base */ "./src/app/shared/admin-base.ts");
/* harmony import */ var _xenon_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @xenon/ui */ "../../libs/ui/src/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _libs_ui_src_lib_components_ui_string_search_ui_string_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../libs/ui/src/lib/components/ui-string-search/ui-string-search.component */ "../../libs/ui/src/lib/components/ui-string-search/ui-string-search.component.ts");
/* harmony import */ var _task_template_list_task_template_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task-template-list/task-template-list.component */ "./src/app/features/admin/task-templates/task-template-list/task-template-list.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



















class TaskTemplatesComponent extends _shared_admin_base__WEBPACK_IMPORTED_MODULE_4__["AdminBase"] {
    constructor(uiPromptService, notificationService, apiTaskTemplateService, localStorageService, dialog) {
        super();
        this.uiPromptService = uiPromptService;
        this.notificationService = notificationService;
        this.apiTaskTemplateService = apiTaskTemplateService;
        this.localStorageService = localStorageService;
        this.dialog = dialog;
        this.taskTemplates$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.columnsToSearchBy = ['Name', 'Type', 'Location', 'Actions'];
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
        this.taskTemplates$.next(filteredTemplates);
    }
    openTaskTemplateTask(taskTemplate) {
        this.apiTaskTemplateService.getTaskTemplateByTemplateID(taskTemplate.ID).subscribe((fullTemplate) => {
            this.openDialog(fullTemplate);
        });
    }
    createTaskTemplate() {
        if (!this.taskTemplates$.value) {
            this.taskTemplates$.next([]);
        }
        this.openDialog(null, true);
    }
    deleteTaskTemplate(taskTemplate) {
        const sub = this.uiPromptService
            .prompt(`Are you sure you sure you want to delete "${taskTemplate.Name}"?`)
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])((r) => {
            return r.ok ? this.apiTaskTemplateService.deleteTaskTemplate(taskTemplate.ID) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ Message: 'Delete not performed' });
        }))
            .subscribe((m) => {
            this.notificationService.show(_xenon_ui__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].success, 'Close', 'Deleted Task Template', 2500);
            setTimeout(() => {
                this.refreshData();
            }, 2500);
        });
        this.subscriptions.add(sub);
    }
    refreshData() {
        const sub = this.apiTaskTemplateService.getTaskTemplatesByOrgID(this.loggedInUser.CurrentOrg.ID).subscribe((res) => {
            this.cachedTemplates = res;
            this.taskTemplates$.next(res);
        });
        this.subscriptions.add(sub);
    }
    openDialog(fullTemplate, newTask = false) {
        const dialogRef = this.dialog.open(_xenon_ui__WEBPACK_IMPORTED_MODULE_5__["EditTaskTemplateComponent"], {
            data: {
                task: fullTemplate ? fullTemplate : 'new',
                newTask: newTask,
            },
            panelClass: 'full-page-dialog',
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (!result) {
                return;
            }
            if (newTask) {
                this.taskTemplates$.next(this.taskTemplates$.getValue().concat(result));
            }
            this.apiTaskTemplateService.updateTaskTemplateBatch(result).subscribe((newTemplate) => {
                this.notificationService.show(_xenon_ui__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].success, 'Action done', 'Task saved', 2500);
            });
        });
    }
}
TaskTemplatesComponent.ɵfac = function TaskTemplatesComponent_Factory(t) { return new (t || TaskTemplatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_ui__WEBPACK_IMPORTED_MODULE_5__["UiPromptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_ui__WEBPACK_IMPORTED_MODULE_5__["UiNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_api__WEBPACK_IMPORTED_MODULE_1__["ApiTaskTemplateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_utils__WEBPACK_IMPORTED_MODULE_3__["UtilLocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
TaskTemplatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskTemplatesComponent, selectors: [["xenon-task-templates"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 7, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "page-header"], [1, "title"], [3, "searchString", "label", "searchChange"], [1, "page-body"], [3, "taskTemplates", "taskTemplateItemClick", "deleteTaskTemplateItemClick"], ["mat-fab", "", "mat-flat-button", "", "color", "primary", "aria-label", "Create new Task Template", 1, "add-button", 3, "click"]], template: function TaskTemplatesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Task Templates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "xenon-ui-string-search", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchChange", function TaskTemplatesComponent_Template_xenon_ui_string_search_searchChange_3_listener($event) { return ctx.searchChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "xenon-task-template-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("taskTemplateItemClick", function TaskTemplatesComponent_Template_xenon_task_template_list_taskTemplateItemClick_6_listener($event) { return ctx.openTaskTemplateTask($event); })("deleteTaskTemplateItemClick", function TaskTemplatesComponent_Template_xenon_task_template_list_deleteTaskTemplateItemClick_6_listener($event) { return ctx.deleteTaskTemplate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskTemplatesComponent_Template_button_click_8_listener() { return ctx.createTaskTemplate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchString", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.search$))("label", "Search Templates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("taskTemplates", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, ctx.taskTemplates$));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _libs_ui_src_lib_components_ui_string_search_ui_string_search_component__WEBPACK_IMPORTED_MODULE_9__["UiStringSearchComponent"], _task_template_list_task_template_list_component__WEBPACK_IMPORTED_MODULE_10__["TaskTemplateListComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]], styles: [".add-button[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvd2ViL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vdGFzay10ZW1wbGF0ZXMvdGFzay10ZW1wbGF0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6ImFwcHMvd2ViL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vdGFzay10ZW1wbGF0ZXMvdGFzay10ZW1wbGF0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskTemplatesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xenon-task-templates',
                styleUrls: ['./task-templates.component.scss'],
                template: `
    <div class="page-header" fxLayout="row" fxLayoutAlign="space-between center">
      <h6 class="title">Task Templates</h6>
      <xenon-ui-string-search [searchString]="search$ | async" (searchChange)="searchChange($event)" [label]="'Search Templates'"> </xenon-ui-string-search>
    </div>

    <div class="page-body">
      <xenon-task-template-list
        [taskTemplates]="taskTemplates$ | async"
        (taskTemplateItemClick)="openTaskTemplateTask($event)"
        (deleteTaskTemplateItemClick)="deleteTaskTemplate($event)"
      ></xenon-task-template-list>
    </div>
    <button mat-fab mat-flat-button (click)="createTaskTemplate()" class="add-button" color="primary" aria-label="Create new Task Template">
      <mat-icon>add</mat-icon>
    </button>
  `,
            }]
    }], function () { return [{ type: _xenon_ui__WEBPACK_IMPORTED_MODULE_5__["UiPromptService"] }, { type: _xenon_ui__WEBPACK_IMPORTED_MODULE_5__["UiNotificationService"] }, { type: _xenon_api__WEBPACK_IMPORTED_MODULE_1__["ApiTaskTemplateService"] }, { type: _xenon_utils__WEBPACK_IMPORTED_MODULE_3__["UtilLocalStorageService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/admin/task-templates/task-templates.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/admin/task-templates/task-templates.module.ts ***!
  \************************************************************************/
/*! exports provided: TaskTemplatesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskTemplatesModule", function() { return TaskTemplatesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _task_templates_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-templates-routing.module */ "./src/app/features/admin/task-templates/task-templates-routing.module.ts");
/* harmony import */ var _task_templates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-templates.component */ "./src/app/features/admin/task-templates/task-templates.component.ts");
/* harmony import */ var _task_template_list_task_template_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-template-list/task-template-list.component */ "./src/app/features/admin/task-templates/task-template-list/task-template-list.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _xenon_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @xenon/ui */ "../../libs/ui/src/index.ts");







class TaskTemplatesModule {
}
TaskTemplatesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TaskTemplatesModule });
TaskTemplatesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TaskTemplatesModule_Factory(t) { return new (t || TaskTemplatesModule)(); }, imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _task_templates_routing_module__WEBPACK_IMPORTED_MODULE_1__["TaskTemplatesRoutingModule"], _xenon_ui__WEBPACK_IMPORTED_MODULE_5__["UiTaskTemplatesModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TaskTemplatesModule, { declarations: [_task_templates_component__WEBPACK_IMPORTED_MODULE_2__["TaskTemplatesComponent"], _task_template_list_task_template_list_component__WEBPACK_IMPORTED_MODULE_3__["TaskTemplateListComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _task_templates_routing_module__WEBPACK_IMPORTED_MODULE_1__["TaskTemplatesRoutingModule"], _xenon_ui__WEBPACK_IMPORTED_MODULE_5__["UiTaskTemplatesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskTemplatesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_task_templates_component__WEBPACK_IMPORTED_MODULE_2__["TaskTemplatesComponent"], _task_template_list_task_template_list_component__WEBPACK_IMPORTED_MODULE_3__["TaskTemplateListComponent"]],
                imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _task_templates_routing_module__WEBPACK_IMPORTED_MODULE_1__["TaskTemplatesRoutingModule"], _xenon_ui__WEBPACK_IMPORTED_MODULE_5__["UiTaskTemplatesModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=task-templates-task-templates-module.js.map