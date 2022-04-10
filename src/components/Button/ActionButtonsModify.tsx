import React from "react";
import LanguageHelper from "../../helpers/Language";
import IconCheck from "../Icons/IconCheck";
import Button from "./Button";

function ActionButtonsModify() {
	return (
		<>
			<Button color="accept">{LanguageHelper.translate("ACCEPT_ALL")}</Button>
			<Button color="decline">{LanguageHelper.translate("DECLINE_ALL")}</Button>
			<Button color="accent" icon={<IconCheck />}>
				{LanguageHelper.translate("SAVE_AND_CLOSE")}
			</Button>
		</>
	);
}

export default ActionButtonsModify;
