export default class Utility {
	static prefix: string = "cc";

	static generatePrefixedClass(base: string, dynamic?: string) {
		if (!dynamic) return "";
		const className: string = `${this.prefix}__${base}${dynamic}`;
		return className;
	}
}
