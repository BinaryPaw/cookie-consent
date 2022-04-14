# Cookie consent

In times of GDPR and other data protection regulations, managing cookies decently has become more and more important. This library should make this process a bit easier for your website.
React-cookie-consent is a frontend library that allows users of your website to configure cookies. It does **not** prevent your website from setting cookies without consent but it does provide you with a list of cookies that the user agreed to.

## Installation

Add the library to you project with the following command:
`npm install @binarypaw/react-cookie-consent`

## Usage

The library exposes one react component which must be added to the top-level of your application. You must also include the separate css file being delivered.

```typescript
import React from "react";
import { CookieConsent } from "@binarypaw/react-cookie-consent";
import "@binarypaw/react-cookie-consent/dist/cookieConsent.css";

function App() {
	return (
		<>
			<CookieConsent />
			<div>Your content</div>
		</>
	);
}
```

You want a fast start? Have a look at our [example](#example).
All component props are documented in the [properties section](#properties)

## Example

```typescript
import React from "react";
import { CookieConsent } from "@binarypaw/react-cookie-consent";
import "@binarypaw/react-cookie-consent/dist/cookieConsent.css";

function App() {
	const name = "BinaryPaw";
	const preamble = "We bake great cookies ;)";
	const privacyLink = "https://example.com";
	const cookies = [{
		group: "General",
		name: "APSID",
		desc: "This cookie refers to the current session we use to identify your machine.",
		consent: false,
		mandatory: true,
	}];
	const thirdParties = [{
		name: "Rainbow",
		desc: "The rainbow service uses cookies to make your website look like a rainbow",
		privacyLink: "https://example.com",
		optOutLink: "https://example.com",
	}];
	const handleSave = (cookies) => {
		console.log(cookies);
	};

	return (
	<CookieConsent
		name={name}
		preamble={preamble}
		privacyPolicyLink={privacyLink}
		cookies={cookies}
		thirdPartyProvider={thirdParties}
		onSave={handleSave}
	/>
	);
}
```

## Properties

| Name                                       | Description                                                      | Type                  | Default |
| ------------------------------------------ | ---------------------------------------------------------------- | --------------------- | ------- |
| [name](#name)                              | your websites name                                               | string                | n/a     |
| [activated?](#activated)                   | activates/deactivates the whole cookie-consent                   | boolean               | true    |
| [language?](#language)                     | language for prewritten texts                                    | `"en" or "de"`        | "en"    |
| [preamble](#preamble)                      | short description explaining what cookies are used for           | string                | n/a     |
| [privacyPolicyLink](#privacypolicylink)    | privacy policy link of your website                              | string                | n/a     |
| [cookiePolicyLink?](#cookiepolicylink)     | cookie policy link of your website                               | string                | n/a     |
| [cookies?](#cookies)                       | all the cookies your website uses                                | ICookie[]             | []      |
| [thirdPartyProvider?](#thirdpartyprovider) | list of all third-party providers                                | IThirdPartyProvider[] | []      |
| [onSave?](#onSave)                         | function is being called when the user saves it's cookie choices | Function              | n/a     |
| [colors?](#colors)                         | Changes preset colors                                            | IThemeColors          | n/a     |

### name

Choose any name which is then being displayed on the cookie-consent banner.

### activated?

Deactivates or activates the whole cookie-consent library.

### language?

Defines the language for all pre-written texts for example buttons.

### preamble

The preamble describes the usage of your cookies and must make the user aware that more information can be found in the cookie or privacy policy.

### privacyPolicyLink

The weblink to your privacy policy.

### cookiePolicyLink?

The weblink to your cookie policy.

### cookies?

An array of all cookies being used by your website.

```typescript
[{
	name:  string;
	group?:  string;
	consent:  boolean;
	mandatory:  boolean;
	desc:  string;
}]
```

### thirdPartyProvider?

An array of all third-party providers which your website makes use of.

```typescript
tpye URLString = `https://${string}.${string}` // normal web url

[{
	name:  string;
	desc:  string;
	privacyLink: URLString;
	optOutLink: URLString;
}]
```

### onSave?

This function will be called every time the user saves his cookie settings. The first parameter of the function is the whole list of [cookies](#cookies). `function onSave(cookies: Array<ICookie>) {...}`

### colors?

The colors prop let's you edit every color used by the theme in order to make it fit with your own custom theme.

```typescript
type ColorString = `#${string}` // 6-digit hex-code

{
	text?:  ColorString;
	secondary?:  ColorString;
	bg?:  ColorString;
	accept?:  ColorString;
	decline?:  ColorString;
	accent?:  ColorString;
}
```

## License

Cookie-Consent is licensed under EPL 2.0.
Read more here: [EPL 2.0](https://github.com/BinaryPaw/cookie-consent/blob/master/LICENSE).
