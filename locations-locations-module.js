(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["locations-locations-module"],{

/***/ "./src/app/features/admin/locations/location-form/location-form.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/features/admin/locations/location-form/location-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LocationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationFormComponent", function() { return LocationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment-timezone */ "../../node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _xenon_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @xenon/api */ "../../libs/api/src/index.ts");
/* harmony import */ var _xenon_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @xenon/ui */ "../../libs/ui/src/index.ts");
/* harmony import */ var _xenon_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @xenon/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _location_form_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./location-form.data */ "./src/app/features/admin/locations/location-form/location-form.data.ts");
/* harmony import */ var _shared_admin_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/admin-base */ "./src/app/shared/admin-base.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _libs_ui_src_lib_ui_form_components_ui_form_field_input_ui_form_field_input_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../../libs/ui/src/lib/ui-form/components/ui-form-field-input/ui-form-field-input.component */ "../../libs/ui/src/lib/ui-form/components/ui-form-field-input/ui-form-field-input.component.ts");
/* harmony import */ var _libs_ui_src_lib_ui_form_components_ui_form_field_text_area_ui_form_field_text_area_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../../libs/ui/src/lib/ui-form/components/ui-form-field-text-area/ui-form-field-text-area.component */ "../../libs/ui/src/lib/ui-form/components/ui-form-field-text-area/ui-form-field-text-area.component.ts");
/* harmony import */ var _libs_ui_src_lib_ui_form_components_ui_form_field_select_ui_form_field_select_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../../libs/ui/src/lib/ui-form/components/ui-form-field-select/ui-form-field-select.component */ "../../libs/ui/src/lib/ui-form/components/ui-form-field-select/ui-form-field-select.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");



























