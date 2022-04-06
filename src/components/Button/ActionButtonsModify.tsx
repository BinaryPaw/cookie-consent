import React from "react";
import IconCheck from "../Icons/IconCheck";
import Button from "./Button";

function ActionButtonsModify() {
	return (
		<>
			<Button color="accept">Accept All</Button>
			<Button color="decline">Decline All</Button>
			<Button color="accent" icon={<IconCheck />}>
				Save & Close
			</Button>
		</>
	);
}

export default ActionButtonsModify;
