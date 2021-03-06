import React, { useContext } from "react";
import { CookieContext, ICookieContext, SavingMode } from "../../helpers/context/CookieContext";
import LanguageHelper from "../../helpers/Language";
import IconCheck from "../Icons/IconCheck";
import IconTimes from "../Icons/IconTimes";
import IconCog from "../Icons/IconCog";
import Button from "./Button";

function ActionButtonsSmall() {
	const cookieCtx: ICookieContext | null = useContext(CookieContext);

	const handleDecision = (decision: SavingMode) => {
		if (cookieCtx) cookieCtx.saveChanges(decision);
	};

	const handleModify = () => {
		if (cookieCtx) cookieCtx.toggleModifyState();
	};

	return (
		<>
			<Button color="accept" icon={<IconCheck />} onClick={() => handleDecision("accept")}>
				{LanguageHelper.translate("BUTTON_ACCEPT")}
			</Button>
			<Button color="decline" icon={<IconTimes />} onClick={() => handleDecision("decline")}>
				{LanguageHelper.translate("BUTTON_DECLINE")}
			</Button>
			<Button color="secondary" icon={<IconCog />} onClick={handleModify}>
				{LanguageHelper.translate("BUTTON_MODIFY")}
			</Button>
		</>
	);
}

export default ActionButtonsSmall;
