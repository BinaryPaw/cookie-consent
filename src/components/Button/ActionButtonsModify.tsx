import React, { useContext } from "react";
import { CookieContext, ICookieContext } from "../../helpers/context/CookieContext";
import LanguageHelper from "../../helpers/Language";
import IconCheck from "../Icons/IconCheck";
import Button from "./Button";

function ActionButtonsModify() {
	const cookieCtx: ICookieContext | null = useContext(CookieContext);

	const handleChangeAll = (consent: boolean) => {
		if (cookieCtx) cookieCtx.changeCookieConsent([], consent);
	};

	return (
		<>
			<Button color="accept" onClick={() => handleChangeAll(true)}>
				{LanguageHelper.translate("ACCEPT_ALL")}
			</Button>
			<Button color="decline" onClick={() => handleChangeAll(false)}>
				{LanguageHelper.translate("DECLINE_ALL")}
			</Button>
			<Button color="accent" icon={<IconCheck />}>
				{LanguageHelper.translate("SAVE_AND_CLOSE")}
			</Button>
		</>
	);
}

export default ActionButtonsModify;
