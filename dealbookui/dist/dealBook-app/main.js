(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-header (menuExpand)=\"menuExpand($event)\"></app-header>\n<div class=\"main-container\">\n    <app-nav-menu [isMenuExpand]='isMenuExpand' [curPath]='curPath'></app-nav-menu>\n    <app-main></app-main>\n</div> -->\n<!-- {{time | datePipe | date:'mediumDate' }} -->\n<!-- <app-footer></app-footer> -->\n<app-header (menuExpand)=\"menuExpand($event)\" *ngIf=\"router.url !== '/sign-in' && router.url !== '/forgot' && router.url !== '/reset'\"></app-header>\n<div class=\"main-container\">\n    <app-nav-menu [isMenuExpand]='isMenuExpand' [curPath]='curPath' *ngIf=\"router.url !== '/sign-in' && router.url !== '/forgot' && router.url !== '/reset'\"></app-nav-menu>\n    <div class=\"main-panel ps ps--active-y pl-2\" style=\"scrollbar-width: thin;\">\n        <div class=\"container-fluid\">\n        \n            <app-spinner></app-spinner>\n            <app-hierarchy-modal></app-hierarchy-modal>\n            <router-outlet></router-outlet>\n \n        </div>\n    </div>\n    <app-sidewindow *ngIf=\"isShowComp\" (closeWindow)='closeWindow()' ></app-sidewindow>\n</div>\n<app-footer *ngIf=\"router.url !== '/sign-in' && router.url !== '/forgot' && router.url !== '/reset'\"></app-footer >");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/column-list/column-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/column-list/column-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n    <div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n        <div class=\"example-box\" *ngFor=\"let order of form.controls.orders.controls; let i = index\" cdkDrag>\n            <div class=\"example-custom-placeholder\" *cdkDragPlaceholder></div>\n            <label formArrayName=\"orders\">\n                <input type=\"checkbox\" [formControlName]=\"i\" (change)=\"changeColumn($event)\">\n                {{ordersData[i].column}}\n            </label>\n        </div>\n    </div>\n    <!- <button [disabled]=\"!form.valid\">submit</button> ->\n</form> -->\n\n<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n    <div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n        <div class=\"example-box\" *ngFor=\"let order of ordersData; let i = index\" cdkDrag>\n            <div class=\"example-custom-placeholder\" *cdkDragPlaceholder></div>\n            <label formArrayName=\"orders\">\n                <input type=\"checkbox\" [formControlName]=\"i\" (change)=\"changeColumn($event)\">\n                {{ordersData[i].column}}\n            </label>\n        </div>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid footer\">\n    <div class=\"row\">\n        <div class=\"col-md-12 text-center\">\n            © 2019-20 All Rights Reserved. Version 2.5 (1 Aug 2020)\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <div class=\"navbar-wrapper\">\n        <!-- <button type=\"button\" class=\"hamburger is-closed\" [ngClass]=\"!isExpand ? 'is-closed' : 'is-open'\" (click)=\"expandMenu()\" data-toggle=\"offcanvas\">\n        <span class=\"hamb-top\"></span>\n        <span class=\"hamb-middle\"></span>\n        <span class=\"hamb-bottom\"></span>\n    </button> -->\n        <i class=\"fa fa-bars\" aria-hidden=\"true\" *ngIf=\"!isExpand\" (click)=\"expandMenu()\"></i>\n        <i class=\"fa fa-chevron-left\" aria-hidden=\"true\" *ngIf=\"isExpand\" (click)=\"expandMenu()\"></i>\n    </div>\n    <div class=\"navbar-header pl-2 user-icon\">\n        <a class=\"navbar-brand\" routerLink=\"\"><img src=\"assets/logo.png\" alt=\"Logo\" /></a>\n        <span class=\"mr-3\"><i class=\"fa fa-cog mr-2\" aria-hidden=\"true\"></i> <span>{{Username}} </span> <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\" (click)=\"showlogout = !showlogout\"></i></span>\n        <div class=\"user-profile\" *ngIf=\"showlogout\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\">Profile</li>\n                <li class=\"list-group-item\" (click)=\"authService.SignOut()\">Logout</li>\n              </ul>\n        </div>\n    </div>\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/nav-menu/nav-menu.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/nav-menu/nav-menu.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='sidebar' [class.nav-open]='!isMenuExpand'>\n    <div class=\"navbar sidebar-container\">\n        <nav class=\"navbar navbar-light bg-white p-0 mt-2\">\n            <ul class=\"navbar-nav h6\" appHidesubmenu (clickOutside)=\"clickOutside()\">\n                <li class=\"nav-item dropdown px-2 mb-2\" [class.active]=\"submenuShowHide.dashboard\">\n                    <a class=\"nav-link\" routerLink=\"dashboard\" (click)=\"showSubmenu('dashboard')\" id=\"navbardrop\" data-toggle=\"dropdown\">\n                        <i class=\"fa fa-tachometer\" aria-hidden=\"true\" title=\"Dashboard\"></i> <span>Dashboard</span>\n                    </a>\n                </li>\n                <li class=\"nav-item dropdown px-2 mb-2\" [class.active]=\"submenuShowHide.contacts\">\n                    <a class=\"nav-link\" (click)=\"showSubmenu('contacts')\" routerLink=\"contacts\" id=\"navbardrop\" data-toggle=\"dropdown\">\n                        <i class=\"fa fa-address-book-o\" aria-hidden=\"true\" title=\"Contacts\"></i> <span>Contacts</span>\n                    </a>\n                    <div class=\"dropdown-menu bg-color mb-2\" (click)=\"clickOutside()\" [class.show]=\"submenuShowHide.contacts\">\n                        <a class=\"dropdown-item\" routerLink=\"contacts\">Contacts</a>\n                    </div>\n                </li>\n                <li class=\"nav-item dropdown px-2 mb-2\" [class.active]=\"submenuShowHide.deals\">\n                    <a class=\"nav-link\" id=\"navbardrop\" routerLink='contacts/activites' (click)=\"showSubmenu('deals')\" data-toggle=\"dropdown\">\n                        <i class=\"fa fa-handshake-o\" aria-hidden=\"true\" title=\"Deals\"></i> <span>Deals</span>\n                    </a>\n                    <div class=\"dropdown-menu bg-color mb-2\" (click)=\"clickOutside()\" [class.show]=\"submenuShowHide.deals\">\n                        <a class=\"dropdown-item\" href=\"#\">Deals</a>\n                    </div>\n                </li>\n                <li class=\"nav-item dropdown px-2 mb-2\" [class.active]=\"submenuShowHide.sales\">\n                    <a class=\"nav-link\" id=\"navbardrop\" (click)=\"showSubmenu('sales')\" data-toggle=\"dropdown\">\n                        <i class=\"fa fa-file-o\" aria-hidden=\"true\" title=\"Contracts\"></i> <span>Contracts</span>\n                    </a>\n                    <div class=\"dropdown-menu bg-color mb-2\" (click)=\"clickOutside()\" [class.show]=\"submenuShowHide.sales\">\n                        <a class=\"dropdown-item\" href=\"#\">Contracts</a>\n                    </div>\n                </li>\n\n                <li class=\"nav-item dropdown px-2 mb-2\" [class.active]=\"submenuShowHide.reports\">\n                    <a class=\"nav-link\" routerLink=\"reports\" id=\"navbardrop\" (click)=\"showSubmenu('reports')\" data-toggle=\"dropdown\">\n                        <i class=\"fa fa-users\" aria-hidden=\"true\" title=\"Consultants\"></i> <span>Consultants</span>\n                    </a>\n                    <div class=\"dropdown-menu bg-color mb-2\" (click)=\"clickOutside()\" [class.show]=\"submenuShowHide.reports\">\n                        <a class=\"dropdown-item\" routerLink=\"reports\">Reports</a>\n                    </div>\n                </li>\n\n                <li class=\"nav-item dropdown px-2 mb-2\" [class.active]=\"submenuShowHide.commissions\">\n                    <a class=\"nav-link\" id=\"navbardrop\" (click)=\"showSubmenu('commissions')\" data-toggle=\"dropdown\">\n                        <i class=\"fa fa-money\" aria-hidden=\"true\" title=\"Commissions\"></i> <span>Commissions</span>\n                        <!-- <i class=\"fa fa-usd\" aria-hidden=\"true\"></i> <span>Commissions</span> -->\n                    </a>\n                    <div class=\"dropdown-menu bg-color mb-2\" (click)=\"clickOutside()\" [class.show]=\"submenuShowHide.commissions\">\n                        <a class=\"dropdown-item\" routerLink=\"reports\">Reports</a>\n                    </div>\n                </li>\n            </ul>\n        </nav>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/sidewindow/sidewindow.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/sidewindow/sidewindow.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main #window class=\"side-window some-parent-class\" [ngClass]=\"className\" [class.min-window]=\"windowMinimize\" [@slideMenu]=\"animate ? false : true\" (@slideMenu.done)=\"animEnd($event)\" cdkDragBoundary=\".main-panel\" cdkDrag [cdkDragDisabled]=\"windowMinimize\">\n    <div class=\"container-fluid\">\n        <p class=\"m-0\" cdkDragHandle>{{title}}<span></span></p>\n        <span class=\"closebtn\"> <i class=\"fa fa-window-maximize\" (click)='windowResize(false)' aria-hidden=\"true\" *ngIf=\"windowMinimize\"></i> <i class=\"fa fa-window-minimize\" (click)='windowResize(true)' *ngIf=\"!windowMinimize\" aria-hidden=\"true\"></i> <i class=\"fa fa-window-close\" (click)='close()' aria-hidden=\"true\"></i></span>\n        <div class=\"p-3\">\n            <!-- <button class=\"btn btn-success px-3 py-1\" style=\"float: right; background-color: #037777;\" *ngIf=\"cilick !== true\" (click)=\"collapseHierachy()\"><i class=\"fa fa-minus\"></i></button>\n            <button class=\"btn btn-success px-3 py-1\" style=\"float: right;background-color: #037777;\" *ngIf=\"cilick === true\" (click)=\"getAllDataHierarchyData()\"><i class=\"fa fa-plus\"></i></button> -->\n            <i style=\"font-size:15px;\"\n            class=\"fa fa-minus-circle\" style=\"font-size: 31px;\n            float: right;\n            margin: 0px 10px;\n            padding: 0px;\n            color: #037777;\" *ngIf=\"cilick !== true\" (click)=\"collapseHierachy()\"\n            aria-hidden=\"true\"></i>\n            <i style=\"font-size:15px;\"\n            class=\"fa fa-plus-circle\" style=\"font-size: 31px;\n            float: right;\n            margin: 0px 10px;\n            padding: 0px;\n            color: #037777;\" *ngIf=\"cilick === true\" (click)=\"getAllDataHierarchyData()\"\n            aria-hidden=\"true\"></i>\n            <!-- <button class=\"btn btn-success px-3 py-1\" *ngIf=\"cilick !== true\"style=\"background-color: #0ac8c8;\" (click)=\"collapseHierachy()\">Expand</button>\n            <button class=\"btn btn-success px-3 py-1\" *ngIf=\"cilick === true\" style=\"background-color: #0ac8c8;\" (click)=\"getAllDataHierarchyData()\">Expand1</button> -->\n            <div>\n                <!-- <ng-template dynamic-host></ng-template> -->\n                <organization-chart chartClass=\"myChart\" [datasource]=\"this.utils.ds\"  [nodeTemplate]=\"myNodeTemplate\" [zoomoutLimit]=\"0.2\" [zoominLimit]=\"1\" [pan]=\"true\" [zoom]=\"true\">\n                </organization-chart>\n                \n                \n                <ng-template #myNodeTemplate let-nodeData=\"datasource\">\n                    <div (click)=\"selectNode(nodeData)\">\n                        <div class=\"position\">{{nodeData.name}}</div>\n                       \n                        <div class=\"fullname\">{{nodeData.title}}<br>\n                            <i class=\"fa fa-meetup\" aria-hidden=\"true\"></i><span>{{nodeData.meetingCount}}\n                        </span>&nbsp; \n                        <i class=\"fa fa-phone custom\"></i><span> {{nodeData.callCount}} </span> &nbsp; \n                        <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i><span>{{nodeData.emailCount}} &nbsp;\n                        </span>&nbsp;\n                        <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i><span>{{nodeData.textCount}} &nbsp;\n                        </span>\n                    </div>\n                    <!-- <i (click)=\"showChildren(nodeData, $event)\" *ngIf=\"!(nodeData.children && nodeData.children.length)\" class=\"oc-toggle-btn oc-icon oc-icon-plus ng-star-inserted\"></i> -->\n                        \n                    </div>\n                 \n                </ng-template>\n            </div>\n        </div>\n    </div>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hierarchy-modal/hierarchy-modal.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hierarchy-modal/hierarchy-modal.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade\" id=\"modal-hierarchy\" style=\"display: none;z-index: 9999;overflow: hidden;\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\" style=\"background-color: #037777; color:#fff;\">\n                <h5 class=\"modal-title\">{{this.utils.name }} {{'- Hierarchy'}}</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" style=\"color: #fff;\">×</span></button>\n                     </div>\n            <div class=\"modal-body pts-pull-middle\">\n                 <!-- <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"box box-info mainDiv\">\n                            <div class=\"box-header with-border\">\n                            </div>\n                            <div class=\"box-body mainSubDiv tf-tree  tf-gap-sm  col-md-12\">\n                                <ul class=\"content-ul\">\n                                    <li class=\"content-li\" id=\"{{'mainli'+this.utils.contactId}}\">\n                                        <div class=\"contentDiv tf-nc\" >\n                                            <div style=\"background-color: #4b8c91;color: #fff; border-bottom: 1px solid #c8ced3;;\">\n                                                <h6 style=\"font-weight: bold;\">{{this.utils.contactName}}</h6>\n                                            </div>\n                                           \n                                            <span class=\"tag tag-primary\"><i class=\"fa fa-meetup\" aria-hidden=\"true\"></i>\n                                                </span>\n                                            <span class=\"tag tag-success\"><i class=\"fa fa-phone custom\"></i>\n                                              </span>\n                                            <span class=\"tag tag-danger\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n                                               \n                                               </span>\n                                               <div>\n                                                <i (click)=\"getChildForParent(this.utils.contactId)\" class=\"fa fa-plus-circle addcontact\" aria-hidden=\"true\"></i>\n                                               </div>\n                                        </div>\n        \n                                    </li>\n                                </ul>\n                                \n                            </div>\n                        </div>\n                    </div>\n                </div>  -->\n\n                <organization-chart chartClass=\"myChart\" [datasource]=\"this.utils.ds\"  [nodeTemplate]=\"myNodeTemplate\" [zoomoutLimit]=\"0.2\" [zoominLimit]=\"1\" [pan]=\"true\" [zoom]=\"true\">\n                </organization-chart>\n                \n                \n                <ng-template #myNodeTemplate let-nodeData=\"datasource\">\n                    <div (click)=\"selectNode(nodeData)\">\n                        <div class=\"position\">{{nodeData.name}}</div>\n                       \n                        <div class=\"fullname\">{{nodeData.title}}<br>\n                            <i class=\"fa fa-meetup\" aria-hidden=\"true\"></i><span>{{nodeData.meetingCount}}\n                        </span>&nbsp; \n                        <i class=\"fa fa-phone custom\"></i><span> {{nodeData.callCount}} </span> &nbsp; \n                        <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i><span>{{nodeData.emailCount}} &nbsp;\n                        </span>&nbsp;\n                        <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i><span>{{nodeData.textCount}} &nbsp;\n                        </span>\n                    </div>\n                    <i (click)=\"showChildren(nodeData, $event)\" *ngIf=\"!(nodeData.children && nodeData.children.length)\" class=\"oc-toggle-btn oc-icon oc-icon-plus ng-star-inserted\"></i>\n                        \n                    </div>\n                 \n                </ng-template>\n            </div>\n            <!-- <div class=\"modal-footer pts-pull-middle\">\n                \n\n            </div> -->\n        </div>\n    </div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"loading\" *ngIf=\"utils.isLoadingSpin\">\n        <img src=\"../../assets/loader1.gif\"  id=\"loading-image\" alt=\"Loading...\" height=\"auto\" width=\"auto\">\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/changepassword/changepassword.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/changepassword/changepassword.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-body\" style=\"margin-top: 12em;\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 mx-auto\">\n          <div class=\"card-group\">\n            <div class=\"card text-white py-5 d-md-down-none\" style=\"width:44%\">\n              <div class=\"card-body text-center\">\n                <div>\n                  <div _ngcontent-rpc-c1=\"\" class=\"px-logo\">\n                    <a _ngcontent-rpc-c1=\"\" href=\"https://www.euclidinnovations.com\" target=\"_blank\">\n                      <img _ngcontent-rpc-c1=\"\" alt=\"logo\" src=\"assets/logo.png\" style=\"height: 7em;margin-top: 1em;\">\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"card p-4\">\n              <div class=\"card-body\">\n                <form>\n                  <div>\n                    <h3 style=\"text-align: center;font-family: TT Tr;font-weight: bold;font-size: 22px;\">Reset Password</h3>\n                  </div>\n                  <div>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" required [(ngModel)]=\"user.email\" name=\"email\">\n                  </div>\n                  <div style=\"margin-top: 10px\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Please enter the token\" required [(ngModel)]=\"user.token\" name=\"token\">\n                  </div>\n                  <div style=\"margin-top: 10px\">\n                    <input type=\"password\" class=\"form-control\" placeholder=\"New Password\" required [(ngModel)]=\"user.password\" name=\"password\">\n                  </div>\n                  <div style=\"margin-top: 10px\">\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" required [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\">\n                  </div>\n                  <div class=\"row col-6\" style=\"margin-top: 1em;\">\n                    <button type=\"button\" class=\"btn btn-login px-4\" style=\"margin-top: 15px;\" (click)=\"sendUser()\" style=\"background-color: #03c4c4;color: #fff;\">Reset</button>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/contacts/hierarchy/hierarchy.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/contacts/hierarchy/hierarchy.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <organization-chart chartClass=\"myChart\" [zoomoutLimit]=\"0.2\" [zoominLimit]=\"1\" [datasource]=\"topEmployee\" [nodeTemplate]=\"myNodeTemplate\" [pan]=\"true\" [zoom]=\"true\">\n</organization-chart> -->\n<ngx-org-chart [nodes]=\"topEmployee\" direction=\"vertical\"></ngx-org-chart>\n<ng-template #myNodeTemplate let-employee=\"datasource\">\n    <div (click)=\"clicked(employee)\" class=\"oc-box oc-border oc-background\">\n        <div class=\"oc-img\" *ngIf=\"employee?.img\"><img src=\"{{employee?.img}}\" /></div>\n        <div class=\"oc-content\">\n            <div class=\"oc-name\">{{employee?.name}}</div>\n            <div class=\"oc-designation\">{{employee?.designation}}</div>\n            <div class=\"col-md-12\">\n                <hr class=\"m-0 box\">\n                <span class=\"tag tag-primary\"><i class=\"fa fa-meetup\" aria-hidden=\"true\"></i>\n                    {{getData(employee, \"Meeting\")}} </span>\n                <span class=\"tag tag-success\"><i class=\"fa fa-phone custom\"></i> {{getData(employee, \"Call\")}} </span>\n                <span class=\"tag tag-danger\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n                    {{getData(employee, \"Email\")}} </span>\n            </div>\n            <i (click)=\"addContact(employee, $event)\" class=\"fa fa-plus-circle addcontact\" aria-hidden=\"true\"></i>\n            <i (click)=\"showChildren(employee, $event)\" *ngIf=\"!(employee.children && employee.children.length)\" class=\"oc-toggle-btn oc-icon oc-icon-plus ng-star-inserted\"></i>\n        </div>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/forgotpassword/forgotpassword.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/forgotpassword/forgotpassword.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-body\" style=\"margin-top: 12em;\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 mx-auto\">\n          <div class=\"card-group\">\n            <div class=\"card text-white py-5 d-md-down-none\" style=\"width:44%\">\n              <div class=\"card-body text-center\">\n                <div>\n                  <div _ngcontent-rpc-c1=\"\" class=\"px-logo\">\n                    <a _ngcontent-rpc-c1=\"\" href=\"https://www.euclidinnovations.com\" target=\"_blank\">\n                      <img _ngcontent-rpc-c1=\"\" alt=\"logo\" src=\"assets/logo.png\" style=\"height: 7em;margin-top: 1em;\">\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"card p-4\">\n              <div class=\"card-body\">\n                <form>\n                  <h3 style=\"text-align: center;font-family: TT Tr;font-weight: bold;font-size: 22px;\">Forget Password</h3>\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"email\" required [(ngModel)]=\"user.email\" name=\"email\" #email>\n                  </div>\n                  \n                  <div class=\"row\">\n                    <div class=\"col-6\">\n                      <button type=\"button\" class=\"btn btn-login px-4\" (click)=\"sendUser()\" style=\"background-color: #03c4c4;color: #fff;\">Reset</button>\n\n                    </div>\n                    <div class=\"col-6 text-right\">\n                      <button type=\"button\" class=\"btn btn-link px-0\" [routerLink]=\"['/sign-in']\" style=\"width:100%;background-color: #03c4c4;color: #fff;\">Back To Login</button>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n            \n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-body\" style=\"margin-top: 12em;\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 mx-auto\">\n          <div class=\"card-group\">\n            <div class=\"card text-white py-5 d-md-down-none\" style=\"width:44%\">\n              <div class=\"card-body text-center\">\n                <div>\n                  <div _ngcontent-rpc-c1=\"\" class=\"px-logo\">\n                    <a _ngcontent-rpc-c1=\"\" href=\"https://www.euclidinnovations.com\" target=\"_blank\">\n                      <img _ngcontent-rpc-c1=\"\" alt=\"logo\" src=\"assets/logo.png\" style=\"height: 7em;margin-top: 1em;\">\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"card p-4\">\n              <div class=\"card-body\">\n                <form>\n                  <h3 style=\"text-align: center;font-family: TT Tr;font-weight: bold;font-size: 22px;\">Sign In</h3>\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"email\" required [(ngModel)]=\"user.email\" name=\"email\" #email>\n                  </div>\n                  <div class=\"input-group mb-4\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"fa fa-lock\"></i></span>\n                    </div>\n                    <input type=\"password\" class=\"form-control\" placeholder=\"password\" required [(ngModel)]=\"user.password\" name=\"password\" #password>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-6\">\n                      <button type=\"button\" class=\"btn btn-login px-4\" (click)=\"sendUser()\" style=\"background-color: #03c4c4;color: #fff;\">Login</button>\n\n                    </div>\n                    <div class=\"col-6 text-right\">\n                      <button type=\"button\" class=\"btn btn-link px-0\" [routerLink]=\"['/forgot']\" style=\"width:100%;background-color: #03c4c4;color: #fff;\">Forgot password?</button>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n            \n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/register/register.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/register/register.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-body\" style=\"margin-top: 12em;\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 mx-auto\">\n          <div class=\"card mx-4\">\n            <div class=\"card-body p-4\">\n              <form>\n                <h1>Register</h1>\n                <p class=\"text-muted\">Create your account</p>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"username\" required>\n                </div>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">@</span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"email\" required>\n                </div>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"fa fa-lock\"></i></span>\n                  </div>\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"new-password\" required>\n                </div>\n                <div class=\"input-group mb-4\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"fa fa-lock\"></i></span>\n                  </div>\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\" autocomplete=\"new-password\" required>\n                </div>\n                <button type=\"button\" class=\"btn btn-block btn-success\">Create Account</button>\n              </form>\n            </div>\n            <div class=\"card-footer p-4\">\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <button class=\"btn btn-block btn-facebook\" type=\"button\"><span>facebook</span></button>\n                </div>\n                <div class=\"col-6\">\n                  <button class=\"btn btn-block btn-twitter\" type=\"button\"><span>twitter</span></button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _views_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/forgotpassword/forgotpassword.component */ "./src/app/views/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _views_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/changepassword/changepassword.component */ "./src/app/views/changepassword/changepassword.component.ts");






