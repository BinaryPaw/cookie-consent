import React from "react";

export type URLString = `https://${string}.${string}`;

export interface IExternalLink {
	link: URLString;
	openNewTab?: boolean;
	children: React.ReactNode;
}

function ExternalLink({ link, openNewTab = true, children }: IExternalLink) {
	return (
		<a href={link} target={openNewTab ? "_blank" : ""} rel="noreferrer noopener nofollow">
			{children}
		</a>
	);
}

export default ExternalLink;
