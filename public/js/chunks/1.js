webpackJsonp([1],{

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(615)
/* template */
var __vue_template__ = __webpack_require__(620)
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
Component.options.__file = "resources\\assets\\src\\views\\admin\\Dashboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e9a345e6", Component.options)
  } else {
    hotAPI.reload("data-v-e9a345e6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = __webpack_require__(588);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isEmpty(opt) {
  if (opt === 0) return false;
  if (Array.isArray(opt) && opt.length === 0) return true;
  return !opt;
}

function includes(str, query) {
  /* istanbul ignore else */
  if (str === undefined) str = 'undefined';
  if (str === null) str = 'null';
  if (str === false) str = 'false';
  var text = str.toString().toLowerCase();
  return text.indexOf(query.trim()) !== -1;
}

function filterOptions(options, search, label, customLabel) {
  return options.filter(function (option) {
    return includes(customLabel(option, label), search);
  });
}

function stripGroups(options) {
  return options.filter(function (option) {
    return !option.$isLabel;
  });
}

function flattenOptions(values, label) {
  return function (options) {
    return options.reduce(function (prev, curr) {
      /* istanbul ignore else */
      if (curr[values] && curr[values].length) {
        prev.push({
          $groupLabel: curr[label],
          $isLabel: true
        });
        return prev.concat(curr[values]);
      }
      return prev;
    }, []);
  };
}

function filterGroups(search, label, values, groupLabel, customLabel) {
  return function (groups) {
    return groups.map(function (group) {
      var _ref;

      /* istanbul ignore else */
      if (!group[values]) {
        console.warn('Options passed to vue-multiselect do not contain groups, despite the config.');
        return [];
      }
      var groupOptions = filterOptions(group[values], search, label, customLabel);

      return groupOptions.length ? (_ref = {}, _defineProperty(_ref, groupLabel, group[groupLabel]), _defineProperty(_ref, values, groupOptions), _ref) : [];
    });
  };
}

var flow = function flow() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduce(function (v, f) {
      return f(v);
    }, x);
  };
};

