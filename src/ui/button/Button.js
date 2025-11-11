import { jsx as _jsx } from 'react/jsx-runtime';
import { Text } from 'src/ui/text';
import styles from './Button.module.scss';
import { clsx } from 'clsx';
export var Button = function (_a) {
	var _b, _c;
	var title = _a.title,
		onClick = _a.onClick,
		htmlType = _a.htmlType,
		type = _a.type;
	return _jsx('button', {
		className: clsx(
			styles.button,
			((_b = {}), (_b[styles.button_apply] = type === 'apply'), _b),
			((_c = {}), (_c[styles.button_clear] = type === 'clear'), _c)
		),
		type: htmlType,
		onClick: onClick,
		children: _jsx(Text, { weight: 800, uppercase: true, children: title }),
	});
};
//# sourceMappingURL=Button.js.map
