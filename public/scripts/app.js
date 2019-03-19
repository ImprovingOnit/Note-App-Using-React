'use strict';

console.log('Hello App');

var Template = React.createElement(
  'p',
  null,
  'This is JSX'
);

ReactDOM.render(React.createElement(Template, null), document.querySelector('#app'));
