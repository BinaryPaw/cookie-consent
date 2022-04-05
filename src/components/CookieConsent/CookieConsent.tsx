import Button from "../Button/Button";
import IconCheck from "../Icons/IconCheck";
import IconCog from "../Icons/IconCog";
import IconTimes from "../Icons/IconTimes";

const CookieConsent = () => {
	return (
		<div className="cc__gimme-cookies">
			<Button type="primary" color="accept" icon={<IconCheck />}>
				Accept
			</Button>
			<Button type="primary" color="decline" icon={<IconTimes />}>
				Decline
			</Button>
			<Button type="primary" color="secondary" icon={<IconCog />}>
				Modify
			</Button>
			<Button type="primary" color="accent">
				Save & Close
			</Button>
			<Button type="tertiary">Cookie policy</Button>
		</div>
	);
};

export default CookieConsent;
