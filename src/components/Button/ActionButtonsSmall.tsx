import React from "react";
import Button from "./Button";
import IconCheck from "../Icons/IconCheck";
import IconTimes from "../Icons/IconTimes";
import IconCog from "../Icons/IconCog";

export interface IActionButtons {}

function ActionButtonsSmall({}: IActionButtons) {
	return (
		<>
			<Button color="accept" icon={<IconCheck />}>
				Accept
			</Button>
			<Button color="decline" icon={<IconTimes />}>
				Decline
			</Button>
			<Button color="secondary" icon={<IconCog />}>
				Modify
			</Button>
		</>
	);
}

export default ActionButtonsSmall;
