import React from "react";

export interface ITitle {
	children: string;
}

function Title({ children }: ITitle) {
	return (
		<div className="cc__title">
			<h3>{children}</h3>
		</div>
	);
}

export default Title;
