import * as React from 'react'
import TodoFormControl from './todo-form-control'

export function TodoFormRequest() {

    const handleSubmit = async (data: any) => {

    }
  // const handleSubmit = async (data: TodoListInput): Promise<TodoListItemCreationResult> => {
  //   console.log('handleSubmit', data)
  //   // const callResult = await createTodoList({ input: { ...data } })
  //
  //   if (callResult.error) {
  //     throw new Error(callResult.error.message)
  //   }
  //
  //   return callResult.data!
  // }

  return <TodoFormControl onSubmit={handleSubmit} />
}

export function TodoForm() {
  return <TodoFormRequest />
}
