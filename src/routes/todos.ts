import { Router } from "express";
import { Todo } from "../models/todo";

let todos: Todo[] = [];
const router = Router();

type RequestBody = { text: string };

router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});

router.post("/add", (req, res, next) => {
    const body = req.body as RequestBody;
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todos.push(newTodo);

    res.status(200).json({ todo: newTodo });
});

router.put("/update/:id", (req, res, next) => {
    const id: string = req.params.id;
    const todosIndex = todos.findIndex((t) => {
        t.id === id;
    });
    if (todosIndex >= 0) {
        todos[todosIndex] = { id: id, text: req.body.text };
        res.status(200).json({ message: "Update successful." });
    } else {
        res.status(404).json({ message: "No such todo with id " + id });
    }
});

router.delete("/update/:id", (req, res, next) => {
    const id: string = req.params.id;
    const todosIndex = todos.findIndex((t) => {
        t.id === id;
    });
    if (todosIndex >= 0) {
        todos = todos.filter((t) => t.id !== id);
        res.status(200).json({ message: "Delete successful." });
    } else {
        res.status(404).json({ message: "No such todo with id " + id });
    }
});

export default router;
