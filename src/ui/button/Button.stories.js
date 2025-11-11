import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { Button } from './Button';
var meta = {
	component: Button,
};
export default meta;
export var ButtonStory = {
	render: function () {
		return _jsxs('div', {
			style: { display: 'flex', gap: '10px' },
			children: [
				_jsx(Button, {
					title: '\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C',
					htmlType: 'submit',
					type: 'apply',
					onClick: function () {
						return alert('клик на кнопку применить');
					},
				}),
				_jsx(Button, {
					title: '\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C',
					htmlType: 'reset',
					type: 'clear',
					onClick: function () {
						return alert('клик на кнопку сбросить');
					},
				}),
			],
		});
	},
};
//# sourceMappingURL=Button.stories.js.map
