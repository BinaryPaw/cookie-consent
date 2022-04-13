import React, { createContext, useState } from "react";
import { ICookie } from "../../components/CookiesList/CookiesList";
import { CookieHelper } from "../Cookie";

export interface ICookieContext {
	cookies: Array<ICookie>;
	loadCookies: Function;
	changeCookieConsent: Function;
}

export interface ICookieProvider {
	children: React.ReactNode;
}

export const CookieContext = createContext<ICookieContext | null>(null);
CookieContext.displayName = "CookieContext";

export const CookieProvider = ({ children }: ICookieProvider) => {
	const [cookies, setCookies] = useState<Array<ICookie>>([]);

	const changeCookieConsent = (cookieNames: Array<string> = [], consent: boolean) => {
		const changedCookies: Array<ICookie> = cookies.map((cookie) => {
			if (
				!cookie.mandatory &&
				(cookieNames.includes(cookie.name) || cookieNames.length < 1)
			) {
				cookie.consent = consent;
			}
			return cookie;
		});
		setCookies(changedCookies);
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
		<CookieContext.Provider value={{ cookies, loadCookies, changeCookieConsent }}>
			{children}
		</CookieContext.Provider>
	);
};
