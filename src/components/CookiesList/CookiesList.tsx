import React, { useState } from "react";
import ListItem from "./ListItem";

export interface ICookie {
	name: string;
	group?: string;
	consent: boolean;
	mandatory: boolean;
	desc: string;
}

export interface ICookiesList {
	cookies: Array<ICookie>;
}

function CookiesList({ cookies }: ICookiesList) {
	const [activeGroup, setActiveGroup] = useState(0);

	const distinctGroups: Array<string> = [
		...new Set(cookies.map((x) => x.group)),
	] as Array<string>;

	const handleGroupChange = (index: number) => {
		setActiveGroup(index);
	};

	return (
		<div className="cc__list">
			<div className="cc__cookieheader">
				{distinctGroups.map((group, index) => (
					<h5
						key={group}
						className={`group ${index === activeGroup ? "active" : ""}`}
						onClick={() => handleGroupChange(index)}
					>
						{group}
					</h5>
				))}
			</div>
			<div className="cc__cookielist">
				{distinctGroups.map((group) => (
					<div data-group={group} key={group}>
						{cookies
							.filter((cookie) => cookie.group === distinctGroups[activeGroup])
							.map((cookie) => (
								<ListItem key={cookie.name} cookie={cookie} />
							))}
					</div>
				))}
			</div>
		</div>
	);
}

export default CookiesList;
