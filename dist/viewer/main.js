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
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n   <button mat-icon-button class=\"example-icon\" (click)=\"drawer.toggle()\" aria-label=\"Example icon-button with menu icon\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <span>Next Gen Viewer</span>\n  <span class=\"example-spacer\"></span>\n  <p>  </p>\n  <button (click)=\"openSnackBar('Saving GeoJSON to firebase', 'Dismiss')\" color=\"accent\" mat-raised-button>\n    Save GeoJSON\n  </button>\n  <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n   <mat-icon>share</mat-icon>\n  </button>\n  <button color=\"accent\" (click)=\"showFillerREPL = !showFillerREPL\" mat-raised-button>\n    Toggle REPL\n  </button>\n</mat-toolbar>\n\n\n\n\n<mat-drawer-container class=\"example-container\" autosize>\n\n  <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\n\n    <mat-accordion>\n      <button (click)=\"this.deleteDrawing()\" mat-raised-button>\n        <mat-icon>undo</mat-icon>\n      </button>\n      <button (click)=\"this.redoDrawing()\" mat-raised-button>\n        <mat-icon>redo</mat-icon>\n      </button><p> </p>\n      <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                           (closed)=\"panelOpenState = false\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Annotation Tools\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <p> </p>\n        <button (click)=\"this.addInteraction('Point')\" mat-raised-button>\n          Point\n        </button><p> </p>\n        <button (click)=\"this.addInteraction('LineString')\" mat-raised-button>\n          LineString\n        </button><p> </p>\n        <button (click)=\"this.addInteraction('Polygon')\" mat-raised-button>\n          Polygon\n        </button><p> </p>\n        <button (click)=\"this.addInteraction('Circle')\" mat-raised-button>\n          Circle\n        </button><p> </p>\n        <button (click)=\"this.removeInteraction()\" mat-raised-button color=\"primary\" aria-label=\"Example icon button with a menu icon\">\n            <mat-icon>clear</mat-icon>\n        </button><p> </p><button (click)=\"this.deleteDrawing()\" mat-raised-button color=\"primary\" aria-label=\"Example icon button with a menu icon\">\n            <mat-icon>delete</mat-icon>\n        </button>\n      </mat-expansion-panel>\n    </mat-accordion><p> </p>\n\n\n    <mat-accordion>\n      <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                           (closed)=\"panelOpenState = false\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Colour intensity\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <button (click)=\"resetToDefault()\" color=\"primary\" mat-raised-button>\n          Reset to default\n        </button><p> </p>\n        Invert\n        <mat-slider\n          thumbLabel\n          (change)=\"this.onInvertChange($event)\"\n          min=\"1\"\n          max=\"100\"></mat-slider><p> </p>\n        Hue\n        <mat-slider\n          thumbLabel\n          (change)=\"this.onHueChange($event)\"\n          min=\"0\"\n          max=\"360\"></mat-slider><p> </p>\n        Saturation\n        <mat-slider\n          thumbLabel\n          (change)=\"this.onSaturationChange($event)\"\n          min=\"1\"\n          max=\"100\"></mat-slider><p> </p>\n      </mat-expansion-panel>\n    </mat-accordion><p> </p>\n\n\n    <mat-accordion>\n      <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                           (closed)=\"panelOpenState = false\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Layers\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <mat-slide-toggle\n            color=\"primary\"\n            (change)=\"this.onToggle($event)\"\n            class=\"example-margin\"\n            [checked]=\"checked\"\n            [disabled]=\"disabled\">\n          GeoJSON\n        </mat-slide-toggle><p> </p>\n      </mat-expansion-panel>\n    </mat-accordion><p> </p>\n\n    <mat-accordion>\n      <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                           (closed)=\"panelOpenState = false\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Mouse & Keyboard Controls\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <mat-tab-group animationDuration=\"0ms\">\n          <mat-tab label=\"Section ID\">\n            <br>\n            <mat-form-field appearance=\"standard\">\n              <mat-label>Brain ID</mat-label>\n              <input matInput placeholder=\"E.g. 4240\">\n            </mat-form-field>\n            <mat-form-field appearance=\"standard\">\n              <mat-label>Section No</mat-label>\n              <input matInput placeholder=\"E.g. 0025\">\n            </mat-form-field>\n            <br>\n          </mat-tab>\n          <mat-tab label=\"Second\">\n            <div class=\"example-small-box mat-elevation-z4\">\n              Small content\n            </div>\n          </mat-tab>\n        </mat-tab-group><p> </p>\n      </mat-expansion-panel>\n    </mat-accordion><p> </p>\n\n  </mat-drawer>\n\n  <div class=\"example-sidenav-content\">\n    <div id=\"map\" class=\"map\">\n    </div>\n    <mat-card *ngIf=\"showFillerREPL\" class=\"example-card\">\n      <mat-card-header>\n        <mat-card-title>REPL Bot</mat-card-title>\n        <mat-card-subtitle>Automate NGV Task using REPL Bot</mat-card-subtitle>\n      </mat-card-header>\n      <!--<img mat-card-image src=\"https://img.freepik.com/free-vector/set-cute-robot-ai-character-with-circuits-background_99413-92.jpg\" height=\"200\">-->\n      <mat-card-content>\n        <form class=\"example-form\">\n          <mat-form-field class=\"example-full-width\">\n            <input type=\"text\"\n                   id = \"replID\"\n                   placeholder=\"Command line\"\n                   aria-label=\"Number\"\n                   matInput\n                   [formControl]=\"myControl\"\n                   [matAutocomplete]=\"auto\">\n            <mat-autocomplete #auto=\"matAutocomplete\">\n              <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n                {{option}}\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n        </form>\n        <mat-card-actions>\n          <button (click)=\"this.REPL()\" mat-raised-button>Submit</button>\n        </mat-card-actions>\n      </mat-card-content>\n\n    </mat-card>\n\n  </div>\n\n</mat-drawer-container>\n");

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-slider {\n  width: 300px;\n}\n\n.mat-form-field {\n  margin-right: 12px;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\n.example-container {\n  width: 100%;\n  height: 100%;\n}\n\n.example-sidenav-content {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav {\n  padding: 20px;\n}\n\n.example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n\n/* maps css */\n\n.map {\n  width: 100%;\n  height: 100vh;\n}\n\n/* tabs css */\n\n.example-small-box, .example-large-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 16px;\n  padding: 16px;\n  border-radius: 8px;\n  width: 50px;\n}\n\n.example-small-box {\n  height: 300px;\n  width: 200px;\n}\n\n.example-large-box {\n  height: 100px;\n  width: 50px;\n}\n\n/* Slide toggle */\n\n.example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtRkFBbUY7RUFDbkYsc0JBQXNCO0FBQ3hCOztBQUVBLGFBQWE7O0FBQ2I7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBLGFBQWE7O0FBQ2I7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFHQSxpQkFBaUI7O0FBQ2pCO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2xpZGVyIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cblxuLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmV4YW1wbGUtc2lkZW5hdiB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLyogbWFwcyBjc3MgKi9cbi5tYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLyogdGFicyBjc3MgKi9cbi5leGFtcGxlLXNtYWxsLWJveCwgLmV4YW1wbGUtbGFyZ2UtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMTZweDtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuLmV4YW1wbGUtc21hbGwtYm94IHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uZXhhbXBsZS1sYXJnZS1ib3gge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuXG4vKiBTbGlkZSB0b2dnbGUgKi9cbi5leGFtcGxlLWgyIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZXhhbXBsZS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5leGFtcGxlLW1hcmdpbiB7XG4gIG1hcmdpbjogMTBweDtcbn1cbiJdfQ== */");

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
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/View */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/source/OSM */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ol_source_Stamen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/source/Stamen */ "./node_modules/ol/source/Stamen.js");
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/interaction */ "./node_modules/ol/interaction.js");
/* harmony import */ var ol_ol_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/ol.css */ "./node_modules/ol/ol.css");
/* harmony import */ var ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/interaction/Draw */ "./node_modules/ol/interaction/Draw.js");
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");
/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");
/* harmony import */ var ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/format/GeoJSON */ "./node_modules/ol/format/GeoJSON.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ol_source_Zoomify__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/source/Zoomify */ "./node_modules/ol/source/Zoomify.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

















