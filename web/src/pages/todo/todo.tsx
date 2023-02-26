import * as React from 'react'
// import { useEffect } from 'react'
// import {gql, useMutation, useQuery} from 'urql'
// import {
//   AllTodosQuery,
//   CreateToDoListMutation,
//   TodoListItemCreationResult,
//   TodoListItemInput
// } from "../../../generated/api";

//
// const CreateToDoList = gql`
//   mutation CreateToDoList($todoListItem: TodoListItemInput!) {
//     createTodoItem(todoListItem: $todoListItem) {
//       success
//    }
//   }
// `

export default function TodoPage() {
  // const [, createTodoList] = useMutation<CreateToDoListMutation>(CreateToDoList)
  //
  // const handleSubmit = async (data: TodoListItemInput): Promise<TodoListItemCreationResult> => {
  //   console.log('handleSubmit', data)
  //   const callResult = await createTodoList({ input: { ...data } })
  //
  //   if (callResult.error) {
  //     throw new Error(callResult.error.message)
  //   }
  //
  //   return callResult.data?.createTodoItem!;
  // }


  // const [resultGql, queryTrigger] = useQuery<AllTodosQuery>({
  //   query: gql`
  //     query AllTodos {
  //       allTodos {
  //         name,
  //         items {
  //           text
  //         }
  //       }
  //     }
  //   `,
  //   pause: true,
  // })
  // const { data, fetching, error } = resultGql
  //
  // useEffect(() => {
  //   queryTrigger({
  //     requestPolicy: 'network-only',
  // // //   })
  // // // }, [])
  // //
  // // if (fetching) return <p>Loading...</p>
  // if (error) return <p>Oh no... {error.message}</p>

  return (
    <>
     {/*Director  {data?.allTodos?.map(e => e?.items?.map(i => i?.text))}*/}
    </>
  )
}
