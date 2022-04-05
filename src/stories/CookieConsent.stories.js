import React from "react";
import { storiesOf } from "@storybook/react";
import CookieConsent from "../components/CookieConsent";

const stories = storiesOf("CC Test", module);

stories.add("CookieConsent", () => {
	const handleClick = (e) => {
		console.log("button clicked");
	};

	return <CookieConsent />;
});
