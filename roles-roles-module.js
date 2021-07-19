(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roles-roles-module"],{

/***/ "./src/app/features/admin/roles/role-list/role-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/admin/roles/role-list/role-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: RoleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListComponent", function() { return RoleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");




function RoleListComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoleListComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoleListComponent_td_3_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const element_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.clickRole(element_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r8.Name, " ");
} }
function RoleListComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Role ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoleListComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoleListComponent_td_6_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const element_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.clickRole(element_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r11.ID, " ");
} }
function RoleListComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 16);
} }
function RoleListComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoleListComponent_td_9_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const element_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.clickDeleteRole(element_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoleListComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
function RoleListComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
} }
class RoleListComponent {
    constructor() {
        this.displayedColumns = ['Name', 'ID', 'Actions'];
        this.roles = [];
        this.roleItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteRoleItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    clickRole(record) {
        this.roleItemClick.emit(record);
    }
    clickDeleteRole(record) {
        this.deleteRoleItemClick.emit(record);
    }
}
RoleListComponent.ɵfac = function RoleListComponent_Factory(t) { return new (t || RoleListComponent)(); };
RoleListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoleListComponent, selectors: [["xenon-role-list"]], inputs: { roles: "roles" }, outputs: { roleItemClick: "roleItemClick", deleteRoleItemClick: "deleteRoleItemClick" }, decls: 12, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z0", 3, "dataSource"], ["matColumnDef", "Name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "clickable", "mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "ID"], ["mat-header-cell", "", "class", "text-right", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right clickable", 3, "click", 4, "matCellDef"], ["matColumnDef", "Actions"], ["width", "10", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "clickable", "width", "10", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "clickable", 3, "click"], ["mat-header-cell", "", 1, "text-right"], ["mat-cell", "", 1, "text-right", "clickable", 3, "click"], ["width", "10", "mat-header-cell", ""], ["width", "10", "mat-cell", "", 1, "clickable"], ["color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function RoleListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoleListComponent_th_2_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RoleListComponent_td_3_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RoleListComponent_th_5_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RoleListComponent_td_6_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RoleListComponent_th_8_Template, 1, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RoleListComponent_td_9_Template, 3, 0, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RoleListComponent_tr_10_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RoleListComponent_tr_11_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: ["mat-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%] {\n  padding: 0 0.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvd2ViL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vcm9sZXMvcm9sZS1saXN0L3JvbGUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0VBTUUsaUJBQUE7QUFDRiIsImZpbGUiOiJhcHBzL3dlYi9zcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3JvbGVzL3JvbGUtbGlzdC9yb2xlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2VsbCxcbi5tYXQtY2VsbCxcbm1hdC1mb290ZXItY2VsbCxcbi5tYXQtZm9vdGVyLWNlbGwsXG5tYXQtaGVhZGVyLWNlbGwsXG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgcGFkZGluZzogMCAwLjRyZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xenon-role-list',
                styleUrls: ['./role-list.component.scss'],
                templateUrl: './role-list.component.html',
            }]
    }], null, { roles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], roleItemClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deleteRoleItemClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/admin/roles/role-permissions/role-permission-admin/role-permission-admin.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/features/admin/roles/role-permissions/role-permission-admin/role-permission-admin.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: RolePermissionAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolePermissionAdminComponent", function() { return RolePermissionAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function RolePermissionAdminComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RolePermissionAdminComponent_div_2_Template_mat_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const permission_r1 = ctx.$implicit; return permission_r1.RoleHasPermission = $event; })("change", function RolePermissionAdminComponent_div_2_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.newPermissions.emit(ctx_r4.permissions); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const permission_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", permission_r1.RoleHasPermission)("ngModel", permission_r1.RoleHasPermission);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](permission_r1.Description);
} }
class RolePermissionAdminComponent {
    constructor() {
        this.newPermissions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
RolePermissionAdminComponent.ɵfac = function RolePermissionAdminComponent_Factory(t) { return new (t || RolePermissionAdminComponent)(); };
RolePermissionAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RolePermissionAdminComponent, selectors: [["xenon-role-permission-admin"]], inputs: { permissions: "permissions" }, outputs: { newPermissions: "newPermissions" }, decls: 3, vars: 1, consts: [[1, "p-0", "text-caption2"], ["fxLayoutAlign", "start center", 4, "ngFor", "ngForOf"], ["fxLayoutAlign", "start center"], ["fxLayoutAlign", "start center", 1, "text-body1", "w-100", "pt-1", 3, "checked", "ngModel", "ngModelChange", "change"]], template: function RolePermissionAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Choose Permissions to grant to this role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RolePermissionAdminComponent_div_2_Template, 3, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.permissions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".color-red {\n  color: #e60404 !important;\n}\n\n.color-red-dark {\n  color: #ad1b1b !important;\n}\n\n.color-red-light {\n  color: #ffcdd2 !important;\n}\n\n.color-gray {\n  color: #586069 !important;\n}\n\n.color-gray-light {\n  color: #f7f8f8 !important;\n}\n\n.color-white {\n  color: #ffffff !important;\n}\n\n.color-black {\n  color: #000000 !important;\n}\n\n.color-border-light {\n  color: #e0e0e0 !important;\n}\n\n.color-primary {\n  color: #048be6 !important;\n}\n\n.color-primary-dark {\n  color: #005797 !important;\n}\n\n.color-primary-light {\n  color: #def2fe !important;\n}\n\n.color-accent {\n  color: #037dd1 !important;\n}\n\n.background-red {\n  background-color: #e60404 !important;\n}\n\n.background-red-dark {\n  background-color: #ad1b1b !important;\n}\n\n.background-red-light {\n  background-color: #ffcdd2 !important;\n}\n\n.background-gray {\n  background-color: #586069 !important;\n}\n\n.background-gray-light {\n  background-color: #f7f8f8 !important;\n}\n\n.background-white {\n  background-color: #ffffff !important;\n}\n\n.background-black {\n  background-color: #000000 !important;\n}\n\n.background-border-light {\n  background-color: #e0e0e0 !important;\n}\n\n.background-primary {\n  background-color: #048be6 !important;\n}\n\n.background-primary-dark {\n  background-color: #005797 !important;\n}\n\n.background-primary-light {\n  background-color: #def2fe !important;\n}\n\n.background-accent {\n  background-color: #037dd1 !important;\n}\n\n.background-gradient {\n  background: linear-gradient(180deg, #ffffff 0%, #def2fe 78.12%, #e6f5fe 100%) !important;\n}\n\nxenon-role-permission-admin mat-checkbox:hover {\n  background-color: #f7f8f8;\n  border-radius: 20px;\n}\n\nxenon-role-permission-admin mat-checkbox .mat-checkbox-layout {\n  width: 100%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC1zdHlsZS1oZWxwZXJzL2NvbG9ycy5zY3NzIiwiYXBwcy93ZWIvc3JjL2FwcC9mZWF0dXJlcy9hZG1pbi9yb2xlcy9yb2xlLXBlcm1pc3Npb25zL3JvbGUtcGVybWlzc2lvbi1hZG1pbi9yb2xlLXBlcm1pc3Npb24tYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJBO0VBQ0UseUJBQUE7QUMzQkY7O0FENkJBO0VBQ0UseUJBQUE7QUMxQkY7O0FENEJBO0VBQ0UseUJBQUE7QUN6QkY7O0FEMkJBO0VBQ0UseUJBQUE7QUN4QkY7O0FEMEJBO0VBQ0UseUJBQUE7QUN2QkY7O0FEeUJBO0VBQ0UseUJBQUE7QUN0QkY7O0FEd0JBO0VBQ0UseUJBQUE7QUNyQkY7O0FEdUJBO0VBQ0UseUJBQUE7QUNwQkY7O0FEc0JBO0VBQ0UseUJBQUE7QUNuQkY7O0FEcUJBO0VBQ0UseUJBQUE7QUNsQkY7O0FEb0JBO0VBQ0UseUJBQUE7QUNqQkY7O0FEbUJBO0VBQ0UseUJBQUE7QUNoQkY7O0FEbUJBO0VBQ0Usb0NBQUE7QUNoQkY7O0FEa0JBO0VBQ0Usb0NBQUE7QUNmRjs7QURpQkE7RUFDRSxvQ0FBQTtBQ2RGOztBRGdCQTtFQUNFLG9DQUFBO0FDYkY7O0FEZUE7RUFDRSxvQ0FBQTtBQ1pGOztBRGNBO0VBQ0Usb0NBQUE7QUNYRjs7QURhQTtFQUNFLG9DQUFBO0FDVkY7O0FEWUE7RUFDRSxvQ0FBQTtBQ1RGOztBRFdBO0VBQ0Usb0NBQUE7QUNSRjs7QURVQTtFQUNFLG9DQUFBO0FDUEY7O0FEU0E7RUFDRSxvQ0FBQTtBQ05GOztBRFFBO0VBQ0Usb0NBQUE7QUNMRjs7QURRQTtFQUNFLHdGQUFBO0FDTEY7O0FBOUZJO0VBQ0UseUJEYWE7RUNaYixtQkFBQTtBQWlHTjs7QUEvRkk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQWlHTiIsImZpbGUiOiJhcHBzL3dlYi9zcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3JvbGVzL3JvbGUtcGVybWlzc2lvbnMvcm9sZS1wZXJtaXNzaW9uLWFkbWluL3JvbGUtcGVybWlzc2lvbi1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRvbyBzcGVjaWZpYyB3ZSBuZWVkIHRvIGVpdGhlciByZW5hbWUgdGhlbSBvciByZW1vdmUgdGhlbS5cbiRncmV5LXRleHQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiRzZWxlY3RlZC1maWVsZC1ib3JkZXI6ICNlNmY1ZmU7XG4kdGFibGUtcm93LWhvdmVyOiAjZjBmMWYyO1xuXG5AbWl4aW4gZm9ybS1idWlsZGVyLW1hdC1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4vL1xuXG4kYm9yZGVyLWdyYXk6ICNkNWQ4ZGI7XG4kY29sb3ItcmVkOiAjZTYwNDA0O1xuJGNvbG9yLXJlZC1kYXJrOiAjYWQxYjFiO1xuJGNvbG9yLXJlZC1saWdodDogI2ZmY2RkMjtcbiRjb2xvci1ncmF5OiAjNTg2MDY5O1xuJGNvbG9yLWdyYXktbGlnaHQ6ICNmN2Y4Zjg7XG4kY29sb3Itd2hpdGU6ICNmZmZmZmY7XG4kY29sb3ItYmxhY2s6ICMwMDAwMDA7XG4kY29sb3ItcHJpbWFyeTogIzA0OGJlNjtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICMwMDU3OTc7XG4kY29sb3ItcHJpbWFyeS1saWdodDogI2RlZjJmZTtcbiRjb2xvci1hY2NlbnQ6ICMwMzdkZDE7XG4kY29sb3ItYm9yZGVyLWxpZ2h0OiAjZTBlMGUwO1xuJGNvbG9yLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAkY29sb3Itd2hpdGUgMCUsICRjb2xvci1wcmltYXJ5LWxpZ2h0IDc4LjEyJSwgJHNlbGVjdGVkLWZpZWxkLWJvcmRlciAxMDAlKTtcblxuLmNvbG9yLXJlZCB7XG4gIGNvbG9yOiAkY29sb3ItcmVkICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItcmVkLWRhcmsge1xuICBjb2xvcjogJGNvbG9yLXJlZC1kYXJrICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItcmVkLWxpZ2h0IHtcbiAgY29sb3I6ICRjb2xvci1yZWQtbGlnaHQgIWltcG9ydGFudDtcbn1cbi5jb2xvci1ncmF5IHtcbiAgY29sb3I6ICRjb2xvci1ncmF5ICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItZ3JheS1saWdodCB7XG4gIGNvbG9yOiAkY29sb3ItZ3JheS1saWdodCAhaW1wb3J0YW50O1xufVxuLmNvbG9yLXdoaXRlIHtcbiAgY29sb3I6ICRjb2xvci13aGl0ZSAhaW1wb3J0YW50O1xufVxuLmNvbG9yLWJsYWNrIHtcbiAgY29sb3I6ICRjb2xvci1ibGFjayAhaW1wb3J0YW50O1xufVxuLmNvbG9yLWJvcmRlci1saWdodCB7XG4gIGNvbG9yOiAkY29sb3ItYm9yZGVyLWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItcHJpbWFyeSB7XG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeSAhaW1wb3J0YW50O1xufVxuLmNvbG9yLXByaW1hcnktZGFyayB7XG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeS1kYXJrICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItcHJpbWFyeS1saWdodCB7XG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeS1saWdodCAhaW1wb3J0YW50O1xufVxuLmNvbG9yLWFjY2VudCB7XG4gIGNvbG9yOiAkY29sb3ItYWNjZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrZ3JvdW5kLXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLXJlZC1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC1kYXJrICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1yZWQtbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1ncmF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyYXkgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLWdyYXktbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheS1saWdodCAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLWJsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1ib3JkZXItbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm9yZGVyLWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnkgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLXByaW1hcnktZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5LWRhcmsgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLXByaW1hcnktbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeS1saWdodCAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtYWNjZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWFjY2VudCAhaW1wb3J0YW50O1xufVxuXG4uYmFja2dyb3VuZC1ncmFkaWVudCB7XG4gIGJhY2tncm91bmQ6ICRjb2xvci1ncmFkaWVudCAhaW1wb3J0YW50O1xufVxuIiwiQGltcG9ydCAnZ2xvYmFsLXN0eWxlLWhlbHBlcnMvY29sb3JzJztcblxueGVub24tcm9sZS1wZXJtaXNzaW9uLWFkbWluIHtcbiAgbWF0LWNoZWNrYm94IHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5LWxpZ2h0O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG4gICAgLm1hdC1jaGVja2JveC1sYXlvdXQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolePermissionAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xenon-role-permission-admin',
                styleUrls: ['./role-permission-admin.component.scss'],
                template: `
    <p class="p-0 text-caption2">Choose Permissions to grant to this role</p>
    <div *ngFor="let permission of permissions" fxLayoutAlign="start center">
      <mat-checkbox
        [checked]="permission.RoleHasPermission"
        [(ngModel)]="permission.RoleHasPermission"
        (change)="newPermissions.emit(permissions)"
        class="text-body1 w-100 pt-1"
        fxLayoutAlign="start center"
        >{{ permission.Description }}</mat-checkbox
      >
    </div>
  `,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], null, { permissions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], newPermissions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/admin/roles/role-permissions/role-permission-drive/role-permission-drive.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/features/admin/roles/role-permissions/role-permission-drive/role-permission-drive.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: RolePermissionDriveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolePermissionDriveComponent", function() { return RolePermissionDriveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function RolePermissionDriveComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RolePermissionDriveComponent_div_2_Template_mat_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const permission_r1 = ctx.$implicit; return permission_r1.RoleHasPermission = $event; })("change", function RolePermissionDriveComponent_div_2_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.newPermissions.emit(ctx_r4.permissions); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const permission_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", permission_r1.RoleHasPermission)("ngModel", permission_r1.RoleHasPermission);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](permission_r1.Description);
} }
class RolePermissionDriveComponent {
    constructor() {
        this.newPermissions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
RolePermissionDriveComponent.ɵfac = function RolePermissionDriveComponent_Factory(t) { return new (t || RolePermissionDriveComponent)(); };
RolePermissionDriveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RolePermissionDriveComponent, selectors: [["xenon-role-permission-drive"]], inputs: { permissions: "permissions" }, outputs: { newPermissions: "newPermissions" }, decls: 3, vars: 1, consts: [[1, "p-0", "text-caption2"], ["fxLayoutAlign", "start center", 4, "ngFor", "ngForOf"], ["fxLayoutAlign", "start center"], ["fxLayoutAlign", "start center", 1, "text-body1", "w-100", "pt-1", 3, "checked", "ngModel", "ngModelChange", "change"]], template: function RolePermissionDriveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Choose Permissions to grant to this role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RolePermissionDriveComponent_div_2_Template, 3, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.permissions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".color-red {\n  color: #e60404 !important;\n}\n\n.color-red-dark {\n  color: #ad1b1b !important;\n}\n\n.color-red-light {\n  color: #ffcdd2 !important;\n}\n\n.color-gray {\n  color: #586069 !important;\n}\n\n.color-gray-light {\n  color: #f7f8f8 !important;\n}\n\n.color-white {\n  color: #ffffff !important;\n}\n\n.color-black {\n  color: #000000 !important;\n}\n\n.color-border-light {\n  color: #e0e0e0 !important;\n}\n\n.color-primary {\n  color: #048be6 !important;\n}\n\n.color-primary-dark {\n  color: #005797 !important;\n}\n\n.color-primary-light {\n  color: #def2fe !important;\n}\n\n.color-accent {\n  color: #037dd1 !important;\n}\n\n.background-red {\n  background-color: #e60404 !important;\n}\n\n.background-red-dark {\n  background-color: #ad1b1b !important;\n}\n\n.background-red-light {\n  background-color: #ffcdd2 !important;\n}\n\n.background-gray {\n  background-color: #586069 !important;\n}\n\n.background-gray-light {\n  background-color: #f7f8f8 !important;\n}\n\n.background-white {\n  background-color: #ffffff !important;\n}\n\n.background-black {\n  background-color: #000000 !important;\n}\n\n.background-border-light {\n  background-color: #e0e0e0 !important;\n}\n\n.background-primary {\n  background-color: #048be6 !important;\n}\n\n.background-primary-dark {\n  background-color: #005797 !important;\n}\n\n.background-primary-light {\n  background-color: #def2fe !important;\n}\n\n.background-accent {\n  background-color: #037dd1 !important;\n}\n\n.background-gradient {\n  background: linear-gradient(180deg, #ffffff 0%, #def2fe 78.12%, #e6f5fe 100%) !important;\n}\n\nxenon-role-permission-drive mat-checkbox:hover {\n  background-color: #f7f8f8;\n  border-radius: 20px;\n}\n\nxenon-role-permission-drive mat-checkbox .mat-checkbox-layout {\n  width: 100%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC1zdHlsZS1oZWxwZXJzL2NvbG9ycy5zY3NzIiwiYXBwcy93ZWIvc3JjL2FwcC9mZWF0dXJlcy9hZG1pbi9yb2xlcy9yb2xlLXBlcm1pc3Npb25zL3JvbGUtcGVybWlzc2lvbi1kcml2ZS9yb2xlLXBlcm1pc3Npb24tZHJpdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJBO0VBQ0UseUJBQUE7QUMzQkY7O0FENkJBO0VBQ0UseUJBQUE7QUMxQkY7O0FENEJBO0VBQ0UseUJBQUE7QUN6QkY7O0FEMkJBO0VBQ0UseUJBQUE7QUN4QkY7O0FEMEJBO0VBQ0UseUJBQUE7QUN2QkY7O0FEeUJBO0VBQ0UseUJBQUE7QUN0QkY7O0FEd0JBO0VBQ0UseUJBQUE7QUNyQkY7O0FEdUJBO0VBQ0UseUJBQUE7QUNwQkY7O0FEc0JBO0VBQ0UseUJBQUE7QUNuQkY7O0FEcUJBO0VBQ0UseUJBQUE7QUNsQkY7O0FEb0JBO0VBQ0UseUJBQUE7QUNqQkY7O0FEbUJBO0VBQ0UseUJBQUE7QUNoQkY7O0FEbUJBO0VBQ0Usb0NBQUE7QUNoQkY7O0FEa0JBO0VBQ0Usb0NBQUE7QUNmRjs7QURpQkE7RUFDRSxvQ0FBQTtBQ2RGOztBRGdCQTtFQUNFLG9DQUFBO0FDYkY7O0FEZUE7RUFDRSxvQ0FBQTtBQ1pGOztBRGNBO0VBQ0Usb0NBQUE7QUNYRjs7QURhQTtFQUNFLG9DQUFBO0FDVkY7O0FEWUE7RUFDRSxvQ0FBQTtBQ1RGOztBRFdBO0VBQ0Usb0NBQUE7QUNSRjs7QURVQTtFQUNFLG9DQUFBO0FDUEY7O0FEU0E7RUFDRSxvQ0FBQTtBQ05GOztBRFFBO0VBQ0Usb0NBQUE7QUNMRjs7QURRQTtFQUNFLHdGQUFBO0FDTEY7O0FBOUZJO0VBQ0UseUJEYWE7RUNaYixtQkFBQTtBQWlHTjs7QUEvRkk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQWlHTiIsImZpbGUiOiJhcHBzL3dlYi9zcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3JvbGVzL3JvbGUtcGVybWlzc2lvbnMvcm9sZS1wZXJtaXNzaW9uLWRyaXZlL3JvbGUtcGVybWlzc2lvbi1kcml2ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRvbyBzcGVjaWZpYyB3ZSBuZWVkIHRvIGVpdGhlciByZW5hbWUgdGhlbSBvciByZW1vdmUgdGhlbS5cbiRncmV5LXRleHQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiRzZWxlY3RlZC1maWVsZC1ib3JkZXI6ICNlNmY1ZmU7XG4kdGFibGUtcm93LWhvdmVyOiAjZjBmMWYyO1xuXG5AbWl4aW4gZm9ybS1idWlsZGVyLW1hdC1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4vL1xuXG4kYm9yZGVyLWdyYXk6ICNkNWQ4ZGI7XG4kY29sb3ItcmVkOiAjZTYwNDA0O1xuJGNvbG9yLXJlZC1kYXJrOiAjYWQxYjFiO1xuJGNvbG9yLXJlZC1saWdodDogI2ZmY2RkMjtcbiRjb2xvci1ncmF5OiAjNTg2MDY5O1xuJGNvbG9yLWdyYXktbGlnaHQ6ICNmN2Y4Zjg7XG4kY29sb3Itd2hpdGU6ICNmZmZmZmY7XG4kY29sb3ItYmxhY2s6ICMwMDAwMDA7XG4kY29sb3ItcHJpbWFyeTogIzA0OGJlNjtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICMwMDU3OTc7XG4kY29sb3ItcHJpbWFyeS1saWdodDogI2RlZjJmZTtcbiRjb2xvci1hY2NlbnQ6ICMwMzdkZDE7XG4kY29sb3ItYm9yZGVyLWxpZ2h0OiAjZTBlMGUwO1xuJGNvbG9yLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAkY29sb3Itd2hpdGUgMCUsICRjb2xvci1wcmltYXJ5LWxpZ2h0IDc4LjEyJSwgJHNlbGVjdGVkLWZpZWxkLWJvcmRlciAxMDAlKTtcblxuLmNvbG9yLXJlZCB7XG4gIGNvbG9yOiAkY29sb3ItcmVkICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItcmVkLWRhcmsge1xuICBjb2xvcjogJGNvbG9yLXJlZC1kYXJrICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItcmVkLWxpZ2h0IHtcbiAgY29sb3I6ICRjb2xvci1yZWQtbGlnaHQgIWltcG9ydGFudDtcbn1cbi5jb2xvci1ncmF5IHtcbiAgY29sb3I6ICRjb2xvci1ncmF5ICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItZ3JheS1saWdodCB7XG4gIGNvbG9yOiAkY29sb3ItZ3JheS1saWdodCAhaW1wb3J0YW50O1xufVxuLmNvbG9yLXdoaXRlIHtcbiAgY29sb3I6ICRjb2xvci13aGl0ZSAhaW1wb3J0YW50O1xufVxuLmNvbG9yLWJsYWNrIHtcbiAgY29sb3I6ICRjb2xvci1ibGFjayAhaW1wb3J0YW50O1xufVxuLmNvbG9yLWJvcmRlci1saWdodCB7XG4gIGNvbG9yOiAkY29sb3ItYm9yZGVyLWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItcHJpbWFyeSB7XG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeSAhaW1wb3J0YW50O1xufVxuLmNvbG9yLXByaW1hcnktZGFyayB7XG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeS1kYXJrICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItcHJpbWFyeS1saWdodCB7XG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeS1saWdodCAhaW1wb3J0YW50O1xufVxuLmNvbG9yLWFjY2VudCB7XG4gIGNvbG9yOiAkY29sb3ItYWNjZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrZ3JvdW5kLXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLXJlZC1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC1kYXJrICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1yZWQtbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1ncmF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyYXkgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLWdyYXktbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheS1saWdodCAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLWJsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1ib3JkZXItbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm9yZGVyLWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnkgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLXByaW1hcnktZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5LWRhcmsgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLXByaW1hcnktbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeS1saWdodCAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtYWNjZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWFjY2VudCAhaW1wb3J0YW50O1xufVxuXG4uYmFja2dyb3VuZC1ncmFkaWVudCB7XG4gIGJhY2tncm91bmQ6ICRjb2xvci1ncmFkaWVudCAhaW1wb3J0YW50O1xufVxuIiwiQGltcG9ydCAnZ2xvYmFsLXN0eWxlLWhlbHBlcnMvY29sb3JzJztcblxueGVub24tcm9sZS1wZXJtaXNzaW9uLWRyaXZlIHtcbiAgbWF0LWNoZWNrYm94IHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5LWxpZ2h0O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG4gICAgLm1hdC1jaGVja2JveC1sYXlvdXQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolePermissionDriveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xenon-role-permission-drive',
                styleUrls: ['./role-permission-drive.component.scss'],
                template: ` <p class="p-0 text-caption2">Choose Permissions to grant to this role</p>
    <div *ngFor="let permission of permissions" fxLayoutAlign="start center">
      <mat-checkbox
        [checked]="permission.RoleHasPermission"
        [(ngModel)]="permission.RoleHasPermission"
        (change)="newPermissions.emit(permissions)"
        class="text-body1 w-100 pt-1"
        fxLayoutAlign="start center"
        >{{ permission.Description }}</mat-checkbox
      >
    </div>`,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], null, { permissions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], newPermissions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/admin/roles/role-permissions/role-permission-forms/role-permission-forms.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/features/admin/roles/role-permissions/role-permission-forms/role-permission-forms.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: RolePermissionFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolePermissionFormsComponent", function() { return RolePermissionFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _xenon_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xenon/api */ "../../libs/api/src/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _role_permission_table_role_permission_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../role-permission-table/role-permission-table.component */ "./src/app/features/admin/roles/role-permissions/role-permission-table/role-permission-table.component.ts");






