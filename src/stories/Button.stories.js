import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../components/Button";
import IconCheck from "../components/Icons/IconCheck";
import IconCog from "../components/Icons/IconCog";
import IconTimes from "../components/Icons/IconTimes";

const stories = storiesOf("CC", module);

stories.add("Button", () => {
	return (
		<>
			<Button type="primary" color="accept" icon={<IconCheck />}>
				Accept
			</Button>
			<Button type="primary" color="decline" icon={<IconTimes />}>
				Decline
			</Button>
			<Button type="primary" color="secondary" icon={<IconCog />}>
				Modify
			</Button>
			<Button type="primary" color="accent">
				Save & Close
			</Button>
			<Button type="tertiary">Privacy policy</Button>
		</>
	);
});
