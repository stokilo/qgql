import * as React from 'react'
import { useForm } from 'react-hook-form'
import TodoFormView from './todo-form-view'
import {TodoListItemCreationResult, TodoListItemInput} from "../../../generated/api";

type Props = {
  onSubmit: (data: TodoListItemInput) => Promise<TodoListItemCreationResult | undefined>
}

export default function TodoFormControl({ onSubmit }: Props) {
  const form = useForm<TodoListItemInput>({
    mode: 'onSubmit',
    defaultValues: {
        headline: 'default-headline'
    }
  })

  const handleSubmit = async (data: TodoListItemInput) => {
    console.log('submit')
    try {
      const result = await onSubmit(data)
      if (result) {
        if (!result.success) {
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
