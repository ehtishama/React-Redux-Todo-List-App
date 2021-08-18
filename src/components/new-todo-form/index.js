import { Box, Button, createStyles, makeStyles, TextField } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme => ({
    todoForm: {
        marginBottom: '10px'
    }
}))

const NewTodoForm = () => {

    const classes = useStyles()

    return (
        <Box mt={2}>
            <form action="">
                <TextField
                    className={classes.todoForm}
                    variant="outlined"
                    label="What's on your mind?"
                    required
                    fullWidth
                    gutterBottom
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
