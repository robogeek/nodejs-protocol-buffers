/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * Precedence enum.
 * @exports Precedence
 * @enum {number}
 * @property {number} PRECEDENCE_NONE=0 PRECEDENCE_NONE value
 * @property {number} PRECEDENCE_LOW=1 PRECEDENCE_LOW value
 * @property {number} PRECEDENCE_MEDIUM=2 PRECEDENCE_MEDIUM value
 * @property {number} PRECEDENCE_HIGH=3 PRECEDENCE_HIGH value
 */
export const Precedence = $root.Precedence = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "PRECEDENCE_NONE"] = 0;
    values[valuesById[1] = "PRECEDENCE_LOW"] = 1;
    values[valuesById[2] = "PRECEDENCE_MEDIUM"] = 2;
    values[valuesById[3] = "PRECEDENCE_HIGH"] = 3;
    return values;
})();

export const Todo = $root.Todo = (() => {

    /**
     * Properties of a Todo.
     * @exports ITodo
     * @interface ITodo
     * @property {number|Long|null} [id] Todo id
     * @property {string|null} [title] Todo title
     * @property {string|null} [body] Todo body
     * @property {Precedence|null} [precedence] Todo precedence
     */

    /**
     * Constructs a new Todo.
     * @exports Todo
     * @classdesc Represents a Todo.
     * @implements ITodo
     * @constructor
     * @param {ITodo=} [properties] Properties to set
     */
    function Todo(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Todo id.
     * @member {number|Long} id
     * @memberof Todo
     * @instance
     */
    Todo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Todo title.
     * @member {string} title
     * @memberof Todo
     * @instance
     */
    Todo.prototype.title = "";

    /**
     * Todo body.
     * @member {string} body
     * @memberof Todo
     * @instance
     */
    Todo.prototype.body = "";

    /**
     * Todo precedence.
     * @member {Precedence} precedence
     * @memberof Todo
     * @instance
     */
    Todo.prototype.precedence = 0;

    /**
     * Creates a new Todo instance using the specified properties.
     * @function create
     * @memberof Todo
     * @static
     * @param {ITodo=} [properties] Properties to set
     * @returns {Todo} Todo instance
     */
    Todo.create = function create(properties) {
        return new Todo(properties);
    };

    /**
     * Encodes the specified Todo message. Does not implicitly {@link Todo.verify|verify} messages.
     * @function encode
     * @memberof Todo
     * @static
     * @param {ITodo} message Todo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Todo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        if (message.title != null && Object.hasOwnProperty.call(message, "title"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
        if (message.body != null && Object.hasOwnProperty.call(message, "body"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.body);
        if (message.precedence != null && Object.hasOwnProperty.call(message, "precedence"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.precedence);
        return writer;
    };

    /**
     * Encodes the specified Todo message, length delimited. Does not implicitly {@link Todo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Todo
     * @static
     * @param {ITodo} message Todo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Todo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Todo message from the specified reader or buffer.
     * @function decode
     * @memberof Todo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Todo} Todo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Todo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Todo();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int64();
                    break;
                }
            case 2: {
                    message.title = reader.string();
                    break;
                }
            case 3: {
                    message.body = reader.string();
                    break;
                }
            case 4: {
                    message.precedence = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Todo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Todo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Todo} Todo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Todo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Todo message.
     * @function verify
     * @memberof Todo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Todo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
        if (message.title != null && message.hasOwnProperty("title"))
            if (!$util.isString(message.title))
                return "title: string expected";
        if (message.body != null && message.hasOwnProperty("body"))
            if (!$util.isString(message.body))
                return "body: string expected";
        if (message.precedence != null && message.hasOwnProperty("precedence"))
            switch (message.precedence) {
            default:
                return "precedence: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        return null;
    };

    /**
     * Creates a Todo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Todo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Todo} Todo
     */
    Todo.fromObject = function fromObject(object) {
        if (object instanceof $root.Todo)
            return object;
        let message = new $root.Todo();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        if (object.title != null)
            message.title = String(object.title);
        if (object.body != null)
            message.body = String(object.body);
        switch (object.precedence) {
        case "PRECEDENCE_NONE":
        case 0:
            message.precedence = 0;
            break;
        case "PRECEDENCE_LOW":
        case 1:
            message.precedence = 1;
            break;
        case "PRECEDENCE_MEDIUM":
        case 2:
            message.precedence = 2;
            break;
        case "PRECEDENCE_HIGH":
        case 3:
            message.precedence = 3;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a Todo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Todo
     * @static
     * @param {Todo} message Todo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Todo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            object.title = "";
            object.body = "";
            object.precedence = options.enums === String ? "PRECEDENCE_NONE" : 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        if (message.title != null && message.hasOwnProperty("title"))
            object.title = message.title;
        if (message.body != null && message.hasOwnProperty("body"))
            object.body = message.body;
        if (message.precedence != null && message.hasOwnProperty("precedence"))
            object.precedence = options.enums === String ? $root.Precedence[message.precedence] : message.precedence;
        return object;
    };

    /**
     * Converts this Todo to JSON.
     * @function toJSON
     * @memberof Todo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Todo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Todo
     * @function getTypeUrl
     * @memberof Todo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Todo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Todo";
    };

    return Todo;
})();

export const Todos = $root.Todos = (() => {

    /**
     * Properties of a Todos.
     * @exports ITodos
     * @interface ITodos
     * @property {Array.<ITodo>|null} [todos] Todos todos
     */

    /**
     * Constructs a new Todos.
     * @exports Todos
     * @classdesc Represents a Todos.
     * @implements ITodos
     * @constructor
     * @param {ITodos=} [properties] Properties to set
     */
    function Todos(properties) {
        this.todos = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Todos todos.
     * @member {Array.<ITodo>} todos
     * @memberof Todos
     * @instance
     */
    Todos.prototype.todos = $util.emptyArray;

    /**
     * Creates a new Todos instance using the specified properties.
     * @function create
     * @memberof Todos
     * @static
     * @param {ITodos=} [properties] Properties to set
     * @returns {Todos} Todos instance
     */
    Todos.create = function create(properties) {
        return new Todos(properties);
    };

    /**
     * Encodes the specified Todos message. Does not implicitly {@link Todos.verify|verify} messages.
     * @function encode
     * @memberof Todos
     * @static
     * @param {ITodos} message Todos message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Todos.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.todos != null && message.todos.length)
            for (let i = 0; i < message.todos.length; ++i)
                $root.Todo.encode(message.todos[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Todos message, length delimited. Does not implicitly {@link Todos.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Todos
     * @static
     * @param {ITodos} message Todos message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Todos.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Todos message from the specified reader or buffer.
     * @function decode
     * @memberof Todos
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Todos} Todos
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Todos.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Todos();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.todos && message.todos.length))
                        message.todos = [];
                    message.todos.push($root.Todo.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Todos message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Todos
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Todos} Todos
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Todos.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Todos message.
     * @function verify
     * @memberof Todos
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Todos.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.todos != null && message.hasOwnProperty("todos")) {
            if (!Array.isArray(message.todos))
                return "todos: array expected";
            for (let i = 0; i < message.todos.length; ++i) {
                let error = $root.Todo.verify(message.todos[i]);
                if (error)
                    return "todos." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Todos message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Todos
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Todos} Todos
     */
    Todos.fromObject = function fromObject(object) {
        if (object instanceof $root.Todos)
            return object;
        let message = new $root.Todos();
        if (object.todos) {
            if (!Array.isArray(object.todos))
                throw TypeError(".Todos.todos: array expected");
            message.todos = [];
            for (let i = 0; i < object.todos.length; ++i) {
                if (typeof object.todos[i] !== "object")
                    throw TypeError(".Todos.todos: object expected");
                message.todos[i] = $root.Todo.fromObject(object.todos[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Todos message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Todos
     * @static
     * @param {Todos} message Todos
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Todos.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.todos = [];
        if (message.todos && message.todos.length) {
            object.todos = [];
            for (let j = 0; j < message.todos.length; ++j)
                object.todos[j] = $root.Todo.toObject(message.todos[j], options);
        }
        return object;
    };

    /**
     * Converts this Todos to JSON.
     * @function toJSON
     * @memberof Todos
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Todos.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Todos
     * @function getTypeUrl
     * @memberof Todos
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Todos.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Todos";
    };

    return Todos;
})();

export { $root as default };