function LocationFormComponent_div_0_section_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "location_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.location.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.location.Desc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r1.location.Address.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.location.Address, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.location.Address2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r1.location.City.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.location.City, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.location.State, " ", ctx_r1.location.Zip, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r1.location.PrimaryPhoneLabel.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.location.PrimaryPhone, " (", ctx_r1.location.PrimaryPhoneLabel, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r1.location.PrimaryEmailLabel.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.location.PrimaryEmail, " (", ctx_r1.location.PrimaryEmailLabel, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx_r1.location.ID, "");
} }
function LocationFormComponent_div_0_section_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LocationFormComponent_div_0_mat_option_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const timezone_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", timezone_r5.TimezoneCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](timezone_r5.TimezoneCode);
} }
function LocationFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LocationFormComponent_div_0_section_6_Template, 26, 16, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LocationFormComponent_div_0_section_7_Template, 3, 0, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LocationFormComponent_div_0_Template_form_submit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Location Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "xenon-ui-form-field-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "xenon-ui-form-field-text-area", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "xenon-ui-form-field-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "xenon-ui-form-field-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "xenon-ui-form-field-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "xenon-ui-form-field-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "xenon-ui-form-field-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Contact Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "xenon-ui-form-field-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "xenon-ui-form-field-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "xenon-ui-form-field-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "xenon-ui-form-field-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Time Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, LocationFormComponent_div_0_mat_option_54_Template, 2, 2, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r3.valid || !ctx_r0.changesMade);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldOptions", ctx_r0.fieldsAsObject["Name"])("fieldFormGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldOptions", ctx_r0.fieldsAsObject["Desc"])("fieldFormGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldOptions", ctx_r0.fieldsAsObject["Address"])("fieldFormGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldOptions", ctx_r0.fieldsAsObject["Address2"])("fieldFormGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldOptions", ctx_r0.fieldsAsObject["City"])("fieldFormGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldOptions", ctx_r0.fieldsAsObject["State"])("fieldFormGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldOptions", ctx_r0.fieldsAsObject["Zip"])("fieldFormGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldOptions", ctx_r0.fieldsAsObject["PrimaryPhone"])("fieldFormGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldOptions", ctx_r0.fieldsAsObject["PrimaryPhoneLabel"])("fieldFormGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldOptions", ctx_r0.fieldsAsObject["PrimaryEmail"])("fieldFormGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldOptions", ctx_r0.fieldsAsObject["PrimaryEmailLabel"])("fieldFormGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.fieldsAsObject["Timezone"].label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", ctx_r0.fieldsAsObject["Timezone"].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.timezoneList);
} }
class LocationFormComponent extends _shared_admin_base__WEBPACK_IMPORTED_MODULE_8__["AdminBase"] {
    constructor(uiPromptService, notificationService, apiLocationService, utilLocalStorageService, router, cdr, unsavedChangesService) {
        var _a, _b;
        super();
        this.uiPromptService = uiPromptService;
        this.notificationService = notificationService;
        this.apiLocationService = apiLocationService;
        this.utilLocalStorageService = utilLocalStorageService;
        this.router = router;
        this.cdr = cdr;
        this.unsavedChangesService = unsavedChangesService;
        const routerState = (_b = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras) === null || _b === void 0 ? void 0 : _b.state;
        this.location = routerState === null || routerState === void 0 ? void 0 : routerState.location;
        this.editMode = routerState === null || routerState === void 0 ? void 0 : routerState.isEditMode;
        this.apiLocationService
            .getTimeZone()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1))
            .subscribe((result) => {
            this.timezoneList = result.Timezones;
        });
    }
    canDeactivate() {
        return this.unsavedChangesService.handleUnsavedChangesModal(() => this.changesMade, this.save.bind(this), this.nextState);
    }
    ngOnInit() {
        if (this.editMode === undefined)
            this.navigateToLocationsList();
        else
            this.setupPage();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    save() {
        if (this.editMode)
            return this.updateLocation();
        else
            return this.createLocation();
    }
    setEditForm() {
        this.fields.forEach((field) => (field.value = this.location[field.name]));
        this.fieldsAsObject = _xenon_ui__WEBPACK_IMPORTED_MODULE_5__["UiFormService"].buildFieldsAsObject(this.fields);
        this.form = _xenon_ui__WEBPACK_IMPORTED_MODULE_5__["UiFormService"].buildForm(this.fields);
    }
    setNewForm() {
        this.location = {};
        this.fields.forEach((field) => (field.value = this.location[field.name]));
        this.fieldsAsObject = _xenon_ui__WEBPACK_IMPORTED_MODULE_5__["UiFormService"].buildFieldsAsObject(this.fields);
        this.form = _xenon_ui__WEBPACK_IMPORTED_MODULE_5__["UiFormService"].buildForm(this.fields);
    }
    createLocation() {
        const form = this.form.controls;
        const request = {
            Name: form['Name'].value,
            Desc: form['Desc'].value,
            Address: form['Address'].value,
            Address2: form['Address2'].value,
            City: form['City'].value,
            State: form['State'].value,
            Zip: form['Zip'].value,
            PrimaryPhone: form['PrimaryPhone'].value,
            PrimaryPhoneLabel: form['PrimaryPhoneLabel'].value,
            PrimaryEmail: form['PrimaryEmail'].value,
            PrimaryEmailLabel: form['PrimaryPhoneLabel'].value,
            Timezone: form['Timezone'].value,
            OrgID: this.loggedInUser.CurrentOrg.ID,
        };
        return this.apiLocationService
            .createLocation(request)
            .then((response) => {
            if (response.Status === 'error') {
                const errorMessage = `Location not created. An error occurred: ${response.Message}.`;
                this.notificationService.show(_xenon_ui__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].error, 'Error', errorMessage, 2500);
            }
            else {
                this.cachedFormValues = JSON.parse(JSON.stringify(this.form.value));
                this.changesMade = false;
                this.notificationService.show(_xenon_ui__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].success, 'Close', 'Changes Saved', 2500);
                this.router.navigate(['/locations']);
            }
        })
            .catch((err) => {
            var _a;
            const errorMessage = `Location not created. An error occurred: ${(_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.Error}.`;
            this.notificationService.show(_xenon_ui__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].error, 'Error', errorMessage, 2500);
        });
    }
    updateLocation() {
        const request = {
            ID: this.location.ID,
        };
        this.fields.forEach((field) => {
            const formField = this.form.controls[field.name];
            if (formField.touched && !formField.pristine && formField.valid) {
                request[field.name] = formField.value;
            }
        });
        return this.apiLocationService
            .updateLocation(request)
            .then((response) => {
            if (response.Status === 'error') {
                const errorMessage = `An error occurred updating location. Error: ${response.Message}.`;
                this.notificationService.show(_xenon_ui__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].error, 'Error', errorMessage, 2500);
            }
            else {
                this.cachedFormValues = JSON.parse(JSON.stringify(this.form.value));
                this.changesMade = false;
                this.notificationService.show(_xenon_ui__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].success, 'Close', 'Changes Saved', 2500);
                this.router.navigate(['/locations']);
            }
        })
            .catch((err) => {
            var _a;
            const errorMessage = `An error occurred updating location. Error: ${(_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.Error}.`;
            this.notificationService.show(_xenon_ui__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].error, 'Error', errorMessage, 2500);
        });
    }
    navigateToLocationsList() {
        this.router.navigate(['/locations']);
    }
    setupPage() {
        this.fields = _xenon_utils__WEBPACK_IMPORTED_MODULE_6__["UtilCloneService"].deepClone(_location_form_data__WEBPACK_IMPORTED_MODULE_7__["LOCATION_FORM_FIELDS"]);
        this.loggedInUser = this.utilLocalStorageService.getItem('user');
        if (this.editMode)
            this.setEditForm();
        else
            this.setNewForm();
        const zone_name = moment__WEBPACK_IMPORTED_MODULE_2__["tz"].guess();
        const timezone = moment__WEBPACK_IMPORTED_MODULE_2__["tz"](zone_name).zoneAbbr();
        const currentTimeZoneValue = this.form.get('Timezone').value;
        if (!currentTimeZoneValue)
            this.form.patchValue({ Timezone: timezone });
        this.cdr.detectChanges();
        this.cachedFormValues = JSON.parse(JSON.stringify(this.form.value));
        this.subscriptions.add(this.form.valueChanges.subscribe((formValues) => {
            this.changesMade = JSON.stringify(formValues) !== JSON.stringify(this.cachedFormValues);
        }));
    }
}
LocationFormComponent.ɵfac = function LocationFormComponent_Factory(t) { return new (t || LocationFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_ui__WEBPACK_IMPORTED_MODULE_5__["UiPromptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_ui__WEBPACK_IMPORTED_MODULE_5__["UiNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_api__WEBPACK_IMPORTED_MODULE_4__["ApiLocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_utils__WEBPACK_IMPORTED_MODULE_6__["UtilLocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_utils__WEBPACK_IMPORTED_MODULE_6__["UnsavedChangesModalService"])); };
LocationFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocationFormComponent, selectors: [["xenon-location-form"]], hostBindings: function LocationFormComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function LocationFormComponent_beforeunload_HostBindingHandler() { return ctx.canDeactivate(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["id", "location-form", "class", "h-100", 4, "ngIf"], ["id", "location-form", 1, "h-100"], ["fxLayoutAlign", "end"], ["mat-button", "", "color", "primary", "type", "submit", "form", "ngForm", 1, "my-1", 3, "disabled"], [1, "scroll-area", "overflow-y-auto"], ["class", "header", 4, "ngIf"], [4, "ngIf"], ["id", "ngForm", 3, "formGroup", "submit"], ["locationEditForm", "ngForm"], [1, "details"], ["fxLayout", "row wrap"], ["fxFlex", "100"], [3, "fieldOptions", "fieldFormGroup"], ["fxFlex", "60"], ["fxFlex", "20"], [1, "contact"], ["fxFlex", "70"], ["fxFlex", "30"], [3, "formGroup"], [3, "formControlName"], [3, "value", 4, "ngFor", "ngForOf"], [1, "header"], [1, "d-flex", "justify-content-between", "align-content-end"], [1, "profile", "d-flex", "justify-content-between", "align-content-end"], [1, "avatar"], [1, "icon"], ["fxLayout", "column"], [3, "hidden"], [3, "value"]], template: function LocationFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LocationFormComponent_div_0_Template, 55, 30, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _libs_ui_src_lib_ui_form_components_ui_form_field_input_ui_form_field_input_component__WEBPACK_IMPORTED_MODULE_15__["UiFormFieldInputComponent"], _libs_ui_src_lib_ui_form_components_ui_form_field_text_area_ui_form_field_text_area_component__WEBPACK_IMPORTED_MODULE_16__["UiFormFieldTextAreaComponent"], _libs_ui_src_lib_ui_form_components_ui_form_field_select_ui_form_field_select_component__WEBPACK_IMPORTED_MODULE_17__["UiFormFieldSelectComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatOption"]], styles: [".color-red {\n  color: #e60404 !important;\n}\n\n.color-red-dark {\n  color: #ad1b1b !important;\n}\n\n.color-red-light {\n  color: #ffcdd2 !important;\n}\n\n.color-gray {\n  color: #586069 !important;\n}\n\n.color-gray-light {\n  color: #f7f8f8 !important;\n}\n\n.color-white {\n  color: #ffffff !important;\n}\n\n.color-black {\n  color: #000000 !important;\n}\n\n.color-border-light {\n  color: #e0e0e0 !important;\n}\n\n.color-primary {\n  color: #048be6 !important;\n}\n\n.color-primary-dark {\n  color: #005797 !important;\n}\n\n.color-primary-light {\n  color: #def2fe !important;\n}\n\n.color-accent {\n  color: #037dd1 !important;\n}\n\n.background-red {\n  background-color: #e60404 !important;\n}\n\n.background-red-dark {\n  background-color: #ad1b1b !important;\n}\n\n.background-red-light {\n  background-color: #ffcdd2 !important;\n}\n\n.background-gray {\n  background-color: #586069 !important;\n}\n\n.background-gray-light {\n  background-color: #f7f8f8 !important;\n}\n\n.background-white {\n  background-color: #ffffff !important;\n}\n\n.background-black {\n  background-color: #000000 !important;\n}\n\n.background-border-light {\n  background-color: #e0e0e0 !important;\n}\n\n.background-primary {\n  background-color: #048be6 !important;\n}\n\n.background-primary-dark {\n  background-color: #005797 !important;\n}\n\n.background-primary-light {\n  background-color: #def2fe !important;\n}\n\n.background-accent {\n  background-color: #037dd1 !important;\n}\n\n.background-gradient {\n  background: linear-gradient(180deg, #ffffff 0%, #def2fe 78.12%, #e6f5fe 100%) !important;\n}\n\nxenon-location-form .mat-form-field {\n  width: calc(100% - 20px);\n}\n\nxenon-location-form .scroll-area {\n  height: calc(100% - 42px);\n}\n\nxenon-location-form .header .profile .avatar {\n  width: 85px;\n}\n\nxenon-location-form .header .profile .avatar .icon {\n  font-size: 70px;\n}\n\nxenon-location-form #location-form {\n  margin: 0;\n  padding: 0;\n}\n\nxenon-location-form #location-form form {\n  margin: 0;\n  padding: 0;\n}\n\nxenon-location-form section {\n  padding: 20px;\n  border-bottom: #e0e0e0 solid 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC1zdHlsZS1oZWxwZXJzL2NvbG9ycy5zY3NzIiwiYXBwcy93ZWIvc3JjL2FwcC9mZWF0dXJlcy9hZG1pbi9sb2NhdGlvbnMvbG9jYXRpb24tZm9ybS9sb2NhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCQTtFQUNFLHlCQUFBO0FDM0JGOztBRDZCQTtFQUNFLHlCQUFBO0FDMUJGOztBRDRCQTtFQUNFLHlCQUFBO0FDekJGOztBRDJCQTtFQUNFLHlCQUFBO0FDeEJGOztBRDBCQTtFQUNFLHlCQUFBO0FDdkJGOztBRHlCQTtFQUNFLHlCQUFBO0FDdEJGOztBRHdCQTtFQUNFLHlCQUFBO0FDckJGOztBRHVCQTtFQUNFLHlCQUFBO0FDcEJGOztBRHNCQTtFQUNFLHlCQUFBO0FDbkJGOztBRHFCQTtFQUNFLHlCQUFBO0FDbEJGOztBRG9CQTtFQUNFLHlCQUFBO0FDakJGOztBRG1CQTtFQUNFLHlCQUFBO0FDaEJGOztBRG1CQTtFQUNFLG9DQUFBO0FDaEJGOztBRGtCQTtFQUNFLG9DQUFBO0FDZkY7O0FEaUJBO0VBQ0Usb0NBQUE7QUNkRjs7QURnQkE7RUFDRSxvQ0FBQTtBQ2JGOztBRGVBO0VBQ0Usb0NBQUE7QUNaRjs7QURjQTtFQUNFLG9DQUFBO0FDWEY7O0FEYUE7RUFDRSxvQ0FBQTtBQ1ZGOztBRFlBO0VBQ0Usb0NBQUE7QUNURjs7QURXQTtFQUNFLG9DQUFBO0FDUkY7O0FEVUE7RUFDRSxvQ0FBQTtBQ1BGOztBRFNBO0VBQ0Usb0NBQUE7QUNORjs7QURRQTtFQUNFLG9DQUFBO0FDTEY7O0FEUUE7RUFDRSx3RkFBQTtBQ0xGOztBQS9GRTtFQUNFLHdCQUFBO0FBa0dKOztBQS9GRTtFQUNFLHlCQUFBO0FBaUdKOztBQTVGTTtFQUNFLFdBQUE7QUE4RlI7O0FBN0ZRO0VBQ0UsZUFBQTtBQStGVjs7QUF6RkU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQTJGSjs7QUExRkk7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQTRGTjs7QUF4RkU7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7QUEwRkoiLCJmaWxlIjoiYXBwcy93ZWIvc3JjL2FwcC9mZWF0dXJlcy9hZG1pbi9sb2NhdGlvbnMvbG9jYXRpb24tZm9ybS9sb2NhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVG9vIHNwZWNpZmljIHdlIG5lZWQgdG8gZWl0aGVyIHJlbmFtZSB0aGVtIG9yIHJlbW92ZSB0aGVtLlxuJGdyZXktdGV4dDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuJHNlbGVjdGVkLWZpZWxkLWJvcmRlcjogI2U2ZjVmZTtcbiR0YWJsZS1yb3ctaG92ZXI6ICNmMGYxZjI7XG5cbkBtaXhpbiBmb3JtLWJ1aWxkZXItbWF0LWljb24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi8vXG5cbiRib3JkZXItZ3JheTogI2Q1ZDhkYjtcbiRjb2xvci1yZWQ6ICNlNjA0MDQ7XG4kY29sb3ItcmVkLWRhcms6ICNhZDFiMWI7XG4kY29sb3ItcmVkLWxpZ2h0OiAjZmZjZGQyO1xuJGNvbG9yLWdyYXk6ICM1ODYwNjk7XG4kY29sb3ItZ3JheS1saWdodDogI2Y3ZjhmODtcbiRjb2xvci13aGl0ZTogI2ZmZmZmZjtcbiRjb2xvci1ibGFjazogIzAwMDAwMDtcbiRjb2xvci1wcmltYXJ5OiAjMDQ4YmU2O1xuJGNvbG9yLXByaW1hcnktZGFyazogIzAwNTc5NztcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiAjZGVmMmZlO1xuJGNvbG9yLWFjY2VudDogIzAzN2RkMTtcbiRjb2xvci1ib3JkZXItbGlnaHQ6ICNlMGUwZTA7XG4kY29sb3ItZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICRjb2xvci13aGl0ZSAwJSwgJGNvbG9yLXByaW1hcnktbGlnaHQgNzguMTIlLCAkc2VsZWN0ZWQtZmllbGQtYm9yZGVyIDEwMCUpO1xuXG4uY29sb3ItcmVkIHtcbiAgY29sb3I6ICRjb2xvci1yZWQgIWltcG9ydGFudDtcbn1cbi5jb2xvci1yZWQtZGFyayB7XG4gIGNvbG9yOiAkY29sb3ItcmVkLWRhcmsgIWltcG9ydGFudDtcbn1cbi5jb2xvci1yZWQtbGlnaHQge1xuICBjb2xvcjogJGNvbG9yLXJlZC1saWdodCAhaW1wb3J0YW50O1xufVxuLmNvbG9yLWdyYXkge1xuICBjb2xvcjogJGNvbG9yLWdyYXkgIWltcG9ydGFudDtcbn1cbi5jb2xvci1ncmF5LWxpZ2h0IHtcbiAgY29sb3I6ICRjb2xvci1ncmF5LWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uY29sb3Itd2hpdGUge1xuICBjb2xvcjogJGNvbG9yLXdoaXRlICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItYmxhY2sge1xuICBjb2xvcjogJGNvbG9yLWJsYWNrICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItYm9yZGVyLWxpZ2h0IHtcbiAgY29sb3I6ICRjb2xvci1ib3JkZXItbGlnaHQgIWltcG9ydGFudDtcbn1cbi5jb2xvci1wcmltYXJ5IHtcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5ICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItcHJpbWFyeS1kYXJrIHtcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5LWRhcmsgIWltcG9ydGFudDtcbn1cbi5jb2xvci1wcmltYXJ5LWxpZ2h0IHtcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5LWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uY29sb3ItYWNjZW50IHtcbiAgY29sb3I6ICRjb2xvci1hY2NlbnQgIWltcG9ydGFudDtcbn1cblxuLmJhY2tncm91bmQtcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZCAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtcmVkLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLWRhcmsgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLXJlZC1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtbGlnaHQgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLWdyYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheSAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtZ3JheS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5LWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZSAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2sgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLWJvcmRlci1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ib3JkZXItbGlnaHQgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeSAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtcHJpbWFyeS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnktZGFyayAhaW1wb3J0YW50O1xufVxuLmJhY2tncm91bmQtcHJpbWFyeS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5LWxpZ2h0ICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1hY2NlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYWNjZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrZ3JvdW5kLWdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogJGNvbG9yLWdyYWRpZW50ICFpbXBvcnRhbnQ7XG59XG4iLCJAaW1wb3J0ICdnbG9iYWwtc3R5bGUtaGVscGVycy9jb2xvcnMnO1xuXG54ZW5vbi1sb2NhdGlvbi1mb3JtIHtcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIH1cblxuICAuc2Nyb2xsLWFyZWEge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDJweCk7XG4gIH1cblxuICAuaGVhZGVyIHtcbiAgICAucHJvZmlsZSB7XG4gICAgICAuYXZhdGFyIHtcbiAgICAgICAgd2lkdGg6IDg1cHg7XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDcwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAjbG9jYXRpb24tZm9ybSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9ybSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgfVxuXG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogJGNvbG9yLWJvcmRlci1saWdodCBzb2xpZCAxcHg7XG4gIH1cbn1cbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xenon-location-form',
                templateUrl: './location-form.component.html',
                styleUrls: ['./location-form.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _xenon_ui__WEBPACK_IMPORTED_MODULE_5__["UiPromptService"] }, { type: _xenon_ui__WEBPACK_IMPORTED_MODULE_5__["UiNotificationService"] }, { type: _xenon_api__WEBPACK_IMPORTED_MODULE_4__["ApiLocationService"] }, { type: _xenon_utils__WEBPACK_IMPORTED_MODULE_6__["UtilLocalStorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _xenon_utils__WEBPACK_IMPORTED_MODULE_6__["UnsavedChangesModalService"] }]; }, { canDeactivate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:beforeunload']
        }] }); })();


