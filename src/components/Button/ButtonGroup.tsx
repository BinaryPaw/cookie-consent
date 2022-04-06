import React from "react";
import { URLString } from "../CookieConsent/CookieConsent";
import Button from "./Button";

export interface IButtonGroup {
	privacyLink: URLString;
	cookieLink?: URLString;
	actionButtons: React.ReactNode;
}

function ButtonGroup({ cookieLink, privacyLink, actionButtons }: IButtonGroup) {
	return (
		<div className="cc__btn__group">
			<div className="secondary">
				<a href={privacyLink}>
					<Button type="tertiary">Privacy policy</Button>
				</a>
				{cookieLink && (
					<a href={cookieLink}>
						<Button type="tertiary">Cookie policy</Button>
					</a>
				)}
			</div>
			<div className="action">{actionButtons}</div>
		</div>
	);
}

export default ButtonGroup;
