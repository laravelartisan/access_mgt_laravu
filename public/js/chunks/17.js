webpackJsonp([17],{

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(660)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(662)
/* template */
var __vue_template__ = __webpack_require__(668)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-049b146a"
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
Component.options.__file = "resources\\assets\\src\\components\\pre-costing\\JobSearch.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-049b146a", Component.options)
  } else {
    hotAPI.reload("data-v-049b146a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(661);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("6f6c9ef6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-049b146a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./JobSearch.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-049b146a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./JobSearch.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "\n.job-search-form .year-month[data-v-049b146a] {\n  text-align: center;\n  padding-bottom: 15px;\n}\n.job-search-form .monthName[data-v-049b146a] {\n  padding: 2px;\n  margin-bottom: 10px;\n}\n.job-search-form .date-picker[data-v-049b146a] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  /* 2. display flex to the rescue */\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.job-search-form th input[data-v-049b146a] {\n  margin: 3px;\n}\n.job-search-form td input[data-v-049b146a] {\n  width: 90px;\n}\n.job-search-form td select[data-v-049b146a] {\n  height: 30px;\n  width: 120px;\n}\n.job-search-form .btn-color[data-v-049b146a] {\n  background-color: #cccccc;\n}\n.job-search-form .select-btn-color[data-v-049b146a] {\n  background-color: #5F5E5E;\n}\n.job-search-result[data-v-049b146a] {\n  height: 300px;\n}\n.job-search-result tbody[data-v-049b146a] {\n    overflow-y: scroll;\n    overflow-x: scroll;\n}\n.job-search-result td[data-v-049b146a] {\n    cursor: pointer;\n    font-size: 9pt;\n    font-family: helvetica, arial, sans-serif;\n}\n", ""]);

// exports


/***/ }),

/***/ 662:
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


exports.default = {
    computed: {
        companyBuyer: function companyBuyer() {
            if (this.selectCompany && this.selectCompany.length > 0) {
                return this.getBuyer(this.selectCompany[0].id);
            }
        },
        isSearched: function isSearched() {
            if (this.dropDown.jobs.length > 0) {
                return true;
            }
            return false;
        }
    },
    props: ['selectCompany'],
    components: {
        'date-picker': function datePicker() {
            return __webpack_require__.e/* import() */(21).then(__webpack_require__.bind(null, 663));
        }
    },
    data: function data() {
        return {
            isLoading: false,
            model: {
                company: '',
                buyer: '',
                jobNo: '',
                styleRef: '',
                internalRef: '',
                fileNo: '',
                orderNo: '',
                toDate: '',
                endDate: '',
                selectedMonth: '',
                year: ''
            },
            dropDown: {
                companies: [],
                buyers: [],
                jobs: [],
                years: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
            },
            months: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
            startTime: {
                time: ''
            },
            endTime: {
                time: ''
            },
            option: {
                type: 'day',
                week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                format: 'DD/MM/YYYY',
                placeholder: 'DD/MM/YYYY',
                inputStyle: {
                    'display': 'inline-block',
                    'margin-left': '3px',
                    'width': '120px'
                },
                color: {
                    header: '#000',
                    headerText: '#f00'
                },
                buttons: {
                    ok: 'Ok',
                    cancel: 'Cancel'
                },
                overlayOpacity: 0.5, // 0.5 as default
                dismissible: true // as true as default
            }
        };
    },
    methods: {
        getBuyer: function getBuyer(companyId) {
            var _this = this;

            this.model.buyer = '';
            axios.get('/buyer/' + companyId).then(function (response) {
                _this.dropDown.buyers = response.data.data;
                console.log(_this.dropDown.buyers);
            }).catch(function (error) {
                console.log(error.response.data.error);
            });
        },
        dateRange: function dateRange(monthNumber) {
            this.model.selectedMonth = monthNumber;
            if (this.model.year == '') {
                alert("Please select one Year");
                return false;
            }
            if (this.isLoading === monthNumber) {
                this.isLoading = false;
                this.startTime.time = '';
                this.endTime.time = '';
                this.model.selectedMonth = '';
                return false;
            }
            this.isLoading = monthNumber;

            var FirstDay = new Date(this.model.year, monthNumber - 1, 1);
            var LastDay = new Date(this.model.year, monthNumber, 0);
            this.startTime.time = moment(FirstDay).format("DD-MM-YYYY");
            this.endTime.time = moment(LastDay).format("DD-MM-YYYY");
        },
        jobSearch: function jobSearch() {
            var _this2 = this;

            if (this.selectCompany && this.selectCompany.length > 0) {
                this.model.company = this.selectCompany[0].id;
            }
            this.model.toDate = this.startTime.time;
            this.model.endDate = this.endTime.time;
            axios.post('/job-search', this.model).then(function (response) {
                _this2.dropDown.jobs = response.data.data;
                console.log(_this2.dropDown.jobs);
            });
        },
        changeYear: function changeYear() {
            if (this.model.selectedMonth) {
                var FirstDay = new Date(this.model.year, this.model.selectedMonth - 1, 1);
                var LastDay = new Date(this.model.year, this.model.selectedMonth, 0);
                this.startTime.time = moment(FirstDay).format("DD-MM-YYYY");
                this.endTime.time = moment(LastDay).format("DD-MM-YYYY");
            }
            if (!this.model.year) {
                this.isLoading = false;
                this.startTime.time = '';
                this.endTime.time = '';
                this.model.selectedMonth = '';
                return false;
            }
        },
        populateData: function populateData(job, event) {
            this.$emit('clicked', 'job');
        }
    },
    created: function created() {
        var _this3 = this;

        axios.get('/company').then(function (response) {
            _this3.dropDown.companies = response.data.data;
            //this.search.menus = this.list.menusList;
            //console.log(this.dropDown.companies);
        }).catch(function (error) {
            console.log(error.response.data.error);
        });
    }
};

