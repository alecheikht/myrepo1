webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * This is a singleton class
 */
var AppConfig = /** @class */ (function () {
    function AppConfig() {
        //Provide all the Application Configs here
        this.version = "1.0.0";
        this.locale = "en-US";
        this.currencyFormat = { style: "currency", currency: "USD" };
        this.dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };
        // API Related configs
        this.apiPort = "9119";
        if (this.apiProtocol === undefined) {
            this.apiProtocol = window.location.protocol;
        }
        if (this.apiHostName === undefined) {
            this.apiHostName = window.location.hostname;
        }
        if (this.apiPort === undefined) {
            this.apiPort = window.location.port;
        }
        if (this.apiHostName.includes("infomud") || this.apiHostName.includes("heroku")) {
            this.baseApiPath = this.apiProtocol + "//" + this.apiHostName + "/";
        }
        else {
            this.baseApiPath = this.apiProtocol + "//" + this.apiHostName + ":" + this.apiPort + "/";
        }
        if (this.locale === undefined) {
            this.locale = navigator.language;
        }
    }
    AppConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppConfig);
    return AppConfig;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("./src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_logout_logout_component__ = __webpack_require__("./src/app/pages/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard_component__ = __webpack_require__("./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth_guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_404_page_not_found_component__ = __webpack_require__("./src/app/pages/404/page-not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    //Important: The sequence of path is important as the router go over then in sequential manner
    { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            { path: '', redirectTo: '/home/dashboard', pathMatch: 'full', data: [{ selectedHeaderItemIndex: 1, selectedSubNavItemIndex: -1 }] },
            {
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
                data: [{ selectedHeaderItemIndex: 0, selectedSubNavItemIndex: -1 }]
            }
        ]
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__pages_login_login_component__["a" /* LoginComponent */], data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_4__pages_logout_logout_component__["a" /* LogoutComponent */], data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__pages_404_page_not_found_component__["a" /* PageNotFoundComponent */], data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__pages_404_page_not_found_component__["a" /* PageNotFoundComponent */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>"
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__ = __webpack_require__("./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__clr_angular__ = __webpack_require__("./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_track_scroll_track_scroll_directive__ = __webpack_require__("./src/app/directives/track_scroll/track_scroll.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_badge_badge_component__ = __webpack_require__("./src/app/components/badge/badge.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_legend_legend_component__ = __webpack_require__("./src/app/components/legend/legend.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_logo_logo_component__ = __webpack_require__("./src/app/components/logo/logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_component__ = __webpack_require__("./src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_logout_logout_component__ = __webpack_require__("./src/app/pages/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard_component__ = __webpack_require__("./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_config__ = __webpack_require__("./src/app/app-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_user_info_service__ = __webpack_require__("./src/app/services/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth_guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_api_api_request_service__ = __webpack_require__("./src/app/services/api/api-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_api_translate_service__ = __webpack_require__("./src/app/services/api/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_api_login_service__ = __webpack_require__("./src/app/services/api/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//Third Party Modules



//Local App Modules

// Directives

// Components



//Pages  -- Pages too are components, they contain other components





// Services






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                // Thirdparty Module
                __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_7__clr_angular__["a" /* ClarityModule */].forChild(),
                // Local App Modules
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */]
            ],
            declarations: [
                // Components
                __WEBPACK_IMPORTED_MODULE_10__components_badge_badge_component__["a" /* BadgeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_legend_legend_component__["a" /* LegendComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_logo_logo_component__["a" /* LogoComponent */],
                //Pages -- Pages too are components, they contain other components
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
                //Directives
                __WEBPACK_IMPORTED_MODULE_9__directives_track_scroll_track_scroll_directive__["a" /* TrackScrollDirective */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_19__services_user_info_service__["a" /* UserInfoService */],
                __WEBPACK_IMPORTED_MODULE_22__services_api_translate_service__["a" /* TranslateService */],
                __WEBPACK_IMPORTED_MODULE_21__services_api_api_request_service__["a" /* ApiRequestService */],
                __WEBPACK_IMPORTED_MODULE_23__services_api_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_18__app_config__["a" /* AppConfig */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/badge/badge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BadgeComponent = /** @class */ (function () {
    function BadgeComponent() {
    }
    BadgeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BadgeComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BadgeComponent.prototype, "badgeCls", void 0);
    BadgeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-badge',
            template: "<span class=\"s-badge {{badgeCls}}\">{{text}}</span>"
        }),
        __metadata("design:paramtypes", [])
    ], BadgeComponent);
    return BadgeComponent;
}());



/***/ }),

/***/ "./src/app/components/legend/legend.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LegendComponent = /** @class */ (function () {
    function LegendComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], LegendComponent.prototype, "legend", void 0);
    LegendComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-legend',
            styles: [__webpack_require__("./src/app/components/legend/legend.scss")],
            template: "\n    <div class=\"s-legend-wrap\">\n        <div *ngFor=\" let l of legend \" class=\"s-legend-item\">\n        <div  [ngStyle]=\"{'background-color':l.color}\" class=\"s-legend-color\"></div>\n        <div class=\"s-legend-value-wrap\">\n            <div class=\"s-legend-value\">{{l.value}}</div>\n            <div class=\"s-legend-label\">{{l.name}}</div>\n        </div>\n        </div>\n    </div>\n    "
        })
    ], LegendComponent);
    return LegendComponent;
}());



