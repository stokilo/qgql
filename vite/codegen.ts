import {CodegenConfig} from '@graphql-codegen/cli'

const config: CodegenConfig = {
    overwrite: true,
    schema: 'http://127.0.0.1:8080/graphql/schema.graphql',
    documents: ['src/**/*.tsx'],
    generates: {
        './src/gql/api.ts': {
            plugins: ['typescript', 'typescript-operations'],
        }
    },
    hooks: {
        afterOneFileWrite: ['prettier --write']
    }
}

export default config
