import React from "react";
import LanguageHelper from "../../helpers/Language";

export interface ISwitchProps {
	checked: boolean;
	disabled?: boolean;
	onClick?: Function;
}

function Switch({ checked, disabled, onClick }: ISwitchProps) {
	const handleClick = () => {
		if (onClick && !disabled) onClick();
	};

	const necessaryCookieToolTip = disabled
		? LanguageHelper.translate("components-switch-DISABLED_TOOLTIP")
		: "";

	return (
		<div className="cc-switch" title={necessaryCookieToolTip} onClick={handleClick}>
			<input type="checkbox" checked={checked} disabled={disabled} onChange={() => {}} />
			<span></span>
		</div>
	);
}

Switch.defaultProps = {
	disabled: false,
} as Partial<ISwitchProps>;

export default Switch;
