import * as React from 'react'
import { gql, useMutation } from 'urql'
import TodoFormControl from './todo-form-control'
import {CreateTodoItemMutation} from "../../../generated/api";

const CreateTodoList = gql`
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
  }
`

export function TodoFormRequest() {
  const [, createTodoList] = useMutation<CreateTodoItemMutation>(CreateTodoList)

  const handleSubmit = async (data: CreateTodoListRequest): Promise<CreateTodoListResponse> => {
    console.log('handleSubmit', data)
    const callResult = await createTodoList({ input: { ...data } })

    if (callResult.error) {
      throw new Error(callResult.error.message)
    }

    return callResult.data?.createTodo as CreateTodoListResponse
  }

  return <TodoFormControl onSubmit={handleSubmit} />
}

export function TodoForm() {
  return <TodoFormRequest />
}
