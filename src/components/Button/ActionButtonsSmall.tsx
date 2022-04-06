import React from "react";
import Button from "./Button";
import IconCheck from "../Icons/IconCheck";
import IconTimes from "../Icons/IconTimes";
import IconCog from "../Icons/IconCog";
import LanguageHelper from "../../helpers/Language";

export interface IActionButtons {}

function ActionButtonsSmall({}: IActionButtons) {
	return (
		<>
			<Button color="accept" icon={<IconCheck />}>
				{LanguageHelper.translate("cc-small-BUTTON_ACCEPT")}
			</Button>
			<Button color="decline" icon={<IconTimes />}>
				{LanguageHelper.translate("cc-small-BUTTON_DECLINE")}
			</Button>
			<Button color="secondary" icon={<IconCog />}>
				{LanguageHelper.translate("cc-small-BUTTON_MODIFY")}
			</Button>
		</>
	);
}

export default ActionButtonsSmall;
