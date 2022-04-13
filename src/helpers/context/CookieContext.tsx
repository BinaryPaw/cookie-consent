import React, { createContext, useEffect, useState } from "react";
import { ICookie } from "../../components/CookiesList/CookiesList";
import { CookieHelper } from "../Cookie";
import Utility from "../Utility";

export type SavingMode = "accept" | "decline" | "close";

export interface ICookieContext {
	cookies: Array<ICookie>;
	hasDecided: boolean;
	modify: boolean;
	loadCookies: Function;
	changeCookieConsent: Function;
	saveChanges: Function;
	toggleModifyState: Function;
	disableConsentTemporarily: Function;
}

export interface ICookieProvider {
	children: React.ReactNode;
}

export const CookieContext = createContext<ICookieContext | null>(null);
CookieContext.displayName = "CookieContext";

export const CookieProvider = ({ children }: ICookieProvider) => {
	const [cookies, setCookies] = useState<Array<ICookie>>([]);
	const [modify, setModify] = useState<boolean>(false);
	const [hasDecided, setHasDecided] = useState<boolean>(true);

	const setDecisionState = (state: boolean) => {
		if (state) {
			Utility.setStorageItem(CookieHelper.KEY_HAS_DECIDED, state);
		} else {
			Utility.removeStorageItem(CookieHelper.KEY_HAS_DECIDED);
		}
		setHasDecided(state);
		setModify(false);
	};

	const toggleModifyState = () => {
		setModify((prevState) => !prevState);
	};

	const disableConsentTemporarily = () => {
		setHasDecided(true);
	};

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
		Utility.setStorageItem(CookieHelper.KEY_COOKIES, cookies);
		setDecisionState(true);
	};

	const loadCookies = (newCookies: Array<ICookie>) => {
		const storageCookies: Array<ICookie> = Utility.retrieveStorageItem(
			CookieHelper.KEY_COOKIES
		);

		if (!Array.isArray(storageCookies)) {
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
			Utility.setStorageItem(CookieHelper.KEY_COOKIES, mergedCookies);
			setCookies(mergedCookies);
		}
	};

	useEffect(() => {
		const decision: any = Utility.retrieveStorageItem(CookieHelper.KEY_HAS_DECIDED);
		if (decision === true) setDecisionState(true);
		else setDecisionState(false);
	}, []);

	return (
		<CookieContext.Provider
			value={{
				cookies,
				hasDecided,
				modify,
				loadCookies,
				changeCookieConsent,
				saveChanges,
				toggleModifyState,
				disableConsentTemporarily,
			}}
		>
			{children}
		</CookieContext.Provider>
	);
};