const routes = [
    { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
    { path: 'sign-in', component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    // { path: 'contacts', component: ContactsComponent },
    //  { path: 'db', loadChildren: () => import('./common/main/main.module').then(mod => mod.MainModule), canActivate:[AuthGuard]},
    { path: 'forgot', component: _views_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_4__["ForgotpasswordComponent"] },
    { path: 'reset', component: _views_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_5__["ChangepasswordComponent"] },
    //{ path: '**', redirectTo: '/db' },
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() | views-dashboard-dashboard-module */[__webpack_require__.e("default~views-contacts-contacts-module~views-dashboard-dashboard-module"), __webpack_require__.e("views-dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./views/dashboard/dashboard.module */ "./src/app/views/dashboard/dashboard.module.ts")).then(m => m.DashboardModule)
    },
    {
        path: 'contacts',
        loadChildren: () => Promise.all(/*! import() | views-contacts-contacts-module */[__webpack_require__.e("default~views-contacts-contacts-module~views-dashboard-dashboard-module"), __webpack_require__.e("views-contacts-contacts-module")]).then(__webpack_require__.bind(null, /*! ./views/contacts/contacts.module */ "./src/app/views/contacts/contacts.module.ts")).then(m => m.ContactsModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* app-main {\n    width: calc(100% - 45px);\n}\n\n.main-container {\n    height: calc(100vh - 80px);\n    display: flex;\n} */\n\n.main-panel {\n    width: 100%;\n    transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    margin-top: 5px;\n    overflow: hidden auto;\n    /* display: inline-flex; */\n    align-items: center;\n    /* height: calc(100vh - 85px); */\n    height: calc(100vh - 66px);\n    margin-right: 7px;\n}\n\n.container-fluid {\n    padding-left: 0;\n    position: relative;\n    padding-right: 0px;\n}\n\napp-main {\n    width: calc(100% - 45px);\n}\n\n.main-container {\n    height: calc(100vh - 80px);\n    display: flex;\n}\n\n.item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 1;\n}\n\n.swal2-popup {\n    font-size: 0.5rem !important;\n  }\n\n/* \n \n.orgchart.myChart .oc-node .position {\n    box-sizing: border-box;\n    background-color: #abb2b9 !important;\n    color: #fff;\n    width: 134px;\n    height: 39px;\n    padding: 2px;\n    border-top: 1px solid #566573 !important;\n  border-right: 1px solid #566573 !important;\n  border-left: 1px solid #566573 !important;\n  }\n    \n  .orgchart.myChart .oc-node .fullname {\n    box-sizing: border-box;\n    color: #000;\n    background-color: #fff !important;\n    width: 134px;\n    height: 65px;\n    padding: 2px;\n    border: 1px solid #566573 !important;\n  }\n    \n    .orgchart.myChart > orgchart-node > .oc-node::after {\n      background-color: rgba(33, 90, 136, 0.8) !important;\n    }\n    \n    .orgchart.myChart .oc-group:not(:last-child)::before {\n      border-color: rgba(33, 90, 136, 0.8)!important;\n    }\n    \n    .orgchart.myChart .oc-group > orgchart-node::before {\n      border-color: rgba(33, 90, 136, 0.8)!important;\n    }\n    \n    .orgchart.myChart orgchart-node:not(:last-child)::after {\n      border-color: rgba(33, 90, 136, 0.8)!important;\n    }\n    \n    #oc-1 .fullname {\n      color: blue;\n    } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7R0FPRzs7QUFFSDtJQUNJLFdBQVc7SUFFWCwwREFBMEQ7SUFDMUQsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQywwQkFBMEI7SUFDMUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLE1BQU07SUFDTixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksNEJBQTRCO0VBQzlCOztBQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0EwQ08iLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGFwcC1tYWluIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDVweCk7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XG4gICAgZGlzcGxheTogZmxleDtcbn0gKi9cblxuLm1haW4tcGFuZWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XG4gICAgLyogZGlzcGxheTogaW5saW5lLWZsZXg7ICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4NXB4KTsgKi9cbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NnB4KTtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbmFwcC1tYWluIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDVweCk7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLml0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5zd2FsMi1wb3B1cCB7XG4gICAgZm9udC1zaXplOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4vKiBcbiBcbi5vcmdjaGFydC5teUNoYXJ0IC5vYy1ub2RlIC5wb3NpdGlvbiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWJiMmI5ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDEzNHB4O1xuICAgIGhlaWdodDogMzlweDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM1NjY1NzMgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzU2NjU3MyAhaW1wb3J0YW50O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM1NjY1NzMgIWltcG9ydGFudDtcbiAgfVxuICAgIFxuICAub3JnY2hhcnQubXlDaGFydCAub2Mtbm9kZSAuZnVsbG5hbWUge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMzRweDtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NjY1NzMgIWltcG9ydGFudDtcbiAgfVxuICAgIFxuICAgIC5vcmdjaGFydC5teUNoYXJ0ID4gb3JnY2hhcnQtbm9kZSA+IC5vYy1ub2RlOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCA5MCwgMTM2LCAwLjgpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC5vcmdjaGFydC5teUNoYXJ0IC5vYy1ncm91cDpub3QoOmxhc3QtY2hpbGQpOjpiZWZvcmUge1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDMzLCA5MCwgMTM2LCAwLjgpIWltcG9ydGFudDtcbiAgICB9XG4gICAgXG4gICAgLm9yZ2NoYXJ0Lm15Q2hhcnQgLm9jLWdyb3VwID4gb3JnY2hhcnQtbm9kZTo6YmVmb3JlIHtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgzMywgOTAsIDEzNiwgMC44KSFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC5vcmdjaGFydC5teUNoYXJ0IG9yZ2NoYXJ0LW5vZGU6bm90KDpsYXN0LWNoaWxkKTo6YWZ0ZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDMzLCA5MCwgMTM2LCAwLjgpIWltcG9ydGFudDtcbiAgICB9XG4gICAgXG4gICAgI29jLTEgLmZ1bGxuYW1lIHtcbiAgICAgIGNvbG9yOiBibHVlO1xuICAgIH0gKi8iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/event-emitter.service */ "./src/app/services/event-emitter.service.ts");
/* harmony import */ var _providers_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers/utils */ "./src/app/providers/utils.ts");






let AppComponent = class AppComponent {
    constructor(utils, router, location, route, emService) {
        this.utils = utils;
        this.router = router;
        this.location = location;
        this.route = route;
        this.emService = emService;
        this.title = 'dealBook-app';
        this.time = new Date('2019-10-23T12:54:09.285+0000');
        this.isShowComp = false;
        this.isMenuExpand = false;
        this.showWindow = false;
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                emService.setCurPath(event.urlAfterRedirects.split("/")[2]);
            }
        });
        emService.sideWindow.subscribe(val => {
            this.isShowComp = val.isTrue;
        });
    }
    menuExpand($event) {
        this.isMenuExpand = $event;
    }
};
AppComponent.ctorParameters = () => [
    { type: _providers_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_common_sidewindow_sidewindow_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/common/sidewindow/sidewindow.component */ "./src/app/common/sidewindow/sidewindow.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/register/register.component */ "./src/app/views/register/register.component.ts");
/* harmony import */ var _views_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/forgotpassword/forgotpassword.component */ "./src/app/views/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _views_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/changepassword/changepassword.component */ "./src/app/views/changepassword/changepassword.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _common_column_list_column_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./common/column-list/column-list.component */ "./src/app/common/column-list/column-list.component.ts");
/* harmony import */ var _app_views_contacts_hierarchy_hierarchy_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../app/views/contacts/hierarchy/hierarchy.component */ "./src/app/views/contacts/hierarchy/hierarchy.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _providers_fetchserverdata__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./providers/fetchserverdata */ "./src/app/providers/fetchserverdata.ts");
/* harmony import */ var _providers_utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./providers/utils */ "./src/app/providers/utils.ts");
/* harmony import */ var _app_common_header_header_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../app/common/header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var _app_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../app/common/footer/footer.component */ "./src/app/common/footer/footer.component.ts");
/* harmony import */ var _app_common_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../app/common/nav-menu/nav-menu.component */ "./src/app/common/nav-menu/nav-menu.component.ts");
/* harmony import */ var _src_app_hierarchy_modal_hierarchy_modal_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../src/app/hierarchy-modal/hierarchy-modal.component */ "./src/app/hierarchy-modal/hierarchy-modal.component.ts");
/* harmony import */ var _src_app_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../src/app/spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _dabeng_ng_orgchart__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @dabeng/ng-orgchart */ "./node_modules/@dabeng/ng-orgchart/fesm2015/dabeng-ng-orgchart.js");


