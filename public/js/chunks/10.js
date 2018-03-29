webpackJsonp([10],{

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(637)
/* template */
var __vue_template__ = __webpack_require__(638)
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
Component.options.__file = "resources\\assets\\src\\views\\admin\\ScenarioTwo.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f876b256", Component.options)
  } else {
    hotAPI.reload("data-v-f876b256", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 637:
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

exports.default = {
    data: function data() {
        return {
            list: {
                settings: [{
                    id: '',
                    marks: '',
                    name: '',
                    location: ''
                }]
            },
            dropDown: {
                posts: [],
                customers: []
            },
            model: {
                post: {},
                customer: ''
            }
        };
    },
    methods: {
        /*getSetting:function(){
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
        getPost: function getPost() {
            var _this = this;

            axios.get('/post').then(function (response) {
                _this.dropDown.posts = response.data.data;
            }).catch(function (error) {
                console.log(error.response);
            });
        },
        getCustomer: function getCustomer() {
            var _this2 = this;

            axios.get('/customer').then(function (response) {
                _this2.dropDown.customers = response.data.data;
            }).catch(function (error) {
                console.log(error.response);
            });
        }

    },
    created: function created() {
        var _this3 = this;

        axios.get('/settings').then(function (response) {
            _this3.list.settings = response.data.data;
            //this.search.menus = this.list.menusList;
            console.log(_this3.list.settings);
        }).catch(function (error) {
            console.log(error);
        });
        axios.get('/post').then(function (response) {
            _this3.dropDown.posts = response.data.data;
            console.log(_this3.dropDown.posts);
        }).catch(function (error) {
            console.log(error.response);
        });
        axios.get('/customer').then(function (response) {
            _this3.dropDown.customers = response.data.data;
            console.log(_this3.dropDown.customers);
        }).catch(function (error) {
            console.log(error.response);
        });
    }

};

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", { staticClass: "main" }, [
    _c(
      "div",
      [
        _c("input", {
          directives: [
            {
              name: "b-modal",
              rawName: "v-b-modal.modal1",
              modifiers: { modal1: true }
            }
          ],
          attrs: { type: "text", name: "value" }
        }),
        _vm._v(" "),
        _c(
          "b-modal",
          { attrs: { id: "modal1", title: "input and dropdown data" } },
          [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("div", [
                  _c("i", { staticClass: "fa fa-align-justify" }),
                  _vm._v("Information")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-block" }, [
                _c(
                  "table",
                  {
                    staticClass:
                      "table table-responsive table-bordered table-striped table-sm"
                  },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("Post")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Customer")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Location")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      [
                        _vm._l(_vm.list.settings, function(setting, index) {
                          return _c("tr", [
                            _c("td", [
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.model.post,
                                      expression: "model.post"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.model,
                                        "post",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "option",
                                    { attrs: { value: "", disabled: "" } },
                                    [_vm._v("Select post")]
                                  ),
                                  _vm._v(" "),
                                  _vm._l(_vm.dropDown.posts, function(post) {
                                    return _c(
                                      "option",
                                      { domProps: { value: post.id } },
                                      [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(post.title) +
                                            "\n                                        "
                                        )
                                      ]
                                    )
                                  })
                                ],
                                2
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.model.customer,
                                      expression: "model.customer"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.model,
                                        "customer",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "option",
                                    { attrs: { value: "", disabled: "" } },
                                    [_vm._v("Select customer")]
                                  ),
                                  _vm._v(" "),
                                  _vm._l(_vm.dropDown.customers, function(
                                    customer
                                  ) {
                                    return _c(
                                      "option",
                                      { domProps: { value: customer.id } },
                                      [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(customer.name) +
                                            "\n                                        "
                                        )
                                      ]
                                    )
                                  })
                                ],
                                2
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: setting.location,
                                    expression: "setting.location"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: { value: setting.location },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      setting,
                                      "location",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ])
                        })
                      ],
                      2
                    )
                  ]
                )
              ])
            ])
          ]
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-f876b256", module.exports)
  }
}

/***/ })

});