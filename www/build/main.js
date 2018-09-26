webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProductProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductProvider = /** @class */ (function () {
    function ProductProvider(dbProvider) {
        this.dbProvider = dbProvider;
    }
    ProductProvider.prototype.insert = function (product) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'insert into products (name, price, duedate, active, category_id) values (?, ?, ?, ?, ?)';
            var data = [product.name, product.price, product.duedate, product.active ? 1 : 0, product.category_id];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    ProductProvider.prototype.update = function (product) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'update products set name = ?, price = ?, duedate = ?, active = ?, category_id = ? where id = ?';
            var data = [product.name, product.price, product.duedate, product.active ? 1 : 0, product.category_id, product.id];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    ProductProvider.prototype.remove = function (id) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'delete from products where id = ?';
            var data = [id];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    ProductProvider.prototype.get = function (id) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'select * from products where id = ?';
            var data = [id];
            return db.executeSql(sql, data)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var item = data.rows.item(0);
                    var product = new Product();
                    product.id = item.id;
                    product.name = item.name;
                    product.price = item.price;
                    product.duedate = item.duedate;
                    product.active = item.active;
                    product.category_id = item.category_id;
                    return product;
                }
                return null;
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    ProductProvider.prototype.getAll = function (active, name) {
        if (name === void 0) { name = null; }
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'SELECT p.*, c.name as category_name FROM products p inner join categories c on p.category_id = c.id where p.active = ?';
            var data = [active ? 1 : 0];
            // filtering by name
            if (name) {
                sql += ' and p.name like ?';
                data.push('%' + name + '%');
            }
            return db.executeSql(sql, data)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var products = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var product = data.rows.item(i);
                        products.push(product);
                    }
                    return products;
                }
                else {
                    return [];
                }
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    ProductProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */]])
    ], ProductProvider);
    return ProductProvider;
}());