exports.default = {
  data: function data() {
    return {
      selectAllFlag: true,
      search: '',
      selectAllOptions: [],
      isOpen: false,
      prefferedOpenDirection: 'below',
      optimizedHeight: this.maxHeight,
      internalValue: this.value || this.value === 0 ? (0, _utils2.default)(Array.isArray(this.value) ? this.value : [this.value]) : []
    };
  },

  props: {
    /**
     * Decide whether to filter the results based on search query.
     * Useful for async filtering, where we search through more complex data.
     * @type {Boolean}
     */
    internalSearch: {
      type: Boolean,
      default: true
    },
    /**
     * Array of available options: Objects, Strings or Integers.
     * If array of objects, visible label will default to option.label.
     * If `labal` prop is passed, label will equal option['label']
     * @type {Array}
     */
    options: {
      type: Array,
      required: true
    },
    /**
     * Equivalent to the `multiple` attribute on a `<select>` input.
     * @default false
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
      default: false
    },
    /**
     * Presets the selected options value.
     * @type {Object||Array||String||Integer}
     */
    value: {
      type: null,
      default: function _default() {
        return [];
      }
    },
    /**
     * Key to compare objects
     * @default 'id'
     * @type {String}
     */
    trackBy: {
      type: String
    },
    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    label: {
      type: String
    },
    /**
     * Enable/disable search in options
     * @default true
     * @type {Boolean}
     */
    searchable: {
      type: Boolean,
      default: true
    },
    /**
     * Clear the search input after select()
     * @default true
     * @type {Boolean}
     */
    clearOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Hide already selected options
     * @default false
     * @type {Boolean}
     */
    hideSelected: {
      type: Boolean,
      default: false
    },
    /**
     * Equivalent to the `placeholder` attribute on a `<select>` input.
     * @default 'Select option'
     * @type {String}
     */
    placeholder: {
      type: String,
      default: 'Select option'
    },
    /**
     * Allow to remove all selected values
     * @default true
     * @type {Boolean}
     */
    allowEmpty: {
      type: Boolean,
      default: true
    },
    /**
     * Reset this.internalValue, this.search after this.internalValue changes.
     * Useful if want to create a stateless dropdown.
     * @default false
     * @type {Boolean}
     */
    resetAfter: {
      type: Boolean,
      default: false
    },
    /**
     * Enable/disable closing after selecting an option
     * @default true
     * @type {Boolean}
     */
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Function to interpolate the custom label
     * @default false
     * @type {Function}
     */
    customLabel: {
      type: Function,
      default: function _default(option, label) {
        if (isEmpty(option)) return '';
        return label ? option[label] : option;
      }
    },
    /**
     * Disable / Enable tagging
     * @default false
     * @type {Boolean}
     */
    taggable: {
      type: Boolean,
      default: false
    },
    /**
     * String to show when highlighting a potential tag
     * @default 'Press enter to create a tag'
     * @type {String}
    */
    tagPlaceholder: {
      type: String,
      default: 'Press enter to create a tag'
    },
    /**
     * By default new tags will appear above the search results.
     * Changing to 'bottom' will revert this behaviour
     * and will proritize the search results
     * @default 'top'
     * @type {String}
    */
    tagPosition: {
      type: String,
      default: 'top'
    },
    /**
     * Number of allowed selected options. No limit if 0.
     * @default 0
     * @type {Number}
    */
    max: {
      type: [Number, Boolean],
      default: false
    },
    /**
     * Will be passed with all events as second param.
     * Useful for identifying events origin.
     * @default null
     * @type {String|Integer}
    */
    id: {
      default: null
    },
    /**
     * Limits the options displayed in the dropdown
     * to the first X options.
     * @default 1000
     * @type {Integer}
    */
    optionsLimit: {
      type: Number,
      default: 1000
    },
    /**
     * Name of the property containing
     * the group values
     * @default 1000
     * @type {String}
    */
    groupValues: {
      type: String
    },
    /**
     * Name of the property containing
     * the group label
     * @default 1000
     * @type {String}
    */
    groupLabel: {
      type: String
    },
    /**
     * Array of keyboard keys to block
     * when selecting
     * @default 1000
     * @type {String}
    */
    blockKeys: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    preserveSearch: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    /* istanbul ignore else */
    if (!this.multiple && !this.clearOnSelect) {
      console.warn('[Vue-Multiselect warn]: ClearOnSelect and Multiple props can’t be both set to false.');
    }
    if (!this.multiple && this.max) {
      console.warn('[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.');
    }
  },

  computed: {
    filteredOptions: function filteredOptions() {
      var search = this.search || '';
      var normalizedSearch = search.toLowerCase().trim();

      var options = this.options.concat();

      /* istanbul ignore else */
      if (this.internalSearch) {
        options = this.groupValues ? this.filterAndFlat(options, normalizedSearch, this.label) : filterOptions(options, normalizedSearch, this.label, this.customLabel);
      } else {
        options = this.groupValues ? flattenOptions(this.groupValues, this.groupLabel)(options) : options;
      }

      options = this.hideSelected ? options.filter(this.isNotSelected) : options;

      /* istanbul ignore else */
      if (this.taggable && normalizedSearch.length && !this.isExistingOption(normalizedSearch)) {
        if (this.tagPosition === 'bottom') {
          options.push({ isTag: true, label: search });
        } else {
          options.unshift({ isTag: true, label: search });
        }
      }

      return options.slice(0, this.optionsLimit);
    },
    valueKeys: function valueKeys() {
      var _this = this;

      if (this.trackBy) {
        return this.internalValue.map(function (element) {
          return element[_this.trackBy];
        });
      } else {
        return this.internalValue;
      }
    },
    optionKeys: function optionKeys() {
      var _this2 = this;

      var options = this.groupValues ? this.flatAndStrip(this.options) : this.options;
      return options.map(function (element) {
        return _this2.customLabel(element, _this2.label).toString().toLowerCase();
      });
    },
    currentOptionLabel: function currentOptionLabel() {
      return this.multiple ? this.searchable ? '' : this.placeholder : this.internalValue.length ? this.getOptionLabel(this.internalValue[0]) : this.searchable ? '' : this.placeholder;
    }
  },
  watch: {
    internalValue: function internalValue(newVal, oldVal) {
      /* istanbul ignore else */
      if (this.resetAfter && this.internalValue.length) {
        this.search = '';
        this.internalValue = [];
      }
    },
    search: function search() {
      this.$emit('search-change', this.search, this.id);
    },
    value: function value(_value) {
      this.internalValue = this.getInternalValue(_value);
    }
  },
  methods: {
    /**
     * Converts the internal value to the external value
     * @returns {Object||Array||String||Integer} returns the external value
     */
    getValue: function getValue() {
      return this.multiple ? (0, _utils2.default)(this.internalValue) : this.internalValue.length === 0 ? null : (0, _utils2.default)(this.internalValue[0]);
    },

    /**
     * Converts the external value to the internal value
     * @returns {Array} returns the internal value
     */
    getInternalValue: function getInternalValue(value) {
      return value === null || value === undefined ? [] : this.multiple ? (0, _utils2.default)(value) : (0, _utils2.default)([value]);
    },

    /**
     * Filters and then flattens the options list
     * @param  {Array}
     * @returns {Array} returns a filtered and flat options list
     */
    filterAndFlat: function filterAndFlat(options, search, label) {
      return flow(filterGroups(search, label, this.groupValues, this.groupLabel, this.customLabel), flattenOptions(this.groupValues, this.groupLabel))(options);
    },

    /**
     * Flattens and then strips the group labels from the options list
     * @param  {Array}
     * @returns {Array} returns a flat options list without group labels
     */
    flatAndStrip: function flatAndStrip(options) {
      return flow(flattenOptions(this.groupValues, this.groupLabel), stripGroups)(options);
    },

    /**
     * Updates the search value
     * @param  {String}
     */
    updateSearch: function updateSearch(query) {
      this.search = query;
    },

    /**
     * Finds out if the given query is already present
     * in the available options
     * @param  {String}
     * @returns {Boolean} returns true if element is available
     */
    isExistingOption: function isExistingOption(query) {
      return !this.options ? false : this.optionKeys.indexOf(query) > -1;
    },

    /**
     * Finds out if the given element is already present
     * in the result value
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is selected
     */
    isSelected: function isSelected(option) {
      var opt = this.trackBy ? option[this.trackBy] : option;
      return this.valueKeys.indexOf(opt) > -1;
    },

    /**
     * Finds out if the given element is NOT already present
     * in the result value. Negated isSelected method.
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is not selected
     */
    isNotSelected: function isNotSelected(option) {
      return !this.isSelected(option);
    },

    /**
     * Returns empty string when options is null/undefined
     * Returns tag query if option is tag.
     * Returns the customLabel() results and casts it to string.
     *
     * @param  {Object||String||Integer} Passed option
     * @returns {Object||String}
     */
    getOptionLabel: function getOptionLabel(option) {
      /* istanbul ignore else */
      if (isEmpty(option)) return '';
      /* istanbul ignore else */
      if (option.isTag) return option.label;
      /* istanbul ignore else */
      if (option.$isLabel) return option.$groupLabel;

      var label = this.customLabel(option, this.label);
      /* istanbul ignore else */
      if (isEmpty(label)) return '';
      return label;
    },

    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     * @param  {Boolean} block removing
     */
    select: function select(option, key) {

      if (option == null) {
        this.selectAllFlag = false;
        this.internalValue = this.options;
        this.deactivate();
        this.$emit('selectAll', this.options);
        return false;
      }
      if (option == 'deselect') {
        this.selectAllFlag = true;
        this.internalValue = [];
        this.deactivate();
        this.$emit('selectAll', []);
        return false;
      }
      /* istanbul ignore else */
      if (this.blockKeys.indexOf(key) !== -1 || this.disabled || option.$isLabel || option.$isDisabled) return;
      /* istanbul ignore else */
      if (this.max && this.multiple && this.internalValue.length === this.max) return;
      /* istanbul ignore else */
      if (key === 'Tab' && !this.pointerDirty) return;
      if (option.isTag) {
        this.$emit('tag', option.label, this.id);
        this.search = '';
        if (this.closeOnSelect && !this.multiple) this.deactivate();
      } else {
        var isSelected = this.isSelected(option);
        if (isSelected) {
          if (key !== 'Tab') this.removeElement(option);
          return;
        } else if (this.multiple) {
          this.internalValue.push(option);
          if (this.internalValue.length === this.options.length) {
            this.selectAllFlag = false;
          }
        } else {
          this.internalValue = [option];
        }

        this.$emit('select', (0, _utils2.default)(option), this.id);
        this.$emit('input', this.getValue(), this.id);

        /* istanbul ignore else */
        if (this.clearOnSelect) this.search = '';
      }
      /* istanbul ignore else */
      if (this.closeOnSelect) this.deactivate();
    },

    /**
     * Removes the given option from the selected options.
     * Additionally checks this.allowEmpty prop if option can be removed when
     * it is the last selected option.
     *
     * @param  {type} option description
     * @returns {type}        description
     */
    removeElement: function removeElement(option) {
      var shouldClose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      /* istanbul ignore else */
      if (this.disabled) return;
      /* istanbul ignore else */
      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate();
        return;
      }
      var index = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object' ? this.valueKeys.indexOf(option[this.trackBy]) : this.valueKeys.indexOf(option);

      this.internalValue.splice(index, 1);
      if (this.internalValue.length < this.options.length) {
        this.selectAllFlag = true;
      }
      this.$emit('input', this.getValue(), this.id);
      this.$emit('remove', (0, _utils2.default)(option), this.id);

      /* istanbul ignore else */
      if (this.closeOnSelect && shouldClose) this.deactivate();
    },

    /**
     * Calls this.removeElement() with the last element
     * from this.internalValue (selected element Array)
     *
     * @fires this#removeElement
     */
    removeLastElement: function removeLastElement() {
      /* istanbul ignore else */
      if (this.blockKeys.indexOf('Delete') !== -1) return;
      /* istanbul ignore else */
      if (this.search.length === 0 && Array.isArray(this.internalValue)) {
        this.removeElement(this.internalValue[this.internalValue.length - 1], false);
      }
    },

    /**
     * Opens the multiselect’s dropdown.
     * Sets this.isOpen to TRUE
     */
    activate: function activate() {
      var _this3 = this;

      /* istanbul ignore else */
      if (this.isOpen || this.disabled) return;

      this.adjustPosition();
      /* istanbul ignore else  */
      if (this.groupValues && this.pointer === 0 && this.filteredOptions.length) {
        this.pointer = 1;
      }

      this.isOpen = true;
      /* istanbul ignore else  */
      if (this.searchable) {
        if (!this.preserveSearch) this.search = '';
        this.$nextTick(function () {
          return _this3.$refs.search.focus();
        });
      } else {
        this.$el.focus();
      }
      this.$emit('open', this.id);
    },

    /**
     * Closes the multiselect’s dropdown.
     * Sets this.isOpen to FALSE
     */
    deactivate: function deactivate() {
      /* istanbul ignore else */
      if (!this.isOpen) return;

      this.isOpen = false;
      /* istanbul ignore else  */
      if (this.searchable) {
        this.$refs.search.blur();
      } else {
        this.$el.blur();
      }
      if (!this.preserveSearch) this.search = '';
      this.$emit('close', this.getValue(), this.id);
    },

    /**
     * Call this.activate() or this.deactivate()
     * depending on this.isOpen value.
     *
     * @fires this#activate || this#deactivate
     * @property {Boolean} isOpen indicates if dropdown is open
     */
    toggle: function toggle() {
      this.isOpen ? this.deactivate() : this.activate();
    },

    /**
     * Updates the hasEnoughSpace variable used for
     * detecting where to expand the dropdown
     */
    adjustPosition: function adjustPosition() {
      if (typeof window === 'undefined') return;

      var spaceAbove = this.$el.getBoundingClientRect().top;
      var spaceBelow = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      var hasEnoughSpaceBelow = spaceBelow > this.maxHeight;

      if (hasEnoughSpaceBelow || spaceBelow > spaceAbove || this.openDirection === 'below' || this.openDirection === 'bottom') {
        this.prefferedOpenDirection = 'below';
        this.optimizedHeight = Math.min(spaceBelow - 40, this.maxHeight);
      } else {
        this.prefferedOpenDirection = 'above';
        this.optimizedHeight = Math.min(spaceAbove - 40, this.maxHeight);
      }
    }
  }
};

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = deepClone;
/**
 * Returns a deeply cloned object without reference.
 * Copied from Vuex.
 * @type {Object}
 */
