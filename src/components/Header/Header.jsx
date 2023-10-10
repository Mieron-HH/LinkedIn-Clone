import "./_header.scss";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";

// ACTIONS
import { logout } from "../../slices/user-slice";

// COMPONENTS
import HeaderOption from "../Header-Option/Header_Option";

// ICONS
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";

// GLOBAL VARIABLES
import { auth } from "../../firebase";

const Header = () => {
	const dispatch = useDispatch();

	const logoutOfApp = () => {
		dispatch(logout());
		signOut(auth).then().catch();
	};

	return (
		<div className="header__component">
			<div className="header__left">
				<img src="linkedin-logo.png" alt="" />

				<div className="header__search">
					<SearchIcon className="header__search__icon" />
					<input type="text" placeholder="Search" />
				</div>
			</div>
			<div className="header__right">
				<HeaderOption Icon={HomeIcon} title="Home" />
				<HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
				<HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
				<HeaderOption Icon={TextsmsIcon} title="Messaging" />
				<HeaderOption Icon={NotificationsIcon} title="Notifications" />

				<HeaderOption avatar={true} title="Me" onClick={logoutOfApp} />
			</div>
		</div>
	);
};

export default Header;