// import { CommonModule } from '@angular/common';



// import {NgxSpinnersModule} from 'ngx-spinners';



//import { InterceptorsService } from './services/interceptors.service';
// import { DatePipe } from './common/customepipes/date.pipe';
// import { Ng2SearchPipeModule } from 'ng2-search-filter'
// import { NgxOrgChartModule } from 'ngx-org-chart';
//import { OrgchartModule } from '@dabeng/ng-orgchart';
// Firebase services + enviorment module




// import { OrgchartModule } from '@dabeng/ng-orgchart';










//import { HierarchyListComponent } from './app/views/contacts/hierarchy/hierarchy-list/hierarchy-list.component';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// import { WidgetComponent } from './app/views/dashboard/widget/widget.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { WidgetsComponent } from './common/widgets/widgets.component';










//import { DashboardComponent } from './views/dashboard/dashboard.component';
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _views_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
            _views_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
            _views_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_15__["ForgotpasswordComponent"],
            _views_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_16__["ChangepasswordComponent"],
            _common_column_list_column_list_component__WEBPACK_IMPORTED_MODULE_19__["ColumnListComponent"],
            _app_views_contacts_hierarchy_hierarchy_component__WEBPACK_IMPORTED_MODULE_20__["HierarchyComponent"],
            _app_common_header_header_component__WEBPACK_IMPORTED_MODULE_25__["HeaderComponent"],
            _app_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"],
            _app_common_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_27__["NavMenuComponent"],
            _src_app_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_29__["SpinnerComponent"],
            _src_app_hierarchy_modal_hierarchy_modal_component__WEBPACK_IMPORTED_MODULE_28__["HierarchyModalComponent"],
            _app_common_sidewindow_sidewindow_component__WEBPACK_IMPORTED_MODULE_8__["SidewindowComponent"]
            //DashboardComponent
            // HierarchyListComponent,
            // WidgetComponent,
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            // CommonModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"].forRoot({
                timeOut: 2000,
                positionClass: 'toast-bottom-right',
                // progressBar:true,
                // progressAnimation: 'increasing',
                preventDuplicates: true,
            }),
            // Ng2SearchPipeModule,
            // NgxOrgChartModule,
            _dabeng_ng_orgchart__WEBPACK_IMPORTED_MODULE_30__["OrgchartModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["ScrollingModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["ScrollDispatchModule"]
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_22__["DatePipe"],
            _src_app_hierarchy_modal_hierarchy_modal_component__WEBPACK_IMPORTED_MODULE_28__["HierarchyModalComponent"],
            _providers_fetchserverdata__WEBPACK_IMPORTED_MODULE_23__["FetchServerDataProvider"],
            _providers_utils__WEBPACK_IMPORTED_MODULE_24__["Utils"],
            _app_common_sidewindow_sidewindow_component__WEBPACK_IMPORTED_MODULE_8__["SidewindowComponent"],
        ],
        entryComponents: [_common_column_list_column_list_component__WEBPACK_IMPORTED_MODULE_19__["ColumnListComponent"], _app_views_contacts_hierarchy_hierarchy_component__WEBPACK_IMPORTED_MODULE_20__["HierarchyComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/common/column-list/column-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/common/column-list/column-list.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label {\n    /* display: block;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    margin: 0;\n    padding: 5px;\n    cursor: pointer;\n    box-shadow: 0px 0px 2px 2px #ccc;\n    margin-bottom: 5px; */\n    margin: 0;\n}\n\nform {\n    height: 100%;\n}\n\n.example-list {\n    width: 500px;\n    max-width: 100%;\n    display: block;\n    background: white;\n    border-radius: 4px;\n    height: 100%;\n}\n\n.example-box {\n    padding: 10px;\n    border-bottom: solid 1px #ccc;\n    color: rgba(0, 0, 0, 0.87);\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    box-sizing: border-box;\n    cursor: move;\n    background: white;\n    margin: 4px 1px;\n    box-shadow: 0px 0px 2px 1px #ccc;\n    width: 99%;\n    height: calc(100% / 11);\n}\n\n.cdk-drag-preview {\n    box-sizing: border-box;\n    border-radius: 4px;\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-animating {\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n    border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-custom-placeholder {\n    background: #ccc;\n    border: dotted 3px #999;\n    min-height: 60px;\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbHVtbi1saXN0L2NvbHVtbi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTs7Ozs7Ozs7O3lCQVNxQjtJQUNyQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIscUhBQXFIO0FBQ3pIOztBQUVBO0lBQ0ksc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLHNEQUFzRDtBQUMxRCIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb2x1bW4tbGlzdC9jb2x1bW4tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xuICAgIC8qIGRpc3BsYXk6IGJsb2NrO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMnB4ICNjY2M7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4OyAqL1xuICAgIG1hcmdpbjogMDtcbn1cblxuZm9ybSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZXhhbXBsZS1saXN0IHtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5leGFtcGxlLWJveCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjdXJzb3I6IG1vdmU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWFyZ2luOiA0cHggMXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDFweCAjY2NjO1xuICAgIHdpZHRoOiA5OSU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLyAxMSk7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZXhhbXBsZS1jdXN0b20tcGxhY2Vob2xkZXIge1xuICAgIGJhY2tncm91bmQ6ICNjY2M7XG4gICAgYm9yZGVyOiBkb3R0ZWQgM3B4ICM5OTk7XG4gICAgbWluLWhlaWdodDogNjBweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/common/column-list/column-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/common/column-list/column-list.component.ts ***!
  \*************************************************************/
/*! exports provided: ColumnListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnListComponent", function() { return ColumnListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_contacts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/contacts.service */ "./src/app/services/contacts.service.ts");






let ColumnListComponent = class ColumnListComponent {
    constructor(formBuilder, contactService) {
        this.formBuilder = formBuilder;
        this.contactService = contactService;
        this.ordersData = [];
        this.isDisabled = true;
        contactService.displayColumns.subscribe(val => this.model = val);
        this.form = this.formBuilder.group({
            orders: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([])
        });
        // async orders
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.getOrders()).subscribe(orders => {
            this.ordersData = orders;
            this.addCheckboxes();
        });
    }
    addCheckboxes() {
        this.ordersData.forEach((o, i) => {
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](o.display); // if first item set to true, else false
            this.form.controls.orders.push(control);
        });
    }
    getOrders() {
        return this.model;
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.ordersData, event.previousIndex, event.currentIndex);
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.form.controls.orders['controls'], event.previousIndex, event.currentIndex);
        this.contactService.updateColumns(this.model);
    }
    submit() {
        this.form.value.orders
            .forEach((v, i) => {
            this.model[i].display = v;
        });
        // console.log(this.form.value.orders);
        this.contactService.updateColumns(this.model);
    }
    changeColumn($event) {
        this.submit();
    }
};
ColumnListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_contacts_service__WEBPACK_IMPORTED_MODULE_5__["ContactsService"] }
];
ColumnListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-column-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./column-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/column-list/column-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./column-list.component.css */ "./src/app/common/column-list/column-list.component.css")).default]
    })
], ColumnListComponent);



/***/ }),

