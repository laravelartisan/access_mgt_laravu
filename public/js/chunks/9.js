webpackJsonp([9],{

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(625)
/* template */
var __vue_template__ = __webpack_require__(626)
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
Component.options.__file = "resources\\assets\\src\\views\\admin\\Settings.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67af3b3a", Component.options)
  } else {
    hotAPI.reload("data-v-67af3b3a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 625:
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

exports.default = {
    data: function data() {
        return {
            inputFields: [{
                marks: '123',
                name: 'logic',
                location: 'dhaka'
            }],
            list: {
                settings: []
            }
        };
    },
    methods: {
        sendSpecialCharacters: function sendSpecialCharacters() {
            var _this = this;

            axios.post('/settings', [{
                marks: "Raja@Zakaria_+#kk$%PP",
                name: "Raja@Zakaria_+#kk$%PP",
                location: "Raja@Zakaria_+#kk$%PP"
            }, {
                marks: "Raja@Zakaria_+#kk$%PP",
                name: "Raja@Zakaria_+#kk$%PP",
                location: "Raja@Zakaria_+#kk$%PP"
            }, {
                marks: "Raja@Zakaria_+#kk$%PP",
                name: "Raja@Zakaria_+#kk$%PP",
                location: "Raja@Zakaria_+#kk$%PP"
            }, {
                marks: "Raja''@Zakaria_+#kk$%PP",
                name: "Raja@Zakaria_+#kk$%PP",
                location: "Raja@Zakaria_+#kk$%PP"
            }, {
                marks: "Raja@Zakaria_+#kk$%PP",
                name: "Raja@Zakaria_+#kk$%PP",
                location: "Raja@Zakaria_+#kk$%PP"
            }, {
                marks: "Raja@Zakaria_+#kk$%PP",
                name: "Raja@Zakaria_+#kk$%PP",
                location: "Raja@Zakaria_+#kk$%PP"
            }, {
                marks: "Raja@Zakaria_+#kk$%PP",
                name: "Raja@Zakaria_+#kk$%PP",
                location: "Raja@Zakaria_+#kk$%PP"
            }, {
                marks: "Raja@Zakaria_+#kk$%PP",
                name: "Raja@Zakaria_+#kk$%PP",
                location: "Raja@Zakaria_+#kk$%PP"
            }]).then(function (response) {
                _this.users = response.data.data;
                console.log(_this.users);
            }).catch(function (error) {
                console.log(error.response.data.error);
            });
        },
        addField: function addField(index) {
            /* for(let i=0; i<=1000;i++){
                 this.inputFields.push({
                     marks:'123'+index+i,
                     name:'logic'+index+i,
                     location:'dhaka'+index+i
                 })
             }*/
            this.inputFields.push({
                marks: '123' + index,
                name: 'logic' + index,
                location: 'dhaka' + index
            });
        },
        removeField: function removeField(index) {
            this.inputFields.splice(index, 1);
        },
        orderSubmit: function orderSubmit() {
            axios.post('/settings', this.inputFields).then(function (response) {
                console.log(response);
            });
        }
    },
    created: function created() {
        var _this2 = this;

        axios.get('/settings').then(function (response) {
            _this2.list.settings = response.data.data;
            //this.search.menus = this.list.menusList;
            console.log(_this2.list.settings);
        }).catch(function (error) {
            console.log(error);
        });

        //            var spc = encodeURIComponent("Raja@Z;'a&'&&karia_+#kk$%PP");
        axios.get('/settings', {
            params: {
                spc: "Raja@Z;'a&'&&karia_+#kk$%PP",
                spc1: "Raja@Zakaria_+#kk$%PP",
                spc2: "Raja@Zakaria_+#kk$%PP",
                spc3: "Raja@Zakaria_+#kk$%PP",
                spc4: "Raja@Zakaria_+#kk$%PP",
                spc5: "Raja@Zakaria_+#kk$%PP",
                spc6: "Raja@Zakaria_+#kk$%PP",
                spc7: "Raja@Zakaria_+#kk$%PP",
                spc8: "Raja@Zakaria_+#kk$%PP",
                spc9: "Raja@Zakaria_+#kk$%PP",
                spc10: "Raja''@Zakaria_+#kk$%PP",
                spc11: "Raja@Zakaria_+#kk$%PP",
                spc12: "Raja@Zakaria_+#kk$%PP",
                spc13: "Raja@Zakaria_+#kk$%PP",
                spc14: "Raja@Zakaria_+#kk$%PP",
                spc15: "Raja@Zakaria_+#kk$%PP",
                spc16: "Raja@Zakaria_+#kk$%PP",
                spc17: "Raja@Zakaria_+#kk$%PP",
                spc18: "Raja@Zakaria_+#kk$%PP",
                spc19: "Raja@Zakaria_+#kk$%PP",
                spc20: "Raja@Zakaria_+#kk$%PP",
                spc21: "Raja@Zakaria_+#kk$%PP",
                spc22: "Raja@Zakaria_+#kk$%PP",
                spc23: "Raja@Zakaria_+#kk$%PP",
                spc24: "Raja@Zakaria_+#kk$%PP"
            }
        }).then(function (response) {
            _this2.users = response.data.data;
            console.log(_this2.users);
        }).catch(function (error) {
            console.log(error.response.data.error);
        });
    }
};

/***/ }),

/***/ 626:
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
                            [_c("i", { staticClass: "fa fa-plus" })]
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
                            [_c("i", { staticClass: "fa fa-minus" })]
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
                            [_c("i", { staticClass: "fa fa-minus" })]
                          )
                        : _vm._e()
                    ],
                    2
                  )
                })
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-primary",
                    attrs: { type: "submit" }
                  },
                  [_vm._v("Save")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-primary",
                    attrs: { type: "submit" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.sendSpecialCharacters($event)
                      }
                    }
                  },
                  [_vm._v("spc")]
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
                  [
                    _vm._l(_vm.list.settings, function(setting, index) {
                      return _c("tr", [
                        _c("td", [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(index + 1) +
                              "\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(setting.marks) +
                              "\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(setting.name) +
                              "\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(setting.location) +
                              "\n                                "
                          )
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
      _vm._v("\n                    Order Entry\n                    "),
      _c("small", [_vm._v("(Garments Order Entry)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("div", [
        _c("i", { staticClass: "fa fa-align-justify" }),
        _vm._v("Information")
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
        _c("th", [_vm._v("Number")]),
        _vm._v(" "),
        _c("th", [_vm._v("Company")]),
        _vm._v(" "),
        _c("th", [_vm._v("Location")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-67af3b3a", module.exports)
  }
}

/***/ })

});