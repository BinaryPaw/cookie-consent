import "../../scss/styles.scss";

export type ButtonColor = "accept" | "decline" | "secondary" | "accent";
export type ButtonType = "primary" | "tertiary";

interface IButtonProps {
	type: ButtonType;
	color?: ButtonColor;
	icon?: React.ReactNode;
	onClick?: Function;
	children?: string;
}

const Button = ({ type, color, icon, onClick, children }: IButtonProps) => {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (onClick) onClick(e);
	};

	return (
		<button className={`cc-btn cc-btn--${type} cc-btn--${color}`} onClick={handleClick}>
			{icon}
			{children}
		</button>
	);
};

Button.defaultProps = {
	type: "primary",
};

export default Button;
