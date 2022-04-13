import React, { createContext, useState } from "react";
import { ICookie } from "../../components/CookiesList/CookiesList";

export interface ICookieContext {
	cookies: Array<ICookie>;
	setCookies: Function;
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
		const newCookies: Array<ICookie> = cookies.map((cookie) => {
			if (
				!cookie.mandatory &&
				(cookieNames.includes(cookie.name) || cookieNames.length < 1)
			) {
				cookie.consent = consent;
			}
			return cookie;
		});
		setCookies(newCookies);
	};

	return (
		<CookieContext.Provider value={{ cookies, setCookies, changeCookieConsent }}>
			{children}
		</CookieContext.Provider>
	);
};
