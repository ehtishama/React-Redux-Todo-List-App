import { Box, Button, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../store/todoSlice";

const useStyles = makeStyles(theme => ({
    todoForm: {
        marginBottom: '10px'
    }
}))

const NewTodoForm = () => {

    const dispatch = useDispatch()
    const classes = useStyles()
    const [todoInput, setTodoInput] = useState("")

    function handleTodoInputChange(e) {
        setTodoInput(e.target.value)
    }

    function handleTodoFormSubmit(e) {
        e.preventDefault()
        dispatch(actions.add(todoInput))

        setTodoInput('')

    }

    return (
        <Box mt={2}>
            <form action="" onSubmit={handleTodoFormSubmit}>
                <TextField
                    className={classes.todoForm}
                    variant="outlined"
                    label="What you want to do today?"
                    required
                    fullWidth
                    gutterBottom
                    onChange={handleTodoInputChange}
                    value={todoInput}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                >
                    Add
                </Button>
            </form>
        </Box>
    );
};

export default NewTodoForm;
