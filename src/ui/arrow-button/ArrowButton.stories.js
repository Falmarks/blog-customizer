import { jsx as _jsx } from 'react/jsx-runtime';
import { ArrowButton } from './ArrowButton';
import { createElement, useState } from 'react';
var meta = {
	component: ArrowButton,
};
export default meta;
export var ArrowButtonStory = {
	render: function () {
		return createElement(function () {
			var _a = useState(false),
				isOpen = _a[0],
				setIsOpen = _a[1];
			return _jsx(ArrowButton, {
				isOpen: isOpen,
				onClick: function () {
					return setIsOpen(!isOpen);
				},
			});
		});
	},
};
//# sourceMappingURL=ArrowButton.stories.js.map
