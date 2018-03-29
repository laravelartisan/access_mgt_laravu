webpackJsonp([11],{

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(627)
/* template */
var __vue_template__ = __webpack_require__(628)
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
Component.options.__file = "resources\\assets\\src\\views\\admin\\OrderEntry.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d8396ca", Component.options)
  } else {
    hotAPI.reload("data-v-1d8396ca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 627:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {};

/***/ }),

/***/ 628:
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
    return _c("main", { staticClass: "main" }, [
      _c("div", { staticClass: "order-entry container" }, [
        _c("div", { staticClass: "col-lg-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("\n\t\t\t\t          Order Entry\n\t\t\t\t          "),
              _c("small", [_vm._v("(Garments Order Entry)")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c(
                "form",
                {
                  staticClass: "form-group",
                  attrs: { action: "", method: "post" }
                },
                [
                  _c("div", { staticClass: "form-group row" }, [
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "jobId" } }, [
                        _vm._v("Job No")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("input", {
                        staticClass: "form-control form-control-sm",
                        attrs: { type: "text", placeholder: "Job No" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "company" } }, [
                        _vm._v("Company")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "select",
                        { staticClass: "form-control form-control-sm" },
                        [
                          _c("option", [_vm._v("Selecr Company")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic One")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic Two")])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "email" } }, [
                        _vm._v("Location")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "select",
                        { staticClass: "form-control form-control-sm" },
                        [
                          _c("option", [_vm._v("Selecr Location")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic One")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic Two")])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "buyer" } }, [
                        _vm._v("Buyer")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("input", {
                        staticClass: "form-control form-control-sm",
                        attrs: {
                          type: "text",
                          placeholder: "Double click for Quotation"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "email" } }, [
                        _vm._v("Style Ref.")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("input", {
                        staticClass: "form-control form-control-sm",
                        attrs: {
                          type: "text",
                          placeholder: "Double click for Quotation"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-1" }, [
                      _c(
                        "label",
                        { attrs: { for: "email", title: "Style Description" } },
                        [_vm._v("Sty. Des.")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("input", {
                        staticClass: "form-control form-control-sm",
                        attrs: {
                          type: "text",
                          placeholder: "Style Description"
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "buyer" } }, [
                        _vm._v("Prd. Dpt.")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "logic-custom-md-2 col-md-2" }, [
                      _c(
                        "select",
                        { staticClass: "form-control form-control-sm" },
                        [
                          _c("option", [_vm._v("Select")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic One")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic Two")])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "logic-custom-md-1 col-md-1" }, [
                      _c("input", {
                        staticClass: "form-control form-control-sm",
                        attrs: { type: "text" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "email" } }, [
                        _vm._v("Sub. Dpt.")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "select",
                        { staticClass: "form-control form-control-sm" },
                        [
                          _c("option", [_vm._v("Select")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic One")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic Two")])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "email" } }, [
                        _vm._v("Currency")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "select",
                        { staticClass: "form-control form-control-sm" },
                        [
                          _c("option", [_vm._v("Select")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic One")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic Two")])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "buyer" } }, [
                        _vm._v("Repeat")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "logic-custom-md-2 col-md-2" }, [
                      _c("input", {
                        staticClass: "form-control form-control-sm",
                        attrs: { type: "text", placeholder: "Repeat No/Job" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "logic-custom-md-1 col-md-1" }, [
                      _c("input", {
                        staticClass: "form-control form-control-sm",
                        attrs: { type: "text", placeholder: "Browse Job" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "email" } }, [
                        _vm._v("Region")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "select",
                        { staticClass: "form-control form-control-sm" },
                        [
                          _c("option", [_vm._v("Select Region")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic One")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic Two")])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "email" } }, [
                        _vm._v("Prd. Cat.")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "select",
                        { staticClass: "form-control form-control-sm" },
                        [
                          _c("option", [_vm._v("Select Product Category")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic One")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic Two")])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "buyer" } }, [
                        _vm._v("Leader")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "select",
                        { staticClass: "form-control form-control-sm" },
                        [
                          _c("option", [_vm._v("Select Leader")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic One")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic Two")])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "email" } }, [
                        _vm._v("Dea Mer.")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "select",
                        { staticClass: "form-control form-control-sm" },
                        [
                          _c("option", [_vm._v("Select Dealing Merchant")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic One")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic Two")])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "email" } }, [
                        _vm._v("Fac Mer.")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "select",
                        { staticClass: "form-control form-control-sm" },
                        [
                          _c("option", [_vm._v("Select Factory Merchant")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic One")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic Two")])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "buyer" } }, [
                        _vm._v("BH Mer")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("input", {
                        staticClass: "form-control form-control-sm",
                        attrs: { type: "text", placeholder: "BH Merchant" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "email" } }, [
                        _vm._v("Remarks")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("input", {
                        staticClass: "form-control form-control-sm",
                        attrs: { type: "text", placeholder: "Remarks" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "email" } }, [_vm._v("Mode")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "select",
                        { staticClass: "form-control form-control-sm" },
                        [
                          _c("option", [_vm._v("Select Ship Mode")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic One")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic Two")])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "buyer" } }, [_vm._v("Uom")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "logic-custom-md-2 col-md-2" }, [
                      _c(
                        "select",
                        { staticClass: "form-control form-control-sm" },
                        [
                          _c("option", [_vm._v("Selecr Order Uom")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic One")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic Two")])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "logic-custom-md-1 col-md-1" }, [
                      _c("input", {
                        staticClass: "form-control form-control-sm",
                        attrs: { type: "button", value: "Item Det." }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "email" } }, [_vm._v("SMV")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("input", {
                        staticClass: "form-control form-control-sm",
                        attrs: { type: "text", placeholder: "SMV" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "email" } }, [
                        _vm._v("Packing")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "select",
                        { staticClass: "form-control form-control-sm" },
                        [
                          _c("option", [_vm._v("Select Packing")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic One")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic Two")])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "buyer" } }, [
                        _vm._v("Season")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "select",
                        { staticClass: "form-control form-control-sm" },
                        [
                          _c("option", [_vm._v("Selecr Order Uom")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic One")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic Two")])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "email" } }, [
                        _vm._v("Agent")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "select",
                        { staticClass: "form-control form-control-sm" },
                        [
                          _c("option", [_vm._v("Selecr Order Uom")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic One")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic Two")])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "email" } }, [
                        _vm._v("Client")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "select",
                        { staticClass: "form-control form-control-sm" },
                        [
                          _c("option", [_vm._v("Select Client")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic One")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Logic Two")])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "buyer" } }, [
                        _vm._v("Images")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("input", {
                        staticClass: "form-control form-control-sm",
                        attrs: { type: "file" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "email" } }, [_vm._v("File")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("input", {
                        staticClass: "form-control form-control-sm",
                        attrs: { type: "file" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-1" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-primary",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("Internal Referance")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("label", { attrs: { for: "buyer" } }, [
                        _vm._v("Copy From")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("input", {
                        staticClass: "form-control form-control-sm",
                        attrs: { type: "text" }
                      })
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-primary",
                  attrs: { type: "submit" }
                },
                [_vm._v("Save")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-primary",
                  attrs: { type: "button" }
                },
                [_vm._v("Update")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-primary",
                  attrs: { type: "button" }
                },
                [_vm._v("Delete")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-primary",
                  attrs: { type: "button" }
                },
                [_vm._v("Refresh")]
              )
            ])
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-1d8396ca", module.exports)
  }
}

/***/ })

});