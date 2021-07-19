(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-admin-form-builder-settings-settings-module"],{

/***/ "./src/app/features/admin/form-builder/settings/settings-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/admin/form-builder/settings/settings-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.component */ "./src/app/features/admin/form-builder/settings/settings.component.ts");





const routes = [{ path: '', component: _settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"] }];
class SettingsRoutingModule {
}
SettingsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SettingsRoutingModule });
SettingsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SettingsRoutingModule_Factory(t) { return new (t || SettingsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/admin/form-builder/settings/settings.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/admin/form-builder/settings/settings.component.ts ***!
  \****************************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _xenon_layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @xenon/layouts */ "../../libs/layouts/src/index.ts");
/* harmony import */ var _xenon_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @xenon/api */ "../../libs/api/src/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _libs_ui_src_lib_components_ui_fields_ui_fields_permissions_ui_fields_permissions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../libs/ui/src/lib/components/ui-fields/ui-fields-permissions/ui-fields-permissions.component */ "../../libs/ui/src/lib/components/ui-fields/ui-fields-permissions/ui-fields-permissions.component.ts");













class SettingsComponent {
    constructor(formBuilderService, apiRoleService, apiFormService) {
        this.formBuilderService = formBuilderService;
        this.apiRoleService = apiRoleService;
        this.apiFormService = apiFormService;
        this.formTemplateName = 'Form_Template_Name';
        this.formPluralName = 'Plural_Name';
        this.formTemplateDesc = 'Description';
        this.hasRoles = false;
        this.permissionsList = ['Create', 'View', 'Edit', 'Delete'];
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.getRoles();
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    getRoles() {
        this.formBuilderService.currentForm
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((form) => {
            this.currentForm = form;
            const orgID = form.OrgID;
            return orgID;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((orgID) => this.apiRoleService.getRolesByOrg(orgID)))
            .subscribe((response) => {
            this.rolesList = response.OrgRoleList;
            if (this.rolesList && this.rolesList.length > 0) {
                this.hasRoles = true;
            }
        });
    }
    compareFn(option, value) {
        return option && value ? option.ID === value.ID : option === value;
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_layouts__WEBPACK_IMPORTED_MODULE_2__["FormBuilderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_api__WEBPACK_IMPORTED_MODULE_3__["ApiRoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_api__WEBPACK_IMPORTED_MODULE_3__["ApiFormService"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["xenon-settings"]], decls: 25, vars: 7, consts: [[1, "settings-container", "background-gradient"], [1, "sidebar"], [1, "left-buttons"], [1, "main-form-container", "text-center"], [1, "main-form", "background-white"], [1, "task-field", "border-bottom", "text-left"], [1, "icon-row"], [3, "floatLabel"], ["matInput", "", "placeholder", "Form_Template_Name", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Plural_Name", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Description", 3, "ngModel", "ngModelChange"], [3, "selectedTask", "newRoleList"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " content_paste ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_12_listener($event) { return ctx.currentForm.Name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_14_listener($event) { return ctx.currentForm.NamePlural = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_20_listener($event) { return ctx.currentForm.Description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "xenon-ui-fields-permissions", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newRoleList", function SettingsComponent_Template_xenon_ui_fields_permissions_newRoleList_23_listener($event) { return ctx.currentForm.AssignedRoles = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("floatLabel", "never");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentForm.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("floatLabel", "never");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentForm.NamePlural);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("floatLabel", "never");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentForm.Description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedTask", ctx.currentForm);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _libs_ui_src_lib_components_ui_fields_ui_fields_permissions_ui_fields_permissions_component__WEBPACK_IMPORTED_MODULE_9__["UiFieldsPermissionsComponent"]], styles: [".color-red {\n  color: #e60404 !important;\n}\n\n.color-red-dark {\n  color: #ad1b1b !important;\n}\n\n.color-red-light {\n  color: #ffcdd2 !important;\n}\n\n.color-gray {\n  color: #586069 !important;\n}\n\n.color-gray-light {\n  color: #f7f8f8 !important;\n}\n\n.color-white {\n  color: #ffffff !important;\n}\n\n.color-black {\n  color: #000000 !important;\n}\n\n.color-border-light {\n  color: #e0e0e0 !important;\n}\n\n.color-primary {\n  color: #048be6 !important;\n}\n\n.color-primary-dark {\n  color: #005797 !important;\n}\n\n.color-primary-light {\n  color: #def2fe !important;\n}\n\n.color-accent {\n  color: #037dd1 !important;\n}\n\n.background-red {\n  background-color: #e60404 !important;\n}\n\n.background-red-dark {\n  background-color: #ad1b1b !important;\n}\n\n.background-red-light {\n  background-color: #ffcdd2 !important;\n}\n\n.background-gray {\n  background-color: #586069 !important;\n}\n\n.background-gray-light {\n  background-color: #f7f8f8 !important;\n}\n\n.background-white {\n  background-color: #ffffff !important;\n}\n\n.background-black {\n  background-color: #000000 !important;\n}\n\n.background-border-light {\n  background-color: #e0e0e0 !important;\n}\n\n.background-primary {\n  background-color: #048be6 !important;\n}\n\n.background-primary-dark {\n  background-color: #005797 !important;\n}\n\n.background-primary-light {\n  background-color: #def2fe !important;\n}\n\n.background-accent {\n  background-color: #037dd1 !important;\n}\n\n.background-gradient {\n  background: linear-gradient(180deg, #ffffff 0%, #def2fe 78.12%, #e6f5fe 100%) !important;\n}\n\nxenon-settings .settings-container {\n  display: flex;\n  height: 100%;\n}\n\nxenon-settings .main-form-container {\n  flex-grow: 1;\n  padding: 24px;\n}\n\nxenon-settings .main-form-container .main-form {\n  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);\n  border-radius: 12px;\n  margin-bottom: 20px;\n}\n\nxenon-settings .main-form-container .main-form .task-field {\n  padding: 20px;\n}\n\nxenon-settings .sidebar {\n  width: 260px;\n}\n\nxenon-settings .sidebar .left-buttons {\n  padding: 20px;\n}\n\nxenon-settings .sidebar button {\n  margin-bottom: 10px;\n  display: block;\n}\n\nxenon-settings .icon-row {\n  display: flex;\n  margin-top: 10px;\n}\n\nxenon-settings .icon-row > * {\n  flex: 1;\n  margin-right: 20px;\n}\n\nxenon-settings .icon-row > *:first-child {\n  width: 20px;\n  flex: none;\n}\n\nxenon-settings .icon-row > *:last-child {\n  margin-right: 0;\n  width: 30px;\n  flex: none;\n}\n\nxenon-settings .icon-row mat-icon {\n  width: 20px;\n  height: 20px;\n  margin-top: 15px;\n}\n\nxenon-settings .add-button {\n  font-size: 14px;\n  background-color: transparent;\n  width: 100%;\n  text-transform: uppercase;\n  border: 0;\n  border-radius: 5px;\n}\n\nxenon-settings .add-button mat-icon {\n  height: 15px;\n  width: 15px;\n  margin-right: 20px;\n}\n\nxenon-settings .add-button mat-icon svg {\n  vertical-align: top !important;\n}\n\nxenon-settings .info-label {\n  color: rgba(0, 0, 0, 0.6);\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC1zdHlsZS1oZWxwZXJzL2NvbG9ycy5zY3NzIiwiYXBwcy93ZWIvc3JjL2FwcC9mZWF0dXJlcy9hZG1pbi9mb3JtLWJ1aWxkZXIvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJBO0VBQ0UseUJBQUE7QUMzQkY7O0FENkJBO0VBQ0UseUJBQUE7QUMxQkY7O0FENEJBO0VBQ0UseUJBQUE7QUN6QkY7O0FEMkJBO0VBQ0UseUJBQUE7QUN4QkY7O0FEMEJBO0VBQ0UseUJBQUE7QUN2QkY7O0FEeUJBO0VBQ0UseUJBQUE7QUN0QkY7O0FEd0JBO0VBQ0UseUJBQUE7QUNyQkY7O0FEdUJBO0VBQ0UseUJBQUE7QUNwQkY7O0FEc0JBO0VBQ0UseUJBQUE7QUNuQkY7O0FEcUJBO0VBQ0UseUJBQUE7QUNsQkY7O0FEb0JBO0VBQ0UseUJBQUE7QUNqQkY7O0FEbUJBO0VBQ0UseUJBQUE7QUNoQkY7O0FEbUJBO0VBQ0Usb0NBQUE7QUNoQkY7O0FEa0JBO0VBQ0Usb0NBQUE7QUNmRjs7QURpQkE7RUFDRSxvQ0FBQTtBQ2RGOztBRGdCQTtFQUNFLG9DQUFBO0FDYkY7O0FEZUE7RUFDRSxvQ0FBQTtBQ1pGOztBRGNBO0VBQ0Usb0NBQUE7QUNYRjs7QURhQTtFQUNFLG9DQUFBO0FDVkY7O0FEWUE7RUFDRSxvQ0FBQTtBQ1RGOztBRFdBO0VBQ0Usb0NBQUE7QUNSRjs7QURVQTtFQUNFLG9DQUFBO0FDUEY7O0FEU0E7RUFDRSxvQ0FBQTtBQ05GOztBRFFBO0VBQ0Usb0NBQUE7QUNMRjs7QURRQTtFQUNFLHdGQUFBO0FDTEY7O0FBL0ZFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFrR0o7O0FBaEdFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFrR0o7O0FBakdJO0VBQ0UsNEdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBbUdOOztBQWpHTTtFQUNFLGFBQUE7QUFtR1I7O0FBL0ZFO0VBQ0UsWUFBQTtBQWlHSjs7QUEvRkk7RUFDRSxhQUFBO0FBaUdOOztBQS9GSTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQWlHTjs7QUE5RkU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFnR0o7O0FBOUZJO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0FBZ0dOOztBQTlGSTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FBZ0dOOztBQTdGSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQStGTjs7QUE1Rkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBOEZOOztBQTNGRTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQTZGSjs7QUEzRkk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBNkZOOztBQTNGTTtFQUNFLDhCQUFBO0FBNkZSOztBQXpGRTtFQUNFLHlCRDFFUTtFQzJFUixrQkFBQTtBQTJGSiIsImZpbGUiOiJhcHBzL3dlYi9zcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2Zvcm0tYnVpbGRlci9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRvbyBzcGVjaWZpYyB3ZSBuZWVkIHRvIGVpdGhlciByZW5hbWUgdGhlbSBvciByZW1vdmUgdGhlbS5cbiRncmV5LXRleHQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiRzZWxlY3RlZC1maWVsZC1ib3JkZXI6ICNlNmY1ZmU7XG4kdGFibGUtcm93LWhvdmVyOiAjZjBmMWYyO1xuXG5AbWl4aW4gZm9ybS1idWlsZGVyLW1hdC1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4vL1xuXG4kYm9yZGVyLWdyYXk6ICNkNWQ4ZGI7XG4kY29sb3ItcmVkOiAjZTYwNDA0O1xuJGNvbG9yLXJlZC1kYXJrOiAjYWQxYjFiO1xuJGNvbG9yLXJlZC1saWdodDogI2ZmY2RkMjtcbiRjb2xvci1ncmF5OiAjNTg2MDY5O1xuJGNvbG9yLWdyYXktbGlnaHQ6ICNmN2Y4Zjg7XG4kY29sb3Itd2hpdGU6ICNmZmZmZmY7XG4kY29sb3ItYmxhY2s6ICMwMDAwMDA7XG4kY29sb3ItcHJpbWFyeTogIzA0OGJlNjtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICMwMDU3OTc7XG4kY29sb3ItcHJpbWFyeS1saWdodDogI2RlZjJmZTtcbiRjb2xvci1hY2NlbnQ6ICMwMzdkZDE7XG4kY29sb3ItYm9yZGVyLWxpZ2h0OiAjZTBlMGUwO1xuJGNvbG9yLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAkY29sb3Itd2hpdGUgMCUsICRjb2xvci1wcmltYXJ5LWxpZ2h0IDc4LjEyJSwgJHNlbGVjdGVkLWZpZWxkLWJvcmRlciAxMDAlKTtcblxuLmNvbG9yLXJlZCB7XG4gIGNvbG9yOiAkY29sb3ItcmVkICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItcmVkLWRhcmsge1xuICBjb2xvcjogJGNvbG9yLXJlZC1kYXJrICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItcmVkLWxpZ2h0IHtcbiAgY29sb3I6ICRjb2xvci1yZWQtbGlnaHQgIWltcG9ydGFudDtcbn1cbi5jb2xvci1ncmF5IHtcbiAgY29sb3I6ICRjb2xvci1ncmF5ICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItZ3JheS1saWdodCB7XG4gIGNvbG9yOiAkY29sb3ItZ3JheS1saWdodCAhaW1wb3J0YW50O1xufVxuLmNvbG9yLXdoaXRlIHtcbiAgY29sb3I6ICRjb2xvci13aGl0ZSAhaW1wb3J0YW50O1xufVxuLmNvbG9yLWJsYWNrIHtcbiAgY29sb3I6ICRjb2xvci1ibGFjayAhaW1wb3J0YW50O1xufVxuLmNvbG9yLWJvcmRlci1saWdodCB7XG4gIGNvbG9yOiAkY29sb3ItYm9yZGVyLWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItcHJpbWFyeSB7XG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeSAhaW1wb3J0YW50O1xufVxuLmNvbG9yLXByaW1hcnktZGFyayB7XG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeS1kYXJrICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItcHJpbWFyeS1saWdodCB7XG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeS1saWdodCAhaW1wb3J0YW50O1xufVxuLmNvbG9yLWFjY2VudCB7XG4gIGNvbG9yOiAkY29sb3ItYWNjZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrZ3JvdW5kLXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLXJlZC1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC1kYXJrICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1yZWQtbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1ncmF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyYXkgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLWdyYXktbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheS1saWdodCAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLWJsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1ib3JkZXItbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm9yZGVyLWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnkgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLXByaW1hcnktZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5LWRhcmsgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLXByaW1hcnktbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeS1saWdodCAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtYWNjZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWFjY2VudCAhaW1wb3J0YW50O1xufVxuXG4uYmFja2dyb3VuZC1ncmFkaWVudCB7XG4gIGJhY2tncm91bmQ6ICRjb2xvci1ncmFkaWVudCAhaW1wb3J0YW50O1xufVxuIiwiQGltcG9ydCAnZ2xvYmFsLXN0eWxlLWhlbHBlcnMvY29sb3JzJztcblxueGVub24tc2V0dGluZ3Mge1xuICAuc2V0dGluZ3MtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAubWFpbi1mb3JtLWNvbnRhaW5lciB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgLm1haW4tZm9ybSB7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgLnRhc2stZmllbGQge1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuc2lkZWJhciB7XG4gICAgd2lkdGg6IDI2MHB4O1xuXG4gICAgLmxlZnQtYnV0dG9ucyB7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuICAuaWNvbi1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcblxuICAgICYgPiAqIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgfVxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgZmxleDogbm9uZTtcbiAgICB9XG5cbiAgICAmID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgZmxleDogbm9uZTtcbiAgICB9XG5cbiAgICBtYXQtaWNvbiB7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxuICB9XG4gIC5hZGQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgbWF0LWljb24ge1xuICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG5cbiAgICAgIHN2ZyB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3AgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmluZm8tbGFiZWwge1xuICAgIGNvbG9yOiAkZ3JleS10ZXh0O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xenon-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _xenon_layouts__WEBPACK_IMPORTED_MODULE_2__["FormBuilderService"] }, { type: _xenon_api__WEBPACK_IMPORTED_MODULE_3__["ApiRoleService"] }, { type: _xenon_api__WEBPACK_IMPORTED_MODULE_3__["ApiFormService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/admin/form-builder/settings/settings.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/admin/form-builder/settings/settings.module.ts ***!
  \*************************************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/features/admin/form-builder/settings/settings-routing.module.ts");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.component */ "./src/app/features/admin/form-builder/settings/settings.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _xenon_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @xenon/ui */ "../../libs/ui/src/index.ts");















class SettingsModule {
}
SettingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SettingsModule });
SettingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SettingsModule_Factory(t) { return new (t || SettingsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__["SettingsRoutingModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _xenon_ui__WEBPACK_IMPORTED_MODULE_13__["UiFieldsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingsModule, { declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__["SettingsRoutingModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _xenon_ui__WEBPACK_IMPORTED_MODULE_13__["UiFieldsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__["SettingsRoutingModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                    _xenon_ui__WEBPACK_IMPORTED_MODULE_13__["UiFieldsModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=features-admin-form-builder-settings-settings-module.js.map