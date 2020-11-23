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
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\r\n   <button mat-icon-button class=\"example-icon\" (click)=\"drawer.toggle()\" aria-label=\"Example icon-button with menu icon\">\r\n    <mat-icon>menu</mat-icon>\r\n  </button>\r\n  <span>Next Gen Viewer</span>&nbsp;&nbsp;\r\n  <button (click)=\"this.deleteDrawing()\" mat-raised-button>\r\n    <mat-icon>undo</mat-icon>\r\n  </button>&nbsp;\r\n  <button (click)=\"this.redoDrawing()\" mat-raised-button>\r\n    <mat-icon>redo</mat-icon>\r\n  </button>&nbsp;\r\n  <button color=\"accent\" (click)=\"showFillerREPL = !showFillerREPL\" mat-raised-button>\r\n    Toggle REPL\r\n  </button>&nbsp;\r\n  <span class=\"example-spacer\"></span>\r\n  <p>  </p>\r\n  <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\r\n   <mat-icon>share</mat-icon>\r\n  </button>\r\n  \r\n</mat-toolbar>\r\n\r\n\r\n\r\n\r\n<mat-drawer-container class=\"example-container\" autosize>\r\n\r\n  <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\r\n\r\n    <mat-accordion>\r\n      <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                           (closed)=\"panelOpenState = false\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Brain Information\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <br>\r\n        <mat-form-field appearance=\"standard\">\r\n          <mat-label>Section No</mat-label>\r\n          <input (change)=\"this.emailUpdated($event)\" matInput placeholder=\"E.g. 0025\">\r\n        </mat-form-field>\r\n        <mat-card-actions>\r\n          <button (click)=\"this.brainIDUpdated()\" mat-raised-button>Submit</button>\r\n        </mat-card-actions><p> </p>\r\n        <mat-slide-toggle\r\n            color=\"primary\"\r\n            (change)=\"this.onToggleTracer($event)\"\r\n            class=\"example-margin\"\r\n            [checked]=\"checked\"\r\n            [disabled]=\"disabled\">\r\n          Toggle Tracer\r\n        </mat-slide-toggle><p> </p>\r\n        <br>\r\n      </mat-expansion-panel>\r\n    </mat-accordion><p> </p>\r\n\r\n\r\n    <mat-accordion>\r\n      \r\n      <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                           (closed)=\"panelOpenState = false\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Annotation Tools\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <p> </p>\r\n        <button (click)=\"this.addInteraction('Point')\" mat-raised-button>\r\n          Point\r\n        </button><p> </p>\r\n        <button (click)=\"this.addInteraction('LineString')\" mat-raised-button>\r\n          LineString\r\n        </button><p> </p>\r\n        <button (click)=\"this.addInteraction('Polygon')\" mat-raised-button>\r\n          Polygon\r\n        </button><p> </p>\r\n        <button (click)=\"this.addInteraction('Circle')\" mat-raised-button>\r\n          Circle\r\n        </button><p> </p>\r\n        <button (click)=\"this.removeInteraction()\" mat-raised-button color=\"primary\" aria-label=\"Example icon button with a menu icon\">\r\n            <mat-icon>clear</mat-icon>\r\n        </button><p> </p><button (click)=\"this.deleteDrawing()\" mat-raised-button color=\"primary\" aria-label=\"Example icon button with a menu icon\">\r\n            <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </mat-expansion-panel>\r\n    </mat-accordion><p> </p>\r\n    <mat-accordion>\r\n      <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                           (closed)=\"panelOpenState = false\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Union Difference\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <button (click)=\"this.addPolygons()\" mat-raised-button>\r\n          Add Polygon\r\n        </button><p> </p>\r\n        <button (click)=\"this.erasePolygons()\" mat-raised-button>\r\n          Erase Polygon\r\n        </button><p> </p>\r\n        <button (click)=\"this.combine()\" mat-raised-button color=\"primary\" aria-label=\"Example icon button with a menu icon\">\r\n              <mat-icon>track_changes</mat-icon>\r\n              Combine\r\n        </button>\r\n      </mat-expansion-panel>\r\n    </mat-accordion><p> </p>\r\n    \r\n    <mat-accordion>\r\n      <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                           (closed)=\"panelOpenState = false\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Save & Load\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <button (click)=\"openSnackBar('Saving Polygons to firebase', 'Dismiss'); savePolygonsToFirebase()\" color=\"primary\" mat-raised-button>\r\n          Save Polygons\r\n        </button><p> </p>\r\n        <button (click)=\"retrievePolygonsFromFirebase(); openSnackBar('Retrieving Polygons to firebase', 'Dismiss')\" color=\"primary\" mat-raised-button>\r\n          Retrieve Polygons\r\n        </button><p> </p>\r\n        <button (click)=\"loadPolygonsFromFirebase()\" color=\"primary\" mat-raised-button>\r\n          Load Polygons\r\n        </button><p> </p>\r\n      </mat-expansion-panel>\r\n    </mat-accordion><p> </p>\r\n\r\n    <mat-accordion>\r\n      <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                           (closed)=\"panelOpenState = false\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Colour Intensity\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <button (click)=\"resetToDefault()\" color=\"primary\" mat-raised-button>\r\n          Reset to default\r\n        </button><p> </p>\r\n        Invert\r\n        <mat-slider\r\n          thumbLabel\r\n          (change)=\"this.onInvertChange($event)\"\r\n          min=\"1\"\r\n          max=\"100\"></mat-slider><p> </p>\r\n        Hue\r\n        <mat-slider\r\n          thumbLabel\r\n          (change)=\"this.onHueChange($event)\"\r\n          min=\"0\"\r\n          max=\"360\"></mat-slider><p> </p>\r\n        Saturation\r\n        <mat-slider\r\n          thumbLabel\r\n          (change)=\"this.onSaturationChange($event)\"\r\n          min=\"1\"\r\n          max=\"100\"></mat-slider><p> </p>\r\n      </mat-expansion-panel>\r\n    </mat-accordion><p> </p>\r\n\r\n\r\n    <mat-accordion>\r\n      <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                           (closed)=\"panelOpenState = false\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Layers\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <mat-slide-toggle\r\n            color=\"primary\"\r\n            (change)=\"this.onToggle($event)\"\r\n            class=\"example-margin\"\r\n            [checked]=\"checked\"\r\n            [disabled]=\"disabled\">\r\n          GeoJSON\r\n        </mat-slide-toggle><p> </p>\r\n      </mat-expansion-panel>\r\n    </mat-accordion><p> </p>\r\n\r\n    \r\n\r\n  </mat-drawer>\r\n\r\n  <div class=\"example-sidenav-content\">\r\n    <div id=\"map\" class=\"map\">\r\n    </div>\r\n    <mat-card *ngIf=\"showFillerREPL\" class=\"example-card\">\r\n      <mat-card-header>\r\n        <mat-card-title>REPL Bot</mat-card-title>\r\n        <mat-card-subtitle>Automate NGV Task using REPL Bot</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <!--<img mat-card-image src=\"https://img.freepik.com/free-vector/set-cute-robot-ai-character-with-circuits-background_99413-92.jpg\" height=\"200\">-->\r\n      <mat-card-content>\r\n        <form class=\"example-form\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input type=\"text\"\r\n                   id = \"replID\"\r\n                   placeholder=\"Command line\"\r\n                   aria-label=\"Number\"\r\n                   matInput\r\n                   [formControl]=\"myControl\"\r\n                   [matAutocomplete]=\"auto\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\">\r\n              <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n                {{option}}\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n          </mat-form-field>\r\n        </form>\r\n        <mat-card-actions>\r\n          <button (click)=\"this.REPL()\" mat-raised-button>Submit</button>\r\n        </mat-card-actions>\r\n      </mat-card-content>\r\n\r\n    </mat-card>\r\n\r\n  </div>\r\n\r\n</mat-drawer-container>\r\n");

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-slider {\r\n  width: 300px;\r\n}\r\n\r\n.mat-form-field {\r\n  margin-right: 12px;\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.example-container {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.example-sidenav-content {\r\n  display: flex;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.example-sidenav {\r\n  padding: 20px;\r\n}\r\n\r\n.example-card {\r\n  max-width: 400px;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n/* maps css */\r\n\r\n.map {\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n\r\n/* tabs css */\r\n\r\n.example-small-box, .example-large-box {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 16px;\r\n  padding: 16px;\r\n  border-radius: 8px;\r\n  width: 50px;\r\n}\r\n\r\n.example-small-box {\r\n  height: 300px;\r\n  width: 200px;\r\n}\r\n\r\n.example-large-box {\r\n  height: 100px;\r\n  width: 50px;\r\n}\r\n\r\n/* Slide toggle */\r\n\r\n.example-h2 {\r\n  margin: 10px;\r\n}\r\n\r\n.example-section {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n\r\n.example-margin {\r\n  margin: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtRkFBbUY7RUFDbkYsc0JBQXNCO0FBQ3hCOztBQUVBLGFBQWE7O0FBQ2I7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBLGFBQWE7O0FBQ2I7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFHQSxpQkFBaUI7O0FBQ2pCO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2xpZGVyIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNpZGVuYXYtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmV4YW1wbGUtc2lkZW5hdiB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4vKiBtYXBzIGNzcyAqL1xyXG4ubWFwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4vKiB0YWJzIGNzcyAqL1xyXG4uZXhhbXBsZS1zbWFsbC1ib3gsIC5leGFtcGxlLWxhcmdlLWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMTZweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc21hbGwtYm94IHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtbGFyZ2UtYm94IHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG5cclxuLyogU2xpZGUgdG9nZ2xlICovXHJcbi5leGFtcGxlLWgyIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1tYXJnaW4ge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4iXX0= */");

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





















let AppComponent = class AppComponent {
    constructor(_snackBar, httpClient) {
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"]();
        this.options = ['turnOnGEOJson', 'turnOffGEOJson', 'savePolygons', 'retrievePolygons', 'loadPolygons'];
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
        this.savePolygonsToFirebase = () => {
            //const coordinates = this.map.getLayers().item(1).getSource().getFeatures()[0].values_.geometry.flatCoordinates;
            //const type = this.map.getLayers().item(1).getSource().getFeatures()[0].getGeometry().getType();
            var writer = new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_14__["default"]();
            var geojsonStr = writer.writeFeatures(this.vector.getSource().getFeatures());
            /*const data = {
              'string': "geojsonStr",
              "geometry": {
                "type": "Polygon",
                "coordinates": coordinates,
              },
            };*/
            console.log("save works", geojsonStr);
            const db = firebase__WEBPACK_IMPORTED_MODULE_19__["default"].database().ref().child("vector").push(geojsonStr);
        };
        this.retrievePolygonsFromFirebase = () => {
            console.log("works here");
            firebase__WEBPACK_IMPORTED_MODULE_19__["default"].database().ref('vector').once('value', snapshot => {
                var items = [];
                snapshot.forEach((child) => {
                    items.push(child.val());
                });
                this.loadedFeature = items[items.length - 1];
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
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["map"])(value => this._filter(value)));
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
        this.defaultURL = 'http://braincircuits.org/cgi-bin/iipsrv.fcgi?FIF=/PMD2057/PMD2057%262056-F20-2015.03.06-21.13.19_PMD2057_3_0060.jp2&GAM=1&MINMAX=1:0,255&MINMAX=2:0,255&MINMAX=3:0,255&JTL={z},{tileIndex}';
        this.httpClient.get('http://mitradevel.cshl.org/webtools/seriesbrowser/getthumbnails/4240/').subscribe(res => {
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
            this.imagery, this.vector, this.modifyVector
        ];
        this.modifyVector.setVisible(false);
        this.redoStack = [];
        this.invertString = 0;
        this.HueString = 0;
        this.SaturationString = 100;
        this.invertValue = "";
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
        this.vector.on("postrender", (event) => {
            this.setPolyStyle();
        });
        this.addPolygon.on("drawstart", (event) => {
            this.setPolyStyle();
        });
        this.addPolygon.on("drawend", (event) => {
            this.setPolyStyle();
        });
    }
    setPolyStyle() {
        var vector_sr = this.vector.getSource();
        var features = vector_sr.getFeatures();
        if (features.length > 0 && this.erasePolygon.getActive() == true && features[features.length - 1].getStyle() == null) {
            features[features.length - 1].setStyle(this.styleErase);
            features[features.length - 1].set("name", "erase");
        }
        else if (features.length > 0 && this.addPolygon.getActive() == true && features[features.length - 1].getStyle() == null) {
            features[features.length - 1].setStyle(this.styleAdd);
            features[features.length - 1].set("name", "add");
        }
    }
    onToggle(event) {
        this.modifyVector.getSource().clear();
        if (event.checked == true) {
            this.lastChecked = true;
            this.httpClient.get('http://mitradevel.cshl.org/webtools/seriesbrowser/getatlasgeojson/PMD2057/00' + this.defaultGeoJSONSecNo + '/').subscribe(res => {
                var atlasstyle = new ol_style__WEBPACK_IMPORTED_MODULE_10__["Style"]({
                    fill: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Fill"]({
                        color: 'rgba(255, 255, 255, 0)'
                    }),
                    stroke: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Stroke"]({
                        color: '#0c0c0c',
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
                console.log(this.defaultGeoJSONSecNo);
                res = JSON.stringify(res);
                var reader = new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_14__["default"]();
                const newGeoJson = reader.readFeatures(res);
                var i;
                for (i = 0; i < newGeoJson.length; i++) {
                    newGeoJson[i].setStyle(atlasstyle);
                    this.modifyVector.getSource().addFeature(newGeoJson[i]);
                }
            });
            this.modifyVector.setVisible(true);
        }
        else {
            this.lastChecked = false;
            this.modifyVector.setVisible(false);
        }
    }
    addPolygons() {
        this.draw.setActive(false);
        this.erasePolygon.setActive(false);
        this.addPolygon.setActive(true);
        this.map.addInteraction(this.addPolygon);
    }
    erasePolygons() {
        this.draw.setActive(false);
        this.addPolygon.setActive(false);
        this.erasePolygon.setActive(true);
        this.map.addInteraction(this.erasePolygon);
    }
    combine() {
        try {
            var vector_sr = this.vector.getSource();
            var features = vector_sr.getFeatures();
            var format = new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_14__["default"]();
            var turfpoly;
            var polygon;
            var count = 0;
            var sty = new ol_style__WEBPACK_IMPORTED_MODULE_10__["Style"]({
                fill: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Fill"]({
                    color: 'rgba(0,255,255, 0.1)',
                }),
                stroke: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Stroke"]({
                    color: '#00FFFF',
                    width: 3,
                })
            });
            var isIntersected = _turf_turf__WEBPACK_IMPORTED_MODULE_2__["polygon"]([]);
            for (var i = 0; i < features.length; i++) {
                turfpoly = format.writeFeatureObject(features[i]);
                if (count > 0) {
                    if (features[i].get('name') == "add") {
                        var uid = features[i].ol_uid;
                        vector_sr.removeFeature(vector_sr.getFeatureByUid(uid));
                        polygon = _turf_turf__WEBPACK_IMPORTED_MODULE_2__["union"](polygon, turfpoly);
                    }
                    else if (count > 0 && features[i].get('name') == "erase") {
                        var uid = features[i].ol_uid;
                        vector_sr.removeFeature(vector_sr.getFeatureByUid(uid));
                        polygon = _turf_turf__WEBPACK_IMPORTED_MODULE_2__["difference"](polygon, turfpoly);
                    }
                }
                else {
                    var uid = features[i].ol_uid;
                    vector_sr.removeFeature(vector_sr.getFeatureByUid(uid));
                    polygon = format.writeFeatureObject(features[i]);
                    count = count + 1;
                }
            }
            if (count > 0) {
                polygon = format.readFeatures(polygon)[0];
                polygon.setStyle(sty);
                vector_sr.addFeature(polygon);
            }
            console.log(vector_sr);
            this.vector.setSource(vector_sr);
        }
        catch (error) {
            console.log("Select region inside added polygon");
        }
    }
    addInteraction(interactionType) {
        this.draw.setActive(true);
        this.addPolygon.setActive(false);
        this.erasePolygon.setActive(false);
        this.draw = new ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_11__["default"]({
            source: this.vector.getSource(),
            type: interactionType,
            freehand: true,
        });
        this.map.addInteraction(this.draw);
    }
    removeInteraction() {
        this.draw.setActive(false);
        this.addPolygon.setActive(false);
        this.erasePolygon.setActive(false);
        this.map.removeInteraction(this.draw);
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
    emailUpdated(event) {
        this.secNo = parseInt(event.target.value);
        this.defaultGeoJSONSecNo = parseInt(event.target.value);
        console.log("section", this.secNo);
    }
    brainIDUpdated() {
        this.modifyVector.setVisible(false);
        this.httpClient.get('http://mitradevel.cshl.org/webtools/seriesbrowser/getthumbnails/4240/').subscribe(res => {
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
        console.log(this.lastChecked, this.defaultGeoJSONSecNo);
        if (this.lastChecked == true) {
            this.httpClient.get('http://mitradevel.cshl.org/webtools/seriesbrowser/getatlasgeojson/PMD2057/00' + this.defaultGeoJSONSecNo + '/').subscribe(res => {
                var atlasstyle = new ol_style__WEBPACK_IMPORTED_MODULE_10__["Style"]({
                    fill: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Fill"]({
                        color: 'rgba(255, 255, 255, 0)'
                    }),
                    stroke: new ol_style__WEBPACK_IMPORTED_MODULE_10__["Stroke"]({
                        color: '#0c0c0c',
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
                console.log(this.defaultGeoJSONSecNo);
                res = JSON.stringify(res);
                var reader = new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_14__["default"]();
                const newGeoJson = reader.readFeatures(res);
                this.modifyVector.getSource().clear();
                var i;
                for (i = 0; i < newGeoJson.length; i++) {
                    newGeoJson[i].setStyle(atlasstyle);
                    this.modifyVector.getSource().addFeature(newGeoJson[i]);
                }
            });
            this.modifyVector.setVisible(true);
        }
    }
    onToggleTracer(event) {
        if (event.checked == true) {
            this.httpClient.get('http://mitradevel.cshl.org/webtools/seriesbrowser/getthumbnails/4240/').subscribe(res => {
                this.urlData = res;
                console.log(res);
                var newURL = "http://braincircuits.org/cgi-bin/iipsrv.fcgi?FIF=" + this.urlData.N[this.secNo][1].split('/brainimg')[1].replace("&", "%26").replace("jpg", "jp2") + "&GAM=1&MINMAX=1:0,255&MINMAX=2:0,255&MINMAX=3:0,255&JTL={z},{tileIndex}";
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
            this.httpClient.get('http://mitradevel.cshl.org/webtools/seriesbrowser/getthumbnails/4240/').subscribe(res => {
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
            this.onToggle(event);
        }
        ;
        if (this.myControl.value == "turnOffGEOJson") {
            this.lastChecked = false;
            this.modifyVector.setVisible(false);
        }
        ;
        if (this.myControl.value == "savePolygons") {
            this.savePolygonsToFirebase();
        }
        ;
        if (this.myControl.value == "retrievePolygons") {
            this.retrievePolygonsFromFirebase();
        }
        ;
        if (this.myControl.value == "loadPolygons") {
            this.loadPolygonsFromFirebase();
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBar"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClient"] }
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




















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
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
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



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

module.exports = __webpack_require__(/*! C:\Users\MSI\next-gen-viewer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map