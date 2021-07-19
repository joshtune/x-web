(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./src/app/features/admin/users/new-user-form/new-user-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/features/admin/users/new-user-form/new-user-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NewUserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserFormComponent", function() { return NewUserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _xenon_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @xenon/api */ "../../libs/api/src/index.ts");
/* harmony import */ var _xenon_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @xenon/ui */ "../../libs/ui/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




















function NewUserFormComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "person_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewUserFormComponent_div_29_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const roleLocationObj_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.openLocationDialog(roleLocationObj_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewUserFormComponent_div_29_div_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const roleLocationObj_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.removeRole(roleLocationObj_r3.role); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const roleLocationObj_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](roleLocationObj_r3.role.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getLocationString(roleLocationObj_r3.locations));
} }
function NewUserFormComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewUserFormComponent_div_29_div_1_Template, 13, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const roleLocationObjects_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", roleLocationObjects_r1);
} }
class NewUserFormComponent {
    constructor(apiRoleService, uiListSelectService, data, dialogRef, formBuilder, apiLocationService, apiUserService, notificationService) {
        this.apiRoleService = apiRoleService;
        this.uiListSelectService = uiListSelectService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.apiLocationService = apiLocationService;
        this.apiUserService = apiUserService;
        this.notificationService = notificationService;
        this.roleLocationObjects = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.formValid = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.createForm();
    }
    createNewUser() {
        const newUser = {
            FirstName: this.newUserForm.value.firstName,
            LastName: this.newUserForm.value.lastName,
            Email: this.newUserForm.value.email,
            OrgID: this.data.CurrentOrg.ID,
            Permission: _xenon_api__WEBPACK_IMPORTED_MODULE_3__["Permissions"].Viewer,
            JobTitle: 'User',
            CreatedBy: this.data.CurrentUser.ID,
            RoleLocations: this.formatForUpdateOrgUser(),
        };
        this.apiUserService
            .createOrgUser(newUser)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .subscribe((result) => {
            if (result.Status === 'success') {
                this.dialogRef.close();
                this.notificationService.show(_xenon_ui__WEBPACK_IMPORTED_MODULE_4__["NotificationType"].success, 'Close', `${newUser.FirstName} ${newUser.LastName} created`, 5000);
            }
            else if (result.Status === 'error') {
                this.notificationService.show(_xenon_ui__WEBPACK_IMPORTED_MODULE_4__["NotificationType"].error, 'Close', `${result.Message}`, 5000);
            }
        });
    }
    close() {
        this.dialogRef.close();
    }
    openRoleDialog() {
        this.apiRoleService.getRolesByOrg(this.data.CurrentOrg.ID).subscribe((response) => {
            this.uiListSelectService.open({
                inputList: response.OrgRoleList,
                currentSelectedList: this.selectedRoles,
                primaryValueSelector1: 'Name',
                compareValueBy: 'ID',
                iconClass: 'person_outline',
            });
            this.uiListSelectService.closed().subscribe((selectedRoles) => {
                if (selectedRoles.length <= 0) {
                    this.roleLocationObjects.next([]);
                    this.selectedRoles = [];
                    return;
                }
                let newSelectedRoles = selectedRoles;
                let oldSelectedRoleLocations = [];
                if (this.roleLocationObjects.value && this.roleLocationObjects.value.length > 0) {
                    newSelectedRoles = selectedRoles.filter((role) => {
                        return !this.roleLocationObjects.value.some((obj) => obj.role.ID === role.ID);
                    });
                    oldSelectedRoleLocations = this.roleLocationObjects.value.filter((obj) => {
                        return selectedRoles.some((role) => {
                            return obj.role.ID === role.ID;
                        });
                    });
                    selectedRoles.forEach((role) => {
                        this.roleLocationObjects.next(this.roleLocationObjects.value.filter((obj) => obj.role.ID === role.ID));
                    });
                }
                this.selectedRoles = selectedRoles;
                if (newSelectedRoles.length > 0) {
                    this.apiLocationService.getLocationsByOrgId(this.data.CurrentOrg.ID).subscribe((locations) => {
                        this.uiListSelectService.open({
                            inputList: locations,
                            primaryValueSelector1: 'Name',
                            compareValueBy: 'ID',
                            iconClass: 'domain',
                        });
                        this.uiListSelectService.closed().subscribe((selectedLocations) => {
                            if (!selectedLocations)
                                return;
                            const newRoleLocations = [{ role: newSelectedRoles[0], locations: selectedLocations }];
                            newSelectedRoles.forEach((role) => {
                                if (newRoleLocations.some((obj) => obj.role.ID !== role.ID)) {
                                    newRoleLocations.push({ role: role, locations: selectedLocations });
                                }
                            });
                            this.roleLocationObjects.next(oldSelectedRoleLocations ? oldSelectedRoleLocations.concat(newRoleLocations) : newRoleLocations);
                            this.checkForm();
                        });
                    });
                }
            });
        });
    }
    openLocationDialog(roleLocationObj) {
        this.apiLocationService.getLocationsByOrgId(this.data.CurrentOrg.ID).subscribe((locations) => {
            this.uiListSelectService.open({
                inputList: locations,
                currentSelectedList: roleLocationObj.locations,
                primaryValueSelector1: 'Name',
                compareValueBy: 'ID',
                iconClass: 'domain',
            });
            this.uiListSelectService.closed().subscribe((selectedLocations) => {
                if (!selectedLocations)
                    return;
                this.roleLocationObjects.next(this.roleLocationObjects.value.map((obj) => {
                    if (obj.role.ID === roleLocationObj.role.ID) {
                        return { role: roleLocationObj.role, locations: selectedLocations };
                    }
                    return obj;
                }));
                this.checkForm();
            });
        });
    }
    removeRole(role) {
        this.selectedRoles = this.selectedRoles.filter((selectedRole) => selectedRole.ID !== role.ID);
        this.roleLocationObjects.next(this.roleLocationObjects.value.filter((roleLocation) => roleLocation.role.ID !== role.ID));
        this.checkForm();
    }
    checkForm() {
        let formValid = true;
        if (!this.newUserForm.valid || !this.roleLocationObjects.value) {
            formValid = false; // not all fields finished.
        }
        else {
            this.roleLocationObjects.value.forEach((obj) => {
                if (!obj.locations) {
                    formValid = false; // no locations
                }
            });
        }
        this.formValid.next(formValid);
    }
    getLocationString(locations) {
        if (!locations)
            return 'Add Location';
        return locations.length <= 1 ? locations[0].Name : `${locations.length} Locations`;
    }
    createForm() {
        this.newUserForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
        });
    }
    formatForUpdateOrgUser() {
        let newFormattedArray = null;
        this.roleLocationObjects.value.forEach((roleLocation) => {
            roleLocation.locations.forEach((location) => {
                if (newFormattedArray) {
                    newFormattedArray.push({ RoleID: roleLocation.role.ID, LocationID: location.ID });
                }
                else {
                    newFormattedArray = [{ RoleID: roleLocation.role.ID, LocationID: location.ID }];
                }
            });
        });
        return newFormattedArray;
    }
}
NewUserFormComponent.ɵfac = function NewUserFormComponent_Factory(t) { return new (t || NewUserFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_api__WEBPACK_IMPORTED_MODULE_3__["ApiRoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_ui__WEBPACK_IMPORTED_MODULE_4__["UiListSelectDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_api__WEBPACK_IMPORTED_MODULE_3__["ApiLocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_api__WEBPACK_IMPORTED_MODULE_3__["ApiUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_ui__WEBPACK_IMPORTED_MODULE_4__["UiNotificationService"])); };
NewUserFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewUserFormComponent, selectors: [["xenon-new-user-form"]], decls: 35, vars: 7, consts: [["fxLayoutAlign", "space-between", 1, "background-white", "nav-divider"], ["fxLayoutAlign", "start center", 1, "ml-3"], ["mat-icon-button", "", 3, "click"], ["fontSet", "material-icons-outlined"], [1, "m-0"], ["mat-stroked-button", "", "color", "primary", 1, "p-2", "m-3", 3, "disabled", "click"], [1, "dialog-body"], ["fxLayout", "column", 3, "formGroup"], ["fxLayoutAlign", "space-between center"], ["appearance", "outline", "fxFlex", "50%", 1, "mr-2"], ["matInput", "", "formControlName", "firstName", 3, "blur"], ["appearance", "outline", "fxFlex", "50%", 1, "ml-2"], ["matInput", "", "formControlName", "lastName", 3, "blur"], ["appearance", "outline", "fxFlex", "100%"], ["matInput", "", "formControlName", "email", 3, "blur"], ["class", "mt-2", 4, "ngIf"], ["mat-button", "", 1, "text-left", "color-primary", "mt-3", "p-0", 3, "click"], [1, "mr-3"], [1, "mt-2"], ["class", "list-row", "fxLayoutAlign", "space-between center", 4, "ngFor", "ngForOf"], ["fxLayoutAlign", "space-between center", 1, "list-row"], ["fxLayoutAlign", "start center"], [1, "mb-0", "text-body1", "ml-3"], ["mat-button", "", 3, "click"], [1, "set-size"], ["mat-icon-button", "", 1, "remove-button", 3, "click"]], template: function NewUserFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewUserFormComponent_Template_button_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add New User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewUserFormComponent_Template_button_click_7_listener() { return ctx.createNewUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "User Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function NewUserFormComponent_Template_input_blur_19_listener() { return ctx.checkForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function NewUserFormComponent_Template_input_blur_23_listener() { return ctx.checkForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function NewUserFormComponent_Template_input_blur_27_listener() { return ctx.checkForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, NewUserFormComponent_div_29_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewUserFormComponent_Template_button_click_31_listener() { return ctx.openRoleDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Add Role ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, ctx.formValid) !== true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newUserForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 5, ctx.roleLocationObjects));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"]], styles: [".color-red[_ngcontent-%COMP%] {\n  color: #e60404 !important;\n}\n\n.color-red-dark[_ngcontent-%COMP%] {\n  color: #ad1b1b !important;\n}\n\n.color-red-light[_ngcontent-%COMP%] {\n  color: #ffcdd2 !important;\n}\n\n.color-gray[_ngcontent-%COMP%] {\n  color: #586069 !important;\n}\n\n.color-gray-light[_ngcontent-%COMP%] {\n  color: #f7f8f8 !important;\n}\n\n.color-white[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\n\n.color-black[_ngcontent-%COMP%] {\n  color: #000000 !important;\n}\n\n.color-border-light[_ngcontent-%COMP%] {\n  color: #e0e0e0 !important;\n}\n\n.color-primary[_ngcontent-%COMP%] {\n  color: #048be6 !important;\n}\n\n.color-primary-dark[_ngcontent-%COMP%] {\n  color: #005797 !important;\n}\n\n.color-primary-light[_ngcontent-%COMP%] {\n  color: #def2fe !important;\n}\n\n.color-accent[_ngcontent-%COMP%] {\n  color: #037dd1 !important;\n}\n\n.background-red[_ngcontent-%COMP%] {\n  background-color: #e60404 !important;\n}\n\n.background-red-dark[_ngcontent-%COMP%] {\n  background-color: #ad1b1b !important;\n}\n\n.background-red-light[_ngcontent-%COMP%] {\n  background-color: #ffcdd2 !important;\n}\n\n.background-gray[_ngcontent-%COMP%] {\n  background-color: #586069 !important;\n}\n\n.background-gray-light[_ngcontent-%COMP%] {\n  background-color: #f7f8f8 !important;\n}\n\n.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n}\n\n.background-black[_ngcontent-%COMP%] {\n  background-color: #000000 !important;\n}\n\n.background-border-light[_ngcontent-%COMP%] {\n  background-color: #e0e0e0 !important;\n}\n\n.background-primary[_ngcontent-%COMP%] {\n  background-color: #048be6 !important;\n}\n\n.background-primary-dark[_ngcontent-%COMP%] {\n  background-color: #005797 !important;\n}\n\n.background-primary-light[_ngcontent-%COMP%] {\n  background-color: #def2fe !important;\n}\n\n.background-accent[_ngcontent-%COMP%] {\n  background-color: #037dd1 !important;\n}\n\n.background-gradient[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #ffffff 0%, #def2fe 78.12%, #e6f5fe 100%) !important;\n}\n\n[_nghost-%COMP%]   .nav-divider[_ngcontent-%COMP%] {\n  border-bottom: #e0e0e0 solid 1px;\n}\n\n[_nghost-%COMP%]   .dialog-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 30px;\n}\n\n[_nghost-%COMP%]   .dialog-body[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  width: 732px;\n}\n\n[_nghost-%COMP%]   .list-row[_ngcontent-%COMP%] {\n  min-height: 40px;\n  border-radius: 50px;\n}\n\n[_nghost-%COMP%]   .list-row[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%] {\n  display: none;\n}\n\n[_nghost-%COMP%]   .list-row[_ngcontent-%COMP%]:hover {\n  background-color: #f7f8f8;\n}\n\n[_nghost-%COMP%]   .list-row[_ngcontent-%COMP%]:hover   .remove-button[_ngcontent-%COMP%] {\n  display: block;\n}\n\n[_nghost-%COMP%]   .set-size[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC1zdHlsZS1oZWxwZXJzL2NvbG9ycy5zY3NzIiwiYXBwcy93ZWIvc3JjL2FwcC9mZWF0dXJlcy9hZG1pbi91c2Vycy9uZXctdXNlci1mb3JtL25ldy11c2VyLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJBO0VBQ0UseUJBQUE7QUMzQkY7O0FENkJBO0VBQ0UseUJBQUE7QUMxQkY7O0FENEJBO0VBQ0UseUJBQUE7QUN6QkY7O0FEMkJBO0VBQ0UseUJBQUE7QUN4QkY7O0FEMEJBO0VBQ0UseUJBQUE7QUN2QkY7O0FEeUJBO0VBQ0UseUJBQUE7QUN0QkY7O0FEd0JBO0VBQ0UseUJBQUE7QUNyQkY7O0FEdUJBO0VBQ0UseUJBQUE7QUNwQkY7O0FEc0JBO0VBQ0UseUJBQUE7QUNuQkY7O0FEcUJBO0VBQ0UseUJBQUE7QUNsQkY7O0FEb0JBO0VBQ0UseUJBQUE7QUNqQkY7O0FEbUJBO0VBQ0UseUJBQUE7QUNoQkY7O0FEbUJBO0VBQ0Usb0NBQUE7QUNoQkY7O0FEa0JBO0VBQ0Usb0NBQUE7QUNmRjs7QURpQkE7RUFDRSxvQ0FBQTtBQ2RGOztBRGdCQTtFQUNFLG9DQUFBO0FDYkY7O0FEZUE7RUFDRSxvQ0FBQTtBQ1pGOztBRGNBO0VBQ0Usb0NBQUE7QUNYRjs7QURhQTtFQUNFLG9DQUFBO0FDVkY7O0FEWUE7RUFDRSxvQ0FBQTtBQ1RGOztBRFdBO0VBQ0Usb0NBQUE7QUNSRjs7QURVQTtFQUNFLG9DQUFBO0FDUEY7O0FEU0E7RUFDRSxvQ0FBQTtBQ05GOztBRFFBO0VBQ0Usb0NBQUE7QUNMRjs7QURRQTtFQUNFLHdGQUFBO0FDTEY7O0FBL0ZFO0VBQ0UsZ0NBQUE7QUFrR0o7O0FBaEdFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBa0dKOztBQWpHSTtFQUNFLFlBQUE7QUFtR047O0FBaEdFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQWtHSjs7QUFqR0k7RUFDRSxhQUFBO0FBbUdOOztBQWhHRTtFQUNFLHlCRE5lO0FDd0duQjs7QUFqR0k7RUFDRSxjQUFBO0FBbUdOOztBQWhHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBa0dKIiwiZmlsZSI6ImFwcHMvd2ViL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vdXNlcnMvbmV3LXVzZXItZm9ybS9uZXctdXNlci1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVG9vIHNwZWNpZmljIHdlIG5lZWQgdG8gZWl0aGVyIHJlbmFtZSB0aGVtIG9yIHJlbW92ZSB0aGVtLlxuJGdyZXktdGV4dDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuJHNlbGVjdGVkLWZpZWxkLWJvcmRlcjogI2U2ZjVmZTtcbiR0YWJsZS1yb3ctaG92ZXI6ICNmMGYxZjI7XG5cbkBtaXhpbiBmb3JtLWJ1aWxkZXItbWF0LWljb24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi8vXG5cbiRib3JkZXItZ3JheTogI2Q1ZDhkYjtcbiRjb2xvci1yZWQ6ICNlNjA0MDQ7XG4kY29sb3ItcmVkLWRhcms6ICNhZDFiMWI7XG4kY29sb3ItcmVkLWxpZ2h0OiAjZmZjZGQyO1xuJGNvbG9yLWdyYXk6ICM1ODYwNjk7XG4kY29sb3ItZ3JheS1saWdodDogI2Y3ZjhmODtcbiRjb2xvci13aGl0ZTogI2ZmZmZmZjtcbiRjb2xvci1ibGFjazogIzAwMDAwMDtcbiRjb2xvci1wcmltYXJ5OiAjMDQ4YmU2O1xuJGNvbG9yLXByaW1hcnktZGFyazogIzAwNTc5NztcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiAjZGVmMmZlO1xuJGNvbG9yLWFjY2VudDogIzAzN2RkMTtcbiRjb2xvci1ib3JkZXItbGlnaHQ6ICNlMGUwZTA7XG4kY29sb3ItZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICRjb2xvci13aGl0ZSAwJSwgJGNvbG9yLXByaW1hcnktbGlnaHQgNzguMTIlLCAkc2VsZWN0ZWQtZmllbGQtYm9yZGVyIDEwMCUpO1xuXG4uY29sb3ItcmVkIHtcbiAgY29sb3I6ICRjb2xvci1yZWQgIWltcG9ydGFudDtcbn1cbi5jb2xvci1yZWQtZGFyayB7XG4gIGNvbG9yOiAkY29sb3ItcmVkLWRhcmsgIWltcG9ydGFudDtcbn1cbi5jb2xvci1yZWQtbGlnaHQge1xuICBjb2xvcjogJGNvbG9yLXJlZC1saWdodCAhaW1wb3J0YW50O1xufVxuLmNvbG9yLWdyYXkge1xuICBjb2xvcjogJGNvbG9yLWdyYXkgIWltcG9ydGFudDtcbn1cbi5jb2xvci1ncmF5LWxpZ2h0IHtcbiAgY29sb3I6ICRjb2xvci1ncmF5LWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uY29sb3Itd2hpdGUge1xuICBjb2xvcjogJGNvbG9yLXdoaXRlICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItYmxhY2sge1xuICBjb2xvcjogJGNvbG9yLWJsYWNrICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItYm9yZGVyLWxpZ2h0IHtcbiAgY29sb3I6ICRjb2xvci1ib3JkZXItbGlnaHQgIWltcG9ydGFudDtcbn1cbi5jb2xvci1wcmltYXJ5IHtcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5ICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItcHJpbWFyeS1kYXJrIHtcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5LWRhcmsgIWltcG9ydGFudDtcbn1cbi5jb2xvci1wcmltYXJ5LWxpZ2h0IHtcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5LWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItYWNjZW50IHtcbiAgY29sb3I6ICRjb2xvci1hY2NlbnQgIWltcG9ydGFudDtcbn1cblxuLmJhY2tncm91bmQtcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZCAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtcmVkLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLWRhcmsgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLXJlZC1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtbGlnaHQgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLWdyYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheSAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtZ3JheS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5LWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZSAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2sgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLWJvcmRlci1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ib3JkZXItbGlnaHQgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeSAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtcHJpbWFyeS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnktZGFyayAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtcHJpbWFyeS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5LWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1hY2NlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYWNjZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrZ3JvdW5kLWdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogJGNvbG9yLWdyYWRpZW50ICFpbXBvcnRhbnQ7XG59XG4iLCJAaW1wb3J0ICdnbG9iYWwtc3R5bGUtaGVscGVycy9jb2xvcnMnO1xuXG46aG9zdCB7XG4gIC5uYXYtZGl2aWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogJGNvbG9yLWJvcmRlci1saWdodCBzb2xpZCAxcHg7XG4gIH1cbiAgLmRpYWxvZy1ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hdC1jYXJkIHtcbiAgICAgIHdpZHRoOiA3MzJweDtcbiAgICB9XG4gIH1cbiAgLmxpc3Qtcm93IHtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgLnJlbW92ZS1idXR0b24ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgLmxpc3Qtcm93OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheS1saWdodDtcbiAgICAucmVtb3ZlLWJ1dHRvbiB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbiAgLnNldC1zaXplIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewUserFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xenon-new-user-form',
                styleUrls: ['./new-user-form.component.scss'],
                template: `
    <div fxLayoutAlign="space-between" class="background-white nav-divider">
      <span fxLayoutAlign="start center" class="ml-3">
        <button mat-icon-button (click)="close()">
          <mat-icon fontSet="material-icons-outlined">close</mat-icon>
        </button>
        <h6 class="m-0">Add New User</h6>
      </span>
      <button mat-stroked-button color="primary" [disabled]="(formValid | async) !== true" (click)="createNewUser()" class="p-2 m-3">ADD</button>
    </div>
    <div class="dialog-body">
      <mat-card>
        <h6>User Account</h6>
        <form [formGroup]="newUserForm" fxLayout="column">
          <div fxLayoutAlign="space-between center">
            <mat-form-field appearance="outline" fxFlex="50%" class="mr-2">
              <mat-label>First Name</mat-label>
              <input matInput formControlName="firstName" (blur)="checkForm()" />
            </mat-form-field>
            <mat-form-field appearance="outline" fxFlex="50%" class="ml-2">
              <mat-label>Last Name</mat-label>
              <input matInput formControlName="lastName" (blur)="checkForm()" />
            </mat-form-field>
          </div>
          <mat-form-field appearance="outline" fxFlex="100%">
            <mat-label>Email</mat-label>
            <input matInput formControlName="email" (blur)="checkForm()" />
          </mat-form-field>
        </form>
        <mat-divider></mat-divider>
        <div *ngIf="roleLocationObjects | async as roleLocationObjects" class="mt-2">
          <div class="list-row" fxLayoutAlign="space-between center" *ngFor="let roleLocationObj of roleLocationObjects">
            <div fxLayoutAlign="start center">
              <mat-icon>person_outline</mat-icon>
              <p class="mb-0 text-body1 ml-3">{{ roleLocationObj.role.Name }}</p>
            </div>
            <span fxLayoutAlign="start center">
              <button mat-button (click)="openLocationDialog(roleLocationObj)">{{ getLocationString(roleLocationObj.locations) }}</button>
              <span class="set-size">
                <button class="remove-button" (click)="removeRole(roleLocationObj.role)" mat-icon-button>
                  <mat-icon>cancel</mat-icon>
                </button>
              </span>
            </span>
          </div>
        </div>
        <button mat-button (click)="openRoleDialog()" class="text-left color-primary mt-3 p-0">
          <mat-icon class="mr-3">add_circle_outline</mat-icon>
          Add Role
        </button>
      </mat-card>
    </div>
  `,
            }]
    }], function () { return [{ type: _xenon_api__WEBPACK_IMPORTED_MODULE_3__["ApiRoleService"] }, { type: _xenon_ui__WEBPACK_IMPORTED_MODULE_4__["UiListSelectDialogService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _xenon_api__WEBPACK_IMPORTED_MODULE_3__["ApiLocationService"] }, { type: _xenon_api__WEBPACK_IMPORTED_MODULE_3__["ApiUserService"] }, { type: _xenon_ui__WEBPACK_IMPORTED_MODULE_4__["UiNotificationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/admin/users/user-list/user-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/admin/users/user-list/user-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _xenon_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xenon/api */ "../../libs/api/src/index.ts");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "../../node_modules/lodash-es/lodash.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");









function UserListComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserListComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_td_3_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const element_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.clickUser(element_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", element_r10.FirstName, " ", element_r10.LastName, "");
} }
function UserListComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Account Access");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserListComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_td_6_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const element_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.clickUser(element_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.Permission, " ");
} }
function UserListComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserListComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_td_9_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const element_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.clickUser(element_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.Email, " ");
} }
function UserListComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 17);
} }
function UserListComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_td_12_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const element_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.clickDeleteUser(element_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserListComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
} }
function UserListComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
} }
class UserListComponent {
    constructor(apiOrganizationService) {
        this.apiOrganizationService = apiOrganizationService;
        this.columns = ['Name', 'Access', 'Email', 'Actions'];
        this.users = [];
        this.userItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteUserItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    clickUser(user) {
        this.userItemClicked.emit(user);
    }
    clickDeleteUser(user) {
        this.deleteUserItemClick.emit(user);
    }
    ngOnChanges(changes) {
        if (changes.users.currentValue) {
            const users = changes.users.currentValue;
            const queue = [];
            const orgIds = lodash_es__WEBPACK_IMPORTED_MODULE_2__["uniq"](users.map((r) => r.OrgID));
            orgIds.forEach((id) => queue.push(this.apiOrganizationService.getOrg(id)));
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(queue).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((organizations) => {
                this.organizationsAsObject = lodash_es__WEBPACK_IMPORTED_MODULE_2__["keyBy"](organizations, 'ID');
            }));
        }
    }
}
UserListComponent.ɵfac = function UserListComponent_Factory(t) { return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_api__WEBPACK_IMPORTED_MODULE_1__["ApiOrganizationService"])); };
UserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserListComponent, selectors: [["xenon-user-list"]], inputs: { users: "users" }, outputs: { userItemClicked: "userItemClicked", deleteUserItemClick: "deleteUserItemClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 15, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z0", 3, "dataSource"], ["matColumnDef", "Name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "clickable", "mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "Access"], ["mat-header-cell", "", "class", "text-right", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right clickable", 3, "click", 4, "matCellDef"], ["matColumnDef", "Email"], ["matColumnDef", "Actions"], ["width", "10", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "clickable", "width", "10", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "clickable", 3, "click"], ["mat-header-cell", "", 1, "text-right"], ["mat-cell", "", 1, "text-right", "clickable", 3, "click"], ["width", "10", "mat-header-cell", ""], ["width", "10", "mat-cell", "", 1, "clickable"], ["color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function UserListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserListComponent_th_2_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserListComponent_td_3_Template, 2, 2, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserListComponent_th_5_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserListComponent_td_6_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserListComponent_th_8_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserListComponent_td_9_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserListComponent_th_11_Template, 1, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UserListComponent_td_12_Template, 3, 0, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserListComponent_tr_13_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UserListComponent_tr_14_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"]], styles: ["mat-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%] {\n  padding: 0 0.4rem;\n}\n\n[_nghost-%COMP%]   table[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvd2ViL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vdXNlcnMvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0VBTUUsaUJBQUE7QUFDRjs7QUFHRTtFQUNFLG1CQUFBO0FBQUoiLCJmaWxlIjoiYXBwcy93ZWIvc3JjL2FwcC9mZWF0dXJlcy9hZG1pbi91c2Vycy91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNlbGwsXG4ubWF0LWNlbGwsXG5tYXQtZm9vdGVyLWNlbGwsXG4ubWF0LWZvb3Rlci1jZWxsLFxubWF0LWhlYWRlci1jZWxsLFxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIHBhZGRpbmc6IDAgMC40cmVtO1xufVxuXG46aG9zdCB7XG4gIHRhYmxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xenon-user-list',
                styleUrls: ['./user-list.component.scss'],
                templateUrl: './user-list.component.html',
            }]
    }], function () { return [{ type: _xenon_api__WEBPACK_IMPORTED_MODULE_1__["ApiOrganizationService"] }]; }, { users: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], userItemClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deleteUserItemClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/admin/users/users-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/admin/users/users-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.component */ "./src/app/features/admin/users/users.component.ts");





