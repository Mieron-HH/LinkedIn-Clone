import { configureStore } from "@reduxjs/toolkit";

// REDUCERS
import UserSlice from "./slices/user-slice";

export default configureStore({
	reducer: {
		user: UserSlice,
	},
});