/***/ }),

/***/ "./src/app/components/legend/legend.scss":
/***/ (function(module, exports) {

module.exports = ".s-legend-wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 5px 0; }\n  .s-legend-wrap .s-legend-item {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 32px;\n    margin-right: 20px;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch; }\n  .s-legend-wrap .s-legend-item .s-legend-color {\n      width: 5px; }\n  .s-legend-wrap .s-legend-item .s-legend-value-wrap {\n      margin: 0px 3px; }\n  .s-legend-wrap .s-legend-item .s-legend-label {\n      font-size: 12px;\n      height: 14px;\n      line-height: 15px; }\n  .s-legend-wrap .s-legend-item .s-legend-value {\n      font-size: 18px;\n      height: 18px; }\n"

/***/ }),

/***/ "./src/app/components/logo/logo.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<svg style=\"width:100%; height:100%\" viewBox=\"0 0 210 36\">\n    <path d=\"m33.9 2.5c-1.8 0-3.4 0.5-5 1.4 -1.5 0.9-2.7 2.1-3.6 3.6 -0.9 1.5-1.3 3.2-1.3 5.1 0 2.8 1 5.1 2.9 7.1 1.9 1.9 4.2 2.8 7 2.8 1.8 0 3.4-0.4 5-1.3 1.5-0.9 2.7-2.1 3.6-3.6 0.9-1.5 1.3-3.2 1.3-5.1 0-1.8-0.4-3.5-1.3-5 -0.9-1.5-2.1-2.7-3.6-3.6 -1.6-0.9-3.3-1.4-5-1.4l0 0zm-0.2-2.3c3.6 0 6.6 1.2 8.9 3.6 2.4 2.4 3.6 5.3 3.6 8.7 0 3.4-1.2 6.3-3.6 8.7 -2.3 2.4-5.2 3.6-8.7 3.6 -3.4 0-6.4-1.2-8.7-3.6 -2.4-2.3-3.6-5.2-3.6-8.6 0-2.2 0.5-4.3 1.6-6.2 1.1-1.9 2.6-3.4 4.5-4.5 1.8-1.1 3.9-1.7 6-1.7l0 0z\" [style.fill]=\"fontColor\"/>\n    <polyline points=\"52.6 25 52.6 0.2 53.1 0.2 69.6 19.2 69.6 0.2 72.1 0.2 72.1 25 71.5 25 55.1 6.2 55.1 25 52.6 25 \" [style.fill]=\"fontColor\"/>\n    <polygon points=\"78.8 25 81.1 25 81.1 0.1 78.8 0.1 \" [style.fill]=\"fontColor\"/>\n    <path d=\"m157.2 15.2l3.3-8.5 3.3 8.5 -6.6 0 0 0zm5.7-15l-4.8 0 -6.7 17.9 13.5 0 2.6 6.8 4.9 0 -9.5-24.7 0 0z\" [style.fill]=\"fontColor\"/>\n    <polyline points=\"177.4 0.2 182.1 0.2 182.1 20.3 191.5 20.3 191.5 24.8 177.4 24.8 177.4 0.2 \" [style.fill]=\"fontColor\"/>\n    <polyline points=\"196.5 0.2 201.2 0.2 201.2 20.3 210.5 20.3 210.5 24.8 196.5 24.8 196.5 0.2 \" [style.fill]=\"fontColor\"/>\n    <path d=\"m144.7 24.2c-2.8-7.7 7.7-9.4 18.4-9.1 5.8 0.2 12.9 1 12.9 1 0 0-16.7 2.2-22.8 7 -5.9 4.8 5.5 12.2 5.5 12.2 0 0-11.5-4.2-14-11.1z\" [style.fill]=\"iconColor\"/>\n    <path d=\"m100.7 22.7c-3 0-5.5-1-7.4-2.9 -2-1.9-3-4.3-3-7.2 0-1.9 0.5-3.6 1.3-5.1 0.9-1.5 2.2-2.7 3.8-3.6 1.5-0.9 3.3-1.4 5.2-1.4 1.7 0 3.3 0.4 4.7 1.1 1.4 0.6 2.5 1.6 3.5 2.8l0-3.2c-0.7-0.5-1.5-1.3-2.3-1.7 -1.8-0.8-3.8-1.3-6-1.3 -3.6 0-6.6 1.2-9 3.5 -2.5 2.4-3.7 5.3-3.7 8.7 0 3.3 1 6.1 3 8.4 2.4 2.7 5.6 4.1 9.8 4.1 2.1 0 4.1-0.4 5.8-1.2 0.9-0.4 1.7-1.1 2.4-1.7l0-3c-2.2 2.4-4.9 3.7-8.1 3.7z\" [style.fill]=\"fontColor\"/>\n    <path d=\"m8.9 11.4c-5.6-1.2-6.7-2.6-6.7-4.9l0-0.1c0-2.4 2.4-4.2 5.5-4.2 2.7 0 4.8 0.8 6.9 2.6l0.2 0.2 0.1-0.1 0-2.7c-2.2-1.4-4.3-2-7.1-2 -4.4 0-7.8 2.7-7.8 6.4l0 0.1c0 3.7 2.4 5.7 8.1 6.8 5.5 1.1 6.5 2.5 6.5 4.8l0 0.1c0 2.6-2.4 4.4-5.7 4.4 -3.3 0-5.6-1-8.3-3.4l-0.2-0.2 0 0 0 2.9c2.6 1.9 5.2 2.8 8.4 2.8 4.7 0 8-2.8 8-6.7l0-0.1c0-3.6-2.3-5.6-7.9-6.7\" [style.fill]=\"fontColor\"/>\n    <polyline points=\"144.3 0.2 138.6 17.3 132.9 0.1 128.4 0.1 122.8 16.9 122.7 17.3 116.9 0.2 111.3 0.2 120.3 24.9 124.8 24.9 130.4 8.8 130.6 8.4 130.7 8.8 136.3 24.9 140.9 24.9 149.8 0.2 144.3 0.2 \" [style.fill]=\"fontColor\"/>\n</svg>\n-->\n<!--svg style=\"width:100%; height:100%\" viewBox=\"0 0 80 100\">\n  <path fill=\"none\" d=\"M-1-1h82v102H-1z\"/>\n  <g>\n    <g stroke=\"null\">\n      <path fill=\"#FECD57\" d=\"M77.7 40.2c0 20.2-16.4 36.6-36.7 36.6-20.3 0-36.8-16.4-36.8-36.6C4.2 20 20.7 3.5 41 3.5c20.3 0 36.7 16.4 36.7 36.7z\"/>\n      <path fill=\"#9ED36A\" d=\"M53.6 31.6l-9.3 2.8-8 7V50l3.3 7.4 8.5 2.3 9.7-3.5 5-10.6V29.3z\"/>\n      <path fill=\"#8AC054\" d=\"M36.3 50.4L37 40l-3-1.3-12.3-2.5.6 10 3 7.2 4 3.7 5.4 1.6 3.5-2z\"/>\n      <path fill=\"#CBD0D8\" d=\"M29.2 76.5h20.4v17.3H29.2z\"/>\n      <path d=\"M79.5 40.3C79.5 18.6 61.8 1 40 1S.5 18.6.5 40.3C.5 58 12 72.7 28 77.8h-.4-.2c-1 .3-1.8 1.4-1.5 2.5 0 1 1 1.5 1.8 1.6v3.8h-.2-.2c-1 .4-1.8 1.5-1.5 2.6 0 1 1 1.5 1.8 1.5v4h-.2-.2c-1 .2-1.8 1.3-1.5 2.4.2 1 1.2 1.7 2.2 1.5l9.7-1.5v.2c0 1 1 2 2.2 1.8 1 0 2-1 1.8-2.2V96l10.4-1.7h.2c1-.3 1.7-1.4 1.5-2.5-.2-1-1-1.5-1.8-1.5v-4h.4c1-.3 1.7-1.4 1.5-2.5-.2-1-1-1.5-1.8-1.6v-4.5c15.8-5 27.3-20 27.3-37.4zM15 65.3c-3.3-3.3-5.8-7-7.6-11.2-2-4.3-2.8-9-2.8-13.7 0-4.7 1-9.3 2.8-13.7 1.8-4.2 4.3-8 7.6-11.2 3.2-3.2 7-5.8 11.2-7.6C30.6 6 35.2 5 40 5c4.8 0 9.4 1 13.8 2.8 4.2 1.8 8 4.4 11.2 7.6 3.3 3.2 5.8 7 7.6 11.2 1.8 4.4 2.8 9 2.8 13.7 0 4.8-1 9.4-2.8 13.8-1.8 4.3-4.3 8-7.6 11.3-3.2 3.2-7 5.8-11.2 7.5-3 1.3-6.2 2-9.4 2.5H44c-1.2.2-2.6.3-4 .3h-1.2C37.6 70 38 64.3 40.3 59c2.4 1.6 5.2 2.4 8 2.4 4.5 0 9-2 11.8-5.8 8.3-10.6 4.7-30.2 4.7-30.2S45.7 27 37 36.8C30.8 33.4 22.3 33 19.6 33h-1s-1 15.6 6.4 23c2.2 2.4 5.2 3.5 8.2 3.5 1 0 1.8 0 2.7-.3-.4.8-.6 1.5-.8 2.3-1.2 4.5-1.4 9-.6 13.7-3-.4-5.7-1.2-8.4-2.4-4.2-1.7-8-4.3-11.2-7.5zM53 43c.6-.5 1-1.3.8-2-.2-1.2-1.3-2-2.4-1.8-.3 0-.5.2-.8.4-.2 0-5.3 3.6-9.8 10L39 52.2c-.6-1.3-1-2.7-1.3-4.2-.4-3 .4-5.7 2-8 3.6-4.6 10-7.2 15-8.6 2.4-.7 4.7-1 6.5-1.4 0 1.8.3 4 .2 6.6 0 5-1 12-4.5 16.5-2 2.8-5.3 4.3-8.7 4.3-2.2 0-4.4-.7-6.3-2l2-3.2c4-5.7 9-9 9-9zm-19.5 3l-1-1.2c-.5-.4-1-.6-1.5-.7-1.2 0-2 1-2.2 2 0 .6.2 1 .5 1.5C31.6 50 34 53 35.6 55c-.8.3-1.6.5-2.4.5-2 0-4-.8-5.4-2.3-2.3-2.4-4-6.5-4.7-11.8 0-1.5-.3-3-.3-4 1.7 0 3.7.3 5.8.7 2.5.7 4.6 1.4 6.4 2.3-1 1.8-1.4 3.8-1.5 5.8zM48 91L32 93.3v-4L48 87v3.8zm0-8L32 85.2v-4l13-1.8 3.3-.6v4z\"/>\n    </g>\n  </g>\n</svg-->\n\n<svg version=\"1.0\" style=\"width:100%; height:100%\" viewBox=\"0 0 1280.000000 600.000000\"\npreserveAspectRatio=\"xMidYMid meet\" >\n\n<g transform=\"translate(0.000000,600.000000) scale(0.100000,-0.100000)\"\nfill=\"red\" stroke=\"none\">\n<path d=\"M2783 5945 c-533 -61 -1002 -228 -1427 -509 -349 -231 -672 -563\n-895 -921 -199 -319 -336 -702 -397 -1109 -25 -163 -30 -533 -10 -706 60 -515\n251 -991 567 -1411 499 -662 1229 -1095 2059 -1221 135 -20 191 -23 430 -22\n299 0 403 10 671 64 396 81 804 227 1124 403 l100 55 3 686 c1 377 -1 686 -5\n686 -3 0 -32 -22 -62 -48 -352 -302 -775 -531 -1172 -632 -252 -65 -559 -86\n-796 -56 -779 100 -1389 617 -1574 1335 -125 484 -45 995 224 1426 116 186\n296 378 477 508 186 132 454 248 685 295 624 129 1364 -52 2101 -514 56 -35\n109 -67 118 -70 15 -6 16 53 16 665 l0 671 -37 19 c-21 10 -83 38 -138 61\n-373 160 -816 276 -1275 336 -174 22 -625 28 -787 9z\"/>\n<path d=\"M8365 5953 c-538 -45 -1048 -205 -1475 -463 -574 -346 -1006 -850\n-1243 -1450 -305 -772 -247 -1675 154 -2402 429 -780 1202 -1345 2099 -1533\n364 -77 845 -85 1335 -24 422 53 869 170 1231 323 l129 54 3 1501 2 1501\n-1085 0 -1085 0 0 -565 0 -565 470 0 470 0 0 -530 0 -529 -94 -30 c-462 -148\n-1030 -103 -1481 118 -532 260 -892 722 -1007 1293 -20 99 -23 142 -23 348 1\n222 2 242 29 354 132 560 478 1003 981 1253 424 212 908 257 1470 137 369 -79\n737 -215 1133 -420 101 -52 185 -94 188 -94 2 0 3 300 2 667 l-3 667 -90 40\nc-213 93 -635 214 -947 271 -174 31 -406 62 -572 75 -118 9 -495 11 -591 3z\"/>\n<path d=\"M11530 3000 l0 -2840 615 0 615 0 0 2840 0 2840 -615 0 -615 0 0\n-2840z\"/>\n</g>\n</svg>\n\n"

