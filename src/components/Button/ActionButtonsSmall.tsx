import React, { useContext } from "react";
import Button from "./Button";
import IconCheck from "../Icons/IconCheck";
import IconTimes from "../Icons/IconTimes";
import IconCog from "../Icons/IconCog";
import LanguageHelper from "../../helpers/Language";
import { CookieContext, ICookieContext, SavingMode } from "../../helpers/context/CookieContext";

function ActionButtonsSmall() {
	const cookieCtx: ICookieContext | null = useContext(CookieContext);

	const handleDecision = (decision: SavingMode) => {
		if (cookieCtx) cookieCtx.saveChanges(decision);
	};

	return (
		<>
			<Button color="accept" icon={<IconCheck />} onClick={() => handleDecision("accept")}>
				{LanguageHelper.translate("BUTTON_ACCEPT")}
			</Button>
			<Button color="decline" icon={<IconTimes />} onClick={() => handleDecision("decline")}>
				{LanguageHelper.translate("BUTTON_DECLINE")}
			</Button>
			<Button color="secondary" icon={<IconCog />}>
				{LanguageHelper.translate("BUTTON_MODIFY")}
			</Button>
		</>
	);
}

export default ActionButtonsSmall;
