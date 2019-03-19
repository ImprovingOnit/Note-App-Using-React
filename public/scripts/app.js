'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subTitle && React.createElement(
            'h2',
            null,
            props.subTitle
        )
    );
};

Header.defaultProps = {
    title: 'Note-App Defualt'
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                disabled: !props.hasOptions,
                onClick: props.onButtonClickPick
            },
            'What Should I do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h2',
            null,
            'Options'
        ),
        props.options.length === 0 ? React.createElement(
            'p',
            null,
            'Please insert task'
        ) : null,
        props.options.map(function (option, index) {
            return React.createElement(Option, { key: index, option: option, onButtonClickDeleteTask: props.onButtonClickDeleteTask });
        }),
        React.createElement(
            'button',
            { onClick: props.onButtonClickDeleteAll },
            'Remove All'
        )
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.option,
        React.createElement(
            'button',
            { onClick: function onClick() {
                    return props.onButtonClickDeleteTask(props.option);
                } },
            'Remove'
        )
    );
};

var AddOption = function (_React$Component) {
    _inherits(AddOption, _React$Component);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this.onFormSubmit = _this.onFormSubmit.bind(_this);
        _this.state = { error: undefined };
        return _this;
    }

    _createClass(AddOption, [{
        key: 'onFormSubmit',
        value: function onFormSubmit(e) {
            e.preventDefault();
            var value = e.target.elements.task.value.trim();
            var error = this.props.onFormSubmitAddOption(value);
            e.target.elements.task.value = '';
            this.setState({ error: error });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h3',
                    null,
                    'Add Options'
                ),
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.onFormSubmit },
                    React.createElement('input', { type: 'text', placeholder: 'Add some task', name: 'task' }),
                    React.createElement(
                        'button',
                        { type: 'submit' },
                        'Add Task'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var NoteApp = function (_React$Component2) {
    _inherits(NoteApp, _React$Component2);

    function NoteApp(props) {
        _classCallCheck(this, NoteApp);

        var _this2 = _possibleConstructorReturn(this, (NoteApp.__proto__ || Object.getPrototypeOf(NoteApp)).call(this, props));

        _this2.onButtonClickDeleteAll = _this2.onButtonClickDeleteAll.bind(_this2);
        _this2.onButtonClickPick = _this2.onButtonClickPick.bind(_this2);
        _this2.onFormSubmitAddOption = _this2.onFormSubmitAddOption.bind(_this2);
        _this2.onButtonClickDeleteTask = _this2.onButtonClickDeleteTask.bind(_this2);
        _this2.state = { options: [] };
        return _this2;
    }

    _createClass(NoteApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var json = localStorage.getItem('options');
            var options = JSON.parse(json);

            if (options) {
                this.setState({ options: options });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length < this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'onButtonClickDeleteAll',
        value: function onButtonClickDeleteAll() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'onButtonClickDeleteTask',
        value: function onButtonClickDeleteTask(option) {
            this.setState(function (prevState) {
                return { options: prevState.options.filter(function (opt) {
                        return opt !== option;
                    }) };
            });
        }
    }, {
        key: 'onButtonClickPick',
        value: function onButtonClickPick() {
            var random = Math.floor(Math.random() * this.state.options.length);
            console.log(this.state.options[random]);
        }
    }, {
        key: 'onFormSubmitAddOption',
        value: function onFormSubmitAddOption(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This task already exists';
            }
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = "Welcome to Note App";
            var subTitle = "Easier Way to Manage your life";
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subTitle: subTitle }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0, onButtonClickPick: this.onButtonClickPick }),
                React.createElement(Options, { options: this.state.options,
                    onButtonClickDeleteAll: this.onButtonClickDeleteAll,
                    onButtonClickDeleteTask: this.onButtonClickDeleteTask
                }),
                React.createElement(AddOption, { onFormSubmitAddOption: this.onFormSubmitAddOption })
            );
        }
    }]);

    return NoteApp;
}(React.Component);

ReactDOM.render(React.createElement(NoteApp, null), document.querySelector('#app'));
