import { ICookie } from "../components/CookiesList/CookiesList";
import { StorageKey } from "./Utility";

export class CookieHelper {
	static KEY_COOKIES: StorageKey = "CC_COOKIES";
	static KEY_HAS_DECIDED: StorageKey = "CC_USER_HAS_DECIDED";

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
