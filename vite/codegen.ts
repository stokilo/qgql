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
        './src/gql/api.d.ts': {
            plugins: ['typescript', 'typescript-operations']
        }
    },
    hooks: {
        afterOneFileWrite: ['prettier --write']
    }
}

export default config
