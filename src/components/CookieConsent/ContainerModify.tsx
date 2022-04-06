import React from "react";
import { IContainer } from "./ContainerSmall";

function ContainerModify({ children }: IContainer) {
	return (
		<div className="cc__container cc__container--modify">
			<div>{children}</div>
		</div>
	);
}

export default ContainerModify;
