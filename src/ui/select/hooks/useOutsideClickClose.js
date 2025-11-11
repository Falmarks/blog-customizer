import { useEffect } from 'react';
export var useOutsideClickClose = function (_a) {
	var isOpen = _a.isOpen,
		rootRef = _a.rootRef,
		onClose = _a.onClose,
		onChange = _a.onChange;
	useEffect(
		function () {
			var handleClick = function (event) {
				var _a;
				var target = event.target;
				if (
					target instanceof Node &&
					!((_a = rootRef.current) === null || _a === void 0
						? void 0
						: _a.contains(target))
				) {
					isOpen &&
						(onClose === null || onClose === void 0 ? void 0 : onClose());
					onChange === null || onChange === void 0 ? void 0 : onChange(false);
				}
			};
			window.addEventListener('mousedown', handleClick);
			return function () {
				window.removeEventListener('mousedown', handleClick);
			};
		},
		[onClose, onChange, isOpen]
	);
};
//# sourceMappingURL=useOutsideClickClose.js.map
