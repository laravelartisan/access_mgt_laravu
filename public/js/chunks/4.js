webpackJsonp([4],{

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(647)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(649)
/* template */
var __vue_template__ = __webpack_require__(669)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-052206ae"
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
Component.options.__file = "resources\\assets\\src\\views\\admin\\PreCosting.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-052206ae", Component.options)
  } else {
    hotAPI.reload("data-v-052206ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(648);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("0043bd80", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-052206ae\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreCosting.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-052206ae\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PreCosting.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "\n.modal-content[data-v-052206ae] {\n  min-height: 450px;\n}\n", ""]);

// exports


/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _vuex = __webpack_require__(224);

exports.default = {
    components: {
        'pre-costing': function preCosting() {
            return __webpack_require__.e/* import() */(20).then(__webpack_require__.bind(null, 650));
        },
        'insert-button-group': function insertButtonGroup() {
            return __webpack_require__.e/* import() */(15/* duplicate */).then(__webpack_require__.bind(null, 586));
        },
        'fabric-cost': function fabricCost() {
            return __webpack_require__.e/* import() */(19).then(__webpack_require__.bind(null, 655));
        },
        'job-search': function jobSearch() {
            return __webpack_require__.e/* import() */(17/* duplicate */).then(__webpack_require__.bind(null, 597));
        }
    },
    computed: _extends({}, (0, _vuex.mapState)({
        fabricBudget: function fabricBudget(state) {
            return state.precosting.fabricBudget;
        }
    }))

};

/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "main",
    { staticClass: "main" },
    [
      _c("div", { staticClass: "logic-form row" }, [
        _c("div", { staticClass: "col-lg-12" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "form",
              {
                staticClass: "form-group",
                attrs: { action: "", method: "post" }
              },
              [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "form-group row" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.jobSearch",
                            modifiers: { jobSearch: true }
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: { type: "text", placeholder: "Job No" }
                      })
                    ]),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _vm._m(3),
                    _vm._v(" "),
                    _vm._m(4),
                    _vm._v(" "),
                    _vm._m(5),
                    _vm._v(" "),
                    _vm._m(6),
                    _vm._v(" "),
                    _vm._m(7)
                  ]),
                  _vm._v(" "),
                  _vm._m(8),
                  _vm._v(" "),
                  _vm._m(9),
                  _vm._v(" "),
                  _vm._m(10),
                  _vm._v(" "),
                  _vm._m(11),
                  _vm._v(" "),
                  _vm._m(12),
                  _vm._v(" "),
                  _vm._m(13),
                  _vm._v(" "),
                  _vm._m(14)
                ]),
                _vm._v(" "),
                _c("insert-button-group")
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-3" }, [_c("pre-costing")], 1),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-9" },
          [_vm.fabricBudget ? _c("fabric-cost") : _vm._e()],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "jobSearch",
            size: "lg",
            title: "Job Search",
            "no-close-on-backdrop": "",
            "no-close-on-esc": "",
            "ok-only": ""
          }
        },
        [_c("job-search")],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _vm._v("\n                    Pre-Costing\n                    "),
      _c("small", [_vm._v("V2")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("label", { attrs: { for: "jobId" } }, [_vm._v("Job No")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("label", { attrs: { for: "company" } }, [_vm._v("Company")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("select", { staticClass: "form-control form-control-sm" }, [
        _c("option", [_vm._v("Selecr Company")]),
        _vm._v(" "),
        _c("option", [_vm._v("Logic One")]),
        _vm._v(" "),
        _c("option", [_vm._v("Logic Two")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("label", { attrs: { for: "email" } }, [_vm._v("Quotation ID")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("input", {
        staticClass: "form-control form-control-sm",
        attrs: { type: "text" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("label", { attrs: { for: "email" } }, [_vm._v("Style Ref")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("input", {
        staticClass: "form-control form-control-sm",
        attrs: { type: "text" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "buyer" } }, [_vm._v("Style Des.")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("textarea", { staticClass: "form-control form-control-sm" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "email" } }, [_vm._v("Internal Ref")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("input", {
          staticClass: "form-control form-control-sm",
          attrs: { type: "text" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "email" } }, [_vm._v("Buyer")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("select", { staticClass: "form-control form-control-sm" }, [
          _c("option", [_vm._v("Select")]),
          _vm._v(" "),
          _c("option", [_vm._v("Logic One")]),
          _vm._v(" "),
          _c("option", [_vm._v("Logic Two")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "email", title: "Style Description" } }, [
          _vm._v("Prd. Dept.")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("select", { staticClass: "form-control form-control-sm" }, [
          _c("option", [_vm._v("Select")]),
          _vm._v(" "),
          _c("option", [_vm._v("Logic One")]),
          _vm._v(" "),
          _c("option", [_vm._v("Logic Two")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "Currency" } }, [_vm._v("Currency")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "logic-custom-md-1 col-md-1" }, [
        _c("select", { staticClass: "form-control form-control-sm" }, [
          _c("option", [_vm._v("Select")]),
          _vm._v(" "),
          _c("option", [_vm._v("Logic One")]),
          _vm._v(" "),
          _c("option", [_vm._v("Logic Two")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "logic-custom-md-11 col-md-1" }, [
        _c("input", {
          staticClass: "form-control form-control-sm",
          attrs: { type: "text" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "Agent" } }, [_vm._v("Agent")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("select", { staticClass: "form-control form-control-sm" }, [
          _c("option", [_vm._v("Select")]),
          _vm._v(" "),
          _c("option", [_vm._v("Logic One")]),
          _vm._v(" "),
          _c("option", [_vm._v("Logic Two")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "job qty" } }, [_vm._v("Job Qty.")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("input", {
          staticClass: "form-control form-control-sm",
          attrs: { type: "text" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "job qty" } }, [_vm._v("Order UOM")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("input", {
          staticClass: "form-control form-control-sm",
          attrs: { type: "text" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "buyer" } }, [_vm._v("Costing Date")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("input", {
          staticClass: "form-control form-control-sm",
          attrs: { type: "text" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "email" } }, [_vm._v("Incoterm")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("input", {
          staticClass: "form-control form-control-sm",
          attrs: { type: "text" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "email" } }, [_vm._v("Incoterm Place")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("input", {
          staticClass: "form-control form-control-sm",
          attrs: { type: "text" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "email" } }, [_vm._v("Machine/Line")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("input", {
          staticClass: "form-control form-control-sm",
          attrs: { type: "text" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "buyer" } }, [_vm._v("Prod/Line/Hr")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("input", {
          staticClass: "form-control form-control-sm",
          attrs: { type: "text" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "email" } }, [_vm._v("Costing Per")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("select", { staticClass: "form-control form-control-sm" }, [
          _c("option", [_vm._v("Select Costing %")]),
          _vm._v(" "),
          _c("option", [_vm._v("Logic One")]),
          _vm._v(" "),
          _c("option", [_vm._v("Logic Two")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "Region" } }, [_vm._v("Region")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("select", { staticClass: "form-control form-control-sm" }, [
          _c("option", [_vm._v("Select Region")]),
          _vm._v(" "),
          _c("option", [_vm._v("Logic One")]),
          _vm._v(" "),
          _c("option", [_vm._v("Logic Two")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "email" } }, [_vm._v("Approved")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("select", { staticClass: "form-control form-control-sm" }, [
          _c("option", { attrs: { value: "1" } }, [_vm._v("Yes")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "0" } }, [_vm._v("No")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "buyer" } }, [_vm._v("Sew. SMV")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("input", {
          staticClass: "form-control form-control-sm",
          attrs: { type: "text" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "email" } }, [_vm._v("Sew Eff %")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("input", {
          staticClass: "form-control form-control-sm",
          attrs: { type: "text" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "email" } }, [_vm._v("Cut. SMV")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("input", {
          staticClass: "form-control form-control-sm",
          attrs: { type: "text" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "email" } }, [_vm._v("Cut Eff %")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("input", {
          staticClass: "form-control form-control-sm",
          attrs: { type: "text" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "buyer" } }, [_vm._v("Remarks")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("textarea", { staticClass: "form-control form-control-sm" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "buyer" } }, [_vm._v("File no")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("input", {
          staticClass: "form-control form-control-sm",
          attrs: { type: "text" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "email" } }, [_vm._v("Images")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("input", {
          staticClass: "form-control form-control-sm",
          attrs: { type: "file" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "email" } })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("input", { attrs: { type: "button", value: "Pre Costing Copy" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "Ready To Approved" } }, [
          _vm._v("Ready To Approved")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("select", { staticClass: "form-control form-control-sm" }, [
          _c("option", { attrs: { value: "1" } }, [_vm._v("Yes")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "0" } }, [_vm._v("No")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "email" } }, [_vm._v("Budget Minuite")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("select", { staticClass: "form-control form-control-sm" }, [
          _c("option", [_vm._v("Selecr Budget Minuite")]),
          _vm._v(" "),
          _c("option", [_vm._v("Logic One")]),
          _vm._v(" "),
          _c("option", [_vm._v("Logic Two")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-1" }, [
        _c("label", { attrs: { for: "email" } }, [_vm._v("Copy From")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("input", {
          staticClass: "form-control form-control-sm",
          attrs: { type: "text" }
        })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-052206ae", module.exports)
  }
}

/***/ })

});