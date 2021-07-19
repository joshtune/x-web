(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-client-client-module"],{

/***/ "./src/app/features/client/client-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/client/client-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ClientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRoutingModule", function() { return ClientRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client.component */ "./src/app/features/client/client.component.ts");
/* harmony import */ var _xenon_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @xenon/auth */ "../../libs/auth/src/index.ts");






const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: _client_component__WEBPACK_IMPORTED_MODULE_2__["ClientComponent"],
        children: [
            {
                path: 'home',
                canActivate: [_xenon_auth__WEBPACK_IMPORTED_MODULE_3__["PermissionsAuthGuard"]],
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/features/client/home/home.module.ts")).then((m) => m.HomeModule),
            },
            {
                path: 'tasks',
                canActivate: [_xenon_auth__WEBPACK_IMPORTED_MODULE_3__["PermissionsAuthGuard"]],
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./tasks/tasks.module */ "./src/app/features/client/tasks/tasks.module.ts")).then((m) => m.TasksModule),
            },
            {
                path: 'drive',
                canActivate: [_xenon_auth__WEBPACK_IMPORTED_MODULE_3__["PermissionsAuthGuard"]],
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./drive/drive.module */ "./src/app/features/client/drive/drive.module.ts")).then((m) => m.DriveModule),
            },
            {
                path: 'team',
                canActivate: [_xenon_auth__WEBPACK_IMPORTED_MODULE_3__["PermissionsAuthGuard"]],
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./team/team.module */ "./src/app/features/client/team/team.module.ts")).then((m) => m.TeamModule),
            },
            {
                path: 'forms',
                canActivate: [_xenon_auth__WEBPACK_IMPORTED_MODULE_3__["PermissionsAuthGuard"]],
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./forms/xenon-forms.module */ "./src/app/features/client/forms/xenon-forms.module.ts")).then((m) => m.XenonFormsModule),
            },
        ],
    },
];
class ClientRoutingModule {
}
ClientRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ClientRoutingModule });
ClientRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ClientRoutingModule_Factory(t) { return new (t || ClientRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClientRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/client/client.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/client/client.component.ts ***!
  \*****************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ClientComponent {
}
ClientComponent.ɵfac = function ClientComponent_Factory(t) { return new (t || ClientComponent)(); };
ClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientComponent, selectors: [["xenon-client"]], decls: 1, vars: 0, template: function ClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xenon-client',
                template: ` <router-outlet></router-outlet> `,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/client/client.module.ts":
/*!**************************************************!*\
  !*** ./src/app/features/client/client.module.ts ***!
  \**************************************************/
/*! exports provided: ClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _client_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-routing.module */ "./src/app/features/client/client-routing.module.ts");
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client.component */ "./src/app/features/client/client.component.ts");





class ClientModule {
}
ClientModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ClientModule });
ClientModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ClientModule_Factory(t) { return new (t || ClientModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _client_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClientRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClientModule, { declarations: [_client_component__WEBPACK_IMPORTED_MODULE_3__["ClientComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _client_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClientRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_client_component__WEBPACK_IMPORTED_MODULE_3__["ClientComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _client_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClientRoutingModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=features-client-client-module.js.map