import React, { useContext } from "react";
import { CookieContext, ICookieContext } from "../../helpers/context/CookieContext";
import Paragraph from "../Text/Paragraph";
import { ICookie } from "./CookiesList";
import Switch from "../Switch/Switch";

export interface IListItem {
	cookie: ICookie;
}

function ListItem({ cookie }: IListItem) {
	const cookieCtx: ICookieContext | null = useContext(CookieContext);

	const handleConsentChange = () => {
		if (cookieCtx) cookieCtx.changeCookieConsent([cookie.name], !cookie.consent);
	};

	return (
		<div className="cc__cookielist__item">
			<h4>{cookie.name}</h4>
			<div className="content">
				<Paragraph>{cookie.desc}</Paragraph>
				<Switch
					checked={cookie.consent}
					disabled={cookie.mandatory}
					onClick={handleConsentChange}
				/>
			</div>
		</div>
	);
}

export default ListItem;
