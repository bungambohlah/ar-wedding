"use strict";
(() => {
var exports = {};
exports.id = 472;
exports.ids = [472];
exports.modules = {

/***/ 685:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_rate_limit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(490);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(231);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lowdb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(257);
/* harmony import */ var _utils_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(502);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lowdb__WEBPACK_IMPORTED_MODULE_2__]);
lowdb__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const one_year = 1000 * 60 * 60 * 24 * 356; // 1 year

const limiter = (0,_utils_rate_limit__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)({
  interval: one_year,
  uniqueTokenPerInterval: 500 // Max 500 users per second

});
const attendJsonPath = "./data/attended.json";
async function handler(req, res) {
  const {
    headers: {
      cookie
    }
  } = req;
  const cookies = (typeof cookie === "string" && cookie || "").split("; ").reduce((obj, v) => {
    const [key, val] = v.split("=");
    obj[key] = val;
    return obj;
  }, {});
  let token = cookies.token || null;

  if (!token) {
    token = uuid__WEBPACK_IMPORTED_MODULE_1__.v4();
    await (0,_utils_cookies__WEBPACK_IMPORTED_MODULE_3__/* .setCookie */ .d)(res, "token", token, {
      maxAge: one_year
    });
  }

  try {
    await limiter.check(res, 2, token); // 1 requests per 1 year

    if (req.method === "POST" && req.body && req.body.name) {
      // handle submit name attended
      const {
        name
      } = req.body;

      if (typeof name === "string" && name.length) {
        const id = uuid__WEBPACK_IMPORTED_MODULE_1__.v4();
        const adapter = new lowdb__WEBPACK_IMPORTED_MODULE_2__.JSONFile(attendJsonPath);
        const db = new lowdb__WEBPACK_IMPORTED_MODULE_2__.Low(adapter); // Read data from JSON file, this will set db.data content

        try {
          await db.read();
        } catch (error) {
          db.data = [];
        }

        if (Array.isArray(db.data) && db.data.length) {
          db.data.push({
            id,
            name
          });
        } else {
          db.data = [{
            id,
            name
          }];
        } // Write db.data content to db.json


        await db.write();
      }

      res.json({
        status: 200,
        message: "ok"
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "not found"
      });
    }
  } catch (error) {
    console.log(error);
    res.status(429).json({
      error: "Rate limit exceeded"
    });
  }
}
});

/***/ }),

/***/ 502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": () => (/* binding */ setCookie)
});

;// CONCATENATED MODULE: external "cookie"
const external_cookie_namespaceObject = require("cookie");
;// CONCATENATED MODULE: ./utils/cookies.js

/**
 * This sets `cookie` using the `res` object
 */

const setCookie = (res, name, value, options = {}) => {
  const stringValue = typeof value === "object" ? "j:" + JSON.stringify(value) : String(value);

  if ("maxAge" in options) {
    options.expires = new Date(Date.now() + options.maxAge);
    options.maxAge /= 1000;
  }

  res.setHeader("Set-Cookie", (0,external_cookie_namespaceObject.serialize)(name, String(stringValue), options));
};

/***/ }),

/***/ 490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// thanks to leerob (https://github.com/leerob) for share rate limit using lru cache : 
const LRU = __webpack_require__(8);

const rateLimit = options => {
  const tokenCache = new LRU({
    max: parseInt(options.uniqueTokenPerInterval || 500, 10),
    maxAge: parseInt(options.interval || 60000, 10)
  });
  return {
    check: (res, limit, token) => new Promise((resolve, reject) => {
      const tokenCount = tokenCache.get(token) || [0];

      if (tokenCount[0] === 0) {
        tokenCache.set(token, tokenCount);
      }

      tokenCount[0] += 1;
      const currentUsage = tokenCount[0];
      const isRateLimited = currentUsage >= parseInt(limit, 10);
      res.setHeader('X-RateLimit-Limit', limit);
      res.setHeader('X-RateLimit-Remaining', isRateLimited ? 0 : limit - currentUsage);
      return isRateLimited ? reject() : resolve();
    })
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rateLimit);

/***/ }),

/***/ 257:
/***/ ((module) => {

module.exports = import("lowdb");;

/***/ }),

/***/ 8:
/***/ ((module) => {

module.exports = require("lru-cache");

/***/ }),

/***/ 231:
/***/ ((module) => {

module.exports = require("uuid");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(685));
module.exports = __webpack_exports__;

})();