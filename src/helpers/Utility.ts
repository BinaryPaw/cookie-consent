import { IThemeColors } from "../components/Init/Init";

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
}
