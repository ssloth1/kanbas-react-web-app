// kanbas-react-web-app/Kanbas/Courses/Assignments/reducer.tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as db from '../../Database';

type Assignment = {
	_id: string;
	title: string;
	course: string;
	description?: string;
	points?: number;
	dueDate?: string;
	availableFrom?: string;
	availableUntil?: string;
};

type AssignmentsState = {
	assignments: Assignment[];
};

const initialState: AssignmentsState = {
	assignments: db.assignments,
};

const assignmentsSlice = createSlice({
	name: 'assignments',
	initialState,
	reducers: {
		setAssignments(state, action: PayloadAction<Assignment[]>) {
			state.assignments = action.payload;
		},
		addAssignment(state, action: PayloadAction<Assignment>) {
			state.assignments.push(action.payload);
		},
		deleteAssignment(state, action: PayloadAction<string>) {
			state.assignments = state.assignments.filter(assignment => assignment._id !== action.payload);
		},
		updateAssignment(state, action: PayloadAction<Assignment>) {
			const index = state.assignments.findIndex(assignment => assignment._id === action.payload._id);
			if (index !== -1) {
				state.assignments[index] = action.payload;
			}
		},
	},
});

export const { setAssignments, addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
