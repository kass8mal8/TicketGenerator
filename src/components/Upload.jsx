import uploadIcon from "../assets/images/icon-upload.svg";

// eslint-disable-next-line react/prop-types
const Upload = ({ avatar, setAvatar, handleImageChange }) => {
	return (
		<label className="cursor-pointer tracking-wide border border-dashed border-neutral-500 rounded-lg bg-[#19143C] backdrop-opacity-20 p-2 block mt-2">
			<section
				className={`${
					avatar ? "p-0" : "p-2"
				} bg-[#302E52] w-10 items-center mx-auto rounded-lg my-2`}
			>
				<img
					src={avatar ? avatar : uploadIcon}
					alt="Upload Icon"
					className={`${avatar && "w-24 h-10 rounded-lg"} mx-auto w-6 h-6`}
				/>
			</section>
			{avatar ? (
				<section className="flex justify-between my-3 rounded-lg">
					<button
						type="button"
						className="bg-[#302E52] rounded-lg px-4 py-1"
						onClick={() => setAvatar(null)}
					>
						Remove image
					</button>
					<label
						htmlFor="avatar"
						className="bg-[#302E52] rounded-lg px-4 py-1 cursor-pointer"
					>
						Change image
						<input
							type="file"
							id="avatar"
							name="avatar"
							className="hidden"
							onChange={handleImageChange}
						/>
					</label>
				</section>
			) : (
				<p className="text-neutral-300">Drag and drop or click to upload</p>
			)}
			{!avatar && (
				<input
					type="file"
					id="avatar"
					name="avatar"
					className="hidden"
					onChange={handleImageChange}
				/>
			)}
		</label>
	);
};

export default Upload;
