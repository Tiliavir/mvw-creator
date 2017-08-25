export const CreatorConfigSchema: any = {
  $schema: "http://json-schema.org/draft-06/schema",

  additionalProperties: false,
  description: "MVW Creator configuration",
  properties: {
    ampPath: { type: "string" },
    destinationPath: { type: "string" },
    environment: { type: "string" },
    environments: {
      patternProperties: {
        "^[a-z]+$": {
          additionalProperties: true,
          properties: {
            baseUrl: { type: "string" }
          },
          type: "object"
        }
      },
      type: "object",
    },
    navigationPath: { type: "string" },
    pugPath: { type: "string" },
    siteTitle: { type: "string" },
    structureJsonPath: { type: "string" }
  },
  required: ["destinationPath", "environment", "environments", "pugPath", "structureJsonPath"],
  title: "JSON Schema for the MVW Creator configuration",
  type: "object"
};
