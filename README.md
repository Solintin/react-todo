# React ToDo

The classic teaching exercise!

- List of todos
- Add/edit/delete/mark-done/mark-undo for each todo
- Persists data in Mongo database using a Node server

## To run

```
node server.js
```

and

```
npm start
```

## Components

```
   +---------------------------------+
   | App                             |
   |  +---------------------------+  |
   |  | TodoList                  |  |
   |  |  +---------------------+  |  |
   |  |  | Todo #1             |  |  |
   |  |  +---------------------+  |  |
   |  |  | Todo #2             |  |  |
   |  |  +---------------------+  |  |
   |  |  | EditTodoForm #3     |  |  |
   |  |  +---------------------+  |  |
   |  |  | Todo #4             |  |  |
   |  |  +---------------------+  |  |
   |  +---------------------------+  |
   |                                 |
   |  +---------------------------+  |
   |  | NewTodoForm               |  |
   |  +---------------------------+  |
   +---------------------------------+
```