export type PackageLanguage = "de" | "en";
export type TranslatorKey = `${string}-${string}-${string}`;

export default class LanguageHelper {
	static langFile: object;

	static async setLanguageFile(lang: PackageLanguage) {
		const langFile = await import(`../constants/lang_${lang}.json`);

		if (!langFile) return;
		this.langFile = langFile;
	}

	static translate(key: TranslatorKey) {
		if (!this.langFile) return key;

		const keyParts: Array<string> = key.split("-");
		keyParts[0] = keyParts[0].toLowerCase();
		keyParts[1] = keyParts[1].toLowerCase();

		return this.langFile[keyParts[0]][keyParts[1]][keyParts[2]];
	}
}
