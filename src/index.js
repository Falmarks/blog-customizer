import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { createRoot } from 'react-dom/client';
import { StrictMode, useState } from 'react';
import clsx from 'clsx';
import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';
import './styles/index.scss';
import styles from './styles/index.module.scss';
var domNode = document.getElementById('root');
var root = createRoot(domNode);
var App = function () {
	var _a = useState(defaultArticleState),
		articleState = _a[0],
		setArticleState = _a[1];
	var _b = useState(false),
		isFormOpen = _b[0],
		setIsFormOpen = _b[1];
	return _jsxs('main', {
		className: clsx(styles.main),
		style: {
			'--font-family': articleState.fontFamilyOption.value,
			'--font-size': articleState.fontSizeOption.value,
			'--font-color': articleState.fontColor.value,
			'--container-width': articleState.contentWidth.value,
			'--bg-color': articleState.backgroundColor.value,
		},
		children: [
			_jsx(ArticleParamsForm, {
				articleState: articleState,
				setArticleState: setArticleState,
				isOpen: isFormOpen,
				onToggle: function () {
					return setIsFormOpen(!isFormOpen);
				},
			}),
			_jsx(Article, {}),
		],
	});
};
root.render(_jsx(StrictMode, { children: _jsx(App, {}) }));
//# sourceMappingURL=index.js.map
