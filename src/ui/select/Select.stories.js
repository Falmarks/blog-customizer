import { jsx as _jsx, Fragment as _Fragment } from 'react/jsx-runtime';
import { Select } from './Select';
import { useState } from 'react';
var meta = {
	component: Select,
};
export default meta;
var SelectWithState = function () {
	var options = [
		{ title: '1 опция', value: '1 опция', className: '' },
		{ title: '2 опция', value: '2 опция', className: '' },
		{ title: '3 опция', value: '3 опция', className: '' },
		{ title: '4 опция', value: '4 опция', className: '' },
	];
	var _a = useState(options[0]),
		selected = _a[0],
		setSelected = _a[1];
	return _jsx(_Fragment, {
		children: _jsx(Select, {
			selected: selected,
			onChange: setSelected,
			options: options,
			title:
				'\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0432\u044B\u043F\u0430\u0434\u0430\u044E\u0449\u0435\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430',
		}),
	});
};
export var SelectStory = {
	render: function () {
		return _jsx(SelectWithState, {});
	},
};
//# sourceMappingURL=Select.stories.js.map
