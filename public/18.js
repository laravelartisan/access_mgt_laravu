webpackJsonp([18],{

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(622)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(624)
/* template */
var __vue_template__ = __webpack_require__(625)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5047ae60"
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
Component.options.__file = "resources\\assets\\src\\views\\admin\\Validation.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5047ae60", Component.options)
  } else {
    hotAPI.reload("data-v-5047ae60", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(623);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("f7368f16", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5047ae60\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Validation.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5047ae60\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Validation.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "\n.required-field > label[data-v-5047ae60]::after {\n  content: '*';\n  color: red;\n  margin-left: 0.25rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 624:
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

exports.default = {
  data: function data() {
    return {
      zakaria: {},
      model: {
        name: '',
        email: '',
        phone: '',
        department: null,
        comments: '',
        notValidated: '',
        agree: false
      }
    };
  },
  methods: {
    fieldClassName: function fieldClassName(field) {
      if (!field) {
        return '';
      }
      if ((field.$touched || field.$submitted) && field.$valid) {
        return 'has-success';
      }
      if ((field.$touched || field.$submitted) && field.$invalid) {
        return 'has-danger';
      }
    },
    onSubmit: function onSubmit() {}

  }
};

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", { staticClass: "main" }, [
    _c(
      "div",
      { staticClass: "container py-5", attrs: { id: "app" } },
      [
        _c("p", [
          _vm._v(
            "Example showing vue-form usage with Bootstrap styles, validation messages are shown on field touched or form submission"
          )
        ]),
        _vm._v(" "),
        _c(
          "vue-form",
          {
            attrs: { state: _vm.zakaria },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.onSubmit($event)
              }
            }
          },
          [
            _c(
              "validate",
              {
                staticClass: "form-group required-field",
                class: _vm.fieldClassName(_vm.zakaria.name),
                attrs: { "auto-label": "" }
              },
              [
                _c("label", [_vm._v("Name")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.lazy",
                      value: _vm.model.name,
                      expression: "model.name",
                      modifiers: { lazy: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "name", required: "" },
                  domProps: { value: _vm.model.name },
                  on: {
                    change: function($event) {
                      _vm.$set(_vm.model, "name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "field-messages",
                  {
                    staticClass: "form-control-feedback",
                    attrs: { name: "name", show: "$touched || $submitted" }
                  },
                  [
                    _c("div", [_vm._v("Success!")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { attrs: { slot: "required" }, slot: "required" },
                      [_vm._v("Name is a required field")]
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "validate",
              {
                staticClass: "form-group required-field",
                class: _vm.fieldClassName(_vm.zakaria.email),
                attrs: { "auto-label": "" }
              },
              [
                _c("label", [_vm._v("Email")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.lazy",
                      value: _vm.model.email,
                      expression: "model.email",
                      modifiers: { lazy: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "email", name: "email", required: "" },
                  domProps: { value: _vm.model.email },
                  on: {
                    change: function($event) {
                      _vm.$set(_vm.model, "email", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "field-messages",
                  {
                    staticClass: "form-control-feedback",
                    attrs: {
                      "auto-label": "",
                      name: "email",
                      show: "$touched || $submitted"
                    }
                  },
                  [
                    _c("div", [_vm._v("Success!")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { attrs: { slot: "required" }, slot: "required" },
                      [_vm._v("Email is a required field")]
                    ),
                    _vm._v(" "),
                    _c("div", { attrs: { slot: "email" }, slot: "email" }, [
                      _vm._v("Email is invalid")
                    ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "validate",
              {
                staticClass: "form-group required-field",
                class: _vm.fieldClassName(_vm.zakaria.phone),
                attrs: { "auto-label": "" }
              },
              [
                _c("label", [_vm._v("Phone number (format: xxxx-xxx-xxxx)")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.lazy",
                      value: _vm.model.phone,
                      expression: "model.phone",
                      modifiers: { lazy: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "tel",
                    name: "phone",
                    required: "",
                    pattern: "^\\d{4}-\\d{3}-\\d{4}$"
                  },
                  domProps: { value: _vm.model.phone },
                  on: {
                    change: function($event) {
                      _vm.$set(_vm.model, "phone", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "field-messages",
                  {
                    staticClass: "form-control-feedback",
                    attrs: { name: "phone", show: "$touched || $submitted" }
                  },
                  [
                    _c("div", [_vm._v("Success!")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { attrs: { slot: "required" }, slot: "required" },
                      [_vm._v("Phone number is a required field")]
                    ),
                    _vm._v(" "),
                    _c("div", { attrs: { slot: "pattern" }, slot: "pattern" }, [
                      _vm._v("Phone number is invalid")
                    ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "validate",
              {
                staticClass: "form-group required-field",
                class: _vm.fieldClassName(_vm.zakaria.department),
                attrs: { "auto-label": "" }
              },
              [
                _c("label", [_vm._v("Department")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.lazy",
                        value: _vm.model.department,
                        expression: "model.department",
                        modifiers: { lazy: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "department", required: "" },
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
                          _vm.model,
                          "department",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { domProps: { value: null } }, [
                      _vm._v("Choose...")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "1" } }, [_vm._v("AAA")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "2" } }, [_vm._v("BBB")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "3" } }, [_vm._v("CCC")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "field-messages",
                  {
                    staticClass: "form-control-feedback",
                    attrs: {
                      name: "department",
                      show: "$touched || $dirty || $submitted"
                    }
                  },
                  [
                    _c("div", [_vm._v("Success!")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { attrs: { slot: "required" }, slot: "required" },
                      [_vm._v("Department is a required field")]
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "validate",
              {
                staticClass: "form-group",
                class: _vm.fieldClassName(_vm.zakaria.comments),
                attrs: { "auto-label": "" }
              },
              [
                _c("label", [_vm._v("Comments")]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.lazy",
                      value: _vm.model.comments,
                      expression: "model.comments",
                      modifiers: { lazy: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { name: "comments", maxlength: "50" },
                  domProps: { value: _vm.model.comments },
                  on: {
                    change: function($event) {
                      _vm.$set(_vm.model, "comments", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("small", { staticClass: "form-text text-muted" }, [
                  _vm._v("Enter no more than 50 characters.")
                ]),
                _vm._v(" "),
                _c(
                  "field-messages",
                  {
                    staticClass: "form-control-feedback",
                    attrs: { name: "comments", show: "$touched || $submitted" }
                  },
                  [
                    _c("div", [_vm._v("Success!")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { attrs: { slot: "maxlength" }, slot: "maxlength" },
                      [_vm._v("Comments must be less than 50 characters")]
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("field", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Not validated")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.lazy",
                    value: _vm.model.notValidated,
                    expression: "model.notValidated",
                    modifiers: { lazy: true }
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", name: "notValidated" },
                domProps: { value: _vm.model.notValidated },
                on: {
                  change: function($event) {
                    _vm.$set(_vm.model, "notValidated", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "validate",
              {
                staticClass: "form-check",
                class: _vm.fieldClassName(_vm.zakaria.agree)
              },
              [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.model.agree,
                        expression: "model.agree"
                      }
                    ],
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", required: "", name: "agree" },
                    domProps: {
                      checked: Array.isArray(_vm.model.agree)
                        ? _vm._i(_vm.model.agree, null) > -1
                        : _vm.model.agree
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.model.agree,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(_vm.model, "agree", $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.model,
                                "agree",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.model, "agree", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v("\n          I agree to the terms\n        ")
                ]),
                _vm._v(" "),
                _c(
                  "field-messages",
                  {
                    staticClass: "form-control-feedback",
                    attrs: { name: "agree", show: "$touched || $submitted" }
                  },
                  [
                    _c(
                      "div",
                      { attrs: { slot: "required" }, slot: "required" },
                      [_vm._v("You must agree to the terms")]
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "py-2 text-center" }, [
              _c(
                "button",
                { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                [_vm._v("Submit")]
              )
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("pre", [_vm._v(_vm._s(_vm.zakaria))])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5047ae60", module.exports)
  }
}

/***/ })

});