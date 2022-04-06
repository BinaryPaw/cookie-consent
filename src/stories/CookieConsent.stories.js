import React from "react";
import { storiesOf } from "@storybook/react";
import CookieConsent from "../components/CookieConsent";

const stories = storiesOf("CC", module);

stories.add("CookieConsent", () => {
	return <CookieConsent />;
});
