"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "h2",
                    null,
                    this.props.subTitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component2) {
    _inherits(Action, _React$Component2);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    {
                        disabled: !this.props.hasOptions,
                        onClick: this.props.onButtonClickPick
                    },
                    "What Should I do?"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h2",
                    null,
                    "Options"
                ),
                this.props.options.map(function (option, index) {
                    return React.createElement(Option, { key: index, taskName: option });
                }),
                React.createElement(
                    "button",
                    { onClick: this.props.onButtonClickDelete },
                    "Remove All"
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component4) {
    _inherits(Option, _React$Component4);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.props.taskName
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOption = function (_React$Component5) {
    _inherits(AddOption, _React$Component5);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this5 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this5.onFormSubmit = _this5.onFormSubmit.bind(_this5);
        _this5.state = { error: undefined };
        return _this5;
    }

    _createClass(AddOption, [{
        key: "onFormSubmit",
        value: function onFormSubmit(e) {
            e.preventDefault();
            var value = e.target.elements.task.value.trim();
            var error = this.props.onFormSubmitAddOption(value);
            e.target.elements.task.value = '';
            this.setState({ error: error });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h3",
                    null,
                    "Add Options"
                ),
                this.state.error && React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.onFormSubmit },
                    React.createElement("input", { type: "text", placeholder: "Add some task", name: "task" }),
                    React.createElement(
                        "button",
                        { type: "submit" },
                        "Add Task"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var NoteApp = function (_React$Component6) {
    _inherits(NoteApp, _React$Component6);

    function NoteApp(props) {
        _classCallCheck(this, NoteApp);

        var _this6 = _possibleConstructorReturn(this, (NoteApp.__proto__ || Object.getPrototypeOf(NoteApp)).call(this, props));

        _this6.onButtonClickDelete = _this6.onButtonClickDelete.bind(_this6);
        _this6.onButtonClickPick = _this6.onButtonClickPick.bind(_this6);
        _this6.onFormSubmitAddOption = _this6.onFormSubmitAddOption.bind(_this6);
        _this6.state = { options: [] };
        return _this6;
    }

    _createClass(NoteApp, [{
        key: "onButtonClickDelete",
        value: function onButtonClickDelete() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "onButtonClickPick",
        value: function onButtonClickPick() {
            var random = Math.floor(Math.random() * this.state.options.length);
            console.log(this.state.options[random]);
        }
    }, {
        key: "onFormSubmitAddOption",
        value: function onFormSubmitAddOption(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This task already exists';
            }
            this.setState({ options: this.state.options.concat(option) });
        }
    }, {
        key: "render",
        value: function render() {
            var title = "Welcome to Note App";
            var subTitle = "Easier Way to Manage your life";
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subTitle: subTitle }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0, onButtonClickPick: this.onButtonClickPick }),
                React.createElement(Options, { options: this.state.options, onButtonClickDelete: this.onButtonClickDelete }),
                React.createElement(AddOption, { onFormSubmitAddOption: this.onFormSubmitAddOption })
            );
        }
    }]);

    return NoteApp;
}(React.Component);

ReactDOM.render(React.createElement(NoteApp, null), document.querySelector('#app'));
