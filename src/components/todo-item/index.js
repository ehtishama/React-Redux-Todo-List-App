import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Checkbox,
    Typography,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../store/todoSlice";

const TodoItem = ({ todo }) => {
    
    const [toggleComplete, setToggleComplete] = useState(false)
    const dispatch = useDispatch()

    function handleToggleCompleted() {
        dispatch(actions.toggleComplete({id: todo.id, completed: !todo.completed}))
    }

    function handleDeleteClick()
    {
        dispatch(actions.remove({id: todo.id}))
    }

    return (
        <Box mt={2}>
            <Card variant="outlined">
                <CardContent>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Checkbox checked={todo.completed} onChange={ handleToggleCompleted }/>
                        <Typography>{todo.value}</Typography>
                        <Button variant="outlined" color="secondary" onClick={handleDeleteClick}>Delete</Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default TodoItem;
