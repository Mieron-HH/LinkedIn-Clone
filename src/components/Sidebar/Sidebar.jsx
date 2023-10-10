import "./_sidebar.scss";
import { useSelector } from "react-redux";

// COMPONENTS
import Avatar from "@mui/material/Avatar";

// ICONS
import TagIcon from "@mui/icons-material/Tag";
import GroupsIcon from "@mui/icons-material/Groups";

const Sidebar = () => {
	const { user } = useSelector((state) => state.user);

	const recentItem = (Icon, topic) => {
		return (
			<div className="sidebar__recentItem">
				<Icon className="sidebar__hash" />
				<p>{topic}</p>
			</div>
		);
	};

	return (
		user && (
			<div className="sidebar__component">
				<div className="sidebar__top">
					<img src="user-background-image.jpeg" alt="" />
					<Avatar className="sidebar__avatar" src={user.photoURL}>
						{user.displayName[0].toUpperCase()}
					</Avatar>
					<h2>{user.displayName}</h2>
					<h4>{user.email}</h4>
				</div>

				<div className="sidebar__stats">
					<div className="sidebar__stat">
						<p>Who's viewd your profile</p>
						<p className="sidebar__statNumber">2,543</p>
					</div>

					<div className="sidebar__stat">
						<p>Impressions of your post</p>
						<p className="sidebar__statNumber">2,448</p>
					</div>
				</div>

				<div className="sidebar__bottom">
					<div className="sidebar__bottom__container">
						<p>Recent</p>
						{recentItem(GroupsIcon, "Big Data Analytics")}
						{recentItem(GroupsIcon, "101 Blockchain Professionals")}
						{recentItem(GroupsIcon, "Africa Day with TALK!")}
						{recentItem(GroupsIcon, "Python Developers Community")}
					</div>

					<div className="sidebar__bottom__container">
						<p>Followed Hashtags</p>
						{recentItem(TagIcon, "reactjs")}
						{recentItem(TagIcon, "programming")}
						{recentItem(TagIcon, "softwareengineering")}
						{recentItem(TagIcon, "design")}
						{recentItem(TagIcon, "developer")}
					</div>
				</div>
			</div>
		)
	);
};

export default Sidebar;
