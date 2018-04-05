webpackJsonp([13],{

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(594)
/* template */
var __vue_template__ = __webpack_require__(610)
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
Component.options.__file = "resources\\assets\\src\\layouts\\Admin.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62f9ba20", Component.options)
  } else {
    hotAPI.reload("data-v-62f9ba20", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 594:
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
//
//
//
//
//


exports.default = {
  components: {
    'logic-header': function logicHeader() {
      return __webpack_require__.e/* import() */(18).then(__webpack_require__.bind(null, 595));
    },
    'logicSidebar': function logicSidebar() {
      return __webpack_require__.e/* import() */(17).then(__webpack_require__.bind(null, 598));
    },
    'logicFooter': function logicFooter() {
      return __webpack_require__.e/* import() */(19).then(__webpack_require__.bind(null, 607));
    }
  },

  created: function created() {}

};

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "platform" },
    [
      _c("logic-header"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "platform-body" },
        [_c("logic-sidebar"), _vm._v(" "), _c("router-view")],
        1
      ),
      _vm._v(" "),
      _c("logic-footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-62f9ba20", module.exports)
  }
}

/***/ })

});