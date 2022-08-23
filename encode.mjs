
import { default as Schema } from './todo_pb.js';
import { promises as fsp } from 'fs';

// console.log(Schema);

const todos = new Schema.Todos();

let todo = new Schema.Todo();
todo.setId(1);
todo.setTitle("Buy cheese");
todo.setBody("PIZZA NIGHT");
todo.setPrecedence(Schema.Precedence.PRECEDENCE_HIGH);
todos.addTodos(todo);

todo = new Schema.Todo();
todo.setId(2);
todo.setTitle("Buy sauce");
todo.setBody("PIZZA NIGHT");
todo.setPrecedence(Schema.Precedence.PRECEDENCE_HIGH);
todos.addTodos(todo);

todo = new Schema.Todo();
todo.setId(3);
todo.setTitle("Buy Spinach");
todo.setBody("PIZZA NIGHT");
todo.setPrecedence(Schema.Precedence.PRECEDENCE_HIGH);
todos.addTodos(todo);

todo = new Schema.Todo();
todo.setId(4);
todo.setTitle("Buy ham");
todo.setBody("PIZZA NIGHT");
todo.setPrecedence(Schema.Precedence.PRECEDENCE_HIGH);
todos.addTodos(todo);

todo = new Schema.Todo();
todo.setId(5);
todo.setTitle("Buy olives");
todo.setBody("PIZZA NIGHT");
todo.setPrecedence(Schema.Precedence.PRECEDENCE_HIGH);
todos.addTodos(todo);

console.log(todos.toObject());

await fsp.writeFile('todos.bin', todos.serializeBinary());
