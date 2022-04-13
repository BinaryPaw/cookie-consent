import React, { createContext, useState } from "react";
import { ICookie } from "../../components/CookiesList/CookiesList";
import { CookieHelper } from "../Cookie";

export type SavingMode = "accept" | "decline" | "close";

export interface ICookieContext {
	cookies: Array<ICookie>;
	loadCookies: Function;
	changeCookieConsent: Function;
	saveChanges: Function;
}

export interface ICookieProvider {
	children: React.ReactNode;
}

export const CookieContext = createContext<ICookieContext | null>(null);
CookieContext.displayName = "CookieContext";

export const CookieProvider = ({ children }: ICookieProvider) => {
	const [cookies, setCookies] = useState<Array<ICookie>>([]);
	const [modify, setModify] = useState<boolean>(false); //TODO
	const [hasDecided, setHasDecided] = useState<boolean>(false);

	const changeCookieConsent = (cookieNames: Array<string>, consent: boolean) => {
		const changedCookies: Array<ICookie> = cookies.map((cookie) => {
			const isMandatory = cookie.mandatory;
			const changeAll = cookieNames.length < 1;
			const cookieNeedsChange = cookieNames.includes(cookie.name);

			if (!isMandatory && (changeAll || cookieNeedsChange)) {
				cookie.consent = consent;
			}
			return cookie;
		});
		setCookies(changedCookies);
	};

	const saveChanges = (mode: SavingMode) => {
		switch (mode) {
			case "accept":
				changeCookieConsent([], true);
				break;
			case "decline":
				changeCookieConsent([], false);
				break;
			default:
				break;
		}
		CookieHelper.setStorageItem(CookieHelper.KEY_COOKIES, cookies);
		setHasDecided(true);
	};

	const loadCookies = (newCookies: Array<ICookie>) => {
		const storageCookies: Array<ICookie> = CookieHelper.retrieveStorageItem(
			CookieHelper.KEY_COOKIES
		);

		if (!Array.isArray(storageCookies)) {
			CookieHelper.setStorageItem(CookieHelper.KEY_COOKIES, newCookies);
			setCookies(newCookies);
			return;
		}

		if (CookieHelper.compareCookies(storageCookies, newCookies)) {
			setCookies(storageCookies);
		} else {
			const mergedCookies: Array<ICookie> = CookieHelper.mergeCookies(
				newCookies,
				storageCookies
			);
			CookieHelper.setStorageItem(CookieHelper.KEY_COOKIES, mergedCookies);
			setCookies(mergedCookies);
		}
	};

	return (
		<CookieContext.Provider value={{ cookies, loadCookies, changeCookieConsent, saveChanges }}>
			{children}
		</CookieContext.Provider>
	);
};
