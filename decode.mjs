

import { default as Schema } from './todo_pb.js';
import { promises as fsp } from 'fs';

const todosBin = await fsp.readFile(process.argv[2]);
const todos = Schema.Todos.deserializeBinary(todosBin);


console.log(todos);
console.log(todos.toObject());