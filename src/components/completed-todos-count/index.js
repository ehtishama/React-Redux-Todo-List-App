import { Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

const CompletedTodosCount = () => {

    const count = useSelector(state => state.todos.filter(todo => todo.completed === true).length)

    return <Typography variant="h6" gutterBottom align="left" style={{marginTop: "12px"}}>
        Completed Todos: {count}
    </Typography>
}

export default CompletedTodosCount;