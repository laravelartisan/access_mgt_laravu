webpackJsonp([8],{

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(588)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(590)
/* template */
var __vue_template__ = __webpack_require__(591)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6dfa2787"
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
Component.options.__file = "resources\\assets\\src\\widgets\\sidebar\\tree.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6dfa2787", Component.options)
  } else {
    hotAPI.reload("data-v-6dfa2787", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(589);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("52558822", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6dfa2787\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tree.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6dfa2787\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tree.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "\n.fade-enter-active[data-v-6dfa2787], .fade-leave-active[data-v-6dfa2787] {\n    -webkit-transition: all .5s ease;\n    transition: all .5s ease;\n}\n.fade-enter[data-v-6dfa2787], .fade-leave-to[data-v-6dfa2787]{\n    opacity: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 590:
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
    name: 'tree',
    props: {
        model: Object
    },
    data: function data() {
        return {
            open: false,
            folder: false
        };
    },
    computed: {
        isFolder: function isFolder() {
            return this.folder = this.model.children && this.model.children.length;
        }
    },
    methods: {
        collapseMenu: function collapseMenu() {
            if (this.folder) {
                this.toggle();
            }
        },
        toggle: function toggle() {
            if (this.isFolder) {
                this.open = !this.open;
            }
        },
        changeType: function changeType() {
            /*if (!this.isFolder) {
                Vue.set(this.model, 'children', [])
                this.addChild()
                this.open = true
            }*/
        },
        addChild: function addChild() {
            this.model.children.push({
                name: 'new stuff'
            });
        }
    }
};

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    { class: { parent_li: _vm.isFolder }, on: { dblclick: _vm.changeType } },
    [
      _vm.isFolder
        ? _c("i", {
            staticClass: "fa icon-open-state",
            class: {
              "fa-plus-square-o": !_vm.open,
              "fa-minus-square-o": _vm.open
            },
            on: { click: _vm.toggle }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.model.uri
        ? _c(
            "router-link",
            {
              attrs: { to: { name: _vm.model.uri }, title: _vm.model.name },
              nativeOn: {
                click: function($event) {
                  return _vm.collapseMenu($event)
                }
              }
            },
            [_vm._v(_vm._s(_vm.model.name))]
          )
        : _c(
            "a",
            {
              attrs: { href: "javascript:void(0)", title: _vm.model.name },
              on: { click: _vm.collapseMenu }
            },
            [_vm._v(_vm._s(_vm.model.name))]
          ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        _vm.isFolder
          ? _c(
              "ul",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.open,
                    expression: "open"
                  }
                ]
              },
              _vm._l(_vm.model.children, function(child, index) {
                return _c("tree", { key: index, attrs: { model: child } })
              })
            )
          : _vm._e()
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-6dfa2787", module.exports)
  }
}

/***/ })

});