/***/ }),

/***/ "./src/app/features/admin/locations/location-form/location-form.data.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/admin/locations/location-form/location-form.data.ts ***!
  \******************************************************************************/
/*! exports provided: LOCATION_FORM_FIELDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCATION_FORM_FIELDS", function() { return LOCATION_FORM_FIELDS; });
/* harmony import */ var _xenon_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xenon/ui */ "../../libs/ui/src/index.ts");

const LOCATION_FORM_FIELDS = [
    // Name
    {
        name: 'Name',
        label: 'Name',
        type: _xenon_ui__WEBPACK_IMPORTED_MODULE_0__["UiFormFieldType"].Input,
        validators: [{ validator: _xenon_ui__WEBPACK_IMPORTED_MODULE_0__["UiFormFieldValidator"].Required }],
    },
    // Desc
    {
        name: 'Desc',
        label: 'Description',
        type: _xenon_ui__WEBPACK_IMPORTED_MODULE_0__["UiFormFieldType"].TextArea,
        validators: [],
    },
    // Address
    {
        name: 'Address',
        label: 'Address - Line 1',
        type: _xenon_ui__WEBPACK_IMPORTED_MODULE_0__["UiFormFieldType"].Input,
        validators: [],
    },
    // Address2
    {
        name: 'Address2',
        label: 'Address - Line 2',
        type: _xenon_ui__WEBPACK_IMPORTED_MODULE_0__["UiFormFieldType"].Input,
        validators: [],
    },
    // City - Text
    {
        name: 'City',
        label: 'City',
        type: _xenon_ui__WEBPACK_IMPORTED_MODULE_0__["UiFormFieldType"].Input,
        validators: [],
    },
    // State - Text
    {
        name: 'State',
        label: 'State',
        type: _xenon_ui__WEBPACK_IMPORTED_MODULE_0__["UiFormFieldType"].Input,
        validators: [],
    },
    // Postal - Text
    {
        name: 'Zip',
        label: 'Zip',
        type: _xenon_ui__WEBPACK_IMPORTED_MODULE_0__["UiFormFieldType"].Input,
        validators: [],
    },
    // Primary Email
    {
        name: 'PrimaryEmail',
        label: 'Primary Email',
        type: _xenon_ui__WEBPACK_IMPORTED_MODULE_0__["UiFormFieldType"].Input,
        validators: [{ validator: _xenon_ui__WEBPACK_IMPORTED_MODULE_0__["UiFormFieldValidator"].Email }],
    },
    // Primary Email Label
    {
        name: 'PrimaryEmailLabel',
        label: 'Primary Email Label',
        type: _xenon_ui__WEBPACK_IMPORTED_MODULE_0__["UiFormFieldType"].Select,
        validators: [],
        options: [
            {
                label: 'Personal',
                value: 'personal',
            },
            {
                label: 'Work',
                value: 'work',
            },
            {
                label: 'Business',
                value: 'business',
            },
        ],
    },
    // Primary Phone
    {
        name: 'PrimaryPhone',
        label: 'Primary Phone',
        type: _xenon_ui__WEBPACK_IMPORTED_MODULE_0__["UiFormFieldType"].Input,
        validators: [],
    },
    // Primary Phone Label
    {
        name: 'PrimaryPhoneLabel',
        label: 'Primary Phone Label',
        type: _xenon_ui__WEBPACK_IMPORTED_MODULE_0__["UiFormFieldType"].Select,
        validators: [],
        options: [
            {
                label: 'Personal',
                value: 'personal',
            },
            {
                label: 'Work',
                value: 'work',
            },
            {
                label: 'Business',
                value: 'business',
            },
        ],
    },
    // Timezone
    {
        name: 'Timezone',
        label: 'Timezone',
        type: _xenon_ui__WEBPACK_IMPORTED_MODULE_0__["UiFormFieldType"].Select,
        validators: [{ validator: _xenon_ui__WEBPACK_IMPORTED_MODULE_0__["UiFormFieldValidator"].Required }],
    },
];


