export type PackageLanguage = "de" | "en";

export default class LanguageHelper {
	static langFile: { [key: string]: string };

	static async setLanguageFile(lang: PackageLanguage) {
		const langFile = await import(`../constants/lang_${lang}.json`);
		if (langFile) this.langFile = langFile;
	}

	static translate(key: string) {
		if (!this.langFile) return key;
		return this.langFile[key];
	}
}