/***/ "./src/app/common/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/footer/footer.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n    position: fixed;\n    bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/common/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/common/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/common/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/header/header.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header {\n    display: flex;\n    /* border-bottom: 1px solid #f3f3f3; */\n    box-shadow: 0px 0px 12px 0px #ccc;\n    position: relative;\n    z-index: 1;\n}\n\n.navbar-wrapper {\n    /* width: 50px; */\n    width: 40px;\n    line-height: 60px;\n    text-align: center;\n    font-size: 20px;\n}\n\n.navbar-header {\n    flex: 1;\n    display: flex;\n}\n\n.navbar-header span {\n    flex: 1;\n    text-align: right;\n    line-height: 60px;\n    font-size: 20px;\n}\n\ni {\n    cursor: pointer;\n}\n\nbutton,\nbutton:hover,\nbutton:active {\n    outline: none;\n}\n\n/***** User profile ****/\n\n.user-icon {\n    position: relative;\n}\n\n.user-profile {\n    position: absolute;\n    top: 102%;\n    width: 200px;\n    overflow: hidden;\n    border: 1px solid #ccc;\n    right: 10px;\n}\n\n.list-group-item {\n    cursor: pointer;\n}\n\n/*-------------------------------*/\n\n/*       Hamburger-Cross         */\n\n/*-------------------------------*/\n\n.hamburger {\n    display: block;\n    width: 23px;\n    height: 23px;\n    margin-left: 10px;\n    background: transparent;\n    border: none;\n    position: relative;\n    margin-top: 16px;\n}\n\n.hamburger.is-closed:before {\n    content: '';\n    display: block;\n    width: 100px;\n    font-size: 14px;\n    color: #fff;\n    line-height: 32px;\n    text-align: center;\n    opacity: 0;\n    -webkit-transform: translate3d(0, 0, 0);\n    -webkit-transition: all .35s ease-in-out;\n}\n\n/* .hamburger.is-closed:hover:before {\n    opacity: 1;\n    display: block;\n    -webkit-transform: translate3d(-100px, 0, 0);\n    -webkit-transition: all .35s ease-in-out;\n} */\n\n.hamburger.is-closed .hamb-top,\n.hamburger.is-closed .hamb-middle,\n.hamburger.is-closed .hamb-bottom,\n.hamburger.is-open .hamb-top,\n.hamburger.is-open .hamb-middle,\n.hamburger.is-open .hamb-bottom {\n    position: absolute;\n    left: 0;\n    height: 2px;\n    width: 100%;\n}\n\n.hamburger.is-closed .hamb-top,\n.hamburger.is-closed .hamb-middle,\n.hamburger.is-closed .hamb-bottom {\n    background-color: #1a1a1a;\n}\n\n.hamburger.is-closed .hamb-top {\n    top: 5px;\n    -webkit-transition: all .35s ease-in-out;\n}\n\n.hamburger.is-closed .hamb-middle {\n    top: 50%;\n    margin-top: -2px;\n}\n\n.hamburger.is-closed .hamb-bottom {\n    bottom: 5px;\n    -webkit-transition: all .35s ease-in-out;\n}\n\n/* .hamburger.is-closed:hover .hamb-top {\n    top: 0;\n    -webkit-transition: all .35s ease-in-out;\n}\n\n.hamburger.is-closed:hover .hamb-bottom {\n    bottom: 0;\n    -webkit-transition: all .35s ease-in-out;\n} */\n\n.hamburger.is-open .hamb-top,\n.hamburger.is-open .hamb-middle,\n.hamburger.is-open .hamb-bottom {\n    background-color: #1a1a1a;\n}\n\n.hamburger.is-open .hamb-top,\n.hamburger.is-open .hamb-bottom {\n    top: 50%;\n    margin-top: -2px;\n}\n\n.hamburger.is-open .hamb-top {\n    -webkit-transform: rotate(45deg);\n    -webkit-transition: -webkit-transform .2s cubic-bezier(.73, 1, .28, .08);\n}\n\n.hamburger.is-open .hamb-middle {\n    display: none;\n}\n\n.hamburger.is-open .hamb-bottom {\n    -webkit-transform: rotate(-45deg);\n    -webkit-transition: -webkit-transform .2s cubic-bezier(.73, 1, .28, .08);\n}\n\n.hamburger.is-open:before {\n    content: '';\n    display: block;\n    width: 100px;\n    font-size: 14px;\n    color: #fff;\n    line-height: 32px;\n    text-align: center;\n    opacity: 0;\n    -webkit-transform: translate3d(0, 0, 0);\n    -webkit-transition: all .35s ease-in-out;\n}\n\n/* .hamburger.is-open:hover:before {\n    opacity: 1;\n    display: block;\n    -webkit-transform: translate3d(-100px, 0, 0);\n    -webkit-transition: all .35s ease-in-out;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7OztJQUdJLGFBQWE7QUFDakI7O0FBR0Esd0JBQXdCOztBQUN4QjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSxrQ0FBa0M7O0FBR2xDLGtDQUFrQzs7QUFHbEMsa0NBQWtDOztBQUVsQztJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHVDQUF1QztJQUN2Qyx3Q0FBd0M7QUFDNUM7O0FBR0E7Ozs7O0dBS0c7O0FBRUg7Ozs7OztJQU1JLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTs7O0lBR0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLFFBQVE7SUFDUixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsd0NBQXdDO0FBQzVDOztBQUdBOzs7Ozs7OztHQVFHOztBQUVIOzs7SUFHSSx5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksUUFBUTtJQUNSLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx3RUFBd0U7QUFDNUU7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLHdFQUF3RTtBQUM1RTs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsdUNBQXVDO0lBQ3ZDLHdDQUF3QztBQUM1Qzs7QUFHQTs7Ozs7R0FLRyIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmM2YzZjM7ICovXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDBweCAjY2NjO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4ubmF2YmFyLXdyYXBwZXIge1xuICAgIC8qIHdpZHRoOiA1MHB4OyAqL1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5uYXZiYXItaGVhZGVyIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5uYXZiYXItaGVhZGVyIHNwYW4ge1xuICAgIGZsZXg6IDE7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbixcbmJ1dHRvbjpob3ZlcixcbmJ1dHRvbjphY3RpdmUge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cblxuLyoqKioqIFVzZXIgcHJvZmlsZSAqKioqL1xuLnVzZXItaWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnVzZXItcHJvZmlsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAyJTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHJpZ2h0OiAxMHB4O1xufVxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cbi8qICAgICAgIEhhbWJ1cmdlci1Dcm9zcyAgICAgICAgICovXG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmhhbWJ1cmdlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDIzcHg7XG4gICAgaGVpZ2h0OiAyM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmhhbWJ1cmdlci5pcy1jbG9zZWQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMzVzIGVhc2UtaW4tb3V0O1xufVxuXG5cbi8qIC5oYW1idXJnZXIuaXMtY2xvc2VkOmhvdmVyOmJlZm9yZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMHB4LCAwLCAwKTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMzVzIGVhc2UtaW4tb3V0O1xufSAqL1xuXG4uaGFtYnVyZ2VyLmlzLWNsb3NlZCAuaGFtYi10b3AsXG4uaGFtYnVyZ2VyLmlzLWNsb3NlZCAuaGFtYi1taWRkbGUsXG4uaGFtYnVyZ2VyLmlzLWNsb3NlZCAuaGFtYi1ib3R0b20sXG4uaGFtYnVyZ2VyLmlzLW9wZW4gLmhhbWItdG9wLFxuLmhhbWJ1cmdlci5pcy1vcGVuIC5oYW1iLW1pZGRsZSxcbi5oYW1idXJnZXIuaXMtb3BlbiAuaGFtYi1ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaGFtYnVyZ2VyLmlzLWNsb3NlZCAuaGFtYi10b3AsXG4uaGFtYnVyZ2VyLmlzLWNsb3NlZCAuaGFtYi1taWRkbGUsXG4uaGFtYnVyZ2VyLmlzLWNsb3NlZCAuaGFtYi1ib3R0b20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XG59XG5cbi5oYW1idXJnZXIuaXMtY2xvc2VkIC5oYW1iLXRvcCB7XG4gICAgdG9wOiA1cHg7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjM1cyBlYXNlLWluLW91dDtcbn1cblxuLmhhbWJ1cmdlci5pcy1jbG9zZWQgLmhhbWItbWlkZGxlIHtcbiAgICB0b3A6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuXG4uaGFtYnVyZ2VyLmlzLWNsb3NlZCAuaGFtYi1ib3R0b20ge1xuICAgIGJvdHRvbTogNXB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zNXMgZWFzZS1pbi1vdXQ7XG59XG5cblxuLyogLmhhbWJ1cmdlci5pcy1jbG9zZWQ6aG92ZXIgLmhhbWItdG9wIHtcbiAgICB0b3A6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjM1cyBlYXNlLWluLW91dDtcbn1cblxuLmhhbWJ1cmdlci5pcy1jbG9zZWQ6aG92ZXIgLmhhbWItYm90dG9tIHtcbiAgICBib3R0b206IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjM1cyBlYXNlLWluLW91dDtcbn0gKi9cblxuLmhhbWJ1cmdlci5pcy1vcGVuIC5oYW1iLXRvcCxcbi5oYW1idXJnZXIuaXMtb3BlbiAuaGFtYi1taWRkbGUsXG4uaGFtYnVyZ2VyLmlzLW9wZW4gLmhhbWItYm90dG9tIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xufVxuXG4uaGFtYnVyZ2VyLmlzLW9wZW4gLmhhbWItdG9wLFxuLmhhbWJ1cmdlci5pcy1vcGVuIC5oYW1iLWJvdHRvbSB7XG4gICAgdG9wOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTJweDtcbn1cblxuLmhhbWJ1cmdlci5pcy1vcGVuIC5oYW1iLXRvcCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMnMgY3ViaWMtYmV6aWVyKC43MywgMSwgLjI4LCAuMDgpO1xufVxuXG4uaGFtYnVyZ2VyLmlzLW9wZW4gLmhhbWItbWlkZGxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGFtYnVyZ2VyLmlzLW9wZW4gLmhhbWItYm90dG9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMnMgY3ViaWMtYmV6aWVyKC43MywgMSwgLjI4LCAuMDgpO1xufVxuXG4uaGFtYnVyZ2VyLmlzLW9wZW46YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMzVzIGVhc2UtaW4tb3V0O1xufVxuXG5cbi8qIC5oYW1idXJnZXIuaXMtb3Blbjpob3ZlcjpiZWZvcmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDBweCwgMCwgMCk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjM1cyBlYXNlLWluLW91dDtcbn0gKi8iXX0= */");

/***/ }),

/***/ "./src/app/common/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");




let HeaderComponent = class HeaderComponent {
    constructor(authService) {
        this.authService = authService;
        this.menuExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isExpand = false;
        this.showlogout = false;
        this.Username = "";
        //authService.afAuth.user.subscribe(user=> this.user = user );
        this.Username = localStorage.getItem('userName');
    }
    expandMenu() {
        this.isExpand = !this.isExpand;
        this.menuExpand.emit(this.isExpand);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('menuExpand')
], HeaderComponent.prototype, "menuExpand", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/header/header.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('inOutAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: 0, opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ minHeight: 80, opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: 0, opacity: 0 }))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/common/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/common/nav-menu/nav-menu.component.css":
/*!********************************************************!*\
  !*** ./src/app/common/nav-menu/nav-menu.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidebar {\n    height: calc(100vh - 80px);\n    width: 180px;\n    z-index: 1030;\n    background: #fff;\n    /* transition: width 0.6s cubic-bezier(0.945, 0.020, 0.270, 0.665); */\n    transition: width 0.2s linear;\n    transform-origin: bottom left;\n    overflow: hidden;\n    box-shadow: 2px 0px 10px -2px #ccc;\n}\n\n.sidebar-container {\n    position: relative;\n}\n\n.navbar {\n    display: block;\n    position: relative;\n    padding: 0 0.5rem;\n}\n\n.navbar-header {\n    position: relative;\n}\n\n.navbar-header:after {\n    /* content: '';\n    position: absolute;\n    bottom: 0;\n    right: 15px;\n    height: 1px;\n    width: calc(100% - 30px);\n    background-color: rgb(0, 178, 178); */\n}\n\n.navbar-light .navbar-nav .nav-link {\n    position: relative;\n}\n\n.navbar-light .navbar-nav .nav-link span {\n    position: absolute;\n    top: 8px;\n    left: 30px;\n}\n\n.navbar-light .navbar-nav .nav-link i {\n    display: inline-block;\n    width: 25px;\n}\n\n.navbar-wrapper {\n    position: absolute;\n    right: -15px;\n    top: -3px;\n    /* display: none; */\n}\n\n.navbar-wrapper i {\n    font-size: 1.8rem;\n    transition: all 0.5s ease-in;\n    color: #00c6c6;\n}\n\n/* .dropdown-toggle::after {\n    margin-left: 0;\n    position: absolute;\n    right: 10px;\n    top: 16px;\n    font-size: 22px;\n    color: #00c2c2;\n    -ms-transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    -webkit-transition: transform 0.5s;\n    -moz-transition: transform 0.5s;\n    -ms-transition: transform 0.5s;\n    -o-transition: transform 0.5s;\n    transition: transform 0.5s;\n}\n\n.active .dropdown-toggle::after {\n    -ms-transform: rotate(180deg);\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n} */\n\n.nav-link:hover,\n.active .nav-link {\n    background: transparent;\n    color: #00c6c6 !important;\n    /* color: rgb(0, 0, 0) !important; */\n}\n\n.nav-item.dropdown:hover,\n.nav-item.dropdown.active {\n    /* background: #ebecf1; */\n    border-left: 1px solid #00c2c2;\n}\n\n.dropdown-menu {\n    display: block;\n    transition: max-height 1s;\n    max-height: 0;\n    padding: 0;\n    overflow: hidden;\n    border: none;\n}\n\n.dropdown-menu.show {\n    border: none;\n    max-height: 300px;\n}\n\n@media (min-width: 991px) {\n    /* .sidebar {\n        display: block;\n        box-shadow: 0px 2px 22px 0 rgba(0, 0, 0, 0.2), 0px 2px 10px 0 rgba(0, 0, 0, 0.35);\n    } */\n}\n\n.nav-open.sidebar {\n    width: 45px;\n    transform: translate3d(0px, 0, 0);\n}\n\n.nav-open.sidebar span {\n    display: inline-block;\n    position: absolute;\n    top: 8px;\n    left: 30px;\n}\n\n.dropdown-menu {\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL25hdi1tZW51L25hdi1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIscUVBQXFFO0lBQ3JFLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7Ozs7Ozt5Q0FNcUM7QUFDekM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLGNBQWM7QUFDbEI7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRzs7QUFFSDs7SUFFSSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLG9DQUFvQztBQUN4Qzs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksY0FBYztJQUtkLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJOzs7T0FHRztBQUNQOztBQUVBO0lBQ0ksV0FBVztJQUVYLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgei1pbmRleDogMTAzMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIC8qIHRyYW5zaXRpb246IHdpZHRoIDAuNnMgY3ViaWMtYmV6aWVyKDAuOTQ1LCAwLjAyMCwgMC4yNzAsIDAuNjY1KTsgKi9cbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzIGxpbmVhcjtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IDJweCAwcHggMTBweCAtMnB4ICNjY2M7XG59XG5cbi5zaWRlYmFyLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubmF2YmFyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMCAwLjVyZW07XG59XG5cbi5uYXZiYXItaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5uYXZiYXItaGVhZGVyOmFmdGVyIHtcbiAgICAvKiBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTc4LCAxNzgpOyAqL1xufVxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4cHg7XG4gICAgbGVmdDogMzBweDtcbn1cblxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsgaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyNXB4O1xufVxuXG4ubmF2YmFyLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTE1cHg7XG4gICAgdG9wOiAtM3B4O1xuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXG59XG5cbi5uYXZiYXItd3JhcHBlciBpIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIGNvbG9yOiAjMDBjNmM2O1xufVxuXG5cbi8qIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjogIzAwYzJjMjtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG4gICAgLW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICAgIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xufVxuXG4uYWN0aXZlIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn0gKi9cblxuLm5hdi1saW5rOmhvdmVyLFxuLmFjdGl2ZSAubmF2LWxpbmsge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjMDBjNmM2ICFpbXBvcnRhbnQ7XG4gICAgLyogY29sb3I6IHJnYigwLCAwLCAwKSAhaW1wb3J0YW50OyAqL1xufVxuXG4ubmF2LWl0ZW0uZHJvcGRvd246aG92ZXIsXG4ubmF2LWl0ZW0uZHJvcGRvd24uYWN0aXZlIHtcbiAgICAvKiBiYWNrZ3JvdW5kOiAjZWJlY2YxOyAqL1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwYzJjMjtcbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcbiAgICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XG4gICAgLW1zLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XG4gICAgLW8tdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xuICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmRyb3Bkb3duLW1lbnUuc2hvdyB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkxcHgpIHtcbiAgICAvKiAuc2lkZWJhciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDIycHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gICAgfSAqL1xufVxuXG4ubmF2LW9wZW4uc2lkZWJhciB7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xufVxuXG4ubmF2LW9wZW4uc2lkZWJhciBzcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOHB4O1xuICAgIGxlZnQ6IDMwcHg7XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/common/nav-menu/nav-menu.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/nav-menu/nav-menu.component.ts ***!
  \*******************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.submenuShowHide = {
            contacts: false,
            dashboard: false,
            sales: false,
            reports: false,
            commissions: false,
            deals: false
        };
    }
    set curPath(value) {
        this.setActiveMenu(value, true);
    }
    ;
    ngOnInit() {
    }
    showSubmenu($event) {
        let curState = this.submenuShowHide[$event] ? false : true;
        this.setActiveMenu($event, curState);
    }
    clickOutside() {
        // this.hideAllSubMenu();
    }
    hideAllSubMenu() {
        Object.keys(this.submenuShowHide).forEach((item) => this.submenuShowHide[item] = false);
    }
    setActiveMenu(path, curState) {
        this.hideAllSubMenu();
        this.submenuShowHide[path] = curState;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('isMenuExpand')
], NavMenuComponent.prototype, "isMenuExpand", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('curPath')
], NavMenuComponent.prototype, "curPath", null);
NavMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/nav-menu/nav-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/common/nav-menu/nav-menu.component.css")).default]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/app/common/sidewindow/dynamic-component.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/common/sidewindow/dynamic-component.directive.ts ***!
  \******************************************************************/
/*! exports provided: DynamicComponentDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicComponentDirective", function() { return DynamicComponentDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DynamicComponentDirective = class DynamicComponentDirective {
    constructor(vcr) {
        this.vcr = vcr;
    }
};
DynamicComponentDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
DynamicComponentDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[dynamic-host]'
    })
], DynamicComponentDirective);



/***/ }),

