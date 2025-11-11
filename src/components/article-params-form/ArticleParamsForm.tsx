import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Select } from 'src/ui/select';
import { Separator } from 'src/ui/separator';
import { ArticleState } from 'src/types/article';
import {
	OptionType,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';
import { useState, useEffect } from 'react';

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
	const [tempArticleState, setTempArticleState] = useState(articleState);

	useEffect(() => {
		if (isOpen) {
			setTempArticleState(articleState);
		}
	}, [articleState, isOpen]);

	const handleReset = () => {
		setTempArticleState(defaultArticleState);
	};

	const handleApply = () => {
		setArticleState(tempArticleState);
		onToggle();
	};

	const handleSelectChange = (
		field: keyof ArticleState,
		option: OptionType
	) => {
		setTempArticleState((prev) => ({
			...prev,
			[field]: option,
		}));
	};

	if (!isOpen) {
		return (
			<>
				<ArrowButton isOpen={isOpen} onClick={onToggle} />
				<aside className={styles.container}></aside>
			</>
		);
	}

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={onToggle} />
			<aside className={`${styles.container} ${styles.container_open}`}>
				<div className={styles.form}>
					<div className={styles.formContent}>
						<Select
							title='Шрифт'
							selected={tempArticleState.fontFamilyOption}
							options={fontFamilyOptions}
							onChange={(option) =>
								handleSelectChange('fontFamilyOption', option)
							}
						/>

						<Separator />

						<Select
							title='Размер шрифта'
							selected={tempArticleState.fontSizeOption}
							options={fontSizeOptions}
							onChange={(option) =>
								handleSelectChange('fontSizeOption', option)
							}
						/>

						<Separator />

						<Select
							title='Цвет шрифта'
							selected={tempArticleState.fontColor}
							options={fontColors}
							onChange={(option) => handleSelectChange('fontColor', option)}
						/>

						<Separator />

						<Select
							title='Цвет фона'
							selected={tempArticleState.backgroundColor}
							options={backgroundColors}
							onChange={(option) =>
								handleSelectChange('backgroundColor', option)
							}
						/>

						<Separator />

						<Select
							title='Ширина контента'
							selected={tempArticleState.contentWidth}
							options={contentWidthArr}
							onChange={(option) => handleSelectChange('contentWidth', option)}
						/>
					</div>

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							variant='clear'
							onClick={handleReset}
							type='button'
						/>

						<Button
							title='Применить'
							variant='apply'
							onClick={handleApply}
							type='button'
						/>
					</div>
				</div>
			</aside>
		</>
	);
};
