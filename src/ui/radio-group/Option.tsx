import { useRef } from 'react';
import { OptionType } from 'src/constants/articleProps';
import { Text } from 'src/ui/text';
import { useEnterSubmit } from './hooks/useEnterSubmit';
import styles from '../option/Option.module.scss';

type OptionProps = {
	option: OptionType;
	selected: OptionType;
	groupName: string;
	onChange?: (option: OptionType) => void;
};

export const Option = (props: OptionProps) => {
	const { option, selected, groupName, onChange } = props;
	const { value, title } = option;

	const optionRef = useRef<HTMLDivElement>(null);

	const handleChange = () => onChange?.(option);

	useEnterSubmit({ onChange, option, optionRef });

	const inputId = `${groupName}_radio_item_with_value__${value}`;
	const isChecked = value === selected.value;

	return (
		<div
			className={styles.item}
			data-checked={isChecked}
			data-testid={inputId}
			tabIndex={0}
			ref={optionRef}>
			<input
				className={styles.input}
				type='radio'
				name={groupName}
				id={inputId}
				value={value}
				checked={isChecked}
				onChange={handleChange}
				tabIndex={-1}
			/>
			<label className={styles.label} htmlFor={inputId}>
				<Text size={18} uppercase>
					{title}
				</Text>
			</label>
		</div>
	);
};
