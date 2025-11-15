import { jsx as _jsx } from 'react/jsx-runtime';
import { clsx } from 'clsx';
import styles from './index.module.scss';
export var Text = function (_a) {
	var _b, _c, _d;
	var children = _a.children,
		_e = _a.as,
		Tag = _e === void 0 ? 'div' : _e,
		_f = _a.size,
		size = _f === void 0 ? 18 : _f,
		_g = _a.dynamic,
		dynamic = _g === void 0 ? false : _g,
		_h = _a.weight,
		weight = _h === void 0 ? 400 : _h,
		_j = _a.fontStyle,
		fontStyle = _j === void 0 ? 'normal' : _j,
		_k = _a.uppercase,
		uppercase = _k === void 0 ? false : _k,
		_l = _a.align,
		align = _l === void 0 ? 'left' : _l,
		_m = _a.family,
		family = _m === void 0 ? 'open-sans' : _m,
		_o = _a.dynamicLite,
		dynamicLite = _o === void 0 ? false : _o;
	var className = clsx(
		styles.text,
		styles['size'.concat(size)],
		((_b = {}), (_b[styles.dynamic] = dynamic), _b),
		styles['weight'.concat(weight)],
		styles[''.concat(fontStyle)],
		((_c = {}), (_c[styles.uppercase] = uppercase), _c),
		styles[''.concat(align)],
		styles[''.concat(family)],
		((_d = {}), (_d[styles.dynamicLite] = dynamicLite), _d)
	);
	return _jsx(Tag, { className: className, children: children });
};
//# sourceMappingURL=Text.js.map