/***/ }),

/***/ "./src/app/features/admin/locations/location-list/location-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/features/admin/locations/location-list/location-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LocationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationListComponent", function() { return LocationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _xenon_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xenon/api */ "../../libs/api/src/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "../../node_modules/lodash-es/lodash.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");









function LocationListComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LocationListComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocationListComponent_td_3_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const element_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.clickLocation(element_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r10.Name, " ");
} }
function LocationListComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LocationListComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocationListComponent_td_6_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const element_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.clickLocation(element_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.Desc, " ");
} }
function LocationListComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Organization");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LocationListComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocationListComponent_td_9_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const element_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.clickLocation(element_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.organizationsAsObject ? ctx_r5.organizationsAsObject[element_r16["OrgID"]]["Name"] : "", " ");
} }
function LocationListComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 13);
} }
function LocationListComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocationListComponent_td_12_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const element_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.clickDeleteLocation(element_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LocationListComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
} }
function LocationListComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
} }
class LocationListComponent {
    constructor(apiOrganizationService) {
        this.apiOrganizationService = apiOrganizationService;
        this.displayedColumns = ['Name', 'Desc', 'OrgID', 'Actions'];
        this.locations = [];
        this.locationItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteLocationItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    clickLocation(record) {
        this.locationItemClick.emit(record);
    }
    clickDeleteLocation(record) {
        this.deleteLocationItemClick.emit(record);
    }
    ngOnChanges(changes) {
        if (changes.locations.currentValue) {
            const locations = changes.locations.currentValue;
            const queue = [];
            const orgIds = lodash_es__WEBPACK_IMPORTED_MODULE_3__["uniq"](locations.map((r) => r.OrgID));
            orgIds.forEach((id) => queue.push(this.apiOrganizationService.getOrg(id)));
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(queue).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((organizations) => {
                this.organizationsAsObject = lodash_es__WEBPACK_IMPORTED_MODULE_3__["keyBy"](organizations, 'ID');
            }));
        }
    }
}
LocationListComponent.ɵfac = function LocationListComponent_Factory(t) { return new (t || LocationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_api__WEBPACK_IMPORTED_MODULE_1__["ApiOrganizationService"])); };
LocationListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocationListComponent, selectors: [["xenon-location-list"]], inputs: { locations: "locations" }, outputs: { locationItemClick: "locationItemClick", deleteLocationItemClick: "deleteLocationItemClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 15, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z0", 3, "dataSource"], ["matColumnDef", "Name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "clickable", "mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "Desc"], ["matColumnDef", "OrgID"], ["matColumnDef", "Actions"], ["width", "10", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "clickable", "width", "10", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "clickable", 3, "click"], ["width", "10", "mat-header-cell", ""], ["width", "10", "mat-cell", "", 1, "clickable"], ["color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function LocationListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LocationListComponent_th_2_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LocationListComponent_td_3_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LocationListComponent_th_5_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LocationListComponent_td_6_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LocationListComponent_th_8_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LocationListComponent_td_9_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LocationListComponent_th_11_Template, 1, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LocationListComponent_td_12_Template, 3, 0, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LocationListComponent_tr_13_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LocationListComponent_tr_14_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.locations);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"]], styles: ["mat-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%] {\n  padding: 0 0.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvd2ViL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vbG9jYXRpb25zL2xvY2F0aW9uLWxpc3QvbG9jYXRpb24tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0VBTUUsaUJBQUE7QUFDRiIsImZpbGUiOiJhcHBzL3dlYi9zcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2xvY2F0aW9ucy9sb2NhdGlvbi1saXN0L2xvY2F0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2VsbCxcbi5tYXQtY2VsbCxcbm1hdC1mb290ZXItY2VsbCxcbi5tYXQtZm9vdGVyLWNlbGwsXG5tYXQtaGVhZGVyLWNlbGwsXG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgcGFkZGluZzogMCAwLjRyZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xenon-location-list',
                styleUrls: ['./location-list.component.scss'],
                templateUrl: './location-list.component.html',
            }]
    }], function () { return [{ type: _xenon_api__WEBPACK_IMPORTED_MODULE_1__["ApiOrganizationService"] }]; }, { locations: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], locationItemClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deleteLocationItemClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/admin/locations/locations-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/admin/locations/locations-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: LocationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsRoutingModule", function() { return LocationsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _xenon_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @xenon/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _location_form_location_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location-form/location-form.component */ "./src/app/features/admin/locations/location-form/location-form.component.ts");