const _c0 = function () { return { nameField: "FormTemplateName" }; };
class RolePermissionFormsComponent {
    constructor(apiRoleService) {
        this.apiRoleService = apiRoleService;
        this.newPermissions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newDefaultPermission = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.displayedColumns = ['name', 'all', 'create', 'view', 'viewOwn', 'edit', 'delete', 'admin'];
    }
    ngOnInit() {
        this.apiRoleService
            .getFormTemplateRolePermissionsDefaultByRole(this.roleID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe((result) => {
            const role = result.FormTemplateRoles;
            if (role) {
                this.defaultFormTemplatePermission = [role];
            }
            else {
                this.defaultFormTemplatePermission = [
                    {
                        RoleID: this.roleID,
                        Create: false,
                        View: false,
                        ViewOwn: false,
                        Edit: false,
                        EditOwn: false,
                        Delete: false,
                        DeleteOwn: false,
                        Admin: false,
                        FormTemplateID: 0,
                        FormTemplateName: 'Default',
                    },
                ];
            }
        });
        this.apiRoleService
            .getFormTemplateRolePermissionsByRole(this.roleID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe((result) => {
            this.formTemplatePermissions = result.FormTemplateRoles;
        });
    }
}
RolePermissionFormsComponent.ɵfac = function RolePermissionFormsComponent_Factory(t) { return new (t || RolePermissionFormsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_api__WEBPACK_IMPORTED_MODULE_1__["ApiRoleService"])); };
RolePermissionFormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RolePermissionFormsComponent, selectors: [["xenon-role-permission-forms"]], inputs: { roleID: "roleID" }, outputs: { newPermissions: "newPermissions", newDefaultPermission: "newDefaultPermission" }, decls: 2, vars: 8, consts: [[3, "displayedColumns", "dataSet", "dataSetOptions", "newPermissions"]], template: function RolePermissionFormsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "xenon-role-permission-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newPermissions", function RolePermissionFormsComponent_Template_xenon_role_permission_table_newPermissions_0_listener($event) { return ctx.newDefaultPermission.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "xenon-role-permission-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newPermissions", function RolePermissionFormsComponent_Template_xenon_role_permission_table_newPermissions_1_listener($event) { return ctx.newPermissions.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayedColumns", ctx.displayedColumns)("dataSet", ctx.defaultFormTemplatePermission)("dataSetOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayedColumns", ctx.displayedColumns)("dataSet", ctx.formTemplatePermissions)("dataSetOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    } }, directives: [_role_permission_table_role_permission_table_component__WEBPACK_IMPORTED_MODULE_3__["RolePermissionTableComponent"]], styles: [".color-red {\n  color: #e60404 !important;\n}\n\n.color-red-dark {\n  color: #ad1b1b !important;\n}\n\n.color-red-light {\n  color: #ffcdd2 !important;\n}\n\n.color-gray {\n  color: #586069 !important;\n}\n\n.color-gray-light {\n  color: #f7f8f8 !important;\n}\n\n.color-white {\n  color: #ffffff !important;\n}\n\n.color-black {\n  color: #000000 !important;\n}\n\n.color-border-light {\n  color: #e0e0e0 !important;\n}\n\n.color-primary {\n  color: #048be6 !important;\n}\n\n.color-primary-dark {\n  color: #005797 !important;\n}\n\n.color-primary-light {\n  color: #def2fe !important;\n}\n\n.color-accent {\n  color: #037dd1 !important;\n}\n\n.background-red {\n  background-color: #e60404 !important;\n}\n\n.background-red-dark {\n  background-color: #ad1b1b !important;\n}\n\n.background-red-light {\n  background-color: #ffcdd2 !important;\n}\n\n.background-gray {\n  background-color: #586069 !important;\n}\n\n.background-gray-light {\n  background-color: #f7f8f8 !important;\n}\n\n.background-white {\n  background-color: #ffffff !important;\n}\n\n.background-black {\n  background-color: #000000 !important;\n}\n\n.background-border-light {\n  background-color: #e0e0e0 !important;\n}\n\n.background-primary {\n  background-color: #048be6 !important;\n}\n\n.background-primary-dark {\n  background-color: #005797 !important;\n}\n\n.background-primary-light {\n  background-color: #def2fe !important;\n}\n\n.background-accent {\n  background-color: #037dd1 !important;\n}\n\n.background-gradient {\n  background: linear-gradient(180deg, #ffffff 0%, #def2fe 78.12%, #e6f5fe 100%) !important;\n}\n\nxenon-role-permission-forms mat-checkbox:hover {\n  background-color: #f7f8f8;\n  border-radius: 20px;\n}\n\nxenon-role-permission-forms mat-checkbox .mat-checkbox-layout {\n  width: 100%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC1zdHlsZS1oZWxwZXJzL2NvbG9ycy5zY3NzIiwiYXBwcy93ZWIvc3JjL2FwcC9mZWF0dXJlcy9hZG1pbi9yb2xlcy9yb2xlLXBlcm1pc3Npb25zL3JvbGUtcGVybWlzc2lvbi1mb3Jtcy9yb2xlLXBlcm1pc3Npb24tZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJBO0VBQ0UseUJBQUE7QUMzQkY7O0FENkJBO0VBQ0UseUJBQUE7QUMxQkY7O0FENEJBO0VBQ0UseUJBQUE7QUN6QkY7O0FEMkJBO0VBQ0UseUJBQUE7QUN4QkY7O0FEMEJBO0VBQ0UseUJBQUE7QUN2QkY7O0FEeUJBO0VBQ0UseUJBQUE7QUN0QkY7O0FEd0JBO0VBQ0UseUJBQUE7QUNyQkY7O0FEdUJBO0VBQ0UseUJBQUE7QUNwQkY7O0FEc0JBO0VBQ0UseUJBQUE7QUNuQkY7O0FEcUJBO0VBQ0UseUJBQUE7QUNsQkY7O0FEb0JBO0VBQ0UseUJBQUE7QUNqQkY7O0FEbUJBO0VBQ0UseUJBQUE7QUNoQkY7O0FEbUJBO0VBQ0Usb0NBQUE7QUNoQkY7O0FEa0JBO0VBQ0Usb0NBQUE7QUNmRjs7QURpQkE7RUFDRSxvQ0FBQTtBQ2RGOztBRGdCQTtFQUNFLG9DQUFBO0FDYkY7O0FEZUE7RUFDRSxvQ0FBQTtBQ1pGOztBRGNBO0VBQ0Usb0NBQUE7QUNYRjs7QURhQTtFQUNFLG9DQUFBO0FDVkY7O0FEWUE7RUFDRSxvQ0FBQTtBQ1RGOztBRFdBO0VBQ0Usb0NBQUE7QUNSRjs7QURVQTtFQUNFLG9DQUFBO0FDUEY7O0FEU0E7RUFDRSxvQ0FBQTtBQ05GOztBRFFBO0VBQ0Usb0NBQUE7QUNMRjs7QURRQTtFQUNFLHdGQUFBO0FDTEY7O0FBOUZJO0VBQ0UseUJEYWE7RUNaYixtQkFBQTtBQWlHTjs7QUEvRkk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQWlHTiIsImZpbGUiOiJhcHBzL3dlYi9zcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3JvbGVzL3JvbGUtcGVybWlzc2lvbnMvcm9sZS1wZXJtaXNzaW9uLWZvcm1zL3JvbGUtcGVybWlzc2lvbi1mb3Jtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRvbyBzcGVjaWZpYyB3ZSBuZWVkIHRvIGVpdGhlciByZW5hbWUgdGhlbSBvciByZW1vdmUgdGhlbS5cbiRncmV5LXRleHQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiRzZWxlY3RlZC1maWVsZC1ib3JkZXI6ICNlNmY1ZmU7XG4kdGFibGUtcm93LWhvdmVyOiAjZjBmMWYyO1xuXG5AbWl4aW4gZm9ybS1idWlsZGVyLW1hdC1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4vL1xuXG4kYm9yZGVyLWdyYXk6ICNkNWQ4ZGI7XG4kY29sb3ItcmVkOiAjZTYwNDA0O1xuJGNvbG9yLXJlZC1kYXJrOiAjYWQxYjFiO1xuJGNvbG9yLXJlZC1saWdodDogI2ZmY2RkMjtcbiRjb2xvci1ncmF5OiAjNTg2MDY5O1xuJGNvbG9yLWdyYXktbGlnaHQ6ICNmN2Y4Zjg7XG4kY29sb3Itd2hpdGU6ICNmZmZmZmY7XG4kY29sb3ItYmxhY2s6ICMwMDAwMDA7XG4kY29sb3ItcHJpbWFyeTogIzA0OGJlNjtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICMwMDU3OTc7XG4kY29sb3ItcHJpbWFyeS1saWdodDogI2RlZjJmZTtcbiRjb2xvci1hY2NlbnQ6ICMwMzdkZDE7XG4kY29sb3ItYm9yZGVyLWxpZ2h0OiAjZTBlMGUwO1xuJGNvbG9yLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAkY29sb3Itd2hpdGUgMCUsICRjb2xvci1wcmltYXJ5LWxpZ2h0IDc4LjEyJSwgJHNlbGVjdGVkLWZpZWxkLWJvcmRlciAxMDAlKTtcblxuLmNvbG9yLXJlZCB7XG4gIGNvbG9yOiAkY29sb3ItcmVkICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItcmVkLWRhcmsge1xuICBjb2xvcjogJGNvbG9yLXJlZC1kYXJrICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItcmVkLWxpZ2h0IHtcbiAgY29sb3I6ICRjb2xvci1yZWQtbGlnaHQgIWltcG9ydGFudDtcbn1cbi5jb2xvci1ncmF5IHtcbiAgY29sb3I6ICRjb2xvci1ncmF5ICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItZ3JheS1saWdodCB7XG4gIGNvbG9yOiAkY29sb3ItZ3JheS1saWdodCAhaW1wb3J0YW50O1xufVxuLmNvbG9yLXdoaXRlIHtcbiAgY29sb3I6ICRjb2xvci13aGl0ZSAhaW1wb3J0YW50O1xufVxuLmNvbG9yLWJsYWNrIHtcbiAgY29sb3I6ICRjb2xvci1ibGFjayAhaW1wb3J0YW50O1xufVxuLmNvbG9yLWJvcmRlci1saWdodCB7XG4gIGNvbG9yOiAkY29sb3ItYm9yZGVyLWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItcHJpbWFyeSB7XG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeSAhaW1wb3J0YW50O1xufVxuLmNvbG9yLXByaW1hcnktZGFyayB7XG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeS1kYXJrICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItcHJpbWFyeS1saWdodCB7XG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeS1saWdodCAhaW1wb3J0YW50O1xufVxuLmNvbG9yLWFjY2VudCB7XG4gIGNvbG9yOiAkY29sb3ItYWNjZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrZ3JvdW5kLXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLXJlZC1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC1kYXJrICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1yZWQtbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1ncmF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyYXkgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLWdyYXktbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheS1saWdodCAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLWJsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1ib3JkZXItbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm9yZGVyLWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnkgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLXByaW1hcnktZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5LWRhcmsgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLXByaW1hcnktbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeS1saWdodCAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtYWNjZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWFjY2VudCAhaW1wb3J0YW50O1xufVxuXG4uYmFja2dyb3VuZC1ncmFkaWVudCB7XG4gIGJhY2tncm91bmQ6ICRjb2xvci1ncmFkaWVudCAhaW1wb3J0YW50O1xufVxuIiwiQGltcG9ydCAnZ2xvYmFsLXN0eWxlLWhlbHBlcnMvY29sb3JzJztcblxueGVub24tcm9sZS1wZXJtaXNzaW9uLWZvcm1zIHtcbiAgbWF0LWNoZWNrYm94IHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5LWxpZ2h0O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG4gICAgLm1hdC1jaGVja2JveC1sYXlvdXQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolePermissionFormsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xenon-role-permission-forms',
                styleUrls: ['./role-permission-forms.component.scss'],
                template: `
    <xenon-role-permission-table
      [displayedColumns]="displayedColumns"
      [dataSet]="defaultFormTemplatePermission"
      [dataSetOptions]="{ nameField: 'FormTemplateName' }"
      (newPermissions)="newDefaultPermission.emit($event)"
    ></xenon-role-permission-table>
    <xenon-role-permission-table
      [displayedColumns]="displayedColumns"
      [dataSet]="formTemplatePermissions"
      [dataSetOptions]="{ nameField: 'FormTemplateName' }"
      (newPermissions)="newPermissions.emit($event)"
    ></xenon-role-permission-table>
  `,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _xenon_api__WEBPACK_IMPORTED_MODULE_1__["ApiRoleService"] }]; }, { roleID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], newPermissions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], newDefaultPermission: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/admin/roles/role-permissions/role-permission-table/role-permission-table.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/features/admin/roles/role-permissions/role-permission-table/role-permission-table.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: RolePermissionTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolePermissionTableComponent", function() { return RolePermissionTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function RolePermissionTableComponent_div_0_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "text-left");
} }
function RolePermissionTableComponent_div_0_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "text-left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getName(element_r23));
} }
function RolePermissionTableComponent_div_0_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "text-center checkbox-width");
} }
function RolePermissionTableComponent_div_0_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RolePermissionTableComponent_div_0_td_7_Template_mat_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.allChecked = $event; })("change", function RolePermissionTableComponent_div_0_td_7_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const element_r24 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.toggleAll(element_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r4.isAllChecked(element_r24))("ngModel", ctx_r4.allChecked);
} }
function RolePermissionTableComponent_div_0_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "text-center checkbox-width");
} }
function RolePermissionTableComponent_div_0_td_10_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RolePermissionTableComponent_div_0_td_10_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const element_r28 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.togglePermission(element_r28, $event.checked, "Create"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", element_r28.Create);
} }
function RolePermissionTableComponent_div_0_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "text-center checkbox-width");
} }
function RolePermissionTableComponent_div_0_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RolePermissionTableComponent_div_0_td_13_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const element_r31 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.togglePermission(element_r31, $event.checked, "View"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", element_r31.View);
} }
function RolePermissionTableComponent_div_0_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View Own");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "text-center checkbox-width");
} }
function RolePermissionTableComponent_div_0_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RolePermissionTableComponent_div_0_td_16_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const element_r34 = ctx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.togglePermission(element_r34, $event.checked, "ViewOwn"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", element_r34.ViewOwn);
} }
function RolePermissionTableComponent_div_0_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "text-center checkbox-width");
} }
function RolePermissionTableComponent_div_0_td_19_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RolePermissionTableComponent_div_0_td_19_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const element_r37 = ctx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.togglePermission(element_r37, $event.checked, "Edit"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", element_r37.Edit);
} }
function RolePermissionTableComponent_div_0_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Own");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "text-center checkbox-width");
} }
function RolePermissionTableComponent_div_0_td_22_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RolePermissionTableComponent_div_0_td_22_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const element_r40 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.togglePermission(element_r40, $event.checked, "EditOwn"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", element_r40.EditOwn);
} }
function RolePermissionTableComponent_div_0_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "text-center checkbox-width");
} }
function RolePermissionTableComponent_div_0_td_25_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RolePermissionTableComponent_div_0_td_25_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const element_r43 = ctx.$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.togglePermission(element_r43, $event.checked, "Delete"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", element_r43.Delete);
} }
function RolePermissionTableComponent_div_0_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete Own");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "text-center checkbox-width");
} }
function RolePermissionTableComponent_div_0_td_28_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RolePermissionTableComponent_div_0_td_28_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const element_r46 = ctx.$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r47.togglePermission(element_r46, $event.checked, "DeleteOwn"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", element_r46.DeleteOwn);
} }
function RolePermissionTableComponent_div_0_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "text-center checkbox-width");
} }
function RolePermissionTableComponent_div_0_td_31_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RolePermissionTableComponent_div_0_td_31_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const element_r49 = ctx.$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.togglePermission(element_r49, $event.checked, "Admin"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", element_r49.Admin);
} }
function RolePermissionTableComponent_div_0_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
} }
function RolePermissionTableComponent_div_0_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
} }
function RolePermissionTableComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RolePermissionTableComponent_div_0_th_3_Template, 2, 1, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RolePermissionTableComponent_div_0_td_4_Template, 2, 2, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RolePermissionTableComponent_div_0_th_6_Template, 2, 1, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RolePermissionTableComponent_div_0_td_7_Template, 2, 2, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RolePermissionTableComponent_div_0_th_9_Template, 2, 1, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RolePermissionTableComponent_div_0_td_10_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RolePermissionTableComponent_div_0_th_12_Template, 2, 1, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RolePermissionTableComponent_div_0_td_13_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RolePermissionTableComponent_div_0_th_15_Template, 2, 1, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RolePermissionTableComponent_div_0_td_16_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RolePermissionTableComponent_div_0_th_18_Template, 2, 1, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RolePermissionTableComponent_div_0_td_19_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RolePermissionTableComponent_div_0_th_21_Template, 2, 1, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RolePermissionTableComponent_div_0_td_22_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RolePermissionTableComponent_div_0_th_24_Template, 2, 1, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RolePermissionTableComponent_div_0_td_25_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RolePermissionTableComponent_div_0_th_27_Template, 2, 1, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RolePermissionTableComponent_div_0_td_28_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RolePermissionTableComponent_div_0_th_30_Template, 2, 1, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RolePermissionTableComponent_div_0_td_31_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, RolePermissionTableComponent_div_0_tr_32_Template, 1, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, RolePermissionTableComponent_div_0_tr_33_Template, 1, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.dataSet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
} }
class RolePermissionTableComponent {
    constructor() {
        this.newPermissions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    getName(template) {
        return template[this.dataSetOptions.nameField];
    }
    isAllChecked(template) {
        let allChecked = true;
        Object.entries(template).forEach(([key, value]) => {
            if (!value && this.displayedColumns.some((column) => column.toLowerCase() === key.toLowerCase())) {
                allChecked = false;
            }
        });
        this.allChecked = allChecked;
        return allChecked;
    }
    togglePermission(template, newValue, key) {
        template[key] = newValue;
        this.outputPermissions();
    }
    toggleAll(template) {
        const allChecked = !this.isAllChecked(template);
        Object.entries(template).forEach(([key, value]) => {
            if (value === !!value) {
                template[key] = allChecked;
            }
        });
        this.outputPermissions();
    }
    outputPermissions() {
        this.newPermissions.emit(this.dataSet);
    }
}
RolePermissionTableComponent.ɵfac = function RolePermissionTableComponent_Factory(t) { return new (t || RolePermissionTableComponent)(); };
RolePermissionTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RolePermissionTableComponent, selectors: [["xenon-role-permission-table"]], inputs: { dataSet: "dataSet", displayedColumns: "displayedColumns", dataSetOptions: "dataSetOptions" }, outputs: { newPermissions: "newPermissions" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 3, "ngClass", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "all"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "create"], ["matColumnDef", "view"], ["matColumnDef", "viewOwn"], ["matColumnDef", "edit"], ["matColumnDef", "editOwn"], ["matColumnDef", "delete"], ["matColumnDef", "deleteOwn"], ["matColumnDef", "admin"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "text-center", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 3, "ngClass"], ["mat-cell", "", 3, "ngClass"], ["mat-cell", ""], [3, "checked", "ngModel", "ngModelChange", "change"], [3, "checked", "change"], ["mat-header-row", ""], ["mat-row", "", 1, "text-center"]], template: function RolePermissionTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RolePermissionTableComponent_div_0_Template, 34, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSet);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: [".checkbox-width {\n  width: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvd2ViL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vcm9sZXMvcm9sZS1wZXJtaXNzaW9ucy9yb2xlLXBlcm1pc3Npb24tdGFibGUvcm9sZS1wZXJtaXNzaW9uLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtBQUNGIiwiZmlsZSI6ImFwcHMvd2ViL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vcm9sZXMvcm9sZS1wZXJtaXNzaW9ucy9yb2xlLXBlcm1pc3Npb24tdGFibGUvcm9sZS1wZXJtaXNzaW9uLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrYm94LXdpZHRoIHtcbiAgd2lkdGg6IDUlO1xufVxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolePermissionTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xenon-role-permission-table',
                styleUrls: ['./role-permission-table.component.scss'],
                templateUrl: './role-permission-table.component.html',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], null, { dataSet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], displayedColumns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dataSetOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], newPermissions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/admin/roles/role-permissions/role-permission-tasks/role-permission-tasks.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/features/admin/roles/role-permissions/role-permission-tasks/role-permission-tasks.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: RolePermissionTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolePermissionTasksComponent", function() { return RolePermissionTasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _xenon_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xenon/api */ "../../libs/api/src/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _role_permission_table_role_permission_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../role-permission-table/role-permission-table.component */ "./src/app/features/admin/roles/role-permissions/role-permission-table/role-permission-table.component.ts");






