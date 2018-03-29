webpackJsonp([5],{

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(643)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(645)
/* template */
var __vue_template__ = __webpack_require__(646)
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
Component.options.__file = "resources\\assets\\src\\views\\admin\\Post.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d152e92", Component.options)
  } else {
    hotAPI.reload("data-v-0d152e92", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(644);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("4ecccf82", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d152e92\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Post.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d152e92\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Post.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "\n#loading{\n    background-color: #63ab97;\n    color: white;\n    font-size: 32px;\n    padding-top: 10vh;\n    text-align: center;\n    height: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 645:
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

exports.default = {
    data: function data() {
        return {
            inputFields: [{
                title: 'logic Software',
                description: 'Bangladesh'
            }],
            list: {
                settings: []
            }
        };
    },
    methods: {
        addField: function addField(index) {
            for (var i = 0; i <= 400; i++) {
                this.inputFields.push({
                    title: 'logic software' + index + i,
                    description: 'Bangladesh' + index + i
                });
            }
            /*this.inputFields.push({
                name:'logic software'+index,
                location:'Bangladesh'+index
            })*/
        },
        removeField: function removeField(index) {
            this.inputFields.splice(index, 1);
        },
        orderSubmit: function orderSubmit() {
            axios.post('/post', this.inputFields).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error.response);
            });
        }
    }
    /*created: function(){
     axios.get('/settings')
     .then( response => {
     this.list.settings = response.data.data;
     //this.search.menus = this.list.menusList;
     console.log(this.list.settings);
     })
     .catch(function (error) {
     console.log(error);
     });
     }*/
};

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", { staticClass: "main" }, [
    _c("div", { staticClass: "order-entry container" }, [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "form",
            {
              staticClass: "form-group",
              attrs: { action: "", method: "post" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.orderSubmit($event)
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "card-body" },
                _vm._l(_vm.inputFields, function(field, index) {
                  return _c(
                    "div",
                    { staticClass: "form-group row" },
                    [
                      _vm._l(field, function(input, order) {
                        return _c("div", { staticClass: "col-md-3" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.inputFields[index][order],
                                expression: "inputFields[index][order]"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            attrs: { type: "text" },
                            domProps: { value: _vm.inputFields[index][order] },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.inputFields[index],
                                  order,
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      }),
                      _vm._v(" "),
                      index == _vm.inputFields.length - 1
                        ? _c(
                            "div",
                            {
                              staticClass: "btn col-md-1",
                              staticStyle: { cursor: "pointer" },
                              on: {
                                click: function($event) {
                                  _vm.addField(index)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-plus" }),
                              _vm._v(" Add ")
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      index == _vm.inputFields.length - 1 && index > 0
                        ? _c(
                            "div",
                            {
                              staticClass: "btn col-md-1",
                              staticStyle: { cursor: "pointer" },
                              on: {
                                click: function($event) {
                                  _vm.removeField(index)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-minus" }),
                              _vm._v(" Remove ")
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      index > 0 && index < _vm.inputFields.length - 1
                        ? _c(
                            "div",
                            {
                              staticClass: "btn col-md-1",
                              staticStyle: { cursor: "pointer" },
                              on: {
                                click: function($event) {
                                  _vm.removeField(index)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-minus" }),
                              _vm._v("Remove ")
                            ]
                          )
                        : _vm._e()
                    ],
                    2
                  )
                })
              ),
              _vm._v(" "),
              _vm._m(1)
            ]
          )
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
    return _c("div", { staticClass: "card-header" }, [
      _vm._v("\n                    Data Entry\n                    "),
      _c("small", [_vm._v("(Demo Entry)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-footer" }, [
      _c(
        "button",
        { staticClass: "btn btn-sm btn-primary", attrs: { type: "submit" } },
        [_vm._v("Save")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0d152e92", module.exports)
  }
}

/***/ })

});