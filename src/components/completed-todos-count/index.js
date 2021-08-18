import { Typography } from '@material-ui/core';
import React from 'react';

const CompletedTodosCount = () => {
    return <Typography variant="h6" gutterBottom align="center" style={{marginTop: "10px"}}>
        Completed Todos: 0
    </Typography>
}

export default CompletedTodosCount;