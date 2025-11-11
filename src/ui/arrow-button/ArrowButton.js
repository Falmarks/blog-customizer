import { jsx as _jsx } from 'react/jsx-runtime';
import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';
import clsx from 'clsx';
export var ArrowButton = function (_a) {
	var _b, _c;
	var isOpen = _a.isOpen,
		onClick = _a.onClick;
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		_jsx('div', {
			role: 'button',
			'aria-label':
				'\u041E\u0442\u043A\u0440\u044B\u0442\u044C/\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0444\u043E\u0440\u043C\u0443 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u0441\u0442\u0430\u0442\u044C\u0438',
			tabIndex: 0,
			className: clsx(
				styles.container,
				((_b = {}), (_b[styles.container_open] = isOpen), _b)
			),
			onClick: onClick,
			children: _jsx('img', {
				src: arrow,
				alt: '\u0438\u043A\u043E\u043D\u043A\u0430 \u0441\u0442\u0440\u0435\u043B\u043E\u0447\u043A\u0438',
				className: clsx(
					styles.arrow,
					((_c = {}), (_c[styles.arrow_open] = isOpen), _c)
				),
			}),
		})
	);
};
//# sourceMappingURL=ArrowButton.js.map
