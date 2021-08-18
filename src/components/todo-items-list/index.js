import { Box } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../todo-item";

const TodoItemsList = () => {
    const todos = useSelector((state) => state.todos);

    return (
        <Box>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </Box>
    );
};
export default TodoItemsList;
