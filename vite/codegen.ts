import {CodegenConfig} from '@graphql-codegen/cli'

const config: CodegenConfig = {
    overwrite: true,
    schema: [
        {'http://localhost:8080/graphql/schema.graphql': {
            method: 'GET'
        }
        }],
    documents: ['src/**/*.tsx'],
    generates: {
        './src/gql/api.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-urql']
        }
    },
    hooks: {
        afterOneFileWrite: ['prettier --write']
    }
}

export default config
