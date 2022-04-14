import lang_de from "../constants/lang_de.json";
import lang_en from "../constants/lang_en.json";

export type PackageLanguage = "de" | "en";

export default class LanguageHelper {
	static languageFiles: any = {
		de: lang_de,
		en: lang_en,
	}
	static language: string;

	static setLanguageFile(lang: PackageLanguage) {
		this.language = lang;
	}

	static translate(key: string) {
		if (!this.languageFiles[this.language]) return key;
		return this.languageFiles[this.language][key];
	}
}