/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "table",
      {
        staticClass:
          "table table-responsive table-bordered table-striped table-sm job-search-form"
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("tbody", [
          _c("tr", [
            _c("td", [
              _vm.selectCompany && _vm.selectCompany.length > 0
                ? _c(
                    "select",
                    _vm._l(_vm.selectCompany, function(company) {
                      return _c(
                        "option",
                        {
                          attrs: { selected: "selected" },
                          domProps: { value: company.id }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(company.companyName) +
                              "\n                    "
                          )
                        ]
                      )
                    })
                  )
                : _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.model.company,
                          expression: "model.company"
                        }
                      ],
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
                              _vm.model,
                              "company",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          },
                          function($event) {
                            _vm.getBuyer(_vm.model.company)
                          }
                        ]
                      }
                    },
                    [
                      _c("option", { attrs: { value: "", disabled: "" } }, [
                        _vm._v("Select Company")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.dropDown.companies, function(company) {
                        return _c(
                          "option",
                          { domProps: { value: company.id } },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(company.companyName) +
                                "\n                    "
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
              _vm._v(
                "\n                " +
                  _vm._s(_vm.companyBuyer) +
                  "\n                "
              ),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.model.buyer,
                      expression: "model.buyer"
                    }
                  ],
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
                        "buyer",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "" } }, [
                    _vm._v("Select Buyer")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.dropDown.buyers, function(buyer) {
                    return _c("option", { domProps: { value: buyer.id } }, [
                      _vm._v(_vm._s(buyer.buyerName))
                    ])
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
                    value: _vm.model.jobNo,
                    expression: "model.jobNo"
                  }
                ],
                attrs: { type: "text" },
                domProps: { value: _vm.model.jobNo },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.model, "jobNo", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.model.styleRef,
                    expression: "model.styleRef"
                  }
                ],
                attrs: { type: "text" },
                domProps: { value: _vm.model.styleRef },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.model, "styleRef", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.model.internalRef,
                    expression: "model.internalRef"
                  }
                ],
                attrs: { type: "text" },
                domProps: { value: _vm.model.internalRef },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.model, "internalRef", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.model.fileNo,
                    expression: "model.fileNo"
                  }
                ],
                attrs: { type: "text" },
                domProps: { value: _vm.model.fileNo },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.model, "fileNo", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.model.orderNo,
                    expression: "model.orderNo"
                  }
                ],
                attrs: { type: "text" },
                domProps: { value: _vm.model.orderNo },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.model, "orderNo", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "td",
              { staticClass: "date-picker" },
              [
                _c("date-picker", {
                  attrs: { date: _vm.startTime, option: _vm.option },
                  model: {
                    value: _vm.model.toDate,
                    callback: function($$v) {
                      _vm.$set(_vm.model, "toDate", $$v)
                    },
                    expression: "model.toDate"
                  }
                }),
                _vm._v(" "),
                _c("date-picker", {
                  attrs: { date: _vm.endTime, option: _vm.option },
                  model: {
                    value: _vm.model.endDate,
                    callback: function($$v) {
                      _vm.$set(_vm.model, "endDate", $$v)
                    },
                    expression: "model.endDate"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                attrs: { type: "button", value: "Show" },
                on: {
                  click: function($event) {
                    _vm.jobSearch()
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c(
              "td",
              { staticClass: "year-month", attrs: { colspan: "9" } },
              [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.model.year,
                        expression: "model.year"
                      }
                    ],
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
                            _vm.model,
                            "year",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        _vm.changeYear
                      ]
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("Select Year")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.dropDown.years, function(year) {
                      return _c("option", { domProps: { value: year } }, [
                        _vm._v(_vm._s(year))
                      ])
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _vm._l(_vm.months, function(month, index) {
                  return _c("span", { staticClass: "monthName" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn-color",
                        class: {
                          "select-btn-color": _vm.isLoading === index + 1
                        },
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.dateRange(index + 1)
                          }
                        }
                      },
                      [_vm._v(_vm._s(month))]
                    )
                  ])
                })
              ],
              2
            )
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _vm.isSearched
      ? _c(
          "table",
          {
            staticClass:
              "table table-responsive table-bordered table-striped job-search-result"
          },
          [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.dropDown.jobs, function(job, index) {
                return _c(
                  "tr",
                  {
                    on: {
                      dblclick: function($event) {
                        _vm.populateData(job)
                      }
                    }
                  },
                  [
                    _c("td", [_vm._v(_vm._s(index + 1))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(job.job_no_prefix_num))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(job.year))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(job.buyer_name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(job.style_ref_no))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(job.job_quantity))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(job.order_repeat_no))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(job.po_number))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(job.po_quantity))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(job.shipment_date))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(job.garments_nature))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(job.grouping))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(job.file_no))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(job.date_diff))])
                  ]
                )
              })
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Company")]),
        _vm._v(" "),
        _c("th", [_vm._v("Buyer")]),
        _vm._v(" "),
        _c("th", [_vm._v("Job No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Style Ref")]),
        _vm._v(" "),
        _c("th", [_vm._v("Internal Ref")]),
        _vm._v(" "),
        _c("th", [_vm._v("File No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Order No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date Range")]),
        _vm._v(" "),
        _c("th", [_vm._v(" ")])
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
        _c("th", [_vm._v("Job No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Year")]),
        _vm._v(" "),
        _c("th", [_vm._v("Buyer Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Style Ref. No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Job Qty.")]),
        _vm._v(" "),
        _c("th", [_vm._v("Repeat #")]),
        _vm._v(" "),
        _c("th", [_vm._v("PO #")]),
        _vm._v(" "),
        _c("th", [_vm._v("PO Qty.")]),
        _vm._v(" "),
        _c("th", { staticClass: "date" }, [_vm._v("Shipment Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Gmts Nature")]),
        _vm._v(" "),
        _c("th", [_vm._v("Ref no")]),
        _vm._v(" "),
        _c("th", [_vm._v("File No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Lead time")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-049b146a", module.exports)
  }
}

/***/ })

});