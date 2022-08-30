import "./footer.scss";
import { useContext, useState } from "react";
import { AppCtx } from "../../context/context";

const Footer = () => {
	const [inp, setInp] = useState("");

	const a = useContext(AppCtx);

	const onClick = () => {
		console.log(a.a);
	};

	return (
		<footer className="page-footer light-blue darken-4">
			<div className="container">
				© {new Date().getFullYear()} React Learn Project ++++{inp}
			</div>

			<input value={inp} onChange={(e) => setInp(e.target.value)} type="text" />
			<button onClick={() => a.setA(inp)} className="btn">
				Change Context from input
			</button>
			<button onClick={() => onClick()} className="btn">
				Print Context to Console
			</button>
		</footer>
	);
};

export default Footer;