const routes = [
    {
        path: '',
        component: _users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"],
    },
];
class UsersRoutingModule {
}
UsersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsersRoutingModule });
UsersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsersRoutingModule_Factory(t) { return new (t || UsersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/admin/users/users.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/admin/users/users.component.ts ***!
  \*********************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _xenon_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @xenon/api */ "../../libs/api/src/index.ts");
/* harmony import */ var _xenon_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @xenon/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _xenon_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @xenon/ui */ "../../libs/ui/src/index.ts");
/* harmony import */ var _shared_admin_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/admin-base */ "./src/app/shared/admin-base.ts");
/* harmony import */ var _new_user_form_new_user_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-user-form/new-user-form.component */ "./src/app/features/admin/users/new-user-form/new-user-form.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _libs_ui_src_lib_components_ui_string_search_ui_string_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../libs/ui/src/lib/components/ui-string-search/ui-string-search.component */ "../../libs/ui/src/lib/components/ui-string-search/ui-string-search.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/features/admin/users/user-list/user-list.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




















class UsersComponent extends _shared_admin_base__WEBPACK_IMPORTED_MODULE_6__["AdminBase"] {
    constructor(uiPromptService, notificationService, apiUserService, utilLocalStorageService, apiRoleService, apiLocationService, dialog) {
        super();
        this.uiPromptService = uiPromptService;
        this.notificationService = notificationService;
        this.apiUserService = apiUserService;
        this.utilLocalStorageService = utilLocalStorageService;
        this.apiRoleService = apiRoleService;
        this.apiLocationService = apiLocationService;
        this.dialog = dialog;
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.users$ = [];
        this.cachedUsers = [];
        this.columnsToSearchBy = ['FirstName', 'LastName', 'FullName', 'Email', 'Org'];
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loggedInUser = this.utilLocalStorageService.getItem('user');
        this.searchPipe = new _xenon_utils__WEBPACK_IMPORTED_MODULE_3__["SearchPipe"]();
    }
    ngOnInit() {
        this.refreshData();
        this.apiLocationService.getLocationsByOrgId(this.loggedInUser.CurrentOrg.ID).subscribe((response) => {
            this.orgLocations = response;
        });
        this.apiUserService.cachedUsers.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe)).subscribe((users) => {
            this.users$ = users;
        });
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    deleteUser(user) {
        const sub = this.uiPromptService
            .prompt(`Are you sure you sure you want to delete "${user.FirstName} ${user.LastName}"?`)
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])((r) => {
            return r.ok ? this.apiUserService.deleteUser(this.loggedInUser.CurrentOrg.ID, user.ID) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ Status: 'empty' });
        }))
            .subscribe((m) => {
            if (m.Status === 'success') {
                this.notificationService.show(_xenon_ui__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].success, 'Close', 'User Deleted', 2500);
                setTimeout(() => {
                    this.refreshData();
                }, 2500);
            }
        });
        this.subscriptions.add(sub);
    }
    openUserForm(user) {
        if (!this.loggedInUser) {
            this.loggedInUser = this.utilLocalStorageService.getItem('user');
            if (!this.loggedInUser) {
                this.notificationService.show(_xenon_ui__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].error, 'Error', 'Can not get current user data', 2500);
                return;
            }
        }
        this.apiUserService
            .getUsersByOrganization(this.loggedInUser.CurrentOrg.ID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            const foundUser = response.find((u) => u.ID === this.loggedInUser.CurrentUser.ID);
            this.loggedInUser.CurrentUser.RoleLocations = foundUser.RoleLocations;
            return foundUser;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((u) => this.apiRoleService.getRolesByOrg(this.loggedInUser.CurrentOrg.ID)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        }))
            .subscribe((response) => {
            const formData = {
                user: user !== null && user !== void 0 ? user : undefined,
                refresh: this.refreshData.bind(this),
                roles: response.OrgRoleList,
                locations: this.orgLocations,
            };
            this.dialog.open(_xenon_ui__WEBPACK_IMPORTED_MODULE_5__["UIUserFormComponent"], {
                data: formData,
                panelClass: 'full-page-dialog',
            });
        });
    }
    openNewUserForm() {
        const dialogRef = this.dialog.open(_new_user_form_new_user_form_component__WEBPACK_IMPORTED_MODULE_7__["NewUserFormComponent"], {
            data: this.loggedInUser,
            panelClass: 'full-page-dialog',
        });
        dialogRef
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe((_) => {
            this.refreshData();
        });
    }
    searchChange(searchInput) {
        const filteredUsers = this.searchPipe.transform(this.cachedUsers, searchInput, this.columnsToSearchBy);
        this.apiUserService.setCachedUsers(filteredUsers);
    }
    refreshData() {
        this.apiUserService.getUsersByOrganization(this.loggedInUser.CurrentOrg.ID).subscribe((response) => {
            this.cachedUsers = response;
            this.apiUserService.setCachedUsers(response);
        });
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_ui__WEBPACK_IMPORTED_MODULE_5__["UiPromptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_ui__WEBPACK_IMPORTED_MODULE_5__["UiNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_api__WEBPACK_IMPORTED_MODULE_2__["ApiUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_utils__WEBPACK_IMPORTED_MODULE_3__["UtilLocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_api__WEBPACK_IMPORTED_MODULE_2__["ApiRoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_api__WEBPACK_IMPORTED_MODULE_2__["ApiLocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["xenon-users"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 5, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "page-header"], [1, "title"], [3, "searchString", "label", "searchChange"], [1, "page-body"], [3, "users", "userItemClicked", "deleteUserItemClick"], ["mat-fab", "", "mat-flat-button", "", "color", "primary", "aria-label", "Create new Organization", 1, "add-button", 3, "click"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "xenon-ui-string-search", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchChange", function UsersComponent_Template_xenon_ui_string_search_searchChange_3_listener($event) { return ctx.searchChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "xenon-user-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("userItemClicked", function UsersComponent_Template_xenon_user_list_userItemClicked_6_listener($event) { return ctx.openUserForm($event); })("deleteUserItemClick", function UsersComponent_Template_xenon_user_list_deleteUserItemClick_6_listener($event) { return ctx.deleteUser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_7_listener() { return ctx.openNewUserForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchString", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.search$))("label", "Search Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("users", ctx.users$);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _libs_ui_src_lib_components_ui_string_search_ui_string_search_component__WEBPACK_IMPORTED_MODULE_10__["UiStringSearchComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_11__["UserListComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"]], styles: [".add-button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvd2ViL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJhcHBzL3dlYi9zcmMvYXBwL2ZlYXR1cmVzL2FkbWluL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xenon-users',
                styleUrls: ['./users.component.scss'],
                template: `
    <div class="page-header" fxLayout="row" fxLayoutAlign="space-between center">
      <h6 class="title">Users</h6>
      <xenon-ui-string-search [searchString]="search$ | async" (searchChange)="searchChange($event)" [label]="'Search Users'"> </xenon-ui-string-search>
    </div>

    <div class="page-body">
      <xenon-user-list (userItemClicked)="openUserForm($event)" (deleteUserItemClick)="deleteUser($event)" [users]="users$"> </xenon-user-list>

      <button mat-fab mat-flat-button (click)="openNewUserForm()" class="add-button" color="primary" aria-label="Create new Organization">
        <mat-icon>add</mat-icon>
      </button>
    </div>
  `,
            }]
    }], function () { return [{ type: _xenon_ui__WEBPACK_IMPORTED_MODULE_5__["UiPromptService"] }, { type: _xenon_ui__WEBPACK_IMPORTED_MODULE_5__["UiNotificationService"] }, { type: _xenon_api__WEBPACK_IMPORTED_MODULE_2__["ApiUserService"] }, { type: _xenon_utils__WEBPACK_IMPORTED_MODULE_3__["UtilLocalStorageService"] }, { type: _xenon_api__WEBPACK_IMPORTED_MODULE_2__["ApiRoleService"] }, { type: _xenon_api__WEBPACK_IMPORTED_MODULE_2__["ApiLocationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/admin/users/users.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/admin/users/users.module.ts ***!
  \******************************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/features/admin/users/users-routing.module.ts");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.component */ "./src/app/features/admin/users/users.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/features/admin/users/user-list/user-list.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _xenon_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @xenon/ui */ "../../libs/ui/src/index.ts");
/* harmony import */ var _new_user_form_new_user_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-user-form/new-user-form.component */ "./src/app/features/admin/users/new-user-form/new-user-form.component.ts");








class UsersModule {
}
UsersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsersModule });
UsersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsersModule_Factory(t) { return new (t || UsersModule)(); }, imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_1__["UsersRoutingModule"], _xenon_ui__WEBPACK_IMPORTED_MODULE_5__["UiListSelectModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__["UserListComponent"], _new_user_form_new_user_form_component__WEBPACK_IMPORTED_MODULE_6__["NewUserFormComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_1__["UsersRoutingModule"], _xenon_ui__WEBPACK_IMPORTED_MODULE_5__["UiListSelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__["UserListComponent"], _new_user_form_new_user_form_component__WEBPACK_IMPORTED_MODULE_6__["NewUserFormComponent"]],
                imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_1__["UsersRoutingModule"], _xenon_ui__WEBPACK_IMPORTED_MODULE_5__["UiListSelectModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map