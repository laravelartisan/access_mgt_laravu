webpackJsonp([22],{

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(600)
/* template */
var __vue_template__ = __webpack_require__(601)
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
Component.options.__file = "resources\\assets\\src\\components\\templates\\admin\\Header.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6bbda477", Component.options)
  } else {
    hotAPI.reload("data-v-6bbda477", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 600:
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
//
//
//

exports.default = {
  methods: {
    sidebarToggle: function sidebarToggle(e) {
      e.preventDefault();
      document.body.classList.toggle('sidebar-hidden');
    },
    sidebarMinimize: function sidebarMinimize(e) {
      e.preventDefault();
      document.body.classList.toggle('sidebar-minimized');
    },
    mobileSidebarToggle: function mobileSidebarToggle(e) {
      e.preventDefault();
      document.body.classList.toggle('sidebar-mobile-show');
    },
    asideToggle: function asideToggle(e) {
      e.preventDefault();
      document.body.classList.toggle('aside-menu-hidden');
    },


    logout: function logout() {
      var _this = this;

      //              auth.signout();
      this.$store.dispatch('login/logoutRequest').then(function (response) {
        _this.$router.push({ name: 'login' });
      }).catch(function (error) {});
    }
  }
};

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", { staticClass: "platform-header navbar" }, [
    _c(
      "button",
      {
        staticClass: "navbar-toggler sidebar-toggler d-md-down-none",
        attrs: { type: "button" },
        on: { click: _vm.sidebarToggle }
      },
      [_c("i", { staticClass: "fa fa-bars", attrs: { "aria-hidden": "true" } })]
    ),
    _vm._v(" "),
    _c("ul", { staticClass: "d-md-down-none nav navbar-nav" }, [
      _c(
        "li",
        { staticClass: "nav-item px-3" },
        [
          _c(
            "router-link",
            {
              staticClass: "nav-link",
              attrs: {
                to: { name: "dashboard" },
                target: "_self",
                "aria-disabled": "false"
              }
            },
            [_vm._v("Dashboard")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { staticClass: "nav-item px-3" },
        [
          _c(
            "router-link",
            {
              staticClass: "nav-link",
              attrs: {
                to: { name: "users" },
                target: "_self",
                "aria-disabled": "false"
              }
            },
            [_vm._v("Users")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { staticClass: "nav-item px-3" },
        [
          _c(
            "router-link",
            {
              staticClass: "nav-link",
              attrs: {
                to: { name: "settings" },
                target: "_self",
                "aria-disabled": "false"
              }
            },
            [_vm._v("Settings")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { staticClass: "nav-item px-3" },
        [
          _c(
            "router-link",
            {
              staticClass: "nav-link",
              attrs: {
                to: { name: "orderEntry" },
                target: "_self",
                "aria-disabled": "false"
              }
            },
            [_vm._v("Order")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item px-3" }, [
        _c(
          "a",
          {
            staticClass: "nav-link",
            attrs: {
              href: "javascript:void(0)",
              target: "_self",
              "aria-disabled": "false"
            },
            on: { click: _vm.logout }
          },
          [_vm._v("Logout")]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6bbda477", module.exports)
  }
}

/***/ })

});