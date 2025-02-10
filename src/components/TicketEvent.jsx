import { useContext } from "react";
import { UserContext } from "./UserContext";
import logo from "../assets/images/logo-full.svg";

const TicketEvent = () => {
	const { user } = useContext(UserContext);
	console.log(user);
	return (
		<div className="text-white mx-auto w-3/4">
			<img src={logo} alt="logo icon" className="mx-auto py-3" />
			<h1>Congrats {user.name}! Your ticket is ready.</h1>
		</div>
	);
};

export default TicketEvent;
