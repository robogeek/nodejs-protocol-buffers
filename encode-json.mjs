import { promises as fsp } from 'fs';

const PRECEDENCE_HIGH = 3;
const todos = [];

todos.push({
    id: 1,
    title: "Buy Cheese",
    body: "PIZZA NIGHT",
    precedence: PRECEDENCE_HIGH
});

todos.push({
    id: 2,
    title: "Buy sauce",
    body: "PIZZA NIGHT",
    precedence: PRECEDENCE_HIGH
});

todos.push({
    id: 3,
    title: "Buy Spinach",
    body: "PIZZA NIGHT",
    precedence: PRECEDENCE_HIGH
});

todos.push({
    id: 4,
    title: "Buy ham",
    body: "PIZZA NIGHT",
    precedence: PRECEDENCE_HIGH
});

todos.push({
    id: 5,
    title: "Buy olives",
    body: "PIZZA NIGHT",
    precedence: PRECEDENCE_HIGH
});

await fsp.writeFile('todos.json', JSON.stringify(todos));
