webpackJsonp([6],{

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(670)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(672)
/* template */
var __vue_template__ = __webpack_require__(673)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-39fed168"
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
Component.options.__file = "resources\\assets\\src\\views\\admin\\OrderMatrix.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-39fed168", Component.options)
  } else {
    hotAPI.reload("data-v-39fed168", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(671);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("4646cd0b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-39fed168\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./OrderMatrix.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-39fed168\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./OrderMatrix.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "\n.form-group.required .control-label[data-v-39fed168]:after {\n  content: \"*\";\n  color: red;\n}\n.order-matrix textarea[data-v-39fed168] {\n  height: 30px;\n}\n", ""]);

// exports


/***/ }),

/***/ 672:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        'job-search': function jobSearch() {
            return __webpack_require__.e/* import() */(17/* duplicate */).then(__webpack_require__.bind(null, 597));
        },
        'insert-button-group': function insertButtonGroup() {
            return __webpack_require__.e/* import() */(15/* duplicate */).then(__webpack_require__.bind(null, 586));
        }
    },
    computed: {
        selectedCompany: function selectedCompany() {
            var _this = this;

            return this.dropDown.companies.filter(function (company) {
                if (_this.model.company) {
                    return company.id == _this.model.company;
                }
            });
        }

    },
    data: function data() {
        return {
            buttons: {
                isDisabled: true,
                refresh: {
                    conditionalFields: ['currency', 'region', 'prdCat', 'shipMode', 'uom', 'smv', 'repeatCk']
                }
            },
            model: {
                company: '',
                jobNumber: '',
                location: '',
                buyer: '',
                styleRef: '',
                styleDes: '',
                prdDept: '',
                subDept: '',
                currency: 2,
                season: '',
                region: 1,
                prdCat: 1,
                teamLeader: '',
                dealingMerchant: '',
                factoryMerchant: '',
                remarks: '',
                shipMode: 1,
                uom: 1,
                smv: 5,
                packing: '',
                repeatNumber: '',
                repeatCk: 1,
                agent: '',
                client: '',
                qualityLabel: '',
                styleOwner: ''
            },
            dropDown: {
                companies: [],
                locations: [],
                buyers: [],
                prdDept: ["Mens", "Ladies", "Teen Age-Girls", "Teen Age-Boys", "Kids-Boys", "Infant", "Unisex", "Kids-Girls", "Baby", "Kids", "Women"],
                subDept: [],
                currency: ["Taka", "USD", "EURO", "CHF", "SGD", "Pound", "YEN"],
                seasons: [],
                region: ["Asia", "Africa", "Australia", "Antarctica", "Europe", "North America ", "South America"],
                prdCat: ["Outwears", "Lingerie", "Sweater", "Socks", "Fabric"],
                teamLeaders: [],
                dealingMerchants: [],
                factoryMerchants: [],
                shipMode: ["Sea", "Air", "Road", "Train", "Sea/Air", "Road/Air"],
                orderUom: [],
                packing: ["SCSS", "ACSS", "SCAS", "ACAS"],
                agents: [],
                clients: [],
                qualityLabel: ["Platinum", "Gold", "Silver"],
                styleOwner: []
            }
        };
    },
    methods: {
        showModal: function showModal() {
            if (!this.ifCompanyExists()) {
                alert('Please select company first');
                return false;
            }
            this.$refs.jobSearchModalRef.show();
        },
        importRelatedData: function importRelatedData(companyId) {
            var _this2 = this;

            this.model.location = '';
            this.model.styleOwner = companyId;
            axios.get('/location/' + companyId).then(function (response) {
                _this2.dropDown.locations = response.data.data;
            }).catch(function (error) {
                console.log(error.response.data.error);
            });
            axios.get('/buyer/' + companyId).then(function (response) {
                _this2.dropDown.buyers = response.data.data;
            }).catch(function (error) {
                console.log(error.response.data.error);
            });
            axios.get('/agent/' + companyId).then(function (response) {
                _this2.dropDown.agents = response.data.data;
            }).catch(function (error) {
                console.log(error.response.data.error);
            });
            axios.get('/client/' + companyId).then(function (response) {
                _this2.dropDown.clients = response.data.data;
            }).catch(function (error) {
                console.log(error.response.data.error);
            });
        },
        getTeamMember: function getTeamMember(teamLeaderId) {
            var _this3 = this;

            this.model.dealingMerchant = '';
            this.model.factoryMerchant = '';

            axios.get('/team-member/' + teamLeaderId).then(function (response) {
                _this3.dropDown.dealingMerchants = response.data.data;
                //console.log(response.data.data);
            }).catch(function (error) {
                console.log(error.response.data.error);
            });
        },
        getSeason: function getSeason(buyerId) {
            var _this4 = this;

            axios.get('/season/' + buyerId).then(function (response) {
                _this4.dropDown.seasons = response.data.data;
                console.log(response.data.data);
            }).catch(function (error) {
                console.log(error.response.data.error);
            });
        },
        getSubDepartment: function getSubDepartment(buyerId, departmentId) {
            var _this5 = this;

            axios.get('/sub-department/buyer/' + buyerId + '/department/' + departmentId).then(function (response) {
                _this5.dropDown.subDept = response.data.data;
                console.log(_this5.dropDown.subDept);
            }).catch(function (error) {
                console.log(error.response.data.error);
            });
        },
        orderUom: function orderUom() {},
        orderSubmit: function orderSubmit() {
            var _this6 = this;

            this.$validator.validateAll().then(function (isSubmitted) {
                if (isSubmitted) {
                    axios.post('/order-matrix', _this6.model).then(function (response) {
                        _this6.model.jobNumber = response.data.data.job_no;
                        console.log(response.data.data.job_no);
                    }).catch(function (error) {
                        _this6.serverErrors = error.response.data.errors;
                        console.log(_this6.serverErrors);
                    });
                    return;
                }
            });
        },
        ifCompanyExists: function ifCompanyExists() {
            if (this.model.company) {
                return true;
            }
            return false;
        }

    },
    created: function created() {
        var _this7 = this;

        axios.get('/company').then(function (response) {
            _this7.dropDown.companies = response.data.data;
            //console.log(this.dropDown.companies);
        }).catch(function (error) {
            console.log(error.response.data.error);
        });
        axios.get('/team-leader').then(function (response) {
            _this7.dropDown.teamLeaders = response.data.data;
            //console.log(this.dropDown.teamLeaders);
        }).catch(function (error) {
            console.log(error.response.data.error);
        });
    }
};

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "main",
    { staticClass: "main" },
    [
      _c("div", { staticClass: "order-entry container" }, [
        _c("div", { staticClass: "col-lg-12" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "form",
              {
                staticClass: "form-group order-matrix",
                attrs: { action: "", method: "post" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.orderSubmit($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "form-group row required" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-md-3 form-group",
                        class: {
                          input: true,
                          "has-danger": _vm.errors.has("company")
                        }
                      },
                      [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.model.company,
                                expression: "model.company"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            class: {
                              input: true,
                              "form-control-danger": _vm.errors.has("company")
                            },
                            attrs: {
                              id: "company",
                              name: "company",
                              variant: "primary"
                            },
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.model,
                                    "company",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                function($event) {
                                  _vm.importRelatedData(_vm.model.company)
                                }
                              ]
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { value: "", disabled: "" } },
                              [_vm._v("Select Company")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.dropDown.companies, function(company) {
                              return _c(
                                "option",
                                { domProps: { value: company.id } },
                                [_vm._v(_vm._s(company.companyName))]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "b-tooltip",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("company"),
                                expression: "errors.has('company')"
                              }
                            ],
                            attrs: { show: "", target: "company" }
                          },
                          [_vm._v(_vm._s(_vm.errors.first("company")))]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.model.jobNumber,
                            expression: "model.jobNumber"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: {
                          id: "jobNumber",
                          type: "text",
                          name: "Job Number",
                          placeholder: "Job No",
                          readonly: ""
                        },
                        domProps: { value: _vm.model.jobNumber },
                        on: {
                          dblclick: _vm.showModal,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.model,
                              "jobNumber",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _vm._m(3),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-md-3 form-group",
                        class: {
                          input: true,
                          "has-danger": _vm.errors.has("location")
                        }
                      },
                      [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.model.location,
                                expression: "model.location"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            class: {
                              input: true,
                              "form-control-danger": _vm.errors.has("location")
                            },
                            attrs: {
                              name: "location",
                              id: "location",
                              variant: "primary"
                            },
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
                                  "location",
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
                              [_vm._v("Select Location")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.dropDown.locations, function(location) {
                              return _c(
                                "option",
                                { domProps: { value: location.id } },
                                [_vm._v(_vm._s(location.locationName))]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "b-tooltip",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("location"),
                                expression: "errors.has('location')"
                              }
                            ],
                            attrs: { show: "", target: "location" }
                          },
                          [_vm._v(_vm._s(_vm.errors.first("location")))]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row required" }, [
                    _vm._m(4),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-md-3 form-group",
                        class: {
                          input: true,
                          "has-danger": _vm.errors.has("buyer")
                        }
                      },
                      [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.model.buyer,
                                expression: "model.buyer"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            class: {
                              input: true,
                              "form-control-danger": _vm.errors.has("buyer")
                            },
                            attrs: {
                              name: "buyer",
                              id: "buyer",
                              variant: "primary"
                            },
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.model,
                                    "buyer",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                function($event) {
                                  _vm.getSeason(_vm.model.buyer)
                                }
                              ]
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Select Buyer")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.dropDown.buyers, function(buyer, index) {
                              return _c(
                                "option",
                                { domProps: { value: buyer.id } },
                                [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(buyer.buyerName) +
                                      "\n                                        "
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "b-tooltip",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("buyer"),
                                expression: "errors.has('buyer')"
                              }
                            ],
                            attrs: { show: "", target: "buyer" }
                          },
                          [_vm._v(_vm._s(_vm.errors.first("buyer")))]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._m(5),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-md-3 form-group",
                        class: {
                          input: true,
                          "has-danger": _vm.errors.has("style reference")
                        }
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            },
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.model.styleRef,
                              expression: "model.styleRef"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          class: {
                            input: true,
                            "form-control-danger": _vm.errors.has(
                              "style reference"
                            )
                          },
                          attrs: {
                            name: "style reference",
                            id: "styleRef",
                            variant: "primary",
                            type: "text",
                            placeholder: "Double click for Quotation"
                          },
                          domProps: { value: _vm.model.styleRef },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.model,
                                "styleRef",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "b-tooltip",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("style reference"),
                                expression: "errors.has('style reference')"
                              }
                            ],
                            attrs: { show: "", target: "styleRef" }
                          },
                          [_vm._v(_vm._s(_vm.errors.first("style reference")))]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._m(6),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.model.styleDes,
                            expression: "model.styleDes"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: {
                          type: "text",
                          id: "styleDes",
                          placeholder: "Style Description"
                        },
                        domProps: { value: _vm.model.styleDes },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.model, "styleDes", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row required" }, [
                    _vm._m(7),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "logic-custom-md-2 col-md-2",
                        class: {
                          input: true,
                          "has-danger": _vm.errors.has("product department")
                        }
                      },
                      [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.model.prdDept,
                                expression: "model.prdDept"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            class: {
                              input: true,
                              "form-control-danger": _vm.errors.has(
                                "product department"
                              )
                            },
                            attrs: {
                              name: "product department",
                              id: "prdDept",
                              variant: "primary"
                            },
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.model,
                                    "prdDept",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                function($event) {
                                  _vm.getSubDepartment(
                                    _vm.model.buyer,
                                    _vm.model.prdDept
                                  )
                                }
                              ]
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { value: "", disabled: "" } },
                              [_vm._v("Select")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.dropDown.prdDept, function(
                              prdDepartment,
                              index
                            ) {
                              return _c(
                                "option",
                                { domProps: { value: index } },
                                [_vm._v(_vm._s(prdDepartment))]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "b-tooltip",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("product department"),
                                expression: "errors.has('product department')"
                              }
                            ],
                            attrs: { show: "", target: "prdDept" }
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.errors.first("product department"))
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._m(8),
                    _vm._v(" "),
                    _vm._m(9),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.model.subDept,
                              expression: "model.subDept"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { id: "subDept" },
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
                                "subDept",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Select Sub Department")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.dropDown.subDept, function(subDept) {
                            return _c(
                              "option",
                              { domProps: { value: subDept.id } },
                              [_vm._v(_vm._s(subDept.subDepartmentName))]
                            )
                          })
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(10),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.model.currency,
                              expression: "model.currency"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { id: "currency" },
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
                                "currency",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.dropDown.currency, function(
                          currency,
                          index
                        ) {
                          return _c(
                            "option",
                            { domProps: { value: index + 1 } },
                            [_vm._v(_vm._s(currency))]
                          )
                        })
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row required" }, [
                    _vm._m(11),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.model.season,
                              expression: "model.season"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { id: "season" },
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
                                "season",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Select season")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.dropDown.seasons, function(season) {
                            return _c(
                              "option",
                              { domProps: { value: season.id } },
                              [_vm._v(_vm._s(season.seasonName))]
                            )
                          })
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(12),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.model.region,
                              expression: "model.region"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { id: "region" },
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
                                "region",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.dropDown.region, function(region, index) {
                          return _c(
                            "option",
                            { domProps: { value: index + 1 } },
                            [_vm._v(_vm._s(region))]
                          )
                        })
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(13),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-md-3",
                        class: {
                          input: true,
                          "has-danger": _vm.errors.has("product category")
                        }
                      },
                      [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.model.prdCat,
                                expression: "model.prdCat"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            class: {
                              input: true,
                              "form-control-danger": _vm.errors.has(
                                "product category"
                              )
                            },
                            attrs: {
                              name: "product category",
                              id: "prdCat",
                              variant: "primary"
                            },
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
                                  "prdCat",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Select Product Category")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.dropDown.prdCat, function(
                              prdCat,
                              index
                            ) {
                              return _c(
                                "option",
                                { domProps: { value: index + 1 } },
                                [_vm._v(_vm._s(prdCat))]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "b-tooltip",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("product category"),
                                expression: "errors.has('product category')"
                              }
                            ],
                            attrs: { show: "", target: "prdCat" }
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.errors.first("product department"))
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row required" }, [
                    _vm._m(14),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-md-3",
                        class: {
                          input: true,
                          "has-danger": _vm.errors.has("team leader")
                        }
                      },
                      [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.model.teamLeader,
                                expression: "model.teamLeader"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            class: {
                              input: true,
                              "form-control-danger": _vm.errors.has(
                                "team leader"
                              )
                            },
                            attrs: {
                              name: "team leader",
                              id: "teamLeader",
                              variant: "primary"
                            },
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.model,
                                    "teamLeader",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                function($event) {
                                  _vm.getTeamMember(_vm.model.teamLeader)
                                }
                              ]
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { value: "", disabled: "" } },
                              [_vm._v("Select Leader")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.dropDown.teamLeaders, function(
                              teamLeader
                            ) {
                              return _c(
                                "option",
                                { domProps: { value: teamLeader.id } },
                                [_vm._v(_vm._s(teamLeader.teamLeaderName))]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "b-tooltip",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("team leader"),
                                expression: "errors.has('team leader')"
                              }
                            ],
                            attrs: { show: "", target: "teamLeader" }
                          },
                          [_vm._v(_vm._s(_vm.errors.first("team leader")))]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._m(15),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-md-3",
                        class: {
                          input: true,
                          "has-danger": _vm.errors.has("dealing merchant")
                        }
                      },
                      [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.model.dealingMerchant,
                                expression: "model.dealingMerchant"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            class: {
                              input: true,
                              "form-control-danger": _vm.errors.has(
                                "dealing merchant"
                              )
                            },
                            attrs: {
                              name: "dealing merchant",
                              id: "dealingMerchant",
                              variant: "primary"
                            },
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
                                  "dealingMerchant",
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
                              [_vm._v("Select Dealing Merchant")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.dropDown.dealingMerchants, function(
                              teamMember
                            ) {
                              return _c(
                                "option",
                                { domProps: { value: teamMember.id } },
                                [
                                  _vm._v(
                                    _vm._s(teamMember.teamMemberName) + " One"
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "b-tooltip",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("dealing merchant"),
                                expression: "errors.has('dealing merchant')"
                              }
                            ],
                            attrs: { show: "", target: "dealingMerchant" }
                          },
                          [_vm._v(_vm._s(_vm.errors.first("dealing merchant")))]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._m(16),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-md-3",
                        class: {
                          input: true,
                          "has-danger": _vm.errors.has("factory merchant")
                        }
                      },
                      [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.model.factoryMerchant,
                                expression: "model.factoryMerchant"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            class: {
                              input: true,
                              "form-control-danger": _vm.errors.has(
                                "factory merchant"
                              )
                            },
                            attrs: {
                              name: "factory merchant",
                              id: "factoryMerchant",
                              variant: "primary"
                            },
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
                                  "factoryMerchant",
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
                              [_vm._v("Select Factory Merchant")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.dropDown.dealingMerchants, function(
                              teamMember
                            ) {
                              return _c(
                                "option",
                                { domProps: { value: teamMember.id } },
                                [_vm._v(_vm._s(teamMember.teamMemberName))]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "b-tooltip",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("dealing merchant"),
                                expression: "errors.has('dealing merchant')"
                              }
                            ],
                            attrs: { show: "", target: "factoryMerchant" }
                          },
                          [_vm._v(_vm._s(_vm.errors.first("factory merchant")))]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _vm._m(17),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-7" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.model.remarks,
                            expression: "model.remarks"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        domProps: { value: _vm.model.remarks },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.model, "remarks", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _vm._m(18),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.model.shipMode,
                              expression: "model.shipMode"
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
                                _vm.model,
                                "shipMode",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.dropDown.shipMode, function(
                          shipMode,
                          index
                        ) {
                          return _c(
                            "option",
                            { domProps: { value: index + 1 } },
                            [_vm._v(_vm._s(shipMode))]
                          )
                        })
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row required" }, [
                    _vm._m(19),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "logic-custom-md-2 col-md-2",
                        class: {
                          input: true,
                          "has-danger": _vm.errors.has("order uom")
                        }
                      },
                      [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.model.uom,
                                expression: "model.uom"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            class: {
                              input: true,
                              "form-control-danger": _vm.errors.has("order uom")
                            },
                            attrs: {
                              name: "order uom",
                              id: "uom",
                              variant: "primary"
                            },
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.model,
                                    "uom",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                function($event) {
                                  _vm.orderUom()
                                }
                              ]
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { value: "1", selected: "" } },
                              [_vm._v("Pcs")]
                            ),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "58" } }, [
                              _vm._v("Set")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-tooltip",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("order uom"),
                                expression: "errors.has('order uom')"
                              }
                            ],
                            attrs: { show: "", target: "uom" }
                          },
                          [_vm._v(_vm._s(_vm.errors.first("order uom")))]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "logic-custom-md-1 col-md-1" }, [
                      _c("input", {
                        staticClass: "form-control form-control-sm",
                        attrs: { type: "button", value: "Item Det." },
                        on: {
                          click: function($event) {
                            _vm.orderUom()
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _vm._m(20),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-md-3",
                        class: {
                          input: true,
                          "has-danger": _vm.errors.has("smv")
                        }
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            },
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.model.smv,
                              expression: "model.smv"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          class: {
                            input: true,
                            "form-control-danger": _vm.errors.has("smv")
                          },
                          attrs: {
                            name: "smv",
                            id: "smv",
                            variant: "primary",
                            type: "text",
                            placeholder: "SMV",
                            readonly: ""
                          },
                          domProps: { value: _vm.model.smv },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.model, "smv", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "b-tooltip",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("smv"),
                                expression: "errors.has('smv')"
                              }
                            ],
                            attrs: { show: "", target: "smv" }
                          },
                          [_vm._v(_vm._s(_vm.errors.first("smv")))]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._m(21),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-md-3",
                        class: {
                          input: true,
                          "has-danger": _vm.errors.has("packing")
                        }
                      },
                      [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.model.packing,
                                expression: "model.packing"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            class: {
                              input: true,
                              "form-control-danger": _vm.errors.has("packing")
                            },
                            attrs: {
                              name: "packing",
                              id: "packing",
                              variant: "primary"
                            },
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
                                  "packing",
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
                              [_vm._v("Select Packing")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.dropDown.packing, function(
                              packing,
                              index
                            ) {
                              return _c(
                                "option",
                                { domProps: { value: index } },
                                [_vm._v(_vm._s(packing))]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "b-tooltip",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("packing"),
                                expression: "errors.has('packing')"
                              }
                            ],
                            attrs: { show: "", target: "packing" }
                          },
                          [_vm._v(_vm._s(_vm.errors.first("packing")))]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _vm._m(22),
                    _vm._v(" "),
                    _c("div", { staticClass: "logic-custom-md-2 col-md-2" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.model.repeat,
                            expression: "model.repeat"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: { type: "text", placeholder: "Repeat No/Job" },
                        domProps: { value: _vm.model.repeat },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.model, "repeat", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _vm._m(23),
                    _vm._v(" "),
                    _vm._m(24),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.model.agent,
                              expression: "model.agent"
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
                                _vm.model,
                                "agent",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Selecr Agent")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.dropDown.agents, function(agent) {
                            return _c(
                              "option",
                              { domProps: { value: agent.id } },
                              [_vm._v(_vm._s(agent.buyerName))]
                            )
                          })
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(25),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.model.client,
                              expression: "model.client"
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
                                _vm.model,
                                "client",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Select Client")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.dropDown.clients, function(client) {
                            return _c(
                              "option",
                              { domProps: { value: client.id } },
                              [_vm._v(_vm._s(client.buyerName))]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _vm._m(26),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.model.qualityLabel,
                              expression: "model.qualityLabel"
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
                                _vm.model,
                                "qualityLabel",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Select Quality label")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.dropDown.qualityLabel, function(
                            qualityLabel,
                            index
                          ) {
                            return _c(
                              "option",
                              { domProps: { value: index } },
                              [_vm._v(_vm._s(qualityLabel))]
                            )
                          })
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(27),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.model.styleOwner,
                              expression: "model.styleOwner"
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
                                _vm.model,
                                "styleOwner",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Select Style Owner")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.dropDown.companies, function(style) {
                            return _c(
                              "option",
                              { domProps: { value: style.id } },
                              [_vm._v(_vm._s(style.companyName))]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("insert-button-group", {
                  attrs: { model: _vm.model, refreshData: _vm.buttons.refresh }
                })
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.model.company
        ? _c(
            "b-modal",
            {
              ref: "jobSearchModalRef",
              attrs: {
                size: "lg",
                title: "Job Search",
                "no-close-on-backdrop": "",
                "no-close-on-esc": "",
                "ok-only": ""
              }
            },
            [
              _c("job-search", {
                attrs: { selectCompany: _vm.selectedCompany }
              })
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _vm._v("\n                    Order Entry\n                    "),
      _c("small", [_vm._v("(Matrix)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("label", { staticClass: "control-label" }, [_vm._v("Company")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("label", [_vm._v("Job No")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c(
        "label",
        { staticClass: "control-label", attrs: { for: "location" } },
        [_vm._v("Location")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("label", { staticClass: "control-label", attrs: { for: "buyer" } }, [
        _vm._v("Buyer")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c(
        "label",
        { staticClass: "control-label", attrs: { for: "styleRef" } },
        [_vm._v("Style Ref.")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("label", { attrs: { for: "styleDes", title: "Style Description" } }, [
        _vm._v("Sty. Des.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("label", { staticClass: "control-label", attrs: { for: "prdDept" } }, [
        _vm._v("Prd. Dpt.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "logic-custom-md-1 col-md-1" }, [
      _c("input", {
        staticClass: "form-control form-control-sm",
        attrs: { type: "text" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("label", { attrs: { for: "subDept" } }, [_vm._v("Sub. Dpt.")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("label", { attrs: { for: "currency" } }, [_vm._v("Currency")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("label", { attrs: { for: "season" } }, [_vm._v("Season")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("label", { attrs: { for: "region" } }, [_vm._v("Region")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("label", { staticClass: "control-label", attrs: { for: "prdCat" } }, [
        _vm._v("Prd. Cat.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c(
        "label",
        { staticClass: "control-label", attrs: { for: "teamLeader" } },
        [_vm._v("Leader")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c(
        "label",
        { staticClass: "control-label", attrs: { for: "dealingMerchant" } },
        [_vm._v("Dea Mer.")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c(
        "label",
        { staticClass: "control-label", attrs: { for: "factoryMerchant" } },
        [_vm._v("Fac Mer.")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("label", { attrs: { for: "email" } }, [_vm._v("Remarks")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("label", { attrs: { for: "email" } }, [_vm._v("Ship Mode")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("label", { staticClass: "control-label", attrs: { for: "uom" } }, [
        _vm._v("Uom")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("label", { staticClass: "control-label", attrs: { for: "smv" } }, [
        _vm._v("SMV")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("label", { staticClass: "control-label", attrs: { for: "packing" } }, [
        _vm._v("Packing")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("label", { attrs: { for: "buyer" } }, [_vm._v("Repeat")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "logic-custom-md-1 col-md-1" }, [
      _c("input", {
        staticClass: "form-control form-control-sm",
        attrs: { type: "checkbox" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("label", { attrs: { for: "email" } }, [_vm._v("Agent")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("label", { attrs: { for: "email" } }, [_vm._v("Client")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("label", { attrs: { for: "email" } }, [_vm._v("Quality Label")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("label", { attrs: { for: "email" } }, [_vm._v("Style Owner")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-39fed168", module.exports)
  }
}

/***/ })

});