webpackJsonp([17],{

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(599)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(601)
/* template */
var __vue_template__ = __webpack_require__(606)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a0f1673c"
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
Component.options.__file = "resources\\assets\\src\\components\\templates\\admin\\Sidebar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a0f1673c", Component.options)
  } else {
    hotAPI.reload("data-v-a0f1673c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(600);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("12cab121", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a0f1673c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sidebar.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a0f1673c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sidebar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "/* .vue-tree {\n     font-size: 14px;\n     min-height: 20px;\n     -webkit-border-radius: 4px;\n     -moz-border-radius: 4px;\n     border-radius: 4px;\n li {\n     margin: 0;\n     padding: 5px;\n     position: relative;\n     list-style: none;\n span, i, a {\n     line-height: 20px;\n     vertical-align: middle;\n }\n a + a {\n     margin-left: 5px;\n }\n li i.icon-open-state {\n     font-size: 16px;\n }\n }\n ul ul li:hover {\n     background: rgba(0, 0, 0, .015)\n }\n\n li:after, li:before {\n     content: '';\n     left: -18px;\n     position: absolute;\n     right: auto\n }\n\n li:before {\n     border-left: 1px solid #999;\n     bottom: 50px;\n     height: 100%;\n     top: -16px;\n     width: 1px;\n }\n\n li:after {\n     border-top: 1px solid #999;\n     height: 20px;\n     top: 17px;\n     width: 22px\n }\n\n li span {\n     display: inline-block;\n     padding: 3px 5px;\n     text-decoration: none;\n }\n\n ul > li::after, .vue-tree > ul > li:before {\n     border: 0\n }\n\n li:last-child::before {\n     height: 34px\n }\n\n ul {\n     padding-left: 0\n }\n\n ul ul {\n     padding-left: 24px;\n     padding-top: 10px\n }\n }*/\n", ""]);

// exports


/***/ }),

/***/ 601:
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

exports.default = {
    components: {
        'tree': function tree() {
            return __webpack_require__.e/* import() */(16/* duplicate */).then(__webpack_require__.bind(null, 587));
        }
    },
    data: function data() {
        return {
            treeData: [{
                name: 'Knit Garments',
                uri: 'menu',
                children: [{
                    name: 'Order Tracking',
                    children: [{ name: 'Sales Forecast Entry' }, { name: 'Quotation Inquery' }, { name: 'Sample Development' }, { name: 'Price Quotation' }, { name: 'Order Entry' }, { name: 'Color and Size Breakdown' }, { name: 'Order Update Entry' }, { name: 'Pre-Costing' }, { name: 'Job Copy-V2' }, { name: 'Copy Job' }, { name: 'Buyer Quotation Final' }, { name: 'Pre-Costing V2' }, { name: 'Order Entry by Matrix' }, { name: 'Order Import From Excel' }, { name: 'Strip Measurement' }, { name: 'Style Ref. Entry' }, { name: 'Matrix Order Update' }, { name: 'Sample Requisition' }]
                }, { name: 'Fabric Booking' }, { name: 'Trims Booking' }, { name: 'Service Booking' }]
            }, {
                name: 'My Tree',
                children: [{ name: 'hello' }, { name: 'wat' }, {
                    name: 'child folder',
                    children: [{
                        name: 'child folder',
                        children: [{ name: 'hello' }, { name: 'wat' }]
                    }, { name: 'hello' }, { name: 'wat' }, {
                        name: 'child folder',
                        children: [{ name: 'hello' }, { name: 'wat' }]
                    }]
                }, { name: 'Logic' }, { name: 'Platform' }]
            }, {
                name: 'My Tree',
                children: [{ name: 'hello' }, { name: 'wat' }, {
                    name: 'child folder',
                    children: [{
                        name: 'child folder',
                        children: [{ name: 'hello' }, { name: 'wat' }]
                    }, { name: 'hello' }, { name: 'wat' }, {
                        name: 'child folder',
                        children: [{ name: 'hello' }, { name: 'wat' }]
                    }]
                }, { name: 'Logic' }, { name: 'Platform' }]
            }]

        };
    }
};

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "sidebar" }, [
    _c("nav", { staticClass: "sidebar-nav" }, [
      _c("div", { staticClass: "vue-tree" }, [
        _c(
          "ul",
          _vm._l(_vm.treeData, function(td, index) {
            return _c(
              "div",
              { staticClass: "sub-tree" },
              [_c("tree", { attrs: { model: td } })],
              1
            )
          })
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
    require("vue-hot-reload-api")      .rerender("data-v-a0f1673c", module.exports)
  }
}

/***/ })

});