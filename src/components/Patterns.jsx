import squigglyBottomMobile from "../assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg";
import squigglyBottomDesktop from "../assets/images/pattern-squiggly-line-bottom-desktop.svg";
import squigglyTop from "../assets/images/pattern-squiggly-line-top.svg";
import patternLines from "../assets/images/pattern-lines.svg";

const Patterns = () => {
	return (
		<>
			<img
				src={squigglyBottomDesktop}
				alt=""
				className="hidden absolute -left-6 mt-20 -z-20 -bottom-24 md:block"
			/>
			<img
				src={squigglyBottomMobile}
				alt=""
				className="absolute w-3/4 left-2 -z-20 -bottom-16 md:hidden"
			/>
			<img src={squigglyTop} alt="" className="absolute top-8 right-0 w-1/3" />
			<img
				src={patternLines}
				alt=""
				className="absolute top-8 right-0 w-full -z-30"
			/>
		</>
	);
};

export default Patterns;
