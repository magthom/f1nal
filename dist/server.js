/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/DB/index.ts":
/*!********************************!*\
  !*** ./src/server/DB/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Query = exports.Connection = void 0;\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\nvar config_1 = __webpack_require__(/*! ../config */ \"./src/server/config/index.ts\");\nvar charity_1 = __webpack_require__(/*! ./queries/charity */ \"./src/server/DB/queries/charity.ts\");\nexports.Connection = mysql.createConnection(config_1.default.mysql);\nexports.Query = function (query, values) {\n    return new Promise(function (resolve, reject) {\n        exports.Connection.query(query, values, function (err, results) {\n            if (err) {\n                return reject(err);\n            }\n            else {\n                return resolve(results);\n            }\n        });\n    });\n};\nexports.default = {\n    Charity: charity_1.default\n};\n\n\n//# sourceURL=webpack:///./src/server/DB/index.ts?");

/***/ }),

/***/ "./src/server/DB/queries/charity.ts":
/*!******************************************!*\
  !*** ./src/server/DB/queries/charity.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.post = exports.one = exports.all = void 0;\nvar index_1 = __webpack_require__(/*! ../index */ \"./src/server/DB/index.ts\");\nvar rp = __webpack_require__(/*! request-promise */ \"request-promise\");\nexports.all = function () {\n    return index_1.Query(\"SELECT * from charities LIMIT 24\");\n};\nexports.one = function (id) {\n    return index_1.Query(\"SELECT * from charities WHERE charities.id = ?\", [id]);\n};\nexports.post = function () { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        try {\n            rp(\"https://api.data.charitynavigator.org/v2/Organizations?app_id=02dd71fc&app_key=2e6246f49b03b338c9a87646306bc87f&pageSize=1000&rated=true&state=AL\")\n                .then(function (res) { return JSON.parse(res); })\n                .then(function (res) {\n                return res.map(function (x) {\n                    index_1.Query(\"INSERT INTO charities (charity_name, category_name, category_id, cause_name, cause_id, city, streetAddress1, \\n               postal_code, websiteURL, mission, tagline, EIN, rating) \\n               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)\", [\n                        x.charityName,\n                        x.category.categoryName,\n                        x.category.categoryID,\n                        x.cause.causeName,\n                        x.cause.causeID,\n                        x.mailingAddress.city,\n                        x.mailingAddress.streetAddress1,\n                        x.mailingAddress.postalCode,\n                        x.websiteURL,\n                        x.mission,\n                        x.tagLine,\n                        x.ein,\n                        x.rating\n                    ]);\n                });\n            });\n        }\n        catch (err) {\n            console.error(err);\n        }\n        ;\n        return [2 /*return*/];\n    });\n}); };\nexports.default = {\n    all: exports.all,\n    one: exports.one,\n    post: exports.post\n};\n\n\n//# sourceURL=webpack:///./src/server/DB/queries/charity.ts?");

/***/ }),

/***/ "./src/server/config/index.ts":
/*!************************************!*\
  !*** ./src/server/config/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nvar envFound = dotenv.config();\nif (!envFound) {\n    throw new Error('.env not found');\n}\nexports.default = {\n    mysql: {\n        host: process.env.DB_HOST,\n        user: process.env.DB_USER,\n        password: process.env.DB_PASS,\n        database: process.env.DB_SCHEMA\n    }\n};\n\n\n//# sourceURL=webpack:///./src/server/config/index.ts?");

/***/ }),

