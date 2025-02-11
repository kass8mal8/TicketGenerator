import { useContext } from "react";
import { UserContext } from "./UserContext";
import logo from "../assets/images/logo-full.svg";
import logoMark from "../assets/images/logo-mark.svg";
import iconGithub from "../assets/images/icon-github.svg";
import patternTicket from "../assets/images/pattern-ticket.svg";
import squigglyBottomDesktop from "../assets/images/pattern-squiggly-line-bottom-desktop.svg";

const TicketEvent = () => {
	const { user } = useContext(UserContext);

	return (
		<div className="text-white mx-auto w-full md:w-3/4 overflow-hidden bg-no-repeat">
			<section className="text-center my-3 w-3/4 mx-auto">
				<img src={logo} alt="logo icon" className="mx-auto py-3" />
				<h1 className="text-xl md:text-4xl md:w-4/5 mx-auto font-bold text-center">
					Congrats, <span className="text-[#F67464]">{user.name}! </span>
					Your ticket is ready.
				</h1>
				<p className="text-md md:text-xl text-neutral-400 mb-2 mt-6 text-center md:w-[60%] mx-auto">
					We&apos;ve emailed your ticket to {""}
					<span className="text-[#F67464] opacity-70">
						jonatan@email.com
					</span>{" "}
					and will send updates in the run up to event.
				</p>
			</section>
			<img
				src={patternTicket}
				alt="ticket pattern"
				className="absolute w-3/4 md:w-[25%] mt-10 ml-[15%] md:ml-[26%]"
			/>
			<section className="my-2 mt-14 md:mt-16 py-3 ml-[18%] md:ml-[36%] w-[70%] md:w-[31%] ">
				<aside className="">
					<article className="flex space-x-2">
						<img src={logoMark} alt="logo icon" className="w-6 md:w-8" />
						<p className="md:text-2xl text-md font-bold -mt-2">Coding Conf</p>
					</article>
					<p className="text-neutral-400 ml-8 md:ml-10 text-xs md:text-sm -mt-1 md:-mt-3">
						Jan 31, 2025 / Austin, TX
					</p>
				</aside>
				<aside className="flex items-center space-x-2 mt-2 md:mt-4 relative">
					<img
						src={user.avatar}
						alt="avatar"
						className="md:w-12 md:h-12 w-8 h-8 rounded-lg"
					/>
					<article>
						<p className="font-bold text-md md:text-xl">{user.name}</p>
						<div className="flex items-center space-x-2">
							<img src={iconGithub} alt="github icon" className="w-4 h-4" />
							<p className="text-neutral-400 text-sm">
								@{user.github_username}
							</p>
						</div>
					</article>
					<p className="absolute -right-4 -top-3 rotate-90 text-neutral-400 opacity-60 font-bold text-xl">
						#{user.number}
					</p>
				</aside>
			</section>
			<img
				src={squigglyBottomDesktop}
				alt=""
				className="hidden absolute md:-mt-[12%] -left-10 -z-20 md:block"
			/>
		</div>
	);
};

export default TicketEvent;
