import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Select } from 'src/ui/select';
import { Separator } from 'src/ui/separator';
import { ArticleState } from 'src/types/article';
import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

type ArticleParamsFormProps = {
	articleState: ArticleState;
	setArticleState: (state: ArticleState) => void;
	isOpen: boolean;
	onToggle: () => void;
};

export const ArticleParamsForm = ({
	articleState,
	setArticleState,
	isOpen,
	onToggle,
}: ArticleParamsFormProps) => {
	const handleReset = () => {
		setArticleState(defaultArticleState);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onToggle();
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={onToggle} />
			<aside
				className={`${styles.container} ${
					isOpen ? styles.container_open : ''
				}`}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.formContent}>
						<Select
							title='Шрифт'
							selected={articleState.fontFamilyOption}
							options={fontFamilyOptions}
							onChange={(option) =>
								setArticleState({
									...articleState,
									fontFamilyOption: option,
								})
							}
						/>

						<Separator />

						<Select
							title='Размер шрифта'
							selected={articleState.fontSizeOption}
							options={fontSizeOptions}
							onChange={(option) =>
								setArticleState({
									...articleState,
									fontSizeOption: option,
								})
							}
						/>

						<Separator />

						<Select
							title='Цвет шрифта'
							selected={articleState.fontColor}
							options={fontColors}
							onChange={(option) =>
								setArticleState({
									...articleState,
									fontColor: option,
								})
							}
						/>

						<Separator />

						<Select
							title='Цвет фона'
							selected={articleState.backgroundColor}
							options={backgroundColors}
							onChange={(option) =>
								setArticleState({
									...articleState,
									backgroundColor: option,
								})
							}
						/>

						<Separator />

						<Select
							title='Ширина контента'
							selected={articleState.contentWidth}
							options={contentWidthArr}
							onChange={(option) =>
								setArticleState({
									...articleState,
									contentWidth: option,
								})
							}
						/>
					</div>

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={handleReset}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
