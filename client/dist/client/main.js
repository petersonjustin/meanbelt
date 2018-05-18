(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _uno_uno_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uno/uno.component */ "./src/app/uno/uno.component.ts");
/* harmony import */ var _uno_edit_uno_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uno-edit/uno-edit.component */ "./src/app/uno-edit/uno-edit.component.ts");
/* harmony import */ var _uno_create_uno_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uno-create/uno-create.component */ "./src/app/uno-create/uno-create.component.ts");
/* harmony import */ var _uno_detail_uno_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uno-detail/uno-detail.component */ "./src/app/uno-detail/uno-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'pets', component: _uno_uno_component__WEBPACK_IMPORTED_MODULE_2__["UnoComponent"] },
    { path: 'pet/edit/:id', component: _uno_edit_uno_edit_component__WEBPACK_IMPORTED_MODULE_3__["UnoEditComponent"] },
    { path: 'pet/create', component: _uno_create_uno_create_component__WEBPACK_IMPORTED_MODULE_4__["UnoCreateComponent"] },
    { path: 'pet/:id', component: _uno_detail_uno_detail_component__WEBPACK_IMPORTED_MODULE_5__["UnoDetailComponent"] },
    { path: '**', component: _uno_uno_component__WEBPACK_IMPORTED_MODULE_2__["UnoComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<header id='' class='header container'>\n    <div style=\"text-align:center\">\n        <h1>\n            Welcome to {{ title }}!\n        </h1>\n    </div>\n    <nav class=\"navbar navbar-light bg-light\">\n        <!-- <a [routerLink]=\"['/']\">Home</a> -->\n        <a [routerLink]=\"['/pets']\">Pet List</a>\n        <a [routerLink]=\"['/pet/create']\">Add a New Pet</a>\n    </nav>\n</header>\n<main id='' class='container main'>\n   <p style=\"text-align: center;\">Welcome to the Pet Adption Site - checkout our pet list or add a new pet!</p>\n    <router-outlet></router-outlet>\n</main>\n<footer id='' class='footer'>\n</footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Pet Shelter';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _uno_uno_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uno/uno.component */ "./src/app/uno/uno.component.ts");
/* harmony import */ var _uno_create_uno_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uno-create/uno-create.component */ "./src/app/uno-create/uno-create.component.ts");
/* harmony import */ var _uno_edit_uno_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./uno-edit/uno-edit.component */ "./src/app/uno-edit/uno-edit.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _uno_detail_uno_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./uno-detail/uno-detail.component */ "./src/app/uno-detail/uno-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _uno_uno_component__WEBPACK_IMPORTED_MODULE_5__["UnoComponent"],
                _uno_create_uno_create_component__WEBPACK_IMPORTED_MODULE_6__["UnoCreateComponent"],
                _uno_edit_uno_edit_component__WEBPACK_IMPORTED_MODULE_7__["UnoEditComponent"],
                _uno_detail_uno_detail_component__WEBPACK_IMPORTED_MODULE_10__["UnoDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.collectPets = function () {
        console.log('Service Collect Pets');
        return this._http.get('/pet');
    };
    HttpService.prototype.createPet = function (newPet) {
        console.log('Service Create Pet');
        return this._http.post('/pet', newPet);
    };
    HttpService.prototype.getSinglePet = function (id) {
        return this._http.get('/pet/detail/' + id);
    };
    HttpService.prototype.editSinglePet = function (editPet) {
        console.log('HttpService Edit Single');
        var url = "/pet/" + editPet._id;
        console.log(url);
        return this._http.put(url, editPet);
    };
    HttpService.prototype.deletePet = function (id) {
        console.log("Delete Pet Service");
        var url = "/pet/" + id;
        console.log(url);
        return this._http.delete(url);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/uno-create/uno-create.component.css":
/*!*****************************************************!*\
  !*** ./src/app/uno-create/uno-create.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/uno-create/uno-create.component.html":
/*!******************************************************!*\
  !*** ./src/app/uno-create/uno-create.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <h3>Know of a pet needing a home? </h3>\n        <div *ngIf=\"bEError\" >\n            <div *ngFor=\"let e of bEError\">\n                <p>{{e.message}}</p>\n            </div>\n        </div>\n        <form (submit)=\"createPet()\" #fCreatePet=\"ngForm\">\n            <div class=\"row\">\n                <div class=\"col-7 form-group\">\n                    <label for=\"newPet.name\">Name: </label>\n                    <input\n                        type=\"text\"\n                        [(ngModel)]=\"newPet.name\"\n                        name=\"newPet.name\"\n                        placeholder=\"...\"\n                        required\n                        minlength=\"3\"\n                        #petName=\"ngModel\"\n                        >\n\n                        <div *ngIf=\"petName.invalid && (petName.dirty || petName.touched)\"\n                            class=\"alert alert-danger\">\n                            <div *ngIf = \"petName.errors?.required\">\n                                Name field can't be blank\n                            </div>\n                            <div *ngIf=\"petName.errors.minlength\">\n                                Name must be at least {{petName.errors.minlength.requiredLength}} characters long.\n                            </div>\n                        </div>\n\n                </div>\n                <div class=\"col-7 form-group\">\n                    <label for=\"newPet.desc\">Pet Type: </label>\n                    <input\n                        type=\"text\"\n                        [(ngModel)]=\"newPet.petType\"\n                        name=\"newPet.petType\"\n                        placeholder=\"...\"\n                        required\n                        minlength=\"3\"\n                        #petType=\"ngModel\"\n                        >\n                        <div *ngIf=\"petType.invalid && (petType.dirty || petType.touched)\"\n                            class=\"alert alert-danger\">\n                            <div *ngIf = \"petType.errors?.required\">\n                                Pet Type field can't be blank\n                            </div>\n                            <div *ngIf=\"petType.errors.minlength\">\n                                Pet Type must be at least {{petType.errors.minlength.requiredLength}} characters long.\n                            </div>\n                        </div>\n                </div>\n                <div class=\"col-7 form-group\">\n                    <label for=\"newPet.desc\">Description: </label>\n                    <input\n                        type=\"text\"\n                        [(ngModel)]=\"newPet.desc\"\n                        name=\"newPet.desc\"\n                        placeholder=\"...\"\n                        required\n                        minlength=\"3\"\n                        #petDesc=\"ngModel\"\n                        >\n                        <div *ngIf=\"petDesc.invalid && (petDesc.dirty || petDesc.touched)\"\n                            class=\"alert alert-danger\">\n                            <div *ngIf = \"petDesc.errors?.required\">\n                                Description field can't be blank\n                            </div>\n                            <div *ngIf=\"petDesc.errors.minlength\">\n                                Description must be at least {{petDesc.errors.minlength.requiredLength}} characters long.\n                            </div>\n                        </div>\n                </div>\n                <div class=\"col-7\">\n                    <h4>Skills: (Optional)</h4>\n                </div>\n                <div class=\"col-7 form-group\">\n                    <label for=\"newPet.skill1\">Skill 1: </label>\n                    <input\n                        type=\"text\"\n                        [(ngModel)]=\"newPet.skill1\"\n                        name=\"newPet.skill1\"\n                        placeholder=\"...\"\n                        >\n                </div>\n                <div class=\"col-7 form-group\">\n                    <label for=\"newPet.skill2\">Skill 2: </label>\n                    <input\n                        type=\"text\"\n                        [(ngModel)]=\"newPet.skill2\"\n                        name=\"newPet.skill2\"\n                        placeholder=\"...\"\n                        >\n                </div>\n                <div class=\"col-7 form-group\">\n                    <label for=\"newPet.skill3\">Skill 3: </label>\n                    <input\n                        type=\"text\"\n                        [(ngModel)]=\"newPet.skill3\"\n                        name=\"newPet.skill3\"\n                        placeholder=\"...\"\n                        >\n                </div>\n\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <button\n                        type=\"submit\"\n                        class=\"btn btn-success\"\n                        > Create Pet </button>\n                </div>\n            </div>\n        </form>\n        <div class=\"row\">\n            <div class=\"col-3\">\n                <button\n                    [routerLink]=\"['/pets']\"\n                    class=\"btn btn-warning\"\n\n                    > Cancel</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/uno-create/uno-create.component.ts":
/*!****************************************************!*\
  !*** ./src/app/uno-create/uno-create.component.ts ***!
  \****************************************************/
/*! exports provided: UnoCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnoCreateComponent", function() { return UnoCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnoCreateComponent = /** @class */ (function () {
    function UnoCreateComponent(_http, _route, _router) {
        this._http = _http;
        this._route = _route;
        this._router = _router;
        // make sure the Pet matches Uno and fields on the form
        this.newPet = {
            name: '',
            petType: '',
            desc: '',
            skill1: '',
            skill2: '',
            skill3: '',
        };
    }
    UnoCreateComponent.prototype.ngOnInit = function () {
    };
    UnoCreateComponent.prototype.createPet = function () {
        var _this = this;
        console.log('Create Pet Component Action');
        console.log(this.newPet);
        var obs = this._http.createPet(this.newPet);
        obs.subscribe(function (data) {
            console.log(data);
            if (data['errors']) {
                _this.bEError = [''];
                if (data['errors']['name']) {
                    _this.bEError.push(data['errors']['name']);
                }
                if (data['errors']['petType']) {
                    _this.bEError.push(data['errors']['petType']);
                }
                if (data['errors']['desc']) {
                    _this.bEError.push(data['errors']['desc']);
                }
            }
            else {
                console.log('Pew Pet created = component');
                _this._router.navigate(['/pets']);
            }
        });
    };
    UnoCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-uno-create',
            template: __webpack_require__(/*! ./uno-create.component.html */ "./src/app/uno-create/uno-create.component.html"),
            styles: [__webpack_require__(/*! ./uno-create.component.css */ "./src/app/uno-create/uno-create.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UnoCreateComponent);
    return UnoCreateComponent;
}());



/***/ }),

/***/ "./src/app/uno-detail/uno-detail.component.css":
/*!*****************************************************!*\
  !*** ./src/app/uno-detail/uno-detail.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5{\n    margin-right: 30px;\n}"

/***/ }),

