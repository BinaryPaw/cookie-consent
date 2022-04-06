import React from "react";
import { storiesOf } from "@storybook/react";
import CookieConsent from "../components/CookieConsent";

const stories = storiesOf("CC", module);

stories.add("CookieConsent", () => {
	let cookies = [
		{
			group: "General",
			name: "APSID",
			consent: false,
			mandatory: false,
			desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
		},
		{
			group: "General",
			name: "__cf_logged_in",
			consent: true,
			mandatory: false,
			desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
		},
		{
			group: "General",
			name: "__cf_effload",
			consent: true,
			mandatory: true,
			desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
		},
		{
			group: "General",
			name: "__cf_effloadads",
			consent: true,
			mandatory: true,
			desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
		},
		{
			group: "Google",
			name: "__cf_effloadd32",
			consent: true,
			mandatory: true,
			desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
		},
		{
			group: "Google",
			name: "__cf_eff31loadd32",
			consent: true,
			mandatory: true,
			desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
		},
		{
			group: "Google",
			name: "__cf_eff23loadd32",
			consent: true,
			mandatory: true,
			desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
		},
		{
			group: "YouTube",
			name: "__cf_ef123floadd32",
			consent: true,
			mandatory: true,
			desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
		},
	];

	let thirdParty = [
		{
			name: "YouTube",
			desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
			privacyLink: "https://www.youtube.com/howyoutubeworks/policies/community-guidelines/",
			optOutLink: "https://www.youtube.com/howyoutubeworks/policies/community-guidelines/",
		},
		{
			name: "Twitter",
			desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
			privacyLink: "https://twitter.com/en/privacy",
			optOutLink: "https://twitter.com/en/privacy",
		},
		{
			name: "Twitter123",
			desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
			privacyLink: "https://twitter.com/en/privacy",
			optOutLink: "https://twitter.com/en/privacy",
		},
		{
			name: "Twitter42",
			desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
			privacyLink: "https://twitter.com/en/privacy",
			optOutLink: "https://twitter.com/en/privacy",
		},
		{
			name: "Twitter4223",
			desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
			privacyLink: "https://twitter.com/en/privacy",
			optOutLink: "https://twitter.com/en/privacy",
		},
		{
			name: "Twitter4231",
			desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
			privacyLink: "https://twitter.com/en/privacy",
			optOutLink: "https://twitter.com/en/privacy",
		},
		{
			name: "Twitter42312311",
			desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
			privacyLink: "https://twitter.com/en/privacy",
			optOutLink: "https://twitter.com/en/privacy",
		},
		{
			name: "Twitter4123231",
			desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
			privacyLink: "https://twitter.com/en/privacy",
			optOutLink: "https://twitter.com/en/privacy",
		},
	];

	return (
		<CookieConsent
			name="BinaryPaw"
			preamble="treasdadasdasdas"
			language="de"
			privacyPolicyLink="https://binarypaw.com/"
			cookiePolicyLink="https://binarypaw.com/"
			cookies={cookies}
			thirdPartyProvider={thirdParty}
		/>
	);
});