const _c0 = function () { return { nameField: "RoleName" }; };
const _c1 = function () { return { nameField: "TaskTemplateName" }; };
class RolePermissionTasksComponent {
    constructor(apiRoleService) {
        this.apiRoleService = apiRoleService;
        this.newPermissions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newDefaultPermission = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.displayedColumns = ['name', 'all', 'create', 'view', 'edit', 'delete', 'admin'];
    }
    ngOnInit() {
        this.apiRoleService
            .getTaskTemplateRolePermissionsDefaultByRole(this.roleID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe((result) => {
            const role = result.TaskTemplateRoles;
            if (role) {
                this.defaultTaskTemplatePermission = [role];
            }
            else {
                this.defaultTaskTemplatePermission = [
                    {
                        RoleID: this.roleID,
                        Create: false,
                        View: false,
                        ViewOwn: false,
                        Edit: false,
                        EditOwn: false,
                        Delete: false,
                        DeleteOwn: false,
                        Admin: false,
                        TaskTemplateID: 0,
                        TaskTemplateName: 'Default',
                    },
                ];
            }
        });
        this.apiRoleService
            .getTaskTemplateRolePermissionsByRole(this.roleID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe((result) => {
            this.taskTemplatePermissions = result.TaskTemplateRoles;
        });
    }
}
RolePermissionTasksComponent.ɵfac = function RolePermissionTasksComponent_Factory(t) { return new (t || RolePermissionTasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_api__WEBPACK_IMPORTED_MODULE_1__["ApiRoleService"])); };
RolePermissionTasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RolePermissionTasksComponent, selectors: [["xenon-role-permission-tasks"]], inputs: { roleID: "roleID" }, outputs: { newPermissions: "newPermissions", newDefaultPermission: "newDefaultPermission" }, decls: 2, vars: 8, consts: [[3, "displayedColumns", "dataSet", "dataSetOptions", "newPermissions"]], template: function RolePermissionTasksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "xenon-role-permission-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newPermissions", function RolePermissionTasksComponent_Template_xenon_role_permission_table_newPermissions_0_listener($event) { return ctx.newDefaultPermission.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "xenon-role-permission-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newPermissions", function RolePermissionTasksComponent_Template_xenon_role_permission_table_newPermissions_1_listener($event) { return ctx.newPermissions.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayedColumns", ctx.displayedColumns)("dataSet", ctx.defaultTaskTemplatePermission)("dataSetOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayedColumns", ctx.displayedColumns)("dataSet", ctx.taskTemplatePermissions)("dataSetOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
    } }, directives: [_role_permission_table_role_permission_table_component__WEBPACK_IMPORTED_MODULE_3__["RolePermissionTableComponent"]], styles: [".color-red {\n  color: #e60404 !important;\n}\n\n.color-red-dark {\n  color: #ad1b1b !important;\n}\n\n.color-red-light {\n  color: #ffcdd2 !important;\n}\n\n.color-gray {\n  color: #586069 !important;\n}\n\n.color-gray-light {\n  color: #f7f8f8 !important;\n}\n\n.color-white {\n  color: #ffffff !important;\n}\n\n.color-black {\n  color: #000000 !important;\n}\n\n.color-border-light {\n  color: #e0e0e0 !important;\n}\n\n.color-primary {\n  color: #048be6 !important;\n}\n\n.color-primary-dark {\n  color: #005797 !important;\n}\n\n.color-primary-light {\n  color: #def2fe !important;\n}\n\n.color-accent {\n  color: #037dd1 !important;\n}\n\n.background-red {\n  background-color: #e60404 !important;\n}\n\n.background-red-dark {\n  background-color: #ad1b1b !important;\n}\n\n.background-red-light {\n  background-color: #ffcdd2 !important;\n}\n\n.background-gray {\n  background-color: #586069 !important;\n}\n\n.background-gray-light {\n  background-color: #f7f8f8 !important;\n}\n\n.background-white {\n  background-color: #ffffff !important;\n}\n\n.background-black {\n  background-color: #000000 !important;\n}\n\n.background-border-light {\n  background-color: #e0e0e0 !important;\n}\n\n.background-primary {\n  background-color: #048be6 !important;\n}\n\n.background-primary-dark {\n  background-color: #005797 !important;\n}\n\n.background-primary-light {\n  background-color: #def2fe !important;\n}\n\n.background-accent {\n  background-color: #037dd1 !important;\n}\n\n.background-gradient {\n  background: linear-gradient(180deg, #ffffff 0%, #def2fe 78.12%, #e6f5fe 100%) !important;\n}\n\nxenon-role-permission-tasks mat-checkbox:hover {\n  background-color: #f7f8f8;\n  border-radius: 20px;\n}\n\nxenon-role-permission-tasks mat-checkbox .mat-checkbox-layout {\n  width: 100%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC1zdHlsZS1oZWxwZXJzL2NvbG9ycy5zY3NzIiwiYXBwcy93ZWIvc3JjL2FwcC9mZWF0dXJlcy9hZG1pbi9yb2xlcy9yb2xlLXBlcm1pc3Npb25zL3JvbGUtcGVybWlzc2lvbi10YXNrcy9yb2xlLXBlcm1pc3Npb24tdGFza3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJBO0VBQ0UseUJBQUE7QUMzQkY7O0FENkJBO0VBQ0UseUJBQUE7QUMxQkY7O0FENEJBO0VBQ0UseUJBQUE7QUN6QkY7O0FEMkJBO0VBQ0UseUJBQUE7QUN4QkY7O0FEMEJBO0VBQ0UseUJBQUE7QUN2QkY7O0FEeUJBO0VBQ0UseUJBQUE7QUN0QkY7O0FEd0JBO0VBQ0UseUJBQUE7QUNyQkY7O0FEdUJBO0VBQ0UseUJBQUE7QUNwQkY7O0FEc0JBO0VBQ0UseUJBQUE7QUNuQkY7O0FEcUJBO0VBQ0UseUJBQUE7QUNsQkY7O0FEb0JBO0VBQ0UseUJBQUE7QUNqQkY7O0FEbUJBO0VBQ0UseUJBQUE7QUNoQkY7O0FEbUJBO0VBQ0Usb0NBQUE7QUNoQkY7O0FEa0JBO0VBQ0Usb0NBQUE7QUNmRjs7QURpQkE7RUFDRSxvQ0FBQTtBQ2RGOztBRGdCQTtFQUNFLG9DQUFBO0FDYkY7O0FEZUE7RUFDRSxvQ0FBQTtBQ1pGOztBRGNBO0VBQ0Usb0NBQUE7QUNYRjs7QURhQTtFQUNFLG9DQUFBO0FDVkY7O0FEWUE7RUFDRSxvQ0FBQTtBQ1RGOztBRFdBO0VBQ0Usb0NBQUE7QUNSRjs7QURVQTtFQUNFLG9DQUFBO0FDUEY7O0FEU0E7RUFDRSxvQ0FBQTtBQ05GOztBRFFBO0VBQ0Usb0NBQUE7QUNMRjs7QURRQTtFQUNFLHdGQUFBO0FDTEY7O0FBOUZJO0VBQ0UseUJEYWE7RUNaYixtQkFBQTtBQWlHTjs7QUEvRkk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQWlHTiIsImZpbGUiOiJhcHBzL3dlYi9zcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3JvbGVzL3JvbGUtcGVybWlzc2lvbnMvcm9sZS1wZXJtaXNzaW9uLXRhc2tzL3JvbGUtcGVybWlzc2lvbi10YXNrcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRvbyBzcGVjaWZpYyB3ZSBuZWVkIHRvIGVpdGhlciByZW5hbWUgdGhlbSBvciByZW1vdmUgdGhlbS5cbiRncmV5LXRleHQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiRzZWxlY3RlZC1maWVsZC1ib3JkZXI6ICNlNmY1ZmU7XG4kdGFibGUtcm93LWhvdmVyOiAjZjBmMWYyO1xuXG5AbWl4aW4gZm9ybS1idWlsZGVyLW1hdC1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4vL1xuXG4kYm9yZGVyLWdyYXk6ICNkNWQ4ZGI7XG4kY29sb3ItcmVkOiAjZTYwNDA0O1xuJGNvbG9yLXJlZC1kYXJrOiAjYWQxYjFiO1xuJGNvbG9yLXJlZC1saWdodDogI2ZmY2RkMjtcbiRjb2xvci1ncmF5OiAjNTg2MDY5O1xuJGNvbG9yLWdyYXktbGlnaHQ6ICNmN2Y4Zjg7XG4kY29sb3Itd2hpdGU6ICNmZmZmZmY7XG4kY29sb3ItYmxhY2s6ICMwMDAwMDA7XG4kY29sb3ItcHJpbWFyeTogIzA0OGJlNjtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICMwMDU3OTc7XG4kY29sb3ItcHJpbWFyeS1saWdodDogI2RlZjJmZTtcbiRjb2xvci1hY2NlbnQ6ICMwMzdkZDE7XG4kY29sb3ItYm9yZGVyLWxpZ2h0OiAjZTBlMGUwO1xuJGNvbG9yLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAkY29sb3Itd2hpdGUgMCUsICRjb2xvci1wcmltYXJ5LWxpZ2h0IDc4LjEyJSwgJHNlbGVjdGVkLWZpZWxkLWJvcmRlciAxMDAlKTtcblxuLmNvbG9yLXJlZCB7XG4gIGNvbG9yOiAkY29sb3ItcmVkICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItcmVkLWRhcmsge1xuICBjb2xvcjogJGNvbG9yLXJlZC1kYXJrICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItcmVkLWxpZ2h0IHtcbiAgY29sb3I6ICRjb2xvci1yZWQtbGlnaHQgIWltcG9ydGFudDtcbn1cbi5jb2xvci1ncmF5IHtcbiAgY29sb3I6ICRjb2xvci1ncmF5ICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItZ3JheS1saWdodCB7XG4gIGNvbG9yOiAkY29sb3ItZ3JheS1saWdodCAhaW1wb3J0YW50O1xufVxuLmNvbG9yLXdoaXRlIHtcbiAgY29sb3I6ICRjb2xvci13aGl0ZSAhaW1wb3J0YW50O1xufVxuLmNvbG9yLWJsYWNrIHtcbiAgY29sb3I6ICRjb2xvci1ibGFjayAhaW1wb3J0YW50O1xufVxuLmNvbG9yLWJvcmRlci1saWdodCB7XG4gIGNvbG9yOiAkY29sb3ItYm9yZGVyLWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItcHJpbWFyeSB7XG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeSAhaW1wb3J0YW50O1xufVxuLmNvbG9yLXByaW1hcnktZGFyayB7XG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeS1kYXJrICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItcHJpbWFyeS1saWdodCB7XG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeS1saWdodCAhaW1wb3J0YW50O1xufVxuLmNvbG9yLWFjY2VudCB7XG4gIGNvbG9yOiAkY29sb3ItYWNjZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrZ3JvdW5kLXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLXJlZC1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC1kYXJrICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1yZWQtbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1ncmF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyYXkgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLWdyYXktbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheS1saWdodCAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLWJsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1ib3JkZXItbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm9yZGVyLWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnkgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLXByaW1hcnktZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5LWRhcmsgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLXByaW1hcnktbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeS1saWdodCAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtYWNjZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWFjY2VudCAhaW1wb3J0YW50O1xufVxuXG4uYmFja2dyb3VuZC1ncmFkaWVudCB7XG4gIGJhY2tncm91bmQ6ICRjb2xvci1ncmFkaWVudCAhaW1wb3J0YW50O1xufVxuIiwiQGltcG9ydCAnZ2xvYmFsLXN0eWxlLWhlbHBlcnMvY29sb3JzJztcblxueGVub24tcm9sZS1wZXJtaXNzaW9uLXRhc2tzIHtcbiAgbWF0LWNoZWNrYm94IHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5LWxpZ2h0O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG4gICAgLm1hdC1jaGVja2JveC1sYXlvdXQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolePermissionTasksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xenon-role-permission-tasks',
                styleUrls: ['./role-permission-tasks.component.scss'],
                template: `
    <xenon-role-permission-table
      [displayedColumns]="displayedColumns"
      [dataSet]="defaultTaskTemplatePermission"
      [dataSetOptions]="{ nameField: 'RoleName' }"
      (newPermissions)="newDefaultPermission.emit($event)"
    ></xenon-role-permission-table>
    <xenon-role-permission-table
      [displayedColumns]="displayedColumns"
      [dataSet]="taskTemplatePermissions"
      [dataSetOptions]="{ nameField: 'TaskTemplateName' }"
      (newPermissions)="newPermissions.emit($event)"
    ></xenon-role-permission-table>
  `,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _xenon_api__WEBPACK_IMPORTED_MODULE_1__["ApiRoleService"] }]; }, { roleID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], newPermissions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], newDefaultPermission: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/admin/roles/role-permissions/role-permission-team/role-permission-team.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/features/admin/roles/role-permissions/role-permission-team/role-permission-team.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: RolePermissionTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolePermissionTeamComponent", function() { return RolePermissionTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function RolePermissionTeamComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RolePermissionTeamComponent_div_2_Template_mat_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const permission_r1 = ctx.$implicit; return permission_r1.RoleHasPermission = $event; })("change", function RolePermissionTeamComponent_div_2_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.newPermissions.emit(ctx_r4.permissions); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const permission_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", permission_r1.RoleHasPermission)("ngModel", permission_r1.RoleHasPermission);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](permission_r1.Description);
} }
class RolePermissionTeamComponent {
    constructor() {
        this.newPermissions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
RolePermissionTeamComponent.ɵfac = function RolePermissionTeamComponent_Factory(t) { return new (t || RolePermissionTeamComponent)(); };
RolePermissionTeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RolePermissionTeamComponent, selectors: [["xenon-role-permission-team"]], inputs: { permissions: "permissions" }, outputs: { newPermissions: "newPermissions" }, decls: 3, vars: 1, consts: [[1, "p-0", "text-caption2"], ["fxLayoutAlign", "start center", 4, "ngFor", "ngForOf"], ["fxLayoutAlign", "start center"], ["fxLayoutAlign", "start center", 1, "text-body1", "w-100", "pt-1", 3, "checked", "ngModel", "ngModelChange", "change"]], template: function RolePermissionTeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Choose Permissions to grant to this role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RolePermissionTeamComponent_div_2_Template, 3, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.permissions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".color-red {\n  color: #e60404 !important;\n}\n\n.color-red-dark {\n  color: #ad1b1b !important;\n}\n\n.color-red-light {\n  color: #ffcdd2 !important;\n}\n\n.color-gray {\n  color: #586069 !important;\n}\n\n.color-gray-light {\n  color: #f7f8f8 !important;\n}\n\n.color-white {\n  color: #ffffff !important;\n}\n\n.color-black {\n  color: #000000 !important;\n}\n\n.color-border-light {\n  color: #e0e0e0 !important;\n}\n\n.color-primary {\n  color: #048be6 !important;\n}\n\n.color-primary-dark {\n  color: #005797 !important;\n}\n\n.color-primary-light {\n  color: #def2fe !important;\n}\n\n.color-accent {\n  color: #037dd1 !important;\n}\n\n.background-red {\n  background-color: #e60404 !important;\n}\n\n.background-red-dark {\n  background-color: #ad1b1b !important;\n}\n\n.background-red-light {\n  background-color: #ffcdd2 !important;\n}\n\n.background-gray {\n  background-color: #586069 !important;\n}\n\n.background-gray-light {\n  background-color: #f7f8f8 !important;\n}\n\n.background-white {\n  background-color: #ffffff !important;\n}\n\n.background-black {\n  background-color: #000000 !important;\n}\n\n.background-border-light {\n  background-color: #e0e0e0 !important;\n}\n\n.background-primary {\n  background-color: #048be6 !important;\n}\n\n.background-primary-dark {\n  background-color: #005797 !important;\n}\n\n.background-primary-light {\n  background-color: #def2fe !important;\n}\n\n.background-accent {\n  background-color: #037dd1 !important;\n}\n\n.background-gradient {\n  background: linear-gradient(180deg, #ffffff 0%, #def2fe 78.12%, #e6f5fe 100%) !important;\n}\n\nxenon-role-permission-team mat-checkbox:hover {\n  background-color: #f7f8f8;\n  border-radius: 20px;\n}\n\nxenon-role-permission-team mat-checkbox .mat-checkbox-layout {\n  width: 100%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC1zdHlsZS1oZWxwZXJzL2NvbG9ycy5zY3NzIiwiYXBwcy93ZWIvc3JjL2FwcC9mZWF0dXJlcy9hZG1pbi9yb2xlcy9yb2xlLXBlcm1pc3Npb25zL3JvbGUtcGVybWlzc2lvbi10ZWFtL3JvbGUtcGVybWlzc2lvbi10ZWFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCQTtFQUNFLHlCQUFBO0FDM0JGOztBRDZCQTtFQUNFLHlCQUFBO0FDMUJGOztBRDRCQTtFQUNFLHlCQUFBO0FDekJGOztBRDJCQTtFQUNFLHlCQUFBO0FDeEJGOztBRDBCQTtFQUNFLHlCQUFBO0FDdkJGOztBRHlCQTtFQUNFLHlCQUFBO0FDdEJGOztBRHdCQTtFQUNFLHlCQUFBO0FDckJGOztBRHVCQTtFQUNFLHlCQUFBO0FDcEJGOztBRHNCQTtFQUNFLHlCQUFBO0FDbkJGOztBRHFCQTtFQUNFLHlCQUFBO0FDbEJGOztBRG9CQTtFQUNFLHlCQUFBO0FDakJGOztBRG1CQTtFQUNFLHlCQUFBO0FDaEJGOztBRG1CQTtFQUNFLG9DQUFBO0FDaEJGOztBRGtCQTtFQUNFLG9DQUFBO0FDZkY7O0FEaUJBO0VBQ0Usb0NBQUE7QUNkRjs7QURnQkE7RUFDRSxvQ0FBQTtBQ2JGOztBRGVBO0VBQ0Usb0NBQUE7QUNaRjs7QURjQTtFQUNFLG9DQUFBO0FDWEY7O0FEYUE7RUFDRSxvQ0FBQTtBQ1ZGOztBRFlBO0VBQ0Usb0NBQUE7QUNURjs7QURXQTtFQUNFLG9DQUFBO0FDUkY7O0FEVUE7RUFDRSxvQ0FBQTtBQ1BGOztBRFNBO0VBQ0Usb0NBQUE7QUNORjs7QURRQTtFQUNFLG9DQUFBO0FDTEY7O0FEUUE7RUFDRSx3RkFBQTtBQ0xGOztBQTlGSTtFQUNFLHlCRGFhO0VDWmIsbUJBQUE7QUFpR047O0FBL0ZJO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUFpR04iLCJmaWxlIjoiYXBwcy93ZWIvc3JjL2FwcC9mZWF0dXJlcy9hZG1pbi9yb2xlcy9yb2xlLXBlcm1pc3Npb25zL3JvbGUtcGVybWlzc2lvbi10ZWFtL3JvbGUtcGVybWlzc2lvbi10ZWFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVG9vIHNwZWNpZmljIHdlIG5lZWQgdG8gZWl0aGVyIHJlbmFtZSB0aGVtIG9yIHJlbW92ZSB0aGVtLlxuJGdyZXktdGV4dDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuJHNlbGVjdGVkLWZpZWxkLWJvcmRlcjogI2U2ZjVmZTtcbiR0YWJsZS1yb3ctaG92ZXI6ICNmMGYxZjI7XG5cbkBtaXhpbiBmb3JtLWJ1aWxkZXItbWF0LWljb24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi8vXG5cbiRib3JkZXItZ3JheTogI2Q1ZDhkYjtcbiRjb2xvci1yZWQ6ICNlNjA0MDQ7XG4kY29sb3ItcmVkLWRhcms6ICNhZDFiMWI7XG4kY29sb3ItcmVkLWxpZ2h0OiAjZmZjZGQyO1xuJGNvbG9yLWdyYXk6ICM1ODYwNjk7XG4kY29sb3ItZ3JheS1saWdodDogI2Y3ZjhmODtcbiRjb2xvci13aGl0ZTogI2ZmZmZmZjtcbiRjb2xvci1ibGFjazogIzAwMDAwMDtcbiRjb2xvci1wcmltYXJ5OiAjMDQ4YmU2O1xuJGNvbG9yLXByaW1hcnktZGFyazogIzAwNTc5NztcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiAjZGVmMmZlO1xuJGNvbG9yLWFjY2VudDogIzAzN2RkMTtcbiRjb2xvci1ib3JkZXItbGlnaHQ6ICNlMGUwZTA7XG4kY29sb3ItZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICRjb2xvci13aGl0ZSAwJSwgJGNvbG9yLXByaW1hcnktbGlnaHQgNzguMTIlLCAkc2VsZWN0ZWQtZmllbGQtYm9yZGVyIDEwMCUpO1xuXG4uY29sb3ItcmVkIHtcbiAgY29sb3I6ICRjb2xvci1yZWQgIWltcG9ydGFudDtcbn1cbi5jb2xvci1yZWQtZGFyayB7XG4gIGNvbG9yOiAkY29sb3ItcmVkLWRhcmsgIWltcG9ydGFudDtcbn1cbi5jb2xvci1yZWQtbGlnaHQge1xuICBjb2xvcjogJGNvbG9yLXJlZC1saWdodCAhaW1wb3J0YW50O1xufVxuLmNvbG9yLWdyYXkge1xuICBjb2xvcjogJGNvbG9yLWdyYXkgIWltcG9ydGFudDtcbn1cbi5jb2xvci1ncmF5LWxpZ2h0IHtcbiAgY29sb3I6ICRjb2xvci1ncmF5LWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uY29sb3Itd2hpdGUge1xuICBjb2xvcjogJGNvbG9yLXdoaXRlICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItYmxhY2sge1xuICBjb2xvcjogJGNvbG9yLWJsYWNrICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItYm9yZGVyLWxpZ2h0IHtcbiAgY29sb3I6ICRjb2xvci1ib3JkZXItbGlnaHQgIWltcG9ydGFudDtcbn1cbi5jb2xvci1wcmltYXJ5IHtcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5ICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItcHJpbWFyeS1kYXJrIHtcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5LWRhcmsgIWltcG9ydGFudDtcbn1cbi5jb2xvci1wcmltYXJ5LWxpZ2h0IHtcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5LWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItYWNjZW50IHtcbiAgY29sb3I6ICRjb2xvci1hY2NlbnQgIWltcG9ydGFudDtcbn1cblxuLmJhY2tncm91bmQtcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZCAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtcmVkLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLWRhcmsgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLXJlZC1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtbGlnaHQgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLWdyYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheSAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtZ3JheS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5LWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZSAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2sgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLWJvcmRlci1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ib3JkZXItbGlnaHQgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeSAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtcHJpbWFyeS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnktZGFyayAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtcHJpbWFyeS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5LWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1hY2NlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYWNjZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrZ3JvdW5kLWdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogJGNvbG9yLWdyYWRpZW50ICFpbXBvcnRhbnQ7XG59XG4iLCJAaW1wb3J0ICdnbG9iYWwtc3R5bGUtaGVscGVycy9jb2xvcnMnO1xuXG54ZW5vbi1yb2xlLXBlcm1pc3Npb24tdGVhbSB7XG4gIG1hdC1jaGVja2JveCB7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheS1saWdodDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgfVxuICAgIC5tYXQtY2hlY2tib3gtbGF5b3V0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG59XG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolePermissionTeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xenon-role-permission-team',
                styleUrls: ['./role-permission-team.component.scss'],
                template: ` <p class="p-0 text-caption2">Choose Permissions to grant to this role</p>
    <div *ngFor="let permission of permissions" fxLayoutAlign="start center">
      <mat-checkbox
        [checked]="permission.RoleHasPermission"
        [(ngModel)]="permission.RoleHasPermission"
        (change)="newPermissions.emit(permissions)"
        class="text-body1 w-100 pt-1"
        fxLayoutAlign="start center"
        >{{ permission.Description }}</mat-checkbox
      >
    </div>`,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], null, { permissions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], newPermissions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/admin/roles/role-permissions/role-permissions.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/admin/roles/role-permissions/role-permissions.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RolePermissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolePermissionsComponent", function() { return RolePermissionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _xenon_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xenon/ui */ "../../libs/ui/src/index.ts");
/* harmony import */ var _xenon_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @xenon/api */ "../../libs/api/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/extended */ "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _role_permission_admin_role_permission_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./role-permission-admin/role-permission-admin.component */ "./src/app/features/admin/roles/role-permissions/role-permission-admin/role-permission-admin.component.ts");
/* harmony import */ var _role_permission_tasks_role_permission_tasks_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./role-permission-tasks/role-permission-tasks.component */ "./src/app/features/admin/roles/role-permissions/role-permission-tasks/role-permission-tasks.component.ts");
/* harmony import */ var _role_permission_forms_role_permission_forms_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./role-permission-forms/role-permission-forms.component */ "./src/app/features/admin/roles/role-permissions/role-permission-forms/role-permission-forms.component.ts");
/* harmony import */ var _role_permission_drive_role_permission_drive_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./role-permission-drive/role-permission-drive.component */ "./src/app/features/admin/roles/role-permissions/role-permission-drive/role-permission-drive.component.ts");
/* harmony import */ var _role_permission_team_role_permission_team_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./role-permission-team/role-permission-team.component */ "./src/app/features/admin/roles/role-permissions/role-permission-team/role-permission-team.component.ts");


