/***/ "./src/app/uno-detail/uno-detail.component.html":
/*!******************************************************!*\
  !*** ./src/app/uno-detail/uno-detail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n    <div class=\"col-12\">\n        <h3>Pets Available for Adoption</h3>\n        <h5>Details about {{singlePet.name}}</h5>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"row\">\n            <div class=\"col-3\">\n                <h5>Pet Type:</h5>\n            </div>\n            <div class=\"col-9\">\n                <p>{{singlePet.petType}}</p>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-3\">\n                <h5>Description:</h5>\n            </div>\n            <div class=\"col-9\">\n                <p>{{singlePet.desc}}</p>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-3\">\n                <h5>Skills:</h5>\n            </div>\n            <div class=\"col-9\">\n                <p>{{singlePet.skill1}}</p>\n                <p>{{singlePet.skill2}}</p>\n                <p>{{singlePet.skill3}}</p>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-3\">\n                <h5>Likes:</h5>\n            </div>\n            <div class=\"col-9\">\n                <p>{{singlePet.likes}}</p>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-4\">\n                <button class=\"btn btn-success\" (click)=\"deletePet(singlePet._id)\">Adopt Pet</button>\n            </div>\n            <div class=\"col-4\">\n                <button class=\"btn btn-success\" [disabled]=\"isDisabled\" (click)=\"likePet(singlePet._id)\">Like this Pet</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/uno-detail/uno-detail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/uno-detail/uno-detail.component.ts ***!
  \****************************************************/
