(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/admin-base.ts":
/*!**************************************!*\
  !*** ./src/app/shared/admin-base.ts ***!
  \**************************************/
/*! exports provided: AdminBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminBase", function() { return AdminBase; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _xenon_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xenon/ui */ "../../libs/ui/src/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");



class AdminBase {
    constructor(uiPromptService, notificationService) {
        this.uiPromptService = uiPromptService;
        this.notificationService = notificationService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
    }
    showValidationErrors() {
        this.form.markAllAsTouched();
        Object.keys(this.form.controls).forEach((key) => {
            this.form.get(key).updateValueAndValidity();
        });
    }
    openUnsavedChangesPrompt(dialogRef, prompt, stayMessage, showValidationErrors = false) {
        const sub = this.uiPromptService
            .prompt(prompt)
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])((r) => {
            if (r.ok) {
                if (showValidationErrors)
                    this.showValidationErrors();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({ Message: stayMessage });
            }
            else {
                dialogRef.close();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({ Message: 'Changes not saved.' });
            }
        }))
            .subscribe((m) => {
            this.notificationService.show(_xenon_ui__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].success, '', m.Message, 2500);
        });
        this.subscriptions.add(sub);
    }
    OpenUnsavedChangesPromptBottomSheet(bottomSheet, prompt, stayMessage, showValidationErrors = false) {
        const sub = this.uiPromptService
            .prompt(prompt)
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])((r) => {
            if (r.ok) {
                if (showValidationErrors)
                    this.showValidationErrors();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({ Message: stayMessage });
            }
            else {
                bottomSheet.dismiss();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({ Message: 'Changes not saved.' });
            }
        }))
            .subscribe((m) => {
            this.notificationService.show(_xenon_ui__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].success, '', m.Message, 2500);
        });
        this.subscriptions.add(sub);
    }
}


/***/ })

}]);
//# sourceMappingURL=common.js.map