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
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\t<mat-sidenav-container class=\"example-container\">\r\n    <!--\r\n\t\t<mat-sidenav #sidenav7 mode=\"side\" position=\"end\" role=\"navigation\" class=\"example-sidenav\">\r\n        <br /><br />\r\n        <mat-card-header>\r\n          <mat-card-title>Development Tools</mat-card-title>\r\n        </mat-card-header><p> </p>\r\n        <button (click)=\"this.deleteDrawing()\" mat-raised-button>\r\n          <mat-icon>undo</mat-icon>\r\n        </button>&nbsp;\r\n        <button (click)=\"this.redoDrawing()\" mat-raised-button>\r\n          <mat-icon>redo</mat-icon>\r\n        </button>&nbsp;\r\n        <button color=\"accent\" (click)=\"sidenav1.toggle(); sidenav7.toggle()\" mat-raised-button>\r\n          Toggle <mat-icon>toggle_off</mat-icon>\r\n        </button><p> </p>\r\n        <mat-accordion>\r\n          <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                              (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                Colour Intensity\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <button (click)=\"resetToDefault()\" color=\"primary\" mat-raised-button>\r\n              Reset to default\r\n            </button><p> </p>\r\n            Invert\r\n            <mat-slider\r\n              thumbLabel\r\n              (change)=\"this.onInvertChange($event)\"\r\n              min=\"1\"\r\n              max=\"100\"></mat-slider><p> </p>\r\n            Hue\r\n            <mat-slider\r\n              thumbLabel\r\n              (change)=\"this.onHueChange($event)\"\r\n              min=\"0\"\r\n              max=\"360\"></mat-slider><p> </p>\r\n            Saturation\r\n            <mat-slider\r\n              thumbLabel\r\n              (change)=\"this.onSaturationChange($event)\"\r\n              min=\"1\"\r\n              max=\"100\"></mat-slider><p> </p>\r\n          </mat-expansion-panel>\r\n        </mat-accordion><p> </p>\r\n    </mat-sidenav>-->\r\n    \r\n    <mat-sidenav #sidenav1 opened mode=\"side\" position=\"end\" role=\"navigation\" class=\"example-sidenav\">\r\n      <center>\r\n        <button mat-icon-button color=\"accent\">\r\n          <mat-icon>build</mat-icon>\r\n        </button>\r\n      </center><p> </p>\r\n      \r\n      <hr style=\"height:2px;border-width:0;color:gray;background-color:gray\"><p> </p>\r\n      <!--<button mat-mini-fab color=\"accent\" (click)=\"sidenav1.toggle(); sidenav7.toggle()\" mat-raised-button>\r\n        <mat-icon>toggle_on</mat-icon>\r\n      </button><p> </p>-->\r\n      <mat-accordion>\r\n        <mat-expansion-panel (opened)=\"panelOpenState = true; this.changeHeaderTest('Annotation Tools');\"\r\n                            (closed)=\"panelOpenState = false; this.changeHeaderTest('Home');\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              <mat-icon>create</mat-icon>\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <button (mouseenter) =\"this.changeHeaderTest('Point Annotation');\"  (mouseleave) =\"this.changeHeaderTest('Annotation Tools');\" (click)=\"this.addInteraction('Point')\" mat-raised-button>\r\n            <mat-icon>group_work</mat-icon>\r\n          </button><p> </p>\r\n          <button (mouseenter) =\"this.changeHeaderTest('LineString');\"  (mouseleave) =\"this.changeHeaderTest('Annotation Tools');\" (click)=\"this.addInteraction('LineString')\" mat-raised-button>\r\n            <mat-icon>clear_all</mat-icon>\r\n          </button><p> </p>\r\n          <button (mouseenter) =\"this.changeHeaderTest('Polygon');\"  (mouseleave) =\"this.changeHeaderTest('Annotation Tools');\" (click)=\"this.addpixelpolyfun()\" mat-raised-button>\r\n            <mat-icon>change_history</mat-icon>\r\n          </button><p> </p>\r\n          <button (mouseenter) =\"this.changeHeaderTest('Circle');\"  (mouseleave) =\"this.changeHeaderTest('Annotation Tools');\" (click)=\"this.addInteraction('Circle')\" mat-raised-button>\r\n            <mat-icon>circle</mat-icon>\r\n          </button><p> </p>\r\n          <button (mouseenter) =\"this.changeHeaderTest('Remove Interaction');\"  (mouseleave) =\"this.changeHeaderTest('Annotation Tools');\" (click)=\"this.removeInteraction()\" mat-raised-button color=\"primary\" aria-label=\"Example icon button with a menu icon\">\r\n              <mat-icon>clear</mat-icon>\r\n          </button><p> </p>\r\n          <button (mouseenter) =\"this.changeHeaderTest('Delete Annotations');\"  (mouseleave) =\"this.changeHeaderTest('Annotation Tools');\" (click)=\"this.deleteDrawing()\" mat-raised-button color=\"primary\" aria-label=\"Example icon button with a menu icon\">\r\n              <mat-icon>delete</mat-icon>\r\n          </button>\r\n        </mat-expansion-panel><p> </p>\r\n\r\n        <mat-expansion-panel (opened)=\"panelOpenState = true; this.changeHeaderTest('Union & Difference');\"\r\n                            (closed)=\"panelOpenState = false; this.changeHeaderTest('Home');\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              <mat-icon>add_circle</mat-icon>\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <button (mouseenter) =\"this.changeHeaderTest('Add Polygon');\"  (mouseleave) =\"this.changeHeaderTest('Union & Difference');\"  (click)=\"this.addPolygons()\" mat-raised-button>\r\n            <mat-icon>add_circle</mat-icon>\r\n          </button><p> </p>\r\n          <button (mouseenter) =\"this.changeHeaderTest('Erase Polygon');\"  (mouseleave) =\"this.changeHeaderTest('Union & Difference');\" (click)=\"this.erasePolygons()\" mat-raised-button>\r\n            <mat-icon>remove_circle</mat-icon>\r\n          </button><p> </p>\r\n          <button (mouseenter) =\"this.changeHeaderTest('Combine');\"  (mouseleave) =\"this.changeHeaderTest('Union & Difference');\"(click)=\"this.combine()\" mat-raised-button color=\"primary\" aria-label=\"Example icon button with a menu icon\">\r\n            <mat-icon>swap_horizontal</mat-icon>\r\n          </button>\r\n        </mat-expansion-panel><p> </p>\r\n\r\n          <mat-expansion-panel (opened)=\"panelOpenState = true; this.changeHeaderTest('Save & Load');\"\r\n          (closed)=\"panelOpenState = false; this.changeHeaderTest('Home');\">\r\n            <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              <mat-icon> cloud</mat-icon>\r\n            </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n              <button (mouseenter) =\"this.changeHeaderTest('Save Polygon');\"  (mouseleave) =\"this.changeHeaderTest('Save & Load');\"  (click)=\"openSnackBar('Saving Polygons to firebase', 'Dismiss'); savePolygonsToDatabase()\" mat-raised-button>\r\n                <mat-icon>cloud_import</mat-icon>\r\n              </button><p> </p>\r\n              <button (mouseenter) =\"this.changeHeaderTest('Retrieve Polygon');\"  (mouseleave) =\"this.changeHeaderTest('Save & Load');\" (click)=\"retrievePolygonsFromDatabase(); openSnackBar('Retrieving Polygons to Database', 'Dismiss')\" mat-raised-button>\r\n                <mat-icon>cloud_download</mat-icon>\r\n              </button><p> </p>\r\n              <!--\r\n              <button (mouseenter) =\"this.changeHeaderTest('Load Polygon');\"  (mouseleave) =\"this.changeHeaderTest('Save & Load');\" (click)=\"loadPolygonsFromFirebase()\" mat-raised-button color=\"primary\" aria-label=\"Example icon button with a menu icon\">\r\n                <mat-icon>publish</mat-icon>\r\n              </button>\r\n              -->\r\n              \r\n          </mat-expansion-panel><p> </p>\r\n\r\n\r\n          <mat-expansion-panel (opened)=\"panelOpenState = true; this.changeHeaderTest('Import & Export');\"\r\n          (closed)=\"panelOpenState = false; this.changeHeaderTest('Home');\">\r\n            <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              <mat-icon>folder</mat-icon>\r\n            </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n              <input #file type=\"file\" style=\"display:none;\" (change)=\"this.importFile($event)\" />\r\n              <button (mouseenter) =\"this.changeHeaderTest('Import Features');\"  (mouseleave) =\"this.changeHeaderTest('Import & Export');\"  (click)=\"openSnackBar('Importing', 'Dismiss'); file.click();\" mat-raised-button>\r\n                <mat-icon>create_new_folder</mat-icon>\r\n              </button><p> </p>\r\n              <button (mouseenter) =\"this.changeHeaderTest('Export Features');\"  (mouseleave) =\"this.changeHeaderTest('Import & Export');\" (click)=\"openSnackBar('Exporting', 'Dismiss'); this.exportFile();\" mat-raised-button>\r\n                <mat-icon>cloud_download</mat-icon>\r\n              </button><p> </p>\r\n              <!--\r\n              <button (mouseenter) =\"this.changeHeaderTest('Load Polygon');\"  (mouseleave) =\"this.changeHeaderTest('Save & Load');\" (click)=\"loadPolygonsFromFirebase()\" mat-raised-button color=\"primary\" aria-label=\"Example icon button with a menu icon\">\r\n                <mat-icon>publish</mat-icon>\r\n              </button>\r\n              -->\r\n              \r\n          </mat-expansion-panel><p> </p>\r\n\r\n      </mat-accordion>\r\n    </mat-sidenav>\r\n\r\n\t\t<mat-sidenav-content>\r\n\t\t\t<mat-sidenav-container class=\"example-map-container\">\r\n\t\t\t\t<mat-sidenav #sidenav2 mode=\"side\" position=\"start\" role=\"navigation\" class=\"example-sidenav\">\r\n\r\n\t\t\t\t\t<div fxLayout=\"column\" class=\"sidenav-normal\">\r\n            <center>\r\n              <button mat-fab color=\"primary\" (click)=\"sidenav2.toggle()\">\r\n                <mat-icon>menu</mat-icon>\r\n              </button>\r\n            </center><br />\r\n            <mat-accordion>\r\n              <mat-expansion-panel #panel1 (opened)=\"panelOpenState = true; this.changeHeaderTest('Brain Information');\"\r\n                                   (closed)=\"panelOpenState = false; this.changeHeaderTest('Home');\">\r\n                <mat-expansion-panel-header>\r\n                  <mat-panel-title>\r\n                    Brain Information\r\n                  </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <br>\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Brain ID</mat-label>\r\n                  <input (change)=\"this.getBrainIDUpdated($event)\"matInput placeholder=\"E.g. 4240\">\r\n                </mat-form-field>\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Section No</mat-label>\r\n                  <input (change)=\"this.emailUpdated($event)\" matInput placeholder=\"E.g. 25\">\r\n                </mat-form-field><p> </p>\r\n                <form>\r\n                  <mat-form-field appearance=\"fill\">\r\n                    <mat-label>Select Tracer</mat-label>\r\n                    <mat-select [(ngModel)]=\"selectedValue\" name=\"tracer\">\r\n                      <mat-option *ngFor=\"let tracer of tracers\" [value]=\"tracer.value\">\r\n                        {{tracer.viewValue}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </form>\r\n                <!--\r\n                  <mat-slide-toggle\r\n                      color=\"primary\"\r\n                      (change)=\"this.onToggleTracer($event)\"\r\n                      class=\"example-margin\"\r\n                      [checked]=\"checked\"\r\n                      [disabled]=\"disabled\">\r\n                    Toggle Tracer\r\n                  </mat-slide-toggle>\r\n                -->          \r\n                <mat-card-actions>\r\n                  <button style=\"right:-60%;padding:8px;width:40%;\"  (click)=\"this.brainIDUpdated()\" color=\"primary\" mat-raised-button>Load Brain</button>\r\n                </mat-card-actions>\r\n              </mat-expansion-panel><p></p>\r\n              <mat-expansion-panel #panel2 (opened)=\"panelOpenState = true; this.changeHeaderTest('Atlas');\"\r\n                                   (closed)=\"panelOpenState = false; this.changeHeaderTest('Home');\">\r\n                <mat-expansion-panel-header>\r\n                  <mat-panel-title>\r\n                    Atlas\r\n                  </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <!--\r\n                  <button (click)=\"this.displayFeatures();\" mat-raised-button>\r\n                    <mat-icon>cloud_download</mat-icon>\r\n                  </button><p> </p>\r\n                -->\r\n                <div class=\"menu-overflow-hidden\" id=\"jstree_block\" style=\"height: calc(50% - 2px); margin-left: 10px;\">\r\n                  <div class=\"active-pink-3 active-pink-4 mb-4\">\r\n                    <button  color=\"primary\" (click)=\"this.onClick('show')\" mat-raised-button >Show atlas</button>\r\n                    <button  color=\"primary\" (click)=\"this.onClick('hide')\" style=\"left:10%;\" mat-raised-button>Hide atlas</button>\r\n                  <br><br>\r\n                      <mat-form-field style=\"width:100%\" appearance=\"fill\">\r\n                        <mat-label>Region Name</mat-label>\r\n                        <input class=\"form-control search-input\" (change)=\"this.Tree($event);\" matInput placeholder=\"E.g. Hypothalamus\">\r\n                      </mat-form-field>\r\n                   </div>\r\n                  <div style=\"white-space: nowrap; font-family: 'Big Shoulders Stencil Display', cursive; font-family: 'Roboto', sans-serif;\" id='atlas_info'></div>\r\n                </div>\r\n              </mat-expansion-panel><p></p>\r\n              <mat-expansion-panel (opened)=\"panelOpenState = true; this.changeHeaderTest('Injection Region');\"\r\n                                   (closed)=\"panelOpenState = false; this.changeHeaderTest('Home');\">\r\n                <mat-expansion-panel-header>\r\n                  <mat-panel-title>\r\n                    Injection Region\r\n                  </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n              </mat-expansion-panel><p></p>\r\n              <mat-expansion-panel (opened)=\"panelOpenState = true; this.changeHeaderTest('Process Annotation');\"\r\n                                   (closed)=\"panelOpenState = false; this.changeHeaderTest('Home');\">\r\n                <mat-expansion-panel-header>\r\n                  <mat-panel-title>\r\n                    Process Annotation\r\n                  </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n              </mat-expansion-panel><p></p>\r\n              <mat-expansion-panel (opened)=\"panelOpenState = true; this.changeHeaderTest('Point Annotation');\"\r\n                                   (closed)=\"panelOpenState = false; this.changeHeaderTest('Home');\">\r\n                <mat-expansion-panel-header>\r\n                  <mat-panel-title>\r\n                    Point Annotation\r\n                  </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n              </mat-expansion-panel><p></p>\r\n              \r\n                  <mat-expansion-panel (opened)=\"panelOpenState = true; this.changeHeaderTest('Development Tools');\"\r\n                                      (closed)=\"panelOpenState = false; this.changeHeaderTest('Home');\">\r\n                    <mat-expansion-panel-header>\r\n                      <mat-panel-title>\r\n                        Development Tools\r\n                      </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    <mat-accordion>\r\n                      <mat-expansion-panel (opened)=\"panelOpenState = true; this.changeHeaderTest('Development Tool | REPL');\"\r\n                                      (closed)=\"panelOpenState = false; this.changeHeaderTest('Development Tool');\">\r\n                    <mat-expansion-panel-header>\r\n                      <mat-panel-title>\r\n                        REPL\r\n                      </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    <mat-card-content>\r\n                      <form>\r\n                        <mat-form-field mat-form-field appearance=\"standard\">\r\n                          <input type=\"text\"\r\n                                id = \"replID\"\r\n                                placeholder=\"Command line\"\r\n                                aria-label=\"Number\"\r\n                                matInput\r\n                                [formControl]=\"myControl\"\r\n                                [matAutocomplete]=\"auto\">\r\n                          <mat-autocomplete #auto=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n                              {{option}}\r\n                            </mat-option>\r\n                          </mat-autocomplete>\r\n                        </mat-form-field>\r\n                      </form>\r\n                      <mat-card-actions>\r\n                        <button color=\"primary\" (click)=\"this.REPL()\" mat-raised-button>Run Command</button>\r\n                      </mat-card-actions>\r\n                    </mat-card-content>\r\n                  </mat-expansion-panel><p> </p>\r\n\r\n                  <mat-expansion-panel (opened)=\"panelOpenState = true; this.changeHeaderTest('Development Tool | Colour Intensity');\"\r\n                                (closed)=\"panelOpenState = false; this.changeHeaderTest('Development Tool');\">\r\n                    <mat-expansion-panel-header>\r\n                      <mat-panel-title>\r\n                        Colour Intensity\r\n                      </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    <button (click)=\"resetToDefault()\" color=\"primary\" mat-raised-button>\r\n                      Reset to default\r\n                    </button><p> </p>\r\n                    Invert\r\n                    <mat-slider\r\n                      thumbLabel\r\n                      (change)=\"this.onInvertChange($event)\"\r\n                      min=\"1\"\r\n                      max=\"100\"></mat-slider><p> </p>\r\n                    Hue\r\n                    <mat-slider\r\n                      thumbLabel\r\n                      (change)=\"this.onHueChange($event)\"\r\n                      min=\"0\"\r\n                      max=\"360\"></mat-slider><p> </p>\r\n                    Saturation\r\n                    <mat-slider\r\n                      thumbLabel\r\n                      (change)=\"this.onSaturationChange($event)\"\r\n                      min=\"1\"\r\n                      max=\"100\"></mat-slider><p> </p>\r\n                  </mat-expansion-panel><p> </p>\r\n\r\n                  \r\n                </mat-accordion>\r\n                <mat-expansion-panel (opened)=\"panelOpenState = true; this.changeHeaderTest('Development Tool | Colour Control');\"\r\n                                (closed)=\"panelOpenState = false; this.changeHeaderTest('Development Tool');\">\r\n                    <mat-expansion-panel-header>\r\n                      <mat-panel-title>\r\n                        Colour Colour\r\n                      </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                      Red\r\n                      <mat-slider\r\n                      thumbLabel\r\n                      (change)=\"this.redChange($event)\"\r\n                      min=\"0\"\r\n                      max=\"4096\"></mat-slider><p> </p>\r\n                      Green\r\n                      <mat-slider\r\n                      thumbLabel\r\n                      (change)=\"this.onGreenChange($event)\"\r\n                      min=\"0\"\r\n                      max=\"4096\"></mat-slider><p> </p>\r\n                      Blue\r\n                      <mat-slider\r\n                      thumbLabel\r\n                      (change)=\"this.onBlueChange($event)\"\r\n                      min=\"0\"\r\n                      max=\"4096\"></mat-slider><p> </p>\r\n                      Gamma\r\n                      <mat-slider\r\n                      thumbLabel\r\n                      (change)=\"this.ongammaChange($event)\"\r\n                      min=\"0.1\"\r\n                      step=\"0.1\"\r\n                      max=\"2\"></mat-slider><p> </p>\r\n                      Opacity\r\n                      <mat-slider\r\n                      thumbLabel\r\n                      (change)=\"this.onopacityChange($event)\"\r\n                      min=\"0.1\"\r\n                      step=\"0.1\"\r\n                      max=\"1\"></mat-slider><p> </p>\r\n                  </mat-expansion-panel><p> </p>\r\n              </mat-expansion-panel><p> </p>\r\n              \r\n\r\n\r\n              \r\n            </mat-accordion><p> </p>\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</mat-sidenav>\r\n\t\t\t\t<mat-sidenav-content>\r\n\t\t\t\t\t<mat-toolbar role=\"toolbar\" class=\"main-header mat-elevation-z1 sticky-header\">\r\n              <button mat-icon-button class=\"example-icon\" (click)=\"sidenav2.toggle()\"  aria-label=\"Example icon-button with menu icon\">\r\n                <mat-icon>menu</mat-icon>\r\n              </button>\r\n              <span>Next Gen Viewer</span>&nbsp;&nbsp;\r\n              <mat-chip-list aria-label=\"Fish selection\">\r\n                <mat-chip>{{ this.headerTest }}</mat-chip>\r\n              </mat-chip-list>\r\n              <!--<button (click)=\"this.deleteDrawing()\" mat-raised-button>\r\n                <mat-icon>undo</mat-icon>\r\n              </button>&nbsp;\r\n              <button (click)=\"this.redoDrawing()\" mat-raised-button>\r\n                <mat-icon>redo</mat-icon>\r\n              </button>&nbsp;\r\n              <button color=\"accent\" (click)=\"sidenav1.toggle(); sidenav7.toggle()\" mat-raised-button>\r\n                Toggle <mat-icon>settings</mat-icon>\r\n              </button>&nbsp;-->\r\n              <span class=\"example-spacer\"></span>\r\n              <p>  </p>\r\n              <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\r\n              <mat-icon>share</mat-icon>\r\n              </button>\r\n          </mat-toolbar>\r\n          <mat-progress-bar mode=\"determinate\" [value]=\"progress\" *ngIf=\"progress > 0\" ng-hide=\"progress==100\" class=\"progress-striped active\" color=\"warn\"></mat-progress-bar>\r\n  <!--<mat-progress-bar mode=\"{{this.progress}}\"></mat-progress-bar>-->\r\n          <div class=\"example-sidenav-content\">\r\n            <div id=\"map\" class=\"map\"></div>\r\n          </div> \r\n\r\n\t\t\t\t</mat-sidenav-content>\r\n\t\t\t</mat-sidenav-container>\r\n\t\t</mat-sidenav-content>\r\n\t</mat-sidenav-container>\r\n</div>");

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-slider {\r\n  width: 300px;\r\n}\r\n\r\n.mat-form-field {\r\n  margin-right: 12px;\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.example-container {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.example-map-container {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.example-sidenav-content {\r\n  display: flex;\r\n  width: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.example-sidenav {\r\n  padding: 20px;\r\n  overflow: hidden;\r\n}\r\n\r\n.example-card {\r\n  max-width: 400px;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.block-expansion {\r\n  overflow: hidden;\r\n}\r\n\r\n/* maps css */\r\n\r\n.map {\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n\r\n/* tabs css */\r\n\r\n.example-small-box, .example-large-box {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 16px;\r\n  padding: 16px;\r\n  border-radius: 8px;\r\n  width: 50px;\r\n}\r\n\r\n.example-small-box {\r\n  height: 300px;\r\n  width: 200px;\r\n}\r\n\r\n.example-large-box {\r\n  height: 100px;\r\n  width: 50px;\r\n}\r\n\r\n/* Slide toggle */\r\n\r\n.example-h2 {\r\n  margin: 10px;\r\n}\r\n\r\n.example-section {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n\r\n.example-margin {\r\n  margin: 10px;\r\n}\r\n\r\n.mat-expansion-panel.mat-expanded {\r\n  background:#2e2c2c;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtRkFBbUY7RUFDbkYsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLGFBQWE7O0FBQ2I7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBLGFBQWE7O0FBQ2I7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQSxpQkFBaUI7O0FBQ2pCO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXNsaWRlciB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLW1hcC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmV4YW1wbGUtc2lkZW5hdiB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5ibG9jay1leHBhbnNpb24ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIG1hcHMgY3NzICovXHJcbi5tYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi8qIHRhYnMgY3NzICovXHJcbi5leGFtcGxlLXNtYWxsLWJveCwgLmV4YW1wbGUtbGFyZ2UtYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zbWFsbC1ib3gge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1sYXJnZS1ib3gge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi8qIFNsaWRlIHRvZ2dsZSAqL1xyXG4uZXhhbXBsZS1oMiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtbWFyZ2luIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLm1hdC1leHBhbmRlZCB7XHJcbiAgYmFja2dyb3VuZDojMmUyYzJjO1xyXG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @turf/turf */ "./node_modules/@turf/turf/turf.min.js");
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_turf_turf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/View */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/source/OSM */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ol_source_Stamen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/source/Stamen */ "./node_modules/ol/source/Stamen.js");
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/interaction */ "./node_modules/ol/interaction.js");
/* harmony import */ var ol_ol_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/ol.css */ "./node_modules/ol/ol.css");
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");
/* harmony import */ var ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/interaction/Draw */ "./node_modules/ol/interaction/Draw.js");
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");
/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");
/* harmony import */ var ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/format/GeoJSON */ "./node_modules/ol/format/GeoJSON.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ol_source_Zoomify__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ol/source/Zoomify */ "./node_modules/ol/source/Zoomify.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var ol_Feature__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ol/Feature */ "./node_modules/ol/Feature.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _replservice_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./replservice.service */ "./src/app/replservice.service.ts");
/* harmony import */ var polygon_clipping__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! polygon-clipping */ "./node_modules/polygon-clipping/dist/polygon-clipping.umd.js");
/* harmony import */ var polygon_clipping__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(polygon_clipping__WEBPACK_IMPORTED_MODULE_23__);
























let AppComponent = class AppComponent {
    constructor(_snackBar, httpClient, replserviceService) {
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.replserviceService = replserviceService;
        this.treeRegion = 0;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"]();
        this.options = ['turnOnGEOJson', 'turnOffGEOJson', 'savePolygons', 'retrievePolygons', 'loadPolygons'];
        this.lastRegionID = -1;
        this.featureStack = [];
        this.lastol_uid = 0;
        this.last_size = 0;
        this.addpixel = true;
        this.category = null;
        this.lastAtlasSize = 0;
        this.headerTest = "Home";
        this.selectedValue = 'nissl';
        this.progress = 0;
        this.tracers = [
            { value: 'fluro', viewValue: 'Fluro' },
            { value: 'nissl', viewValue: 'Nissl' }
        ];
        //json format
        this.saveJson = {
            "firstpassAtlas": {},
            "userActions": [],
            "outputCombine": {}
        };
        this.resetToDefault = () => {
            const that = this;
            that.invertString = 0;
            that.HueString = 0;
            that.SaturationString = 100;
            this.map.on('postcompose', function (e) {
                console.log("imhere", this.invertValue);
                document.querySelector('canvas').style.filter = "";
            });
        };
        this.savePolygonsToDatabase = () => {
            //const coordinates = this.map.getLayers().item(1).getSource().getFeatures()[0].values_.geometry.flatCoordinates;
            //const type = this.map.getLayers().item(1).getSource().getFeatures()[0].getGeometry().getType();
            var writer = new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_14__["default"]();
            /*const data = {
              'string': "geojsonStr",
              "geometry": {
                "type": "Polygon",
                "coordinates": coordinates,
              },
            };*/
            var outObj_atlas;
            console.log(this.category);
            if (this.category == "Injection" && this.lastol_uid != 0) {
                this.combine();
                var feature = this.featureStack[0];
                feature.setId(255);
                console.log(feature, this.featureStack);
                var geojsonStr = writer.writeFeatures([feature]);
                outObj_atlas = {
                    imagename: this.brainIdPm,
                    series_id: "" + this.brainID,
                    section_id: "" + this.secNo,
                    section: "" + this.secNo,
                    category: "injreg",
                    tracername: "R",
                    injection: undefined
                };
                outObj_atlas.injection = geojsonStr;
                //http://3.235.171.52/webtools/webtools/seriesbrowser/deleteatlas_status_wp/?brain_id=2495&section=90
                var apifunName = 'saveinjection_status_wp/';
                console.log("save works", geojsonStr, outObj_atlas);
                console.log("series", this.PMDID.slice(3, 8), this.brainID, this.secNo, outObj_atlas);
            }
            else if (this.category == "Atlas") {
                outObj_atlas = {
                    imagename: parseInt(this.PMDID.slice(3, 8)),
                    series_id: "" + this.brainID,
                    section_id: "" + this.secNo,
                    section: "" + this.secNo,
                    category: "atlas",
                    atlas: undefined
                };
                var feature = this.modifyVector.getSource().getFeatures();
                var geojsonStr = writer.writeFeatures(feature);
                outObj_atlas.atlas = JSON.stringify(geojsonStr); //JSON.stringify(geojsonStr);
                console.log(feature, "features");
                //http://3.235.171.52/webtools/webtools/seriesbrowser/deleteatlas_status_wp/?brain_id=2495&section=90
                var apifunName = 'saveatlas_status_wp/';
                console.log("save works", geojsonStr, outObj_atlas);
                console.log("series", this.PMDID.slice(3, 8), this.brainID, this.secNo);
            }
            var saveurl = "http://3.235.171.52/webtools/webtools/seriesbrowser/";
            $.ajax({
                url: saveurl + apifunName,
                dataType: 'json',
                async: false,
                data: { 'msg': JSON.stringify(outObj_atlas) },
                method: "POST",
                success: function (response) {
                    try {
                        //response = JSON.parse(response);
                        if (response.status == 0) {
                            // resp = response.data;
                            // dmsg = "Saved action : " + resp.state;
                            var dmsg = "Success saving atlas";
                            console.log(dmsg, response);
                            //displayMessage(dmsg,true);
                            //closeMessage(true);
                            //app.atlas_loaded = false;
                            //refreshOL();
                        }
                        else {
                            //failMessage('Saving failed : ' + response.error);
                            console.log("error in saving", response.error);
                            return;
                        }
                    }
                    catch (exc) {
                        //failMessage('Exception : ' + exc.message);
                        console.log('Exception in save : ' + exc.message);
                        console.log(dmsg, response);
                        return;
                    }
                },
                fail: function (xhr, status, error) {
                    //failMessage('Saving failed : ' + error);
                }
            });
            /*$(function () {
              // 6 create an instance when the DOM is ready
              function nodeExpand(node){
                if (node.children.length === 0)
                  return {text:node.name,...node};
                else
                  for(var i=0;i<node.children.length;i++){
                    node.children[i] = nodeExpand(node.children[i]);
                  }
                  return {text:node.name,...node};
              }
              $(".search-input").keyup(function () {
                var searchString = $(this).val();
                $('#atlas_info').jstree('search', searchString);
              });
            
              $.getJSON('https://raw.githubusercontent.com/Sai-Adarsh/viewer-geojson/main/h.json',function(jsonresponse) {
                var dataNode=nodeExpand(jsonresponse.msg[0]);
                $('#atlas_info')
                .on("changed.jstree", function (e, data) {
                  if(data.selected.length) {
                    //alert('The selected node is: ' + data.instance.get_node(data.selected[0]).text);
                    //console.log(data.selected);
        
                    console.log('The selected node is: ' + data.selected[0]);//data.instance.get_node(data.selected[0]).text);
                    // if(data.selected.length == 1)
                    //   drawAtlasRegion(data.selected);
                    // else{
                    //   failMessage('<h5>Please select only one</h5>');
                    //   return;
                    // }
                  }
                })
                .jstree({
                  "plugins" : ["search"],
                  'core' : {
                    'themes': {
                      'name': 'proton',
                      'responsive': true,
                      'icons': false,
                      'variant': 'large',
                      'dots': true,
                    },
                    'multiple': false,
                    // 'check_callback': true,
                    'data' :function(node,cb){
                          if(node.id === '#'){
                            cb({...dataNode},dataNode.children);
                            }
                        }
                  },
                  "search": {
                    "case_insensitive": true,
                    "show_only_matches" : true
                  }});
              })
            });*/
            //const db = firebase.database().ref().child("vector").push(geojsonStr);
        };
        this.retrievePolygonsFromDatabase = () => {
            console.log("works here");
            var reader = new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_14__["default"]();
            /*firebase.database().ref('vector').once('value', snapshot => {
              var items = [];
              snapshot.forEach((child) => {
                items.push(child.val());
              });
              this.loadedFeature = items[items.length - 1];
            }).then( () => {
              this.loadPolygonsFromFirebase()
            });*/
            var flag = 0;
            var saveurl = "http://3.235.171.52/webtools/webtools/seriesbrowser/";
            var source = this.vector.getSource();
            if (this.category == "Injection") {
                saveurl = saveurl + 'getinjectionregion_status_wp/PMD' + this.brainIdPm + '/' + this.secNo + '/' + "R/";
                flag = 1;
            }
            $.getJSON(saveurl, function (jsonresponse) {
                console.log(jsonresponse);
                try {
                    console.log(this.category);
                    if (flag) {
                        var features = jsonresponse.data.features[0];
                        console.log(features, jsonresponse);
                        features = reader.readFeatures(features);
                        console.log(features);
                        features[0].setStyle(this.styleAdd);
                        source.addFeature(features[0]);
                        console.log(source.getFeatures());
                        this.featureStack = [features[0]];
                        this.vector.setSource(source);
                    }
                }
                catch (exec) {
                    console.log("Error in Loading Injection region data ", exec.stack);
                }
            });
        };
        this.loadPolygonsFromFirebase = () => {
            console.log(this.loadedFeature);
            var reader = new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_14__["default"]();
            const newGeoJson = reader.readFeatures(this.loadedFeature);
            console.log("works here", newGeoJson);
            var i;
            for (i = 0; i < newGeoJson.length; i++) {
                this.vector.getSource().addFeature(newGeoJson[i]);
            }
            //this.vector.getSource().addFeature(newGeoJson[0]);
        };
        this.onInvertChange = (event) => {
            const that = this;
            that.invertString = event.value;
            console.log(that.invertString);
            this.map.on('postcompose', function (e) {
                this.invertValue = "invert(" + that.invertString + "%) " + "hue-rotate(" + that.HueString + "deg) " + "saturate(" + that.SaturationString + "%)";
                console.log("imhere", this.invertValue);
                document.querySelector('canvas').style.filter = this.invertValue;
            });
        };
        this.onHueChange = (event) => {
            const that = this;
            that.HueString = event.value;
            this.map.on('postcompose', function (e) {
                this.invertValue = "invert(" + that.invertString + "%) " + "hue-rotate(" + that.HueString + "deg) " + "saturate(" + that.SaturationString + "%)";
                console.log("imhere", this.invertValue);
                document.querySelector('canvas').style.filter = this.invertValue;
            });
        };
        this.onSaturationChange = (event) => {
            const that = this;
            that.SaturationString = event.value;
            this.map.on('postcompose', function (e) {
                this.invertValue = "invert(" + that.invertString + "%) " + "hue-rotate(" + that.HueString + "deg) " + "saturate(" + that.SaturationString + "%)";
                console.log("imhere", this.invertValue);
                document.querySelector('canvas').style.filter = this.invertValue;
            });
        };
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
    changeHeaderTest(message) {
        this.headerTest = message;
        console.log(this.headerTest);
        if (message == "Injection Region") {
            this.category = "Injection";
        }
        if (message == "Atlas") {
            this.category = "Atlas";
        }
    }
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["map"])(value => this._filter(value)));
        $(() => {
            // 6 create an instance when the DOM is ready
            function nodeExpand(node) {
                if (node.children.length === 0)
                    return Object.assign({ text: node.name }, node);
                else
                    for (var i = 0; i < node.children.length; i++) {
                        node.children[i] = nodeExpand(node.children[i]);
                    }
                return Object.assign({ text: node.name }, node);
            }
            $(".search-input").keyup(function () {
                var searchString = $(this).val();
                $('#atlas_info').jstree('search', searchString);
            });
            $.getJSON('https://raw.githubusercontent.com/Sai-Adarsh/viewer-geojson/main/h.json', (jsonresponse) => {
                var dataNode = nodeExpand(jsonresponse.msg[0]);
                $('#atlas_info')
                    .on("changed.jstree", (e, data) => {
                    if (data.selected.length) {
                        //alert('The selected node is: ' + data.instance.get_node(data.selected[0]).text);
                        //console.log(data.selected);
                        this.treeRegion = data.selected[0];
                        console.log(this.treeRegion);
                        console.log('The selected node is: ' + data.selected[0]); //data.instance.get_node(data.selected[0]).text);
                        this.displayFeatures();
                        // if(data.selected.length == 1)
                        //   drawAtlasRegion(data.selected);
                        // else{
                        //   failMessage('<h5>Please select only one</h5>');
                        //   return;
                        // }
                    }
                })
                    .jstree({
                    "plugins": ["search"],
                    'core': {
                        'themes': {
                            'name': 'proton',
                            'responsive': true,
                            'icons': false,
                            'variant': 'large',
                            'dots': true,
                        },
                        'multiple': false,
                        // 'check_callback': true,
                        'data': function (node, cb) {
                            if (node.id === '#') {
                                cb(Object.assign({}, dataNode), dataNode.children);
                            }
                        }
                    },
                    "search": {
                        "case_insensitive": true,
                        "show_only_matches": true
                    }
                });
            });
        });
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
    /**
     * Initialise the map.
     */
    ngAfterViewInit() {
        this.firebaseConfig = {
            apiKey: "AIzaSyA_rPzl1D8YouEsSJ1AjQwElFqH_mxOAFI",
            authDomain: "realtime-4a7de.firebaseapp.com",
            databaseURL: "https://realtime-4a7de.firebaseio.com",
            projectId: "realtime-4a7de",
            storageBucket: "realtime-4a7de.appspot.com",
            messagingSenderId: "624733681109",
            appId: "1:624733681109:web:ab5c7b2277fbf1ffd6b95c",
            measurementId: "G-W109P6TCZL"
        };
        if (!firebase__WEBPACK_IMPORTED_MODULE_19__["default"].apps.length) {
            firebase__WEBPACK_IMPORTED_MODULE_19__["default"].initializeApp(this.firebaseConfig);
        }
        this.defaultGeoJSONSecNo = 60;
        this.secNo = 60;
        this.brainID = 4958;
        this.PMDID = 'PMD2495';
        this.brainIdPm = 2495;
        this.sources = {
            osm: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_6__["default"](),
            stamen: new ol_source_Stamen__WEBPACK_IMPORTED_MODULE_7__["default"]({ layer: 'toner' }),
            vector: new ol_source__WEBPACK_IMPORTED_MODULE_12__["Vector"]({
                url: 'http://mitradevel.cshl.org/webtools/seriesbrowser/getatlasgeojson/PMD2057/0025/',
                format: new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_14__["default"](),
                wrapX: false,
            })
        };
        this.delVector = new ol_source__WEBPACK_IMPORTED_MODULE_12__["Vector"]({
            wrapX: false
        });
        this.layerTile = new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_5__["default"]({
            source: this.sources.osm
        });
        this.vectorSource = new ol_source__WEBPACK_IMPORTED_MODULE_12__["Vector"]({
            wrapX: false
        });
        this.vector = new ol_layer__WEBPACK_IMPORTED_MODULE_13__["Vector"]({
            source: this.vectorSource,
        });
        this.modifyVector = new ol_layer__WEBPACK_IMPORTED_MODULE_13__["Vector"]({
            source: new ol_source__WEBPACK_IMPORTED_MODULE_12__["Vector"]({
                url: 'http://mitradevel.cshl.org/webtools/seriesbrowser/getatlasgeojson/PMD2057/0025/',
                format: new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_14__["default"](),
                wrapX: false,
            }),
        });
        this.modifyVector.getStyle().apply();
        this.select = new ol_interaction__WEBPACK_IMPORTED_MODULE_8__["Select"]({
            wrapX: false,
        });
        this.modify = new ol_interaction__WEBPACK_IMPORTED_MODULE_8__["Modify"]({
            features: this.select.getFeatures(),
        });
        this.draw = new ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_11__["default"]({
            source: this.vector.getSource(),
            type: 'Polygon',
            freehand: true,
        });
        this.styleAdd = new ol_style__WEBPACK_IMPORTED_MODULE_10__["Style"]({
            fill: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Fill"]({
                color: 'rgba(0, 255, 0, 0.1)',
            }),
            stroke: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Stroke"]({
                color: '#28a745',
                width: 3,
            }),
            image: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Circle"]({
                radius: 7,
                fill: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Fill"]({
                    color: '#28a745'
                }),
                stroke: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Stroke"]({
                    color: 'white',
                    width: 2,
                }),
            })
        });
        this.styleErase = new ol_style__WEBPACK_IMPORTED_MODULE_10__["Style"]({
            fill: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Fill"]({
                color: 'rgba(255, 170, 70, 0.1)',
            }),
            stroke: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Stroke"]({
                color: '#f0ad4e',
                width: 3,
            }),
            image: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Circle"]({
                radius: 7,
                fill: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Fill"]({
                    color: '#f0ad4e'
                }),
                stroke: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Stroke"]({
                    color: 'white',
                    width: 2,
                }),
            })
        });
        this.addPolygon = new ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_11__["default"]({
            source: this.vector.getSource(),
            type: "Polygon",
            style: this.styleAdd,
        });
        this.erasePolygon = new ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_11__["default"]({
            source: this.vector.getSource(),
            type: "Polygon",
            style: this.styleErase,
        });
        this.addpixelpoly = new ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_11__["default"]({
            source: this.vector.getSource(),
            type: "Polygon",
            style: this.styleAdd,
            name: "addRegion",
        });
        this.defaultURL = 'http://braincircuits.org/cgi-bin/iipsrv.fcgi?FIF=/PMD2495/PMD2495%262494-F20-2016.02.26-23.11.41_PMD2495_3_0060.jp2&GAM=1&MINMAX=1:0,255&MINMAX=2:0,255&MINMAX=3:0,255&JTL={z},{tileIndex}';
        this.httpClient.get('http://mitradevel.cshl.org/webtools/seriesbrowser/getthumbnails/4958/').subscribe(res => {
            this.urlData = res;
        });
        this.zoomifySource = new ol_source_Zoomify__WEBPACK_IMPORTED_MODULE_17__["default"]({
            url: this.defaultURL,
            size: [24000, 24000],
            crossOrigin: 'anonymous',
            zDirection: -1,
        });
        this.extent = this.zoomifySource.getTileGrid().getExtent();
        this.imagery = new ol_layer__WEBPACK_IMPORTED_MODULE_13__["Tile"]({
            source: this.zoomifySource,
        });
        this.switchLayer = [
            this.layerTile, this.vector, this.modifyVector
        ];
        this.zoomifyLayer = [
            this.imagery, this.modifyVector, this.vector
        ];
        this.modifyVector.setVisible(false);
        this.redoStack = [];
        this.invertString = 0;
        this.HueString = 0;
        this.SaturationString = 100;
        this.invertValue = "";
        this.individualRegion = 'http://mitradevel.cshl.org/webtools/seriesbrowser/getatlasgeojson/PMD2495/0060/';
        this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_3__["default"]({
            target: 'map',
            interactions: Object(ol_interaction__WEBPACK_IMPORTED_MODULE_8__["defaults"])().extend([this.select, this.modify,]),
            layers: this.zoomifyLayer,
            view: new ol_View__WEBPACK_IMPORTED_MODULE_4__["default"]({
                resolutions: this.imagery.getSource().getTileGrid().getResolutions(),
                zoom: 2,
                extent: this.extent,
                constrainResolution: true
            }),
        });
        this.map.getView().fit(this.extent);
        this.addPolygon.setActive(false);
        this.erasePolygon.setActive(false);
        this.vector.on("prerender", (event) => {
            this.setPolyStyle();
        });
    }
    setPolyStyle() {
        var vector_sr = this.vector.getSource();
        var features = vector_sr.getFeatures();
        var bugFeature = new ol_Feature__WEBPACK_IMPORTED_MODULE_20__["default"];
        console.log(features, "features", this.addpixelpoly.getActive());
        if (parseInt(features[features.length - 1].ol_uid) > this.lastol_uid == true) {
            console.log(features, "yuy", this.addpixelpoly);
            if (this.addpixelpoly.getActive()) {
                console.log(this.addpixelpoly.getActive());
                var vectorM_sr = this.modifyVector.getSource();
                var featuresM = vectorM_sr.getFeatures();
                var format = new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_14__["default"]();
                var turfpoly;
                var last = _turf_turf__WEBPACK_IMPORTED_MODULE_2__["polygon"]([]);
                if (this.treeRegion != 0) {
                    var featureSelected = this.modifyVector.getSource().getFeatureById(this.treeRegion);
                    var feature = features[features.length - 1];
                    console.log(feature, "last");
                    feature = format.writeFeatureObject(feature);
                    turfpoly = format.writeFeatureObject(featureSelected);
                    turfpoly = _turf_turf__WEBPACK_IMPORTED_MODULE_2__["multiPolygon"](_turf_turf__WEBPACK_IMPORTED_MODULE_2__["cleanCoords"](turfpoly).geometry.coordinates);
                    console.log(feature, turfpoly.geometry.coordinates, _turf_turf__WEBPACK_IMPORTED_MODULE_2__["buffer"](turfpoly, 0));
                    turfpoly = _turf_turf__WEBPACK_IMPORTED_MODULE_2__["union"](turfpoly, feature);
                    console.log("union", turfpoly);
                }
            }
            if (this.erasePolygon.getActive() == true && features[features.length - 1].getStyle() == null) { //check if style is already set
                features[features.length - 1].setStyle(this.styleErase);
                features[features.length - 1].set("name", "erase");
                this.featureStack.push(features[features.length - 1]);
                var format = new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_14__["default"]();
                var temp = { "action": "Erase", "geoJson": JSON.parse(format.writeFeatures([features[features.length - 1]])) };
                this.saveJson["userActions"].push(temp);
                this.lastol_uid = parseInt(features[features.length - 1].ol_uid);
                this.last_size = this.last_size + 1;
            }
            else if (this.addPolygon.getActive() == true && features[features.length - 1].getStyle() == null) { //check if style is already set
                features[features.length - 1].setStyle(this.styleAdd);
                features[features.length - 1].set("name", "add");
                this.featureStack.push(features[features.length - 1]);
                var format = new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_14__["default"]();
                var temp = { "action": "Add", "geoJson": JSON.parse(format.writeFeatures([features[features.length - 1]])) };
                this.saveJson["userActions"].push(temp);
                this.lastol_uid = parseInt(features[features.length - 1].ol_uid);
                this.last_size = this.last_size + 1;
            }
        }
        else if (features.length > this.last_size) { // the feature in vector source are not ordered due to last feature added to vector.
            var flag = 0;
            for (var i = 0; i < features.length; i++) {
                if (parseInt(features[i].ol_uid) > this.lastol_uid) { //get the feature which caused disorder in vector source
                    bugFeature = features[i];
                    flag = 1;
                    vector_sr.removeFeature(vector_sr.getFeatureByUid(features[i].ol_uid));
                }
            }
            if (flag == 1) {
                if (this.addPolygon.getActive() == true) {
                    bugFeature.setStyle(this.styleAdd);
                    bugFeature.set("name", "add");
                }
                else {
                    bugFeature.setStyle(this.styleErase);
                    bugFeature.set("name", "erase");
                }
                vector_sr.addFeature(bugFeature);
                this.featureStack.push(bugFeature);
                var temp = { "action": "Erase", "geoJson": JSON.parse(format.writeFeatures([bugFeature])) };
                this.saveJson["userActions"].push(temp);
                this.last_size = this.last_size + 1;
                this.lastol_uid = parseInt(bugFeature.ol_uid);
            }
        }
    }
    onClick(event) {
        this.modifyVector.getSource().clear();
        this.progress = 10;
        if (event == 'show') {
            this.lastChecked = true;
            this.httpClient.get('http://3.235.171.52/webtools/webtools/seriesbrowser/getatlasgeojson_status_wp/' + this.PMDID + '/00' + this.defaultGeoJSONSecNo + '/').subscribe(res => {
                var atlasstyle = new ol_style__WEBPACK_IMPORTED_MODULE_10__["Style"]({
                    fill: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Fill"]({
                        color: 'rgba(255, 255, 255, 0)'
                    }),
                    stroke: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Stroke"]({
                        color: 'white',
                        width: 0.5
                    }),
                    text: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Text"]({
                        font: '12px Calibri,sans-serif',
                        fill: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Fill"]({
                            color: 'white'
                        }),
                        stroke: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Stroke"]({
                            color: 'white',
                            width: 0.5
                        })
                    })
                });
                this.progress = 50;
                console.log(this.defaultGeoJSONSecNo);
                console.log("res", res);
                //console.log(JSON.parse(res["data"]))
                res = res["data"];
                var reader = new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_14__["default"]();
                var data = res;
                const newGeoJson = reader.readFeatures(res);
                var i;
                console.log("new", newGeoJson);
                for (i = 0; i < newGeoJson.length; i++) {
                    newGeoJson[i].setStyle(atlasstyle);
                    this.modifyVector.getSource().addFeature(newGeoJson[i]);
                    this.lastAtlasSize += this.lastAtlasSize;
                }
                this.progress = 80;
                setTimeout(() => {
                    this.endprogress();
                }, 2000);
            });
            this.modifyVector.setVisible(true);
        }
        else {
            this.progress = 0;
            this.lastChecked = false;
            this.modifyVector.setVisible(false);
        }
    }
    displayFeatures() {
        var defaultStyle = new ol_style__WEBPACK_IMPORTED_MODULE_10__["Style"]({
            fill: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Fill"]({
                color: 'transparent'
            }),
            stroke: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Stroke"]({
                color: '#000',
                width: 2
            }),
            text: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Text"]({
                font: '12px Calibri,sans-serif',
                fill: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Fill"]({
                    color: '#000'
                }),
                stroke: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Stroke"]({
                    color: '#fff',
                    width: 3
                })
            })
        });
        if (this.lastRegionID != -1) {
            this.modifyVector.getSource().getFeatureById(this.lastRegionID).setStyle(defaultStyle);
        }
        var atlasstyle = new ol_style__WEBPACK_IMPORTED_MODULE_10__["Style"]({
            fill: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Fill"]({
                color: 'rgba(255, 255, 255, 0.4)'
            }),
            stroke: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Stroke"]({
                color: '#2F7B63',
                width: 3
            }),
            text: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Text"]({
                font: '12px Calibri,sans-serif',
                fill: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Fill"]({
                    color: 'white'
                }),
                stroke: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Stroke"]({
                    color: 'white',
                    width: 0.5
                })
            })
        });
        console.log(this.modifyVector);
        this.modifyVector.getSource().getFeatureById(this.treeRegion).setStyle(atlasstyle);
        //this.modifyVector.getSource().addFeature(newGeoJson[newGeoJson.length - 1]);
        //this.modifyVector.getSource().getFeatureById(this.treeRegion).setStyle(atlasstyle);
        //newGeoJson[newGeoJson.length - 1].setStyle(atlasstyle);
        this.lastRegionID = this.treeRegion;
        console.log(this.treeRegion, this.individualRegion);
    }
    addPolygons() {
        this.draw.setActive(false);
        this.erasePolygon.setActive(false);
        this.addPolygon.setActive(true);
        this.addpixelpoly.setActive(false);
        this.map.addInteraction(this.addPolygon);
    }
    erasePolygons() {
        this.draw.setActive(false);
        this.addPolygon.setActive(false);
        this.erasePolygon.setActive(true);
        this.addpixelpoly.setActive(false);
        this.map.addInteraction(this.erasePolygon);
    }
    addpixelpolyfun() {
        this.draw.setActive(false);
        this.addPolygon.setActive(false);
        this.erasePolygon.setActive(false);
        this.addpixelpoly.setActive(true);
        this.map.addInteraction(this.addpixelpoly);
    }
    combine() {
        var vector_sr = this.vector.getSource();
        var features = this.featureStack;
        var format = new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_14__["default"]();
        var turfpoly;
        var polygon;
        var count = 0;
        var sty = new ol_style__WEBPACK_IMPORTED_MODULE_10__["Style"]({
            fill: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Fill"]({
                color: 'rgba(0,255,255, 0.1)',
            }),
            stroke: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Stroke"]({
                color: '	#00FFFF',
                width: 3,
            })
        });
        var last = _turf_turf__WEBPACK_IMPORTED_MODULE_2__["polygon"]([]);
        for (var i = 0; i < features.length; i++) {
            turfpoly = format.writeFeatureObject(features[i]);
            if (count > 0) {
                if (features[i].get('name') == "add") {
                    var uid = features[i].ol_uid;
                    console.log(uid, "uid");
                    console.log(vector_sr.getFeatures(), "feas", polygon);
                    vector_sr.removeFeature(vector_sr.getFeatureByUid(uid));
                    //console.log(isIntersected," check");
                    polygon = _turf_turf__WEBPACK_IMPORTED_MODULE_2__["union"](polygon, turfpoly);
                    console.log(polygon, "p");
                }
                else if (count > 0 && features[i].get('name') == "erase") {
                    var uid = features[i].ol_uid;
                    vector_sr.removeFeature(vector_sr.getFeatureByUid(uid));
                    last = polygon;
                    polygon = _turf_turf__WEBPACK_IMPORTED_MODULE_2__["difference"](polygon, turfpoly);
                    if (polygon == null) {
                        //console.log(turf.getCoords(polygon)[0],"points");
                        //var points = turf.points(turf.getCoords(polygon)[0]);
                        //var len = points.features.length;
                        //if(false && turf.pointsWithinPolygon(points,turfpoly).features.length==len){
                        //  polygon = turf.difference(polygon,turfpoly);
                        //}
                        //else{
                        //polygon = turf.difference(turf.toWgs84(polygon),turf.toWgs84(turfpoly));//
                        var poly1 = _turf_turf__WEBPACK_IMPORTED_MODULE_2__["getCoords"](last);
                        var poly2 = _turf_turf__WEBPACK_IMPORTED_MODULE_2__["getCoords"](turfpoly);
                        var polyDiff;
                        polyDiff = polygon_clipping__WEBPACK_IMPORTED_MODULE_23__["difference"](poly1, poly2);
                        polyDiff = _turf_turf__WEBPACK_IMPORTED_MODULE_2__["multiPolygon"](polyDiff);
                        polygon = polyDiff;
                        //} 
                    }
                }
            }
            else {
                var uid = features[i].ol_uid;
                vector_sr.removeFeature(vector_sr.getFeatureByUid(uid));
                polygon = format.writeFeatureObject(features[i]);
                console.log(polygon, "p");
                count = count + 1;
            }
        }
        if (count > 0 && polygon != null) {
            polygon = format.readFeatures(polygon)[0];
            polygon.setStyle(sty);
            this.lastol_uid = parseInt(polygon.ol_uid);
            this.last_size = 1;
            this.featureStack = [polygon];
            console.log(this.featureStack);
            vector_sr.addFeature(polygon);
        }
        //console.log(vector_sr.getFeatures());
        this.vector.setSource(vector_sr);
        this.saveJson["outputCombine"] = JSON.parse(format.writeFeatures(features));
    }
    addInteraction(interactionType) {
        this.draw.setActive(true);
        this.addPolygon.setActive(false);
        this.erasePolygon.setActive(false);
        this.addpixelpoly.setActive(false);
        this.draw = new ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_11__["default"]({
            source: this.vector.getSource(),
            type: interactionType,
            freehand: true,
        });
        if (interactionType == "Polygon") {
            this.draw = this.draw;
            this.draw.set("name", "addpixel");
        }
        this.map.addInteraction(this.draw);
    }
    removeInteraction() {
        this.draw.setActive(false);
        this.addPolygon.setActive(false);
        this.erasePolygon.setActive(false);
        this.map.removeInteraction(this.draw);
        this.addpixelpoly.setActive(false);
    }
    deleteDrawing() {
        try {
            this.toBeDeleted = this.vector.getSource().getFeatures()[this.vector.getSource().getFeatures().length - 1];
            this.vector.getSource().removeFeature(this.toBeDeleted);
            this.redoStack.push(this.toBeDeleted);
            console.log(this.redoStack);
        }
        catch (error) {
            console.log("No more undos");
        }
    }
    redoDrawing() {
        try {
            this.toBeRedrawn = this.redoStack[this.redoStack.length - 1];
            this.vector.getSource().addFeature(this.toBeRedrawn);
            this.redoStack.pop();
        }
        catch (error) {
            console.log("No more redos");
        }
    }
    getBrainIDUpdated(event) {
        this.brainID = parseInt(event.target.value);
        this.brainIdPm = parseInt(event.target.value);
        console.log("brainid", this.brainID);
    }
    emailUpdated(event) {
        this.secNo = parseInt(event.target.value);
        this.defaultGeoJSONSecNo = parseInt(event.target.value);
        console.log("section", this.secNo);
    }
    endprogress() {
        this.progress = 0;
    }
    brainIDUpdated() {
        this.progress = 10;
        this.modifyVector.setVisible(false);
        console.log(this.brainID, this.secNo);
        var series_id = 0;
        this.httpClient.get('http://mitradevel.cshl.org/webtools/seriesbrowser/getseriesid_status_wp/' + this.brainIdPm + '/').subscribe(res => {
            console.log(res);
            this.brainID = res["data"]["F"];
        });
        this.httpClient.get('http://mitradevel.cshl.org/webtools/seriesbrowser/getthumbnails/' + this.brainID + '/').subscribe(res => {
            this.urlData = res;
            console.log("here", res);
            this.PMDID = this.urlData.F[this.secNo][1].split('/brainimg')[1].slice(1, 8);
            var newURL = "http://braincircuits.org/cgi-bin/iipsrv.fcgi?FIF=" + this.urlData.F[this.secNo][1].split('/brainimg')[1].replace("&", "%26").replace("jpg", "jp2") + "&GAM=1&MINMAX=1:0,255&MINMAX=2:0,255&MINMAX=3:0,255&JTL={z},{tileIndex}";
            this.zoomifySource = new ol_source_Zoomify__WEBPACK_IMPORTED_MODULE_17__["default"]({
                url: newURL,
                size: [24000, 18000],
                crossOrigin: 'anonymous',
                zDirection: -1,
            });
            this.defaultURL = newURL;
            this.imagery.setSource(this.zoomifySource);
            this.progress = 50;
            console.log(this.defaultURL);
            if (this.selectedValue == 'nissl') {
                var event = {
                    checked: true,
                };
                this.onToggleTracer(event);
            }
            else {
                var event = {
                    checked: false,
                };
                this.onToggleTracer(event);
            }
            this.progress = 100;
            setTimeout(() => {
                this.endprogress();
            }, 2000);
        });
        this.progress = 100;
        console.log(this.lastChecked, this.defaultGeoJSONSecNo);
        if (this.lastChecked == true) {
            var newUrl = "http://3.235.171.52//webtools/webtools/seriesbrowser/getatlasgeojson_status_wp/";
            //'http://mitradevel.cshl.org/webtools/seriesbrowser/getatlasgeojson/'
            this.httpClient.get(newUrl + this.PMDID + '/00' + this.defaultGeoJSONSecNo + '/').subscribe(res => {
                var atlasstyle = new ol_style__WEBPACK_IMPORTED_MODULE_10__["Style"]({
                    fill: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Fill"]({
                        color: 'rgba(255, 255, 255, 0)'
                    }),
                    stroke: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Stroke"]({
                        color: 'white',
                        width: 0.5
                    }),
                    text: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Text"]({
                        font: '12px Calibri,sans-serif',
                        fill: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Fill"]({
                            color: 'white'
                        }),
                        stroke: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Stroke"]({
                            color: 'white',
                            width: 0.5
                        })
                    })
                });
                console.log("check geojson", this.defaultGeoJSONSecNo, res);
                res = JSON.stringify(res);
                var reader = new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_14__["default"]();
                const newGeoJson = reader.readFeatures(res);
                this.modifyVector.getSource().clear();
                var i;
                this.lastAtlasSize = 0;
                for (i = 0; i < newGeoJson.length; i++) {
                    newGeoJson[i].setStyle(atlasstyle);
                    this.modifyVector.getSource().addFeature(newGeoJson[i]);
                    this.lastAtlasSize += 1;
                }
            });
            this.modifyVector.setVisible(true);
        }
        console.log("progres", this.progress);
        if (this.progress == 100) {
            this.progress = 0;
            console.log("reached 100");
        }
    }
    onToggleTracer(event) {
        if (event.checked == true) {
            this.httpClient.get('http://mitradevel.cshl.org/webtools/seriesbrowser/getthumbnails/' + this.brainID + '/').subscribe(res => {
                this.urlData = res;
                console.log(res);
                var toggleSecNo;
                if (this.secNo - 4 < 0) {
                    toggleSecNo = 0;
                }
                else {
                    toggleSecNo = this.secNo - 4;
                }
                var newURL = "http://braincircuits.org/cgi-bin/iipsrv.fcgi?FIF=" + this.urlData.N[toggleSecNo][1].split('/brainimg')[1].replace("&", "%26").replace("jpg", "jp2") + "&GAM=1&MINMAX=1:0,255&MINMAX=2:0,255&MINMAX=3:0,255&JTL={z},{tileIndex}";
                this.zoomifySource = new ol_source_Zoomify__WEBPACK_IMPORTED_MODULE_17__["default"]({
                    url: newURL,
                    size: [24000, 24000],
                    crossOrigin: 'anonymous',
                    zDirection: -1,
                });
                this.defaultURL = newURL;
                this.imagery.setSource(this.zoomifySource);
                console.log(this.defaultURL);
            });
            console.log(this.defaultURL, this.urlData);
        }
        else {
            this.httpClient.get('http://mitradevel.cshl.org/webtools/seriesbrowser/getthumbnails/' + this.brainID + '/').subscribe(res => {
                this.urlData = res;
                console.log(res);
                var newURL = "http://braincircuits.org/cgi-bin/iipsrv.fcgi?FIF=" + this.urlData.F[this.secNo][1].split('/brainimg')[1].replace("&", "%26").replace("jpg", "jp2") + "&GAM=1&MINMAX=1:0,255&MINMAX=2:0,255&MINMAX=3:0,255&JTL={z},{tileIndex}";
                this.zoomifySource = new ol_source_Zoomify__WEBPACK_IMPORTED_MODULE_17__["default"]({
                    url: newURL,
                    size: [24000, 24000],
                    crossOrigin: 'anonymous',
                    zDirection: -1,
                });
                this.defaultURL = newURL;
                this.imagery.setSource(this.zoomifySource);
                console.log(this.defaultURL);
            });
        }
    }
    REPL() {
        if (this.myControl.value == "turnOnGEOJson") {
            const event = {
                checked: true,
            };
            this.lastChecked = true;
            this.onClick(event);
        }
        ;
        if (this.myControl.value == "turnOffGEOJson") {
            this.lastChecked = false;
            this.modifyVector.setVisible(false);
        }
        ;
        if (this.myControl.value == "savePolygons") {
            this.savePolygonsToDatabase();
        }
        ;
        if (this.myControl.value == "retrievePolygons") {
            this.retrievePolygonsFromDatabase();
        }
        ;
        if (this.myControl.value == "loadPolygons") {
            this.loadPolygonsFromFirebase();
        }
    }
    Tree(event) {
        this.httpClient.get('https://raw.githubusercontent.com/Sai-Adarsh/viewer-geojson/main/h.json').subscribe(res => {
            console.log("here", res);
            this.treeString = [];
            this.treeString.push(res);
        });
    }
    PrintTree() {
        console.log("Print Tree", typeof this.treeString[0]["msg"], this.treeString[0]["msg"]);
    }
    handleFileLoad(event) {
        var vector_sr = this.vector.getSource();
        var features = vector_sr.getFeatures();
        var content = JSON.parse(event.target.result);
        var format = new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_14__["default"]();
        if (content["outputCombine"]["type"] != undefined || content["outputCombine"].length != undefined) {
            var featuresToLoad = format.readFeatures(content["outputCombine"]);
            console.log(featuresToLoad);
            for (var i = 0; i < featuresToLoad.length; i++) {
                if (featuresToLoad[i].get("name") == "add") {
                    featuresToLoad[i].setStyle(this.styleAdd);
                }
                else if (featuresToLoad[i].get("name") == "erase") {
                    featuresToLoad[i].setStyle(this.styleErase);
                }
                vector_sr.addFeature(featuresToLoad[i]);
            }
            this.saveJson["firstpassAtlas"] = content["outputCombine"];
        }
    }
    importFile(event) {
        if (event.target.files.length == 0) {
            console.log("No file selected!");
            return;
        }
        var file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsText(event.target.files[0]);
        reader.onload = (event) => {
            var vector_sr = this.vector.getSource();
            var features = vector_sr.getFeatures();
            console.log("here", event.target.result);
            var fileString = event.target.result;
            var content = JSON.parse(JSON.parse(JSON.stringify(fileString)));
            var format = new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_14__["default"]();
            if (content["outputCombine"]["type"] != undefined || content["outputCombine"].length != undefined) {
                var featuresToLoad = format.readFeatures(content["outputCombine"]);
                console.log(featuresToLoad);
                for (var i = 0; i < featuresToLoad.length; i++) {
                    if (featuresToLoad[i].get("name") == "add") {
                        featuresToLoad[i].setStyle(this.styleAdd);
                    }
                    else if (featuresToLoad[i].get("name") == "erase") {
                        featuresToLoad[i].setStyle(this.styleErase);
                    }
                    vector_sr.addFeature(featuresToLoad[i]);
                }
                this.saveJson["firstpassAtlas"] = content["outputCombine"];
            }
        };
        // after here 'file' can be accessed and used for further process
    }
    setCheckPoint() {
        this.saveJson["userActions"] = [];
        this.saveJson["firstpassAtlas"] = this.saveJson["outputCombine"];
        this.saveJson["outputCombine"] = {};
    }
    exportFile(event) {
        console.log("Saving File");
        this.combine();
        var json = this.saveJson;
        const a = document.createElement("a");
        a.href = URL.createObjectURL(new Blob([JSON.stringify(json, null, 2)], {
            type: "text/plain"
        }));
        a.setAttribute("download", "feature.json");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        this.setCheckPoint();
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBar"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClient"] },
    { type: _replservice_service__WEBPACK_IMPORTED_MODULE_22__["ReplserviceService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _replservice_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./replservice.service */ "./src/app/replservice.service.ts");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

























let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__["MatSliderModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"]
        ],
        providers: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _replservice_service__WEBPACK_IMPORTED_MODULE_20__["ReplserviceService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/replservice.service.ts":
/*!****************************************!*\
  !*** ./src/app/replservice.service.ts ***!
  \****************************************/
/*! exports provided: ReplserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplserviceService", function() { return ReplserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ReplserviceService = class ReplserviceService {
    constructor() { }
    REPLTest() {
        return "Hello";
    }
};
ReplserviceService.ctorParameters = () => [];
ReplserviceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ReplserviceService);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MSI\Desktop\next-gen-viewer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map