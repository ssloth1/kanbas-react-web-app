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
		addAssignment(state, action: PayloadAction<Assignment>) {
			console.log('Reducer: Adding assignment', action.payload);
			state.assignments.push(action.payload);
			console.log('Reducer: Updated assignments', state.assignments);
		},
		deleteAssignment(state, action: PayloadAction<string>) {
			state.assignments = state.assignments.filter(assignment => assignment._id !== action.payload);
			console.log('Reducer: Updated assignments after deletion', state.assignments);
		},
		updateAssignment(state, action: PayloadAction<Assignment>) {
			const index = state.assignments.findIndex(assignment => assignment._id === action.payload._id);
			if (index !== -1) {
				state.assignments[index] = action.payload;
				console.log('Reducer: Updated assignment', state.assignments[index]);
			}
		},
	},
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