/***/ "./src/app/common/sidewindow/sidewindow.component.css":
/*!************************************************************!*\
  !*** ./src/app/common/sidewindow/sidewindow.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".side-window {\n    position: fixed;\n    right: 0;\n    bottom: 04%;\n    min-width: 230px;\n    /* min-height: 350px; */\n    overflow: hidden;\n    margin: auto;\n    background: #fff;\n    border: 1px solid #ccc;\n    font-size: 1rem;\n    z-index: 999999;\n    max-width: 80%;\n    left: 50px;\n    top: 0;\n    margin: auto;\n    /* text-align: center; */\n    height: 500px;\n}\n\n.container-fluid>p {\n    background: #037777;\n    color: #fff;\n    /* cursor: move; */\n    font-weight: bold;\n    padding: 4px 0;\n    text-indent: 13px;\n    position: absolute;\n    width: 100%;\n    top: 0;\n    font-size: 1rem;\n}\n\n.container-fluid {\n    position: relative;\n    padding: 32px 0 0 0;\n    height: 100%;\n}\n\n.dragElement {\n    display: block;\n    position: absolute;\n    width: calc(100% - 70px);\n    top: 0;\n    height: 30px;\n    opacity: 0;\n}\n\n.closebtn {\n    position: absolute;\n    right: 10px;\n    top: 5px;\n    color: #fff;\n    font-size: 1.1rem;\n    cursor: pointer;\n}\n\n.fa-window-minimize {\n    vertical-align: top;\n}\n\n.closebtn .fa {\n    margin: 0 5px;\n}\n\n.btn {\n    padding: 0 0.6em;\n}\n\nhr {\n    margin: 10px;\n}\n\ntextarea {\n    max-height: 200px;\n    min-height: 80px;\n}\n\n.p-3 {\n    height: 100%;\n    overflow: hidden;\n}\n\n.hierarchycomponent .p-3 {\n    padding: 0 !important;\n}\n\n.p-3>div {\n    height: 100%;\n}\n\n.m-0 {\n    cursor: move;\n}\n\n.some-parent-class {\n    resize: both;\n    overflow: auto;\n    padding-bottom: 20px;\n    width: 600px;\n    border: 2px solid #037777;\n}\n\n.hierarchycomponent {\n    min-width: 35%!important;\n    max-height: 90%!important;\n    max-width: 90%!important;\n    min-height: 40%;\n    width: 75%;\n    font-size: 0.7rem !important;\n}\n\n.min-window {\n    transform: translateX(-20px);\n    width: 307px;\n    height: 36px;\n    min-height: 36px;\n    min-width: 40px !important;\n    resize: none;\n    overflow: hidden;\n    right: 0;\n    bottom: 0;\n    margin: unset;\n    left: unset;\n    top: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NpZGV3aW5kb3cvc2lkZXdpbmRvdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGVBQWU7SUFDZixjQUFjO0lBQ2QsVUFBVTtJQUNWLE1BQU07SUFDTixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE1BQU07SUFDTixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsTUFBTTtJQUNOLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLFVBQVU7SUFDViw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxhQUFhO0lBQ2IsV0FBVztJQUNYLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zaWRld2luZG93L3NpZGV3aW5kb3cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlLXdpbmRvdyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDQlO1xuICAgIG1pbi13aWR0aDogMjMwcHg7XG4gICAgLyogbWluLWhlaWdodDogMzUwcHg7ICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgbGVmdDogNTBweDtcbiAgICB0b3A6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4uY29udGFpbmVyLWZsdWlkPnAge1xuICAgIGJhY2tncm91bmQ6ICMwMzc3Nzc7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgLyogY3Vyc29yOiBtb3ZlOyAqL1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDRweCAwO1xuICAgIHRleHQtaW5kZW50OiAxM3B4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMzJweCAwIDAgMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5kcmFnRWxlbWVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5jbG9zZWJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhLXdpbmRvdy1taW5pbWl6ZSB7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmNsb3NlYnRuIC5mYSB7XG4gICAgbWFyZ2luOiAwIDVweDtcbn1cblxuLmJ0biB7XG4gICAgcGFkZGluZzogMCAwLjZlbTtcbn1cblxuaHIge1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxudGV4dGFyZWEge1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG59XG5cbi5wLTMge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaGllcmFyY2h5Y29tcG9uZW50IC5wLTMge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLnAtMz5kaXYge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm0tMCB7XG4gICAgY3Vyc29yOiBtb3ZlO1xufVxuXG4uc29tZS1wYXJlbnQtY2xhc3Mge1xuICAgIHJlc2l6ZTogYm90aDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAzNzc3Nztcbn1cblxuLmhpZXJhcmNoeWNvbXBvbmVudCB7XG4gICAgbWluLXdpZHRoOiAzNSUhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDkwJSFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiA5MCUhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDQwJTtcbiAgICB3aWR0aDogNzUlO1xuICAgIGZvbnQtc2l6ZTogMC43cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5taW4td2luZG93IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICAgIHdpZHRoOiAzMDdweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgbWluLWhlaWdodDogMzZweDtcbiAgICBtaW4td2lkdGg6IDQwcHggIWltcG9ydGFudDtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiB1bnNldDtcbiAgICBsZWZ0OiB1bnNldDtcbiAgICB0b3A6IHVuc2V0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/common/sidewindow/sidewindow.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/common/sidewindow/sidewindow.component.ts ***!
  \***********************************************************/
/*! exports provided: SidewindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidewindowComponent", function() { return SidewindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/event-emitter.service */ "./src/app/services/event-emitter.service.ts");
/* harmony import */ var _dynamic_component_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamic-component.directive */ "./src/app/common/sidewindow/dynamic-component.directive.ts");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/contacts.service */ "./src/app/services/contacts.service.ts");
/* harmony import */ var src_app_providers_fetchserverdata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/fetchserverdata */ "./src/app/providers/fetchserverdata.ts");
/* harmony import */ var src_app_providers_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/utils */ "./src/app/providers/utils.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





//import { ColumnListComponent } from '../column-list/column-list.component';
//import { HierarchyComponent } from 'src/app/views/contacts/hierarchy/hierarchy.component';




//import { jobs } from 'node_modules.backup/@angular-devkit/core/src/experimental';
let SidewindowComponent = class SidewindowComponent {
    constructor(toastr, utils, serviceCallProvider, emService, cf, ctService) {
        this.toastr = toastr;
        this.utils = utils;
        this.serviceCallProvider = serviceCallProvider;
        this.emService = emService;
        this.cf = cf;
        this.ctService = ctService;
        this.title = "";
        this.isShowComp = false;
        this.animate = false;
        this.className = "";
        this.windowMinimize = false;
        this.tempStyle = "";
        this.data = '';
        this.id = '';
        emService.sideWindow.subscribe(val => {
            this.isShowComp = val.isTrue;
            this.className = val.component && val.component.name.toLowerCase();
            this.dynamicComponent = val.component;
            this.title = val.title;
        });
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.loadComponent();
        });
    }
    getAllDataHierarchy(id, name) {
        this.utils.name = name;
        this.utils.id = id;
        this.serviceCallProvider.callService(this.utils.GETHIERARCHY_URL + '/' + id, null, null).then(result => {
            let status = result[this.utils.SERVICE_CALL_STATUS];
            let output_data = result[this.utils.SERVICE_CALL_DATA];
            if (status === this.utils.STATUS_SUCCESS) {
                this.utils.ds = {};
                this.utils.ds = output_data;
            }
            else {
                this.toastr.error(result['msg']);
            }
        });
    }
    collapseHierachy() {
        this.cilick = true;
        let childArr = [];
        let buchildArr = [];
        for (let j = 0; j < this.utils.ds.children.length; j++) {
            childArr = this.utils.ds.children[j];
            let obj = {
                "name": childArr.name,
                "id": childArr.id,
                "parentContactId": childArr.parentContactId,
                "title": childArr.title,
                "callCount": childArr.callCount,
                "emailCount": childArr.emailCount,
                "meetingCount": childArr.meetingCount,
                "textCount": childArr.textCount,
            };
            buchildArr.push(obj);
        }
        this.data = {
            "name": this.utils.ds.name,
            "id": this.utils.ds.id,
            "title": this.utils.ds.title,
            "callCount": this.utils.ds.callCount,
            "emailCount": this.utils.ds.emailCount,
            "meetingCount": this.utils.ds.meetingCount,
            "textCount": this.utils.ds.textCount,
            "children": buchildArr
        };
        this.utils.ds = this.data;
    }
    getAllDataHierarchyData() {
        this.cilick = false;
        this.serviceCallProvider.callService(this.utils.GETHIERARCHY_URL + '/' + this.utils.id, null, null).then(result => {
            let status = result[this.utils.SERVICE_CALL_STATUS];
            let output_data = result[this.utils.SERVICE_CALL_DATA];
            if (status === this.utils.STATUS_SUCCESS) {
                this.utils.ds = {};
                this.utils.ds = output_data;
            }
            else {
                this.toastr.error(result['msg']);
            }
        });
    }
    selectNode(nodeData) {
        this.emService._scrollToTop.next(nodeData.id);
    }
    close() {
        this.animate = false;
        this.emService.showHideWindow(false, "", "");
        this.emService.setIsHierarchyOpen(false);
    }
    animEnd($event) {
        // alert();
    }
    loadComponent() {
        let comp = this.cf.resolveComponentFactory(this.dynamicComponent);
        if (this.dynamicHost) {
            this.dynamicHost.vcr.clear();
            this.dynamicHost.vcr.createComponent(comp);
            this.animate = true;
        }
    }
    windowResize($event) {
        this.windowMinimize = $event;
        if ($event) {
            this.tempStyle = this.window.nativeElement.style.cssText;
            this.window.nativeElement.style = "transform: translateX(-20px);";
        }
        else {
            this.window.nativeElement.style = this.tempStyle;
            this.serviceCallProvider.callService(this.utils.GETHIERARCHY_URL + '/' + this.utils.id, null, null).then(result => {
                let status = result[this.utils.SERVICE_CALL_STATUS];
                let output_data = result[this.utils.SERVICE_CALL_DATA];
                if (status === this.utils.STATUS_SUCCESS) {
                    this.utils.ds = {};
                    this.utils.ds = output_data;
                }
                else {
                    this.toastr.error(result['msg']);
                }
            });
        }
    }
};
SidewindowComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
    { type: src_app_providers_utils__WEBPACK_IMPORTED_MODULE_7__["Utils"] },
    { type: src_app_providers_fetchserverdata__WEBPACK_IMPORTED_MODULE_6__["FetchServerDataProvider"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _services_contacts_service__WEBPACK_IMPORTED_MODULE_5__["ContactsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_dynamic_component_directive__WEBPACK_IMPORTED_MODULE_4__["DynamicComponentDirective"], { static: true })
], SidewindowComponent.prototype, "dynamicHost", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("window", { static: true })
], SidewindowComponent.prototype, "window", void 0);
SidewindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidewindow',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidewindow.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/sidewindow/sidewindow.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideMenu', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateX(0px)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateX(-20px)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('false => true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('true => false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out')),
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidewindow.component.css */ "./src/app/common/sidewindow/sidewindow.component.css")).default]
    })
], SidewindowComponent);



/***/ }),

/***/ "./src/app/hierarchy-modal/hierarchy-modal.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/hierarchy-modal/hierarchy-modal.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".orgchart.myChart .oc-node .position {\n  box-sizing: border-box;\n  color: #000;\n  width: 134px;\n  height: 39px;\n  padding: 2px;\n  border-top: 1px solid #566573 !important;\n  border-right: 1px solid #566573 !important;\n  border-left: 1px solid #566573 !important;\n  font-size: 0.7rem !important;\n}\n\n.orgchart.myChart .oc-node .fullname {\n  box-sizing: border-box;\n  color: #000 !important;\n  background-color: #fff;\n  width: 134px;\n  height: 65px;\n  padding: 2px;\n  border: 1px solid #566573 !important;\n  font-size: 0.7rem !important;\n}\n\n.orgchart.myChart > orgchart-node > .oc-node::after {\n  background-color: rgba(33, 90, 136, 0.8) !important;\n}\n\n.orgchart.myChart .oc-group:not(:last-child)::before {\n  border-color: rgba(33, 90, 136, 0.8) !important;\n}\n\n.orgchart.myChart .oc-group > orgchart-node::before {\n  border-color: rgba(33, 90, 136, 0.8) !important;\n}\n\n.orgchart.myChart orgchart-node:not(:last-child)::after {\n  border-color: rgba(33, 90, 136, 0.8) !important;\n}\n\n#oc-1 .fullname {\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoZHVnYXIvRG9jdW1lbnRzL0RlYWxib29rL2RlYWxib29rdWkvc3JjL2FwcC9oaWVyYXJjaHktbW9kYWwvaGllcmFyY2h5LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oaWVyYXJjaHktbW9kYWwvaGllcmFyY2h5LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEQTtFQUNFLHNCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0YsMENBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0FDakRBOztBRG9EQTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7QUNqREY7O0FEb0RFO0VBQ0UsbURBQUE7QUNqREo7O0FEb0RFO0VBQ0UsK0NBQUE7QUNqREo7O0FEb0RFO0VBQ0UsK0NBQUE7QUNqREo7O0FEb0RFO0VBQ0UsK0NBQUE7QUNqREo7O0FEb0RFO0VBQ0UsV0FBQTtBQ2pESiIsImZpbGUiOiJzcmMvYXBwL2hpZXJhcmNoeS1tb2RhbC9oaWVyYXJjaHktbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAubWFpbkRpdiB7XG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gfVxuXG4vLyAubWFpblN1YkRpdiB7XG4vLyAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgIHRleHQtYWxpZ246IC1tb3otY2VudGVyO1xuLy8gICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbi8vIH1cblxuLy8gLmNvbnRlbnREaXYge1xuLy8gICAgIHdpZHRoOiAxMmVtO1xuLy8gICAgIG1hcmdpbjogMC41ZW07XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgIzNmNzRhMztcbi8vIH1cblxuLy8gLmNvbnRlbnQtdWwge1xuLy8gICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4vLyAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4vLyAgICAgbWFyZ2luOiAwLjVlbTtcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4vLyB9XG5cblxuLy8gLnN1YmNvbnRlbnQtdWwge1xuLy8gICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4vLyAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4vLyAgICAgcGFkZGluZy1sZWZ0OiAwO1xuLy8gfVxuXG5cbi8vIC5tb2RhbC1iYWNrZHJvcFxuLy8ge1xuLy8gICAgIG9wYWNpdHk6MC41ICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi8vIC5jYXJkLWhlYWRlciB7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI4YzkxO1xuLy8gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzhjZWQzO1xuLy8gICAgIGNvbG9yOiAjZmZmO1xuLy8gfVxuXG5cbi8vIC5vcmdjaGFydC5teUNoYXJ0IHtcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMzMsIDkwLCAxMzYsIDAuMTUpIDEwJSwgcmdiYSgwLCAwLCAwLCAwKSAxMCUpLCBsaW5lYXItZ3JhZGllbnQocmdiYSgzMywgOTAsIDEzNiwgMC4xNSkgMTAlLCByZ2JhKDAsIDAsIDAsIDApIDEwJSkhaW1wb3J0YW50O1xuLy8gICB9XG4gIFxuLm9yZ2NoYXJ0Lm15Q2hhcnQgLm9jLW5vZGUgLnBvc2l0aW9uIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2FiYjJiOSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwMDtcbiAgd2lkdGg6IDEzNHB4O1xuICBoZWlnaHQ6IDM5cHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM1NjY1NzMgIWltcG9ydGFudDtcbmJvcmRlci1yaWdodDogMXB4IHNvbGlkICM1NjY1NzMgIWltcG9ydGFudDtcbmJvcmRlci1sZWZ0OiAxcHggc29saWQgIzU2NjU3MyAhaW1wb3J0YW50O1xuZm9udC1zaXplOiAwLjdyZW0gIWltcG9ydGFudDtcbn1cbiAgXG4ub3JnY2hhcnQubXlDaGFydCAub2Mtbm9kZSAuZnVsbG5hbWUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTM0cHg7XG4gIGhlaWdodDogNjVweDtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTY2NTczICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC43cmVtICFpbXBvcnRhbnQ7XG59XG4gIFxuICAub3JnY2hhcnQubXlDaGFydCA+IG9yZ2NoYXJ0LW5vZGUgPiAub2Mtbm9kZTo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzMsIDkwLCAxMzYsIDAuOCkgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLm9yZ2NoYXJ0Lm15Q2hhcnQgLm9jLWdyb3VwOm5vdCg6bGFzdC1jaGlsZCk6OmJlZm9yZSB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDMzLCA5MCwgMTM2LCAwLjgpIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLm9yZ2NoYXJ0Lm15Q2hhcnQgLm9jLWdyb3VwID4gb3JnY2hhcnQtbm9kZTo6YmVmb3JlIHtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMzMsIDkwLCAxMzYsIDAuOCkhaW1wb3J0YW50O1xuICB9XG4gIFxuICAub3JnY2hhcnQubXlDaGFydCBvcmdjaGFydC1ub2RlOm5vdCg6bGFzdC1jaGlsZCk6OmFmdGVyIHtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMzMsIDkwLCAxMzYsIDAuOCkhaW1wb3J0YW50O1xuICB9XG4gIFxuICAjb2MtMSAuZnVsbG5hbWUge1xuICAgIGNvbG9yOiBibHVlO1xuICB9IiwiLm9yZ2NoYXJ0Lm15Q2hhcnQgLm9jLW5vZGUgLnBvc2l0aW9uIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICMwMDA7XG4gIHdpZHRoOiAxMzRweDtcbiAgaGVpZ2h0OiAzOXB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNTY2NTczICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM1NjY1NzMgIWltcG9ydGFudDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNTY2NTczICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC43cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5vcmdjaGFydC5teUNoYXJ0IC5vYy1ub2RlIC5mdWxsbmFtZSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMzRweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NjY1NzMgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjdyZW0gIWltcG9ydGFudDtcbn1cblxuLm9yZ2NoYXJ0Lm15Q2hhcnQgPiBvcmdjaGFydC1ub2RlID4gLm9jLW5vZGU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgOTAsIDEzNiwgMC44KSAhaW1wb3J0YW50O1xufVxuXG4ub3JnY2hhcnQubXlDaGFydCAub2MtZ3JvdXA6bm90KDpsYXN0LWNoaWxkKTo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDMzLCA5MCwgMTM2LCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5vcmdjaGFydC5teUNoYXJ0IC5vYy1ncm91cCA+IG9yZ2NoYXJ0LW5vZGU6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgzMywgOTAsIDEzNiwgMC44KSAhaW1wb3J0YW50O1xufVxuXG4ub3JnY2hhcnQubXlDaGFydCBvcmdjaGFydC1ub2RlOm5vdCg6bGFzdC1jaGlsZCk6OmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDMzLCA5MCwgMTM2LCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbiNvYy0xIC5mdWxsbmFtZSB7XG4gIGNvbG9yOiBibHVlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/hierarchy-modal/hierarchy-modal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/hierarchy-modal/hierarchy-modal.component.ts ***!
  \**************************************************************/
/*! exports provided: HierarchyModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HierarchyModalComponent", function() { return HierarchyModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_providers_fetchserverdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/fetchserverdata */ "./src/app/providers/fetchserverdata.ts");
/* harmony import */ var _app_providers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/providers/utils */ "./src/app/providers/utils.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/contacts.service */ "./src/app/services/contacts.service.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/event-emitter.service */ "./src/app/services/event-emitter.service.ts");







