webpackJsonp([2],{

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(616)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(618)
/* template */
var __vue_template__ = __webpack_require__(619)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-548581fe"
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
Component.options.__file = "resources\\assets\\src\\views\\admin\\Users.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-548581fe", Component.options)
  } else {
    hotAPI.reload("data-v-548581fe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(617);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("bbfdcbea", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-548581fe\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Users.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-548581fe\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Users.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "\n.form-group.required .control-label[data-v-548581fe]:after {\n  content: \"*\";\n  color: red;\n}\n.show-user tr[data-v-548581fe] {\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vuex = __webpack_require__(224);

exports.default = {
	components: {
		'multiSelect': function multiSelect() {
			return __webpack_require__.e/* import() */(12).then(__webpack_require__.bind(null, 585));
		}
	},

	computed: (0, _vuex.mapState)({
		roles: function roles(state) {
			return state.roles.list;
		},

		isEditable: function isEditable() {
			return this.editableRowId > 0;
		}
	}),

	data: function data() {
		return {
			form: {
				userCode: '',
				userName: '',
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				cPassword: '',
				roles: [],
				status: ''
			},
			editableRowId: 0,
			listIndex: '',
			list: []
		};
	},

	methods: {

		submitForm: function submitForm() {

			this.editableRowId == false ? this.insertNewRow() : this.updateRow();
		},

		insertNewRow: function insertNewRow() {
			var _this = this;

			axios.post('/users', this.form).then(function (response) {
				_this.list.push(response.data.data);
				_this.resetForm();
			}).catch(function (error) {
				/*this.serverErrors = error.response.data.errors;
     console.log(this.serverErrors);*/
			});
		},

		updateRow: function updateRow() {
			var _this2 = this;

			axios.put('/users/' + this.editableRowId, this.form).then(function (response) {
				_this2.list.splice(_this2.listIndex, 1, response.data.data);

				console.log(response.data.data);
			}).catch(function (error) {
				/*this.serverErrors = error.response.data.errors;
     console.log(this.serverErrors);*/
			});
		},
		deleteRow: function deleteRow(user, index) {
			var _this3 = this;

			this.editableRowId = 0;
			this.listIndex = index;
			axios.delete('/users/' + user.id).then(function (response) {
				_this3.list.splice(_this3.listIndex, 1);
				_this3.resetForm();
			}).catch(function (error) {
				/*this.serverErrors = error.response.data.errors;
     console.log(this.serverErrors);*/
			});
		},
		editRow: function editRow(user, index) {
			this.form = user;
			this.editableRowId = user.id;
			this.listIndex = index;
		},

		resetForm: function resetForm() {
			for (var field in this.form) {
				this.form[field] instanceof Array ? this.form[field] = [] : this.form[field] = '';
			}
			this.editableRowId = 0;
		},

		getList: function getList() {
			var _this4 = this;

			axios.get('/users').then(function (response) {
				_this4.list = response.data.data;
			}).catch(function (error) {
				console.log(error.response.data.error);
			});
		}
	},
	created: function created() {
		this.getList();
		this.$store.dispatch('roles/getRoles');
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
//
//
//
//
//
//
//
//
//
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

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", { staticClass: "main" }, [
    _c("div", { staticClass: "user-create container" }, [
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
                  return _vm.submitForm($event)
                }
              }
            },
            [
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "form-group row required" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.userCode,
                          expression: "form.userCode"
                        }
                      ],
                      staticClass: "form-control form-control-sm",
                      attrs: {
                        type: "text",
                        id: "user-code",
                        placeholder: "User code"
                      },
                      domProps: { value: _vm.form.userCode },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "userCode", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.userName,
                          expression: "form.userName"
                        }
                      ],
                      staticClass: "form-control form-control-sm",
                      attrs: {
                        type: "text",
                        id: "username",
                        placeholder: "Username"
                      },
                      domProps: { value: _vm.form.userName },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "userName", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row required" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.firstName,
                          expression: "form.firstName"
                        }
                      ],
                      staticClass: "form-control form-control-sm",
                      attrs: {
                        type: "text",
                        id: "first-name",
                        name: "user_code",
                        placeholder: "First Name"
                      },
                      domProps: { value: _vm.form.firstName },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "firstName", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _vm._m(4),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.lastName,
                          expression: "form.lastName"
                        }
                      ],
                      staticClass: "form-control form-control-sm",
                      attrs: {
                        type: "text",
                        id: "last-name",
                        name: "last_name",
                        placeholder: "Last Name"
                      },
                      domProps: { value: _vm.form.lastName },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "lastName", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row required" }, [
                  _vm._m(5),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.email,
                          expression: "form.email"
                        }
                      ],
                      staticClass: "form-control form-control-sm",
                      attrs: {
                        type: "text",
                        id: "email",
                        name: "email",
                        placeholder: "email"
                      },
                      domProps: { value: _vm.form.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "email", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _vm._m(6),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.roles,
                            expression: "form.roles"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: { multiple: "" },
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
                              "roles",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "", disabled: "" } }, [
                          _vm._v("Select Role")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.roles, function(role, index) {
                          return _c(
                            "option",
                            { domProps: { value: role.id } },
                            [_vm._v(" " + _vm._s(role.name) + " ")]
                          )
                        })
                      ],
                      2
                    )
                  ])
                ]),
                _vm._v(" "),
                !_vm.editableRowId
                  ? _c("div", { staticClass: "form-group row required" }, [
                      _vm._m(7),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.password,
                              expression: "form.password"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { type: "password", id: "password" },
                          domProps: { value: _vm.form.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm._m(8),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.cPassword,
                              expression: "form.cPassword"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: {
                            type: "password",
                            id: "cpassword",
                            "data-vv-as": "password"
                          },
                          domProps: { value: _vm.form.cPassword },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "cPassword",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row required" }, [
                  _vm._m(9),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
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
                        attrs: { id: "status", name: "status" },
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
                        staticClass: "btn btn-sm btn-default logic-btn-default",
                        attrs: { type: "submit" }
                      },
                      [_vm._v(" Save")]
                    )
                  : _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-default logic-btn-default",
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
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "show-user container" }, [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(10),
          _vm._v(" "),
          _c("div", { staticClass: "card-block" }, [
            _c(
              "table",
              {
                staticClass:
                  "table table-responsive table-bordered table-striped table-sm"
              },
              [
                _vm._m(11),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.list, function(user, index) {
                    return _c("tr", { staticClass: "show-user" }, [
                      _c("td", [
                        _vm._v(
                          "\n                                " +
                            _vm._s(index + 1) +
                            "\n                              "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\t" +
                            _vm._s(user.userCode) +
                            "\n\t\t\t\t\t\t\t\t"
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\t" +
                            _vm._s(user.userName) +
                            "\n\t\t\t\t\t\t\t\t"
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\t" +
                            _vm._s(user.fullName) +
                            "\n\t\t\t\t\t\t\t\t"
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\t" +
                            _vm._s(user.email) +
                            "\n\t\t\t\t\t\t\t\t"
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\t" +
                            _vm._s(user.roleName || "N/A") +
                            "\n\t\t\t\t\t\t\t\t"
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
                                _vm.editRow(user, index)
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
                                _vm.deleteRow(user, index)
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
      _c("h4", [_vm._v("Accounts Information")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c(
        "label",
        { staticClass: "control-label", attrs: { for: "user-code" } },
        [_vm._v("User Code:")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c(
        "label",
        { staticClass: "control-label", attrs: { for: "username" } },
        [_vm._v("Username:")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c(
        "label",
        { staticClass: "control-label", attrs: { for: "first-name" } },
        [_vm._v("First Name :")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c(
        "label",
        { staticClass: "control-label", attrs: { for: "last-name" } },
        [_vm._v("Last Name :")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("label", { staticClass: "control-label", attrs: { for: "email" } }, [
        _vm._v("Email :")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("label", { staticClass: "control-label" }, [_vm._v("Role:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c(
        "label",
        { staticClass: "control-label", attrs: { for: "password" } },
        [_vm._v("Password :")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c(
        "label",
        { staticClass: "control-label", attrs: { for: "cpassword" } },
        [_vm._v("Confirm Password :")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("label", { staticClass: "control-label", attrs: { for: "status" } }, [
        _vm._v("Status")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [
        _c("i", { staticClass: "fa fa-align-justify" }),
        _vm._v(" Users List")
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
        _c("th", [_vm._v("User Code")]),
        _vm._v(" "),
        _c("th", [_vm._v("Username")]),
        _vm._v(" "),
        _c("th", [_vm._v("Full Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Role")]),
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
    require("vue-hot-reload-api")      .rerender("data-v-548581fe", module.exports)
  }
}

/***/ })

});