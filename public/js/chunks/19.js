webpackJsonp([19],{

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(656)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(658)
/* template */
var __vue_template__ = __webpack_require__(659)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7c78d0bd"
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
Component.options.__file = "resources\\assets\\src\\components\\pre-costing\\FabricCost.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c78d0bd", Component.options)
  } else {
    hotAPI.reload("data-v-7c78d0bd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(657);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("66f4ac3a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7c78d0bd\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FabricCost.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7c78d0bd\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FabricCost.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "\n.header[data-v-7c78d0bd] {\n  background-color: #343a40;\n  border-color: #660000;\n}\n.fabric-cost-tbl th[data-v-7c78d0bd] {\n  font-size: 9pt;\n}\n", ""]);

// exports


/***/ }),

/***/ 658:
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


exports.default = {
    components: {
        'insert-button-group': function insertButtonGroup() {
            return __webpack_require__.e/* import() */(15/* duplicate */).then(__webpack_require__.bind(null, 586));
        }
    },
    data: function data() {
        return {
            fabCosts: [{
                gmtsItem: '',
                bodyPart: '',
                bodyPartType: '',
                fabNature: '',
                colorType: '',
                fabricDescription: '',
                fabricSource: '',
                diaType: '',
                gsm: '',
                colorAndSize: '',
                color: '',
                consumptionBasis: '',
                uom: '',
                AvgGreyCons: '',
                rate: '',
                amount: ''

            }],
            dropDowns: {
                gmtsItems: ['Boys Boxer', 'Hoodies', 'T-shirt'],
                bodyParts: ['collar', 'cuff', 'hood', 'sleeve', 'binding'],
                bodyPartTypes: ['flat knit', 'bottom', 'other']
            }
        };
    },
    methods: {
        addRow: function addRow() {
            this.fabCosts.push({
                gmtsItem: '',
                bodyPart: '',
                bodyPartType: '',
                fabNature: '',
                colorType: '',
                fabricDescription: '',
                fabricSource: '',
                diaType: '',
                gsm: '',
                colorAndSize: '',
                color: '',
                consumptionBasis: '',
                uom: '',
                AvgGreyCons: '',
                rate: '',
                amount: ''
            });
        },

        removeRow: function removeRow(index) {
            this.fabCosts.splice(index, 1);
        }
    },

    created: function created() {}
};

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { role: "tablist" } },
    [
      _c(
        "b-card",
        { staticClass: "mb-1", attrs: { "no-body": "" } },
        [
          _c(
            "b-card-header",
            {
              staticClass: "p-1",
              attrs: { "header-tag": "header", role: "tab" }
            },
            [
              _c(
                "b-btn",
                {
                  directives: [
                    {
                      name: "b-toggle",
                      rawName: "v-b-toggle.accordion1",
                      modifiers: { accordion1: true }
                    }
                  ],
                  staticClass: "header",
                  attrs: { block: "", href: "#", variant: "info" }
                },
                [_vm._v("Fabric Cost")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-collapse",
            {
              attrs: {
                id: "accordion1",
                visible: "",
                accordion: "my-accordion",
                role: "tabpanel"
              }
            },
            [
              _c(
                "b-card-body",
                [
                  _c(
                    "table",
                    {
                      staticClass:
                        "table table-responsive table-bordered fabric-cost-tbl"
                    },
                    [
                      _c("thead", [
                        _c("tr", [
                          _c("th", { attrs: { width: "130" } }, [
                            _vm._v("Gmts Item")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { width: "100" } }, [
                            _vm._v("Body Part")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { width: "70" } }, [
                            _vm._v("Body Part Type")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { width: "100" } }, [
                            _vm._v("Fab Nature")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { width: "80" } }, [
                            _vm._v("Color Type")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { width: "180" } }, [
                            _vm._v("Fabric Description")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { width: "80" } }, [
                            _vm._v("Fabric Source")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { width: "60" } }, [
                            _vm._v("Width /Dia Type")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { width: "40" } }, [
                            _vm._v("GSM/ Weight")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { width: "120" } }, [
                            _vm._v("Color & Size Sensitive")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { width: "75" } }, [
                            _vm._v("Color")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { width: "80" } }, [
                            _vm._v("Consumption Basis")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { width: "55" } }, [_vm._v("Uom")]),
                          _vm._v(" "),
                          _c("th", { attrs: { width: "65" } }, [
                            _vm._v("Avg. Grey Cons")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { width: "60" } }, [
                            _vm._v("Rate")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { width: "70" } }, [
                            _vm._v("Amount")
                          ]),
                          _vm._v(" "),
                          _c("th", [_vm._v(" ")])
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.fabCosts, function(fbcost, index) {
                        return _c("tr", [
                          _c("td", [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: fbcost.gmtsItem,
                                    expression: "fbcost.gmtsItem"
                                  }
                                ],
                                on: {
                                  change: function($event) {
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
                                      fbcost,
                                      "gmtsItem",
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
                                  [_vm._v("Select")]
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.dropDowns.gmtsItems, function(
                                  gmtsItem
                                ) {
                                  return _c(
                                    "option",
                                    { domProps: { value: gmtsItem } },
                                    [_vm._v(_vm._s(gmtsItem))]
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
                                    value: fbcost.bodyPart,
                                    expression: "fbcost.bodyPart"
                                  }
                                ],
                                on: {
                                  change: function($event) {
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
                                      fbcost,
                                      "bodyPart",
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
                                  [_vm._v("Select")]
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.dropDowns.bodyParts, function(
                                  bodyPart
                                ) {
                                  return _c(
                                    "option",
                                    { domProps: { value: bodyPart } },
                                    [_vm._v(_vm._s(bodyPart))]
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
                                    value: fbcost.bodyPartType,
                                    expression: "fbcost.bodyPartType"
                                  }
                                ],
                                on: {
                                  change: function($event) {
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
                                      fbcost,
                                      "bodyPartType",
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
                                  [_vm._v("Select")]
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.dropDowns.bodyPartTypes, function(
                                  bodyPartType
                                ) {
                                  return _c(
                                    "option",
                                    { domProps: { value: bodyPartType } },
                                    [_vm._v(_vm._s(bodyPartType))]
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
                                    value: fbcost.fabNature,
                                    expression: "fbcost.fabNature"
                                  }
                                ],
                                on: {
                                  change: function($event) {
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
                                      fbcost,
                                      "fabNature",
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
                                  [_vm._v("Select")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "knit finish fabric" } },
                                  [_vm._v("Knit Finish Fabric")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "woven fabric" } },
                                  [_vm._v("woven Fabric")]
                                )
                              ]
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
                                    value: fbcost.colorType,
                                    expression: "fbcost.colorType"
                                  }
                                ],
                                on: {
                                  change: function($event) {
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
                                      fbcost,
                                      "colorType",
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
                                  [_vm._v("Select")]
                                ),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "1" } }, [
                                  _vm._v("Solid")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2" } }, [
                                  _vm._v("Stripe (Y/D)")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "3" } }, [
                                  _vm._v("Cross Over (Y/D)")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "4" } }, [
                                  _vm._v("Check (Y/D)")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "5" } }, [
                                  _vm._v("AOP")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "6" } }, [
                                  _vm._v("Solid (Y/D)")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "7" } }, [
                                  _vm._v("AOP Stripe")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "20" } }, [
                                  _vm._v("Florecent")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "25" } }, [
                                  _vm._v("Reactive")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "26" } }, [
                                  _vm._v("Melange")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "27" } }, [
                                  _vm._v("Marl")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "28" } }, [
                                  _vm._v("Burn Out")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "29" } }, [
                                  _vm._v("Gmts Dyeing")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "30" } }, [
                                  _vm._v("Cross Dyeing")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "31" } }, [
                                  _vm._v("Over Dyed")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "32" } }, [
                                  _vm._v("Space Y/D")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "33" } }, [
                                  _vm._v("Faulty Y/D")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "34" } }, [
                                  _vm._v("Solid Stripe")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "35" } }, [
                                  _vm._v("One Part Dye")
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: fbcost.fabricDescription,
                                  expression: "fbcost.fabricDescription"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: { type: "text" },
                              domProps: { value: fbcost.fabricDescription },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    fbcost,
                                    "fabricDescription",
                                    $event.target.value
                                  )
                                }
                              }
                            })
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
                                    value: fbcost.fabricSource,
                                    expression: "fbcost.fabricSource"
                                  }
                                ],
                                on: {
                                  change: function($event) {
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
                                      fbcost,
                                      "fabricSource",
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
                                  [_vm._v("Select")]
                                ),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "1" } }, [
                                  _vm._v("Production")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2" } }, [
                                  _vm._v("Buyer Supplied")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "3" } }, [
                                  _vm._v("Purchase")
                                ])
                              ]
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
                                    value: fbcost.diaType,
                                    expression: "fbcost.diaType"
                                  }
                                ],
                                on: {
                                  change: function($event) {
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
                                      fbcost,
                                      "diaType",
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
                                  [_vm._v("Select")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "1", selected: "" } },
                                  [_vm._v("Open Width")]
                                ),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2" } }, [
                                  _vm._v("Tubular")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "3" } }, [
                                  _vm._v("Needle open")
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: fbcost.gsm,
                                  expression: "fbcost.gsm"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: { type: "text" },
                              domProps: { value: fbcost.gsm },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(fbcost, "gsm", $event.target.value)
                                }
                              }
                            })
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
                                    value: fbcost.colorAndSize,
                                    expression: "fbcost.colorAndSize"
                                  }
                                ],
                                on: {
                                  change: function($event) {
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
                                      fbcost,
                                      "colorAndSize",
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
                                  [_vm._v("Select")]
                                ),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "1" } }, [
                                  _vm._v("As per Gmts. Color")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2" } }, [
                                  _vm._v("Size Sensitive")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "3" } }, [
                                  _vm._v("Contrast Color")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "4" } }, [
                                  _vm._v("Color & Size Sensitive")
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: fbcost.color,
                                  expression: "fbcost.color"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: { type: "text" },
                              domProps: { value: fbcost.color },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(fbcost, "color", $event.target.value)
                                }
                              }
                            })
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
                                    value: fbcost.consumptionBasis,
                                    expression: "fbcost.consumptionBasis"
                                  }
                                ],
                                on: {
                                  change: function($event) {
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
                                      fbcost,
                                      "consumptionBasis",
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
                                  [_vm._v("Select")]
                                ),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "1" } }, [
                                  _vm._v("Cad Basis")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2" } }, [
                                  _vm._v("Measurement Basis")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "3" } }, [
                                  _vm._v("Marker Basis")
                                ])
                              ]
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
                                    value: fbcost.uom,
                                    expression: "fbcost.uom"
                                  }
                                ],
                                on: {
                                  change: function($event) {
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
                                      fbcost,
                                      "uom",
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
                                  [_vm._v("Select")]
                                ),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "1" } }, [
                                  _vm._v("Pcs")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "12" } }, [
                                  _vm._v("Kg")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "23" } }, [
                                  _vm._v("Mtr")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "27" } }, [
                                  _vm._v("Yds")
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: fbcost.AvgGreyCons,
                                  expression: "fbcost.AvgGreyCons"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: { type: "text" },
                              domProps: { value: fbcost.AvgGreyCons },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    fbcost,
                                    "AvgGreyCons",
                                    $event.target.value
                                  )
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
                                  value: fbcost.rate,
                                  expression: "fbcost.rate"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: { type: "text" },
                              domProps: { value: fbcost.rate },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(fbcost, "rate", $event.target.value)
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
                                  value: fbcost.amount,
                                  expression: "fbcost.amount"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: { type: "text" },
                              domProps: { value: fbcost.amount },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    fbcost,
                                    "amount",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            index == _vm.fabCosts.length - 1
                              ? _c(
                                  "span",
                                  {
                                    staticStyle: { cursor: "pointer" },
                                    on: {
                                      click: function($event) {
                                        _vm.addRow(index)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fa fa-plus" })]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            index == _vm.fabCosts.length - 1 && index > 0
                              ? _c(
                                  "span",
                                  {
                                    staticStyle: { cursor: "pointer" },
                                    on: {
                                      click: function($event) {
                                        _vm.removeRow(index)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fa fa-minus" })]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            index > 0 && index < _vm.fabCosts.length - 1
                              ? _c(
                                  "span",
                                  {
                                    staticStyle: { cursor: "pointer" },
                                    on: {
                                      click: function($event) {
                                        _vm.removeRow(index)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fa fa-minus" })]
                                )
                              : _vm._e()
                          ])
                        ])
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("insert-button-group")
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-card",
        { staticClass: "mb-1", attrs: { "no-body": "" } },
        [
          _c(
            "b-card-header",
            {
              staticClass: "p-1",
              attrs: { "header-tag": "header", role: "tab" }
            },
            [
              _c(
                "b-btn",
                {
                  directives: [
                    {
                      name: "b-toggle",
                      rawName: "v-b-toggle.accordion2",
                      modifiers: { accordion2: true }
                    }
                  ],
                  staticClass: "header",
                  attrs: { block: "", href: "#", variant: "info" }
                },
                [_vm._v("Yarn Cost")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-collapse",
            {
              attrs: {
                id: "accordion2",
                accordion: "my-accordion",
                role: "tabpanel"
              }
            },
            [
              _c(
                "b-card-body",
                [
                  _c(
                    "table",
                    { staticClass: "table table-responsive table-bordered" },
                    [
                      _c("thead", [
                        _c("tr", [
                          _c("th", [_vm._v("Count")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Comp 1")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("%")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Color")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Type")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Cons Qnty")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Supplier")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Rate")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Amount")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tbody", [
                        _c("tr", [
                          _c("td", [
                            _c("select", [
                              _c("option", [_vm._v("40s")]),
                              _vm._v(" "),
                              _c("option", [_vm._v("30s/D")]),
                              _vm._v(" "),
                              _c("option", [_vm._v("39s")])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("select", [
                              _c("option", [_vm._v("cotton")]),
                              _vm._v(" "),
                              _c("option", [_vm._v("collmax")]),
                              _vm._v(" "),
                              _c("option", [_vm._v("Convensitional")])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [_c("input", { attrs: { type: "text" } })]),
                          _vm._v(" "),
                          _c("td", [_c("input", { attrs: { type: "text" } })]),
                          _vm._v(" "),
                          _c("td", [
                            _c("select", [
                              _c("option", [_vm._v("Carded")]),
                              _vm._v(" "),
                              _c("option", [_vm._v("Combet")]),
                              _vm._v(" "),
                              _c("option", [_vm._v("Compact")])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [_c("input", { attrs: { type: "text" } })]),
                          _vm._v(" "),
                          _c("td", [
                            _c("select", [
                              _c("option", [_vm._v("Select")]),
                              _vm._v(" "),
                              _c("option", [_vm._v("Logic")]),
                              _vm._v(" "),
                              _c("option", [_vm._v("Asrotex")])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [_c("input", { attrs: { type: "text" } })]),
                          _vm._v(" "),
                          _c("td", [_c("input", { attrs: { type: "text" } })])
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("insert-button-group")
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-card",
        { staticClass: "mb-1", attrs: { "no-body": "" } },
        [
          _c(
            "b-card-header",
            {
              staticClass: "p-1",
              attrs: { "header-tag": "header", role: "tab" }
            },
            [
              _c(
                "b-btn",
                {
                  directives: [
                    {
                      name: "b-toggle",
                      rawName: "v-b-toggle.accordion3",
                      modifiers: { accordion3: true }
                    }
                  ],
                  staticClass: "header",
                  attrs: { block: "", href: "#", variant: "info" }
                },
                [_vm._v("Conversion Cost")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-collapse",
            {
              attrs: {
                id: "accordion3",
                accordion: "my-accordion",
                role: "tabpanel"
              }
            },
            [
              _c("b-card-body", [
                _c(
                  "table",
                  { staticClass: "table table-responsive table-bordered" },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [
                          _vm._v(
                            "Fabric Description\n                            "
                          )
                        ]),
                        _c("th", [
                          _vm._v(
                            "Process\tProcess Loss\n                            "
                          )
                        ]),
                        _c("th", [
                          _vm._v("Req. Qnty\n                            ")
                        ]),
                        _c("th", [
                          _vm._v(
                            "Avg.Req. Qnty (Less Process Loss)\n                                Charge/ Unit\n                                Amount\n                                Status"
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ])
            ],
            1
          )
        ],
        1
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-7c78d0bd", module.exports)
  }
}

/***/ })

});