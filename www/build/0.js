webpackJsonp([0],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductPageModule", function() { return EditProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_product__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditProductPageModule = /** @class */ (function () {
    function EditProductPageModule() {
    }
    EditProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_product__["a" /* EditProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_product__["a" /* EditProductPage */]),
            ],
        })
    ], EditProductPageModule);
    return EditProductPageModule;
}());

//# sourceMappingURL=edit-product.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_product__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_category_category__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditProductPage = /** @class */ (function () {
    function EditProductPage(navCtrl, navParams, toast, productProvider, categoryProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.productProvider = productProvider;
        this.categoryProvider = categoryProvider;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__providers_product_product__["a" /* Product */]();
        if (this.navParams.data.id) {
            this.productProvider.get(this.navParams.data.id)
                .then(function (result) {
                _this.model = result;
            });
        }
    }
    /**
     * Runs when the page has loaded
     */
    EditProductPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.categoryProvider.getAll()
            .then(function (result) {
            _this.categories = result;
        })
            .catch(function () {
            _this.toast.create({ message: 'Error loading categories.', duration: 3000, position: 'botton' }).present();
        });
    };
    EditProductPage.prototype.save = function () {
        var _this = this;
        this.saveProduct()
            .then(function () {
            _this.toast.create({ message: 'Product saved.', duration: 3000, position: 'botton' }).present();
            _this.navCtrl.pop();
        })
            .catch(function () {
            _this.toast.create({ message: 'Error saving product.', duration: 3000, position: 'botton' }).present();
        });
    };
    EditProductPage.prototype.saveProduct = function () {
        if (this.model.id) {
            return this.productProvider.update(this.model);
        }
        else {
            console.log(this.model.name, this.model.name, this.model.price, this.model.duedate);
            return this.productProvider.insert(this.model);
        }
    };
    EditProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-product',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/sqltutorial/IonicSQLiteExample/src/pages/edit-product/edit-product.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic SQLite Example\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label stacked>Name</ion-label>\n      <ion-input type="text" name="name" [(ngModel)]="model.name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Price</ion-label>\n      <ion-input type="number" name="price" [(ngModel)]="model.price"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Maturity</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" name="duedate" min="2017" max="2020-12-31" [(ngModel)]="model.duedate"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Category</ion-label>\n      <ion-select name="category_id" [(ngModel)]="model.category_id">\n        <ion-option *ngFor="let category of categories" value="{{ category.id }}">{{ category.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Active</ion-label>\n      <ion-checkbox name="active" [(ngModel)]="model.active"></ion-checkbox>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button block (click)="save()">Save</button>\n\n</ion-content>'/*ion-inline-end:"/Users/dspl/Documents/ionic/sqltutorial/IonicSQLiteExample/src/pages/edit-product/edit-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_product_product__["b" /* ProductProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_category_category__["a" /* CategoryProvider */]])
    ], EditProductPage);
    return EditProductPage;
}());

//# sourceMappingURL=edit-product.js.map

/***/ })

});
//# sourceMappingURL=0.js.map