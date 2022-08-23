
import { default as Schema } from './dist-pbjs/todo.js';
import { promises as fsp } from 'fs';

const todos = new Schema.Todos();

todos.todos.push(new Schema.Todo({
    id: 1,
    title: "Buy Cheese",
    body: "PIZZA NIGHT",
    precedence: Schema.Precedence.PRECEDENCE_HIGH
}));

todos.todos.push(new Schema.Todo({
    id: 2,
    title: "Buy sauce",
    body: "PIZZA NIGHT",
    precedence: Schema.Precedence.PRECEDENCE_HIGH
}));

todos.todos.push(new Schema.Todo({
    id: 3,
    title: "Buy Spinach",
    body: "PIZZA NIGHT",
    precedence: Schema.Precedence.PRECEDENCE_HIGH
}));

todos.todos.push(new Schema.Todo({
    id: 4,
    title: "Buy ham",
    body: "PIZZA NIGHT",
    precedence: Schema.Precedence.PRECEDENCE_HIGH
}));

todos.todos.push(new Schema.Todo({
    id: 5,
    title: "Buy olives",
    body: "PIZZA NIGHT",
    precedence: Schema.Precedence.PRECEDENCE_HIGH
}));

console.log(Schema.Todos.toObject(todos));

await fsp.writeFile('todos-protobufjs.bin', Schema.Todos.encode(todos).finish());
