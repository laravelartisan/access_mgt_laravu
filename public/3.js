webpackJsonp([3],{

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(632)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(634)
/* template */
var __vue_template__ = __webpack_require__(635)
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
Component.options.__file = "resources\\assets\\src\\views\\admin\\Role.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-871b14e6", Component.options)
  } else {
    hotAPI.reload("data-v-871b14e6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(633);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("7da8e5ee", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-871b14e6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Role.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-871b14e6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Role.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "\n.global{\n    width: 952px;\n}\n", ""]);

// exports


/***/ }),

/***/ 634:
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

exports.default = {

    computed: {
        isEditable: function isEditable() {
            return this.editableRowId > 0;
        }
    },
    data: function data() {
        return {
            message: {
                success: '',
                failure: ''
            },
            form: {
                name: '',
                parentRole: '',
                homePage: '',
                status: ''
            },
            editableRowId: 0,
            listIndex: '',
            dropDown: {
                roles: [],
                homePages: []
            },
            list: []
        };
    },
    methods: {

        getList: function getList() {
            var _this = this;

            axios.get('/roles').then(function (response) {
                _this.list = response.data.data;
                _this.list.forEach(function (role) {
                    _this.dropDown.roles.push({
                        id: role.id,
                        name: role.name
                    });
                });
            }).catch(function (error) {
                //                    console.log(error.response.data.error);
            });
        },
        submitForm: function submitForm() {
            console.log(this.form);
            this.editableRowId == false ? this.insertNewRow() : this.updateRow();
        },

        insertNewRow: function insertNewRow() {
            var _this2 = this;

            axios.post('/roles', this.form).then(function (response) {
                var newRole = response.data.data;
                _this2.list.push(newRole);
                _this2.dropDown.roles.push({
                    id: newRole.id,
                    name: newRole.name
                });
                _this2.resetForm();
            }).catch(function (error) {
                /*this.serverErrors = error.response.data.errors;
                 console.log(this.serverErrors);*/
            });
        },

        updateRow: function updateRow() {
            var _this3 = this;

            axios.put('/roles/' + this.editableRowId, this.form).then(function (response) {
                _this3.list.splice(_this3.listIndex, 1, response.data.data);
            }).catch(function (error) {
                /*this.serverErrors = error.response.data.errors;
                 console.log(this.serverErrors);*/
            });
        },
        deleteRow: function deleteRow(role, index) {
            var _this4 = this;

            this.editableRowId = 0;
            this.listIndex = index;
            axios.delete('/users/' + role.id).then(function (response) {
                _this4.roles.splice(_this4.listIndex, 1);
                _this4.resetForm();
            }).catch(function (error) {
                /*this.serverErrors = error.response.data.errors;
                 console.log(this.serverErrors);*/
            });
        },
        editRow: function editRow(role, index) {
            this.form = role;
            this.editableRowId = role.id;
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
    }
};

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", { staticClass: "main" }, [
    _c("div", { staticClass: "container logic-one-col-form" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-8 offset-md-2" }, [
          _vm.message.success
            ? _c(
                "div",
                {
                  staticClass: "btn btn-success",
                  staticStyle: { color: "white" }
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.message.success) +
                      "\n                "
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
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
                      [_vm._v("Role Name")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-9" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.name,
                            expression: "form.name"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: { type: "text" },
                        domProps: { value: _vm.form.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "name", $event.target.value)
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
                      [_vm._v("Parent Role")]
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
                              value: _vm.form.parentRole,
                              expression: "form.parentRole"
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
                                  "parentRole",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function($event) {}
                            ]
                          }
                        },
                        [
                          _c("option", { attrs: { value: "", disabled: "" } }, [
                            _vm._v("Select Parent Role")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "0" } }, [
                            _vm._v("Parent")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.dropDown.roles, function(role) {
                            return _c(
                              "option",
                              { domProps: { value: role.id } },
                              [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(role.name) +
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
                      [_vm._v("Home Page")]
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
                              value: _vm.form.homePage,
                              expression: "form.homePage"
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
                                "homePage",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "", disabled: "" } }, [
                            _vm._v("Select Home Page")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v(" Home Page 1")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "2" } }, [
                            _vm._v(" Home Page 2")
                          ])
                        ]
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
                  _vm._l(_vm.list, function(role, index) {
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
                            _vm._s(role.name) +
                            "\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                " +
                            _vm._s(role.parentRole) +
                            "\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                " +
                            _vm._s(role.homePage) +
                            "\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                " +
                            _vm._s(role.status) +
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
                                _vm.editRow(role, index)
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
                                _vm.deleteRow(role, index)
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
      _c("h4", [_vm._v("Roles Master Settings")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [
        _c("i", { staticClass: "fa fa-align-justify" }),
        _vm._v(" Role List")
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
        _c("th", [_vm._v("Role")]),
        _vm._v(" "),
        _c("th", [_vm._v("Parent Role")]),
        _vm._v(" "),
        _c("th", [_vm._v("Home Page")]),
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
    require("vue-hot-reload-api")      .rerender("data-v-871b14e6", module.exports)
  }
}

/***/ })

});