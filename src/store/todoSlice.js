const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
    { id: 1, completed: false, value: "I'm a sample Todo. Delete me." },
];

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action) => {
            const newTodo = {
                id: Date.now(),
                completed: false,
                value: action.payload,
            };
            state.push(newTodo);
        },
        remove: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },
        toggleComplete: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload.id);
            todo.completed = action.payload.completed;
        },
    },
});

export const actions = todoSlice.actions;
