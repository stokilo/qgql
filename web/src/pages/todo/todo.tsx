import * as React from 'react'
import { useEffect } from 'react'
import { gql, useQuery } from 'urql'
import {FetchFilmsQuery} from "../../../generated/api";

export default function TodoPage() {
  const [resultGql, queryTrigger] = useQuery<FetchFilmsQuery>({
    query: gql`
      query FetchFilms {
        film(filmId: [1,2,3,4]) {
          director
        }
      }
    `,
    pause: true,
  })
  const { data, fetching, error } = resultGql

  useEffect(() => {
    queryTrigger({
      requestPolicy: 'network-only',
    })
  }, [])

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  return (
    <>
     Director  {data?.film?.director}
    </>
  )
}
