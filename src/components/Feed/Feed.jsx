import { useEffect, useState } from "react";
import "./_feed.scss";
import { useSelector } from "react-redux";
import {
	onSnapshot,
	addDoc,
	orderBy,
	query,
	serverTimestamp,
} from "firebase/firestore";
import FlipMove from "react-flip-move";

// COMPONENTS
import Post from "../Post/Post";
import { Avatar } from "@mui/material";
import InputOption from "../Input-Option/Input_Option";

// ICONS
import ImageIcon from "@mui/icons-material/Image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ViewDayIcon from "@mui/icons-material/ViewDay";

// GLOBAL VARIABLES
import { postsRef } from "../../firebase";

const Feed = () => {
	const { user } = useSelector((state) => state.user);
	const [input, setInput] = useState("");
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const q = query(postsRef, orderBy("timestamp", "desc"));
		onSnapshot(q, (querySnapshot) => {
			const result = [];

			querySnapshot.forEach((doc) =>
				result.push({ id: doc.id, data: doc.data() })
			);
			setPosts(result);
		});
	}, []);

	const sendPost = async (e) => {
		e.preventDefault();
		try {
			const docData = {
				name: user.displayName,
				description: user.email,
				message: input,
				photoURL: user.photoURL || "",
				timestamp: serverTimestamp(),
			};

			await addDoc(postsRef, docData);
			setInput("");
		} catch (error) {
			console.log({ error });
		}
	};

	return (
		<div className="feed__component">
			<div className="feed__posterContainer">
				<div className="feed__inputContainer">
					<Avatar className="feed__avatar" src={user?.photoURL}>
						{user?.displayName[0].toUpperCase()}
					</Avatar>

					<div className="feed__input">
						<form>
							<input
								type="text"
								value={input}
								onChange={(e) => setInput(e.target.value)}
								placeholder="Start a post"
							/>
							<button type="submit" onClick={sendPost}>
								Send
							</button>
						</form>
					</div>
				</div>

				<div className="feed__inputOptions">
					<InputOption Icon={ImageIcon} title="Media" color="#70b5f9" />
					<InputOption Icon={CalendarMonthIcon} title="Event" color="#e7a33e" />
					<InputOption
						Icon={ViewDayIcon}
						title="Write article"
						color="#7fc15e"
					/>
				</div>
			</div>

			<FlipMove className="flip__move">
				{posts.map(({ id, data: { name, description, message, photoURL } }) => {
					return (
						<Post
							key={id}
							name={name}
							description={description}
							message={message}
							photoURL={photoURL}
						/>
					);
				})}
			</FlipMove>
		</div>
	);
};

export default Feed;
