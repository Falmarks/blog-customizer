import { useState, useRef } from 'react';
import type { MouseEventHandler } from 'react';
import { OptionType } from 'src/constants/articleProps';
import { Text } from 'src/ui/text';
import arrowDown from 'src/images/arrow-down.svg';
import { Option } from './Option';
import { useOutsideClickClose } from './hooks/useOutsideClickClose';
import { useEnterSubmit } from './hooks/useEnterSubmit';
import clsx from 'clsx';

import styles from './Select.module.scss';

type SelectProps = {
	selected: OptionType | null;
	options: OptionType[];
	placeholder?: string;
	onChange?: (selected: OptionType) => void;
	onClose?: () => void;
	title?: string;
};

export const Select = (props: SelectProps) => {
	const { options, placeholder, selected, onChange, onClose, title } = props;
	const [isOpen, setIsOpen] = useState(false);
	const rootRef = useRef<HTMLDivElement>(null);
	const placeholderRef = useRef<HTMLDivElement>(null);

	useOutsideClickClose({
		isOpen,
		rootRef,
		onClose,
		onChange: setIsOpen,
	});

	useEnterSubmit({
		placeholderRef,
		onChange: setIsOpen,
	});

	const handleOptionClick = (value: OptionType['value']) => {
		const option = options.find((opt) => opt.value === value);
		if (option) {
			setIsOpen(false);
			onChange?.(option);
		}
	};

	const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
		setIsOpen((prev) => !prev);
	};

	const shouldShowIcon =
		selected?.optionClassName &&
		(selected.optionClassName.includes('wide') ||
			selected.optionClassName.includes('narrow') ||
			selected.optionClassName.includes('option-'));

	const selectedContent = !selected ? (
		<Text>{placeholder}</Text>
	) : shouldShowIcon ? (
		<div className={styles.selectedWithIcon}>
			<span
				className={clsx(
					styles.optionIcon, // Тот же класс что и в Option
					selected.optionClassName && styles[selected.optionClassName]
				)}
			/>
			<Text>{selected.title}</Text>
		</div>
	) : (
		<Text>{selected.title}</Text>
	);

	return (
		<div className={styles.container}>
			{title && (
				<Text size={12} weight={800} uppercase>
					{title}
				</Text>
			)}
			<div
				className={styles.selectWrapper}
				ref={rootRef}
				data-is-active={isOpen}
				data-testid='selectWrapper'>
				<img src={arrowDown} alt='' className={styles.arrow} />
				<div
					className={styles.placeholder}
					data-selected={!!selected}
					onClick={handlePlaceHolderClick}
					role='button'
					tabIndex={0}
					ref={placeholderRef}>
					{selectedContent}
				</div>
				{isOpen && (
					<ul className={styles.select} data-testid='selectDropdown'>
						{options.map((option) => (
							<Option
								key={option.value}
								option={option}
								onClick={handleOptionClick}
							/>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};