/***/ }),

/***/ "./src/app/components/logo/logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
        this.fontColor = "#63666A";
        this.iconColor = "#E3642B";
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LogoComponent.prototype, "fontColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LogoComponent.prototype, "iconColor", void 0);
    LogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-logo',
            template: __webpack_require__("./src/app/components/logo/logo.component.html")
        })
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/directives/track_scroll/track_scroll.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackScrollDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var TrackScrollDirective = /** @class */ (function () {
    function TrackScrollDirective(document) {
        this.document = document;
        this.bottom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TrackScrollDirective.prototype.track = function () {
        /*
        if (document.body.scrollHeight == window.scrollY + window.innerHeight) {
             this.bottom.emit(true);
        }
        */
        if (Math.abs(document.body.scrollHeight - (window.scrollY + window.innerHeight)) <= 100) {
            this.bottom.emit(true);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TrackScrollDirective.prototype, "bottom", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TrackScrollDirective.prototype, "track", null);
    TrackScrollDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[trackScroll]' }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document])
    ], TrackScrollDirective);
    return TrackScrollDirective;
}());



/***/ }),

/***/ "./src/app/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"no-margin\">  <!-- class=\"main-container\" will create fixed height container -->\n\n    <!--Alert -->\n    <div *ngIf=\"showAppAlert\" class=\"alert alert-app-level \">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeAppAlert()\">\n            <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\n        </button>\n        <div class=\"alert-item\">\n            <div class=\"alert-text\">\n                Alert Type: Info\n            </div>\n            <div class=\"alert-actions\">\n                <button class=\"btn alert-action\">Action</button>\n            </div>\n        </div>\n    </div>\n\n    <!-- Main App Header -->\n    <header class=\"header header-2\">\n        <div class=\"branding\">\n            <div style=\"width:40px;margin-right:10px;\"><s-logo></s-logo></div>\n            <!-- clr-icon shape=\"target\" class=\"is-solid is-inverse\"></clr-icon -->\n            <span class=\"title\">CSP</span>\n        </div>\n        <div class=\"header-nav\">\n            <a *ngFor=\"let header of appHeaderItems let idx = index\" class=\"nav-link\" [routerLink]=\"header.href\" routerLinkActive=\"active\" ><span class=\"nav-text\">{{ header.label }}</span></a>\n        </div>\n        <div class=\"header-actions\">\n            <label style=\"line-height: 60px;\"> {{userName}}</label>\n            <a [routerLink]=\"'/logout'\" class=\"nav-link nav-text\"> <clr-icon shape=\"power\"></clr-icon></a>\n        </div>\n    </header>\n\n    <!-- Sub Nav Item for Header Items -->\n    <nav *ngIf =\"appHeaderItems[selectedHeaderItemIndex].subNav && appHeaderItems[selectedHeaderItemIndex].subNav.length > 0 \" class=\"subnav\" >\n        <ul class=\"nav\">\n            <li *ngFor=\"let subNavItem of appHeaderItems[selectedHeaderItemIndex].subNav let idx=index\" class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"subNavItem.href\" routerLinkActive=\"active\" >{{ subNavItem.label }}</a>\n            </li>\n        </ul>\n    </nav>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_login_service__ = __webpack_require__("./src/app/services/api/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_info_service__ = __webpack_require__("./src/app/services/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, activeRoute, loginService, userInfoService) {
        var _this = this;
        this.router = router;
        this.activeRoute = activeRoute;
        this.loginService = loginService;
        this.userInfoService = userInfoService;
        this.showAppAlert = false;
        this.appHeaderItems = [
            {
                label: 'Dashboard',
                href: '/home/dashboard',
                subNav: []
            }
        ];
        this.selectedHeaderItemIndex = 0;
        this.selectedSubNavItemIndex = 1;
        this.userName = "";
        // This block is to retrieve the data from the routes (routes are defined in app-routing.module.ts)
        router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
            .map(function (_) { return _this.router.routerState.root; })
            .map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            ;
            return route;
        })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (data) {
            console.log("Route data===: ", data[0]);
            _this.selectedHeaderItemIndex = data[0] ? data[0].selectedHeaderItemIndex : -1;
            _this.selectedSubNavItemIndex = data[0] ? data[0].selectedSubNavItemIndex : -1;
        });
        this.userName = this.userInfoService.getUserName();
    }
    HomeComponent.prototype.navbarSelectionChange = function (val) {
        // console.log(val);
    };
    HomeComponent.prototype.closeAppAlert = function () {
        this.showAppAlert = false;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home-comp',
            template: __webpack_require__("./src/app/home.component.html"),
            styles: [__webpack_require__("./src/app/home.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_info_service__["a" /* UserInfoService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/404/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"s-page-not-found\"> 404 Page Not Found </div>\n"

/***/ }),

/***/ "./src/app/pages/404/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        console.log("404 : %s", router.url);
    }
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-not-found',
            template: __webpack_require__("./src/app/pages/404/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/pages/404/page-not-found.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/404/page-not-found.scss":
/***/ (function(module, exports) {

module.exports = ".s-page-not-found {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 60px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 15px;\n  background-color: #005d84;\n  color: #eee;\n  font-size: 24px; }\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!--router-outlet></router-outlet-->\n<h1>Dashboard</h1>\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-dashboard-pg',
            template: __webpack_require__("./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/pages/dashboard/dashboard.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.scss":
/***/ (function(module, exports) {

module.exports = ".s-dashboard-pg {\n  margin: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .s-dashboard-pg .chart-box {\n    margin: 16px;\n    padding: 0 16px;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 2px; }\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"s-login-pg\">\n    <div class=\"s-login-pg-head\">\n        <div style=\"width:100px;\"><s-logo></s-logo></div>\n        <p style=\"text-align: center\"> Sample app done with SpringBoot backend and Angular frontend </p>\n    </div>\n    <form class=\"s-login-pg-form\" name=\"form\" (ngSubmit)=\"login()\" #f=\"ngForm\" novalidate>\n        <input type=\"text\"     placeholder=\"Username (demo)\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required/>\n        <input type=\"password\" placeholder=\"Password (demo)\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required/>\n        <button type=\"submit\" class=\"btn btn-primary\">LOG IN</button>\n    </form>\n    <div class=\"s-login-pg-foot\">\n        <div *ngIf=\"errMsg\" style=\"color:indianred; font-weight: bold\">{{errMsg}}</div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_login_service__ = __webpack_require__("./src/app/services/api/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.model = {};
        this.errMsg = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.loginService.logout(false);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.getToken(this.model.username, this.model.password)
            .subscribe(function (resp) {
            if (resp.user === undefined || resp.user.token === undefined || resp.user.token === "INVALID") {
                _this.errMsg = 'Username or password is incorrect';
                return;
            }
            _this.router.navigate([resp.landingPage]);
        }, function (errResponse) {
            switch (errResponse.status) {
                case 401:
                    _this.errMsg = 'Username or password is incorrect';
                    break;
                case 404:
                    _this.errMsg = 'Service not found';
                case 408:
                    _this.errMsg = 'Request Timedout';
                case 500:
                    _this.errMsg = 'Internal Server Error';
                default:
                    _this.errMsg = 'Server Error';
            }
        });
    };
    LoginComponent.prototype.onSignUp = function () {
        this.router.navigate(['signup']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-login-pg',
            template: __webpack_require__("./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("./src/app/pages/login/login.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_api_login_service__["a" /* LoginService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.s-login-pg {\n  width: 400px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0;\n  margin: 48px 16px 16px 16px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.15); }\n\n.s-login-pg .s-login-pg-head {\n    width: 100%;\n    height: 220px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background-color: #998;\n    padding: 16px;\n    color: white; }\n\n.s-login-pg .s-login-pg-form {\n    width: 100%;\n    height: 200px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin: 24px 16px; }\n\n.s-login-pg .s-login-pg-form input {\n      margin: 16px; }\n\n.s-login-pg .s-login-pg-foot {\n    width: 100%;\n    min-height: 40px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n"

/***/ }),

/***/ "./src/app/pages/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tile column center white\" style=\"width:500px\">\n    <h3> You are now signed out </h3>\n    <p> You may <a [routerLink]=\"'/login'\"> Sign in again </a></p>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_info_service__ = __webpack_require__("./src/app/services/user-info.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(userInfoService) {
        this.userInfoService = userInfoService;
        this.userInfoService.removeUserInfo();
    }
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-logout-pg',
            template: __webpack_require__("./src/app/pages/logout/logout.component.html"),
            styles: [__webpack_require__("./src/app/pages/logout/logout.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_info_service__["a" /* UserInfoService */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/logout/logout.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #fafafa; }\n"

/***/ }),

/***/ "./src/app/services/api/api-request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiRequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_info_service__ = __webpack_require__("./src/app/services/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config__ = __webpack_require__("./src/app/app-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApiRequestService = /** @class */ (function () {
    function ApiRequestService(appConfig, http, router, userInfoService) {
        this.appConfig = appConfig;
        this.http = http;
        this.router = router;
        this.userInfoService = userInfoService;
    }
    /**
     * This is a Global place to add all the request headers for every REST calls
     */
    ApiRequestService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        var token = this.userInfoService.getStoredToken();
        headers = headers.append('Content-Type', 'application/json');
        if (token !== null) {
            headers = headers.append("Authorization", token);
        }
        return headers;
    };
    ApiRequestService.prototype.get = function (url, urlParams) {
        var me = this;
        return this.http.get(this.appConfig.baseApiPath + url, { headers: this.getHeaders(), params: urlParams })
            .catch(function (error) {
            console.log("Some error in catch");
            if (error.status === 401 || error.status === 403) {
                me.router.navigate(['/logout']);
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error || 'Server error');
        });
    };
    ApiRequestService.prototype.post = function (url, body) {
        var me = this;
        return this.http.post(this.appConfig.baseApiPath + url, JSON.stringify(body), { headers: this.getHeaders() })
            .catch(function (error) {
            if (error.status === 401) {
                me.router.navigate(['/logout']);
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error || 'Server error');
        });
    };
    ApiRequestService.prototype.put = function (url, body) {
        var me = this;
        return this.http.put(this.appConfig.baseApiPath + url, JSON.stringify(body), { headers: this.getHeaders() })
            .catch(function (error) {
            if (error.status === 401) {
                me.router.navigate(['/logout']);
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error || 'Server error');
        });
    };
    ApiRequestService.prototype.delete = function (url) {
        var me = this;
        return this.http.delete(this.appConfig.baseApiPath + url, { headers: this.getHeaders() })
            .catch(function (error) {
            if (error.status === 401) {
                me.router.navigate(['/logout']);
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error || 'Server error');
        });
    };
    ApiRequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__app_config__["a" /* AppConfig */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__user_info_service__["a" /* UserInfoService */]])
    ], ApiRequestService);
    return ApiRequestService;
}());



/***/ }),