let AppComponent = class AppComponent {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"]();
        this.options = ['turnOnGEOJson', 'turnOffGEOJson', 'Three'];
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(value => this._filter(value)));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
    /**
     * Initialise the map.
     */
    ngAfterViewInit() {
        this.sources = {
            osm: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_5__["default"](),
            stamen: new ol_source_Stamen__WEBPACK_IMPORTED_MODULE_6__["default"]({ layer: 'toner' }),
            vector: new ol_source__WEBPACK_IMPORTED_MODULE_10__["Vector"]({
                url: 'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json',
                format: new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_12__["default"](),
                wrapX: false,
            })
        };
        this.delVector = new ol_source__WEBPACK_IMPORTED_MODULE_10__["Vector"]({
            wrapX: false
        });
        this.layerTile = new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_4__["default"]({
            source: this.sources.osm
        });
        this.vectorSource = new ol_source__WEBPACK_IMPORTED_MODULE_10__["Vector"]({
            wrapX: false
        });
        this.vector = new ol_layer__WEBPACK_IMPORTED_MODULE_11__["Vector"]({
            source: this.vectorSource,
        });
        this.modifyVector = new ol_layer__WEBPACK_IMPORTED_MODULE_11__["Vector"]({
            source: new ol_source__WEBPACK_IMPORTED_MODULE_10__["Vector"]({
                url: 'https://raw.githubusercontent.com/Sai-Adarsh/viewer-geojson/main/brain.geo.json',
                format: new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_12__["default"](),
                wrapX: false,
            }),
        });
        this.select = new ol_interaction__WEBPACK_IMPORTED_MODULE_7__["Select"]({
            wrapX: false,
        });
        this.modify = new ol_interaction__WEBPACK_IMPORTED_MODULE_7__["Modify"]({
            features: this.select.getFeatures(),
        });
        this.draw = new ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_9__["default"]({
            source: this.vector.getSource(),
            type: 'Polygon',
            freehand: true,
        });
        this.zoomifySource = new ol_source_Zoomify__WEBPACK_IMPORTED_MODULE_15__["default"]({
            url: 'http://braincircuits.org/cgi-bin/iipsrv.fcgi?FIF=/PMD2057/PMD2057%262056-F9-2015.03.06-17.55.48_PMD2057_1_0025.jp2&GAM=1&MINMAX=1:0,255&MINMAX=2:0,255&MINMAX=3:0,255&JTL={z},{tileIndex}',
            size: [24000, 24000],
            crossOrigin: 'anonymous',
            zDirection: -1,
        });
        this.extent = this.zoomifySource.getTileGrid().getExtent();
        this.imagery = new ol_layer__WEBPACK_IMPORTED_MODULE_11__["Tile"]({
            source: this.zoomifySource,
        });
        this.switchLayer = [
            this.layerTile, this.vector, this.modifyVector
        ];
        this.zoomifyLayer = [
            this.imagery, this.vector
        ];
        this.modifyVector.setVisible(false);
        this.redoStack = [];
        this.invertString = 0;
        this.HueString = 0;
        this.SaturationString = 100;
        this.invertValue = "";
        this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_2__["default"]({
            target: 'map',
            interactions: Object(ol_interaction__WEBPACK_IMPORTED_MODULE_7__["defaults"])().extend([this.select, this.modify]),
            layers: this.zoomifyLayer,
            view: new ol_View__WEBPACK_IMPORTED_MODULE_3__["default"]({
                resolutions: this.imagery.getSource().getTileGrid().getResolutions(),
                zoom: 2,
                extent: this.extent,
                constrainResolution: true
            }),
        });
        this.map.getView().fit(this.extent);
    }
    onToggle(event) {
        if (event.checked == true) {
            this.modifyVector.setVisible(true);
        }
        else {
            this.modifyVector.setVisible(false);
        }
    }
    addInteraction(interactionType) {
        this.draw.setActive(true);
        this.draw = new ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_9__["default"]({
            source: this.vector.getSource(),
            type: interactionType,
            freehand: true,
        });
        this.map.addInteraction(this.draw);
    }
    removeInteraction() {
        this.draw.setActive(false);
        this.map.removeInteraction(this.draw);
    }
    deleteDrawing() {
        this.toBeDeleted = this.vector.getSource().getFeatures()[this.vector.getSource().getFeatures().length - 1];
        this.vector.getSource().removeFeature(this.toBeDeleted);
        this.redoStack.push(this.toBeDeleted);
        console.log(this.redoStack);
    }
    redoDrawing() {
        this.toBeRedrawn = this.redoStack[this.redoStack.length - 1];
        this.vector.getSource().addFeature(this.toBeRedrawn);
        this.redoStack.pop();
    }
    REPL() {
        if (this.myControl.value == "turnOnGEOJson") {
            this.modifyVector.setVisible(true);
        }
        ;
        if (this.myControl.value == "turnOffGEOJson") {
            this.modifyVector.setVisible(false);
        }
        ;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBar"] }
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
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__["MatSliderModule"]
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

module.exports = __webpack_require__(/*! /home/dell/Desktop/next-gen-viewer/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map