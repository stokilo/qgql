import * as React from 'react'

// const GetAllTodoItems = gql`
//     query GetAllTodoItems{
//         allTodoItems {
//             id
//             headline
//         }
//     }
// `
//
// const CreateTodo = gql`
//     mutation CreateTodoMutation($todoItemInput: TodoItemInput!){
//         createTodoItem(item: $todoItemInput) {
//             id
//             headline
//         }
//     }
// `
//

export default function TodoPage() {
    // const [result] = useQuery<GetAllTodoItemsQuery>({
    //     query: GetAllTodoItems
    // });
    //
    // const {data} = result;
    // const [_, createTodo] = useMutation(CreateTodo);
    //
    // const onClick = () => {
    //     const input: TodoItemInput= {
    //         id: 1,
    //         headline: 'h',
    //         body: 'b'
    //     };
    //     createTodo({ todoItemInput: input}).then(result => {
    //         console.dir(result)
    //         if (result.error) {
    //             console.error('Error:', result.error);
    //         }
    //     })
    // }

    return (
        <>
            <h1>MyTodo list</h1>
            {/*<button onClick={onClick}>Click</button>*/}
            {/*if (fetching) return <p>Loading...</p>*/}
            {/*<ul>*/}
            {/*    {data?.allTodoItems!.map(todo => (*/}
            {/*        <li key={todo?.id}>{todo?.headline}</li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
        </>

    )
}
