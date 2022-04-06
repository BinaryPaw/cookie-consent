export default class Utility {
	static prefix: string = "cc";

	static generatePrefixedClass(base: string, dynamic: string | undefined) {
		if (!dynamic) return "";
		const className: string = `${this.prefix}-${base}${dynamic}`;
		return className;
	}
}