/***/ "./src/app/services/api/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_info_service__ = __webpack_require__("./src/app/services/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_request_service__ = __webpack_require__("./src/app/services/api/api-request.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginService = /** @class */ (function () {
    function LoginService(router, userInfoService, apiRequest) {
        this.router = router;
        this.userInfoService = userInfoService;
        this.apiRequest = apiRequest;
        this.landingPage = "/home/dashboard";
    }
    LoginService.prototype.getToken = function (username, password) {
        var _this = this;
        var me = this;
        var bodyData = {
            "username": username,
            "password": password,
        };
        /*
            Using BehaviorSubject instead of Subject
            In Angular services are initialized before the components, if any component is
            subscribing, it will only receive events which are executed after subscription.
            therefore if you put a syncronize next() in the service, the component wont get it.

            A BehaviourSubject will always provide the values wheather the subscription happened after or before event

        */
        var loginDataSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]); // Will use this BehaviorSubject to emit data that we want after ajax login attempt
        var loginInfoReturn; // Object that we want to send back to Login Page
        this.apiRequest.post('session', bodyData)
            .subscribe(function (jsonResp) {
            if (jsonResp !== undefined && jsonResp !== null && jsonResp.operationStatus === "SUCCESS") {
                //Create a success object that we want to send back to login page
                loginInfoReturn = {
                    "success": true,
                    "message": jsonResp.operationMessage,
                    "landingPage": _this.landingPage,
                    "user": {
                        "userId": jsonResp.item.userId,
                        "email": jsonResp.item.emailAddress,
                        "displayName": jsonResp.item.firstName + " " + jsonResp.item.lastName,
                        "token": jsonResp.item.token,
                    }
                };
                // store username and jwt token in session storage to keep user logged in between page refreshes
                _this.userInfoService.storeUserInfo(JSON.stringify(loginInfoReturn.user));
            }
            else {
                //Create a faliure object that we want to send back to login page
                loginInfoReturn = {
                    "success": false,
                    "message": jsonResp.msgDesc,
                    "landingPage": "/login"
                };
            }
            loginDataSubject.next(loginInfoReturn);
        }, function (err) {
            loginInfoReturn = {
                "success": false,
                "message": err.url + " >>> " + err.statusText + "[" + err.status + "]",
                "landingPage": "/login"
            };
        });
        return loginDataSubject;
    };
    LoginService.prototype.logout = function (navigatetoLogout) {
        if (navigatetoLogout === void 0) { navigatetoLogout = true; }
        // clear token remove user from local storage to log user out
        this.userInfoService.removeUserInfo();
        if (navigatetoLogout) {
            this.router.navigate(["logout"]);
        }
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__user_info_service__["a" /* UserInfoService */],
            __WEBPACK_IMPORTED_MODULE_6__api_request_service__["a" /* ApiRequestService */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/api/translate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__("./src/app/app-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslateService = /** @class */ (function () {
    function TranslateService(appConfig) {
        this.appConfig = appConfig;
        // Code to get Locale Info from Session Storage
    }
    TranslateService.prototype.getDateString = function (datenum) {
        return new Date(datenum).toLocaleDateString(this.appConfig.locale, this.appConfig.dateFormat);
    };
    TranslateService.prototype.getCurrencyString = function (number) {
        return number.toLocaleString(this.appConfig.locale, this.appConfig.currencyFormat);
    };
    TranslateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* AppConfig */]])
    ], TranslateService);
    return TranslateService;
}());



