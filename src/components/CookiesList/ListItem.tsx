import React from "react";
import { ICookie } from "./CookiesList";
import Paragraph from "../Text/Paragraph";
import Switch from "../Switch";

export interface IListItem {
	cookie: ICookie;
}

function ListItem({ cookie }: IListItem) {
	return (
		<div className="cc__cookielist__item">
			<h4>{cookie.name}</h4>
			<div className="content">
				<Paragraph>{cookie.desc}</Paragraph>
				<Switch checked={cookie.consent} disabled={cookie.mandatory} />
			</div>
		</div>
	);
}

export default ListItem;
