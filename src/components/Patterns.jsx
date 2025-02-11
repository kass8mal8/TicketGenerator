import squigglyBottomMobile from "../assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg";
import squigglyTop from "../assets/images/pattern-squiggly-line-top.svg";
import patternLines from "../assets/images/pattern-lines.svg";

const Patterns = () => {
	return (
		<>
			<img
				src={squigglyBottomMobile}
				alt=""
				className="absolute w-2/3 left-0 -z-20 -bottom-44 md:hidden"
			/>
			<img
				src={squigglyTop}
				alt=""
				className="absolute top-8 right-0 md:-right-10 w-[25%] md:w-1/3"
			/>
			<img
				src={patternLines}
				alt=""
				className="absolute top-8 right-0 w-full -z-30"
			/>
		</>
	);
};

export default Patterns;
