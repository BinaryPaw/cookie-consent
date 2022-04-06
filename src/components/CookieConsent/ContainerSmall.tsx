import React from "react";

export interface IContainer {
	children: React.ReactNode;
}

function ContainerSmall({ children }: IContainer) {
	return (
		<div className="cc__container cc__container--small">
			<div>{children}</div>
		</div>
	);
}

export default ContainerSmall;
