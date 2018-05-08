webpackJsonp([6],{

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(626)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(628)
/* template */
var __vue_template__ = __webpack_require__(629)
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
Component.options.__file = "resources\\assets\\src\\views\\admin\\Menu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-af4d2414", Component.options)
  } else {
    hotAPI.reload("data-v-af4d2414", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(627);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("02b1852c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-af4d2414\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Menu.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-af4d2414\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Menu.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "\n.global{\n    width: 952px;\n}\n", ""]);

// exports


/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vuex = __webpack_require__(224);

exports.default = {

    computed: (0, _vuex.mapState)({
        modules: function modules(state) {
            return state.modules.list;
        },

        isEditable: function isEditable() {
            return this.editableRowId > 0;
        }
    }),
    data: function data() {
        return {
            form: {
                module: '',
                menuName: '',
                parentMenu: '',
                route: '',
                status: ''
            },
            editableRowId: 0,
            listIndex: '',
            dropDown: {
                menus: []
            },
            list: []
        };
    },
    methods: {

        getMenusByModule: function getMenusByModule(moduleId) {
            var _this = this;

            var url = this.editableRowId > 0 ? '/menus/' + moduleId + '/module/' + this.editableRowId : '/menus/' + moduleId + '/module';

            axios.get(url).then(function (response) {
                _this.dropDown.menus = response.data.data;
            }).catch(function (error) {
                //                    console.log(error.response.data.error);
            });
        },

        getList: function getList() {
            var _this2 = this;

            axios.get('/menus').then(function (response) {
                _this2.list = response.data.data;
            }).catch(function (error) {
                //                    console.log(error.response.data.error);
            });
        },
        submitForm: function submitForm() {
            console.log(this.form);
            this.editableRowId == false ? this.insertNewRow() : this.updateRow();
        },

        insertNewRow: function insertNewRow() {
            var _this3 = this;

            axios.post('/menus', this.form).then(function (response) {
                var newRow = response.data.data;
                _this3.list.push(newRow);
                _this3.dropDown.menus.push({
                    id: newRow.id,
                    name: newRow.menuName
                });
                _this3.resetForm();
            }).catch(function (error) {
                /*this.serverErrors = error.response.data.errors;
                 console.log(this.serverErrors);*/
            });
        },

        updateRow: function updateRow() {
            var _this4 = this;

            axios.put('/menus/' + this.editableRowId, this.form).then(function (response) {
                _this4.list.splice(_this4.listIndex, 1, response.data.data);
            }).catch(function (error) {
                /*this.serverErrors = error.response.data.errors;
                 console.log(this.serverErrors);*/
            });
        },
        deleteRow: function deleteRow(menu, index) {
            var _this5 = this;

            this.editableRowId = 0;
            this.listIndex = index;
            axios.delete('/menus/' + menu.id).then(function (response) {
                _this5.list.splice(_this5.listIndex, 1);
                _this5.resetForm();
            }).catch(function (error) {
                /*this.serverErrors = error.response.data.errors;
                 console.log(this.serverErrors);*/
            });
        },
        editRow: function editRow(menu, index) {
            alert(menu.status);
            this.getMenusByModule(menu.module);
            this.form = menu;
            this.editableRowId = menu.id;
            this.listIndex = index;
        },

        resetForm: function resetForm() {
            for (var field in this.form) {
                this.form[field] = '';
            }
            this.editableRowId = 0;
        }

    },
    created: function created() {
        this.getList();
        this.$store.dispatch('modules/getModules');
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", { staticClass: "main" }, [
    _c("div", { staticClass: "container logic-one-col-form" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-8 offset-md-2" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(0),
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
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass:
                          "col-lg-3 col-form-label form-control-label"
                      },
                      [_vm._v("Module Name")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-9" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.module,
                              expression: "form.module"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.form,
                                  "module",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function($event) {
                                _vm.getMenusByModule(_vm.form.module)
                              }
                            ]
                          }
                        },
                        [
                          _c("option", { attrs: { value: "", disabled: "" } }, [
                            _vm._v("Select Module")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.modules, function(module) {
                            return _c(
                              "option",
                              { domProps: { value: module.id } },
                              [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(module.name) +
                                    "\n                                        "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass:
                          "col-lg-3 col-form-label form-control-label"
                      },
                      [_vm._v("Menu Name")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-9" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.menuName,
                            expression: "form.menuName"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: { type: "text" },
                        domProps: { value: _vm.form.menuName },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "menuName", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass:
                          "col-lg-3 col-form-label form-control-label"
                      },
                      [_vm._v("Root Menu")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-9" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.parentMenu,
                              expression: "form.parentMenu"
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
                                _vm.form,
                                "parentMenu",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "", disabled: "" } }, [
                            _vm._v("Select Menu")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "0" } }, [
                            _vm._v("Root Menu")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.dropDown.menus, function(menu) {
                            return _c(
                              "option",
                              { domProps: { value: menu.id } },
                              [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(menu.menuName) +
                                    "\n                                        "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass:
                          "col-lg-3 col-form-label form-control-label"
                      },
                      [_vm._v("Client Route")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-9" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.route,
                            expression: "form.route"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: { type: "text" },
                        domProps: { value: _vm.form.route },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "route", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass:
                          "col-lg-3 col-form-label form-control-label"
                      },
                      [_vm._v("Status")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-9" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.status,
                              expression: "form.status"
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
                                _vm.form,
                                "status",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "", disabled: "" } }, [
                            _vm._v("Select")
                          ]),
                          _vm._v(" "),
                          _c("option", { domProps: { value: true } }, [
                            _vm._v("Active")
                          ]),
                          _vm._v(" "),
                          _c("option", { domProps: { value: false } }, [
                            _vm._v("Inactive")
                          ])
                        ]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-footer" }, [
                  !_vm.isEditable
                    ? _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-sm btn-default logic-btn-default",
                          attrs: { type: "submit" }
                        },
                        [_vm._v(" Save")]
                      )
                    : _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-sm btn-default logic-btn-default",
                          attrs: { type: "submit" }
                        },
                        [_vm._v(" Update")]
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
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "show-user container" }, [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "card-block" }, [
            _c(
              "table",
              {
                staticClass:
                  "table table-responsive table-bordered table-striped table-sm"
              },
              [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.list, function(menu, index) {
                    return _c("tr", { staticClass: "show-user" }, [
                      _c("td", [
                        _vm._v(
                          "\n                                " +
                            _vm._s(index + 1) +
                            "\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                " +
                            _vm._s(menu.menuName) +
                            "\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                " +
                            _vm._s(menu.module) +
                            "\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                " +
                            _vm._s(menu.parentMenu) +
                            "\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                " +
                            _vm._s(menu.route) +
                            "\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                " +
                            _vm._s(menu.status) +
                            "\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            staticClass: "btn",
                            on: {
                              click: function($event) {
                                _vm.editRow(menu, index)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fa fa-edit" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "btn",
                            on: {
                              click: function($event) {
                                _vm.deleteRow(menu, index)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fa fa-trash" })]
                        )
                      ])
                    ])
                  })
                )
              ]
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
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [_vm._v("Menu Management")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [
        _c("i", { staticClass: "fa fa-align-justify" }),
        _vm._v(" Menu List")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("SL#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Menu")]),
        _vm._v(" "),
        _c("th", [_vm._v("Module")]),
        _vm._v(" "),
        _c("th", [_vm._v("Parent Menu")]),
        _vm._v(" "),
        _c("th", [_vm._v("Route")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-af4d2414", module.exports)
  }
}

/***/ })

});