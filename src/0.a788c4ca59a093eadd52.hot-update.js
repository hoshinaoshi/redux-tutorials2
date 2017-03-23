webpackHotUpdate(0,{

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(46);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(44);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(17);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(45);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TodoTextInput = __webpack_require__(103);

var _TodoTextInput2 = _interopRequireDefault(_TodoTextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  TodoItem: {
    displayName: 'TodoItem'
  }
};

var _UsersNaoshihoshiReduxTutorials2Node_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/naoshihoshi/redux-tutorials2/src/js/components/TodoItem.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersNaoshihoshiReduxTutorials2Node_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/naoshihoshi/redux-tutorials2/src/js/components/TodoItem.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersNaoshihoshiReduxTutorials2Node_modulesReactTransformHmrLibIndexJs2(_UsersNaoshihoshiReduxTutorials2Node_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var TodoItem = _wrapComponent('TodoItem')(function (_Component) {
  _inherits(TodoItem, _Component);

  function TodoItem() {
    _classCallCheck(this, TodoItem);

    return _possibleConstructorReturn(this, (TodoItem.__proto__ || Object.getPrototypeOf(TodoItem)).apply(this, arguments));
  }

  _createClass(TodoItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          todo = _props.todo,
          deleteTodo = _props.deleteTodo;

      return _react3.default.createElement(
        'li',
        null,
        _react3.default.createElement(
          'div',
          { className: 'view' },
          _react3.default.createElement(
            'label',
            null,
            todo.text
          ),
          _react3.default.createElement('button', { className: 'destroy' })
        )
      );
    }
  }]);

  return TodoItem;
}(_react2.Component));

exports.default = TodoItem;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL1RvZG9JdGVtLmpzP2FmOWQiXSwibmFtZXMiOlsicHJvcHMiLCJ0b2RvIiwiZGVsZXRlVG9kbyIsInRleHQiLCJUb2RvSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBR1c7QUFBQSxtQkFDc0IsS0FBS0EsS0FEM0I7QUFBQSxVQUNDQyxJQURELFVBQ0NBLElBREQ7QUFBQSxVQUNPQyxVQURQLFVBQ09BLFVBRFA7O0FBRVAsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLE1BQWY7QUFDRTtBQUFBO0FBQUE7QUFDR0QsaUJBQUtFO0FBRFIsV0FERjtBQUlFLG9EQUFRLFdBQVUsU0FBbEI7QUFKRjtBQURGLE9BREY7QUFVRDs7Ozs7O2tCQUVZQyxRIiwiZmlsZSI6IjAuYTc4OGM0Y2E1OWEwOTNlYWRkNTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVG9kb1RleHRJbnB1dCBmcm9tICcuL1RvZG9UZXh0SW5wdXQnO1xuXG5jbGFzcyBUb2RvSXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRvZG8sIGRlbGV0ZVRvZG8gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3XCI+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAge3RvZG8udGV4dH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGVzdHJveVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBUb2RvSXRlbTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NvbXBvbmVudHMvVG9kb0l0ZW0uanMiXSwic291cmNlUm9vdCI6IiJ9