import { useEffect } from 'react';
export var useEnterOptionSubmit = function (_a) {
	var onClick = _a.onClick,
		value = _a.value,
		optionRef = _a.optionRef;
	useEffect(
		function () {
			var option = optionRef.current;
			if (!option) return;
			var handleEnterKeyDown = function (event) {
				if (document.activeElement === option && event.key === 'Enter') {
					onClick(value);
				}
			};
			option.addEventListener('keydown', handleEnterKeyDown);
			return function () {
				option.removeEventListener('keydown', handleEnterKeyDown);
			};
		},
		[value, onClick, optionRef]
	);
};
//# sourceMappingURL=useEnterOptionSubmit.js.map
