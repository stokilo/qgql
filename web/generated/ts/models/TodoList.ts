/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TodoItem } from './TodoItem';

export type TodoList = {
    id?: number;
    name?: string;
    items?: Array<TodoItem>;
};

