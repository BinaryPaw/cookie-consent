import { IThemeColors } from "../components/Init/Init";

export type StorageKey = `CC_${string}`;

export default class Utility {
	static prefix: string = "cc";

	static generatePrefixedClass(base: string, dynamic?: string) {
		if (!dynamic) return "";
		const className: string = `${this.prefix}__${base}${dynamic}`;
		return className;
	}

	static changeCustomProperties(colors: IThemeColors) {
		const keys: Array<string> = Object.keys(colors);
		for (const key of keys) {
			const propName: string = `--cc-color-${key}`;
			document.documentElement.style.setProperty(propName, colors[key] as string);
		}
	}

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
}
