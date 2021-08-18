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

const TodoItem = () => {
    return (
        <Box mt={2}>
            <Card variant="outlined">
                <CardContent>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Checkbox />
                        <Typography>Learn and use Material UI.</Typography>
                        <Button variant="outlined" color="secondary">Delete</Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default TodoItem;
