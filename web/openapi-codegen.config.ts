import {
  generateSchemaTypes,
  generateReactQueryComponents,
} from "@openapi-codegen/typescript";
import { defineConfig } from "@openapi-codegen/cli";
export default defineConfig({
  myApi: {
    from: {
      source: "url",
      url: "http://localhost:8080/q/openapi",
    },
    outputDir: "generated",
    to: async (context) => {
      const filenamePrefix = "myApi";
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      });
      await generateReactQueryComponents(context, {
        filenamePrefix,
        schemasFiles,
      });
    },
  },
});
