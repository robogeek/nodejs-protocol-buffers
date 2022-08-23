
import { default as PBJS } from './dist-pbjs/todo.js';
import { default as PB } from './todo_pb.js';

import { bench, run } from "mitata";

///////// JSON 

const todosArray = [];

for (let id = 1; id < 1000; id++) {
    todosArray.push({
        id: id,
        title: `Buy cheese ${id}`,
        body: `PIZZA NIGHT ${id}`,
        precedence: 3
    });
}

bench('encode-JSON', () => {
    let todosJSON = JSON.stringify(todosArray);
});

const todosJSONencoded = JSON.stringify(todosArray);

bench('decode-JSON', () => {
    const todosDecoded = JSON.parse(todosJSONencoded);
});

////////// Protocol Buffers

const todosPB = new PB.Todos();

for (let id = 1; id < 1000; id++) {
    let todo = new PB.Todo();
    todo.setId(id);
    todo.setTitle(`Buy cheese ${id}`);
    todo.setBody(`PIZZA NIGHT ${id}`);
    todo.setPrecedence(PB.Precedence.PRECEDENCE_HIGH);
    todosPB.addTodos(todo);
}

bench('encode-PB', () => {
    let todosBin = todosPB.serializeBinary();
});

let todosPBEncoded = todosPB.serializeBinary();

bench('decode-PB', () => {
    const todosDecoded = PB.Todos.deserializeBinary(todosPBEncoded);
});

////////////// protobuf.js

const todosPBJS = new PBJS.Todos();

for (let id = 1; id < 1000; id++) {
    todosPBJS.todos.push(new PBJS.Todo({
        id: id,
        title: `Buy cheese ${id}`,
        body: `PIZZA NIGHT ${id}`,
        precedence: 3
    }));
}

bench('encode-PBJS', () => {
    const todosPBJSBin = PBJS.Todos.encode(todosPBJS).finish();
});

const todosPBJSEncoded = PBJS.Todos.encode(todosPBJS).finish();

bench('decode-PBJS', () => {
    const todosDecoded = PBJS.Todos.decode(todosPBJSEncoded);
});

//////// RUN

try {
    await run({
        percentiles: false
    });
} catch (err) { console.error(err); }

