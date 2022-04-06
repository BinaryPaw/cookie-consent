import React from "react";

export interface IParagraphProps {
	children: string;
}

function Paragraph({ children }: IParagraphProps) {
	return <p>{children}</p>;
}

export default Paragraph;
