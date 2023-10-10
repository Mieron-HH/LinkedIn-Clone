import { forwardRef } from "react";
import "./_post.scss";

// COMPONENTS
import { Avatar } from "@mui/material";
import InputOption from "../Input-Option/Input_Option";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
// ICONS
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";

const Post = forwardRef(({ name, description, message, photoURL }, ref) => {
	return (
		<div className="post__component" ref={ref}>
			<div className="post__header">
				<Avatar src={photoURL}>{name[0].toUpperCase()}</Avatar>

				<div className="post__info">
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
			</div>

			<div className="post__body">
				<p>{message}</p>
			</div>

			<div className="post__buttons">
				<InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
				<InputOption Icon={CommentIcon} title="Comment" color="gray" />
				<InputOption Icon={BiRepost} size={30} title="Repost" color="gray" />
				<InputOption Icon={IoIosSend} size={30} title="Send" color="gray" />
			</div>
		</div>
	);
});

export default Post;
