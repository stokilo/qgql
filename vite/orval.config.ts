import { defineConfig } from 'orval';

export default defineConfig({
    todo: {
        output: {
            mode: 'tags-split',
            target: 'generated/api.ts',
            // schemas: 'generated/model',
            client: 'react-query',
            mock: true,
        },
        hooks: {
            afterAllFilesWrite: 'prettier --write',
        },
        input: {
            target: './generated/schema.yaml',
        },
    },
});