function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  } else if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
    var cloned = {};
    var keys = Object.keys(obj);
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      cloned[key] = deepClone(obj[key]);
    }
    return cloned;
  } else {
    return obj;
  }
}

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      pointer: 0,
      pointerDirty: false
    };
  },

  props: {
    /**
     * Enable/disable highlighting of the pointed value.
     * @type {Boolean}
     * @default true
     */
    showPointer: {
      type: Boolean,
      default: true
    },
    optionHeight: {
      type: Number,
      default: 40
    }
  },
  computed: {
    pointerPosition: function pointerPosition() {
      return this.pointer * this.optionHeight;
    },
    visibleElements: function visibleElements() {
      return this.optimizedHeight / this.optionHeight;
    }
  },
  watch: {
    filteredOptions: function filteredOptions() {
      this.pointerAdjust();
    },
    isOpen: function isOpen() {
      this.pointerDirty = false;
    }
  },
  methods: {
    optionHighlight: function optionHighlight(index, option) {
      return {
        'multiselect__option--highlight': index === this.pointer && this.showPointer,
        'multiselect__option--selected': this.isSelected(option)
      };
    },
    addPointerElement: function addPointerElement() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Enter',
          key = _ref.key;

      /* istanbul ignore else */
      if (this.filteredOptions.length > 0) {
        this.select(this.filteredOptions[this.pointer], key);
      }
      this.pointerReset();
    },
    pointerForward: function pointerForward() {
      /* istanbul ignore else */
      if (this.pointer < this.filteredOptions.length - 1) {
        this.pointer++;
        /* istanbul ignore next */
        if (this.$refs.list.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight) {
          this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight;
        }
        /* istanbul ignore else */
        if (this.filteredOptions[this.pointer].$isLabel) this.pointerForward();
      }
      this.pointerDirty = true;
    },
    pointerBackward: function pointerBackward() {
      if (this.pointer > 0) {
        this.pointer--;
        /* istanbul ignore else */
        if (this.$refs.list.scrollTop >= this.pointerPosition) {
          this.$refs.list.scrollTop = this.pointerPosition;
        }
        /* istanbul ignore else */
        if (this.filteredOptions[this.pointer].$isLabel) this.pointerBackward();
      } else {
        /* istanbul ignore else */
        if (this.filteredOptions[0].$isLabel) this.pointerForward();
      }
      this.pointerDirty = true;
    },
    pointerReset: function pointerReset() {
      /* istanbul ignore else */
      if (!this.closeOnSelect) return;
      this.pointer = 0;
      /* istanbul ignore else */
      if (this.$refs.list) {
        this.$refs.list.scrollTop = 0;
      }
    },
    pointerAdjust: function pointerAdjust() {
      /* istanbul ignore else */
      if (this.pointer >= this.filteredOptions.length - 1) {
        this.pointer = this.filteredOptions.length ? this.filteredOptions.length - 1 : 0;
      }
    },
    pointerSet: function pointerSet(index) {
      this.pointer = index;
      this.pointerDirty = true;
    }
  }
};

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepClone = exports.pointerMixin = exports.multiselectMixin = exports.Multiselect = undefined;

var _Multiselect = __webpack_require__(592);

var _Multiselect2 = _interopRequireDefault(_Multiselect);

var _multiselectMixin = __webpack_require__(587);

var _multiselectMixin2 = _interopRequireDefault(_multiselectMixin);

var _pointerMixin = __webpack_require__(589);

var _pointerMixin2 = _interopRequireDefault(_pointerMixin);