/*! exports provided: UnoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnoDetailComponent", function() { return UnoDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnoDetailComponent = /** @class */ (function () {
    function UnoDetailComponent(_http, _route, _router) {
        this._http = _http;
        this._route = _route;
        this._router = _router;
        this.isDisabled = false;
    }
    UnoDetailComponent.prototype.ngOnInit = function () {
        this.retrieveID();
        console.log('Detail - Init after Params');
        this.acquirePet();
    };
    UnoDetailComponent.prototype.retrieveID = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log('Init on Detail Component');
            console.log(params.id);
            _this.id = params.id;
        });
    };
    UnoDetailComponent.prototype.acquirePet = function () {
        var _this = this;
        var secondObs = this._http.getSinglePet(this.id);
        secondObs.subscribe(function (data) {
            console.log('observer Acquire Pet');
            console.log(data);
            _this.singlePet = data;
            console.log(_this.singlePet);
        });
    };
    UnoDetailComponent.prototype.getAllPets = function () {
        var _this = this;
        var obs = this._http.collectPets();
        obs.subscribe(function (data) {
            console.log(data);
            _this.pets = data;
        });
    };
    UnoDetailComponent.prototype.deletePet = function (id) {
        var _this = this;
        console.log('DeletePet Component');
        console.log(id);
        var obs = this._http.deletePet(id);
        obs.subscribe(function (data) {
            console.log('Subscribe delete Pet component');
            _this.getAllPets();
            _this._router.navigate(['pets']);
        });
    };
    UnoDetailComponent.prototype.disablebutton = function () {
    };
    UnoDetailComponent.prototype.likePet = function (id) {
        var _this = this;
        console.log('Disable Button Clicked');
        console.log(this.isDisabled);
        this.isDisabled = true;
        console.log(this.isDisabled);
        this.singlePet.likes += 1;
        var obs = this._http.editSinglePet(this.singlePet);
        console.log('Update Pet Compontent');
        console.log(this.singlePet);
        obs.subscribe(function (data) {
            console.log("edited a Pet");
            _this.id = _this.singlePet._id;
            console.log(_this.id);
            _this.acquirePet();
        });
    };
    UnoDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-uno-detail',
            template: __webpack_require__(/*! ./uno-detail.component.html */ "./src/app/uno-detail/uno-detail.component.html"),
            styles: [__webpack_require__(/*! ./uno-detail.component.css */ "./src/app/uno-detail/uno-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UnoDetailComponent);
    return UnoDetailComponent;
}());



