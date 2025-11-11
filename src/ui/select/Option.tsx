import { useRef } from 'react';
import type { MouseEventHandler } from 'react';
import clsx from 'clsx';
import { OptionType } from 'src/constants/articleProps';
import { Text } from 'src/ui/text';
import { isFontFamilyClass } from './helpers/isFontFamilyClass';
import { useEnterOptionSubmit } from './hooks/useEnterOptionSubmit';

import styles from './Select.module.scss';

type OptionProps = {
	option: OptionType;
	onClick: (value: OptionType['value']) => void;
};

// Вспомогательный тип для строковых ключей стилей
type StyleKey = Extract<keyof typeof styles, string>;

export const Option = (props: OptionProps) => {
	const {
		option: { value, title, optionClassName, className },
		onClick,
	} = props;
	const optionRef = useRef<HTMLLIElement>(null);

	const handleClick = (
		clickedValue: OptionType['value']
	): MouseEventHandler<HTMLLIElement> => {
		return () => {
			onClick(clickedValue);
		};
	};

	// Исправленный тип-гард: используем вспомогательный тип StyleKey
	const isValidStyleClass = (
		className: string | undefined
	): className is StyleKey => {
		return !!className && className in styles;
	};

	useEnterOptionSubmit({
		optionRef,
		value,
		onClick,
	});

	return (
		<li
			className={clsx(
				styles.option,
				optionClassName &&
					isValidStyleClass(optionClassName) &&
					styles[optionClassName]
			)}
			value={value}
			onClick={handleClick(value)}
			tabIndex={0}
			data-testid={`select-option-${value}`}
			ref={optionRef}>
			<Text family={isFontFamilyClass(className) ? className : undefined}>
				{title}
			</Text>
		</li>
	);
};
