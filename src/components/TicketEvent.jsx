import { useContext } from "react";
import { UserContext } from "./UserContext";
import logo from "../assets/images/logo-full.svg";
import iconGithub from "../assets/images/icon-github.svg";
import patternTicket from "../assets/images/pattern-ticket.svg";

const TicketEvent = () => {
	const { user } = useContext(UserContext);
	const name = user?.name?.split(" ");

	return (
		<div className="text-white mx-auto w-3/4 border border-green-500">
			<section className="text-center my-3 w-3/4 mx-auto">
				<img src={logo} alt="logo icon" className="mx-auto py-3" />
				<h1 className="text-xl md:text-4xl font-bold text-center">
					Congrats <span className="text-[#F67464]">{name[0]}</span>
				</h1>
				<h2 className="text-xl md:text-4xl font-bold text-center">
					<span className="text-[#F67464]">{name[1]}!</span> Your ticket is
					ready.
				</h2>
				<p className="text-md my-2 text-center w-[40%] mx-auto">
					We&apos;ve emailed your ticket to{" "}
					<span className="text-[#F67464]">jonatan@email.com</span> and will
					send updates in the run up to event.
				</p>
			</section>
			<img
				src={patternTicket}
				alt="ticket pattern"
				className="absolute mx-auto mt-10 ml-[10%]"
			/>
			<section className="my-2 border mt-16 py-3 ml-[16%] border-red-400 w-[60%]">
				<aside className="mb-4">
					<img src={logo} alt="logo icon" className="" />
					<p>Jan 31, 2025 / Austin, TX</p>
				</aside>
				<aside className="flex items-center space-x-2 mt-12">
					<img
						src={user.avatar}
						alt="avatar"
						className="w-12 h-12 rounded-lg"
					/>
					<article>
						<p className="font-bold text-xl">{user.name}</p>
						<div className="flex items-center space-x-2">
							<img src={iconGithub} alt="github icon" className="w-4 h-4" />
							<p>@{user.github_username}</p>
						</div>
					</article>
				</aside>
			</section>
		</div>
	);
};

export default TicketEvent;
