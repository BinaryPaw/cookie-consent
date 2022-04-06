import React from "react";

export interface IParagraphProps {
	small?: boolean;
	children: string;
}

function Paragraph({ small, children }: IParagraphProps) {
	return <p className={small ? "sm" : ""}>{children}</p>;
}

Paragraph.defaultProps = {
	small: false,
};

export default Paragraph;