var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/edit-product/edit-product.module": [
		272,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_product__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toast, productProvider) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.productProvider = productProvider;
        this.products = [];
        this.onlyInactives = false;
        this.searchText = null;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.getAllProducts();
    };
    HomePage.prototype.getAllProducts = function () {
        var _this = this;
        this.productProvider.getAll(!this.onlyInactives, this.searchText)
            .then(function (result) {
            _this.products = result;
            console.log("get All Product ===>" + _this.products.length);
            _this.products.forEach(function (product) {
                console.log(product.name, product.duedate, product.price);
            });
        });
    };
    HomePage.prototype.addProduct = function () {
        this.navCtrl.push('EditProductPage');
    };
    HomePage.prototype.editProduct = function (id) {
        this.navCtrl.push('EditProductPage', { id: id });
    };
    HomePage.prototype.removeProduct = function (product) {
        var _this = this;
        this.productProvider.remove(product.id)
            .then(function () {
            // Removendo do array de produtos
            var index = _this.products.indexOf(product);
            _this.products.splice(index, 1);
            _this.toast.create({ message: 'Product removed.', duration: 3000, position: 'botton' }).present();
        });
    };
    HomePage.prototype.filterProducts = function (ev) {
        this.getAllProducts();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/dspl/Documents/ionic/sqltutorial/IonicSQLiteExample/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic SQLite Example\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar (ionInput)="filterProducts($event)" [(ngModel)]="searchText"></ion-searchbar>\n  <ion-list class="my-ion-list">\n    <ion-item-sliding *ngFor="let product of products">\n\n      <button ion-item (click)="editProduct(product.id)">\n        <h1>{{ product.name }}</h1>\n        <h2>{{ product.category_name }}</h2>\n        <h2>{{ product.duedate | date:\'dd/MM/yyyy\' }}</h2>\n        <h2>{{product.duedate}}</h2>\n        <h2>{{product.price}}</h2>\n       <!-- <h2 class="price">{{ product.price | currency:\'BRL\':true }}</h2>-->\n        <!-- <h2>Date</h2>\n        <h2>Price</h2> -->\n      </button>\n\n      <ion-item-options side="left">\n        <button ion-button color="danger" (click)="removeProduct(product)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab color="light" (click)="addProduct()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <p>Total: {{ products.length }}</p>\n    <ion-list>\n      <ion-item no-lines>\n        <ion-label>Inactive list</ion-label>\n        <ion-toggle name="listarInativos" [(ngModel)]="onlyInactives" (ionChange)="getAllProducts()"></ion-toggle>\n      </ion-item>\n    </ion-list>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/dspl/Documents/ionic/sqltutorial/IonicSQLiteExample/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_product_product__["b" /* ProductProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryProvider = /** @class */ (function () {
    function CategoryProvider(dbProvider) {
        this.dbProvider = dbProvider;
    }
    CategoryProvider.prototype.getAll = function () {
        return this.dbProvider.getDB()
            .then(function (db) {
            return db.executeSql('select * from categories', [])
                .then(function (data) {
                if (data.rows.length > 0) {
                    var categories = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var category = data.rows.item(i);
                        categories.push(category);
                    }
                    return categories;
                }
                else {
                    return [];
                }
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    CategoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */]])
    ], CategoryProvider);
    return CategoryProvider;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_sqlite__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_database_database__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_category_category__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_product_product__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/edit-product/edit-product.module#EditProductPageModule', name: 'EditProductPage', segment: 'edit-product', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* LOCALE_ID */], useValue: 'pt-BR' },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_8__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_category_category__["a" /* CategoryProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_product_product__["b" /* ProductProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, dbProvider) {
        var _this = this;
        this.rootPage = null;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            dbProvider.createDatabase()
                .then(function () {
                _this.openHomePage(splashScreen);
            })
                .catch(function () {
                _this.openHomePage(splashScreen);
            });
        });
    }
    MyApp.prototype.openHomePage = function (splashSCreen) {
        splashSCreen.hide();
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/dspl/Documents/ionic/sqltutorial/IonicSQLiteExample/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/dspl/Documents/ionic/sqltutorial/IonicSQLiteExample/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(sqlite) {
        this.sqlite = sqlite;
        console.log('Hello DatabaseProvider Provider');
    }
    DatabaseProvider.prototype.getDB = function () {
        return this.sqlite.create({
            name: 'products.db',
            location: 'default'
        });
    };
    DatabaseProvider.prototype.createDatabase = function () {
        var _this = this;
        return this.getDB()
            .then(function (db) {
            _this.createTables(db);
            _this.insertDefaultItems(db);
        })
            .catch(function (e) { return console.error(e); });
    };
    DatabaseProvider.prototype.createTables = function (db) {
        // Creating the tables
        db.sqlBatch([
            ['CREATE TABLE IF NOT EXISTS categories (id integer primary key AUTOINCREMENT NOT NULL, name TEXT)'],
            ['CREATE TABLE IF NOT EXISTS products (id integer primary key AUTOINCREMENT NOT NULL, name TEXT, price REAL, duedate DATE, active integer, category_id integer, FOREIGN KEY(category_id) REFERENCES categories(id))']
        ])
            .then(function () { return console.log('Tabelas criadas'); })
            .catch(function (e) { return console.error('Erro ao criar as tabelas', e); });
    };
    DatabaseProvider.prototype.insertDefaultItems = function (db) {
        db.executeSql('select COUNT(id) as qtd from categories', [])
            .then(function (data) {
            //If there is no record
            if (data.rows.item(0).qtd == 0) {
                // Creating the tables
                db.sqlBatch([
                    ['insert into categories (name) values (?)', ['Hambúrgueres']],
                    ['insert into categories (name) values (?)', ['Bebidas']],
                    ['insert into categories (name) values (?)', ['Sobremesas']]
                ])
                    .then(function () { return console.log('Dados padrões incluídos'); })
                    .catch(function (e) { return console.error('Erro ao incluir dados padrões', e); });
            }
        })
            .catch(function (e) { return console.error('Erro ao consultar a qtd de categorias', e); });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map