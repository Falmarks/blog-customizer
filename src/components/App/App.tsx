import { CSSProperties, useState } from 'react';

import { Article } from '../article';
import { ArticleParamsForm } from '../article-params-form';
import { defaultArticleState } from 'src/constants/articleProps';
import { ArticleState } from 'src/types/article';

import styles from './App.module.scss';

export const App = () => {
	const [articleState, setArticleState] =
		useState<ArticleState>(defaultArticleState);
	const [isFormOpen, setIsFormOpen] = useState(false);

	const toggleForm = () => {
		setIsFormOpen(!isFormOpen);
	};

	return (
		<main className={styles.main}>
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
