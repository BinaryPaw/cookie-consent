import React from "react";
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
	const distinctGroups: Array<string> = [
		...new Set(cookies.map((x) => x.group)),
	] as Array<string>;

	return (
		<div className="cc__list">
			<div className="cc__cookieheader">
				{distinctGroups.map((group, index) => (
					<h5 key={group} className={`group ${index === 0 ? "active" : ""}`}>
						{group}
					</h5>
				))}
			</div>
			<div className="cc__cookielist">
				{distinctGroups.map((group) => (
					<div data-group={group} key={group}>
						{cookies
							.filter((cookie) => cookie.group === group)
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