/***/ }),

/***/ "./src/app/services/auth_guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_info_service__ = __webpack_require__("./src/app/services/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_login_service__ = __webpack_require__("./src/app/services/api/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, loginService, userInfoService) {
        this.router = router;
        this.loginService = loginService;
        this.userInfoService = userInfoService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
        //return true;
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.userInfoService.isLoggedIn()) {
            return true;
        }
        console.log("User is not logged - This routing guard prvents redirection to any routes that needs logging.");
        //Store the original url in login service and then redirect to login page
        this.loginService.landingPage = url;
        this.router.navigate(['login',]);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__api_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_1__user_info_service__["a" /* UserInfoService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/user-info.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserInfoService = /** @class */ (function () {
    function UserInfoService() {
        this.currentUserKey = "currentUser";
        this.storage = sessionStorage; // <--- you may switch between sessionStorage or LocalStrage (only one place to change)
    }
    //Store userinfo from session storage
    UserInfoService.prototype.storeUserInfo = function (userInfoString) {
        this.storage.setItem(this.currentUserKey, userInfoString);
    };
    //Remove userinfo from session storage
    UserInfoService.prototype.removeUserInfo = function () {
        this.storage.removeItem(this.currentUserKey);
    };
    //Get userinfo from session storage
    UserInfoService.prototype.getUserInfo = function () {
        try {
            var userInfoString = this.storage.getItem(this.currentUserKey);
            if (userInfoString) {
                var userObj = JSON.parse(this.storage.getItem(this.currentUserKey));
                return userObj;
            }
            else {
                return null;
            }
        }
        catch (e) {
            return null;
        }
    };
    UserInfoService.prototype.isLoggedIn = function () {
        return this.storage.getItem(this.currentUserKey) ? true : false;
    };
    //Get User's Display name from session storage
    UserInfoService.prototype.getUserName = function () {
        var userObj = this.getUserInfo();
        if (userObj !== null) {
            return userObj.displayName;
        }
        return "no-user";
    };
    UserInfoService.prototype.getStoredToken = function () {
        var userObj = this.getUserInfo();
        if (userObj !== null) {
            return userObj.token;
        }
        return null;
    };
    UserInfoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserInfoService);
    return UserInfoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map