/***/ }),

/***/ "./src/app/uno-edit/uno-edit.component.css":
/*!*************************************************!*\
  !*** ./src/app/uno-edit/uno-edit.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/uno-edit/uno-edit.component.html":
/*!**************************************************!*\
  !*** ./src/app/uno-edit/uno-edit.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"col-12\">\n            <h3>Edit Pet: </h3>\n            <div *ngIf=\"bEError\" >\n                <div *ngFor=\"let e of bEError\">\n                    <p>{{e.message}}</p>\n                </div>\n            </div>\n                <form (submit)=\"updatePet()\" #fEditPet=\"ngForm\">\n                    <div class=\"row\">\n                        <div class=\"col-7 form-group\">\n                            <label for=\"editPet.name\">Name: </label>\n                            <input\n                                type=\"text\"\n                                [(ngModel)]=\"editPet.name\"\n                                name=\"editPet.name\"\n                                placeholder=\"...\"\n                                required\n                                minlength=\"3\"\n                                #petName=\"ngModel\"\n                                >\n\n                                <div *ngIf=\"petName.invalid && (petName.dirty || petName.touched)\"\n                                    class=\"alert alert-danger\">\n                                    <div *ngIf = \"petName.errors?.required\">\n                                        Name field can't be blank\n                                    </div>\n                                    <div *ngIf=\"petName.errors.minlength\">\n                                        Name must be at least {{petName.errors.minlength.requiredLength}} characters long.\n                                    </div>\n                                </div>\n\n                        </div>\n                        <div class=\"col-7 form-group\">\n                            <label for=\"editPet.desc\">Pet Type: </label>\n                            <input\n                                type=\"text\"\n                                [(ngModel)]=\"editPet.petType\"\n                                name=\"editPet.petType\"\n                                placeholder=\"...\"\n                                required\n                                minlength=\"3\"\n                                #petType=\"ngModel\"\n                                >\n                                <div *ngIf=\"petType.invalid && (petType.dirty || petType.touched)\"\n                                    class=\"alert alert-danger\">\n                                    <div *ngIf = \"petType.errors?.required\">\n                                        Pet Type field can't be blank\n                                    </div>\n                                    <div *ngIf=\"petType.errors.minlength\">\n                                        Pet Type must be at least {{petType.errors.minlength.requiredLength}} characters long.\n                                    </div>\n                                </div>\n                        </div>\n                        <div class=\"col-7 form-group\">\n                            <label for=\"editPet.desc\">Description: </label>\n                            <input\n                                type=\"text\"\n                                [(ngModel)]=\"editPet.desc\"\n                                name=\"editPet.desc\"\n                                placeholder=\"...\"\n                                required\n                                minlength=\"3\"\n                                #petDesc=\"ngModel\"\n                                >\n                                <div *ngIf=\"petDesc.invalid && (petDesc.dirty || petDesc.touched)\"\n                                    class=\"alert alert-danger\">\n                                    <div *ngIf = \"petDesc.errors?.required\">\n                                        Description field can't be blank\n                                    </div>\n                                    <div *ngIf=\"petDesc.errors.minlength\">\n                                        Description must be at least {{petDesc.errors.minlength.requiredLength}} characters long.\n                                    </div>\n                                </div>\n                        </div>\n                        <div class=\"col-7\">\n                            <h4>Skills: (Optional)</h4>\n                        </div>\n                        <div class=\"col-7 form-group\">\n                            <label for=\"editPet.skill1\">Skill 1: </label>\n                            <input\n                                type=\"text\"\n                                [(ngModel)]=\"editPet.skill1\"\n                                name=\"editPet.skill1\"\n                                placeholder=\"...\"\n                                >\n                        </div>\n                        <div class=\"col-7 form-group\">\n                            <label for=\"editPet.skill2\">Skill 2: </label>\n                            <input\n                                type=\"text\"\n                                [(ngModel)]=\"editPet.skill2\"\n                                name=\"editPet.skill2\"\n                                placeholder=\"...\"\n                                >\n                        </div>\n                        <div class=\"col-7 form-group\">\n                            <label for=\"editPet.skill3\">Skill 3: </label>\n                            <input\n                                type=\"text\"\n                                [(ngModel)]=\"editPet.skill3\"\n                                name=\"editPet.skill3\"\n                                placeholder=\"...\"\n                                >\n                        </div>\n\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-6\">\n                            <button\n                                type=\"submit\"\n                                class=\"btn btn-success\"\n                                > Edit Pet </button>\n                        </div>\n                        <div class=\"col-3\">\n                            <button\n                                [routerLink]=\"['/pet', editPet._id]\"\n                                class=\"btn btn-warning\"\n                                > Cancel</button>\n                        </div>\n                    </div>\n                </form>\n\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/uno-edit/uno-edit.component.ts":
/*!************************************************!*\
  !*** ./src/app/uno-edit/uno-edit.component.ts ***!
  \************************************************/
