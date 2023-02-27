/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TodoList } from './TodoList';

export type TodoItem = {
    id?: number;
    headline?: string;
    body?: string;
    todoList?: TodoList;
};

