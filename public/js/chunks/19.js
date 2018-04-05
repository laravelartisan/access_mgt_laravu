webpackJsonp([19],{

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(608)
/* template */
var __vue_template__ = __webpack_require__(609)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\src\\components\\templates\\admin\\Footer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a8b4085", Component.options)
  } else {
    hotAPI.reload("data-v-4a8b4085", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//


exports.default = {};

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "platform-footer" }, [
      _c("a", { attrs: { href: "www.logicsoftbd.com" } }, [
        _vm._v("Logic Software Ltd")
      ]),
      _vm._v(" "),
      _c("i", {
        staticClass: "fa fa-copyright",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("2017 Platform.\n    "),
      _c("span", { staticClass: "float-right" }, [
        _vm._v("Powered by "),
        _c("a", { attrs: { href: "www.logicsoftbd.com" } }, [
          _vm._v("Logic Software")
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4a8b4085", module.exports)
  }
}

/***/ })

});