/*! exports provided: UnoEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnoEditComponent", function() { return UnoEditComponent; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnoEditComponent = /** @class */ (function () {
    function UnoEditComponent(_http, _route, _router) {
        this._http = _http;
        this._route = _route;
        this._router = _router;
    }
    UnoEditComponent.prototype.ngOnInit = function () {
        if (!this.id) {
            this.retrieveID();
            console.log('Init after Params');
            this.acquirePet();
            console.log(this.editPet);
        }
    };
    UnoEditComponent.prototype.retrieveID = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log('Init on Edit Component');
            console.log(params.id);
            _this.id = params.id;
        });
    };
    UnoEditComponent.prototype.acquirePet = function () {
        var _this = this;
        var secondObs = this._http.getSinglePet(this.id);
        secondObs.subscribe(function (data) {
            console.log('observer Acquire Pet');
            console.log(data);
            _this.editPet = data;
            console.log(_this.editPet);
        });
    };
    UnoEditComponent.prototype.updatePet = function () {
        var _this = this;
        var obs = this._http.editSinglePet(this.editPet);
        console.log('Update Pet Compontent');
        console.log(this.editPet);
        obs.subscribe(function (data) {
            console.log("Update sub response");
            console.log(data);
            if (data['errors']) {
                _this.bEError = [''];
                if (data['errors']['name']) {
                    _this.bEError.push(data['errors']['name']);
                }
                if (data['errors']['petType']) {
                    _this.bEError.push(data['errors']['petType']);
                }
                if (data['errors']['desc']) {
                    _this.bEError.push(data['errors']['desc']);
                }
            }
            else {
                console.log("edited a Pet");
                console.log(_this.id);
                var tID = _this.editPet._id;
                console.log(_this.id);
                _this._router.navigate(['pet/', tID]);
            }
        });
    };
    UnoEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-uno-edit',
            template: __webpack_require__(/*! ./uno-edit.component.html */ "./src/app/uno-edit/uno-edit.component.html"),
            styles: [__webpack_require__(/*! ./uno-edit.component.css */ "./src/app/uno-edit/uno-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UnoEditComponent);
    return UnoEditComponent;
}());



