
import { default as Schema } from './dist-pbjs/todo.js';
import { promises as fsp } from 'fs';

const todosBin = await fsp.readFile(process.argv[2]);

const todos = Schema.Todos.decode(todosBin);

console.log(Schema.Todos.toObject(todos).todos);
