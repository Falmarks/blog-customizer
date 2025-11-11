var __assign =
	(this && this.__assign) ||
	function () {
		__assign =
			Object.assign ||
			function (t) {
				for (var s, i = 1, n = arguments.length; i < n; i++) {
					s = arguments[i];
					for (var p in s)
						if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
				}
				return t;
			};
		return __assign.apply(this, arguments);
	};
import {
	jsx as _jsx,
	jsxs as _jsxs,
	Fragment as _Fragment,
} from 'react/jsx-runtime';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Select } from 'src/ui/select';
import { Separator } from 'src/ui/separator';
import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
} from 'src/constants/articleProps';
import styles from './ArticleParamsForm.module.scss';
export var ArticleParamsForm = function (_a) {
	var articleState = _a.articleState,
		setArticleState = _a.setArticleState,
		isOpen = _a.isOpen,
		onToggle = _a.onToggle;
	var handleReset = function () {
		setArticleState(defaultArticleState);
	};
	var handleSubmit = function (e) {
		e.preventDefault();
		onToggle();
	};
	return _jsxs(_Fragment, {
		children: [
			_jsx(ArrowButton, { isOpen: isOpen, onClick: onToggle }),
			_jsx('aside', {
				className: ''
					.concat(styles.container, ' ')
					.concat(isOpen ? styles.container_open : ''),
				children: _jsxs('form', {
					className: styles.form,
					onSubmit: handleSubmit,
					children: [
						_jsxs('div', {
							className: styles.formContent,
							children: [
								_jsx(Select, {
									title: '\u0428\u0440\u0438\u0444\u0442',
									selected: articleState.fontFamilyOption,
									options: fontFamilyOptions,
									onChange: function (option) {
										return setArticleState(
											__assign(__assign({}, articleState), {
												fontFamilyOption: option,
											})
										);
									},
								}),
								_jsx(Separator, {}),
								_jsx(Select, {
									title:
										'\u0420\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430',
									selected: articleState.fontSizeOption,
									options: fontSizeOptions,
									onChange: function (option) {
										return setArticleState(
											__assign(__assign({}, articleState), {
												fontSizeOption: option,
											})
										);
									},
								}),
								_jsx(Separator, {}),
								_jsx(Select, {
									title:
										'\u0426\u0432\u0435\u0442 \u0448\u0440\u0438\u0444\u0442\u0430',
									selected: articleState.fontColor,
									options: fontColors,
									onChange: function (option) {
										return setArticleState(
											__assign(__assign({}, articleState), {
												fontColor: option,
											})
										);
									},
								}),
								_jsx(Separator, {}),
								_jsx(Select, {
									title: '\u0426\u0432\u0435\u0442 \u0444\u043E\u043D\u0430',
									selected: articleState.backgroundColor,
									options: backgroundColors,
									onChange: function (option) {
										return setArticleState(
											__assign(__assign({}, articleState), {
												backgroundColor: option,
											})
										);
									},
								}),
								_jsx(Separator, {}),
								_jsx(Select, {
									title:
										'\u0428\u0438\u0440\u0438\u043D\u0430 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430',
									selected: articleState.contentWidth,
									options: contentWidthArr,
									onChange: function (option) {
										return setArticleState(
											__assign(__assign({}, articleState), {
												contentWidth: option,
											})
										);
									},
								}),
							],
						}),
						_jsxs('div', {
							className: styles.bottomContainer,
							children: [
								_jsx(Button, {
									title: '\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C',
									htmlType: 'reset',
									type: 'clear',
									onClick: handleReset,
								}),
								_jsx(Button, {
									title:
										'\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C',
									htmlType: 'submit',
									type: 'apply',
								}),
							],
						}),
					],
				}),
			}),
		],
	});
};
//# sourceMappingURL=ArticleParamsForm.js.map
