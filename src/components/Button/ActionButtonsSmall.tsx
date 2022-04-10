import React from "react";
import Button from "./Button";
import IconCheck from "../Icons/IconCheck";
import IconTimes from "../Icons/IconTimes";
import IconCog from "../Icons/IconCog";
import LanguageHelper from "../../helpers/Language";

function ActionButtonsSmall() {
	return (
		<>
			<Button color="accept" icon={<IconCheck />}>
				{LanguageHelper.translate("BUTTON_ACCEPT")}
			</Button>
			<Button color="decline" icon={<IconTimes />}>
				{LanguageHelper.translate("BUTTON_DECLINE")}
			</Button>
			<Button color="secondary" icon={<IconCog />}>
				{LanguageHelper.translate("BUTTON_MODIFY")}
			</Button>
		</>
	);
}

export default ActionButtonsSmall;
