import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    overwrite: true,
    schema: 'http://localhost:8080/graphql/schema.graphql',
    documents: ['src/**/*.tsx'],
    generates: {
        './src/gql/': {
            plugins: ['typescript', 'typescript-operations'],
            preset: 'client'
        }
    },
    hooks: {
        afterOneFileWrite: ['prettier --write']
    }
}

export default config
