(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-admin-form-builder-tasks-tasks-module"],{

/***/ "./src/app/features/admin/form-builder/tasks/tasks-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/admin/form-builder/tasks/tasks-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: TasksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksRoutingModule", function() { return TasksRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tasks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.component */ "./src/app/features/admin/form-builder/tasks/tasks.component.ts");





const routes = [{ path: '', component: _tasks_component__WEBPACK_IMPORTED_MODULE_2__["TasksComponent"] }];
class TasksRoutingModule {
}
TasksRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TasksRoutingModule });
TasksRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TasksRoutingModule_Factory(t) { return new (t || TasksRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TasksRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasksRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/admin/form-builder/tasks/tasks.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/admin/form-builder/tasks/tasks.component.ts ***!
  \**********************************************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _xenon_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @xenon/api */ "../../libs/api/src/index.ts");
/* harmony import */ var _xenon_layouts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @xenon/layouts */ "../../libs/layouts/src/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _xenon_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @xenon/ui */ "../../libs/ui/src/index.ts");
/* harmony import */ var _xenon_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @xenon/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");




















function TasksComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Recurring Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TasksComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "event");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", task_r8.Name, " ");
} }
function TasksComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TasksComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", task_r9.Description, " ");
} }
function TasksComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 14);
} }
function TasksComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasksComponent_td_9_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const task_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.removeTask(task_r10, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TasksComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
} }
function TasksComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasksComponent_tr_11_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const row_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.editTask(row_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TasksComponent {
    constructor(dialog, formBuilderService, apiTaskService, notificationService, localStorage) {
        this.dialog = dialog;
        this.formBuilderService = formBuilderService;
        this.apiTaskService = apiTaskService;
        this.notificationService = notificationService;
        this.localStorage = localStorage;
        //TODO Remove this and use live data
        this.taskList = [];
        this.displayedColumns = [
            'name',
            // 'organizations',
            // 'repetition',
            // 'time',
            'desc',
            // 'copies',
            'remove',
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.taskList);
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    ngOnInit() {
        this.formBuilderService.currentForm.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe)).subscribe((form) => {
            this.currentForm = form;
        });
        this.formBuilderService.currentForm
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((form) => {
            this.currentForm = form;
            const formId = this.currentForm.ID;
            return formId;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])((formId) => this.apiTaskService.getTasksByFormTemplate(formId)))
            .subscribe((response) => {
            this.taskList = response.TaskTemplateList;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.taskList);
        });
        const savedUser = this.localStorage.getItem('user').CurrentUser;
        this.user = savedUser;
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    addTask() {
        if (!this.taskList) {
            this.taskList = [];
        }
        const taskCount = this.taskList.length + 1;
        const newTask = {
            OrgID: this.currentForm.OrgID,
            LocationID: this.currentForm.LocationID,
            TaskType: 1,
            TaskTypeID: this.currentForm.ID,
            Name: 'New Task ' + taskCount,
            Description: '',
            CreatedBy: this.user.ID,
        };
        this.apiTaskService.addTaskTemplate(newTask).subscribe((response) => {
            newTask.ID = response.TaskTemplateId;
            this.taskList.push(newTask);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.taskList);
            this.showTaskNotification();
        });
        //TODO add error handling to all these service calls.
    }
    editTask(task) {
        console.log(task);
        const dialogRef = this.dialog.open(_xenon_ui__WEBPACK_IMPORTED_MODULE_8__["EditTaskTemplateComponent"], {
            data: {
                task: task,
                forceTemplate: 'form',
            },
            panelClass: 'full-page-dialog',
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.apiTaskService.updateTaskTemplate(result).subscribe((_) => {
                this.showTaskNotification();
            });
        });
    }
    removeTask(task, event) {
        event.stopPropagation();
        this.apiTaskService.deleteTaskTemplate(task.ID).subscribe((_) => {
            const index = this.taskList.indexOf(task);
            if (index > -1) {
                this.taskList.splice(index, 1);
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.taskList);
            }
        });
    }
    showTaskNotification() {
        this.notificationService.show(_xenon_ui__WEBPACK_IMPORTED_MODULE_8__["NotificationType"].success, 'Action done', 'Task saved', 2500);
    }
}
TasksComponent.ɵfac = function TasksComponent_Factory(t) { return new (t || TasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_layouts__WEBPACK_IMPORTED_MODULE_5__["FormBuilderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_api__WEBPACK_IMPORTED_MODULE_4__["ApiTaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_ui__WEBPACK_IMPORTED_MODULE_8__["UiNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_utils__WEBPACK_IMPORTED_MODULE_9__["UtilLocalStorageService"])); };
TasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TasksComponent, selectors: [["xenon-tasks"]], viewQuery: function TasksComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 17, vars: 3, consts: [["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "name"], ["class", "text-body1", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "text-body1", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "desc"], ["matColumnDef", "remove"], ["class", "text-body1", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "add-button-container"], ["mat-raised-button", "", "aria-label", "Add Task", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", 1, "text-body1"], ["mat-cell", "", 1, "text-body1"], [1, "task-type-icon", "color-primary"], ["mat-header-cell", "", 1, "text-body1"], ["mat-button", "", "aria-label", "Remove Task", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function TasksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TasksComponent_th_2_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TasksComponent_td_3_Template, 4, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TasksComponent_th_5_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TasksComponent_td_6_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TasksComponent_th_8_Template, 1, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TasksComponent_td_9_Template, 4, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TasksComponent_tr_10_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TasksComponent_tr_11_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasksComponent_Template_button_click_13_listener() { return ctx.addTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Create Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: [".color-red[_ngcontent-%COMP%] {\n  color: #e60404 !important;\n}\n\n.color-red-dark[_ngcontent-%COMP%] {\n  color: #ad1b1b !important;\n}\n\n.color-red-light[_ngcontent-%COMP%] {\n  color: #ffcdd2 !important;\n}\n\n.color-gray[_ngcontent-%COMP%] {\n  color: #586069 !important;\n}\n\n.color-gray-light[_ngcontent-%COMP%] {\n  color: #f7f8f8 !important;\n}\n\n.color-white[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\n\n.color-black[_ngcontent-%COMP%] {\n  color: #000000 !important;\n}\n\n.color-border-light[_ngcontent-%COMP%] {\n  color: #e0e0e0 !important;\n}\n\n.color-primary[_ngcontent-%COMP%] {\n  color: #048be6 !important;\n}\n\n.color-primary-dark[_ngcontent-%COMP%] {\n  color: #005797 !important;\n}\n\n.color-primary-light[_ngcontent-%COMP%] {\n  color: #def2fe !important;\n}\n\n.color-accent[_ngcontent-%COMP%] {\n  color: #037dd1 !important;\n}\n\n.background-red[_ngcontent-%COMP%] {\n  background-color: #e60404 !important;\n}\n\n.background-red-dark[_ngcontent-%COMP%] {\n  background-color: #ad1b1b !important;\n}\n\n.background-red-light[_ngcontent-%COMP%] {\n  background-color: #ffcdd2 !important;\n}\n\n.background-gray[_ngcontent-%COMP%] {\n  background-color: #586069 !important;\n}\n\n.background-gray-light[_ngcontent-%COMP%] {\n  background-color: #f7f8f8 !important;\n}\n\n.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n}\n\n.background-black[_ngcontent-%COMP%] {\n  background-color: #000000 !important;\n}\n\n.background-border-light[_ngcontent-%COMP%] {\n  background-color: #e0e0e0 !important;\n}\n\n.background-primary[_ngcontent-%COMP%] {\n  background-color: #048be6 !important;\n}\n\n.background-primary-dark[_ngcontent-%COMP%] {\n  background-color: #005797 !important;\n}\n\n.background-primary-light[_ngcontent-%COMP%] {\n  background-color: #def2fe !important;\n}\n\n.background-accent[_ngcontent-%COMP%] {\n  background-color: #037dd1 !important;\n}\n\n.background-gradient[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #ffffff 0%, #def2fe 78.12%, #e6f5fe 100%) !important;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n\nth[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #a3a9b0;\n}\n\ntr[_ngcontent-%COMP%]   mat-button[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\ntr[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  vertical-align: middle;\n  color: #ffffff;\n  width: 20px;\n  height: 20px;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #f0f1f2;\n}\n\ntr[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  color: #586069;\n}\n\n.task-type-icon[_ngcontent-%COMP%] {\n  width: 15px !important;\n  height: 15px !important;\n  margin-right: 15px;\n}\n\n.add-button-container[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n}\n\n.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 32px;\n  margin: 5px;\n}\n\n.task-value[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n\n.mat-column-edit[_ngcontent-%COMP%], .mat-column-remove[_ngcontent-%COMP%] {\n  width: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC1zdHlsZS1oZWxwZXJzL2NvbG9ycy5zY3NzIiwiYXBwcy93ZWIvc3JjL2FwcC9mZWF0dXJlcy9hZG1pbi9mb3JtLWJ1aWxkZXIvdGFza3MvdGFza3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJBO0VBQ0UseUJBQUE7QUMzQkY7O0FENkJBO0VBQ0UseUJBQUE7QUMxQkY7O0FENEJBO0VBQ0UseUJBQUE7QUN6QkY7O0FEMkJBO0VBQ0UseUJBQUE7QUN4QkY7O0FEMEJBO0VBQ0UseUJBQUE7QUN2QkY7O0FEeUJBO0VBQ0UseUJBQUE7QUN0QkY7O0FEd0JBO0VBQ0UseUJBQUE7QUNyQkY7O0FEdUJBO0VBQ0UseUJBQUE7QUNwQkY7O0FEc0JBO0VBQ0UseUJBQUE7QUNuQkY7O0FEcUJBO0VBQ0UseUJBQUE7QUNsQkY7O0FEb0JBO0VBQ0UseUJBQUE7QUNqQkY7O0FEbUJBO0VBQ0UseUJBQUE7QUNoQkY7O0FEbUJBO0VBQ0Usb0NBQUE7QUNoQkY7O0FEa0JBO0VBQ0Usb0NBQUE7QUNmRjs7QURpQkE7RUFDRSxvQ0FBQTtBQ2RGOztBRGdCQTtFQUNFLG9DQUFBO0FDYkY7O0FEZUE7RUFDRSxvQ0FBQTtBQ1pGOztBRGNBO0VBQ0Usb0NBQUE7QUNYRjs7QURhQTtFQUNFLG9DQUFBO0FDVkY7O0FEWUE7RUFDRSxvQ0FBQTtBQ1RGOztBRFdBO0VBQ0Usb0NBQUE7QUNSRjs7QURVQTtFQUNFLG9DQUFBO0FDUEY7O0FEU0E7RUFDRSxvQ0FBQTtBQ05GOztBRFFBO0VBQ0Usb0NBQUE7QUNMRjs7QURRQTtFQUNFLHdGQUFBO0FDTEY7O0FBaEdBO0VBQ0UsV0FBQTtBQW1HRjs7QUFoR0E7RUFDRSxZQUFBO0FBbUdGOztBQWhHQTtFQUNFLGdDQUFBO0FBbUdGOztBQS9GRTtFQUNFLGNER1U7QUMrRmQ7O0FBaEdFO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNERlU7RUNHVixXQUFBO0VBQ0EsWUFBQTtBQWtHSjs7QUFoR0U7RUFDRSx5QkR2QmM7QUN5SGxCOztBQWpHSTtFQUNFLGNEWE87QUM4R2I7O0FBOUZBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBaUdGOztBQTlGQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFpR0Y7O0FBL0ZFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBaUdKOztBQTlGQTtFQUNFLGtCQUFBO0FBaUdGOztBQTlGQTs7RUFFRSxXQUFBO0FBaUdGIiwiZmlsZSI6ImFwcHMvd2ViL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vZm9ybS1idWlsZGVyL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVG9vIHNwZWNpZmljIHdlIG5lZWQgdG8gZWl0aGVyIHJlbmFtZSB0aGVtIG9yIHJlbW92ZSB0aGVtLlxuJGdyZXktdGV4dDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuJHNlbGVjdGVkLWZpZWxkLWJvcmRlcjogI2U2ZjVmZTtcbiR0YWJsZS1yb3ctaG92ZXI6ICNmMGYxZjI7XG5cbkBtaXhpbiBmb3JtLWJ1aWxkZXItbWF0LWljb24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi8vXG5cbiRib3JkZXItZ3JheTogI2Q1ZDhkYjtcbiRjb2xvci1yZWQ6ICNlNjA0MDQ7XG4kY29sb3ItcmVkLWRhcms6ICNhZDFiMWI7XG4kY29sb3ItcmVkLWxpZ2h0OiAjZmZjZGQyO1xuJGNvbG9yLWdyYXk6ICM1ODYwNjk7XG4kY29sb3ItZ3JheS1saWdodDogI2Y3ZjhmODtcbiRjb2xvci13aGl0ZTogI2ZmZmZmZjtcbiRjb2xvci1ibGFjazogIzAwMDAwMDtcbiRjb2xvci1wcmltYXJ5OiAjMDQ4YmU2O1xuJGNvbG9yLXByaW1hcnktZGFyazogIzAwNTc5NztcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiAjZGVmMmZlO1xuJGNvbG9yLWFjY2VudDogIzAzN2RkMTtcbiRjb2xvci1ib3JkZXItbGlnaHQ6ICNlMGUwZTA7XG4kY29sb3ItZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICRjb2xvci13aGl0ZSAwJSwgJGNvbG9yLXByaW1hcnktbGlnaHQgNzguMTIlLCAkc2VsZWN0ZWQtZmllbGQtYm9yZGVyIDEwMCUpO1xuXG4uY29sb3ItcmVkIHtcbiAgY29sb3I6ICRjb2xvci1yZWQgIWltcG9ydGFudDtcbn1cbi5jb2xvci1yZWQtZGFyayB7XG4gIGNvbG9yOiAkY29sb3ItcmVkLWRhcmsgIWltcG9ydGFudDtcbn1cbi5jb2xvci1yZWQtbGlnaHQge1xuICBjb2xvcjogJGNvbG9yLXJlZC1saWdodCAhaW1wb3J0YW50O1xufVxuLmNvbG9yLWdyYXkge1xuICBjb2xvcjogJGNvbG9yLWdyYXkgIWltcG9ydGFudDtcbn1cbi5jb2xvci1ncmF5LWxpZ2h0IHtcbiAgY29sb3I6ICRjb2xvci1ncmF5LWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uY29sb3Itd2hpdGUge1xuICBjb2xvcjogJGNvbG9yLXdoaXRlICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItYmxhY2sge1xuICBjb2xvcjogJGNvbG9yLWJsYWNrICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItYm9yZGVyLWxpZ2h0IHtcbiAgY29sb3I6ICRjb2xvci1ib3JkZXItbGlnaHQgIWltcG9ydGFudDtcbn1cbi5jb2xvci1wcmltYXJ5IHtcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5ICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItcHJpbWFyeS1kYXJrIHtcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5LWRhcmsgIWltcG9ydGFudDtcbn1cbi5jb2xvci1wcmltYXJ5LWxpZ2h0IHtcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5LWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItYWNjZW50IHtcbiAgY29sb3I6ICRjb2xvci1hY2NlbnQgIWltcG9ydGFudDtcbn1cblxuLmJhY2tncm91bmQtcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZCAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtcmVkLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLWRhcmsgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLXJlZC1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtbGlnaHQgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLWdyYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheSAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtZ3JheS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5LWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZSAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2sgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLWJvcmRlci1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ib3JkZXItbGlnaHQgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeSAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtcHJpbWFyeS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnktZGFyayAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtcHJpbWFyeS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5LWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1hY2NlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYWNjZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrZ3JvdW5kLWdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogJGNvbG9yLWdyYWRpZW50ICFpbXBvcnRhbnQ7XG59XG4iLCJAaW1wb3J0ICdnbG9iYWwtc3R5bGUtaGVscGVycy9jb2xvcnMnO1xuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG50aCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTNhOWIwO1xufVxuXG50ciB7XG4gIG1hdC1idXR0b24ge1xuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gIH1cbiAgbWF0LWljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRhYmxlLXJvdy1ob3ZlcjtcbiAgICBtYXQtaWNvbiB7XG4gICAgICBjb2xvcjogJGNvbG9yLWdyYXk7XG4gICAgfVxuICB9XG59XG5cbi50YXNrLXR5cGUtaWNvbiB7XG4gIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5hZGQtYnV0dG9uLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMjBweDtcblxuICBidXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cbn1cbi50YXNrLXZhbHVlIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4ubWF0LWNvbHVtbi1lZGl0LFxuLm1hdC1jb2x1bW4tcmVtb3ZlIHtcbiAgd2lkdGg6IDY0cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xenon-tasks',
                templateUrl: './tasks.component.html',
                styleUrls: ['./tasks.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _xenon_layouts__WEBPACK_IMPORTED_MODULE_5__["FormBuilderService"] }, { type: _xenon_api__WEBPACK_IMPORTED_MODULE_4__["ApiTaskService"] }, { type: _xenon_ui__WEBPACK_IMPORTED_MODULE_8__["UiNotificationService"] }, { type: _xenon_utils__WEBPACK_IMPORTED_MODULE_9__["UtilLocalStorageService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "./src/app/features/admin/form-builder/tasks/tasks.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/admin/form-builder/tasks/tasks.module.ts ***!
  \*******************************************************************/
/*! exports provided: TasksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksModule", function() { return TasksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tasks_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks-routing.module */ "./src/app/features/admin/form-builder/tasks/tasks-routing.module.ts");
/* harmony import */ var _tasks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks.component */ "./src/app/features/admin/form-builder/tasks/tasks.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _xenon_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @xenon/ui */ "../../libs/ui/src/index.ts");

















class TasksModule {
}
TasksModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TasksModule });
TasksModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TasksModule_Factory(t) { return new (t || TasksModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _tasks_routing_module__WEBPACK_IMPORTED_MODULE_2__["TasksRoutingModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _xenon_ui__WEBPACK_IMPORTED_MODULE_15__["UiTaskTemplatesModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TasksModule, { declarations: [_tasks_component__WEBPACK_IMPORTED_MODULE_3__["TasksComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _tasks_routing_module__WEBPACK_IMPORTED_MODULE_2__["TasksRoutingModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _xenon_ui__WEBPACK_IMPORTED_MODULE_15__["UiTaskTemplatesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasksModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_tasks_component__WEBPACK_IMPORTED_MODULE_3__["TasksComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _tasks_routing_module__WEBPACK_IMPORTED_MODULE_2__["TasksRoutingModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                    _xenon_ui__WEBPACK_IMPORTED_MODULE_15__["UiTaskTemplatesModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=features-admin-form-builder-tasks-tasks-module.js.map