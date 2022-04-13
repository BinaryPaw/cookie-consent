import { useContext, useEffect } from "react";
import { CookieContext, ICookieContext } from "../../helpers/context/CookieContext";
import LanguageHelper, { PackageLanguage } from "../../helpers/Language";
import Utility from "../../helpers/Utility";
import { ICookie } from "../CookiesList/CookiesList";

export type ColorString = `#${string}`;

export interface IInit {
	language: PackageLanguage;
	cookies: Array<ICookie>;
	colors?: IThemeColors;
}

export interface IThemeColors {
	text?: ColorString;
	secondary?: ColorString;
	bg?: ColorString;
	accept?: ColorString;
	decline?: ColorString;
	accent?: ColorString;
	[key: string]: ColorString | undefined;
}

function Init({ language, cookies, colors }: IInit) {
	const cookieCtx: ICookieContext | null = useContext(CookieContext);

	useEffect(() => {
		if (colors) {
			Utility.changeCustomProperties(colors);
		}
	}, [colors]);

	useEffect(() => {
		if (cookieCtx) cookieCtx.loadCookies(cookies);
	}, [cookies]);

	useEffect(() => {
		LanguageHelper.setLanguageFile(language);
	}, [language]);

	return null;
}

export default Init;
