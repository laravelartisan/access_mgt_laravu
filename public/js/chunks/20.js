webpackJsonp([20],{

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(651)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(653)
/* template */
var __vue_template__ = __webpack_require__(654)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources\\assets\\src\\components\\pre-costing\\CostComponents.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b46a0924", Component.options)
  } else {
    hotAPI.reload("data-v-b46a0924", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(652);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("f475ed04", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b46a0924\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CostComponents.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b46a0924\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CostComponents.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "\n.main {\n  padding-left: 3px;\n}\n.cost-components-tbl {\n  font-size: 9pt;\n}\n.cost-components-tbl tbody input, .cost-components-tbl td {\n    width: 70px;\n}\n.cost-components-tbl thead th {\n    text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 653:
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

exports.default = {
    methods: {
        showFabricCost: function showFabricCost(param) {
            if (param) {
                this.$store.dispatch('precosting/getFabricBudgetStatus', param);
            } else {
                this.$store.dispatch('precosting/getFabricBudgetStatus', param);
            }
        }
    }
};

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "table",
    { staticClass: "table table-bordered table-sm cost-components-tbl" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("td", [_vm._v("Fabric Cost")]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              attrs: { type: "number", readonly: "", value: "5050" },
              on: {
                click: function($event) {
                  _vm.showFabricCost(true)
                }
              }
            })
          ]),
          _vm._v(" "),
          _vm._m(1)
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("Trims Cost")]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              attrs: { type: "text" },
              on: {
                click: function($event) {
                  _vm.showFabricCost(false)
                }
              }
            })
          ]),
          _vm._v(" "),
          _vm._m(2)
        ]),
        _vm._v(" "),
        _vm._m(3),
        _vm._v(" "),
        _vm._m(4),
        _vm._v(" "),
        _vm._m(5),
        _vm._v(" "),
        _vm._m(6),
        _vm._v(" "),
        _vm._m(7),
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
        _vm._m(14),
        _vm._v(" "),
        _vm._m(15),
        _vm._v(" "),
        _vm._m(16),
        _vm._v(" "),
        _vm._m(17),
        _vm._v(" "),
        _vm._m(18),
        _vm._v(" "),
        _vm._m(19),
        _vm._v(" "),
        _vm._m(20)
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Cost Components")]),
        _vm._v(" "),
        _c("th", [_vm._v("Budgeted Cost")]),
        _vm._v(" "),
        _c("th", [_vm._v(" % To Q.price ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("input", { attrs: { type: "text" } })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("input", { attrs: { type: "text" } })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Embel. Cost")]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Gmts.Wash")]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Comml. Cost")]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Lab Test")]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Inspection ")]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("CM Cost")]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Freight")]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Currier Cost")]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Certificate Cost ")]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Operating Expenses")]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Commission")]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Depc. & Amort.")]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Total Cost")]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Price/Dzn")]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v(" Margin/Dzn")]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Price/Pcs")]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Final Cost/Pcs")]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Margin/pcs")]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })]),
      _vm._v(" "),
      _c("td", [_c("input", { attrs: { type: "text" } })])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b46a0924", module.exports)
  }
}

/***/ })

});