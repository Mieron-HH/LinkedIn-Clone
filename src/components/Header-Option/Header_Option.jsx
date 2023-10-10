import "./_header_option.scss";
import { useSelector } from "react-redux";

// COMPONENTS
import Avatar from "@mui/material/Avatar";

const HeaderOption = ({ avatar = false, Icon, title, onClick }) => {
	const { user } = useSelector((state) => state.user);

	return (
		<div className="headerOption__component" onClick={onClick}>
			{Icon && <Icon className="headerOption__icon" />}
			{avatar && (
				<Avatar className="headerOption__avatar" src={user?.photoURL}>
					{user?.displayName[0].toUpperCase()}
				</Avatar>
			)}
			<h3 className="headerOption__title">{title}</h3>
		</div>
	);
};

export default HeaderOption;