let HierarchyModalComponent = class HierarchyModalComponent {
    //ds{
    // id: '1',
    // name: 'Lao Lao',
    // title: 'general manager',
    // children: [
    //   { id: '2', name: 'Bo Miao', title: 'department manager' },
    //   {
    //     id: '3',
    //     name: 'Su Miao',
    //     title: 'department manager',
    //     children: [
    //       { id: '4', name: 'Tie Hua', title: 'senior engineer' },
    //       {
    //         id: '5',
    //         name: 'Hei Hei',
    //         title: 'senior engineer',
    //         children: [
    //           { id: '6', name: 'Dan Zai', title: 'engineer' },
    //           { id: '7', name: 'Dan Dan', title: 'engineer' },
    //           { id: '8', name: 'Xiang Xiang', title: 'engineer' },
    //           { id: '9', name: 'Ke Xin', title: 'engineer' },
    //           { id: '10', name: 'Xiao Dan', title: 'engineer' },
    //           { id: '11', name: 'Dan Dan Zai', title: 'engineer' }
    //         ]
    //       },
    //       { id: '12', name: 'Pang Pang', title: 'senior engineer' },
    //       { id: '13', name: 'Er Pang', title: 'senior engineer' },
    //       { id: '14', name: 'San Pang', title: 'senior engineer' },
    //       { id: '15', name: 'Si Pang', title: 'senior engineer' }
    //     ]
    //   },
    //   { id: '16', name: 'Hong Miao', title: 'department manager' },
    //   { id: '17', name: 'Chun Miao', title: 'department manager' },
    //   { id: '18', name: 'Yu Li', title: 'department manager' },
    //   { id: '19', name: 'Yu Jie', title: 'department manager' },
    //   { id: '20', name: 'Yu Wei', title: 'department manager' },
    //   { id: '21', name: 'Yu Tie', title: 'department manager' }
    // ]
    //};
    constructor(cs, emService, toastr, serviceCallProvider, utils) {
        this.cs = cs;
        this.emService = emService;
        this.toastr = toastr;
        this.serviceCallProvider = serviceCallProvider;
        this.utils = utils;
        this.hierarchyData = [];
        this.contactName = '';
        this.contactId = [];
        this.contactData = '';
        this.ds = {};
    }
    ngOnInit() {
    }
    selectNode(nodeData) {
        //alert(`Hi All. I'm ${nodeData.contactName}. I'm a ${nodeData.contactName}.`);
        // this.emService.setOpenRow(nodeData.id);
        this.emService._scrollToTop.next(nodeData.id);
    }
    showChildren(data, event) {
        // console.log("data "+data);
        // console.log("event "+event);
    }
    getAllDataHierarchy(id, name) {
        console.log("getAllDataHierarchy function ");
        this.utils.name = name;
        this.serviceCallProvider.callService(this.utils.GETHIERARCHY_URL + '/' + id, null, null).then(result => {
            let status = result[this.utils.SERVICE_CALL_STATUS];
            let output_data = result[this.utils.SERVICE_CALL_DATA];
            if (status === this.utils.STATUS_SUCCESS) {
                // console.log("getAllDataHierarchy "+JSON.stringify(output_data));
                this.utils.ds = {};
                this.utils.ds = output_data;
                //console.log("ds "+JSON.stringify(this.utils.ds));
                // this.contactData = output_data
                //  this.utils.contactName = output_data.contact
                //  console.log("contact "+this.utils.contactName);
                //  this.utils.contactId = output_data.contactId
            }
            else {
                //this.alertService.error(result['message']); 
                this.toastr.error(result['msg']);
            }
        });
    }
};
HierarchyModalComponent.ctorParameters = () => [
    { type: _services_contacts_service__WEBPACK_IMPORTED_MODULE_5__["ContactsService"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_6__["EventEmitterService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: src_app_providers_fetchserverdata__WEBPACK_IMPORTED_MODULE_2__["FetchServerDataProvider"] },
    { type: _app_providers_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"] }
];
HierarchyModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hierarchy-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hierarchy-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hierarchy-modal/hierarchy-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hierarchy-modal.component.scss */ "./src/app/hierarchy-modal/hierarchy-modal.component.scss")).default]
    })
], HierarchyModalComponent);



/***/ }),

/***/ "./src/app/model/contacts.model.ts":
/*!*****************************************!*\
  !*** ./src/app/model/contacts.model.ts ***!
  \*****************************************/
/*! exports provided: ContactsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModel", function() { return ContactsModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ContactsModel {
    constructor() {
        this.API_END_POINTES = {
            contacts: "/dealbook/contacts/",
            createContact: "/dealbook/createbulkcontact/",
            deleteContact: "/dealbook/deletecontact/",
            addActivity: "/dealbook/createActivity/",
            deleteActivity: "/dealbook/deleteactivity/",
            hierarchy: "/dealbook/managersList/",
            activitiesList: '/dealbook/activitieslist/',
            createWidget: '/dealbook/createcriteria/',
            getWidgets: '/dealbook/criterias/',
            deleteWidgets: '/dealbook/deletecriteria/',
        };
        this.TABLE_COLUMNS = [
            { column: "Name", title: "name", display: true, isFilter: false },
            { column: "Email", title: "email", display: true, isFilter: false },
            { column: "Phone", title: "mobile", display: true, isFilter: false },
            // {column:"Contact Number", title:"phone", display: true},
            { column: "Company", title: "contactOrg", display: true, isFilter: true },
            { column: "Designation", title: "designation", display: true, isFilter: true },
            { column: "Location", title: "location", display: true, isFilter: true },
            { column: "Report To", title: "reportingto", display: true, isFilter: true },
            { column: "Contact Owner", title: "contactOwner", display: true, isFilter: true },
            { column: "Last Activity Date", title: "updatedOn", display: true, isFilter: true },
            { column: "Creation Date", title: "createdOn", display: true, isFilter: true }
        ];
        // public TABLE_COLUMNS = {
        //     'id': 'Name', 'email': 'Email', 'phonenumber': 'Phone Number',
        //     'contactowner': 'contact owner', 'company': 'company',
        //     'lastactivitydate': 'last activity date', 'creationdate': 'creation date'
        //   };
        this.ACTIVITY_TABLE_COLUMNS = [
            { column: "Activity Type", title: "activityType", display: true, isFilter: true },
            { column: "Subject", title: "subject", display: true, isFilter: false },
            { column: "Contact Name", title: "contactName", display: true, isFilter: false },
            { column: "FollowUp Date", title: "followUpDate", display: true, isFilter: true },
            { column: "Update By", title: "updateBy", display: true, isFilter: true },
            { column: "Creation Date", title: "date", display: true, isFilter: true },
        ];
        this.const = {
            Activities: "ACTIVITY_TABLE_COLUMNS",
            Contacts: "TABLE_COLUMNS",
        };
    }
}


/***/ }),

/***/ "./src/app/providers/fetchserverdata.ts":
/*!**********************************************!*\
  !*** ./src/app/providers/fetchserverdata.ts ***!
  \**********************************************/
/*! exports provided: FetchServerDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchServerDataProvider", function() { return FetchServerDataProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/app/providers/utils.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






//import { AlertService } from '../alert/alert.service';
let FetchServerDataProvider = class FetchServerDataProvider {
    constructor(toastr, http, router, utils) {
        this.toastr = toastr;
        this.http = http;
        this.router = router;
        this.utils = utils;
        this.serverUrl = '/dealbookback/';
        //serverUrlInventory = 'http://192.168.0.53:8086/PtsErpInventory/api/';
        this.networkStatus = true;
        this.currentService = null;
        this.res = {};
        this.header = {};
        this.sessionid = '';
        this.tid = null;
        this.date = new Date();
        this.offset = this.date.getTimezoneOffset();
        this.userName = localStorage.getItem('username');
        this.timezone = 'Asia/Kolkata';
        this.http_provider = http;
    }
    /***********************************************************************************************************
     * function : callService(serviceUrl,data,isHeader,isLoading)
     * This function will be called from other pages to make service call
     * It takes 4 parameters :
     *  1] service Url : which service to call
     *  2] data : input to service without header
     *  3] isHeader : a boolean flag to append header to input
     *  4] isLoading : a boolean flag ,  if it is true then show loading spinner
     **********************************************************************************************************/
    callService(serviceUrl, data, isHeader) {
        this.utils.isLoadingSpin = true;
        this.sessionid = localStorage.getItem('sessionid');
        this.tid = localStorage.getItem('tid');
        this.userName = localStorage.getItem('username');
        /*
        show spinner if isLoading is true
         */
        // this.header = {
        //   "header": {
        //     "appclient": this.utils.appclient,
        //     "userid": this.userName,
        //     "sessionid": this.sessionid,
        //     "tid": this.tid,
        //     "createdDate": this.date,
        //     "timezone": this.timezone,
        //     "timezoneoffset": this.offset
        //   }
        // };
        let inputObj = { header: this.header, data: data };
        // console.log("inputobject "+JSON.stringify(inputObj));
        let promise = this.createServiceCall(this.serverUrl + serviceUrl, data);
        return promise;
    }
    /***********************************************************************************************************
       * function : callInventoryService(serviceUrl,data,isHeader,isLoading)
       * This function will be called from other pages to make service call
       * It is same as above service but its URL is different
       **********************************************************************************************************/
    // callInventoryService(serviceUrl, data, isHeader) {
    //   this.utils.isLoadingSpin = true;
    //   this.sessionid = localStorage.getItem('sessionid');
    //   this.tid = localStorage.getItem('tid');
    //   this.userName = localStorage.getItem('username');
    //   /* 
    //   show spinner if isLoading is true  
    //    */
    //   this.header = {
    //     "header": {
    //       "appclient": this.utils.appclient,
    //       "userid": this.userName,
    //       "sessionid": this.sessionid,
    //       "tid": this.tid,
    //       "createdDate": this.date,
    //       "timezone": this.timezone,
    //       "timezoneoffset": this.offset
    //     }
    //   };
    //   let inputObj = Object.assign({}, this.header, data);
    //   let promise = this.createServiceCall(this.serverUrlInventory + serviceUrl, inputObj);
    //   return promise;
    // }
    /***********************************************************************************************************
     * function : createServiceCall(url,data)
     * This function will call the service.
     * This will retuen promise obhject , it will contain output of the service if service succeded
     * otherwise the message with cause of failure .
     **********************************************************************************************************/
    createServiceCall(url, data) {
        // console.log("data "+JSON.stringify(data));
        let promise = new Promise((resolve, reject) => {
            /*
            if network is available then call service
             */
            if (this.networkStatus) {
                // alert("createservicecall");
                this.currentService = this.http.post(url, data, {
                    headers: {
                        MIMEType: "application/json",
                        AccessControlAllowOrigin: "*",
                        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
                        'Access-Control-Allow-Headers': 'Content-Type, Accept',
                        'Access-Control-Allow-Credentials': 'true',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Max-Age': '1728000'
                    }
                }).subscribe(res => {
                    if ('failed' === res) {
                        this.utils.isLoadingSpin = false;
                        let errCode = res;
                        // console.log("errCode" + JSON.stringify(errCode));
                        if (errCode == "TID_1000") {
                            this.utils.isLoadingSpin = false;
                            // console.log("Session Expired");
                            localStorage.clear();
                            this.router.navigate(['/login']);
                        }
                    }
                    else if ('FAIL' == res['status']) {
                        // console.log("Res "+ JSON.stringify(res));
                        this.utils.isLoadingSpin = false;
                        if ('Your Login Session Expired, Please Login Again' == res['errormsg']) {
                            localStorage.clear();
                            this.router.navigateByUrl('/login');
                        }
                        else {
                            //this.alertService.error(res['message']);
                            // alert(res['errormsg']);
                            this.toastr.error(res['errormsg']);
                        }
                    }
                    else {
                        this.utils.isLoadingSpin = false;
                        resolve(res);
                    }
                }, (err) => {
                    this.utils.isLoadingSpin = false;
                    if (err['name'] == "TimeoutError" || err['status'] === 0) {
                        reject("Can't reach to server,please try again later.");
                    }
                    else if (err['status']) {
                        let errorMessage = "Unknown Error occurred";
                        switch (err['status']) {
                            /*
                            Unauthorized
                             */
                            case 401:
                                errorMessage = "You are not authenticate to call this service";
                                break;
                            /*
                             Forbidden
                            */
                            case 403:
                                errorMessage = "You are not authorized to perform this operation or the resource is unavailable for some reason";
                                break;
                            /*
                            internal server error
                             */
                            case 500:
                                errorMessage = "Internal Server Error occurred , please try again later";
                                break;
                            /*
                            Request Timeout
                            */
                            case 408:
                            /*
                              gatewat timeout
                             */
                            case 504:
                            /*
                             Network connect timeout error
                             */
                            case 599:
                                errorMessage = "Can't reach to server , please try again later.";
                                break;
                            /*
                             Service Unavailable
                             */
                            case 503:
                                errorMessage = "Service you are trying is currently unavailable , please try again later.";
                                break;
                            default:
                                errorMessage = "You are not authenticate to call this service";
                                break;
                        }
                        this.utils.isLoadingSpin = false;
                        reject(errorMessage);
                        //this.alertService.error(errorMessage);
                        this.toastr.error(errorMessage);
                    }
                    else {
                        this.utils.isLoadingSpin = false;
                        reject(err.message);
                        // this.alertService.error(err.message);
                        // alert(errorMessage);
                        this.toastr.error(err.message);
                    }
                });
            }
            else {
                this.utils.isLoadingSpin = false;
                reject("");
            }
        });
        //this.utils.isLoadingSpin = false;
        return promise;
    }
};
FetchServerDataProvider.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _utils__WEBPACK_IMPORTED_MODULE_4__["Utils"] }
];
FetchServerDataProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], FetchServerDataProvider);



