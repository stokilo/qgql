import * as React from 'react'
import { useForm } from 'react-hook-form'
import TodoFormView from './todo-form-view'
import {TodoList} from "../../../generated/ts";

type Props = {
  onSubmit: (data: TodoList) => Promise<TodoList>
}

export default function TodoFormControl({ onSubmit }: Props) {
  const form = useForm<TodoList>({
    mode: 'onSubmit',
    defaultValues: {
      name: ""
    }
  })

  const handleSubmit = async (data: TodoList) => {
    console.log('submit')
    try {
      const result = await onSubmit(data)
      if (result) {
        if (!result) {
            // form.setError(result.error)
          // result.forEach((e) => {
          //   // @ts-ignore
          //   form.setError(e!.path, {
          //     message: e!.message,
          //   })
          // })
        }
      }
    } catch (e) {
      console.dir(e)
    }
  }

  return <TodoFormView form={form} onSubmit={handleSubmit} />
}
