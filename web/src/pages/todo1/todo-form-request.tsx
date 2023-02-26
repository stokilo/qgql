import * as React from 'react'
import { gql, useMutation } from 'urql'
import TodoFormControl from './todo-form-control'
import {CreateTodoItemMutation, TodoListItemCreationResult, TodoListItemInput} from "../../../generated/api";


export function TodoFormRequest() {
  const [, createTodoList] = useMutation<TodoListItemCreationResult>(gql`
  mutation CreateTodoItem($input: TodoListItemInput!) {
    createTodoItem(todoListItem: $input) {
      success
      error
      todoListItem {
         id
         headline
         body
      }
#      fieldErrors {
#        path
#        message
#      }
    }
  }`)

  const handleSubmit = async (data: TodoListItemInput): Promise<TodoListItemCreationResult> => {
    console.log('handleSubmit', data)
    const callResult = await createTodoList({ input: { ...data } })

    if (callResult.error) {
      throw new Error(callResult.error.message)
    }

    return callResult.data!
  }

  return <TodoFormControl onSubmit={handleSubmit} />
}

export function TodoForm() {
  return <TodoFormRequest />
}