/***/ }),

/***/ "./src/app/providers/utils.ts":
/*!************************************!*\
  !*** ./src/app/providers/utils.ts ***!
  \************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/****** All Variables declared here *******/
class Utils {
    constructor() {
        this.isLoginPage = false;
        this.USER_VALIDATED = 'User Validation Successfully';
        this.STATUS_SUCCESS = 'SUCCESS';
        this.appclient = 'W';
        this.serviceURL = '';
        this.SERVICE_CALL_ERROR = " error";
        this.SERVICE_CALL_ERROR_CODE = "errorcode";
        this.SERVICE_CALL_INACTIVE = "INACTIVE";
        this.SERVICE_CALL_PAYINIT = "PAYINIT";
        this.SERVICE_CALL_MENU = "menu";
        this.SERVICE_CALL_APPUSERVO = "appuserVo";
        this.SERVICE_CALL_USERROLES = "userRoles";
        this.SERVICE_CALL_ROLEVO = "rolevo";
        this.SERVICE_CALL_ROLEVO_NAME = "name";
        this.SERVICE_CALL_VERIFICATION_STATUSVO = "verificationStatusVo";
        this.SERVICE_CALL_ORG = "org";
        this.SERVICE_CALL_DEPARTMENT = "department";
        this.SERVICE_CALL_BUSINESS_UNIT = "businessunit";
        this.SERVICE_CALL_ORG_NAME = "name";
        this.SERVICE_CALL_ORG_LOGO = "logo";
        this.SERVICE_CALL_ROLE = "role";
        this.SERVICE_CALL_VERIFIED = "VERIFIED";
        this.SERVICE_CALL_USERMENUS = "userMenus";
        this.SERVICE_CALL_STATUS = "status";
        this.SERVICE_CALL_DATA = "data";
        this.SERVICE_CALL_PARENT_MENU = "parentMenu";
        this.SERVICE_CALL_NAME = "name;";
        this.isLoadingSpin = false;
        this.deleted = false;
        this.payFrequency = [];
        this.jobtitles = [];
        this.subSidebarMenuArr = [];
        this.subChildMenuArr = [];
        this.parentChildMenuArray = [];
        this.function_Name = "";
        this.delete_Name = "";
        this.sidebarMenuArr = [];
        this.langList = [];
        this.raceList = [];
        this.raceCodeList = [];
        this.disabilityType = "";
        this.empSubMenuArr = [];
        this.holidayNameList = [];
        this.grpItemListArr = [];
        this.earnitemArr = [];
        this.deductitemArr = [];
        this.preqitemArr = [];
        this.doclistarr = [];
        this.payFrequencyarr = [];
        this.pocdata = [];
        this.appRatingArr = [];
        this.appconfigmode = [];
        this.buData = [];
        this.fromadd = [];
        this.toAddress = [];
        this.orgnizationList = [];
        this.roleList = [];
        this.countryList = [];
        this.salutationList = [{ id: "1", name: "Mr" }, { id: "2", name: "Miss" }, { id: "3", name: "Mrs" }];
        this.companiesList = [];
        this.contactTypeList = [];
        this.contactListArray = [];
        this.CREATECONTACT_URL = "contact/createbulkcontacts";
        this.GETALL_CONTACTS = "contact/getall";
        this.DELETECONTACT_URL = "contact/delete";
        this.CREATEACTIVITY_URL = "activity/create";
        this.UPDATEACTIVITY_URL = "activity/update";
        this.DELETEACTIVITY_URL = "activity/delete";
        this.ACTIVITYCREATEDUPDATEDBY_URL = "activity/getallcreatedupdatedby";
        this.UPDATECONTACT_URL = "contact/update";
        this.GETHIERARCHY_URL = "contact/getparenthierachy";
        this.GETHIERARCHYSUBCHILD_URL = "contact/gethierachy";
        // GETSTATICDATA_URL = "contact/getstatic";
        this.GETSTATICDATA_URL = "staticdata/getstatic";
        this.GETCRITERIAFILTERDATA_URL = "filterby/findbycriteria";
        this.GETDESIGNATION_URL = "contact/getdesignations";
        this.GETLOCATIONLIST_URL = "address/getcities";
        this.GETCONTACTOWNER_URL = "contact/getallcontactowner";
        this.GETREPORTINGTO_URL = "contact/getallreportingto";
        this.GETALLCOMPANY_URL = "contactorg/getall";
        this.CREATEWIDGET_URL = "userwidget/create";
        this.DELETEWIDGET_URL = "userwidget/delete";
        this.GETACTIVITYTYPE_URL = "activitytype/getall";
        this.GETUPDATEDBY_URL = "activity/getallupdatedby";
        this.CONTACTIMPORT_URL = "import/impcontacts";
        this.contactList = [];
        this.ds = {};
        this.widgets = [];
    }
}


/***/ }),

/***/ "./src/app/services/contacts.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/contacts.service.ts ***!
  \**********************************************/
/*! exports provided: ContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsService", function() { return ContactsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _model_contacts_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/contacts.model */ "./src/app/model/contacts.model.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/event-emitter.service */ "./src/app/services/event-emitter.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_providers_fetchserverdata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/fetchserverdata */ "./src/app/providers/fetchserverdata.ts");
/* harmony import */ var src_app_providers_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/providers/utils */ "./src/app/providers/utils.ts");










const EventSource = window['EventSource'];
let ContactsService = class ContactsService {
    constructor(serviceCallProvider, utils, http, zone, emService, toastr) {
        this.serviceCallProvider = serviceCallProvider;
        this.utils = utils;
        this.http = http;
        this.zone = zone;
        this.emService = emService;
        this.toastr = toastr;
        this._contacts = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this._ownersList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this._activities = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this._displayColumns = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.contactsToAdd = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.dataStore = {
            contacts: [],
            ownersList: [],
            activities: [],
            contactsList: [],
            emailsList: [],
            reportTo: []
        };
        this.contactId = null;
        this.contacts = this._contacts.asObservable();
        this.ownersList = this._ownersList.asObservable();
        this.activities = this._activities.asObservable();
        this.displayColumns = this._displayColumns.asObservable();
        this.updateContact = false;
        this.getHierarchyflag = false;
        this.hierarchyList = [];
        this.defaultWidgets = [{ widgetName: "Activites", widgetCriteria: "activities", data: [] }, { widgetName: "Contacts", widgetCriteria: "contacts", data: [] }];
        this.widgets = [];
        emService.showHideLoader(true);
        this.api = new _model_contacts_model__WEBPACK_IMPORTED_MODULE_5__["ContactsModel"]().API_END_POINTES;
        this._displayColumns.next(new _model_contacts_model__WEBPACK_IMPORTED_MODULE_5__["ContactsModel"]().TABLE_COLUMNS);
    }
    getHierarchyList() {
        return this.hierarchyList;
    }
    getWidgets() {
        return this.widgets;
    }
    /**********  Set Methods  **********/
    addContacts(params, eventType) {
        let message = "New contact add successfully";
        if (eventType) {
            this.updateContact = true;
            message = "Contact updated successfully";
        }
        return this.http.post(this.api.createContact, params).subscribe(data => {
            this.toastr.success(message);
            // this.loadContacts();
        });
    }
    setcontactId(contactId) {
        this.contactId = contactId;
    }
    getHierarchyFlag(isBoolean) {
        this.getHierarchyflag = isBoolean;
    }
    updateColumns(data) {
        this._displayColumns.next(data);
    }
    getUser() {
        return this.loggedInUser;
    }
    /**********  Get Methods  **********/
    getContacts() {
        return this._contacts.value;
    }
    getContactsList() {
        return this.dataStore.contactsList;
    }
    getemailsList() {
        return this.dataStore.emailsList;
    }
    setHierarchyList(list) {
        this.hierarchyList = list[0];
    }
    addActivity(contactId, params) {
        return this.http.post(this.api.addActivity + contactId, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            let message = "Activity added successfully";
            this.toastr.success(message);
        }));
        // .subscribe(data=>{
        //   this.dataStore.activities.unshift(params);
        //   this._activities.next(this.dataStore.activities);
        // }, e=> console.log(e));
    }
    deleteData(type, id) {
        return this.http.get(this.api[type] + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            let message = "Activity deleted successfully";
            if ("deleteContact" == type) {
                message = "Contact deleted successfully";
            }
            this.toastr.success(message);
            // if("deleteContact" == type){
            //   let index = this.dataStore.contacts.findIndex(c=> c.id == id);
            //   this.dataStore.contacts.splice(index, 1);
            //   this.updateDataStore(this.dataStore.contacts);
            // }
            // console.log(data);
        }));
    }
    addWidget(widget, data) {
        // this.widgets.unshift({...widget, data : data});
        return this.http.post(this.api.createWidget, widget).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            // console.log(data);
            let message = "Widget created successfully";
            data['data'] = this.filterWidgets(data).length > 0 ? this.filterWidgets(data) : alert("No data Available");
            //this.widgets.unshift(data);
            this.utils.widgets.unshift(data);
            // console.log("this.utils.widgets "+this.utils.widgets);
            this.toastr.success(message);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            this.toastr.error(err.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }));
        // this.widgets.unshift({...widget, data : this.filterWidgets(widget)});
    }
    createNewWidget(input, data) {
        this.serviceCallProvider.callService(this.utils.CREATEWIDGET_URL, input, true).then(result => {
            let status = result[this.utils.SERVICE_CALL_STATUS];
            let output_data = result[this.utils.SERVICE_CALL_DATA];
            if (status === this.utils.STATUS_SUCCESS) {
                let data = {};
                this.toastr.success(result['msg']);
                data = output_data;
                data['data'];
                //this.widgets.unshift( output_data);
                this.utils.widgets.unshift(output_data);
                this.emService.updateWidgits();
                // console.log("widgets "+JSON.stringify(this.widgets))
                // console.log("output "+JSON.stringify(output_data));
            }
            else {
                alert(result['message']);
            }
        });
    }
    filterWidgets(widget) {
        let d = this.dataStore[widget.widgetCriteria.toLowerCase()].filter(ele => {
            let a = [];
            for (let [key, value] of Object.entries(widget)) {
                if (key !== "widgetName" && key != "widgetCriteria" && key != "data" && key != "id" && key != "uid") {
                    if (typeof ele[key] == "object") {
                        if (key.endsWith('fallowUp')) {
                            this.validateData(value, ele[key], "followUpDate", a);
                        }
                        else {
                            this.validateData(value, ele[key], "name", a);
                        }
                    }
                    else {
                        this.validateData(value, ele, key, a);
                        // let list = value && value['split'](",");
                        // if(list != undefined) {
                        //   a.push(list.some(v=> ele[key] == v))
                        // } else {
                        //   a.push(false);
                        // }
                    }
                }
            }
            return a.every(Boolean);
        });
        return d;
    }
    validateData(value, ele, key, a) {
        let list = value && value['split'](",");
        if (list != undefined) {
            if ((key.toLowerCase()).endsWith('date')) {
                if (key == "followUpDate") {
                    if (ele['fallowUp']) {
                        let today = new Date().setHours(0, 0, 0, 0);
                        let followUpDateFromDB = new Date(ele['fallowUp']['fallowUpDate']).setHours(0, 0, 0, 0);
                        let filterOption = list[0];
                        let fDate = Number(list[1]);
                        let followUpDateFromFilter = new Date(fDate).setHours(0, 0, 0, 0);
                        // console.log("Follow Up Filter: ", filterOption);
                        if (filterOption == "Today" || filterOption == "Tomorrow") {
                            a.push(followUpDateFromFilter == followUpDateFromDB);
                        }
                        else {
                            a.push(followUpDateFromFilter >= followUpDateFromDB && today < followUpDateFromDB);
                        }
                    }
                    else {
                        a.push(false);
                    }
                }
                else {
                    a.push(list.some(v => new Date(ele[key]).getTime() >= v));
                }
            }
            else {
                a.push(list.some(v => ele[key] == v));
            }
        }
        else {
            a.push(false);
        }
    }
};
ContactsService.ctorParameters = () => [
    { type: src_app_providers_fetchserverdata__WEBPACK_IMPORTED_MODULE_8__["FetchServerDataProvider"] },
    { type: src_app_providers_utils__WEBPACK_IMPORTED_MODULE_9__["Utils"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_6__["EventEmitterService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }
];
ContactsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ContactsService);



/***/ }),

