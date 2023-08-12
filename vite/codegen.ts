import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'http://localhost:8080/graphql/schema.graphql',
    documents: ['src/**/*.tsx'],
    generates: {
        './src/gql/': {
            preset: 'client'
        }
    }
}

export default config
