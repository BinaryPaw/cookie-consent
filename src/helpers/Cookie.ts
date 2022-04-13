import { ICookie } from "../components/CookiesList/CookiesList";

export type StorageKey = `CC_${string}`;

export class CookieHelper {
	static KEY_COOKIES: StorageKey = "CC_COOKIES";
	static KEY_CONSENT: StorageKey = "CC_USER_CONSENT";
	static KEY_STATE: StorageKey = "CC_DECISION_STATE";

	static retrieveStorageItem(key: StorageKey) {
		const item: string | null = localStorage.getItem(key);
		if (!item) return;
		const parsed: any = JSON.parse(item);
		return parsed;
	}

	static setStorageItem(key: StorageKey, value: any) {
		const stringified: string = JSON.stringify(value);
		localStorage.setItem(key, stringified);
	}

	static removeStorageItem(key: StorageKey) {
		localStorage.removeItem(key);
	}

	static compareCookies(refCookies: Array<ICookie>, cookies: Array<ICookie>) {
		if (refCookies.length !== cookies.length) return false;

		const keys: Array<string> = Object.keys(cookies[0]).filter((key) => key !== "consent");

		for (const refCookie of refCookies) {
			const correspondingCookie: ICookie | undefined = cookies.find(
				(cookie) => cookie.name === refCookie.name
			);
			if (!correspondingCookie) {
				return false;
			}
			for (const key of keys) {
				if (refCookie[key] !== correspondingCookie[key]) {
					return false;
				}
			}
		}
		return true;
	}

	static mergeCookies(newCookies: Array<ICookie>, cookies: Array<ICookie>) {
		const mergedCookies: Array<ICookie> = newCookies.filter((newCookie) => {
			const correspondingCookie: ICookie | undefined = cookies.find(
				(cookie) => cookie.name === newCookie.name
			);
			if (correspondingCookie) {
				newCookie.consent = correspondingCookie.consent;
			}
			return newCookie;
		});
		return mergedCookies;
	}
}