/***/ "./src/app/services/event-emitter.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/event-emitter.service.ts ***!
  \***************************************************/
/*! exports provided: EventEmitterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventEmitterService", function() { return EventEmitterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let EventEmitterService = class EventEmitterService {
    constructor() {
        this._sideWindow = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ isTrue: false, component: "", title: "" });
        this.sideWindow = this._sideWindow.asObservable();
        this._loader = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.loader = this._loader.asObservable();
        this._openrow = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.openrow = this._openrow.asObservable();
        this._createContact = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.createContact = this._createContact.asObservable();
        this._updateContact = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.updateContact = this._updateContact.asObservable();
        this._updateActivity = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.updateActivity = this._updateActivity.asObservable();
        this._updateWidgit = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.updateWidgit = this._updateWidgit.asObservable();
        this._curPath = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.curPath = this._curPath.asObservable();
        this._scrollToItem = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.scrollToItem = this._curPath.asObservable();
        this._scrollToTop = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.scrollToTop = this._curPath.asObservable();
        this.isHierarchyOpen = false;
    }
    setScrollToTop(item) {
        console.log("Set Scrool To Item:" + item);
        this._scrollToTop.next(item);
    }
    setScrollToItem(item) {
        //console.log("Set Scrool To Item:"+item);
        this._scrollToItem.next(item);
    }
    setCurPath(path) {
        this._curPath.next(path);
    }
    showHideWindow(isTrue, component, title) {
        this._sideWindow.next({ isTrue, component, title });
    }
    showHideLoader(isTrue) {
        this._loader.next(isTrue);
    }
    setOpenRow(contact) {
        this._openrow.next(contact);
    }
    addContact(contact) {
        this._createContact.next(contact);
    }
    updateContacts() {
        this._updateContact.next(!this._updateContact.value);
    }
    updateActivities() {
        this._updateActivity.next(!this._updateActivity.value);
    }
    updateWidgits() {
        this._updateWidgit.next(!this._updateWidgit.value);
    }
    setIsHierarchyOpen(isOpen) {
        this.isHierarchyOpen = isOpen;
    }
    getIsHierarchyOpen() {
        return this.isHierarchyOpen;
    }
};
EventEmitterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EventEmitterService);



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





//import { AlertModule } from '../../../../node_modules/ngx-bootstrap/alert/ngx-bootstrap-alert';
// import { AlertModule} from 'ngx-bootstrap/alert'

let AuthService = class AuthService {
    constructor(afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router, ngZone, // NgZone service to remove outside scope warning
    toastr) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        this.toastr = toastr;
        this.loggedIn = false;
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */
        this.loggedIn = !!localStorage.getItem('token');
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                // localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    // Sign in with email/password
    SignIn(email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((result) => {
            // console.log(result);
            this.ngZone.run(() => { });
            this.SetUserData(result.user);
            this.afAuth.auth.currentUser.getIdToken(/* forceRefresh */ true)
                .then((idToken) => {
                localStorage.setItem('token', idToken);
                this.router.navigate(['dashboard']);
                // console.log(idToken);
            }).catch(function (error) {
                // Handle error
            });
        }).catch((error) => {
            //window.alert(error.message)
            //this.alert.showError(error.message) 
            this.toastr.success(error.message);
        });
    }
    // Sign out 
    SignOut() {
        return this.afAuth.auth.signOut().then(() => {
            // this.afAuth.auth.signOut();
            //this.authenticated = false;
            // alert("singin");
            window.localStorage.clear();
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            this.router.navigate(['sign-in']);
        });
    }
    get isLoggedIn() {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== null && user.email !== '') ? true : false;
    }
    /* Setting up user data when sign in with username/password,
sign up with username/password and sign in with social auth
provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    SetUserData(user) {
        const userRef = this.afs.doc(`users/${user.uid}`);
        const userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };
        return userRef.set(userData, {
            merge: true
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/spinner/spinner.component.scss":
/*!************************************************!*\
  !*** ./src/app/spinner/spinner.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#loading {\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  position: fixed;\n  display: block;\n  opacity: 0.7;\n  background-color: #fff;\n  z-index: 99;\n  text-align: center;\n}\n\n#loading-image {\n  position: absolute;\n  top: 40%;\n  left: 45%;\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoZHVnYXIvRG9jdW1lbnRzL0RlYWxib29rL2RlYWxib29rdWkvc3JjL2FwcC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2FkaW5nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB6LWluZGV4OiA5OTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gICNsb2FkaW5nLWltYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MCU7XG4gICAgbGVmdDogNDUlO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgfSIsIiNsb2FkaW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMC43O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB6LWluZGV4OiA5OTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jbG9hZGluZy1pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDQ1JTtcbiAgei1pbmRleDogMTAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/utils */ "./src/app/providers/utils.ts");



let SpinnerComponent = class SpinnerComponent {
    constructor(utils) {
        this.utils = utils;
    }
    ngOnInit() {
    }
};
SpinnerComponent.ctorParameters = () => [
    { type: _providers_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"] }
];
SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-spinner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinner.component.scss */ "./src/app/spinner/spinner.component.scss")).default]
    })
], SpinnerComponent);



/***/ }),

/***/ "./src/app/views/changepassword/changepassword.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/views/changepassword/changepassword.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NoYW5nZXBhc3N3b3JkL2NoYW5nZXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/changepassword/changepassword.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/changepassword/changepassword.component.ts ***!
  \******************************************************************/
/*! exports provided: ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_fetchserverdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/fetchserverdata */ "./src/app/providers/fetchserverdata.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/utils */ "./src/app/providers/utils.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let ChangepasswordComponent = class ChangepasswordComponent {
    constructor(toastr, router, serviceCallProvider, utils) {
        this.toastr = toastr;
        this.router = router;
        this.serviceCallProvider = serviceCallProvider;
        this.utils = utils;
        this.user = {
            email: "",
            token: "",
            password: ""
        };
        this.confirmPassword = "";
    }
    ngOnInit() {
    }
    sendUser() {
        this.utils.serviceURL = "checkpoint/changePassword";
        this.utils.input = {
            email: this.user.email,
            token: this.user.token,
            password: this.user.password
        };
        // if(!this.isValid()) alert("The passwords did not match. Please try again.")
        // else {
        this.serviceCallProvider.callService(this.utils.serviceURL, this.utils.input, true).then(result => {
            let status = result[this.utils.SERVICE_CALL_STATUS];
            let outputData = result[this.utils.SERVICE_CALL_DATA];
            if (status === this.utils.STATUS_SUCCESS) {
                this.toastr.success("Your password has been reset!");
                // alert("Your password has been reset!");
                // console.log(status);
                this.router.navigate(['/sign-in']);
            }
            else {
                alert(status);
            }
        });
    }
};
ChangepasswordComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _providers_fetchserverdata__WEBPACK_IMPORTED_MODULE_2__["FetchServerDataProvider"] },
    { type: _providers_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"] }
];
ChangepasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'pts-changepassword',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./changepassword.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/changepassword/changepassword.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./changepassword.component.scss */ "./src/app/views/changepassword/changepassword.component.scss")).default]
    })
], ChangepasswordComponent);



/***/ }),

/***/ "./src/app/views/contacts/hierarchy/hierarchy.component.css":
/*!******************************************************************!*\
  !*** ./src/app/views/contacts/hierarchy/hierarchy.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbnRhY3RzL2hpZXJhcmNoeS9oaWVyYXJjaHkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/contacts/hierarchy/hierarchy.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/contacts/hierarchy/hierarchy.component.ts ***!
  \*****************************************************************/
/*! exports provided: HierarchyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HierarchyComponent", function() { return HierarchyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/event-emitter.service */ "./src/app/services/event-emitter.service.ts");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/contacts.service */ "./src/app/services/contacts.service.ts");




let HierarchyComponent = class HierarchyComponent {
    constructor(cs, emService) {
        this.cs = cs;
        this.emService = emService;
        this.isshow = true;
        this.hasManager = false;
    }
    ngOnInit() {
        if (this.cs.getHierarchyflag) {
            this.topEmployee = this.topEmployee || this.cs.getHierarchyList();
            // this.cs.getHierarchyFlag(false);
        }
    }
    isShowChild($event) {
        this.isshow = $event;
    }
    clicked(nodeData) {
        this.emService.setOpenRow(nodeData.id);
        // alert(`Hi All. I'm ${nodeData.name}. I'm a ${nodeData.id}.`);
    }
    getData(list, type) {
        let count = 0;
        list.activities.forEach(a => {
            if (a.activityType == type) {
                count++;
            }
        });
        return count;
    }
    addContact(employee, $event) {
        this.emService.addContact(employee);
        $event.stopPropagation();
    }
    showChildren(employee, $event) {
        let list = this.cs.getContacts().filter(c => c['reportto'] && c['reportto'].id == employee.id);
        list.length > 0 ? employee["children"] = list : alert(`No reporties to "${employee.name}"`);
        $event.stopPropagation();
    }
};
HierarchyComponent.ctorParameters = () => [
    { type: _services_contacts_service__WEBPACK_IMPORTED_MODULE_3__["ContactsService"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_2__["EventEmitterService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HierarchyComponent.prototype, "topEmployee", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HierarchyComponent.prototype, "hasManager", void 0);
HierarchyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hierarchy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hierarchy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/contacts/hierarchy/hierarchy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hierarchy.component.css */ "./src/app/views/contacts/hierarchy/hierarchy.component.css")).default]
    })
], HierarchyComponent);



/***/ }),

/***/ "./src/app/views/forgotpassword/forgotpassword.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/forgotpassword/forgotpassword.component.ts ***!
  \******************************************************************/
/*! exports provided: ForgotpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_fetchserverdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/fetchserverdata */ "./src/app/providers/fetchserverdata.ts");
/* harmony import */ var _providers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/utils */ "./src/app/providers/utils.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let ForgotpasswordComponent = class ForgotpasswordComponent {
    constructor(toastr, serviceCallProvider, utils) {
        this.toastr = toastr;
        this.serviceCallProvider = serviceCallProvider;
        this.utils = utils;
        this.user = {
            email: ""
        };
    }
    ngOnInit() {
    }
    sendUser() {
        this.utils.serviceURL = "checkpoint/resetPassword";
        this.utils.input = {
            email: this.user.email,
        };
        if (this.user.email.length == 0)
            alert("Please enter a valid User Name");
        this.serviceCallProvider.callService(this.utils.serviceURL, this.utils.input, true).then(result => {
            let status = result[this.utils.SERVICE_CALL_STATUS];
            let output_data = result[this.utils.SERVICE_CALL_DATA];
            if (status === this.utils.STATUS_SUCCESS) {
                this.toastr.success("A reset link has been sent to your email id.  Please follow the instructions on that.");
                // alert()
                // console.log(output_data+" -link sent");
            }
            else {
                alert(status);
            }
        });
    }
};
ForgotpasswordComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _providers_fetchserverdata__WEBPACK_IMPORTED_MODULE_2__["FetchServerDataProvider"] },
    { type: _providers_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"] }
];
ForgotpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'pts-forgotpassword',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgotpassword.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/forgotpassword/forgotpassword.component.html")).default,
    })
], ForgotpasswordComponent);



/***/ }),

/***/ "./src/app/views/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _providers_fetchserverdata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/fetchserverdata */ "./src/app/providers/fetchserverdata.ts");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/contacts.service */ "./src/app/services/contacts.service.ts");
/* harmony import */ var _providers_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/utils */ "./src/app/providers/utils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");








let LoginComponent = class LoginComponent {
    constructor(authService, serviceCallProvider, contactsService, utils, router, toster) {
        this.authService = authService;
        this.serviceCallProvider = serviceCallProvider;
        this.contactsService = contactsService;
        this.utils = utils;
        this.router = router;
        this.toster = toster;
        this.user = {
            email: "",
            password: ""
        };
        this.showNav = true;
    }
    ngOnInit() {
    }
    sendUser() {
        this.utils.serviceURL = "checkpoint/login";
        this.utils.input = {
            email: this.user.email,
            password: this.user.password
        };
        this.serviceCallProvider.callService(this.utils.serviceURL, this.utils.input, null).then(result => {
            let status = result[this.utils.SERVICE_CALL_STATUS];
            let output_data = result[this.utils.SERVICE_CALL_DATA];
            if (status === this.utils.STATUS_SUCCESS) {
                this.toster.success("User Verified");
                this.router.navigate(['dashboard']);
                let userName = output_data.name;
                let UserID = output_data.id;
                localStorage.setItem("userName", userName);
                localStorage.setItem("userID", JSON.stringify(UserID));
            }
            else {
                //this.alertService.error(result['message']); 
                this.toster.error(result['msg']);
            }
        });
        // this.serviceCallProvider.callService(this.utils.serviceURL, this.utils.input, true).then(
        //   result => {
        //     let status = result[this.utils.SERVICE_CALL_STATUS];
        //     let output_data: any = result[this.utils.SERVICE_CALL_DATA];
        //     if(status === this.utils.USER_VALIDATED  && this.utils.isLoginPage === true) { //need to check if loginPage is needed or not
        //       console.log(output_data);
        //     }
        //     else{
        //     // console.log(output_data.errormsg)
        //     //  this.toster.success(output_data['errormsg']);
        //     }
        //    // this.utils.isLoginPage = false; //this property needs to be checked.
        //   });
    }
    testUser() {
        const data = {
            email: this.user.email,
            password: this.user.password
        };
        console.log(data);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _providers_fetchserverdata__WEBPACK_IMPORTED_MODULE_3__["FetchServerDataProvider"] },
    { type: _services_contacts_service__WEBPACK_IMPORTED_MODULE_4__["ContactsService"] },
    { type: _providers_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html")).default,
        styles: ["app-header { display: none; }"]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/views/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegisterComponent = class RegisterComponent {
    constructor() { }
};
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/register/register.component.html")).default
    })
], RegisterComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBSzEXDTGHEazkC4R_X05vhtNiVQa6kYss",
        authDomain: "dealbook.firebaseapp.com",
        databaseURL: "https://dealbook.firebaseio.com",
        projectId: "dealbook",
        storageBucket: "dealbook.appspot.com",
        messagingSenderId: "865492363518",
        appId: "1:865492363518:web:2e7620424b2e6c4a431daf",
        measurementId: "G-2L4X3RYZ39"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    if (window) {
        window.console.log = function () { };
    }
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aashishdugar/Documents/Dealbook/dealbookui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map