/* harmony import */ var _locations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locations.component */ "./src/app/features/admin/locations/locations.component.ts");







const routes = [
    { path: '', component: _locations_component__WEBPACK_IMPORTED_MODULE_4__["LocationsComponent"] },
    { path: 'edit', component: _location_form_location_form_component__WEBPACK_IMPORTED_MODULE_3__["LocationFormComponent"], canDeactivate: [_xenon_utils__WEBPACK_IMPORTED_MODULE_2__["UnsavedChangesGuard"]] },
];
class LocationsRoutingModule {
}
LocationsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LocationsRoutingModule });
LocationsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LocationsRoutingModule_Factory(t) { return new (t || LocationsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LocationsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/admin/locations/locations.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/admin/locations/locations.component.ts ***!
  \*****************************************************************/
/*! exports provided: LocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsComponent", function() { return LocationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _xenon_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @xenon/api */ "../../libs/api/src/index.ts");
/* harmony import */ var _xenon_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @xenon/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _xenon_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @xenon/ui */ "../../libs/ui/src/index.ts");
/* harmony import */ var _shared_admin_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/admin-base */ "./src/app/shared/admin-base.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _libs_ui_src_lib_components_ui_string_search_ui_string_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../libs/ui/src/lib/components/ui-string-search/ui-string-search.component */ "../../libs/ui/src/lib/components/ui-string-search/ui-string-search.component.ts");
/* harmony import */ var _location_list_location_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./location-list/location-list.component */ "./src/app/features/admin/locations/location-list/location-list.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



















