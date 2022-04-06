import React from "react";
import Utility from "../../helpers/Utility";
import "../../scss/styles.scss";

export type ButtonColor = "accept" | "decline" | "secondary" | "accent";
export type ButtonType = "primary" | "tertiary";

export interface IButtonProps {
	type: ButtonType;
	color?: ButtonColor;
	icon?: React.ReactNode;
	onClick?: Function;
	children?: string;
}

function Button({ type, color, icon, onClick, children }: IButtonProps) {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (onClick) onClick(e);
	};

	const colorClass = Utility.generatePrefixedClass("btn--", color);

	return (
		<button className={`cc-btn cc-btn--${type} ${colorClass}`} onClick={handleClick}>
			{icon}
			{children}
		</button>
	);
}

Button.defaultProps = {
	type: "primary",
};

export default Button;
