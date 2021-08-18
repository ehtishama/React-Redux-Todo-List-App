import "./App.css";
import { Container, CssBaseline } from "@material-ui/core";
import NewTodoForm from "./components/new-todo-form";
import TodoItemsList from "./components/todo-items-list";
import CompletedTodosCount from "./components/completed-todos-count";

function App() {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                <NewTodoForm />
                <TodoItemsList />
                <CompletedTodosCount />
            </Container>
        </>
    );
}

export default App;
