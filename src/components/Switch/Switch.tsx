import React from "react";
import LanguageHelper from "../../helpers/Language";

export interface ISwitchProps {
	checked: boolean;
	disabled?: boolean;
	onClick?: Function;
}

function Switch({ checked, disabled = false, onClick }: ISwitchProps) {
	const handleClick = () => {
		if (onClick && !disabled) onClick();
	};

	const necessaryCookieToolTip = disabled
		? LanguageHelper.translate("components-switch-DISABLED_TOOLTIP")
		: "";

	return (
		<div className="cc__switch" title={necessaryCookieToolTip} onClick={handleClick}>
			<input type="checkbox" checked={checked} disabled={disabled} onChange={() => {}} />
			<span></span>
		</div>
	);
}

export default Switch;
