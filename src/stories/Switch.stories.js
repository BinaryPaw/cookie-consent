import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Switch from "../components/Switch/Switch";

const stories = storiesOf("CC", module);

stories.add("Switch", () => {
	const [checked, setChecked] = useState(false);

	const onClick = () => {
		setChecked((prevChecked) => !prevChecked);
	};

	return (
		<>
			<Switch checked={checked} onClick={onClick} />
			<Switch checked={true} disabled />
		</>
	);
});
