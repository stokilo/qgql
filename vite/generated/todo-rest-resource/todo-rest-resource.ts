/**
 * Generated by orval v6.14.3 🍺
 * Do not edit manually.
 * qgql API
 * OpenAPI spec version: 1.0.0-SNAPSHOT
 */
import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'
import {
  useQuery,
  useMutation
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey
} from '@tanstack/react-query'
import type {
  TodoList
} from '../api.schemas'


export const getTodo = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<TodoList[]>> => {
    return axios.get(
      `/todo`,options
    );
  }


export const getGetTodoQueryKey = () => [`/todo`] as const;
  

    
export const getGetTodoQueryOptions = <TData = Awaited<ReturnType<typeof getTodo>>, TError = AxiosError<unknown>>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getTodo>>, TError, TData>, axios?: AxiosRequestConfig}
): UseQueryOptions<Awaited<ReturnType<typeof getTodo>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetTodoQueryKey();

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getTodo>>> = ({ signal }) => getTodo({ signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type GetTodoQueryResult = NonNullable<Awaited<ReturnType<typeof getTodo>>>
export type GetTodoQueryError = AxiosError<unknown>

export const useGetTodo = <TData = Awaited<ReturnType<typeof getTodo>>, TError = AxiosError<unknown>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getTodo>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetTodoQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
}

export const putTodo = (
    todoList: TodoList, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<TodoList>> => {
    return axios.put(
      `/todo`,
      todoList,options
    );
  }



export const getPutTodoMutationOptions = <TError = AxiosError<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putTodo>>, TError,{data: TodoList}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof putTodo>>, TError,{data: TodoList}, TContext> => {
 const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putTodo>>, {data: TodoList}> = (props) => {
          const {data} = props ?? {};

          return  putTodo(data,axiosOptions)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PutTodoMutationResult = NonNullable<Awaited<ReturnType<typeof putTodo>>>
    export type PutTodoMutationBody = TodoList
    export type PutTodoMutationError = AxiosError<unknown>

    export const usePutTodo = <TError = AxiosError<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putTodo>>, TError,{data: TodoList}, TContext>, axios?: AxiosRequestConfig}
) => {
    
      const mutationOptions = getPutTodoMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    export const postTodo = (
    todoList: TodoList, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<TodoList>> => {
    return axios.post(
      `/todo`,
      todoList,options
    );
  }



export const getPostTodoMutationOptions = <TError = AxiosError<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postTodo>>, TError,{data: TodoList}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof postTodo>>, TError,{data: TodoList}, TContext> => {
 const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postTodo>>, {data: TodoList}> = (props) => {
          const {data} = props ?? {};

          return  postTodo(data,axiosOptions)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PostTodoMutationResult = NonNullable<Awaited<ReturnType<typeof postTodo>>>
    export type PostTodoMutationBody = TodoList
    export type PostTodoMutationError = AxiosError<unknown>

    export const usePostTodo = <TError = AxiosError<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postTodo>>, TError,{data: TodoList}, TContext>, axios?: AxiosRequestConfig}
) => {
    
      const mutationOptions = getPostTodoMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    