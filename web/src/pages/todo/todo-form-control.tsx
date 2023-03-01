import * as React from 'react'
import { useForm } from 'react-hook-form'
import TodoFormView from './todo-form-view'
import {TodoList} from "../../../generated/api";
import {useMutation} from "@tanstack/react-query";
import {postTodo, putTodo} from "../../../generated/todo-rest-resource/todo-rest-resource";

export default function TodoFormControl() {
  const form = useForm<TodoList>({
    mode: 'onSubmit',
    defaultValues: {
      name: ""
    }
  })

  const mutation = useMutation(putTodo, {
    onSuccess: (data) => {
      console.dir(data);
      console.info("onSuccess mutation")
      form.setError("name", {type: "server", message: "something went wrong"});
    },
    onError: () => {
      console.info("onError mutation")
      form.setError("name", {type: "server", message: "something went wrong"});
    }
  })

  const handleSubmit = async (data: TodoList) => {
      mutation.mutate({...data})
  }

  return <TodoFormView form={form} onSubmit={handleSubmit} />
}
