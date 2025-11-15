import { Text } from 'src/ui/text';
import styles from './Button.module.scss';
import clsx from 'clsx';

type ButtonProps = {
	title: string;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	variant: 'apply' | 'clear';
	disabled?: boolean;
};

export const Button = ({
	title,
	onClick,
	type = 'button',
	variant,
	disabled = false,
}: ButtonProps) => {
	const handleClick = () => {
		if (onClick && !disabled) {
			onClick();
		}
	};

	return (
		<button
			type={type}
			onClick={handleClick}
			disabled={disabled}
			className={clsx(
				styles.button,
				variant === 'apply' && styles.button_apply,
				variant === 'clear' && styles.button_clear,
				disabled && styles.button_disabled
			)}
			role='button'
			aria-label={title}
			aria-disabled={disabled}>
			<Text weight={800} uppercase>
				{title}
			</Text>
		</button>
	);
};

export type { ButtonProps };
