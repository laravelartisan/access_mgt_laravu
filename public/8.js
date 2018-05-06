webpackJsonp([8],{

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(630)
/* template */
var __vue_template__ = __webpack_require__(631)
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
Component.options.__file = "resources\\assets\\src\\views\\admin\\MenuManagement.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2516bb59", Component.options)
  } else {
    hotAPI.reload("data-v-2516bb59", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 630:
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
            picked: 0,
            menuActions: [{
                type: '',
                label: '',
                route: '',
                sequence: '',
                status: 1,
                default: 0
            }]
        };
    },
    methods: {
        addRow: function addRow(index) {
            this.menuActions.push({
                type: '',
                label: '',
                route: '',
                sequence: '',
                status: 1,
                default: index + 1
            });
            //                this.menuActions[this.picked].default = true
            console.log(this.menuActions);
        },
        removeRow: function removeRow(index) {
            this.menuActions.splice(index, 1);
        }
    }
};

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row menu-management" }, [
        _c("div", { staticClass: "col-lg-3 new-menu" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v(
                "\n                        Add new Menu\n\n                    "
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "form-group",
                attrs: { action: "", method: "post" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.userSubmit($event)
                  }
                }
              },
              [_vm._m(0)]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-9 menu-action" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _vm._m(2),
                _vm._v(" "),
                _vm._l(_vm.menuActions, function(menuAction, index) {
                  return _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "col-2" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: menuAction.type,
                              expression: "menuAction.type"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                menuAction,
                                "type",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "", disabled: "" } }, [
                            _vm._v("Type")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v("type one")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "2" } }, [
                            _vm._v("type two")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: menuAction.label,
                            expression: "menuAction.label"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: { type: "text" },
                        domProps: { value: menuAction.label },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(menuAction, "label", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: menuAction.route,
                            expression: "menuAction.route"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: { type: "text" },
                        domProps: { value: menuAction.route },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(menuAction, "route", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: menuAction.sequence,
                            expression: "menuAction.sequence"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: { type: "text" },
                        domProps: { value: menuAction.sequence },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              menuAction,
                              "sequence",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: menuAction.status,
                              expression: "menuAction.status"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                menuAction,
                                "status",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v("Active")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v("Inactive")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-1" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.picked,
                            expression: "picked"
                          }
                        ],
                        attrs: { type: "radio" },
                        domProps: {
                          value: menuAction.default,
                          checked: _vm._q(_vm.picked, menuAction.default)
                        },
                        on: {
                          change: function($event) {
                            _vm.picked = menuAction.default
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-1" }, [
                      index == _vm.menuActions.length - 1 && index > 0
                        ? _c(
                            "span",
                            {
                              staticStyle: { cursor: "pointer" },
                              on: {
                                click: function($event) {
                                  _vm.removeRow(index)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fa fa-minus" })]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      index > 0 && index < _vm.menuActions.length - 1
                        ? _c(
                            "span",
                            {
                              staticStyle: { cursor: "pointer" },
                              on: {
                                click: function($event) {
                                  _vm.removeRow(index)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fa fa-minus" })]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      index == _vm.menuActions.length - 1
                        ? _c(
                            "span",
                            {
                              staticStyle: { cursor: "pointer" },
                              on: {
                                click: function($event) {
                                  _vm.addRow(index)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fa fa-plus" })]
                          )
                        : _vm._e()
                    ])
                  ])
                })
              ],
              2
            )
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
      _c("div", { staticClass: "form-row" }, [
        _c("div", { staticClass: "col-lg-5" }, [
          _c("label", [_vm._v("Module Name:")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-7" }, [
          _c(
            "select",
            { staticClass: "form-control form-control-sm tax-box" },
            [
              _c("option", { attrs: { value: "", disabled: "" } }, [
                _vm._v("Select Module")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "1" } }, [_vm._v("Select 1")])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-row" }, [
        _c("div", { staticClass: "col-lg-5" }, [
          _c("label", [_vm._v("Menu Name:")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-7" }, [
          _c("input", {
            staticClass: "form-control form-control-sm tax-box",
            attrs: { type: "text" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-row" }, [
        _c("div", { staticClass: "col-lg-5" }, [
          _c("label", [_vm._v("Menu Link:")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-7" }, [
          _c("input", {
            staticClass: "form-control form-control-sm tax-box",
            attrs: { type: "text" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-row" }, [
        _c("div", { staticClass: "col-lg-5" }, [
          _c("label", [_vm._v("Parent Menu:")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-7" }, [
          _c(
            "select",
            { staticClass: "form-control form-control-sm tax-box" },
            [
              _c("option", { attrs: { value: "", disabled: "" } }, [
                _vm._v("Select Parent")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "1" } }, [_vm._v("Select 1")])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-row" }, [
        _c("div", { staticClass: "col-lg-5" }, [
          _c("label", [_vm._v("Sequence:")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-7" }, [
          _c("input", {
            staticClass: "form-control form-control-sm tax-box",
            attrs: { type: "text" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-row" }, [
        _c("div", { staticClass: "col-lg-5" }, [
          _c("label", [_vm._v("Status:")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-7" }, [
          _c(
            "select",
            { staticClass: "form-control form-control-sm tax-box" },
            [
              _c("option", { attrs: { value: "", disabled: "" } }, [
                _vm._v("Select Status")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "1" } }, [_vm._v("Select 1")])
            ]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "col-lg-10" }, [
        _vm._v(
          "\n                            Add a New Action\n                        "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-row" }, [
      _c("div", { staticClass: "col-lg-2" }, [_c("label", [_vm._v("Type")])]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-2" }, [_c("label", [_vm._v("Label")])]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-2" }, [_c("label", [_vm._v("Route")])]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-2" }, [
        _c("label", [_vm._v("Sequence")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-2" }, [_c("label", [_vm._v("Status")])]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-1" }, [
        _c("label", [_vm._v("Default")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-1" }, [_c("label", [_vm._v("Action")])])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2516bb59", module.exports)
  }
}

/***/ })

});