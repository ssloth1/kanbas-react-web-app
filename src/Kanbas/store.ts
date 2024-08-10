// Code: src/Kanbas/store.ts
import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";

const store = configureStore({
	reducer: {
		modulesReducer,
		assignments: assignmentsReducer,
		account: accountReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export default store;