/***/ "./src/server/routes/api/charities.ts":
/*!********************************************!*\
  !*** ./src/server/routes/api/charities.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar router = express_1.Router();\nvar DB_1 = __webpack_require__(/*! ../../DB */ \"./src/server/DB/index.ts\");\n// get all route is localhost:3000/charities\nrouter.get(\"/\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n    var orgs, err_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, DB_1.default.Charity.all()];\n            case 1:\n                orgs = _a.sent();\n                console.log(orgs);\n                res.json(orgs);\n                return [3 /*break*/, 3];\n            case 2:\n                err_1 = _a.sent();\n                next(err_1);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\n// get one route is localhost:3000/charities/id\nrouter.get(\"/:id\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n    var id, org, err_2;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                id = Number(req.params.id);\n                _a.label = 1;\n            case 1:\n                _a.trys.push([1, 3, , 4]);\n                return [4 /*yield*/, DB_1.default.Charity.one(id)];\n            case 2:\n                org = (_a.sent())[0];\n                res.json(org);\n                return [3 /*break*/, 4];\n            case 3:\n                err_2 = _a.sent();\n                next(err_2);\n                return [3 /*break*/, 4];\n            case 4: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.post(\"/\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n    var err_3;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, DB_1.default.Charity.post()];\n            case 1:\n                _a.sent();\n                res.sendStatus(200);\n                return [3 /*break*/, 3];\n            case 2:\n                err_3 = _a.sent();\n                console.error(err_3);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\n// router.get('/:id?', async (req, res) => {\n//     const id = Number(req.params.id);\n//     try {\n//         if (id) {\n//             res.json({ id, msg: 'get one test'});\n//         } else {\n//             res.json({ msg: 'get all test'});\n//         }        \n//     } catch (error) {\n//         console.log(error);\n//         res.status(500).json({ msg: 'internal server errrrrrr', error });\n//     }\n// });\n// router.post('/', async (req, res) => {\n//     const newBody = { ... req.body };\n//     try {\n//         res.json({ msg: 'post test', bodyTest: newBody });\n//     } catch (error) {\n//         console.log(error);\n//         res.status(500).json({ msg: 'internal server errrrrrr', error });\n//     }\n// });\n// router.put('/:id', async (req, res) => {\n//     const id = Number(req.params.id);\n//     const editBody = { ... req.body };\n//     try {\n//         res.json({ msg: 'put test', testBody: editBody});\n//     } catch (error) {\n//         console.log(error);\n//         res.status(500).json({ msg: 'internal server errrrrrr', error });\n//     }\n// });\n// router.delete('/:id', async (req, res) => {\n//     const id = Number(req.params.id);\n//     try {\n//         res.json({ msg: 'delete test'})\n//     } catch (error) {\n//         console.log(error);\n//         res.status(500).json({ msg: 'internal server errrrrrr', error });\n//     }\n// });\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes/api/charities.ts?");

/***/ }),

/***/ "./src/server/routes/api/index.ts":
/*!****************************************!*\
  !*** ./src/server/routes/api/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar charities_1 = __webpack_require__(/*! ./charities */ \"./src/server/routes/api/charities.ts\");\nvar router = express_1.Router();\nrouter.use('/charities', charities_1.default);\nexports.default = router;\n//this routes api index links to routes/index via api path\n\n\n//# sourceURL=webpack:///./src/server/routes/api/index.ts?");

/***/ }),

/***/ "./src/server/routes/auth/index.ts":
/*!*****************************************!*\
  !*** ./src/server/routes/auth/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar router = express_1.Router();\n//router.use();\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes/auth/index.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n//copied code from router-template. CRUD typically not needed in indexes \nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar api_1 = __webpack_require__(/*! ./api */ \"./src/server/routes/api/index.ts\");\nvar auth_1 = __webpack_require__(/*! ./auth */ \"./src/server/routes/auth/index.ts\");\nvar router = express_1.Router();\nrouter.use('/api', api_1.default);\nrouter.use('/auth', auth_1.default);\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar morgan = __webpack_require__(/*! morgan */ \"morgan\");\nvar helmet = __webpack_require__(/*! helmet */ \"helmet\");\nvar cors = __webpack_require__(/*! cors */ \"cors\");\nvar compression = __webpack_require__(/*! compression */ \"compression\");\nvar passport = __webpack_require__(/*! passport */ \"passport\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\nvar app = express();\n//compress req/res objects\napp.use(helmet());\napp.use(cors());\napp.use(compression());\napp.use(morgan('dev'));\napp.use(express.static(\"public\"));\napp.use(express.json());\napp.use(passport.initialize());\napp.use(routes_1.default);\n//front-end routes for server to catch\napp.get('*', function (req, res) { return res.sendFile(path.join(__dirname, '../public/index.html')); });\nvar port = process.env.PORT || 3000;\napp.listen(port, function () { return console.log(\"Server listening on port: \" + port); });\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "request-promise":
/*!**********************************!*\
  !*** external "request-promise" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request-promise\");\n\n//# sourceURL=webpack:///external_%22request-promise%22?");

/***/ })

/******/ });