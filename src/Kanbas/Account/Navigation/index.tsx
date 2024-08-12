import { Link, useLocation, useParams } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./index.css";

export default function AccountNavigation() {
	const { currentUser } = useSelector((state: any) => state.accountReducer);
	const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
	const { pathname } = useLocation();

	return (
		<div id="wd-account-navigation" className="account-navigation">
			{links.map((link) => (
				<Link
					key={link}
					to={`/Kanbas/Account/${link}`}
					className={`account-link
						${pathname.includes(link) ? "active" : ""}`}
				>
					{link === "Profile" && <FaUserAlt className="me-2" />}
				</Link>
			))}
		</div>
	);
}