var _utils = __webpack_require__(588);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Multiselect2.default;
exports.Multiselect = _Multiselect2.default;
exports.multiselectMixin = _multiselectMixin2.default;
exports.pointerMixin = _pointerMixin2.default;
exports.deepClone = _utils2.default;

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(593)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(595)
/* template */
var __vue_template__ = __webpack_require__(596)
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
Component.options.__file = "resources\\assets\\src\\widgets\\vueMultiselect\\Multiselect.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e74c9b1", Component.options)
  } else {
    hotAPI.reload("data-v-1e74c9b1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(594);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("4a097b76", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e74c9b1\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Multiselect.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e74c9b1\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Multiselect.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "\nfieldset[disabled] .multiselect {\n    pointer-events: none;\n}\n.multiselect__spinner {\n    position: absolute;\n    right: 1px;\n    top: 1px;\n    width: 48px;\n    height: 35px;\n    background: #fff;\n    display: block;\n}\n.multiselect__spinner:before,\n.multiselect__spinner:after {\n    position: absolute;\n    content: \"\";\n    top: 50%;\n    left: 50%;\n    margin: -8px 0 0 -8px;\n    width: 16px;\n    height: 16px;\n    border-radius: 100%;\n    border-color: #41B883 transparent transparent;\n    border-style: solid;\n    border-width: 2px;\n    -webkit-box-shadow: 0 0 0 1px transparent;\n            box-shadow: 0 0 0 1px transparent;\n}\n.multiselect__spinner:before {\n    -webkit-animation: spinning 2.4s cubic-bezier(0.41, 0.26, 0.2, 0.62);\n            animation: spinning 2.4s cubic-bezier(0.41, 0.26, 0.2, 0.62);\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n}\n.multiselect__spinner:after {\n    -webkit-animation: spinning 2.4s cubic-bezier(0.51, 0.09, 0.21, 0.8);\n            animation: spinning 2.4s cubic-bezier(0.51, 0.09, 0.21, 0.8);\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n}\n.multiselect__loading-enter-active,\n.multiselect__loading-leave-active {\n    -webkit-transition: opacity 0.4s ease-in-out;\n    transition: opacity 0.4s ease-in-out;\n    opacity: 1;\n}\n.multiselect__loading-enter,\n.multiselect__loading-leave-active {\n    opacity: 0;\n}\n.multiselect,\n.multiselect__input,\n.multiselect__single {\n    font-family: inherit;\n    font-size: 14px;\n    -ms-touch-action: manipulation;\n        touch-action: manipulation;\n}\n.multiselect {\n    -webkit-box-sizing: content-box;\n            box-sizing: content-box;\n    display: block;\n    position: relative;\n    width: 100%;\n    min-height: 30px;\n    text-align: left;\n    color: #35495E;\n}\n.multiselect * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.multiselect:focus {\n    outline: none;\n}\n.multiselect--disabled {\n    pointer-events: none;\n    opacity: 0.6;\n}\n.multiselect--active {\n    z-index: 50;\n}\n.multiselect--active:not(.multiselect--above) .multiselect__current,\n.multiselect--active:not(.multiselect--above) .multiselect__input,\n.multiselect--active:not(.multiselect--above) .multiselect__tags {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.multiselect--active .multiselect__select {\n    -webkit-transform: rotateZ(180deg);\n            transform: rotateZ(180deg);\n}\n.multiselect--above.multiselect--active .multiselect__current,\n.multiselect--above.multiselect--active .multiselect__input,\n.multiselect--above.multiselect--active .multiselect__tags {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n.multiselect__input,\n.multiselect__single {\n    position: relative;\n    display: inline-block;\n    min-height: 20px;\n    line-height: 20px;\n    border: none;\n    border-radius: 5px;\n    background: #fff;\n    padding: 0 0 0 5px;\n    width: calc(100%);\n    -webkit-transition: border 0.1s ease;\n    transition: border 0.1s ease;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    vertical-align: top;\n}\n.multiselect__tag ~ .multiselect__input,\n.multiselect__tag ~ .multiselect__single {\n    width: auto;\n}\n.multiselect__input:hover,\n.multiselect__single:hover {\n    border-color: #cfcfcf;\n}\n.multiselect__input:focus,\n.multiselect__single:focus {\n    border-color: #a8a8a8;\n    outline: none;\n}\n.multiselect__single {\n    padding-left: 6px;\n    margin-bottom: 8px;\n}\n.multiselect__tags-wrap {\n    display: inline\n}\n.multiselect__tags {\n    min-height: 30px;\n    display: block;\n    padding: 3px 40px 0px 5px;\n    border-radius: 5px;\n    border: 1px solid #E8E8E8;\n    background: #fff;\n}\n.multiselect__tag {\n    position: relative;\n    display: inline-block;\n    padding: 4px 26px 4px 10px;\n    border-radius: 5px;\n    margin-right: 10px;\n    color: #fff;\n    line-height: 1;\n    background: #41B883;\n    margin-bottom: 5px;\n    white-space: nowrap;\n    overflow: hidden;\n    max-width: 100%;\n    text-overflow: ellipsis;\n}\n.multiselect__tag-icon {\n    cursor: pointer;\n    margin-left: 7px;\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    font-weight: 700;\n    font-style: initial;\n    width: 22px;\n    text-align: center;\n    line-height: 22px;\n    -webkit-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n    border-radius: 5px;\n}\n.multiselect__tag-icon:after {\n    content: \"\\FFFD\";\n    color: #266d4d;\n    font-size: 14px;\n}\n.multiselect__tag-icon:focus,\n.multiselect__tag-icon:hover {\n    background: #369a6e;\n}\n.multiselect__tag-icon:focus:after,\n.multiselect__tag-icon:hover:after {\n    color: white;\n}\n.multiselect__current {\n    line-height: 16px;\n    min-height: 30px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    display: block;\n    overflow: hidden;\n    padding: 8px 12px 0;\n    padding-right: 30px;\n    white-space: nowrap;\n    margin: 0;\n    text-decoration: none;\n    border-radius: 5px;\n    border: 1px solid #E8E8E8;\n    cursor: pointer;\n}\n.multiselect__select {\n    line-height: 5px;\n    display: block;\n    position: absolute;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 40px;\n    height: 38px;\n    right: -9px;\n    top: 1px;\n    padding: 4px 8px;\n    margin: 0;\n    text-decoration: none;\n    text-align: center;\n    cursor: pointer;\n    -webkit-transition: -webkit-transform 0.2s ease;\n    transition: -webkit-transform 0.2s ease;\n    transition: transform 0.2s ease;\n    transition: transform 0.2s ease, -webkit-transform 0.2s ease;\n}\n.multiselect__select:before {\n    position: relative;\n    right: 0;\n    top: 65%;\n    color: #999;\n    margin-top: 4px;\n    border-style: solid;\n    border-width: 5px 5px 0 5px;\n    border-color: #999999 transparent transparent transparent;\n    content: \"\";\n}\n.multiselect__placeholder {\n    color: #ADADAD;\n    display: inline-block;\n    margin-bottom: 10px;\n    padding-top: 2px;\n}\n.multiselect--active .multiselect__placeholder {\n    display: none;\n}\n.multiselect__content-wrapper {\n    position: absolute;\n    display: block;\n    background: #fff;\n    width: 100%;\n    max-height: 240px;\n    overflow: auto;\n    border: 1px solid #E8E8E8;\n    border-top: none;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    z-index: 50;\n    -webkit-overflow-scrolling: touch;\n}\n.multiselect__content {\n    list-style: none;\n    display: inline-block;\n    padding: 0;\n    margin: 0;\n    min-width: 100%;\n    vertical-align: top;\n}\n.multiselect--above .multiselect__content-wrapper {\n    bottom: 100%;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom: none;\n    border-top: 1px solid #E8E8E8;\n}\n.multiselect__content::webkit-scrollbar {\n    display: none;\n}\n.multiselect__element {\n    display: block;\n}\n.multiselect__option {\n    display: block;\n    padding: 12px;\n    min-height: 30px;\n    line-height: 16px;\n    text-decoration: none;\n    text-transform: none;\n    vertical-align: middle;\n    position: relative;\n    cursor: pointer;\n    white-space: nowrap;\n}\n.multiselect__option:after {\n    top: 0;\n    right: 0;\n    position: absolute;\n    line-height: 40px;\n    padding-right: 12px;\n    padding-left: 20px;\n}\n.multiselect__option--highlight {\n    background: #41B883;\n    outline: none;\n    color: white;\n}\n.select-all{\n    background: #fff;\n    outline: none;\n    color: #000;\n    font-weight: bold;\n    text-align: center;\n}\n.multiselect__option--highlight:after {\n    content: attr(data-select);\n    background: #41B883;\n    color: white;\n}\n.multiselect__option--selected {\n    background: #F3F3F3;\n    color: #35495E;\n    font-weight: bold;\n}\n.multiselect__option--selected:after {\n    content: attr(data-selected);\n    color: silver;\n}\n.multiselect__option--selected.multiselect__option--highlight {\n    background: #FF6A6A;\n    color: #fff;\n}\n.multiselect__option--selected.multiselect__option--highlight:after {\n    background: #FF6A6A;\n    content: attr(data-deselect);\n    color: #fff;\n}\n.multiselect--disabled {\n    background: #ededed;\n    pointer-events: none;\n}\n.multiselect--disabled .multiselect__current,\n.multiselect--disabled .multiselect__select {\n    background: #ededed;\n    color: #a6a6a6;\n}\n.multiselect__option--disabled {\n    background: #ededed;\n    color: #a6a6a6;\n    cursor: text;\n    pointer-events: none;\n}\n.multiselect__option--disabled.multiselect__option--highlight {\n    background: #dedede !important;\n}\n.multiselect-enter-active,\n.multiselect-leave-active {\n    -webkit-transition: all 0.15s ease;\n    transition: all 0.15s ease;\n}\n.multiselect-enter,\n.multiselect-leave-active {\n    opacity: 0;\n}\n.multiselect__strong {\n    margin-bottom: 8px;\n    line-height: 20px;\n    display: inline-block;\n    vertical-align: top;\n}\n*[dir=\"rtl\"] .multiselect {\n    text-align: right;\n}\n*[dir=\"rtl\"] .multiselect__select {\n    right: auto;\n    left: 1px;\n}\n*[dir=\"rtl\"] .multiselect__tags {\n    padding: 8px 8px 0px 40px;\n}\n*[dir=\"rtl\"] .multiselect__content {\n    text-align: right;\n}\n*[dir=\"rtl\"] .multiselect__option:after {\n    right: auto;\n    left: 0;\n}\n*[dir=\"rtl\"] .multiselect__clear {\n    right: auto;\n    left: 12px;\n}\n*[dir=\"rtl\"] .multiselect__spinner {\n    right: auto;\n    left: 1px;\n}\n@-webkit-keyframes spinning {\nfrom { -webkit-transform:rotate(0); transform:rotate(0)\n}\nto { -webkit-transform:rotate(2turn); transform:rotate(2turn)\n}\n}\n@keyframes spinning {\nfrom { -webkit-transform:rotate(0); transform:rotate(0)\n}\nto { -webkit-transform:rotate(2turn); transform:rotate(2turn)\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _multiselectMixin = __webpack_require__(587);

var _multiselectMixin2 = _interopRequireDefault(_multiselectMixin);

var _pointerMixin = __webpack_require__(589);

var _pointerMixin2 = _interopRequireDefault(_pointerMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'vue-multiselect',
    mixins: [_multiselectMixin2.default, _pointerMixin2.default],
    props: {

        /**
         * name attribute to match optional label element
         * @default ''
         * @type {String}
         */
        name: {
            type: String,
            default: ''
        },
        /**
         * String to show when pointing to an option
         * @default 'Press enter to select'
         * @type {String}
         */
        selectLabel: {
            type: String,
            default: 'Press enter to select'
        },
        /**
         * String to show next to selected option
         * @default 'Selected'
         * @type {String}
         */
        selectedLabel: {
            type: String,
            default: 'Selected'
        },
        /**
         * String to show when pointing to an alredy selected option
         * @default 'Press enter to remove'
         * @type {String}
         */
        deselectLabel: {
            type: String,
            default: 'Press enter to remove'
        },
        /**
         * Decide whether to show pointer labels
         * @default true
         * @type {Boolean}
         */
        showLabels: {
            type: Boolean,
            default: true
        },
        /**
         * Limit the display of selected options. The rest will be hidden within the limitText string.
         * @default 99999
         * @type {Integer}
         */
        limit: {
            type: Number,
            default: 99999
        },
        /**
         * Sets maxHeight style value of the dropdown
         * @default 300
         * @type {Integer}
         */
        maxHeight: {
            type: Number,
            default: 300
        },
        /**
         * Function that process the message shown when selected
         * elements pass the defined limit.
         * @default 'and * more'
         * @param {Int} count Number of elements more than limit
         * @type {Function}
         */
        limitText: {
            type: Function,
            default: function _default(count) {
                return 'and ' + count + ' more';
            }
        },
        /**
         * Set true to trigger the loading spinner.
         * @default False
         * @type {Boolean}
         */
        loading: {
            type: Boolean,
            default: false
        },
        /**
         * Disables the multiselect if true.
         * @default false
         * @type {Boolean}
         */
        disabled: {
            type: Boolean,
            default: false
        },
        /**
         * Fixed opening direction
         * @default ''
         * @type {String}
         */
        openDirection: {
            type: String,
            default: ''
        },
        showNoResults: {
            type: Boolean,
            default: true
        },
        tabindex: {
            type: Number,
            default: 0
        }
    },
    computed: {
        visibleValue: function visibleValue() {
            return this.multiple ? this.internalValue.slice(0, this.limit) : [];
        },
        deselectLabelText: function deselectLabelText() {
            return this.showLabels ? this.deselectLabel : '';
        },
        selectLabelText: function selectLabelText() {
            return this.showLabels ? this.selectLabel : '';
        },
        selectedLabelText: function selectedLabelText() {
            return this.showLabels ? this.selectedLabel : '';
        },
        inputStyle: function inputStyle() {
            if (this.multiple && this.value && this.value.length) {
                // Hide input by setting the width to 0 allowing it to receive focus
                return this.isOpen ? { 'width': 'auto' } : { 'width': '0', 'position': 'absolute' };
            }
        },
        contentStyle: function contentStyle() {
            return this.options.length ? { 'display': 'inline-block' } : { 'display': 'block' };
        },
        isAbove: function isAbove() {
            if (this.openDirection === 'above' || this.openDirection === 'top') {
                return true;
            } else if (this.openDirection === 'below' || this.openDirection === 'bottom') {
                return false;
            } else {
                return this.prefferedOpenDirection === 'above';
            }
        }
    },
    methods: {
        selectAll: function selectAll() {}
    }
};

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "multiselect",
      class: {
        "multiselect--active": _vm.isOpen,
        "multiselect--disabled": _vm.disabled,
        "multiselect--above": _vm.isAbove
      },
      attrs: { tabindex: _vm.searchable ? -1 : _vm.tabindex },
      on: {
        focus: function($event) {
          _vm.activate()
        },
        blur: function($event) {
          _vm.searchable ? false : _vm.deactivate()
        },
        keydown: [
          function($event) {
            if (
              !("button" in $event) &&
              _vm._k($event.keyCode, "down", 40, $event.key, [
                "Down",
                "ArrowDown"
              ])
            ) {
              return null
            }
            if ($event.target !== $event.currentTarget) {
              return null
            }
            $event.preventDefault()
            _vm.pointerForward()
          },
          function($event) {
            if (
              !("button" in $event) &&
              _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])
            ) {
              return null
            }
            if ($event.target !== $event.currentTarget) {
              return null
            }
            $event.preventDefault()
            _vm.pointerBackward()
          },
          function($event) {
            if (
              !("button" in $event) &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter") &&
              _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")
            ) {
              return null
            }
            $event.stopPropagation()
            if ($event.target !== $event.currentTarget) {
              return null
            }
            _vm.addPointerElement($event)
          }
        ],
        keyup: function($event) {
          if (
            !("button" in $event) &&
            _vm._k($event.keyCode, "esc", 27, $event.key, "Escape")
          ) {
            return null
          }
          _vm.deactivate()
        }
      }
    },
    [
      _vm._t(
        "caret",
        [
          _c("div", {
            staticClass: "multiselect__select",
            on: {
              mousedown: function($event) {
                $event.preventDefault()
                $event.stopPropagation()
                _vm.toggle()
              }
            }
          })
        ],
        { toggle: _vm.toggle }
      ),
      _vm._v(" "),
      _vm._t("clear", null, { search: _vm.search }),
      _vm._v(" "),
      _c(
        "div",
        { ref: "tags", staticClass: "multiselect__tags" },
        [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.visibleValue.length > 0,
                  expression: "visibleValue.length > 0"
                }
              ],
              staticClass: "multiselect__tags-wrap"
            },
            [
              _vm._l(_vm.visibleValue, function(option) {
                return [
                  _vm._t(
                    "tag",
                    [
                      _c("span", { staticClass: "multiselect__tag" }, [
                        _c("span", {
                          domProps: {
                            textContent: _vm._s(_vm.getOptionLabel(option))
                          }
                        }),
                        _vm._v(" "),
                        _c("i", {
                          staticClass: "multiselect__tag-icon",
                          attrs: { "aria-hidden": "true", tabindex: "1" },
                          on: {
                            keydown: function($event) {
                              if (
                                !("button" in $event) &&
                                _vm._k(
                                  $event.keyCode,
                                  "enter",
                                  13,
                                  $event.key,
                                  "Enter"
                                )
                              ) {
                                return null
                              }
                              $event.preventDefault()
                              _vm.removeElement(option)
                            },
                            mousedown: function($event) {
                              $event.preventDefault()
                              _vm.removeElement(option)
                            }
                          }
                        })
                      ])
                    ],
                    {
                      option: option,
                      search: _vm.search,
                      remove: _vm.removeElement
                    }
                  )
                ]
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.internalValue && _vm.internalValue.length > _vm.limit
            ? [
                _c("strong", {
                  staticClass: "multiselect__strong",
                  domProps: {
                    textContent: _vm._s(
                      _vm.limitText(_vm.internalValue.length - _vm.limit)
                    )
                  }
                })
              ]
            : _vm._e(),
          _vm._v(" "),
          _c(
            "transition",
            { attrs: { name: "multiselect__loading" } },
            [
              _vm._t("loading", [
                _c("div", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.loading,
                      expression: "loading"
                    }
                  ],
                  staticClass: "multiselect__spinner"
                })
              ])
            ],
            2
          ),
          _vm._v(" "),
          _vm.searchable
            ? _c("input", {
                ref: "search",
                staticClass: "multiselect__input",
                style: _vm.inputStyle,
                attrs: {
                  name: _vm.name,
                  id: _vm.id,
                  type: "text",
                  autocomplete: "off",
                  placeholder: _vm.placeholder,
                  disabled: _vm.disabled,
                  tabindex: _vm.tabindex
                },
                domProps: {
                  value: _vm.isOpen ? _vm.search : _vm.currentOptionLabel
                },
                on: {
                  input: function($event) {
                    _vm.updateSearch($event.target.value)
                  },
                  focus: function($event) {
                    $event.preventDefault()
                    _vm.activate()
                  },
                  blur: function($event) {
                    $event.preventDefault()
                    _vm.deactivate()
                  },
                  keyup: function($event) {
                    if (
                      !("button" in $event) &&
                      _vm._k($event.keyCode, "esc", 27, $event.key, "Escape")
                    ) {
                      return null
                    }
                    _vm.deactivate()
                  },
                  keydown: [
                    function($event) {
                      if (
                        !("button" in $event) &&
                        _vm._k($event.keyCode, "down", 40, $event.key, [
                          "Down",
                          "ArrowDown"
                        ])
                      ) {
                        return null
                      }
                      $event.preventDefault()
                      _vm.pointerForward()
                    },
                    function($event) {
                      if (
                        !("button" in $event) &&
                        _vm._k($event.keyCode, "up", 38, $event.key, [
                          "Up",
                          "ArrowUp"
                        ])
                      ) {
                        return null
                      }
                      $event.preventDefault()
                      _vm.pointerBackward()
                    },
                    function($event) {
                      if (
                        !("button" in $event) &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      $event.preventDefault()
                      $event.stopPropagation()
                      if ($event.target !== $event.currentTarget) {
                        return null
                      }
                      _vm.addPointerElement($event)
                    },
                    function($event) {
                      if (
                        !("button" in $event) &&
                        _vm._k($event.keyCode, "delete", [8, 46], $event.key, [
                          "Backspace",
                          "Delete"
                        ])
                      ) {
                        return null
                      }
                      $event.stopPropagation()
                      _vm.removeLastElement()
                    }
                  ]
                }
              })
            : _vm._e(),
          _vm._v(" "),
          !_vm.searchable
            ? _c("span", {
                staticClass: "multiselect__single",
                domProps: { textContent: _vm._s(_vm.currentOptionLabel) },
                on: {
                  mousedown: function($event) {
                    $event.preventDefault()
                    return _vm.toggle($event)
                  }
                }
              })
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "multiselect" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isOpen,
                expression: "isOpen"
              }
            ],
            ref: "list",
            staticClass: "multiselect__content-wrapper",
            style: { maxHeight: _vm.optimizedHeight + "px" },
            on: {
              focus: _vm.activate,
              mousedown: function($event) {
                $event.preventDefault()
              }
            }
          },
          [
            _c(
              "ul",
              { staticClass: "multiselect__content", style: _vm.contentStyle },
              [
                _c("li", { staticClass: "multiselect__element" }, [
                  _vm.selectAllFlag
                    ? _c(
                        "span",
                        {
                          staticClass: "multiselect__option select-all",
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              _vm.select(null)
                            }
                          }
                        },
                        [_vm._v("\n                  Select All")]
                      )
                    : _c(
                        "span",
                        {
                          staticClass: "multiselect__option select-all",
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              _vm.select("deselect")
                            }
                          }
                        },
                        [_vm._v("\n                  Deselect All")]
                      )
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _vm._t("beforeList"),
                _vm._v(" "),
                _vm.multiple && _vm.max === _vm.internalValue.length
                  ? _c("li", [
                      _c(
                        "span",
                        { staticClass: "multiselect__option" },
                        [
                          _vm._t("maxElements", [
                            _vm._v(
                              "Maximum of " +
                                _vm._s(_vm.max) +
                                " options selected. First remove a selected option to select another."
                            )
                          ])
                        ],
                        2
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.max || _vm.internalValue.length < _vm.max
                  ? _vm._l(_vm.filteredOptions, function(option, index) {
                      return _c(
                        "li",
                        { key: index, staticClass: "multiselect__element" },
                        [
                          !(option && (option.$isLabel || option.$isDisabled))
                            ? _c(
                                "span",
                                {
                                  staticClass: "multiselect__option",
                                  class: _vm.optionHighlight(index, option),
                                  attrs: {
                                    "data-select":
                                      option && option.isTag
                                        ? _vm.tagPlaceholder
                                        : _vm.selectLabelText,
                                    "data-selected": _vm.selectedLabelText,
                                    "data-deselect": _vm.deselectLabelText
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      _vm.select(option)
                                    },
                                    mouseenter: function($event) {
                                      if (
                                        $event.target !== $event.currentTarget
                                      ) {
                                        return null
                                      }
                                      _vm.pointerSet(index)
                                    }
                                  }
                                },
                                [
                                  _vm._t(
                                    "option",
                                    [
                                      _c("span", [
                                        _vm._v(
                                          _vm._s(_vm.getOptionLabel(option))
                                        )
                                      ])
                                    ],
                                    { option: option, search: _vm.search }
                                  )
                                ],
                                2
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          option && (option.$isLabel || option.$isDisabled)
                            ? _c(
                                "span",
                                {
                                  staticClass:
                                    "multiselect__option multiselect__option--disabled",
                                  class: _vm.optionHighlight(index, option)
                                },
                                [
                                  _vm._t(
                                    "option",
                                    [
                                      _c("span", [
                                        _vm._v(
                                          _vm._s(_vm.getOptionLabel(option))
                                        )
                                      ])
                                    ],
                                    { option: option, search: _vm.search }
                                  )
                                ],
                                2
                              )
                            : _vm._e()
                        ]
                      )
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          _vm.showNoResults &&
                          (_vm.filteredOptions.length === 0 &&
                            _vm.search &&
                            !_vm.loading),
                        expression:
                          "showNoResults && (filteredOptions.length === 0 && search && !loading)"
                      }
                    ]
                  },
                  [
                    _c(
                      "span",
                      { staticClass: "multiselect__option" },
                      [
                        _vm._t("noResult", [
                          _vm._v(
                            "No elements found. Consider changing the search query."
                          )
                        ])
                      ],
                      2
                    )
                  ]
                ),
                _vm._v(" "),
                _vm._t("afterList")
              ],
              2
            )
          ]
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1e74c9b1", module.exports)
  }
}

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//    import Multiselect from 'vue-multiselect'


