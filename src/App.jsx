import { useEffect } from "react";
import "./_App.scss";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

// ACTIONS
import { login, logout } from "./slices/user-slice";

// COMPONENTS
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";

// // GLOBAL VARIABLES
import { auth } from "./firebase";

function App() {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.user);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// user logged in
				dispatch(
					login({
						email: user.email,
						uid: user.uid,
						displayName: user.displayName,
						photoURL: user.photoURL,
					})
				);
			} else {
				// user is logged out
				dispatch(logout());
			}
		});
	}, []);

	return (
		<div className="app">
			<Header />

			{!user ? (
				<Login />
			) : (
				<div className="app__body">
					<Sidebar />

					<Feed />

					<Widgets />
				</div>
			)}
		</div>
	);
}

export default App;
