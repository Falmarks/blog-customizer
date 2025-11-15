import { useEffect, useRef } from 'react';
export var useEnterSubmit = function (_a) {
	var onChange = _a.onChange,
		option = _a.option;
	var optionRef = useRef(null);
	useEffect(
		function () {
			var optionHtml = optionRef.current;
			if (!optionHtml) return;
			var handleEnterKeyDown = function (event) {
				if (document.activeElement === optionHtml && event.key === 'Enter') {
					onChange === null || onChange === void 0 ? void 0 : onChange(option);
				}
			};
			optionHtml.addEventListener('keydown', handleEnterKeyDown);
			return function () {
				optionHtml.removeEventListener('keydown', handleEnterKeyDown);
			};
		},
		[onChange, option]
	);
	return optionRef;
};
//# sourceMappingURL=useEnterSubmit.js.map
