import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from 'components/article';
import { ArticleParamsForm } from 'components/article-params-form';
import { defaultArticleState } from './constants/articleProps';
import { ArticleState } from './types/article';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [articleState, setArticleState] =
		useState<ArticleState>(defaultArticleState);
	const [isFormOpen, setIsFormOpen] = useState(false);

	const toggleForm = () => {
		setIsFormOpen(!isFormOpen);
	};

	return (
		<main className={clsx(styles.main)}>
			<ArticleParamsForm
				articleState={articleState}
				setArticleState={setArticleState}
				isOpen={isFormOpen}
				onToggle={toggleForm}
			/>

			<div
				style={
					{
						'--font-family': articleState.fontFamilyOption.value,
						'--font-size': articleState.fontSizeOption.value,
						'--font-color': articleState.fontColor.value,
						'--container-width': articleState.contentWidth.value,
						'--bg-color': articleState.backgroundColor.value,
					} as CSSProperties
				}>
				<Article articleState={articleState} />
			</div>
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