class LocationsComponent extends _shared_admin_base__WEBPACK_IMPORTED_MODULE_7__["AdminBase"] {
    constructor(uiPromptService, notificationService, apiLocationService, utilLocalStorageService, router // private apiUserService: ApiUserService
    ) {
        super();
        this.uiPromptService = uiPromptService;
        this.notificationService = notificationService;
        this.apiLocationService = apiLocationService;
        this.utilLocalStorageService = utilLocalStorageService;
        this.router = router;
        this.locations$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.columnsToSearchBy = ['Name', 'Desc', 'OrgID'];
        this.cachedLocations = [];
        this.searchPipe = new _xenon_utils__WEBPACK_IMPORTED_MODULE_5__["SearchPipe"]();
        this.loggedInUser = this.utilLocalStorageService.getItem('user');
    }
    ngOnInit() {
        this.refreshData();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    searchChange(searchInput) {
        const filteredLocations = this.searchPipe.transform(this.cachedLocations, searchInput, this.columnsToSearchBy);
        this.locations$.next(filteredLocations);
    }
    openLocationForm(location) {
        const isEditMode = location !== undefined;
        this.router.navigate(['/admin/locations/edit'], { state: { location: location, isEditMode: isEditMode } });
    }
    deleteLocation(location) {
        const sub = this.uiPromptService
            .prompt(`Are you sure you sure you want to delete "${location.Name}"?`)
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])((r) => {
            return r.ok ? this.apiLocationService.deleteLocation(location.ID) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ Status: 'empty' });
        }))
            .subscribe((m) => {
            if (m.Status === 'success') {
                setTimeout(() => {
                    this.notificationService.show(_xenon_ui__WEBPACK_IMPORTED_MODULE_6__["NotificationType"].success, 'Close', 'Location Deleted', 2500);
                    this.refreshData();
                }, 2500);
            }
        });
        this.subscriptions.add(sub);
    }
    refreshData() {
        const sub = this.apiLocationService.getLocationsByOrgId(this.loggedInUser.CurrentOrg.ID).subscribe((res) => {
            this.cachedLocations = res;
            this.locations$.next(res);
        });
        this.subscriptions.add(sub);
    }
}
LocationsComponent.ɵfac = function LocationsComponent_Factory(t) { return new (t || LocationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_ui__WEBPACK_IMPORTED_MODULE_6__["UiPromptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_ui__WEBPACK_IMPORTED_MODULE_6__["UiNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_api__WEBPACK_IMPORTED_MODULE_4__["ApiLocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xenon_utils__WEBPACK_IMPORTED_MODULE_5__["UtilLocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LocationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocationsComponent, selectors: [["xenon-locations"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 7, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "page-header"], [1, "title"], [3, "searchString", "label", "searchChange"], [1, "page-body"], [3, "locations", "locationItemClick", "deleteLocationItemClick"], ["mat-fab", "", "mat-flat-button", "", "color", "primary", "aria-label", "Create new Location", 1, "add-button", 3, "click"]], template: function LocationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "xenon-ui-string-search", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchChange", function LocationsComponent_Template_xenon_ui_string_search_searchChange_3_listener($event) { return ctx.searchChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "xenon-location-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("locationItemClick", function LocationsComponent_Template_xenon_location_list_locationItemClick_6_listener($event) { return ctx.openLocationForm($event); })("deleteLocationItemClick", function LocationsComponent_Template_xenon_location_list_deleteLocationItemClick_6_listener($event) { return ctx.deleteLocation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocationsComponent_Template_button_click_8_listener() { return ctx.openLocationForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchString", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.search$))("label", "Search Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("locations", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, ctx.locations$));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _libs_ui_src_lib_components_ui_string_search_ui_string_search_component__WEBPACK_IMPORTED_MODULE_9__["UiStringSearchComponent"], _location_list_location_list_component__WEBPACK_IMPORTED_MODULE_10__["LocationListComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]], styles: [".add-button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvd2ViL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vbG9jYXRpb25zL2xvY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6ImFwcHMvd2ViL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vbG9jYXRpb25zL2xvY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xenon-locations',
                styleUrls: ['./locations.component.scss'],
                template: `
    <div class="page-header" fxLayout="row" fxLayoutAlign="space-between center">
      <h6 class="title">Locations</h6>
      <xenon-ui-string-search [searchString]="search$ | async" (searchChange)="searchChange($event)" [label]="'Search Locations'"> </xenon-ui-string-search>
    </div>

    <div class="page-body">
      <xenon-location-list [locations]="locations$ | async" (locationItemClick)="openLocationForm($event)" (deleteLocationItemClick)="deleteLocation($event)">
      </xenon-location-list>
      <button mat-fab mat-flat-button (click)="openLocationForm()" class="add-button" color="primary" aria-label="Create new Location">
        <mat-icon>add</mat-icon>
      </button>
    </div>
  `,
            }]
    }], function () { return [{ type: _xenon_ui__WEBPACK_IMPORTED_MODULE_6__["UiPromptService"] }, { type: _xenon_ui__WEBPACK_IMPORTED_MODULE_6__["UiNotificationService"] }, { type: _xenon_api__WEBPACK_IMPORTED_MODULE_4__["ApiLocationService"] }, { type: _xenon_utils__WEBPACK_IMPORTED_MODULE_5__["UtilLocalStorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/admin/locations/locations.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/admin/locations/locations.module.ts ***!
  \**************************************************************/
/*! exports provided: LocationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsModule", function() { return LocationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _locations_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locations-routing.module */ "./src/app/features/admin/locations/locations-routing.module.ts");
/* harmony import */ var _locations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locations.component */ "./src/app/features/admin/locations/locations.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _location_list_location_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./location-list/location-list.component */ "./src/app/features/admin/locations/location-list/location-list.component.ts");
/* harmony import */ var _location_form_location_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location-form/location-form.component */ "./src/app/features/admin/locations/location-form/location-form.component.ts");







class LocationsModule {
}
LocationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LocationsModule });
LocationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LocationsModule_Factory(t) { return new (t || LocationsModule)(); }, imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _locations_routing_module__WEBPACK_IMPORTED_MODULE_1__["LocationsRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LocationsModule, { declarations: [_locations_component__WEBPACK_IMPORTED_MODULE_2__["LocationsComponent"], _location_list_location_list_component__WEBPACK_IMPORTED_MODULE_4__["LocationListComponent"], _location_form_location_form_component__WEBPACK_IMPORTED_MODULE_5__["LocationFormComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _locations_routing_module__WEBPACK_IMPORTED_MODULE_1__["LocationsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_locations_component__WEBPACK_IMPORTED_MODULE_2__["LocationsComponent"], _location_list_location_list_component__WEBPACK_IMPORTED_MODULE_4__["LocationListComponent"], _location_form_location_form_component__WEBPACK_IMPORTED_MODULE_5__["LocationFormComponent"]],
                imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _locations_routing_module__WEBPACK_IMPORTED_MODULE_1__["LocationsRoutingModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=locations-locations-module.js.map