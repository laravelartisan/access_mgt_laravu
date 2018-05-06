webpackJsonp([20],{

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(640)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(642)
/* template */
var __vue_template__ = __webpack_require__(643)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5e5112aa"
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
Component.options.__file = "resources\\assets\\src\\views\\admin\\Privilege.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e5112aa", Component.options)
  } else {
    hotAPI.reload("data-v-5e5112aa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(641);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("0e472cde", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e5112aa\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Privilege.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e5112aa\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Privilege.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "\n.menu-dropdown[data-v-5e5112aa]{\n    width: 14%;\n}\n.menu-dropdown-level[data-v-5e5112aa]{\n    width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 642:
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

    data: function data() {
        return {
            menus: [{
                name: 'Knit Garments',
                id: 1,
                children: [{
                    name: 'Order Tracking',
                    id: 2,
                    children: [{ name: 'Sales Forecast Entry', id: 3 }, { name: 'Quotation Inquery', id: 4 }]
                }, { name: 'Fabric Booking', id: 5 }, { name: 'Trims Booking', id: 6 }, { name: 'Service Booking', id: 7 }]
            }, {
                name: 'My Tree',
                id: 8,
                children: [{ name: 'hello', id: 9 }, { name: 'wat', id: 10 }, {
                    name: 'child folder',
                    id: 11,
                    children: [{
                        name: 'child folder',
                        id: 12,
                        children: [{ name: 'hello', id: 13 }, { name: 'wat', id: 14 }]
                    }, { name: 'hello', id: 15 }, { name: 'wat', id: 16 }, {
                        name: 'child folder',
                        id: 17,
                        children: [{ name: 'hello', id: 18 }, { name: 'wat', id: 19 }]
                    }]
                }, { name: 'Logic', id: 20 }, { name: 'Platform', id: 21 }]
            }]

        };
    }
};

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", { staticClass: "main" }, [
    _c("div", { staticClass: "container logic-one-col-form" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _c("h4", { staticClass: "text-center" }, [
                _vm._v("Role Privileges")
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  staticClass: "form",
                  attrs: { role: "form", autocomplete: "off" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.submitForm($event)
                    }
                  }
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "div",
                      { staticClass: "form-group row" },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        void 0,
                        _vm._v(" "),
                        _vm._m(2),
                        _vm._v(" "),
                        _vm._m(3),
                        _vm._v(" "),
                        _vm._m(4),
                        _vm._v(" "),
                        _vm._m(5)
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-default logic-btn-default",
                        attrs: { type: "submit" }
                      },
                      [_vm._v(" Save")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-default logic-btn-default",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.resetForm()
                          }
                        }
                      },
                      [_vm._v("Refresh")]
                    )
                  ])
                ]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body" }, [
      _c("div", { staticClass: "form-group row" }, [
        _c("div", { staticClass: "col-lg-2" }, [
          _c(
            "label",
            { staticClass: "col-lg-12 col-form-label form-control-label" },
            [_vm._v("Role")]
          ),
          _vm._v(" "),
          _c("select", { staticClass: "form-control form-control-sm" }, [
            _c("option", { attrs: { value: "", disabled: "" } }, [
              _vm._v("Select Role")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-2" }, [
          _c(
            "label",
            { staticClass: "col-lg-12 col-form-label form-control-label" },
            [_vm._v("Module")]
          ),
          _vm._v(" "),
          _c("select", { staticClass: "form-control form-control-sm" }, [
            _c("option", { attrs: { value: "", disabled: "" } }, [
              _vm._v("Select Module")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-2" }, [
          _c(
            "label",
            { staticClass: "col-lg-12 col-form-label form-control-label" },
            [_vm._v("Copy From")]
          ),
          _vm._v(" "),
          _c("select", { staticClass: "form-control form-control-sm" }, [
            _c("option", { attrs: { value: "", disabled: "" } }, [
              _vm._v("Select Role")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-2" }, [
          _c(
            "label",
            { staticClass: "col-lg-12 col-form-label form-control-label" },
            [_vm._v("Inherit From")]
          ),
          _vm._v(" "),
          _c("select", { staticClass: "form-control form-control-sm" }, [
            _c("option", { attrs: { value: "", disabled: "" } }, [
              _vm._v("Select Role")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-2" }, [
          _c(
            "label",
            { staticClass: "col-lg-12 col-form-label form-control-label" },
            [_vm._v("Permission Level")]
          ),
          _vm._v(" "),
          _c("select", { staticClass: "form-control form-control-sm" }, [
            _c("option", { attrs: { value: "", disabled: "" } }, [
              _vm._v("Select Role")
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "" } }, [_vm._v("Selective")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "" } }, [_vm._v("Full")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "menu-dropdown" }, [
      _c(
        "label",
        {
          staticClass: "menu-dropdown-level col-form-label form-control-label"
        },
        [_vm._v("Role")]
      ),
      _vm._v(" "),
      _c("select", { staticClass: "form-control form-control-sm" }, [
        _c("option", { attrs: { value: "", disabled: "" } }, [
          _vm._v("Select Role")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "menu-dropdown" }, [
      _c(
        "label",
        {
          staticClass: "menu-dropdown-level col-form-label form-control-label"
        },
        [_vm._v("Module")]
      ),
      _vm._v(" "),
      _c("select", { staticClass: "form-control form-control-sm" }, [
        _c("option", { attrs: { value: "", disabled: "" } }, [
          _vm._v("Select Module")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "menu-dropdown" }, [
      _c(
        "label",
        {
          staticClass: "menu-dropdown-level col-form-label form-control-label"
        },
        [_vm._v("Copy From")]
      ),
      _vm._v(" "),
      _c("select", { staticClass: "form-control form-control-sm" }, [
        _c("option", { attrs: { value: "", disabled: "" } }, [
          _vm._v("Select Role")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "menu-dropdown" }, [
      _c(
        "label",
        {
          staticClass: "menu-dropdown-level col-form-label form-control-label"
        },
        [_vm._v("Inherit From")]
      ),
      _vm._v(" "),
      _c("select", { staticClass: "form-control form-control-sm" }, [
        _c("option", { attrs: { value: "", disabled: "" } }, [
          _vm._v("Select Role")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "menu-dropdown" }, [
      _c(
        "label",
        {
          staticClass: "menu-dropdown-level col-form-label form-control-label"
        },
        [_vm._v("Permission Level")]
      ),
      _vm._v(" "),
      _c("select", { staticClass: "form-control form-control-sm" }, [
        _c("option", { attrs: { value: "", disabled: "" } }, [
          _vm._v("Select Role")
        ]),
        _vm._v(" "),
        _c("option", { attrs: { value: "" } }, [_vm._v("Selective")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "" } }, [_vm._v("Full")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5e5112aa", module.exports)
  }
}

/***/ })

});