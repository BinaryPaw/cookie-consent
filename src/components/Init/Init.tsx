import { useContext, useEffect } from "react";
import { CookieContext, ICookieContext } from "../../helpers/context/CookieContext";
import LanguageHelper, { PackageLanguage } from "../../helpers/Language";
import { ICookie } from "../CookiesList/CookiesList";

export interface IInit {
	language: PackageLanguage;
	cookies: Array<ICookie>;
}

function Init({ language, cookies }: IInit) {
	const cookieCtx: ICookieContext | null = useContext(CookieContext);

	useEffect(() => {
		if (cookieCtx) cookieCtx.loadCookies(cookies);
	}, [cookies]);

	useEffect(() => {
		LanguageHelper.setLanguageFile(language);
	}, [language]);

	return null;
}

export default Init;