/***/ }),

/***/ "./src/app/uno/uno.component.css":
/*!***************************************!*\
  !*** ./src/app/uno/uno.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/uno/uno.component.html":
/*!****************************************!*\
  !*** ./src/app/uno/uno.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <h3>Pets Available for Adoption</h3>\n    </div>\n\n    <table class=\"table table-striped\" *ngIf=\"pets\">\n        <thead>\n            <tr>\n                <th>Name</th>\n                <th>Type</th>\n                <th>Actions</th>\n            </tr>\n        </thead>\n        <tbody >\n            <tr *ngFor=\"let p of pets\" >\n                <td>{{p.name}}</td>\n                <td>{{p.petType}}</td>\n                <td>\n                    <div class=\"row\">\n                        <div class=\"col-6\">\n                            <button [routerLink]=\"['/pet/edit', p._id]\">Edit</button>\n                        </div>\n                        <div class=\"col-6\">\n                            <button [routerLink]=\"['/pet', p._id]\">Details</button>\n                        </div>\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>"

/***/ }),

/***/ "./src/app/uno/uno.component.ts":
/*!**************************************!*\
  !*** ./src/app/uno/uno.component.ts ***!
  \**************************************/
/*! exports provided: UnoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnoComponent", function() { return UnoComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnoComponent = /** @class */ (function () {
    function UnoComponent(_http, _route, _router) {
        this._http = _http;
        this._route = _route;
        this._router = _router;
    }
    UnoComponent.prototype.ngOnInit = function () {
        this.getAllPets();
    };
    UnoComponent.prototype.getAllPets = function () {
        var _this = this;
        var obs = this._http.collectPets();
        obs.subscribe(function (data) {
            console.log(data);
            _this.pets = data;
        });
    };
    UnoComponent.prototype.retrieveID = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log('Init on Edit Component');
            _this.id = params.id;
        });
    };
    UnoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-uno',
            template: __webpack_require__(/*! ./uno.component.html */ "./src/app/uno/uno.component.html"),
            styles: [__webpack_require__(/*! ./uno.component.css */ "./src/app/uno/uno.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], UnoComponent);
    return UnoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/justinpeterson/Desktop/DojoAssignments/MEAN/Belt/OneMany/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map