function RolePermissionsComponent_div_18_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Permissions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "xenon-role-permission-admin", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newPermissions", function RolePermissionsComponent_div_18_div_23_Template_xenon_role_permission_admin_newPermissions_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.updatePermissionList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("permissions", ctx_r2.getPermissionByGroup("admin"));
} }
function RolePermissionsComponent_div_18_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Task Permissions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "xenon-role-permission-tasks", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newPermissions", function RolePermissionsComponent_div_18_div_25_Template_xenon_role_permission_tasks_newPermissions_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.taskTemplatePermissions = $event; })("newDefaultPermission", function RolePermissionsComponent_div_18_div_25_Template_xenon_role_permission_tasks_newDefaultPermission_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.taskDefaultTemplatePermission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("roleID", ctx_r3.data.role.ID);
} }
function RolePermissionsComponent_div_18_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Form Permissions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "xenon-role-permission-forms", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newPermissions", function RolePermissionsComponent_div_18_div_27_Template_xenon_role_permission_forms_newPermissions_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.formTemplatePermissions = $event; })("newDefaultPermission", function RolePermissionsComponent_div_18_div_27_Template_xenon_role_permission_forms_newDefaultPermission_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.formDefaultTemplatePermission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("roleID", ctx_r4.data.role.ID);
} }
function RolePermissionsComponent_div_18_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Permissions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "xenon-role-permission-drive", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newPermissions", function RolePermissionsComponent_div_18_div_29_Template_xenon_role_permission_drive_newPermissions_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.updatePermissionList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("permissions", ctx_r5.getPermissionByGroup("drive"));
} }
function RolePermissionsComponent_div_18_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Permissions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "xenon-role-permission-team", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newPermissions", function RolePermissionsComponent_div_18_div_31_Template_xenon_role_permission_team_newPermissions_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.updatePermissionList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("permissions", ctx_r6.getPermissionByGroup("team"));
} }
const _c0 = function (a0) { return { "selected-nav": a0 }; };
function RolePermissionsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-action-list", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolePermissionsComponent_div_18_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.currentTab.next("admin"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolePermissionsComponent_div_18_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.currentTab.next("tasks"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "check_box");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Tasks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolePermissionsComponent_div_18_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.currentTab.next("forms"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "content_paste");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Forms ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolePermissionsComponent_div_18_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.currentTab.next("drive"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Drive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolePermissionsComponent_div_18_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.currentTab.next("team"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "people_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RolePermissionsComponent_div_18_div_23_Template, 5, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RolePermissionsComponent_div_18_div_25_Template, 5, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RolePermissionsComponent_div_18_div_27_Template, 5, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RolePermissionsComponent_div_18_div_29_Template, 5, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RolePermissionsComponent_div_18_div_31_Template, 5, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx_r1.currentTab.value === "admin"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx_r1.currentTab.value === "tasks"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx_r1.currentTab.value === "forms"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx_r1.currentTab.value === "drive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx_r1.currentTab.value === "team"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 10, ctx_r1.currentTab) === "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 12, ctx_r1.currentTab) === "tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 14, ctx_r1.currentTab) === "forms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 16, ctx_r1.currentTab) === "drive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 18, ctx_r1.currentTab) === "team");
} }
class RolePermissionsComponent {
    constructor(data, uiPromptService, notificationService, dialogRef, apiRoleService) {
        this.data = data;
        this.uiPromptService = uiPromptService;
        this.notificationService = notificationService;
        this.dialogRef = dialogRef;
        this.apiRoleService = apiRoleService;
        this.currentTab = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('admin');
        this.allRolePermissions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.nameInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.data.role.Name);
        this.triggeredSaveTemplatePermissions = false;
        this.apiRoleService
            .getPermissionsByRole(data.role.ID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe((result) => {
            if (result.Status === 'success') {
                this.allRolePermissions.next(result.RolePermissions);
            }
            else {
                this.notificationService.show(_xenon_ui__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].error, 'Close', result.Message, 5000);
            }
        });
    }
    deleteRole() {
        this.apiRoleService
            .deleteRole(this.data.role.ID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe((result) => {
            if (result.Status === 'success') {
                this.notificationService.show(_xenon_ui__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].success, 'Close', 'Role Deleted', 5000);
            }
            else {
                this.notificationService.show(_xenon_ui__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].error, 'Close', result.Message, 5000);
            }
        });
    }
    getPermissionByGroup(group) {
        return this.allRolePermissions.value.filter((permission) => permission.PermissionGroup === group);
    }
    saveRole() {
        let saveRoleSuccess = true;
        this.triggeredSaveTemplatePermissions = true;
        this.data.role.Name = this.nameInput.value;
        const newPermissionList = this.getPermissionIdList();
        if (newPermissionList.length > 0) {
            this.apiRoleService
                .setPermissionsByRole(this.data.role.ID, this.getPermissionIdList())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
                .subscribe((result) => {
                if (result.Status !== 'success') {
                    saveRoleSuccess = false;
                }
            });
        }
        saveRoleSuccess = this.saveTaskPermissions(saveRoleSuccess);
        saveRoleSuccess = this.saveFormPermissions(saveRoleSuccess);
        this.apiRoleService
            .updateRole(this.data.role)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe((result) => {
            if (result.Status !== 'success') {
                saveRoleSuccess = false;
            }
        });
        if (saveRoleSuccess) {
            this.notificationService.show(_xenon_ui__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].success, 'Close', 'Permissions Saved', 5000);
            this.data.refresh();
            this.dialogRef.close();
        }
        else {
            this.notificationService.show(_xenon_ui__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].error, 'Close', 'Something went wrong saving permissions', 5000);
        }
    }
    close() {
        this.dialogRef.close();
    }
    updatePermissionList(newPermissions) {
        let newPermissionList;
        newPermissionList = this.allRolePermissions.value.map((permission) => {
            if (newPermissions.some((newPermission) => newPermission.ID === permission.ID)) {
                return newPermissions.find((newPermission) => newPermission.ID === permission.ID);
            }
            else {
                return permission;
            }
        });
    }
    getPermissionIdList() {
        return this.allRolePermissions.value.reduce((acc, cur) => {
            if (!cur.RoleHasPermission)
                return acc;
            if (acc.length > 0) {
                return [...acc, cur.ID];
            }
            else {
                return [cur.ID];
            }
        }, []);
    }
    saveTaskPermissions(saveRoleSuccess) {
        if (this.taskDefaultTemplatePermission) {
            this.apiRoleService
                .setDefaultTaskTemplateRolePermissionsByRole(this.taskDefaultTemplatePermission[0])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
                .subscribe((result) => {
                if (result.Status !== 'success') {
                    saveRoleSuccess = false;
                }
            });
        }
        if (this.taskTemplatePermissions) {
            this.apiRoleService
                .setTaskTemplateRolePermissionsByRole(this.taskTemplatePermissions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
                .subscribe((result) => {
                if (result.Status !== 'success') {
                    saveRoleSuccess = false;
                }
            });
        }
        return saveRoleSuccess;
    }
    saveFormPermissions(saveRoleSuccess) {
        if (this.formDefaultTemplatePermission) {
            this.apiRoleService
                .setDefaultFormTemplateRolePermissionsByRole(this.formDefaultTemplatePermission[0])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
                .subscribe((result) => {
                if (result.Status !== 'success') {
                    saveRoleSuccess = false;
                }
            });
        }
        if (this.formTemplatePermissions) {
            this.apiRoleService
                .setFormTemplateRolePermissionsByRole(this.formTemplatePermissions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
                .subscribe((result) => {
                if (result.Status !== 'success') {
                    saveRoleSuccess = false;
                }
            });
        }
        return saveRoleSuccess;
    }
}
RolePermissionsComponent.ɵfac = function RolePermissionsComponent_Factory(t) { return new (t || RolePermissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_ui__WEBPACK_IMPORTED_MODULE_1__["UiPromptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_ui__WEBPACK_IMPORTED_MODULE_1__["UiNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_api__WEBPACK_IMPORTED_MODULE_2__["ApiRoleService"])); };
RolePermissionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RolePermissionsComponent, selectors: [["xenon-role-permissions"]], decls: 20, vars: 5, consts: [["fxLayoutAlign", "space-between center", 1, "background-primary", "color-white", "w-100", "py-2"], ["fxLayoutAlign", "start center"], ["mat-icon-button", "", 1, "mx-2", 3, "click"], ["matInput", "", 3, "formControl"], [1, "mx-3", "clickable", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["fxLayout", "row", "class", "page-height overflow-y-auto background-white", 4, "ngIf"], ["fxLayout", "row", 1, "page-height", "overflow-y-auto", "background-white"], ["fxLayout", "column", "fxFlex", "15%", 1, "h-100", "side-nav"], [1, "pr-5"], ["mat-list-item", "", 1, "nav-button", 3, "ngClass", "click"], [1, "mr-2", "material-icons-outlined"], ["class", "w-100", 4, "ngIf"], [1, "w-100"], [1, "mb-0"], [3, "permissions", "newPermissions"], [3, "roleID", "newPermissions", "newDefaultPermission"]], template: function RolePermissionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolePermissionsComponent_Template_button_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolePermissionsComponent_Template_button_click_8_listener() { return ctx.saveRole(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-menu", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolePermissionsComponent_Template_button_click_14_listener() { return ctx.deleteRole(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "mode_edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Delete Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RolePermissionsComponent_div_18_Template, 33, 30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.nameInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 3, ctx.allRolePermissions));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__["DefaultClassDirective"], _role_permission_admin_role_permission_admin_component__WEBPACK_IMPORTED_MODULE_16__["RolePermissionAdminComponent"], _role_permission_tasks_role_permission_tasks_component__WEBPACK_IMPORTED_MODULE_17__["RolePermissionTasksComponent"], _role_permission_forms_role_permission_forms_component__WEBPACK_IMPORTED_MODULE_18__["RolePermissionFormsComponent"], _role_permission_drive_role_permission_drive_component__WEBPACK_IMPORTED_MODULE_19__["RolePermissionDriveComponent"], _role_permission_team_role_permission_team_component__WEBPACK_IMPORTED_MODULE_20__["RolePermissionTeamComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]], styles: [".color-red[_ngcontent-%COMP%] {\n  color: #e60404 !important;\n}\n\n.color-red-dark[_ngcontent-%COMP%] {\n  color: #ad1b1b !important;\n}\n\n.color-red-light[_ngcontent-%COMP%] {\n  color: #ffcdd2 !important;\n}\n\n.color-gray[_ngcontent-%COMP%] {\n  color: #586069 !important;\n}\n\n.color-gray-light[_ngcontent-%COMP%] {\n  color: #f7f8f8 !important;\n}\n\n.color-white[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\n\n.color-black[_ngcontent-%COMP%] {\n  color: #000000 !important;\n}\n\n.color-border-light[_ngcontent-%COMP%] {\n  color: #e0e0e0 !important;\n}\n\n.color-primary[_ngcontent-%COMP%] {\n  color: #048be6 !important;\n}\n\n.color-primary-dark[_ngcontent-%COMP%] {\n  color: #005797 !important;\n}\n\n.color-primary-light[_ngcontent-%COMP%] {\n  color: #def2fe !important;\n}\n\n.color-accent[_ngcontent-%COMP%] {\n  color: #037dd1 !important;\n}\n\n.background-red[_ngcontent-%COMP%] {\n  background-color: #e60404 !important;\n}\n\n.background-red-dark[_ngcontent-%COMP%] {\n  background-color: #ad1b1b !important;\n}\n\n.background-red-light[_ngcontent-%COMP%] {\n  background-color: #ffcdd2 !important;\n}\n\n.background-gray[_ngcontent-%COMP%] {\n  background-color: #586069 !important;\n}\n\n.background-gray-light[_ngcontent-%COMP%] {\n  background-color: #f7f8f8 !important;\n}\n\n.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n}\n\n.background-black[_ngcontent-%COMP%] {\n  background-color: #000000 !important;\n}\n\n.background-border-light[_ngcontent-%COMP%] {\n  background-color: #e0e0e0 !important;\n}\n\n.background-primary[_ngcontent-%COMP%] {\n  background-color: #048be6 !important;\n}\n\n.background-primary-dark[_ngcontent-%COMP%] {\n  background-color: #005797 !important;\n}\n\n.background-primary-light[_ngcontent-%COMP%] {\n  background-color: #def2fe !important;\n}\n\n.background-accent[_ngcontent-%COMP%] {\n  background-color: #037dd1 !important;\n}\n\n.background-gradient[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #ffffff 0%, #def2fe 78.12%, #e6f5fe 100%) !important;\n}\n\n[_nghost-%COMP%] {\n  overflow-y: hidden;\n}\n\n.side-nav[_ngcontent-%COMP%] {\n  border-right: #e0e0e0 solid 1px;\n  padding-top: 12px;\n}\n\n.page-height[_ngcontent-%COMP%] {\n  height: calc(100% - 56px);\n}\n\n.nav-button[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover, .nav-button[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus, .selected-nav[_ngcontent-%COMP%] {\n  background-color: #def2fe;\n  border-top-right-radius: 25px;\n  border-bottom-right-radius: 25px;\n  color: #048be6;\n}\n\nsection[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-bottom: #e0e0e0 solid 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC1zdHlsZS1oZWxwZXJzL2NvbG9ycy5zY3NzIiwiYXBwcy93ZWIvc3JjL2FwcC9mZWF0dXJlcy9hZG1pbi9yb2xlcy9yb2xlLXBlcm1pc3Npb25zL3JvbGUtcGVybWlzc2lvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJBO0VBQ0UseUJBQUE7QUMzQkY7O0FENkJBO0VBQ0UseUJBQUE7QUMxQkY7O0FENEJBO0VBQ0UseUJBQUE7QUN6QkY7O0FEMkJBO0VBQ0UseUJBQUE7QUN4QkY7O0FEMEJBO0VBQ0UseUJBQUE7QUN2QkY7O0FEeUJBO0VBQ0UseUJBQUE7QUN0QkY7O0FEd0JBO0VBQ0UseUJBQUE7QUNyQkY7O0FEdUJBO0VBQ0UseUJBQUE7QUNwQkY7O0FEc0JBO0VBQ0UseUJBQUE7QUNuQkY7O0FEcUJBO0VBQ0UseUJBQUE7QUNsQkY7O0FEb0JBO0VBQ0UseUJBQUE7QUNqQkY7O0FEbUJBO0VBQ0UseUJBQUE7QUNoQkY7O0FEbUJBO0VBQ0Usb0NBQUE7QUNoQkY7O0FEa0JBO0VBQ0Usb0NBQUE7QUNmRjs7QURpQkE7RUFDRSxvQ0FBQTtBQ2RGOztBRGdCQTtFQUNFLG9DQUFBO0FDYkY7O0FEZUE7RUFDRSxvQ0FBQTtBQ1pGOztBRGNBO0VBQ0Usb0NBQUE7QUNYRjs7QURhQTtFQUNFLG9DQUFBO0FDVkY7O0FEWUE7RUFDRSxvQ0FBQTtBQ1RGOztBRFdBO0VBQ0Usb0NBQUE7QUNSRjs7QURVQTtFQUNFLG9DQUFBO0FDUEY7O0FEU0E7RUFDRSxvQ0FBQTtBQ05GOztBRFFBO0VBQ0Usb0NBQUE7QUNMRjs7QURRQTtFQUNFLHdGQUFBO0FDTEY7O0FBaEdBO0VBQ0Usa0JBQUE7QUFtR0Y7O0FBaEdBO0VBQ0UsK0JBQUE7RUFDQSxpQkFBQTtBQW1HRjs7QUFoR0E7RUFDRSx5QkFBQTtBQW1HRjs7QUFoR0E7OztFQUdFLHlCREtvQjtFQ0pwQiw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBQW1HRjs7QUFoR0E7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7QUFtR0YiLCJmaWxlIjoiYXBwcy93ZWIvc3JjL2FwcC9mZWF0dXJlcy9hZG1pbi9yb2xlcy9yb2xlLXBlcm1pc3Npb25zL3JvbGUtcGVybWlzc2lvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUb28gc3BlY2lmaWMgd2UgbmVlZCB0byBlaXRoZXIgcmVuYW1lIHRoZW0gb3IgcmVtb3ZlIHRoZW0uXG4kZ3JleS10ZXh0OiByZ2JhKDAsIDAsIDAsIDAuNik7XG4kc2VsZWN0ZWQtZmllbGQtYm9yZGVyOiAjZTZmNWZlO1xuJHRhYmxlLXJvdy1ob3ZlcjogI2YwZjFmMjtcblxuQG1peGluIGZvcm0tYnVpbGRlci1tYXQtaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLy9cblxuJGJvcmRlci1ncmF5OiAjZDVkOGRiO1xuJGNvbG9yLXJlZDogI2U2MDQwNDtcbiRjb2xvci1yZWQtZGFyazogI2FkMWIxYjtcbiRjb2xvci1yZWQtbGlnaHQ6ICNmZmNkZDI7XG4kY29sb3ItZ3JheTogIzU4NjA2OTtcbiRjb2xvci1ncmF5LWxpZ2h0OiAjZjdmOGY4O1xuJGNvbG9yLXdoaXRlOiAjZmZmZmZmO1xuJGNvbG9yLWJsYWNrOiAjMDAwMDAwO1xuJGNvbG9yLXByaW1hcnk6ICMwNDhiZTY7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjMDA1Nzk3O1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6ICNkZWYyZmU7XG4kY29sb3ItYWNjZW50OiAjMDM3ZGQxO1xuJGNvbG9yLWJvcmRlci1saWdodDogI2UwZTBlMDtcbiRjb2xvci1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgJGNvbG9yLXdoaXRlIDAlLCAkY29sb3ItcHJpbWFyeS1saWdodCA3OC4xMiUsICRzZWxlY3RlZC1maWVsZC1ib3JkZXIgMTAwJSk7XG5cbi5jb2xvci1yZWQge1xuICBjb2xvcjogJGNvbG9yLXJlZCAhaW1wb3J0YW50O1xufVxuLmNvbG9yLXJlZC1kYXJrIHtcbiAgY29sb3I6ICRjb2xvci1yZWQtZGFyayAhaW1wb3J0YW50O1xufVxuLmNvbG9yLXJlZC1saWdodCB7XG4gIGNvbG9yOiAkY29sb3ItcmVkLWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItZ3JheSB7XG4gIGNvbG9yOiAkY29sb3ItZ3JheSAhaW1wb3J0YW50O1xufVxuLmNvbG9yLWdyYXktbGlnaHQge1xuICBjb2xvcjogJGNvbG9yLWdyYXktbGlnaHQgIWltcG9ydGFudDtcbn1cbi5jb2xvci13aGl0ZSB7XG4gIGNvbG9yOiAkY29sb3Itd2hpdGUgIWltcG9ydGFudDtcbn1cbi5jb2xvci1ibGFjayB7XG4gIGNvbG9yOiAkY29sb3ItYmxhY2sgIWltcG9ydGFudDtcbn1cbi5jb2xvci1ib3JkZXItbGlnaHQge1xuICBjb2xvcjogJGNvbG9yLWJvcmRlci1saWdodCAhaW1wb3J0YW50O1xufVxuLmNvbG9yLXByaW1hcnkge1xuICBjb2xvcjogJGNvbG9yLXByaW1hcnkgIWltcG9ydGFudDtcbn1cbi5jb2xvci1wcmltYXJ5LWRhcmsge1xuICBjb2xvcjogJGNvbG9yLXByaW1hcnktZGFyayAhaW1wb3J0YW50O1xufVxuLmNvbG9yLXByaW1hcnktbGlnaHQge1xuICBjb2xvcjogJGNvbG9yLXByaW1hcnktbGlnaHQgIWltcG9ydGFudDtcbn1cbi5jb2xvci1hY2NlbnQge1xuICBjb2xvcjogJGNvbG9yLWFjY2VudCAhaW1wb3J0YW50O1xufVxuXG4uYmFja2dyb3VuZC1yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1yZWQtZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtZGFyayAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtcmVkLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC1saWdodCAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtZ3JheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5ICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1ncmF5LWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyYXktbGlnaHQgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjayAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtYm9yZGVyLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvcmRlci1saWdodCAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5ICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1wcmltYXJ5LWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeS1kYXJrICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1wcmltYXJ5LWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnktbGlnaHQgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLWFjY2VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1hY2NlbnQgIWltcG9ydGFudDtcbn1cblxuLmJhY2tncm91bmQtZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiAkY29sb3ItZ3JhZGllbnQgIWltcG9ydGFudDtcbn1cbiIsIkBpbXBvcnQgJ2dsb2JhbC1zdHlsZS1oZWxwZXJzL2NvbG9ycyc7XG5cbjpob3N0IHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4uc2lkZS1uYXYge1xuICBib3JkZXItcmlnaHQ6ICRjb2xvci1ib3JkZXItbGlnaHQgc29saWQgMXB4O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn1cblxuLnBhZ2UtaGVpZ2h0IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1NnB4KTtcbn1cblxuLm5hdi1idXR0b24gOmhvdmVyLFxuLm5hdi1idXR0b24gOmZvY3VzLFxuLnNlbGVjdGVkLW5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5LWxpZ2h0O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1cHg7XG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbn1cblxuc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1ib3R0b206ICRjb2xvci1ib3JkZXItbGlnaHQgc29saWQgMXB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolePermissionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xenon-role-permissions',
                templateUrl: './role-permissions.component.html',
                styleUrls: ['./role-permissions.component.scss'],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
            }] }, { type: _xenon_ui__WEBPACK_IMPORTED_MODULE_1__["UiPromptService"] }, { type: _xenon_ui__WEBPACK_IMPORTED_MODULE_1__["UiNotificationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }, { type: _xenon_api__WEBPACK_IMPORTED_MODULE_2__["ApiRoleService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/admin/roles/roles-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/admin/roles/roles-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: RolesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesRoutingModule", function() { return RolesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _roles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roles.component */ "./src/app/features/admin/roles/roles.component.ts");





const routes = [
    {
        path: '',
        component: _roles_component__WEBPACK_IMPORTED_MODULE_2__["RolesComponent"],
    },
];
class RolesRoutingModule {
}
RolesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RolesRoutingModule });
RolesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RolesRoutingModule_Factory(t) { return new (t || RolesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RolesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/admin/roles/roles.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/admin/roles/roles.component.ts ***!
  \*********************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _xenon_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @xenon/api */ "../../libs/api/src/index.ts");
/* harmony import */ var _role_permissions_role_permissions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./role-permissions/role-permissions.component */ "./src/app/features/admin/roles/role-permissions/role-permissions.component.ts");
/* harmony import */ var _xenon_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @xenon/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _shared_admin_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/admin-base */ "./src/app/shared/admin-base.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _xenon_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @xenon/ui */ "../../libs/ui/src/index.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _libs_ui_src_lib_components_ui_string_search_ui_string_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../libs/ui/src/lib/components/ui-string-search/ui-string-search.component */ "../../libs/ui/src/lib/components/ui-string-search/ui-string-search.component.ts");
/* harmony import */ var _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./role-list/role-list.component */ "./src/app/features/admin/roles/role-list/role-list.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




















