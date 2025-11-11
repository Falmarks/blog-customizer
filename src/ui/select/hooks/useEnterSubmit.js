import { useEffect } from 'react';
export var useEnterSubmit = function (_a) {
	var placeholderRef = _a.placeholderRef,
		onChange = _a.onChange;
	useEffect(function () {
		var placeholderEl = placeholderRef.current;
		if (!placeholderEl) return;
		var handleEnterKeyDown = function (event) {
			if (event.key === 'Enter') {
				onChange(function (isOpen) {
					return !isOpen;
				});
			}
		};
		placeholderEl.addEventListener('keydown', handleEnterKeyDown);
		return function () {
			placeholderEl.removeEventListener('keydown', handleEnterKeyDown);
		};
	}, []);
};
//# sourceMappingURL=useEnterSubmit.js.map