var _vuex = __webpack_require__(224);

var _vueMultiselect = __webpack_require__(591);

var _vueMultiselect2 = _interopRequireDefault(_vueMultiselect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        'tree': function tree() {
            return __webpack_require__.e/* import() */(16/* duplicate */).then(__webpack_require__.bind(null, 590));
        },
        'insert-button-group': function insertButtonGroup() {
            return __webpack_require__.e/* import() */(15/* duplicate */).then(__webpack_require__.bind(null, 586));
        },
        Multiselect: _vueMultiselect2.default
    },
    computed: _extends({}, (0, _vuex.mapState)({
        roles: function roles(state) {
            return state.login.roles;
        },
        authenticated: function authenticated(state) {
            return state.login.authenticated;
        }
    })),
    data: function data() {
        return {
            selected: null,
            options: [{ name: 'Vue.js', language: 'JavaScript' }, { name: 'Rails', language: 'Ruby' }, { name: 'Laravel', language: 'PHP' }, { name: 'Phoenix', language: 'Elixir' }]
        };
    },
    methods: {
        selectedValue: function selectedValue() {
            /*alert('zakaria');*/
        },
        userSubmit: function userSubmit() {
            console.log(this.selected);
        },
        selectAll: function selectAll(selectedOptions) {
            this.selected = selectedOptions;
        }

    }
};

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", { staticClass: "main" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", { staticClass: "card three-column" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm._v(
              "\n                    Three Column " +
                _vm._s(_vm.authenticated) +
                "\n                    "
            ),
            _c("small", [_vm._v("(3 column form)")])
          ]),
          _vm._v(" "),
          _c(
            "form",
            {
              staticClass: "form-group",
              attrs: { action: "", method: "post" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.userSubmit($event)
                }
              }
            },
            [
              _c("div", { staticClass: "card-body" }, [
                _vm._m(0),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "form-row" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-3" },
                    [
                      _c("multiselect", {
                        attrs: {
                          options: _vm.options,
                          multiple: true,
                          "close-on-select": false,
                          limit: 2,
                          placeholder: "Select Unit",
                          "track-by": "name",
                          label: "name"
                        },
                        on: {
                          close: _vm.selectedValue,
                          selectAll: _vm.selectAll
                        },
                        model: {
                          value: _vm.selected,
                          callback: function($$v) {
                            _vm.selected = $$v
                          },
                          expression: "selected"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._m(3),
                  _vm._v(" "),
                  _vm._m(4),
                  _vm._v(" "),
                  _vm._m(5),
                  _vm._v(" "),
                  _vm._m(6)
                ]),
                _vm._v(" "),
                _vm._m(7),
                _vm._v(" "),
                _vm._m(8),
                _vm._v(" "),
                _vm._m(9),
                _vm._v(" "),
                _vm._m(10)
              ]),
              _vm._v(" "),
              _c("insert-button-group")
            ],
            1
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
    return _c("div", { staticClass: "form-row" }, [
      _c("div", { staticClass: "col-1" }, [
        _c("label", { staticClass: "control-label required" }, [
          _vm._v("User text id:")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        _c("input", {
          staticClass: "form-control form-control-sm tax-box",
          attrs: { type: "text" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-1" }, [
        _c("label", { staticClass: "control-label" }, [_vm._v("User name :")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        _c("input", {
          staticClass: "form-control form-control-sm tax-box",
          attrs: { type: "text" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-1" }, [
        _c("label", { staticClass: "control-label" }, [_vm._v("Email:")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        _c("input", {
          staticClass: "form-control form-control-sm tax-box",
          attrs: { type: "text" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-row" }, [
      _c("div", { staticClass: "col-1" }, [
        _c("label", { staticClass: "control-label required" }, [
          _vm._v("Designation:")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        _c("select", { staticClass: "form-control form-control-sm tax-box" }, [
          _c("option", { attrs: { value: "", disabled: "" } }, [
            _vm._v("Select Designation")
          ]),
          _vm._v(" "),
          _c("option", { attrs: { value: "1" } }, [_vm._v("Admin")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "2" } }, [_vm._v("Developer")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-1" }, [
        _c("label", { staticClass: "control-label" }, [_vm._v("Department:")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        _c("select", { staticClass: "form-control form-control-sm tax-box" }, [
          _c("option", { attrs: { value: "", disabled: "" } }, [
            _vm._v("Select Department")
          ]),
          _vm._v(" "),
          _c("option", { attrs: { value: "1" } }, [_vm._v("Development")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "2" } }, [_vm._v("Implement")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "3" } }, [_vm._v("Mkt")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-1" }, [
        _c("label", { staticClass: "control-label" }, [_vm._v("User level:")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        _c("select", { staticClass: "form-control form-control-sm tax-box" }, [
          _c("option", { attrs: { value: "", disabled: "" } }, [
            _vm._v("Select User level")
          ]),
          _vm._v(" "),
          _c("option", { attrs: { value: "1" } }, [_vm._v("Admin")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "2" } }, [_vm._v("Developer")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "3" } }, [_vm._v("User")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-1" }, [
      _c("label", { staticClass: "control-label required" }, [
        _vm._v("Company:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-1" }, [
      _c("label", { staticClass: "required" }, [_vm._v("Location:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3" }, [
      _c("select", { staticClass: "form-control form-control-sm tax-box" }, [
        _c("option", { attrs: { value: "", disabled: "" } }, [
          _vm._v("Select Department")
        ]),
        _vm._v(" "),
        _c("option", { attrs: { value: "1" } }, [_vm._v("Development")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "2" } }, [_vm._v("Implement")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "3" } }, [_vm._v("Mkt")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-1" }, [
      _c("label", { staticClass: "control-label" }, [_vm._v("Buyer:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3" }, [
      _c("input", {
        staticClass: "form-control form-control-sm tax-box",
        attrs: { type: "text", placeholder: "Click for buyer" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-row" }, [
      _c("div", { staticClass: "col-1" }, [
        _c("label", { staticClass: "required" }, [_vm._v("Store:")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        _c("select", { staticClass: "form-control form-control-sm tax-box" }, [
          _c("option", { attrs: { value: "", disabled: "" } }, [
            _vm._v("Select Store")
          ]),
          _vm._v(" "),
          _c("option", { attrs: { value: "1" } }, [_vm._v("Dhaka shop")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "2" } }, [_vm._v("Bd Shop")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-1" }, [
        _c("label", { staticClass: "control-label" }, [_vm._v("Supplier:")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        _c("input", {
          staticClass: "form-control form-control-sm tax-box",
          attrs: { type: "text", placeholder: "Click for supplier" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-1" }, [
        _c("label", { staticClass: "control-label" }, [
          _vm._v("Item Category:")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        _c("select", { staticClass: "form-control form-control-sm tax-box" }, [
          _c("option", { attrs: { value: "", disabled: "" } }, [
            _vm._v("Select category")
          ]),
          _vm._v(" "),
          _c("option", { attrs: { value: "1" } }, [_vm._v("chiller")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "2" } }, [_vm._v("comber")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "3" } }, [_vm._v("cotton")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-row" }, [
      _c("div", { staticClass: "col-1" }, [
        _c("label", { staticClass: "required" }, [_vm._v("Home graph:")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        _c("select", { staticClass: "form-control form-control-sm tax-box" }, [
          _c("option", { attrs: { value: "", disabled: "" } }, [
            _vm._v("Select graph")
          ]),
          _vm._v(" "),
          _c("option", { attrs: { value: "1" } }, [_vm._v("dash board")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "2" } }, [_vm._v("Graph grp")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-1" }, [
        _c("label", { staticClass: "control-label" }, [_vm._v("Baind to ip:")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        _c("input", {
          staticClass: "form-control form-control-sm tax-box",
          attrs: { type: "text", placeholder: "Comma Seperate LAN and WAN IP" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-1" }, [
        _c("label", { staticClass: "control-label" }, [
          _vm._v("Data Level Security:")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        _c("select", { staticClass: "form-control form-control-sm tax-box" }, [
          _c("option", { attrs: { value: "1", selected: "" } }, [
            _vm._v("Limited Access")
          ]),
          _vm._v(" "),
          _c("option", { attrs: { value: "2" } }, [_vm._v("Access All Data")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-row" }, [
      _c("div", { staticClass: "col-1" }, [
        _c("label", { staticClass: "required" }, [_vm._v("Password:")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        _c("input", {
          staticClass: "form-control form-control-sm tax-box",
          attrs: { type: "password" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-1" }, [
        _c("label", { staticClass: "required" }, [_vm._v("Confirm password:")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        _c("input", {
          staticClass: "form-control form-control-sm tax-box",
          attrs: { type: "password" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-1" }, [
        _c("label", { staticClass: "control-label" }, [_vm._v("Expiry Date:")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        _c("input", {
          staticClass: "form-control form-control-sm tax-box",
          attrs: { type: "date" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-row" }, [
      _c("div", { staticClass: "col-1" }, [
        _c("label", { staticClass: "required" }, [_vm._v("Status:")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        _c("select", { staticClass: "form-control form-control-sm tax-box" }, [
          _c("option", { attrs: { value: "1", selected: "" } }, [
            _vm._v("Status")
          ]),
          _vm._v(" "),
          _c("option", { attrs: { value: "2" } }, [_vm._v("In active")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-1" }, [
        _c("label", { staticClass: "required" }, [_vm._v("User Image:")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        _c("label", { staticClass: "upload-btn" }, [_vm._v("Choose a file")]),
        _vm._v(" "),
        _c("input", { staticClass: "input-file", attrs: { type: "file" } })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e9a345e6", module.exports)
  }
}

/***/ })

});