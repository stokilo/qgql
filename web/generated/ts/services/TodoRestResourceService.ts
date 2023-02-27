/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TodoList } from '../models/TodoList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TodoRestResourceService {

    /**
     * @returns TodoList OK
     * @throws ApiError
     */
    public static getTodo(): CancelablePromise<Array<TodoList>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/todo',
        });
    }

}
