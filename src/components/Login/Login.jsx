import { useState } from "react";
import "./_login.scss";
import { useDispatch } from "react-redux";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";

// ACTIONS
import { login } from "../../slices/user-slice";

// GLOBAL VARIABLES
import { auth } from "../../firebase";

const Login = () => {
	const dispatch = useDispatch();

	const [name, setName] = useState("");
	const [profilePic, setProfilePic] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const loginToApp = (e) => {
		e.preventDefault();

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;

				dispatch(
					login({
						email: user.email,
						uid: user.uid,
						displayName: user.displayName,
						photoURL: user.profilePic,
					})
				);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorMessage);
			});
	};

	const register = () => {
		if (!name) return alert("Please enter a full name");

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed up
				const user = userCredential.user;

				return updateProfile(user, {
					displayName: name,
					photoURL: profilePic,
				}).then(() => user);
			})
			.then((user) => {
				console.log("about to dispatch");
				dispatch(
					login({
						email: user.email,
						uid: user.uid,
						displayName: name,
						photoURL: profilePic,
					})
				);
				console.log("finished dispatching");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert("Incorrect credentials");
			});
	};

	return (
		<div className="login__component">
			<img src="linkedin-expanded-logo.png" alt="" />

			<form>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Full name (required if registering)"
				/>
				<input
					type="text"
					value={profilePic}
					onChange={(e) => setProfilePic(e.target.value)}
					placeholder="Profile pic URL (optional)"
				/>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
				/>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
				/>

				<button type="submit" onClick={loginToApp}>
					Sign In
				</button>
			</form>

			<p>
				Not a member?{" "}
				<span className="login__register" onClick={register}>
					Register Now
				</span>
			</p>
		</div>
	);
};

export default Login;
