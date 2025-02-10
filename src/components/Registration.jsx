import { useState, useContext } from "react";
import logo from "../assets/images/logo-full.svg";
import Upload from "./Upload";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

const Registration = () => {
	const { setUser } = useContext(UserContext);
	const [avatar, setAvatar] = useState(null);
	// eslint-disable-next-line no-unused-vars
	const [ticketNumber, setTicketNumber] = useState(null);
	const [userDetails, setUserDetails] = useState({
		name: "",
		email_address: "",
		github_username: "",
		avatar: null,
		number: null,
	});
	const navigate = useNavigate();

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const avatarUrl = URL.createObjectURL(file);
			setAvatar(avatarUrl);
			setUserDetails((prevDetails) => ({
				...prevDetails,
				avatar: avatarUrl,
			}));
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserDetails((prevDetails) => ({
			...prevDetails,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const randomNumber = Math.floor(10000 + Math.random() * 90000);
		setTicketNumber(randomNumber.toString());
		const updatedUserDetails = {
			...userDetails,
			number: randomNumber.toString(),
		};
		setUser(updatedUserDetails);
		navigate("/ticket");
	};

	return (
		<div className="mx-auto w-3/4">
			<img src={logo} alt="logo icon" className="mx-auto py-3" />
			<section className="mx-auto w-4/5 text-white pt-3 text-center">
				<h1 className="text-xl md:text-5xl font-bold ">
					Your Journey to Coding Conf 2025 Starts Here!
				</h1>
				<p className="my-3 text-sm sm:text-lg text-neutral-300">
					Secure your spot at next year&apos;s biggest coding conference
				</p>
			</section>

			<form
				className="text-neutral-200 mx-auto p-2 w-full md:w-[45%]"
				onSubmit={handleSubmit}
			>
				<section className="block">
					<label htmlFor="avatar" className="block mb-2">
						Upload Avatar
					</label>
					<Upload
						avatar={avatar}
						setAvatar={setAvatar}
						handleImageChange={handleImageChange}
					/>
				</section>
				<section className="block mt-3">
					<label htmlFor="name" className="block mb-2">
						Full Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						onChange={handleChange}
						className="w-full p-2 focus:outline-none bg-[#19143C] border border-neutral-500 rounded-lg"
					/>
				</section>
				<section className="block mt-3">
					<label htmlFor="email_address" className="block mb-2">
						Email Address
					</label>
					<input
						type="email"
						id="email_address"
						name="email_address"
						onChange={handleChange}
						placeholder="example@email.com"
						className="w-full p-2 focus:outline-none bg-[#19143C] border border-neutral-500 rounded-lg"
					/>
				</section>
				<section className="block mt-3">
					<label htmlFor="github_username" className="block mb-2">
						Github Username
					</label>
					<input
						type="text"
						id="github_username"
						name="github_username"
						placeholder="@yourusername"
						onChange={handleChange}
						className="w-full p-2 focus:outline-none bg-[#19143C] border border-neutral-500 rounded-lg"
					/>
				</section>
				<button
					type="submit"
					className="w-full bg-[#F67464] font-bold text-black p-2 mt-4 rounded-lg"
				>
					Generate My Ticket
				</button>
			</form>
		</div>
	);
};

export default Registration;