class RolesComponent extends _shared_admin_base__WEBPACK_IMPORTED_MODULE_5__["AdminBase"] {
    constructor(uiPromptService, notificationService, dialog, apiRoleService, localStorageService) {
        super();
        this.uiPromptService = uiPromptService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.apiRoleService = apiRoleService;
        this.localStorageService = localStorageService;
        this.roles$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.cachedRoles = [];
        this.columnsToSearchBy = ['Name', 'ID'];
        this.loggedInUser = this.localStorageService.getItem('user');
        this.searchPipe = new _xenon_utils__WEBPACK_IMPORTED_MODULE_4__["SearchPipe"]();
    }
    ngOnInit() {
        this.refreshData();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    searchChange(searchInput) {
        const filteredRoles = this.searchPipe.transform(this.cachedRoles, searchInput, this.columnsToSearchBy);
        this.roles$.next(filteredRoles);
    }
    createNewRole() {
        this.apiRoleService
            .createRole({
            OrgID: this.loggedInUser.CurrentOrg.ID,
            LocationID: this.loggedInUser.CurrentOrg.ID,
            Name: 'Untitled Role',
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .subscribe((result) => {
            if (result.Status === 'success') {
                this.openRoleForm(result.Role);
            }
            else {
                this.notificationService.show(_xenon_ui__WEBPACK_IMPORTED_MODULE_7__["NotificationType"].error, 'Close', result.Message, 5000);
            }
        });
    }
    openRoleForm(role) {
        this.dialog.open(_role_permissions_role_permissions_component__WEBPACK_IMPORTED_MODULE_3__["RolePermissionsComponent"], {
            data: { role: role, refresh: this.refreshData.bind(this) },
            panelClass: 'full-page-dialog',
        });
    }
    deleteRole(role) {
        const sub = this.uiPromptService
            .prompt(`Are you sure you sure you want to delete "${role.Name}"?`)
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])((r) => {
            return r.ok ? this.apiRoleService.deleteRole(role.ID) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ Status: 'empty' });
        }))
            .subscribe((m) => {
            if (m.Status === 'success') {
                this.notificationService.show(_xenon_ui__WEBPACK_IMPORTED_MODULE_7__["NotificationType"].success, 'Close', 'Deleted Role', 2500);
                setTimeout(() => {
                    this.refreshData();
                }, 2500);
            }
            else {
                this.notificationService.show(_xenon_ui__WEBPACK_IMPORTED_MODULE_7__["NotificationType"].success, 'Close', 'Role failed to delete', 2500);
            }
        });
        this.subscriptions.add(sub);
    }
    refreshData() {
        const sub = this.apiRoleService.getRolesByOrg(this.loggedInUser.CurrentOrg.ID).subscribe((res) => {
            this.cachedRoles = res.OrgRoleList;
            this.roles$.next(res.OrgRoleList);
        });
        this.subscriptions.add(sub);
    }
}
RolesComponent.ɵfac = function RolesComponent_Factory(t) { return new (t || RolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_ui__WEBPACK_IMPORTED_MODULE_7__["UiPromptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_ui__WEBPACK_IMPORTED_MODULE_7__["UiNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_api__WEBPACK_IMPORTED_MODULE_2__["ApiRoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_utils__WEBPACK_IMPORTED_MODULE_4__["UtilLocalStorageService"])); };
RolesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RolesComponent, selectors: [["xenon-roles"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 7, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "page-header"], [1, "title"], [3, "searchString", "label", "searchChange"], [1, "page-body"], [3, "roles", "roleItemClick", "deleteRoleItemClick"], ["mat-fab", "", "mat-flat-button", "", "color", "primary", "aria-label", "Create new Location", 1, "add-button", 3, "click"]], template: function RolesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "xenon-ui-string-search", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchChange", function RolesComponent_Template_xenon_ui_string_search_searchChange_3_listener($event) { return ctx.searchChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "xenon-role-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("roleItemClick", function RolesComponent_Template_xenon_role_list_roleItemClick_6_listener($event) { return ctx.openRoleForm($event); })("deleteRoleItemClick", function RolesComponent_Template_xenon_role_list_deleteRoleItemClick_6_listener($event) { return ctx.deleteRole($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesComponent_Template_button_click_8_listener() { return ctx.createNewRole(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchString", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.search$))("label", "Search Roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("roles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, ctx.roles$));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _libs_ui_src_lib_components_ui_string_search_ui_string_search_component__WEBPACK_IMPORTED_MODULE_10__["UiStringSearchComponent"], _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_11__["RoleListComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"]], styles: [".add-button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvd2ViL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vcm9sZXMvcm9sZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJhcHBzL3dlYi9zcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3JvbGVzL3JvbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xenon-roles',
                styleUrls: ['./roles.component.scss'],
                template: `
    <div class="page-header" fxLayout="row" fxLayoutAlign="space-between center">
      <h6 class="title">Roles</h6>
      <xenon-ui-string-search [searchString]="search$ | async" (searchChange)="searchChange($event)" [label]="'Search Roles'"> </xenon-ui-string-search>
    </div>

    <div class="page-body">
      <xenon-role-list [roles]="roles$ | async" (roleItemClick)="openRoleForm($event)" (deleteRoleItemClick)="deleteRole($event)"></xenon-role-list>
      <button mat-fab mat-flat-button (click)="createNewRole()" class="add-button" color="primary" aria-label="Create new Location">
        <mat-icon>add</mat-icon>
      </button>
    </div>
  `,
            }]
    }], function () { return [{ type: _xenon_ui__WEBPACK_IMPORTED_MODULE_7__["UiPromptService"] }, { type: _xenon_ui__WEBPACK_IMPORTED_MODULE_7__["UiNotificationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }, { type: _xenon_api__WEBPACK_IMPORTED_MODULE_2__["ApiRoleService"] }, { type: _xenon_utils__WEBPACK_IMPORTED_MODULE_4__["UtilLocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/admin/roles/roles.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/admin/roles/roles.module.ts ***!
  \******************************************************/
/*! exports provided: RolesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesModule", function() { return RolesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _roles_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roles-routing.module */ "./src/app/features/admin/roles/roles-routing.module.ts");
/* harmony import */ var _roles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roles.component */ "./src/app/features/admin/roles/roles.component.ts");
/* harmony import */ var _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./role-list/role-list.component */ "./src/app/features/admin/roles/role-list/role-list.component.ts");
/* harmony import */ var _role_permissions_role_permissions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./role-permissions/role-permissions.component */ "./src/app/features/admin/roles/role-permissions/role-permissions.component.ts");
/* harmony import */ var _role_permissions_role_permission_team_role_permission_team_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role-permissions/role-permission-team/role-permission-team.component */ "./src/app/features/admin/roles/role-permissions/role-permission-team/role-permission-team.component.ts");
/* harmony import */ var _role_permissions_role_permission_tasks_role_permission_tasks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./role-permissions/role-permission-tasks/role-permission-tasks.component */ "./src/app/features/admin/roles/role-permissions/role-permission-tasks/role-permission-tasks.component.ts");
/* harmony import */ var _role_permissions_role_permission_forms_role_permission_forms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./role-permissions/role-permission-forms/role-permission-forms.component */ "./src/app/features/admin/roles/role-permissions/role-permission-forms/role-permission-forms.component.ts");
/* harmony import */ var _role_permissions_role_permission_drive_role_permission_drive_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./role-permissions/role-permission-drive/role-permission-drive.component */ "./src/app/features/admin/roles/role-permissions/role-permission-drive/role-permission-drive.component.ts");
/* harmony import */ var _role_permissions_role_permission_admin_role_permission_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./role-permissions/role-permission-admin/role-permission-admin.component */ "./src/app/features/admin/roles/role-permissions/role-permission-admin/role-permission-admin.component.ts");
/* harmony import */ var _role_permissions_role_permission_table_role_permission_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./role-permissions/role-permission-table/role-permission-table.component */ "./src/app/features/admin/roles/role-permissions/role-permission-table/role-permission-table.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _xenon_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @xenon/ui */ "../../libs/ui/src/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
























class RolesModule {
}
RolesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RolesModule });
RolesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RolesModule_Factory(t) { return new (t || RolesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
            _roles_routing_module__WEBPACK_IMPORTED_MODULE_1__["RolesRoutingModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
            _xenon_ui__WEBPACK_IMPORTED_MODULE_13__["UiModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RolesModule, { declarations: [_roles_component__WEBPACK_IMPORTED_MODULE_2__["RolesComponent"],
        _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_3__["RoleListComponent"],
        _role_permissions_role_permissions_component__WEBPACK_IMPORTED_MODULE_4__["RolePermissionsComponent"],
        _role_permissions_role_permission_team_role_permission_team_component__WEBPACK_IMPORTED_MODULE_5__["RolePermissionTeamComponent"],
        _role_permissions_role_permission_tasks_role_permission_tasks_component__WEBPACK_IMPORTED_MODULE_6__["RolePermissionTasksComponent"],
        _role_permissions_role_permission_forms_role_permission_forms_component__WEBPACK_IMPORTED_MODULE_7__["RolePermissionFormsComponent"],
        _role_permissions_role_permission_drive_role_permission_drive_component__WEBPACK_IMPORTED_MODULE_8__["RolePermissionDriveComponent"],
        _role_permissions_role_permission_admin_role_permission_admin_component__WEBPACK_IMPORTED_MODULE_9__["RolePermissionAdminComponent"],
        _role_permissions_role_permission_table_role_permission_table_component__WEBPACK_IMPORTED_MODULE_10__["RolePermissionTableComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
        _roles_routing_module__WEBPACK_IMPORTED_MODULE_1__["RolesRoutingModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
        _xenon_ui__WEBPACK_IMPORTED_MODULE_13__["UiModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _roles_component__WEBPACK_IMPORTED_MODULE_2__["RolesComponent"],
                    _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_3__["RoleListComponent"],
                    _role_permissions_role_permissions_component__WEBPACK_IMPORTED_MODULE_4__["RolePermissionsComponent"],
                    _role_permissions_role_permission_team_role_permission_team_component__WEBPACK_IMPORTED_MODULE_5__["RolePermissionTeamComponent"],
                    _role_permissions_role_permission_tasks_role_permission_tasks_component__WEBPACK_IMPORTED_MODULE_6__["RolePermissionTasksComponent"],
                    _role_permissions_role_permission_forms_role_permission_forms_component__WEBPACK_IMPORTED_MODULE_7__["RolePermissionFormsComponent"],
                    _role_permissions_role_permission_drive_role_permission_drive_component__WEBPACK_IMPORTED_MODULE_8__["RolePermissionDriveComponent"],
                    _role_permissions_role_permission_admin_role_permission_admin_component__WEBPACK_IMPORTED_MODULE_9__["RolePermissionAdminComponent"],
                    _role_permissions_role_permission_table_role_permission_table_component__WEBPACK_IMPORTED_MODULE_10__["RolePermissionTableComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                    _roles_routing_module__WEBPACK_IMPORTED_MODULE_1__["RolesRoutingModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                    _xenon_ui__WEBPACK_IMPORTED_MODULE_13__["UiModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=roles-roles-module.js.map