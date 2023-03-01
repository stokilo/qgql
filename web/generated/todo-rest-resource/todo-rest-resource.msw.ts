/**
 * Generated by orval v6.12.0 🍺
 * Do not edit manually.
 * qgql API
 * OpenAPI spec version: 1.0.0-SNAPSHOT
 */
import {
  rest
} from 'msw'
import {
  faker
} from '@faker-js/faker'

export const getGetTodoMock = () => (Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.helpers.arrayElement([faker.datatype.number({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.random.word(), undefined]), items: faker.helpers.arrayElement([Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.helpers.arrayElement([faker.datatype.number({min: undefined, max: undefined}), undefined]), headline: faker.helpers.arrayElement([faker.random.word(), undefined]), body: faker.helpers.arrayElement([faker.random.word(), undefined])})), undefined])})))

export const getPostTodoMock = () => ({id: faker.helpers.arrayElement([faker.datatype.number({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.random.word(), undefined]), items: faker.helpers.arrayElement([Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.helpers.arrayElement([faker.datatype.number({min: undefined, max: undefined}), undefined]), headline: faker.helpers.arrayElement([faker.random.word(), undefined]), body: faker.helpers.arrayElement([faker.random.word(), undefined])})), undefined])})

export const getTodoRestResourceMSW = () => [
rest.get('*/todo', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetTodoMock()),
        )
      }),rest.post('*/todo', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getPostTodoMock()),
        )
      }),]
